import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const molecule = spot(0.5, 0.5, 0.3, "并五苯分子");
const rings = [0.26, 0.38, 0.5, 0.62, 0.74].map((x) => spot(x, 0.5, 0.055));
const oneRing = spot(0.5, 0.5, 0.06, "一个环", 3);
const hydrogens = [spot(0.5, 0.29, 0.035, "碳氢键"), spot(0.5, 0.71, 0.035)];
const ends = [spot(0.18, 0.5, 0.06, "特别亮的两头"), spot(0.82, 0.5, 0.06)];

export const pentacene: Story = {
  id: "pentacene",
  title: "一个分子的“骨架照”",
  frameName: "原子力显微镜下的并五苯",
  year: 2009,
  when: "2009 年 8 月发表，瑞士苏黎世，IBM 研究院",
  field: "化学",
  people: ["利奥·格罗斯", "法比安·莫恩", "格哈德·迈尔"],
  teaser: "五个小六边形排成一排，像一截蜂窝——这是人第一次这么清楚地看到一个分子里面的“骨架”。",
  frame: {
    src: "frames/pentacene.svg",
    alt: "灰色背景上，五个亮线围成的六边形排成一排，中间三个环里面颜色最深；两头各有一道特别亮的白边，上下伸出一根根短短的亮线",
    kind: "示意图",
    by: "本站按原图样子重绘（原图：IBM 苏黎世研究院，L. Gross 等）",
    license: "原图版权属 IBM；示意图为本站绘制",
    page: "https://www.flickr.com/photos/ibm_research_zurich/3839799374/",
    note: "原图没有开放许可，这里放的是照着它画的示意图：五个六边形环、中间更暗的环心、两头的亮边和伸出去的碳氢键，位置关系和原图一样。",
  },
  lines: [
    nian("爸爸，这张图上有什么？好像一截蜂窝！", { part: "这是什么图", look: rings }),
    dad("像吧？五个六边形排成一排。这是一个分子，名字叫并五苯。“五”说的就是这五个环。"),
    nian("分子不是看不见吗？"),
    dad("用眼睛和普通显微镜都看不见。这张图是 2009 年，瑞士 IBM 研究院的格罗斯他们，用一种特别的显微镜“摸”出来的。"),
    dad("先说清楚：原来那张图属于 IBM，有版权，这里放的是照着它画的示意图，环的个数和排法是一样的。", { look: "all" }),
    nian("这个分子有多长？", { look: molecule }),
    dad("从头到尾大约 1.4 纳米。七十万个并五苯头尾接起来，才有一毫米长。"),

    nian("这些亮亮的线是什么？", { part: "亮线是什么", look: oneRing }),
    dad("每个六边形的角上，都有一个碳原子。亮线就是碳原子手拉手连在一起的地方，化学家叫它“化学键”。"),
    nian("那一共有几个碳原子？"),
    dad("22 个碳原子，还有 14 个氢原子。"),
    nian("氢原子在哪？", { look: hydrogens }),
    dad("在外面一圈。你看上下伸出去的这些短短的亮线，就是碳原子拉着氢原子的地方。"),
    dad("不过氢原子本身在图上看得不太清楚，科学家是从这些亮线的位置推出来的。"),
    nian("两头为什么特别亮？", { look: ends }),
    dad("这个问题，连科学家当时也没完全弄明白，说还要再研究。科学就是这样，新照片也会带来新问题。"),

    nian("这种显微镜怎么“摸”？", { part: "针尖上的一个小分子" }),
    dad("它叫原子力显微镜。有一根小小的针尖，挂在一个像音叉一样的东西上，一直在轻轻地振动。"),
    nian("音叉？就是敲一下会嗡嗡响的那个？"),
    dad("对。针尖靠近分子，会被推一推、拉一拉，振动就变快或变慢一点点。科学家量出这一点点变化，就知道下面高还是低。"),
    nian("可是针尖那么粗，怎么摸得出这么细的东西？"),
    dad("问到点子上了！格罗斯他们想了个好办法：先在针尖最尖的地方，粘上一个小小的一氧化碳分子。"),
    nian("在针尖上粘一个分子？"),
    dad("就像在一根针的尖上，再粘一颗特别小的糖粒，用这颗糖粒去碰。它尖尖的、整整齐齐，摸出来的样子就特别清楚。"),
    nian("那针尖会碰到分子吗？"),
    dad("不会碰上，离分子大约半个纳米。两样东西靠得太近，就会互相推开，针尖正是靠这一推，感觉出哪里有原子。"),

    nian("拍这张要多久？", { part: "慢慢地摸", look: molecule }),
    dad("非常慢。他们要把整个分子上上下下一点一点摸遍，一套完整的测量，花了二十多个小时。"),
    nian("比我睡一觉还长！"),
    dad("而且整个装置要放在真空里，冻得非常非常冷，分子才不会乱动。"),
    nian("那这些灰灰的颜色，是照出来的颜色吗？"),
    dad("不是。分子没有我们说的那种颜色，图上的深浅只是表示针尖感觉到的力大还是小。"),

    nian("这是第一次看到分子吗？", { part: "看清骨架" }),
    dad("不是。在这之前，科学家已经能看到一个个分子了，可是它们像一团模糊的小虫子，看不清里面的样子。"),
    nian("那这张厉害在哪？"),
    dad("厉害在看清了分子里面的“骨架”：哪些原子连在一起，连成什么形状，一眼就能看出来。以前化学家只能画在纸上，这回真的看到了。"),
    nian("那能看出哪个是碳、哪个是氢吗？"),
    dad("还不能。这种显微镜只能看出形状，分不出是哪种原子。科学家还在想办法。"),
    nian("我想看看糖分子长什么样！"),
    dad("后来科学家真用这个办法看了好多别的分子。也许有一天，你也能亲手摸一摸。"),
  ],
  remember: "在针尖上粘一个小分子，再用它轻轻地“摸”，科学家第一次清清楚楚看到了一个分子里面的骨架。",
  facts: [
    ["这张图", "原子力显微镜下的并五苯分子（示意图，按原图重绘）"],
    ["做的人", "利奥·格罗斯等，IBM 苏黎世研究院"],
    ["发表", "2009 年 8 月《科学》杂志"],
    ["分子", "22 个碳原子、14 个氢原子，长约 1.4 纳米"],
    ["窍门", "针尖上粘一个一氧化碳分子"],
  ],
  sources: [
    { title: "Gross et al. 2009：The Chemical Structure of a Molecule Resolved by Atomic Force Microscopy（Science 325, 1110）", url: "https://doi.org/10.1126/science.1176210" },
    { title: "IBM Research（Flickr）：Pentacene_2", url: "https://www.flickr.com/photos/ibm_research_zurich/3839799374/" },
    { title: "IBM Research（Flickr）：Pentacene 测量说明", url: "https://www.flickr.com/photos/ibm_research_zurich/3839799318/" },
    { title: "IBM Research（Flickr）：Gross et al. 2009 Figure 1", url: "https://www.flickr.com/photos/ibm_research_zurich/11928754695/" },
    { title: "IBM：Nanotechnology（IBM History）", url: "https://www.ibm.com/history/nanotechnology" },
    { title: "BBC News（2009）：Single molecule's stunning image", url: "https://news.bbc.co.uk/2/hi/science/nature/8225491.stm" },
  ],
};
