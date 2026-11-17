// 和 storyverse 用同一套字：站酷快乐体。从完整字库里只截出网站用到的字，生成 public/fonts/story.woff。
// 完整字库 1.5 MB，截完一般一两百 KB。故事或页面加了新字，就重跑一次：npm run font
//
// 需要 Python 和 fontTools：python -m pip install fonttools
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const cacheDir = join(root, "tools/.cache");
const source = join(cacheDir, "ZCOOLKuaiLe-Regular.ttf");
const base = "https://github.com/google/fonts/raw/main/ofl/zcoolkuaile";
const outDir = join(root, "public/fonts");
export const CHARS_FILE = join(outDir, "story-chars.txt");

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (/\.(ts|tsx|css|html)$/.test(name)) out.push(p);
  }
  return out;
}

/** 中日韩文字和全角标点要靠站酷快乐体；英文、数字、表情符号交给系统字体也不会出方框 */
export const needsStoryFont = (ch) => {
  const code = ch.codePointAt(0);
  return (code >= 0x3000 && code <= 0x9fff) || (code >= 0xff00 && code <= 0xffef);
};

export function collect() {
  const set = new Set();
  for (let c = 0x20; c < 0x7f; c++) set.add(String.fromCharCode(c));
  for (const ch of "，。！？、：；“”‘’（）《》…—·～「」【】") set.add(ch);
  for (const file of [...walk(join(root, "src")), join(root, "index.html")]) {
    for (const ch of readFileSync(file, "utf8")) if (needsStoryFont(ch)) set.add(ch);
  }
  return [...set].sort().join("");
}

async function fetchTo(url, path) {
  console.log(`下载 ${url}`);
  const res = await fetch(url);
  if (!res.ok) throw new Error(`下载失败：${res.status}`);
  writeFileSync(path, Buffer.from(await res.arrayBuffer()));
}

async function main() {
  mkdirSync(cacheDir, { recursive: true });
  if (!existsSync(source)) await fetchTo(`${base}/ZCOOLKuaiLe-Regular.ttf`, source);
  const ofl = join(cacheDir, "OFL.txt");
  if (!existsSync(ofl)) await fetchTo(`${base}/OFL.txt`, ofl);
  mkdirSync(outDir, { recursive: true });
  copyFileSync(ofl, join(outDir, "OFL.txt"));
  const chars = collect();
  writeFileSync(CHARS_FILE, chars);
  execFileSync("python", [
    "-m", "fontTools.subset", source,
    `--text-file=${CHARS_FILE}`, "--flavor=woff", `--output-file=${join(outDir, "story.woff")}`,
    "--layout-features=*",
  ], { stdio: "inherit" });
  const size = statSync(join(outDir, "story.woff")).size;
  console.log(`${[...chars].length} 个字 → public/fonts/story.woff（${(size / 1024).toFixed(0)} KB）`);
}

const entry = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href;
if (entry === import.meta.url) {
  main().catch((err) => {
    console.error(err.message);
    process.exit(1);
  });
}
