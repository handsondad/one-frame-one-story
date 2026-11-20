import { useEffect, useState } from "react";
import { yearText } from "./lib/year.ts";
import { LinePage } from "./pages/LinePage.tsx";
import { fetchStory, fetchStoryPage } from "./pages/story-loader.ts";
import { cardById, type StoryCard } from "./stories/catalog.ts";
import type { Story } from "./stories/types.ts";

/** 路由：#/ 晾衣杆；#/story/<id> 看图讲故事；#/story/<id>/<n> 讲到第 n 句（从 1 数） */
function parse(hash: string) {
  const [, page, id, n] = hash.replace(/^#/, "").split("/");
  if (page === "story" && id) return { page: "story" as const, id, step: n ? Math.max(0, Number(n) - 1) : 0 };
  return { page: "line" as const };
}

const SITE = "一图一故事";

interface Loaded {
  readonly story: Story;
  readonly Page: typeof import("./pages/StoryPage.tsx").StoryPage;
}

export function App() {
  const [hash, setHash] = useState(location.hash);
  useEffect(() => {
    const on = () => setHash(location.hash);
    addEventListener("hashchange", on);
    return () => removeEventListener("hashchange", on);
  }, []);

  const route = parse(hash);
  const card = route.page === "story" ? cardById(route.id) : undefined;
  const [loaded, setLoaded] = useState<Loaded | null>(null);
  const [failed, setFailed] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    document.title = card ? `${card.frameName} · ${SITE}` : SITE;
  }, [card]);

  // 故事按需下载；下载途中又换了地址，旧的结果就不要了
  const id = card?.id;
  useEffect(() => {
    if (!id) return;
    let live = true;
    setFailed(null);
    Promise.all([fetchStory(id), fetchStoryPage()]).then(([story, m]) => {
      if (!live) return;
      if (story) setLoaded({ story, Page: m.StoryPage });
      else setFailed(id);
    }, () => {
      if (live) setFailed(id);
    });
    return () => {
      live = false;
    };
  }, [id, attempt]);

  if (route.page === "story" && card) {
    if (loaded?.story.id !== card.id) {
      return <Waiting card={card} failed={failed === card.id} retry={() => setAttempt((n) => n + 1)} />;
    }
    const { story, Page } = loaded;
    // 手动改地址栏里的句号也要跳过去，所以句号也放进 key；页面自己翻句时用 replaceState，不会触发这里
    return <Page key={`${story.id}/${route.step}`} story={story} initialStep={Math.min(route.step, story.lines.length - 1)} />;
  }
  return <LinePage />;
}

function Waiting({ card, failed, retry }: { card: StoryCard; failed: boolean; retry: () => void }) {
  return (
    <div className="app story-page">
      <nav className="topbar">
        <a className="back" href="#/">← 回到晾衣杆</a>
        <span className="topbar-title"><span className="yr">{yearText(card)}</span>{card.frameName}</span>
      </nav>
      <p className="story-wait" role="status">
        {failed
          ? <>这张图没有翻开，可能是网络断了。<button type="button" className="link-btn" onClick={retry}>再试一次</button></>
          : "正在翻开这张图……"}
      </p>
    </div>
  );
}
