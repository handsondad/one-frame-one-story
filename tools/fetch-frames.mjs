// 从 Wikimedia Commons 下载故事用的图，转成 JPEG 放到 public/ 下，再做一张晾衣杆用的缩略图。
//
//   npm run frames              下载还没有的图，补齐缺的缩略图
//   npm run frames -- --force   全部重新下载
//   npm run frames -- <故事id>  只处理这几个故事
//
// 每个故事的 frame.commons 写 Commons 上的文件名（File:...），frame.src 写存到 public/ 下的哪里（.jpg）。
// 台词里用 show 换上的图也一起下载；缩略图只给故事的第一张图做。
// 需要 ffmpeg。Commons 的原图地址对脚本限流很严，所以一律下缩略图地址（宽度比原图小一点也行）。
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { STORIES } from "../src/stories/index.ts";
import { framesOf, thumbOf } from "../src/lib/view.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const WIDTH = 1400;
const THUMB = 420;
const HEADERS = { "User-Agent": "one-frame-one-story/0.1 (family storybook; https://commons.wikimedia.org) node-fetch" };

const args = process.argv.slice(2);
const force = args.includes("--force");
const only = args.filter((a) => !a.startsWith("--"));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function ffmpeg(input, output, width, quality, crop) {
  mkdirSync(dirname(output), { recursive: true });
  const scale = `scale='min(${width},iw)':-2`;
  const vf = crop ? `crop=iw*${crop.w}:ih*${crop.h}:iw*${crop.x}:ih*${crop.y},${scale}` : scale;
  execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", input, "-vf", vf, "-q:v", String(quality), output]);
}

/** API 也会限流，限流时回的是一句英文而不是 JSON，等一会儿再问 */
async function imageinfo(commons, params) {
  const url = `https://commons.wikimedia.org/w/api.php?format=json&action=query&prop=imageinfo&${params}`
    + `&titles=${encodeURIComponent(commons)}`;
  for (let attempt = 0; ; attempt++) {
    const res = await fetch(url, { headers: HEADERS });
    const text = await res.text();
    if (res.ok && text.startsWith("{")) return Object.values(JSON.parse(text).query.pages)[0].imageinfo?.[0];
    if (attempt >= 5) throw new Error(`Commons API 一直不回：${text.slice(0, 80)}`);
    console.log(`  API ${res.status}，${5 * (attempt + 1)} 秒后重试`);
    await sleep(5000 * (attempt + 1));
  }
}

async function download(commons, crop) {
  const size = await imageinfo(commons, "iiprop=size");
  if (!size) throw new Error(`Commons 上找不到 ${commons}`);
  // 只要一块时多下一些，裁完还有 WIDTH 宽
  const target = Math.round(WIDTH / (crop?.w ?? 1));
  const want = commons.toLowerCase().endsWith(".svg") ? target : Math.min(target, size.width - 1);
  const url = (await imageinfo(commons, `iiprop=url&iiurlwidth=${want}`)).thumburl;
  for (let attempt = 0; attempt < 4; attempt++) {
    const res = await fetch(url, { headers: HEADERS });
    if (res.ok && res.headers.get("content-type")?.startsWith("image/")) return Buffer.from(await res.arrayBuffer());
    console.log(`  ${res.status}，${3 * (attempt + 1)} 秒后重试`);
    await sleep(3000 * (attempt + 1));
  }
  throw new Error(`下载失败：${url}`);
}

for (const story of STORIES) {
  if (only.length && !only.includes(story.id)) continue;
  for (const { commons, src, crop } of framesOf(story)) {
    const out = join(root, "public", src);
    if (commons && (force || !existsSync(out))) {
      const tmp = join(tmpdir(), `frame-${story.id}`);
      writeFileSync(tmp, await download(commons, crop));
      ffmpeg(tmp, out, WIDTH, 3, crop);
      rmSync(tmp);
      console.log(`public/${src}  ←  ${commons}`);
      await sleep(1500);
    }
  }
  const { src } = story.frame;
  const out = join(root, "public", src);
  const thumb = thumbOf(src);
  if (thumb !== src && existsSync(out) && (force || !existsSync(join(root, "public", thumb)))) {
    ffmpeg(out, join(root, "public", thumb), THUMB, 4);
    console.log(`public/${thumb}`);
  }
}
