// 用 edge-tts 给每句台词配音：public/voice/<故事>/<指纹>.mp3，秒数写进 src/lib/voice-manifest.ts。
// 只配新的和改过的句子，可以随时中断再续；没人念的旧音频会删掉。
//   npm run voice                 全部故事
//   npm run voice -- earthrise    只配这几个
// 需要：python -m pip install edge-tts，以及 PATH 里的 ffmpeg / ffprobe；生成时要联网。
import { spawn } from "node:child_process";
import { existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { VOICE_CLIPS } from "../src/lib/voice-manifest.ts";
import { VOICES, clipKey } from "../src/lib/voice.ts";
import { STORIES } from "../src/stories/index.ts";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const manifestPath = join(root, "src/lib/voice-manifest.ts");
const voiceDir = join(root, "public/voice");
const parallel = 4;

function run(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, { stdio: ["ignore", "pipe", "pipe"] });
    let out = "";
    let err = "";
    child.stdout.on("data", (chunk) => { out += chunk; });
    child.stderr.on("data", (chunk) => { err += chunk; });
    child.on("error", reject);
    child.on("close", (code) => (code === 0 ? resolve(out) : reject(new Error(`${command} 退出码 ${code}: ${err.slice(-400)}`))));
  });
}

const clips = { ...VOICE_CLIPS };

function save() {
  const body = Object.entries(clips).sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `  ${JSON.stringify(k)}: ${v},`).join("\n");
  writeFileSync(manifestPath, [
    "// npm run voice 生成，别手改。key 对应 public/voice/<key>.mp3，值是秒数",
    `export const VOICE_CLIPS: Readonly<Record<string, number>> = {${body ? `\n${body}\n` : ""}};`,
    "",
  ].join("\n"));
}

const wanted = new Map(STORIES.flatMap((s) => s.lines.map((line) => [clipKey(s.id, line), line])));

for (const key of Object.keys(clips)) if (!wanted.has(key)) delete clips[key];
function sweep(dir) {
  if (!existsSync(dir)) return;
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) sweep(p);
    else if (e.name.endsWith(".mp3") && !wanted.has(relative(voiceDir, p).replace(/\\/g, "/").replace(/\.mp3$/, ""))) rmSync(p);
  }
}
sweep(voiceDir);

const only = new Set(process.argv.slice(2).filter((a) => !a.startsWith("-")));
const todo = [...wanted].filter(([key]) => {
  if (only.size && !only.has(key.split("/")[0])) return false;
  return !(key in clips) || !existsSync(join(voiceDir, `${key}.mp3`));
});
console.log(`需要配音 ${todo.length} 句（一共 ${wanted.size} 句）`);

const scratch = join(tmpdir(), "one-frame-voice");
mkdirSync(scratch, { recursive: true });

async function make(key, line) {
  const raw = join(scratch, `${key.replace(/\//g, "_")}.raw.mp3`);
  const out = join(voiceDir, `${key}.mp3`);
  mkdirSync(dirname(out), { recursive: true });
  const { voice, rate } = VOICES[line.who];
  for (let attempt = 1; ; attempt += 1) {
    try {
      await run("python", ["-m", "edge_tts", "--voice", voice, `--rate=${rate}`, "--text", line.say, "--write-media", raw]);
      break;
    } catch (error) {
      if (attempt >= 4) throw error;
      await new Promise((r) => setTimeout(r, 2000 * attempt));
    }
  }
  await run("ffmpeg", ["-y", "-v", "error", "-i", raw, "-ac", "1", "-ar", "24000", "-b:a", "32k", out]);
  rmSync(raw, { force: true });
  const seconds = Number((await run("ffprobe", ["-v", "error", "-show_entries", "format=duration", "-of", "csv=p=0", out])).trim());
  clips[key] = Math.round(seconds * 100) / 100;
}

let done = 0;
let failed = 0;
const queue = [...todo];
await Promise.all(Array.from({ length: parallel }, async () => {
  for (let item = queue.shift(); item; item = queue.shift()) {
    try {
      await make(...item);
      // 中途存一下，断了好续；Windows 上编辑器偶尔会锁住文件，存不上就等最后一起存
      try { save(); } catch { /* 最后还会再存 */ }
      done += 1;
      if (done % 20 === 0 || done === todo.length) console.log(`${done}/${todo.length}`);
    } catch (error) {
      failed += 1;
      console.error(`✖ ${item[0]}: ${error.message}`);
    }
  }
}));
for (let attempt = 1; ; attempt += 1) {
  try {
    save();
    break;
  } catch (error) {
    if (attempt >= 5) throw error;
    await new Promise((r) => setTimeout(r, 500 * attempt));
  }
}
console.log(failed ? `完成 ${done} 句，失败 ${failed} 句，再跑一次会只补失败的` : `全部完成：${done} 句`);
process.exitCode = failed ? 1 : 0;
