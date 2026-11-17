import type { Line, Speaker } from "../stories/types.ts";
import { VOICE_CLIPS } from "./voice-manifest.ts";

/** edge-tts 的声音，和 storyverse 里的小念、爸爸是同一副嗓子 */
export const VOICES: Record<Speaker, { readonly voice: string; readonly rate: string }> = {
  nian: { voice: "zh-CN-YunxiaNeural", rate: "+0%" },
  dad: { voice: "zh-CN-YunxiNeural", rate: "-5%" },
};

/** 声音和台词的指纹：改了台词或换了声音，指纹就变，要重新配 */
export function lineHash(line: Pick<Line, "who" | "say">): string {
  const v = VOICES[line.who];
  const s = `${v.voice}|${v.rate}|${line.say}`;
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193);
  }
  return (h >>> 0).toString(16).padStart(8, "0");
}

/** public/voice/ 下面的路径，不带 .mp3 */
export const clipKey = (storyId: string, line: Pick<Line, "who" | "say">) => `${storyId}/${lineHash(line)}`;

/** 配好了就返回音频地址，没配就返回 undefined（退回浏览器朗读） */
export function clipUrl(storyId: string, line: Pick<Line, "who" | "say">): string | undefined {
  const key = clipKey(storyId, line);
  return key in VOICE_CLIPS ? `voice/${key}.mp3` : undefined;
}
