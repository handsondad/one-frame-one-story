import { useEffect, useMemo, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { thumbOf } from "../lib/view.ts";
import { yearText } from "../lib/year.ts";
import { CARDS as STORIES, type Credit, type StoryCard as Story } from "../stories/catalog.ts";
import { prefetchStory } from "./story-loader.ts";
import { groupsOf, layout, NARROW, slotKey, slotsOf, WIDE, type Group, type Mode } from "./line.ts";
import { useDragScroll } from "./useDragScroll.ts";

/** 从故事页回来时，绳子还是原来的样子 */
const memory: { mode: Mode; open: string | null; picked: string | null } = { mode: "field", open: null, picked: null };

const MODES: { id: Mode; label: string }[] = [
  { id: "field", label: "🗂️ 按学科" },
  { id: "era", label: "🕰️ 按年代" },
];

const tone = (g: Group) => ({ "--c": g.color }) as CSSProperties;

export function LinePage() {
  const scroller = useRef<HTMLDivElement>(null);
  useDragScroll(scroller);
  const [room, setRoom] = useState(0);
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    // 少给两个像素，免得小数取整后多出一截能滑的地方
    const ro = new ResizeObserver(() => setRoom(Math.max(0, el.clientWidth - 2)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const size = room && room < 600 ? NARROW : WIDE;

  const [mode, setMode] = useState(memory.mode);
  const [open, setOpen] = useState(memory.open);
  const groups = useMemo(() => groupsOf(STORIES, mode), [mode]);
  const slots = useMemo(() => slotsOf(groups, open), [groups, open]);
  const { items, width } = useMemo(() => layout(slots, size, room), [slots, size, room]);
  const keys = slots.map(slotKey);
  const rowH = open ? size.rowH : size.rowTags;

  const [picked, setPicked] = useState(memory.picked);
  const [peek, setPeek] = useState<string | null>(null);
  const chosen = picked && keys.includes(picked) ? picked : keys[0];
  const shown = peek ?? chosen;
  useEffect(() => {
    Object.assign(memory, { mode, open, picked });
  }, [mode, open, picked]);

  // 打开一类时，把那面旗挪到左边，后面的图顺着往右排
  useEffect(() => {
    const el = scroller.current;
    const banner = items.find((it) => it.slot.kind === "banner");
    if (!el) return;
    el.scrollTo({ left: banner ? Math.max(0, banner.x - banner.w / 2 - size.pad) : 0, behavior: document.body.classList.contains("snap") ? "auto" : "smooth" });
    // 只在换了打开的类时挪，窗口变宽变窄不挪
  }, [open, mode]);

  const toggle = (g: Group) => {
    setOpen((o) => (o === g.key ? null : g.key));
    setPicked(`g:${g.key}`);
  };
  const switchMode = (m: Mode) => {
    setMode(m);
    setOpen(null);
    setPicked(null);
    setPeek(null);
  };
  const pickOrOpen = (s: Story) => {
    if (chosen === `s:${s.id}`) location.hash = `#/story/${s.id}`;
    else setPicked(`s:${s.id}`);
  };

  const onKey = (e: KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    const next = keys[keys.indexOf(chosen) + (e.key === "ArrowLeft" ? -1 : 1)];
    if (!next) return;
    e.preventDefault();
    setPicked(next);
    const el = document.getElementById(`slot-${next}`);
    el?.focus();
    el?.scrollIntoView({ inline: "nearest", block: "nearest" });
  };

  const slotProps = (key: string) => ({
    id: `slot-${key}`,
    role: "option",
    "aria-selected": key === chosen,
    tabIndex: key === chosen ? 0 : -1,
    "data-on": key === shown || undefined,
    onMouseEnter: () => setPeek(key),
    onFocus: () => setPicked(key),
  });
  const rope = `M ${size.pad / 2},${size.top} Q ${width / 2},${size.top + size.sag * 2} ${width - size.pad / 2},${size.top}`;
  const shownGroup = shown?.startsWith("g:") ? groups.find((g) => `g:${g.key}` === shown) : undefined;
  const shownStory = shown?.startsWith("s:") ? STORIES.find((s) => `s:${s.id}` === shown) : undefined;
  const openGroup = groups.find((g) => g.key === open);

  return (
    <div className="app line-page" data-snap>
      <header className="hero">
        <h1>一图一故事</h1>
        <p>小念和爸爸，从一张图聊到一段传奇：科学、历史、艺术……</p>
      </header>

      <section className={size === NARROW ? "line compact" : "line"} aria-label="晾衣绳">
        <div className="line-bar">
          <div className="modes" role="tablist" aria-label="绳子怎么挂">
            {MODES.map((m) => (
              <button key={m.id} role="tab" aria-selected={mode === m.id} onClick={() => switchMode(m.id)}>{m.label}</button>
            ))}
          </div>
          <nav className="crumbs" aria-label="现在打开的一类">
            <button className={openGroup ? "" : "here"} onClick={() => { setOpen(null); setPicked(null); }}>全部 {STORIES.length} 张</button>
            {openGroup && (
              <>
                <span className="sep" aria-hidden="true">›</span>
                <button className="here" style={tone(openGroup)} onClick={() => setPicked(`g:${openGroup.key}`)}>
                  {openGroup.icon} {openGroup.name}
                </button>
              </>
            )}
          </nav>
        </div>

        <div className="line-scroll" ref={scroller}>
          <div className="line-track" style={{ width, height: rowH }} onMouseLeave={() => setPeek(null)}>
            <svg className="rope" width={width} height={size.top + size.sag + 20} aria-hidden="true">
              <path d={rope} />
            </svg>
            <span className="pole" style={{ left: size.pad / 2 - 9, height: rowH - 24 }} aria-hidden="true" />
            <span className="pole" style={{ left: width - size.pad / 2 - 9, height: rowH - 24 }} aria-hidden="true" />
            <div role="listbox" aria-label={openGroup ? `${openGroup.name}的图，从早到晚` : "分类"} aria-orientation="horizontal" onKeyDown={onKey}>
              {items.map(({ slot, x, y, w, tilt }) => {
                const key = slotKey(slot);
                const pos = { left: x - w / 2, width: w, top: size.top + y - 10, ["--tilt" as string]: `${tilt}deg` };
                if (slot.kind === "tag") {
                  const g = slot.group;
                  return (
                    <button key={key} {...slotProps(key)} className="tag" aria-expanded={false}
                      aria-label={`${g.name}，${g.stories.length} 张图，点开`} style={{ ...pos, ...tone(g) }} onClick={() => toggle(g)}>
                      <span className="peg" aria-hidden="true" />
                      <span className="tag-card">
                        <span className="tag-icon" aria-hidden="true">{g.icon}</span>
                        <span className="tag-name">{g.name}</span>
                        <span className="tag-stack" aria-hidden="true">
                          {g.stories.slice(0, 4).map((s) => <Mini key={s.id} story={s} photo={false} />)}
                        </span>
                        <span className="tag-count">{g.stories.length} 张 · 点开</span>
                      </span>
                    </button>
                  );
                }
                if (slot.kind === "banner") {
                  const g = slot.group;
                  return (
                    <button key={key} {...slotProps(key)} className="banner" aria-expanded
                      aria-label={`${g.name}，已经打开，点一下收起`} style={{ ...pos, top: size.top + y - 4, ...tone(g) }} onClick={() => toggle(g)}>
                      <span className="banner-cloth">
                        <span className="banner-icon" aria-hidden="true">{g.icon}</span>
                        <span className="banner-name">{g.name}</span>
                        <span className="banner-count">{g.stories.length} 张</span>
                        <span className="banner-fold">‹ 收起</span>
                      </span>
                    </button>
                  );
                }
                const s = slot.story;
                return (
                  <button key={key} {...slotProps(key)} className="print" style={pos} onClick={() => pickOrOpen(s)}
                    onDoubleClick={() => { location.hash = `#/story/${s.id}`; }}
                    aria-label={`${yearText(s)} 年，${s.frameName}：${s.title}`}>
                    <span className="peg" aria-hidden="true" />
                    <span className="sheet">
                      <img src={thumbOf(s.frame.src)} alt="" draggable={false} loading="lazy" />
                      <span className="cap-year">{yearText(s)}</span>
                      <span className="cap-name">{s.frameName}</span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <p className="line-hint">
          {openGroup
            ? "按住绳子左右拖 · 点一张图看简介，再点一下开讲 · 点旗子收起"
            : `点分类牌，把这一类的图挂上绳子${room && width > room + 4 ? " · 按住绳子往左拖，后面还有" : ""}`}
        </p>
      </section>

      {shownStory ? <Preview story={shownStory} /> : shownGroup && (
        <GroupPreview group={shownGroup} isOpen={open === shownGroup.key} onToggle={() => toggle(shownGroup)} />
      )}

      <Credits />
    </div>
  );
}

/** 分类牌和分类卡片上的小圆片。收起的分类只写图名的第一个字（photo=false）：首页一打开不用先下一堆图，点开哪一类再读哪一类 */
function Mini({ story, photo }: { story: Story; photo: boolean }) {
  return photo
    ? <img className="mini" src={thumbOf(story.frame.src)} alt="" draggable={false} loading="lazy" />
    : <span className="mini letter">{story.frameName.match(/[\p{L}\p{N}]/u)?.[0]}</span>;
}

function GroupPreview({ group, isOpen, onToggle }: { group: Group; isOpen: boolean; onToggle: () => void }) {
  return (
    <article className="preview group-preview" key={group.key} style={tone(group)} aria-live="polite">
      <div className="mosaic" aria-hidden="true">
        {group.stories.slice(0, 6).map((s) => <Mini key={s.id} story={s} photo={isOpen} />)}
        {!isOpen && <span className="mosaic-hint">挂上晾衣绳，图才显出来</span>}
      </div>
      <div className="preview-info">
        <h2>{group.icon} {group.name}</h2>
        <p className="teaser">{group.note}</p>
        <p className="people">这一类有 {group.stories.length} 张图：</p>
        <div className="kids">
          {group.stories.map((s) => (
            <a key={s.id} className="kid" href={`#/story/${s.id}`}>{s.frameName} <small>{yearText(s)}</small></a>
          ))}
        </div>
        <button type="button" className="btn" onClick={onToggle}>{isOpen ? "收起这一类" : "挂上晾衣绳"}</button>
      </div>
    </article>
  );
}

function Preview({ story }: { story: Story }) {
  // 点一下看简介，再点一下才开讲：趁看简介这会儿把故事先下好
  useEffect(() => prefetchStory(story.id), [story.id]);
  return (
    <article className="preview" key={story.id} aria-live="polite">
      <a className="preview-frame" href={`#/story/${story.id}`} aria-label={`看图听故事：${story.title}`}>
        <img src={story.frame.src} alt={story.frame.alt} />
      </a>
      <div className="preview-info">
        <p className="preview-when">
          <span className="year">{yearText(story)}</span>
          <span>{story.when}</span>
          <span className="chip">{story.field}</span>
        </p>
        <p className="preview-frame-name">{story.frameName}</p>
        <h2>{story.title}</h2>
        <p className="teaser">{story.teaser}</p>
        <p className="people">{story.people.join(" · ")}</p>
        <a className="btn" href={`#/story/${story.id}`}>看图听故事</a>
      </div>
    </article>
  );
}

function Credits() {
  // 署名清单一般没人点开，点开时才加载
  const [credits, setCredits] = useState<readonly Credit[] | null>(null);
  const [failed, setFailed] = useState(false);
  const load = () => {
    if (credits) return;
    setFailed(false);
    import("../stories/credits.json").then((m) => setCredits(m.default as readonly Credit[]), () => setFailed(true));
  };
  return (
    <details className="credits" onToggle={(e) => { if (e.currentTarget.open) load(); }}>
      <summary>图片从哪里来</summary>
      <p>故事里的对话是根据史料改写的；图片大多来自 Wikimedia Commons，许可写在每一项后面。</p>
      {credits ? (
        <ul>
          {credits.map((f) => (
            <li key={f.src}>
              <strong>{f.name}</strong>（{yearText(f)}）：{f.by}。{f.license}。
              <a href={f.page} target="_blank" rel="noreferrer">出处</a>
            </li>
          ))}
        </ul>
      ) : failed
        ? <p>清单没有加载出来，<button type="button" className="link-btn" onClick={load}>再试一次</button></p>
        : <p>正在翻清单……</p>}
    </details>
  );
}
