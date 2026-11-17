import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

export const darwinTree: Story = {
  id: "darwin-tree",
  title: "笔记本上的“我想……”",
  frameName: "达尔文的生命之树",
  year: 1837,
  when: "1837 年夏天",
  field: "生物",
  people: ["查尔斯·达尔文"],
  teaser: "笔记本里一棵歪歪扭扭的小树，上面写着两个词：I think。",
  frame: {
    src: "frames/darwin-tree.jpg",
    alt: "笔记本手稿，左上角写着 I think，下面画着一棵分叉的小树，标着 1、A、B、C、D",
    kind: "手稿",
    by: "查尔斯·达尔文，B 号笔记本第 36 页",
    license: "公有领域",
    commons: "File:Darwin Tree 1837.png",
    page: "https://commons.wikimedia.org/wiki/File:Darwin_Tree_1837.png",
  },
  lines: [
    nian("爸爸，这页纸写得好乱，像我的草稿本。", { part: "这是什么图" }),
    dad("还真是一页草稿本。这是英国科学家达尔文的笔记本，1837 年，他二十八岁。"),
    nian("左上角写的是什么？", { look: spot(0.26, 0.065, 0.11) }),
    dad("“I think”，意思是“我想……”。他在画这棵小树之前，先写下了这两个词。"),
    nian("想什么？"),
    dad("想一个很大的问题：世界上有这么多种动物和植物，它们都是从哪儿来的？"),

    dad("在这之前，达尔文坐一艘叫“小猎犬号”的船，绕着地球航行了差不多五年。", { part: "一次很长的旅行" }),
    nian("五年！比我上幼儿园还久。"),
    dad("他在南美洲挖到过巨大的古代动物化石；在一群叫加拉帕戈斯的小岛上，他发现每个岛上的鸟、乌龟都有点不一样。"),
    nian("怎么个不一样？"),
    dad("比如有的小鸟嘴巴又粗又硬，适合嗑种子；有的嘴巴细细长长，适合吃虫子。它们长得很像，像是亲戚，却各有各的本事。"),

    nian("所以他画了一棵树？", { part: "读这棵小树" }),
    dad("对。你从最下面这个圈起来的“1”开始看。", { look: spot(0.33, 0.49, 0.06) }),
    dad("这是一个老祖先。它往上分出枝杈，枝杈又分出小枝杈。", { look: spot(0.42, 0.33, 0.24) }),
    nian("像真的树一样，越长越多。"),
    dad("每一根小树枝，都代表后来的一种生物。有的枝头画了一道小横线，常见的解读是：那表示现在还活着的物种；没有横线的，就是走到头、灭绝了。"),
    nian("那 A、B、C、D 是什么？", { look: [spot(0.85, 0.5, 0.05, "A"), spot(0.47, 0.15, 0.05, "B"), spot(0.53, 0.205, 0.05, "C"), spot(0.18, 0.23, 0.05, "D")] }),
    dad("他在下面写着：A 和 B 之间差得非常远；C 和 B 非常接近；B 和 D 差得多一些。", { look: spot(0.5, 0.71, 0.32) }),
    nian("我知道了！C 和 B 长在同一根树枝上，离得近，所以像；A 在另一边，离得远。", { look: [spot(0.85, 0.5, 0.05, "A"), spot(0.47, 0.15, 0.05, "B"), spot(0.53, 0.205, 0.05, "C"), spot(0.18, 0.23, 0.05, "D")] }),
    dad("太对了。达尔文的意思是：越像的生物，分开的时间越短，是越亲的亲戚。所有的生物，都长在同一棵大树上。"),

    nian("他想明白以后，马上就告诉大家了吗？", { part: "二十多年的耐心" }),
    dad("没有。他又观察、做实验、写笔记，整整二十多年。他养鸽子，研究藤壶，和很多人写信讨论。直到 1859 年，才出版了那本有名的书《物种起源》。"),
    nian("二十多年，好有耐心。"),
    dad("还有个有意思的地方：《物种起源》那么厚一本书，只有一张插图，画的还是一棵分叉的树。"),

    nian("那我和小猫也在这棵树上吗？", { part: "我们也在树上" }),
    dad("在的。往回找很远很远，我们和小猫有共同的祖先。和小猫比，我们和猴子的树枝挨得更近一些。"),
    nian("那我和小猫是远房亲戚！"),
    dad("哈哈，非常远非常远的那种亲戚。"),
  ],
  remember: "达尔文写下“我想……”，然后用二十多年去证明：所有生物都长在同一棵生命之树上。",
  facts: [
    ["这张图", "B 号笔记本（物种演变笔记）第 36 页"],
    ["作者", "查尔斯·达尔文（英国）"],
    ["时间", "1837 年夏天，环球航行回来后第二年"],
    ["后来", "1859 年出版《物种起源》"],
  ],
  sources: [
    { title: "Wikimedia Commons：Darwin Tree 1837", url: "https://commons.wikimedia.org/wiki/File:Darwin_Tree_1837.png" },
    { title: "美国自然历史博物馆：Darwin – I think", url: "https://www.amnh.org/exhibitions/darwin/the-idea-takes-shape/i-think" },
    { title: "Darwin Online：Notebook B", url: "https://darwin-online.org.uk/content/frameset?itemID=CUL-DAR121.-&viewtype=text&pageseq=1" },
  ],
};
