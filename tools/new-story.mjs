// 新建一个「一图一故事」骨架并自动注册到 src/stories/index.ts。
// 用法：npm run story:new -- my-story-id
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const id = process.argv[2];

if (!id || !/^[a-z][a-z0-9-]*$/.test(id)) {
  console.error("用法：npm run story:new -- <id>（小写字母开头，只用小写字母、数字和短横线）");
  process.exit(1);
}

const file = join(root, "src/stories", `${id}.ts`);
if (existsSync(file)) {
  console.error(`已存在：src/stories/${id}.ts`);
  process.exit(1);
}

const varName = id.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());

writeFileSync(file, `import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const mainSpot = spot(0.5, 0.42, 0.2, "画面主体");
const detailSpot = spot(0.65, 0.65, 0.16, "关键细节");

export const ${varName}: Story = {
  id: "${id}",
  title: "待填写的故事名",
  frameName: "图的名字",
  year: 1900,
  when: "1900 年",
  field: "物理",
  people: ["人物姓名"],
  teaser: "挂在晾衣杆上的那句话。",
  frame: {
    src: "frames/${id}.jpg",
    alt: "请写清楚图上能看见的内容",
    kind: "照片",
    by: "作者或馆藏",
    license: "公有领域",
    commons: "File:Example.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Example.jpg",
  },
  // 至少写满 16 句（每句 <= 160 字），第一句由小念从图上看得见的东西问起，至少指两处 spot
  lines: [
    nian("爸爸，这张图上画的是什么呀？", { part: "第一眼" }),
    dad("这是……", { look: mainSpot }),
    nian("旁边那个小小的东西是什么？", { look: detailSpot }),
    dad("那是……"),
    nian("它为什么会变成这样？", { part: "背后的故事", look: "all" }),
    dad("……"),
    nian("哇，那后来怎么样了？"),
    dad("……"),
    nian("原来是这样！", { part: "留下的影响" }),
    dad("……"),
    nian("我明白了！"),
    dad("……"),
    nian("还有别的故事吗？"),
    dad("……"),
    nian("真神奇！"),
    dad("……"),
  ],
  remember: "讲完以后，一句话记住。",
  facts: [
    ["时间", "……"],
    ["主角", "……"],
    ["馆藏 / 出处", "……"],
  ],
  sources: [
    { title: "Wikimedia Commons", url: "https://commons.wikimedia.org/wiki/File:Example.jpg" },
  ],
};
`);

const indexPath = join(root, "src/stories/index.ts");
let index = readFileSync(indexPath, "utf8");
if (!index.includes(`./${id}.ts`)) {
  index = index.replace(
    /import type \{ Story \} from "\.\/types\.ts";(\r?\n)/,
    (_m, eol) => `import type { Story } from "./types.ts";${eol}import { ${varName} } from "./${id}.ts";${eol}`,
  );
  index = index.replace(
    /export const STORIES: readonly Story\[\] = \[([\s\S]*?)\]\.sort/,
    (_m, body) => {
      const cleaned = body.trimEnd();
      const comma = cleaned.endsWith(",") ? "" : ",";
      return `export const STORIES: readonly Story[] = [${cleaned}${comma}\n  ${varName},\n].sort`;
    },
  );
  writeFileSync(indexPath, index);
}

console.log(`已创建 src/stories/${id}.ts 并注册到 src/stories/index.ts`);
console.log(`下一步：填写史实与台词 -> npm run frames -- ${id} -> npm run grid -- ${id} -> npm run story:index -> npm run check -- ${id}`);