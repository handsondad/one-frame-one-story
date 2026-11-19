/**
 * 首页晾衣绳怎么挂：先只挂分类牌（按学科或按年代），点开一类才把这一类的图挂上去，
 * 同一时间只打开一类。这样图再多，绳子上也只有一类的缩略图要加载。
 * 绳子是一条二次贝塞尔曲线，两头高、中间垂下去；挂件的高度跟着绳子走。
 */
import { centuryName, centuryNote, centuryOf } from "../lib/year.ts";
import type { Field, Story } from "../stories/types.ts";

export type Mode = "field" | "era";

export type Group = {
  /** 「field:天文」「era:20」 */
  readonly key: string;
  readonly name: string;
  readonly icon: string;
  readonly color: string;
  readonly note: string;
  readonly stories: readonly Story[];
};

export const FIELD_LOOK: Record<Field, { readonly icon: string; readonly color: string; readonly note: string }> = {
  数学: { icon: "📐", color: "#3867d6", note: "数、形状和规律：藏在万物背后的语言。" },
  天文: { icon: "🔭", color: "#5b8def", note: "抬头看天：月亮、星星、星系和黑洞。" },
  物理: { icon: "⚛️", color: "#ff9f43", note: "光、力、能量和看不见的射线。" },
  化学: { icon: "⚗️", color: "#a66cd8", note: "东西是由什么做成的，又怎么变成别的东西。" },
  生物: { icon: "🧬", color: "#43b58f", note: "细胞、进化和生命的密码。" },
  医学: { icon: "🩺", color: "#e86b9a", note: "人为什么会生病，又是怎么找到办法的。" },
  技术: { icon: "⚙️", color: "#e8655b", note: "人们造出来的相机、飞船，让人看见以前看不见的。" },
  地理: { icon: "🧭", color: "#2fa6b3", note: "地图上的世界：人们怎么一点点认识地球。" },
  历史: { icon: "🏺", color: "#c98b52", note: "古老的石头和文字，讲很久以前的事。" },
  艺术: { icon: "🎨", color: "#d9a420", note: "一幅画里藏着的城市、人和故事。" },
  社会: { icon: "🤝", color: "#6c7ae0", note: "人和人怎么一起生活：公平、权利，和一点点变好的世界。" },
};
const FIELD_ORDER = Object.keys(FIELD_LOOK) as Field[];

const ERA_COLORS = ["#c98b52", "#e8655b", "#ff9f43", "#43b58f", "#5b8def", "#a66cd8"];

export function groupsOf(stories: readonly Story[], mode: Mode): Group[] {
  const sorted = [...stories].sort((a, b) => a.year - b.year);
  if (mode === "field") {
    return FIELD_ORDER.map((f) => ({ f, list: sorted.filter((s) => s.field === f) }))
      .filter(({ list }) => list.length)
      .map(({ f, list }) => ({ key: `field:${f}`, name: f, ...FIELD_LOOK[f], stories: list }));
  }
  const centuries = [...new Set(sorted.map((s) => centuryOf(s.year)))];
  return centuries.map((c, i) => ({
    key: `era:${c}`,
    name: centuryName(c),
    icon: "🕰️",
    color: ERA_COLORS[i % ERA_COLORS.length],
    note: centuryNote(c),
    stories: sorted.filter((s) => centuryOf(s.year) === c),
  }));
}

export type Slot =
  | { readonly kind: "tag"; readonly group: Group }
  | { readonly kind: "banner"; readonly group: Group }
  | { readonly kind: "print"; readonly story: Story; readonly group: Group };

/** 从左到右：收起的类挂一张分类牌；打开的类挂一面旗，后面跟着它的图 */
export function slotsOf(groups: readonly Group[], open: string | null): Slot[] {
  return groups.flatMap((group): Slot[] => group.key === open
    ? [{ kind: "banner", group }, ...group.stories.map((story) => ({ kind: "print" as const, story, group }))]
    : [{ kind: "tag", group }]);
}

export const slotKey = (s: Slot) => (s.kind === "print" ? `s:${s.story.id}` : `g:${s.group.key}`);

export type Size = {
  readonly print: number; readonly tag: number; readonly banner: number;
  readonly gap: number; readonly pad: number; readonly sag: number; readonly top: number;
  /** 绳子区域的高度：挂着图的时候高一些，只有分类牌时矮一些 */
  readonly rowH: number; readonly rowTags: number;
};
export const WIDE: Size = { print: 172, tag: 156, banner: 112, gap: 28, pad: 64, sag: 34, top: 30, rowH: 370, rowTags: 300 };
export const NARROW: Size = { print: 140, tag: 132, banner: 96, gap: 18, pad: 48, sag: 26, top: 26, rowH: 330, rowTags: 280 };

const TILTS = [-3, 2.5, -1.5, 3, -2.5, 1.5];
export const tiltAt = (i: number) => TILTS[i % TILTS.length];

/** 绳子在横坐标 x 处垂下多少（0 是两头的高度） */
export function sagAt(x: number, width: number, size: Size): number {
  const t = Math.min(1, Math.max(0, (x - size.pad / 2) / (width - size.pad)));
  return 4 * size.sag * t * (1 - t);
}

/**
 * 给一排挂件排位置，返回每个挂件中心的 x、垂下的 y 和绳子总长。
 * minWidth：框比挂件宽时把绳子拉满，多出来的地方平均分到挂件之间。
 */
export function layout(slots: readonly Slot[], size: Size, minWidth = 0) {
  const widths = slots.map((s) => size[s.kind]);
  const content = widths.reduce((sum, w) => sum + w, 0) + size.gap * Math.max(0, widths.length - 1);
  const extra = Math.max(0, minWidth - content - size.pad * 2) / (widths.length + 1);
  const width = content + size.pad * 2 + extra * (widths.length + 1);
  let left = size.pad + extra;
  const items = slots.map((slot, i) => {
    const x = left + widths[i] / 2;
    left += widths[i] + size.gap + extra;
    return { slot, x, y: sagAt(x, width, size), w: widths[i], tilt: tiltAt(i) };
  });
  return { items, width };
}
