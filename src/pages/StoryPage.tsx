import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FrameStage } from "../components/FrameStage.tsx";
import { canSpeak, speak } from "../lib/speech.ts";
import { framesOf, resolveFrames, resolveLooks } from "../lib/view.ts";
import { clipUrl } from "../lib/voice.ts";
import { yearText } from "../lib/year.ts";
import { STORIES } from "../stories/index.ts";
import type { Speaker, Story } from "../stories/types.ts";

const NAME: Record<Speaker, string> = { nian: "小念", dad: "爸爸" };
/** 自动念的时候，一句念完停一下再接下一句 */
const PAUSE = 650;

export function StoryPage({ story, initialStep }: { story: Story; initialStep: number }) {
  const looks = useMemo(() => resolveLooks(story.lines), [story]);
  const frames = useMemo(() => resolveFrames(story.frame, story.lines), [story]);
  const allFrames = useMemo(() => framesOf(story), [story]);
  const last = story.lines.length - 1;
  const [step, setStep] = useState(initialStep);
  /** 点了前面某一句，图上就回到那一句指的地方，但不往回退 */
  const [pinned, setPinned] = useState<number | null>(null);
  const [listening, setListening] = useState(false);
  const shownLine = pinned ?? step;
  const frame = frames[shownLine];
  const done = step >= last;
  const hasClips = useMemo(() => story.lines.some((l) => clipUrl(story.id, l)), [story]);

  useEffect(() => {
    history.replaceState(null, "", `#/story/${story.id}/${step + 1}`);
  }, [story.id, step]);

  const go = useCallback((to: number) => {
    setPinned(null);
    setStep(Math.max(0, Math.min(last, to)));
  }, [last]);

  // 自动念：念完一句，停一下，翻到下一句；最后一句念完就停
  useEffect(() => {
    if (!listening) return;
    const line = story.lines[step];
    let timer = 0;
    const stop = speak(line.who, line.say, () => {
      if (step >= last) setListening(false);
      else timer = window.setTimeout(() => go(step + 1), PAUSE);
    }, clipUrl(story.id, line));
    return () => {
      stop();
      clearTimeout(timer);
    };
  }, [listening, step, story, last, go]);
  useEffect(() => () => {
    if (canSpeak()) speechSynthesis.cancel();
  }, []);

  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLElement && e.target.closest("a, input, textarea, summary")) return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(step + 1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(step - 1);
      }
    };
    addEventListener("keydown", on);
    return () => removeEventListener("keydown", on);
  }, [go, step]);

  // 新冒出来的一句滚到看得见的地方
  const latest = useRef<HTMLLIElement>(null);
  const mounted = useRef(false);
  useEffect(() => {
    if (!mounted.current) scrollTo(0, 0);
    latest.current?.scrollIntoView({ behavior: mounted.current ? "smooth" : "auto", block: "nearest" });
    mounted.current = true;
  }, [step]);

  const index = STORIES.findIndex((s) => s.id === story.id);
  const prev = STORIES[index - 1];
  const next = STORIES[index + 1];

  return (
    <div className="app story-page" data-snap data-lines={story.lines.length}>
      <nav className="topbar">
        <a className="back" href="#/">← 回到晾衣杆</a>
        <span className="topbar-title"><span className="yr">{yearText(story)}</span>{story.frameName}</span>
        {(canSpeak() || hasClips) && (
          <button type="button" className={listening ? "btn play small on" : "btn play small"} aria-pressed={listening}
            onClick={() => setListening((v) => !v)}>
            {listening ? "■ 停下" : "▶ 听故事"}
          </button>
        )}
      </nav>

      <div className="story-grid">
        <section className="stage-col" aria-label="这张图">
          <FrameStage key={frame.src} frame={frame} spots={looks[shownLine]} />
          <p className="frame-caption">
            {frame === story.frame
              ? <><strong>{story.frameName}</strong> · {story.when}</>
              : <strong>{frame.title}</strong>}
            {" "}· {frame.kind} · {frame.by}
          </p>
          {frame.note && <p className="frame-note">{frame.note}</p>}
        </section>

        <section className="talk-col" aria-label="小念和爸爸的对话">
          <header className="talk-head">
            <p className="talk-kicker">{story.field} · {story.people.join(" · ")}</p>
            <h1>{story.title}</h1>
          </header>

          <ol className="talk">
            {story.lines.slice(0, step + 1).map((line, i) => (
              <li key={i} ref={i === step ? latest : undefined}>
                {line.part && <h2 className="part"><span>{line.part}</span></h2>}
                <button type="button"
                  className={`say ${line.who}${i === shownLine ? " current" : ""}${looks[i].length ? " points" : ""}`}
                  onClick={() => (i === step ? go(step + 1) : setPinned(i === pinned ? null : i))}
                  aria-label={`${NAME[line.who]}：${line.say}`}>
                  <span className="who" aria-hidden="true">{NAME[line.who].slice(-1)}</span>
                  <span className="bubble">
                    <span className="name">{NAME[line.who]}</span>
                    <span className="text">{line.say}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>

          {done && (
            <div className="ending">
              <section className="remember">
                <h2>一句话记住</h2>
                <p>{story.remember}</p>
              </section>
              <section className="facts">
                <h2>这张图的小档案</h2>
                <dl>
                  {story.facts.map(([k, v]) => (
                    <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
                  ))}
                  <div>
                    <dt>图片许可</dt>
                    <dd>
                      {allFrames.length === 1
                        ? story.frame.license
                        : allFrames.map((f) => `${f === story.frame ? story.frameName : f.title}：${f.license}`).join("；")}
                    </dd>
                  </div>
                </dl>
                <h3>想知道更多</h3>
                <ul className="sources">
                  {story.sources.map((s) => (
                    <li key={s.url}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a></li>
                  ))}
                </ul>
              </section>
              <nav className="story-nav">
                {prev ? <a className="btn ghost" href={`#/story/${prev.id}`}>← {yearText(prev)} {prev.frameName}</a> : <span />}
                {next ? <a className="btn" href={`#/story/${next.id}`}>{yearText(next)} {next.frameName} →</a> : <a className="btn" href="#/">回到晾衣杆</a>}
              </nav>
            </div>
          )}

          <div className="controls">
            <button type="button" className="btn ghost" onClick={() => go(step - 1)} disabled={step === 0}>上一句</button>
            <span className="progress" aria-live="polite">{step + 1} / {story.lines.length}</span>
            {done
              ? <button type="button" className="btn ghost" onClick={() => go(0)}>从头再看</button>
              : <button type="button" className="btn" onClick={() => go(step + 1)}>下一句</button>}
            <button type="button" className="link-btn" onClick={() => go(last)} disabled={done}>全部展开</button>
          </div>
        </section>
      </div>
    </div>
  );
}
