import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const letterI = spot(0.178, 0.5, 0.13, "I");
const letterB = spot(0.44, 0.5, 0.14, "B");
const letterM = spot(0.758, 0.5, 0.16, "M");
const oneAtom = spot(0.758, 0.5, 0.025, "一个氙原子", 4);
const surface = spot(0.5, 0.86, 0.08, "镍表面");

export const ibmAtoms: Story = {
  id: "ibm-atoms",
  title: "用 35 个原子写字",
  frameName: "35 个氙原子拼成的“IBM”",
  year: 1989,
  when: "1989 年 11 月，美国加州圣何塞，IBM 阿尔马登研究中心；1990 年 4 月发表",
  field: "物理",
  people: ["唐·艾格勒", "埃哈德·施魏策尔"],
  teaser: "一个一个地挪原子，花了 22 个小时，拼出了世界上最小的三个字母。",
  frame: {
    src: "frames/ibm-atoms.svg",
    alt: "黑色背景上一块灰色的金属板，上面立着 35 个蓝白色的小山包，排成三个字母 I、B、M",
    kind: "示意图",
    by: "本站按原图样子重绘（原图：IBM 阿尔马登研究中心，D. M. Eigler、E. K. Schweizer）",
    license: "原图版权属 IBM；示意图为本站绘制",
    page: "https://www.ibm.com/history/nanotechnology",
    note: "原图没有开放许可，这里放的是照着它画的示意图：灰色的镍表面上，35 个氙原子排成 I、B、M，每个字母 5 个原子高，原子的个数和排法和原图一样。",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图上有什么？一个个小山包，排成了字母！", { part: "这是什么图", look: [letterI, letterB, letterM] }),
    dad("对，排成了 I、B、M 三个字母。每个小山包，都是一个原子。"),
    nian("原子？那么小的东西也能排成字？"),
    dad("能！1989 年，IBM 公司的科学家艾格勒和施魏策尔，把 35 个氙原子一个一个挪到位置上，拼出了自己公司的名字。"),
    dad("先说清楚：原来那张图属于 IBM，有版权，这里放的是照着它画的示意图，原子的个数和排法是一样的。", { look: "all" }),
    nian("一共多少个？我来数数。"),
    dad("I 用了 9 个，B 用了 13 个，M 也用了 13 个，加起来 35 个。每个字母只有 5 个原子那么高。", { look: letterI }),

    nian("下面灰色的是什么？", { part: "一块冰冷的镍", look: surface }),
    dad("是一块镍金属，表面磨得特别平。氙原子就趴在它上面。"),
    nian("原子不会自己跑掉吗？"),
    dad("会，所以要让它们冷静下来。科学家把整个装置冻到零下 269 摄氏度，比南极最冷的时候还冷得多，还把周围的空气几乎抽光。"),
    nian("冻住了就不乱跑了？"),
    dad("对，冷到这个地步，原子几乎躺着不动，才能一个一个地摆。"),

    nian("这么小，用什么看呢？", { part: "用针尖“摸”原子" }),
    dad("用一种叫扫描隧道显微镜的东西。它其实不是在“看”，而是在“摸”。"),
    nian("怎么摸？"),
    dad("它有一根非常非常尖的钨针，针尖离表面只有大约两个原子那么远，一行一行地扫过去。"),
    dad("针尖和表面并没有碰上，可中间会悄悄流过一点点电流。针尖靠近原子，电流就变大，离远了就变小。"),
    nian("就像盲人用手指摸盲文！"),
    dad("说得真好。电脑把一路上的高高低低记下来，再画成一张图。所以这些蓝色的小山包，颜色和样子都是电脑画上去的。"),
    nian("那这台显微镜是谁发明的？"),
    dad("是宾宁和罗雷尔两位科学家。1986 年，他们因为发明它，得了诺贝尔物理学奖。"),

    nian("原子是怎么挪过去的？", { part: "22 个小时", look: oneAtom }),
    dad("把针尖慢慢往下放，靠近一个氙原子，原子就会被针尖轻轻吸住。"),
    dad("然后针尖往旁边挪，原子就跟着滑过去。到了地方，把针尖抬起来，原子就留在那儿了。"),
    nian("像用磁铁隔着桌子拖回形针！"),
    dad("有点像。当时他们是把原子在表面上拖着走，还没有学会把它整个拿起来。"),
    nian("拼完要多久？", { look: [letterI, letterB, letterM] }),
    dad("整整 22 个小时。35 个原子，平均挪一个要半个多小时。"),
    nian("他们第一次挪动原子的时候，高兴吗？"),
    dad("高兴坏了！1989 年 9 月 28 日，艾格勒第一次挪动了一个原子，在实验本上写了大大的几个字：“做到了！”"),
    dad("然后他又把那个原子来回挪了三次。他说，科学里最要紧的，是同样的事再做一遍，还能做成。"),

    nian("这是人类第一次看见原子吗？", { part: "厉害在哪里" }),
    dad("不是。在这之前，扫描隧道显微镜已经能“摸”出一排排原子了。"),
    nian("那它厉害在哪？"),
    dad("厉害在“摆”。以前只能看原子原来在哪，这一次，人想让原子去哪，它就去哪。"),
    nian("后来呢？"),
    dad("1990 年 4 月，这张图登上了《自然》杂志的封面。后来科学家学会了更多本领，2013 年，IBM 还用一个个小分子拍了一部动画片，叫《男孩和他的原子》。"),
    nian("用原子拍动画片？"),
    dad("准确地说，是用一氧化碳分子，一共 242 张画面，进了吉尼斯世界纪录，是世界上最小的定格动画。“原子”是那个男孩的名字。"),
    nian("我也想用原子写我的名字！"),
  ],
  remember: "1989 年，科学家用针尖把 35 个原子一个一个挪到位置上，第一次让原子听人的话，排成了“IBM”。",
  facts: [
    ["这张图", "35 个氙原子拼成的“IBM”（示意图，按原图重绘）"],
    ["做的人", "唐·艾格勒、埃哈德·施魏策尔，IBM 阿尔马登研究中心"],
    ["工具", "扫描隧道显微镜，零下 269 ℃、真空里"],
    ["用时", "22 小时"],
    ["发表", "1990 年 4 月 5 日《自然》"],
  ],
  sources: [
    { title: "IBM：Nanotechnology（IBM History）", url: "https://www.ibm.com/history/nanotechnology" },
    { title: "Eigler & Schweizer 1990：Positioning single atoms with a scanning tunnelling microscope（Nature 344, 524）", url: "https://www.nature.com/articles/344524a0" },
    { title: "IBM Research（Flickr）：IBM in Xenon", url: "https://www.flickr.com/photos/ibm_research_zurich/8284627390/" },
    { title: "The New York Times（1990）：2 Researchers Spell 'I.B.M.,' Atom by Atom", url: "https://www.nytimes.com/1990/04/05/us/2-researchers-spell-ibm-atom-by-atom.html" },
    { title: "The Kavli Prize：Nanoscience 2010", url: "https://www.kavliprize.org/prizes/nanoscience/2010" },
    { title: "CNET（2009）：IBM's 35 atoms and the rise of nanotech", url: "https://www.cnet.com/culture/ibms-35-atoms-and-the-rise-of-nanotech/" },
    { title: "Nobel Prize：Physics 1986 press release", url: "https://www.nobelprize.org/prizes/physics/1986/press-release/" },
    { title: "Guinness World Records：Smallest stop-motion film", url: "https://www.guinnessworldrecords.com/world-records/smallest-stop-motion-film" },
  ],
};
