import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";
import { VOICE_CLIPS } from "../src/lib/voice-manifest.ts";
import { clipKey, clipUrl, lineHash } from "../src/lib/voice.ts";
import { STORIES } from "../src/stories/index.ts";

test("指纹只跟说话的人和台词有关", () => {
  const a = lineHash({ who: "dad", say: "你好" });
  assert.match(a, /^[0-9a-f]{8}$/);
  assert.equal(a, lineHash({ who: "dad", say: "你好" }));
  assert.notEqual(a, lineHash({ who: "nian", say: "你好" }));
  assert.notEqual(a, lineHash({ who: "dad", say: "你好。" }));
});

test("没配音的句子不给音频地址", () => {
  assert.equal(clipUrl("no-such-story", { who: "dad", say: "你好" }), undefined);
});

test("每句台词都配好了音，音频文件都在（改了台词要跑 npm run voice）", () => {
  const missing = STORIES.flatMap((s) => s.lines.map((l) => clipKey(s.id, l))).filter((k) => !(k in VOICE_CLIPS));
  assert.deepEqual(missing, []);
  for (const key of Object.keys(VOICE_CLIPS)) assert.ok(existsSync(`public/voice/${key}.mp3`), key);
});
