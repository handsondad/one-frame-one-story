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

/** 下一句的音频先下着；轮到它时直接拿来放 */
let upcoming: { url: string; audio: HTMLAudioElement } | null = null;

export function preloadClip(url: string) {
  if (upcoming?.url === url) return;
  const audio = new Audio();
  audio.preload = "auto";
  audio.src = url;
  upcoming = { url, audio };
}

function audioFor(url: string): HTMLAudioElement {
  if (upcoming?.url === url) {
    const { audio } = upcoming;
    upcoming = null;
    return audio;
  }
  return new Audio(url);
}

/**
 * 念一句；有配好的音频就放音频，放不了再用浏览器朗读。念完时调 onEnd，返回停止函数。
 * 浏览器不让放声音（用户还没跟页面互动过）时调 onBlocked
 */
export function speak(who: Speaker, text: string, onEnd: () => void, clip?: string, onBlocked?: () => void): () => void {
  if (!clip) return synth(who, text, onEnd);
  const audio = audioFor(clip);
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
    // 这种情况朗读也一样放不了，就停在这句，让按钮变回「听故事」
    if (!(err instanceof DOMException && err.name === "NotAllowedError")) fallback();
    else if (!stopped) onBlocked?.();
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
