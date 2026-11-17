import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const chip = spot(0.493, 0.5, 0.075, "芯片", 3);
const board = spot(0.49, 0.5, 0.13, "银色的电路板");
const googleText = spot(0.5, 0.37, 0.12, "Google");
const sycamoreText = spot(0.5, 0.65, 0.12, "Sycamore");

export const sycamoreChip: Story = {
  id: "sycamore-chip",
  title: "200 秒和一万年",
  frameName: "谷歌“悬铃木”量子芯片",
  year: 2019,
  when: "2019 年 10 月 23 日发表；照片是 2025 年在德国慕尼黑的德意志博物馆拍的",
  field: "技术",
  people: ["约翰·马蒂尼斯", "谷歌量子人工智能团队"],
  teaser: "一块指甲盖大小的芯片，要冻到比太空还冷一百倍，才肯干活——它和超级计算机赛了一场跑。",
  frame: {
    src: "frames/sycamore-chip.jpg",
    alt: "博物馆展柜里一块亮闪闪的银色电路板，中间嵌着一块深色的小方形芯片，四周有一圈圈放射出去的细线；上方印着 Google，下方印着 Sycamore",
    kind: "照片",
    by: "Coldupnorth 摄，德意志博物馆（慕尼黑）藏",
    license: "CC BY-SA 4.0",
    commons: "File:Sycamore Quantum Chip.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Sycamore_Quantum_Chip.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图上有什么？一块亮亮的板子，中间有个小黑方块。", { part: "这是什么图", look: board }),
    dad("这是谷歌公司做的一块量子计算机芯片，名字叫“悬铃木”，就是写在下面的 Sycamore。", { look: sycamoreText }),
    nian("上面写的是 Google！", { look: googleText }),
    dad("对。这块芯片现在放在德国慕尼黑的德意志博物馆里，照片就是在那里拍的。"),
    nian("中间那个小黑方块就是芯片？", { look: chip }),
    dad("对，真正干活的就是它，比你的指甲盖大不了多少。四周放射出去的细线，是把信号送进送出的电路。"),

    nian("量子计算机和我们的电脑有什么不一样？", { part: "转着的硬币" }),
    dad("我们的电脑，用的是一个个“比特”，像一枚平放在桌上的硬币，不是正面就是反面，也就是 0 或者 1。"),
    nian("那量子的呢？"),
    dad("量子计算机用的是“量子比特”。常有人打比方：它像一枚还在转的硬币，还没决定是正还是反，一看，才落成一面。"),
    nian("那它一下子能算好多答案？"),
    dad("没那么简单。转着的硬币只是个比方。真正的窍门是，各种可能像水波一样，有的叠在一起变强，有的互相抵消，让对的答案更容易冒出来。"),
    dad("而且每算一次，它也只给出一个答案，要算很多很多次才看得出规律。"),
    nian("这块芯片里有多少个量子比特？", { look: chip }),
    dad("造了 54 个，排成一个方格子。可是有一个坏了，所以那次实验用的是 53 个。"),

    nian("它为什么放在博物馆里，不用电吗？", { part: "比太空还冷" }),
    dad("它干活的时候，要装在一种特别的冰箱里，冻到离绝对零度只差不到零点零二度。绝对零度，就是世界上最冷最冷的温度。"),
    nian("那是多冷？"),
    dad("宇宙深处空荡荡的地方，比绝对零度高大约 2.7 度；它要比那里再冷一百多倍。这种冰箱挂起来，一层一层金灿灿的，像一盏吊灯，芯片就藏在最底下。"),
    nian("为什么要那么冷？"),
    dad("量子比特特别娇气，一点点热、一点点震动，都会把它们“吵醒”，算错。冻得越冷，它们越安静。"),

    nian("它和超级计算机比赛了吗？", { part: "200 秒对一万年", look: "all" }),
    dad("比了。2019 年 10 月，谷歌在《自然》杂志上说：有一道特别的题，悬铃木算了大约 200 秒。"),
    nian("那超级计算机呢？"),
    dad("谷歌估计，当时最快的超级计算机，要算一万年。他们说，量子计算机第一次在一件事上超过了普通计算机。"),
    nian("200 秒对一万年！量子赢了！"),
    dad("先别急。一万年是谷歌自己算出来的估计，并没有真的让超级计算机跑一万年。"),

    nian("那后来呢？", { part: "比赛还没完" }),
    dad("几乎同时，IBM 公司就说：换个办法，超级计算机大约两天半就够了。不过这也只是他们的估计。"),
    nian("到底谁说得对？"),
    dad("2022 年，中国科学院的科学家真的动手算了：用 512 块显卡，大约 15 个小时，就算出了同一道题。"),
    nian("普通计算机追上来了！"),
    dad("对。这就像一场接力赛，量子计算机往前跑，普通计算机想出新办法又追上来。中国的“九章”“祖冲之”，谷歌后来的“柳树”芯片，都在接着跑。"),
    nian("那量子计算机现在能干什么？"),
    dad("这道比赛题本身没什么用处，就像跑步比赛，比的是速度。它现在还不能帮你写作业，也不能破解密码。"),
    nian("那为什么还要做？"),
    dad("因为它证明了这条路走得通。很多人觉得“霸权”这个词太夸张，更喜欢叫“量子优越性”。科学家还在想办法，让它少犯错、做有用的事。"),
    nian("我想看看那个吊灯一样的冰箱！"),
  ],
  remember: "悬铃木芯片冻得比太空还冷，用 200 秒算完一道题；谷歌说超级计算机要一万年，后来普通计算机又追了上来，比赛还在继续。",
  facts: [
    ["这张图", "谷歌“悬铃木”量子芯片（德意志博物馆）"],
    ["发表", "2019 年 10 月 23 日《自然》"],
    ["量子比特", "造了 54 个，实验用了 53 个"],
    ["温度", "低于 0.02 开尔文"],
    ["比赛", "200 秒；谷歌估计超算要 1 万年，IBM 估计 2.5 天，2022 年 512 块显卡约 15 小时"],
  ],
  sources: [
    { title: "Wikimedia Commons：Sycamore Quantum Chip.jpg", url: "https://commons.wikimedia.org/wiki/File:Sycamore_Quantum_Chip.jpg" },
    { title: "Arute et al. 2019：Quantum supremacy using a programmable superconducting processor（Nature 574, 505）", url: "https://www.nature.com/articles/s41586-019-1666-5" },
    { title: "Google Research Blog（2019）：Quantum Supremacy Using a Programmable Superconducting Processor", url: "https://research.google/blog/quantum-supremacy-using-a-programmable-superconducting-processor/" },
    { title: "IBM Research（2019）：On \"Quantum Supremacy\"", url: "https://www.ibm.com/blogs/research/2019/10/on-quantum-supremacy/" },
    { title: "Pan, Chen & Zhang 2022：Solving the Sampling Problem of the Sycamore Quantum Circuits（PRL 129, 090502）", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.129.090502" },
    { title: "Zhong et al. 2020：Quantum computational advantage using photons（Science，九章）", url: "https://www.science.org/doi/10.1126/science.abe8770" },
    { title: "Wu et al. 2021：Strong Quantum Computational Advantage Using a Superconducting Quantum Processor（PRL，祖冲之）", url: "https://journals.aps.org/prl/abstract/10.1103/PhysRevLett.127.180501" },
    { title: "Google（2024）：Meet Willow, our state-of-the-art quantum chip", url: "https://blog.google/technology/research/google-willow-quantum-chip/" },
    { title: "NASA：Tests of Big Bang: The CMB", url: "https://map.gsfc.nasa.gov/universe/bb_tests_cmb.html" },
    { title: "IBM：What is quantum computing?", url: "https://www.ibm.com/think/topics/quantum-computing" },
  ],
};
