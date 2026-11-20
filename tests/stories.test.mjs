import assert from "node:assert/strict";
import { existsSync, readdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { framesOf, thumbOf } from "../src/lib/view.ts";
import { STORIES } from "../src/stories/index.ts";
import { INDEX_DIR, staleIndex } from "../tools/story-index.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const spotsOf = (look) => (!look || look === "all" ? [] : Array.isArray(look) ? look : [look]);

test("故事 id 唯一，只用小写字母、数字和短横线", () => {
  const ids = STORIES.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const id of ids) assert.match(id, /^[a-z0-9-]+$/);
});

test("晾衣杆从早到晚排", () => {
  const years = STORIES.map((s) => s.year);
  assert.deepEqual(years, [...years].sort((a, b) => a - b));
});

test("网页读的目录（src/stories/*.json）是最新的", () => {
  assert.deepEqual(staleIndex(), [], "跑 npm run story:index");
});

// 网页按文件名去下故事（src/stories/load.ts），文件名必须就是 id
test("每个故事文件名都是它的 id，而且都登记了", async () => {
  const helpers = ["index.ts", "types.ts", "lines.ts", "load.ts", "catalog.ts"];
  const files = readdirSync(INDEX_DIR).filter((f) => f.endsWith(".ts") && !helpers.includes(f));
  for (const f of files) {
    const mod = await import(pathToFileURL(join(INDEX_DIR, f)).href);
    const id = f.slice(0, -3);
    assert.ok(Object.values(mod).some((v) => v?.id === id && Array.isArray(v.lines)), `${f} 里没有 id 为 ${id} 的故事`);
  }
  assert.deepEqual(files.map((f) => f.slice(0, -3)).sort(), STORIES.map((s) => s.id).sort());
});

for (const story of STORIES) {
  test(`${story.id}：图片和缩略图都在 public/ 下`, () => {
    for (const { src } of framesOf(story)) assert.ok(existsSync(join(root, "public", src)), `缺 public/${src}，跑 npm run frames`);
    const thumb = thumbOf(story.frame.src);
    assert.ok(existsSync(join(root, "public", thumb)), `缺 public/${thumb}，跑 npm run frames`);
  });

  test(`${story.id}：图片来源写清楚`, () => {
    for (const [i, frame] of framesOf(story).entries()) {
      assert.ok(frame.by && frame.license && frame.alt, `${frame.src}：要写 by、license、alt`);
      if (i > 0) assert.ok(frame.title, `${frame.src}：中途换上的图要写 title`);
      assert.match(frame.page, /^https:\/\//);
      if (frame.commons) assert.match(frame.commons, /^File:/);
      if (frame.kind === "示意图") assert.ok(frame.note, "示意图要在 note 里说明是怎么画的");
    }
    assert.ok(story.sources.length > 0, "至少一条参考资料");
    for (const s of story.sources) assert.match(s.url, /^https:\/\//, s.title);
  });

  test(`${story.id}：从看图开始，小念先开口`, () => {
    const [first] = story.lines;
    assert.equal(first.who, "nian");
    assert.ok(first.part, "第一句要开一段");
  });

  test(`${story.id}：小念和爸爸都说话，每句不空也不太长`, () => {
    assert.ok(story.lines.length >= 16, "太短了");
    assert.ok(story.lines.some((l) => l.who === "nian"));
    assert.ok(story.lines.some((l) => l.who === "dad"));
    for (const [i, l] of story.lines.entries()) {
      assert.ok(l.say.trim(), `第 ${i + 1} 句是空的`);
      assert.ok(l.say.length <= 160, `第 ${i + 1} 句 ${l.say.length} 个字，拆成两句`);
    }
  });

  test(`${story.id}：圈都在图里面`, () => {
    let pointed = 0;
    for (const [i, l] of story.lines.entries()) {
      for (const s of spotsOf(l.look)) {
        pointed++;
        const where = `第 ${i + 1} 句`;
        assert.ok(s.x >= 0 && s.x <= 1 && s.y >= 0 && s.y <= 1, `${where}：圈心要在 0~1 之间`);
        assert.ok(s.r > 0 && s.r <= 0.5, `${where}：半径要在 0~0.5 之间`);
        if (s.zoom !== undefined) assert.ok(s.zoom >= 1 && s.zoom <= 6, `${where}：zoom 在 1~6 之间`);
      }
    }
    assert.ok(pointed >= 2, "故事是从图讲起的，至少要在图上指两处");
  });

  test(`${story.id}：结尾有一句话记住和小档案`, () => {
    assert.ok(story.remember.trim());
    assert.ok(story.facts.length >= 3);
    assert.ok(story.teaser.trim() && story.when.trim() && story.people.length);
  });
}
