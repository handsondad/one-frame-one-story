// 检查「一图一故事」规则、图片缩略图、学科分布与每句长度。
// 用法：npm run check [-- <id> | --stats]
import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { framesOf, thumbOf } from "../src/lib/view.ts";
import { STORIES } from "../src/stories/index.ts";
import { staleIndex } from "./story-index.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const statsOnly = args.includes("--stats");
const onlyId = args.find((a) => !a.startsWith("-"));
const spotsOf = (look) => (!look || look === "all" ? [] : Array.isArray(look) ? look : [look]);

function printStats() {
  const byField = {};
  for (const s of STORIES) byField[s.field] = (byField[s.field] ?? 0) + 1;
  console.log(`共 ${STORIES.length} 个「一图一故事」`);
  console.log("学科 | " + Object.entries(byField).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k}:${v}`).join("  "));
}

printStats();
if (statsOnly) process.exit(0);

const targets = onlyId ? STORIES.filter((s) => s.id === onlyId) : STORIES;
if (onlyId && targets.length === 0) {
  console.error(`找不到故事：${onlyId}`);
  process.exit(1);
}

const errors = [];
const ids = STORIES.map((s) => s.id);
if (new Set(ids).size !== ids.length) errors.push("故事 id 存在重复");

for (const s of targets) {
  const fail = (m) => errors.push(`${s.id}: ${m}`);
  if (!/^[a-z0-9-]+$/.test(s.id)) fail("id 只能用小写字母、数字和短横线");
  for (const [i, f] of framesOf(s).entries()) {
    if (!existsSync(join(root, "public", f.src))) fail(`缺 public/${f.src}（跑 npm run frames -- ${s.id}）`);
    if (!f.by || !f.license || !f.alt) fail(`${f.src} 缺 by/license/alt`);
    if (i > 0 && !f.title) fail(`${f.src} 中途换上的图要写 title`);
    if (!/^https:\/\//.test(f.page)) fail(`${f.src} page 须为 https://`);
    if (f.kind === "示意图" && !f.note) fail(`${f.src} 示意图须写 note`);
  }
  const thumb = thumbOf(s.frame.src);
  if (!existsSync(join(root, "public", thumb))) fail(`缺 public/${thumb}（跑 npm run frames -- ${s.id}）`);
  if (!s.sources.length || s.sources.some((src) => !/^https:\/\//.test(src.url))) fail("sources 至少 1 条且均为 https://");

  const [first] = s.lines;
  if (!first || first.who !== "nian" || !first.part) fail("第一句必须由小念开口并写 part");
  if (s.lines.length < 16) fail(`只有 ${s.lines.length} 句，至少需要 16 句`);
  let pointed = 0;
  s.lines.forEach((l, i) => {
    if (!l.say.trim()) fail(`第 ${i + 1} 句为空`);
    if (l.say.length > 160) fail(`第 ${i + 1} 句 ${l.say.length} 字，超过 160 字`);
    for (const sp of spotsOf(l.look)) {
      pointed++;
      if (sp.x < 0 || sp.x > 1 || sp.y < 0 || sp.y > 1 || sp.r <= 0 || sp.r > 0.5) fail(`第 ${i + 1} 句 spot 坐标越界`);
    }
  });
  if (pointed < 2) fail("至少要在图上指两处 spot");
  if (!s.remember.trim() || s.facts.length < 3 || !s.teaser.trim() || !s.when.trim() || !s.people.length) fail("缺少 remember/facts/teaser/when/people");
}

// 晾衣杆读的是生成好的目录，故事改了要重新生成
try {
  const stale = staleIndex();
  if (stale.length) errors.push(`src/stories/${stale.join("、")} 过期了（跑 npm run story:index）`);
} catch (err) {
  errors.push(`生成目录失败：${err.message}`);
}

if (errors.length) {
  console.error("\n❌ 检查未通过：");
  for (const e of errors) console.error("  • " + e);
  process.exit(1);
}
console.log(`\n✔ 检查通过（${targets.length} 个故事）`);
