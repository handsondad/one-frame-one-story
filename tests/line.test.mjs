import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { centuryName, centuryNote, centuryOf, yearText } from "../src/lib/year.ts";
import { groupsOf, layout, slotsOf, WIDE } from "../src/pages/line.ts";
import { STORIES } from "../src/stories/index.ts";
import { CHARS_FILE, needsStoryFont } from "../tools/font.mjs";

test("按学科、按年代分组：每张图正好在一组里，组内从早到晚", () => {
  for (const mode of ["field", "era"]) {
    const groups = groupsOf(STORIES, mode);
    const ids = groups.flatMap((g) => g.stories.map((s) => s.id));
    assert.equal(ids.length, STORIES.length, mode);
    assert.equal(new Set(ids).size, STORIES.length, mode);
    for (const g of groups) assert.deepEqual(g.stories.map((s) => s.year), [...g.stories.map((s) => s.year)].sort((a, b) => a - b));
  }
  for (const g of groupsOf(STORIES, "era")) {
    const c = centuryOf(g.stories[0].year);
    assert.equal(g.name, centuryName(c));
    assert.ok(g.stories.every((s) => centuryOf(s.year) === c), g.name);
  }
});

test("年份：公元前、约数和世纪", () => {
  assert.equal(yearText({ year: 1904 }), "1904");
  assert.equal(yearText({ year: -196 }), "公元前 196");
  assert.equal(yearText({ year: 1100, circa: true }), "约 1100");
  assert.deepEqual([1, 100, 101, 1904, 2000, 2001].map(centuryOf), [1, 1, 2, 20, 20, 21]);
  assert.deepEqual([-1, -100, -101, -196].map(centuryOf), [-1, -1, -2, -2]);
  assert.equal(centuryName(-2), "公元前 2 世纪");
  assert.equal(centuryNote(-2), "公元前 200—前 101 年");
  assert.equal(centuryNote(20), "1901—2000 年");
});

test("一开始只挂分类牌；打开一类只挂这一类的图", () => {
  const groups = groupsOf(STORIES, "field");
  assert.ok(slotsOf(groups, null).every((s) => s.kind === "tag"));
  const open = groups[0];
  const slots = slotsOf(groups, open.key);
  assert.equal(slots.filter((s) => s.kind === "banner").length, 1);
  assert.deepEqual(slots.filter((s) => s.kind === "print").map((s) => s.story.id), open.stories.map((s) => s.id));
  assert.equal(slots.filter((s) => s.kind === "tag").length, groups.length - 1);
});

test("挂件从左到右不重叠，框比绳子宽时把绳子拉满", () => {
  const slots = slotsOf(groupsOf(STORIES, "field"), null);
  const natural = layout(slots, WIDE).width;
  assert.equal(layout(slots, WIDE, natural - 100).width, natural, "框比绳子窄时绳子不缩");
  const { items, width } = layout(slots, WIDE, natural + 300);
  assert.equal(width, natural + 300);
  for (let i = 1; i < items.length; i++) {
    assert.ok(items[i].x - items[i].w / 2 >= items[i - 1].x + items[i - 1].w / 2 + WIDE.gap - 1e-9);
  }
});

test("网站上的每个汉字都在截好的字体里（加了新字要跑 npm run font）", () => {
  const font = new Set(readFileSync(CHARS_FILE, "utf8"));
  const text = STORIES.map((s) => JSON.stringify(s)).join("");
  const missing = [...new Set([...text].filter((ch) => needsStoryFont(ch) && !font.has(ch)))];
  assert.deepEqual(missing, []);
});
