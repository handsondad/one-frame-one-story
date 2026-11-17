// 把一个故事的几张截图里“图”那一栏裁出来，拼成一张总览，一眼核对所有圈。
//
//   npm run snapshot -- <故事id> --spots     先截图
//   npm run sheet -- <故事id>                再拼：默认是指了圈或换了图的每一句
//   npm run sheet -- <故事id> 3 7 9          只拼这几句
//
// 输出 snapshots/<故事id>-sheet.png，每行 4 张，从左上往右数，顺序会打印出来。
// 总览是缩小的，圈的边缘看不准时再打开那一句的整张截图。只认 1280 宽的截图。需要 ffmpeg。
import { execFileSync } from "node:child_process";
import { copyFileSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { pointingSteps } from "../src/lib/view.ts";
import { storyById } from "../src/stories/index.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const [id, ...rest] = process.argv.slice(2);
const story = id && storyById(id);
if (!story) {
  console.log(id ? `找不到故事 ${id}` : "用法：npm run sheet -- <故事id> [第几句...]");
  process.exit(1);
}

const steps = rest.length ? rest.map(Number) : pointingSteps(story.lines);
const shots = steps.map((n) => join(root, "snapshots", `${id}-${n}-1280.png`));
const missing = steps.filter((_, i) => !existsSync(shots[i]));
if (missing.length) {
  console.log(`缺第 ${missing.join("、")} 句的截图，先跑：npm run snapshot -- ${id} ${rest.length ? rest.join(" ") : "--spots"}`);
  process.exit(1);
}

const tmp = join(root, "tools", ".cache", "sheet", id);
rmSync(tmp, { recursive: true, force: true });
mkdirSync(tmp, { recursive: true });
shots.forEach((file, i) => copyFileSync(file, join(tmp, `${String(i).padStart(2, "0")}.png`)));

const out = join(root, "snapshots", `${id}-sheet.png`);
const rows = Math.ceil(steps.length / 4);
execFileSync("ffmpeg", ["-loglevel", "error", "-y", "-i", join(tmp, "%02d.png"),
  "-vf", `crop=660:660:12:62,scale=400:-1,tile=4x${rows}`, "-frames:v", "1", out]);
rmSync(tmp, { recursive: true, force: true });
console.log(out);
console.log(`从左上往右依次是第 ${steps.join("、")} 句`);
