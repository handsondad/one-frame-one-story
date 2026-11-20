import type { Story } from "./types.ts";

/** 每个故事一个小包，点开哪个才下载哪个；文件名就是故事 id（测试会查） */
const modules = import.meta.glob<Record<string, unknown>>([
  "./*.ts",
  "!./index.ts", "!./types.ts", "!./lines.ts", "!./load.ts", "!./catalog.ts",
]);

const isStory = (v: unknown): v is Story => !!v && typeof v === "object" && "lines" in v && "frame" in v;

export async function loadStory(id: string): Promise<Story | undefined> {
  const load = modules[`./${id}.ts`];
  if (!load) return undefined;
  return Object.values(await load()).find((v): v is Story => isStory(v) && v.id === id);
}
