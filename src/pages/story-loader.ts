import { loadStory } from "../stories/load.ts";
import type { Story } from "../stories/types.ts";

type StoryPageModule = typeof import("./StoryPage.tsx");

const stories = new Map<string, Promise<Story | undefined>>();
let page: Promise<StoryPageModule> | undefined;

/** 同一个故事只下载一次；下载失败就忘掉，下次重新下 */
export function fetchStory(id: string): Promise<Story | undefined> {
  let p = stories.get(id);
  if (!p) {
    p = loadStory(id);
    stories.set(id, p);
    p.catch(() => stories.delete(id));
  }
  return p;
}

export function fetchStoryPage(): Promise<StoryPageModule> {
  page ??= import("./StoryPage.tsx").catch((err: unknown) => {
    page = undefined;
    throw err;
  });
  return page;
}

/** 预先下好故事和讲故事的页面；停留不到一会儿就换走的不下。返回取消函数 */
export function prefetchStory(id: string): () => void {
  const timer = window.setTimeout(() => {
    fetchStory(id).catch(() => {});
    fetchStoryPage().catch(() => {});
  }, 150);
  return () => clearTimeout(timer);
}
