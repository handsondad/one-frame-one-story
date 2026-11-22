import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

export const hookeCork: Story = {
  id: "hooke-cork",
  title: "一片软木里的小房间",
  frameName: "胡克的软木切片",
  year: 1665,
  when: "1665 年 1 月出版",
  field: "生物",
  people: ["罗伯特·胡克"],
  teaser: "瓶塞上切下薄薄一片，放到显微镜下，看见了一间间小房间。",
  frame: {
    src: "frames/hooke-cork.jpg",
    alt: "圆形视野里两块像蜂窝和渔网的软木切片，下方是一枝含羞草",
    kind: "版画",
    by: "罗伯特·胡克，《显微图谱》插图",
    license: "公有领域",
    commons: "File:RobertHookeMicrographia1665.jpg",
    page: "https://commons.wikimedia.org/wiki/File:RobertHookeMicrographia1665.jpg",
  },
  lines: [
    nian("爸爸，这张图上半边像渔网，又像蜂窝。", { part: "这是什么图" }),
    dad("你猜得很接近。这是三百多年前，英国科学家罗伯特·胡克用显微镜看一小片软木时画下来的。"),
    nian("软木是什么？"),
    dad("就是做瓶塞的那种木头，轻轻的，一按软软的。它其实是一种橡树的树皮。"),

    dad("胡克用很锋利的小刀，从软木上削下薄得能透光的一片，放到显微镜下面。你看这里——", { part: "一间间小房间", look: spot(0.68, 0.44, 0.2) }),
    nian("好多小格子！一个挨着一个。"),
    dad("胡克也觉得它们像蜂窝，就把这些小格子叫作 cell。这个词来自拉丁语 cella，意思是“小房间”，修道院里修士住的小屋子也叫这个名字。"),
    nian("cell？"),
    dad("翻成中文，就是“细胞”。我们今天说的细胞，名字就是从这片软木来的。"),
    nian("那旁边这一块呢？", { look: spot(0.24, 0.43, 0.2) }),
    dad("这是换了个方向切的。横着切，看到的是一个个圆圆的小孔；顺着切，看到的就是一排排长方形的小格子，像码得整整齐齐的砖。"),
    nian("他数过有多少个吗？"),
    dad("算过！他估计，一立方英寸的软木里——大概就是一个比骰子大一些的小方块——有十二亿多个这样的小格子。"),
    nian("十二亿！差不多和我们国家的人一样多了。"),

    nian("那这些小格子里面装着什么？", { part: "空空的小房间", look: spot(0.68, 0.44, 0.2) }),
    dad("胡克看到的其实是空的。做瓶塞的软木，细胞早就死了，里面的东西没了，只剩下一圈圈细胞壁，就像只剩墙的空房子。"),
    nian("所以他看到的是细胞的“墙”。"),
    dad("对。又过了将近两百年，科学家才慢慢弄明白：所有的植物和动物，包括你和我，都是由一个个细胞组成的。活的细胞里面满满当当，热闹得很。"),

    nian("下面这根带叶子的树枝是什么？", { part: "什么都想看", look: spot(0.6, 0.86, 0.2) }),
    dad("这是含羞草，你用手一碰，它的叶子就会合起来。胡克也好奇它为什么会动，就画在了同一页上。"),
    nian("他好像什么都想看。"),
    dad("是啊。他那本书叫《显微图谱》，里面有跳蚤、虱子、苍蝇的眼睛、针尖、雪花，放大以后都画得清清楚楚。那只跳蚤画在一张折起来的大纸上，打开比书本大好几倍。"),
    nian("跳蚤那么大，好吓人。"),
    dad("当时的人也吓了一跳。有个叫佩皮斯的英国人买了这本书，一直看到半夜两点，在日记里写：这是我这辈子读过的最巧妙的书。"),

    nian("我也想看看细胞。", { part: "你也能看到" }),
    dad("可以呀。洋葱里面那层薄薄的皮，放到显微镜下面，就能看到一个个小格子，而且是活的。哪天咱们试试，你来当胡克。"),
  ],
  remember: "“细胞”这个名字，来自胡克在一片软木里看到的一间间“小房间”。",
  facts: [
    ["这张图", "《显微图谱》第 11 幅：软木的两个切面和含羞草"],
    ["作者", "罗伯特·胡克（英国）"],
    ["时间", "1665 年 1 月出版"],
    ["用的工具", "胡克自己改进的复式显微镜"],
  ],
  sources: [
    { title: "Wikimedia Commons：RobertHookeMicrographia1665", url: "https://commons.wikimedia.org/wiki/File:RobertHookeMicrographia1665.jpg" },
    { title: "Wikipedia：Micrographia（显微图谱）", url: "https://en.wikipedia.org/wiki/Micrographia" },
    { title: "佩皮斯日记，1665 年 1 月 21 日", url: "https://www.pepysdiary.com/diary/1665/01/21/" },
  ],
};
