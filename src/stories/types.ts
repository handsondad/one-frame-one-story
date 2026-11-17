/** 说话的人：只有小念和爸爸 */
export type Speaker = "nian" | "dad";

export type Field = "天文" | "物理" | "化学" | "生物" | "医学" | "技术" | "地理" | "历史" | "艺术" | "社会";

/**
 * 图上圈出来的一块。x、y 是占图片宽、高的比例（0~1），r 是半径，按图片宽度的比例算。
 * 圈太小看不清时可以用 zoom 指定放大倍数（默认按圈的大小自动算，最多放大到 MAX_ZOOM）。
 */
export interface Spot {
  x: number;
  y: number;
  r: number;
  label?: string;
  zoom?: number;
}

export interface Line {
  who: Speaker;
  say: string;
  /**
   * 这句话在图上指哪儿。不写就接着指上一句指的地方；"all" 是退回看整张图。
   * 每一段（part）开头默认看整张图。
   */
  look?: Spot | Spot[] | "all";
  /** 从这句开始新的一段，写段落小标题 */
  part?: string;
  /** 从这句开始换成这张图，直到下一次换；开头是故事的 frame。look 的圈按换上的这张图算 */
  show?: Frame;
}

export interface Frame {
  /** 中途换上的图（Line.show）的名字；故事的第一张图用 Story.frameName */
  title?: string;
  /** public/ 下的相对路径 */
  src: string;
  alt: string;
  kind: "照片" | "手稿" | "版画" | "画" | "地图" | "图表" | "示意图";
  /** 谁拍的、谁画的 */
  by: string;
  license: string;
  /** Wikimedia Commons 上的文件名（File:...），npm run frames 按它下载 */
  commons?: string;
  /** 原图太大、只用其中一块时：x、y、w、h 都是占原图宽、高的比例，npm run frames 下载时裁好。圈的位置按裁好的图算 */
  crop?: { x: number; y: number; w: number; h: number };
  /** 图的出处页面 */
  page: string;
  /** 关于这张图要特别说明的事，比如“按原图重绘” */
  note?: string;
  /** 深色的图（太空、底片），圈和标签换亮色 */
  dark?: boolean;
}

export interface Source {
  title: string;
  url: string;
}

export interface Story {
  /** 小写字母和短横线，也是路由里的名字 */
  id: string;
  /** 故事名 */
  title: string;
  /** 图的名字 */
  frameName: string;
  /** 图产生的年份，晾衣杆按它从早到晚排；公元前写负数 */
  year: number;
  /** 年份只是个大概（比如古画说不准哪一年），显示成“约 1100” */
  circa?: boolean;
  /** 更细的时间说法，比如“1952 年 5 月” */
  when: string;
  field: Field;
  people: string[];
  /** 挂在晾衣杆上那张卡片下的一句话 */
  teaser: string;
  frame: Frame;
  lines: Line[];
  /** 讲完以后，一句话记住 */
  remember: string;
  /** 图的小档案：[名目, 内容] */
  facts: [string, string][];
  sources: Source[];
}
