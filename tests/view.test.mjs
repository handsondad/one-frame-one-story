import assert from "node:assert/strict";
import { test } from "node:test";
import { framesOf, MAX_ZOOM, pointingSteps, resolveFrames, resolveLooks, thumbOf, viewFor } from "../src/lib/view.ts";

const a = { x: 0.2, y: 0.2, r: 0.05 };
const b = { x: 0.8, y: 0.7, r: 0.05 };

test("没写 look 就接着指上一句；all 退回整张图；新的一段从整张图开始", () => {
  const looks = resolveLooks([
    { who: "nian", say: "1", part: "一" },
    { who: "dad", say: "2", look: a },
    { who: "nian", say: "3" },
    { who: "dad", say: "4", look: [a, b] },
    { who: "nian", say: "5", look: "all" },
    { who: "dad", say: "6", look: b },
    { who: "nian", say: "7", part: "二" },
    { who: "dad", say: "8", part: "三", look: a },
  ]);
  assert.deepEqual(looks, [[], [a], [a], [a, b], [], [b], [], [a]]);
});

test("从故事的第一张图开始，遇到 show 就换，换了就一直用到下一次换", () => {
  const p = { src: "p.jpg" };
  const q = { src: "q.jpg" };
  const lines = [
    { who: "nian", say: "1", part: "一" },
    { who: "dad", say: "2", show: q },
    { who: "nian", say: "3", part: "二" },
    { who: "dad", say: "4", show: p },
    { who: "nian", say: "5", show: q },
  ];
  assert.deepEqual(resolveFrames(p, lines).map((f) => f.src), ["p.jpg", "q.jpg", "q.jpg", "p.jpg", "q.jpg"]);
  assert.deepEqual(framesOf({ frame: p, lines }).map((f) => f.src), ["p.jpg", "q.jpg"]);
});

test("要核对的句子：指了圈或换了图的那几句", () => {
  const lines = [
    { who: "nian", say: "1", part: "一", look: a },
    { who: "dad", say: "2" },
    { who: "nian", say: "3", look: "all" },
    { who: "dad", say: "4", show: { src: "q.jpg" } },
    { who: "nian", say: "5", look: [a, b] },
  ];
  assert.deepEqual(pointingSteps(lines), [1, 4, 5]);
});

test("不指哪儿就是整张图", () => {
  assert.deepEqual(viewFor([], 1.2), { scale: 1, x: 0, y: 0 });
});

test("小圈放大但不超过上限，图片边缘不露进画面", () => {
  for (const aspect of [0.6, 1, 1.6]) {
    for (const s of [a, b, { x: 0, y: 0, r: 0.02 }, { x: 1, y: 1, r: 0.02 }]) {
      const v = viewFor([s], aspect);
      assert.ok(v.scale >= 1 && v.scale <= MAX_ZOOM);
      assert.ok(v.x <= 0 && v.x >= 1 - v.scale - 1e-9, `x=${v.x}`);
      assert.ok(v.y <= 0 && v.y >= 1 - v.scale - 1e-9, `y=${v.y}`);
    }
  }
});

test("圈在中间时放大后还在画面正中", () => {
  const v = viewFor([{ x: 0.5, y: 0.5, r: 0.1 }], 1);
  assert.ok(Math.abs(v.x + (v.scale - 1) / 2) < 1e-9);
  assert.ok(Math.abs(v.y + (v.scale - 1) / 2) < 1e-9);
});

test("大圈或分得很开的几个圈不放大", () => {
  assert.equal(viewFor([{ x: 0.5, y: 0.5, r: 0.4 }], 1).scale, 1);
  assert.equal(viewFor([{ x: 0.1, y: 0.1, r: 0.05 }, { x: 0.9, y: 0.9, r: 0.05 }], 1).scale, 1);
});

test("zoom 可以指定放大倍数，越过自动上限", () => {
  assert.equal(viewFor([{ x: 0.76, y: 0.56, r: 0.03, zoom: 4 }], 1.35).scale, 4);
});

test("缩略图路径", () => {
  assert.equal(thumbOf("frames/a.jpg"), "frames/thumbs/a.jpg");
  assert.equal(thumbOf("frames/a.svg"), "frames/a.svg");
});
