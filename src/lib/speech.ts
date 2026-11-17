import type { Speaker } from "../stories/types.ts";

/** 浏览器自带的朗读（Web Speech API）。各平台的中文声音不一样，按名字挑，挑不到就用音调区分 */
const PREFER: Record<Speaker, RegExp> = {
  dad: /Yunxi(?!a)|Yunjian|Yunyang|Kangkang|Yunhao/i,
  nian: /Yunxia|Xiaoyi|Xiaoxiao|Yaoyao|Huihui|Xiaoxuan/i,
};
const TUNE: Record<Speaker, { pitch: number; rate: number }> = {
  dad: { pitch: 0.95, rate: 0.95 },
  nian: { pitch: 1.3, rate: 1.02 },
};

export const canSpeak = () => typeof window !== "undefined" && "speechSynthesis" in window;

function voiceFor(who: Speaker): SpeechSynthesisVoice | undefined {
  const zh = speechSynthesis.getVoices().filter((v) => /^zh(-|_)?(CN|Hans)?/i.test(v.lang));
  return zh.find((v) => PREFER[who].test(v.name) && /Online|Natural/i.test(v.name))
    ?? zh.find((v) => PREFER[who].test(v.name))
    ?? zh[0];
}

/** 念一句；有配好的音频就放音频，放不了再用浏览器朗读。念完时调 onEnd，返回停止函数 */
export function speak(who: Speaker, text: string, onEnd: () => void, clip?: string): () => void {
  if (!clip) return synth(who, text, onEnd);
  const audio = new Audio(clip);
  let stopped = false;
  let stopSynth = () => {};
  const fallback = () => {
    if (!stopped) stopSynth = synth(who, text, onEnd);
  };
  audio.onended = () => {
    if (!stopped) onEnd();
  };
  audio.onerror = fallback;
  audio.play().catch((err: unknown) => {
    // 用户还没跟页面互动过时浏览器不让自动放声音，这种情况朗读也一样放不了，就停在这句
    if (!(err instanceof DOMException && err.name === "NotAllowedError")) fallback();
  });
  return () => {
    stopped = true;
    audio.pause();
    stopSynth();
  };
}

function synth(who: Speaker, text: string, onEnd: () => void): () => void {
  if (!canSpeak()) {
    onEnd();
    return () => {};
  }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  const voice = voiceFor(who);
  if (voice) u.voice = voice;
  u.lang = voice?.lang ?? "zh-CN";
  u.pitch = TUNE[who].pitch;
  u.rate = TUNE[who].rate;
  let done = false;
  const finish = () => {
    if (done) return;
    done = true;
    onEnd();
  };
  u.onend = finish;
  u.onerror = finish;
  speechSynthesis.speak(u);
  return () => {
    done = true;
    speechSynthesis.cancel();
  };
}
