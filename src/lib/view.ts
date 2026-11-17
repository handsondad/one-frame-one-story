import type { Frame, Line, Spot, Story } from "../stories/types.ts";

/** 自动放大最多到这么多倍；再大图片就糊了 */
export const MAX_ZOOM = 2.6;
/** 圈外面留的余量：放大后圈只占画面的 1/PAD */
const PAD = 1.6;

/** 每句话在图上指着哪些地方（把“接着指上一句”和“每段从整张图开始”展开） */
export function resolveLooks(lines: readonly Line[]): Spot[][] {
  let cur: Spot[] = [];
  return lines.map((line) => {
    if (line.part !== undefined) cur = [];
    if (line.look === "all") cur = [];
    else if (line.look) cur = Array.isArray(line.look) ? line.look : [line.look];
    return cur;
  });
}

/** 每句话讲的时候显示哪张图：从故事的 frame 开始，遇到 show 就换 */
export function resolveFrames(first: Frame, lines: readonly Line[]): Frame[] {
  let cur = first;
  return lines.map((line) => (cur = line.show ?? cur));
}

/** 哪几句（从 1 数）在图上指了地方或换了图——截图核对圈的时候就看这几句 */
export const pointingSteps = (lines: readonly Line[]): number[] =>
  lines.flatMap((l, i) => ((l.look && l.look !== "all") || l.show ? [i + 1] : []));

/** 一个故事用到的所有图，第一张是故事的 frame */
export const framesOf = (story: Story): Frame[] =>
  [...new Set([story.frame, ...story.lines.flatMap((l) => (l.show ? [l.show] : []))])];

/** 放大倍数和平移量。平移量 x、y 分别按图片的宽、高算比例，配合 transform-origin: 0 0 使用 */
export interface View {
  scale: number;
  x: number;
  y: number;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

/**
 * 把要看的圈放大到画面中间，同时不让图片边缘露进画面。
 * aspect 是图片的高 / 宽。
 */
export function viewFor(spots: readonly Spot[], aspect: number): View {
  if (!spots.length) return { scale: 1, x: 0, y: 0 };
  // 统一用“图片宽度”做单位：横向 0~1，纵向 0~aspect
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const s of spots) {
    x0 = Math.min(x0, s.x - s.r);
    x1 = Math.max(x1, s.x + s.r);
    y0 = Math.min(y0, s.y * aspect - s.r);
    y1 = Math.max(y1, s.y * aspect + s.r);
  }
  const asked = Math.max(0, ...spots.map((s) => s.zoom ?? 0));
  const fit = Math.min(1 / ((x1 - x0) * PAD), aspect / ((y1 - y0) * PAD));
  const scale = asked ? Math.max(1, asked) : clamp(fit, 1, MAX_ZOOM);
  const cx = (x0 + x1) / 2;
  const cy = (y0 + y1) / 2;
  const tx = clamp(0.5 - scale * cx, 1 - scale, 0);
  const ty = clamp(aspect / 2 - scale * cy, aspect * (1 - scale), 0);
  return { scale, x: tx, y: ty / aspect };
}

/** 晾衣杆上用的小图：照片用 frames/thumbs/ 下的缩略图，SVG 直接用原图 */
export const thumbOf = (src: string) => (src.endsWith(".svg") ? src : src.replace(/^frames\//, "frames/thumbs/"));
