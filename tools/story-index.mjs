// 从完整故事算出网页先要用的几份小清单，写进 src/stories/：
//   catalog.json  晾衣绳和故事页翻页用的目录（名字、年份、学科、一句话简介、缩略图）——首页只加载这一份，不用把 66 个故事的台词全背上
//   credits.json  「图片从哪里来」的署名，点开才加载
//   aspects.json  每张图的高 / 宽，图还没下完就能把框摆成对的形状，不会先方后扁地跳一下
// 加了故事、改了简介或换了图以后跑：npm run story:index（npm run check 和 npm test 会查是否过期）
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { framesOf } from "../src/lib/view.ts";
import { STORIES } from "../src/stories/index.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
export const INDEX_DIR = join(root, "src/stories");

/** JPEG 的宽高在 SOF 段里；SVG 看 viewBox */
export function aspectOf(file) {
  const buf = readFileSync(file);
  if (file.endsWith(".svg")) {
    const box = /viewBox="\s*[-\d.]+[\s,]+[-\d.]+[\s,]+([\d.]+)[\s,]+([\d.]+)\s*"/.exec(buf.toString("utf8"));
    if (!box) throw new Error(`${file} 没有 viewBox`);
    return Number(box[2]) / Number(box[1]);
  }
  for (let i = 2; i + 9 < buf.length;) {
    if (buf[i] !== 0xff) throw new Error(`${file} 不是能读的 JPEG`);
    const marker = buf[i + 1];
    const len = buf.readUInt16BE(i + 2);
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
      return buf.readUInt16BE(i + 5) / buf.readUInt16BE(i + 7);
    }
    i += 2 + len;
  }
  throw new Error(`${file} 里找不到图片尺寸`);
}

/** 一项一行：好读，改一个故事只动一行 */
const lines = (items) => `[\n${items.map((it) => `  ${JSON.stringify(it)}`).join(",\n")}\n]\n`;

export function buildIndex() {
  const catalog = STORIES.map((s) => ({
    id: s.id, title: s.title, frameName: s.frameName, year: s.year, ...(s.circa ? { circa: true } : {}),
    when: s.when, field: s.field, people: s.people, teaser: s.teaser, frame: { src: s.frame.src, alt: s.frame.alt },
  }));
  const credits = STORIES.flatMap((s) => framesOf(s).map((f) => ({
    src: f.src, name: f === s.frame ? s.frameName : f.title, year: s.year, ...(s.circa ? { circa: true } : {}),
    by: f.by, license: f.license, page: f.page,
  })));
  const aspects = Object.fromEntries(STORIES.flatMap(framesOf).map((f) => [f.src, Math.round(aspectOf(join(root, "public", f.src)) * 1e4) / 1e4]));
  return {
    "catalog.json": lines(catalog),
    "credits.json": lines(credits),
    "aspects.json": `{\n${Object.entries(aspects).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => `  ${JSON.stringify(k)}: ${v}`).join(",\n")}\n}\n`,
  };
}

/** 磁盘上过期了的文件名；行尾按 LF 比，Windows 检出成 CRLF 也不算过期 */
export function staleIndex() {
  return Object.entries(buildIndex()).filter(([name, body]) => {
    try {
      return readFileSync(join(INDEX_DIR, name), "utf8").replace(/\r\n/g, "\n") !== body;
    } catch {
      return true;
    }
  }).map(([name]) => name);
}

const entry = process.argv[1] && pathToFileURL(resolve(process.argv[1])).href;
if (entry === import.meta.url) {
  for (const [name, body] of Object.entries(buildIndex())) writeFileSync(join(INDEX_DIR, name), body);
  console.log(`已写入 src/stories/catalog.json、credits.json、aspects.json（${STORIES.length} 个故事）`);
}
