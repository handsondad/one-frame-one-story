import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const atom = spot(0.5, 0.5, 0.012, "原子", 6);
const needles = [spot(0.42, 0.5, 0.06, "针尖"), spot(0.58, 0.5, 0.06, "针尖")];
const blades = [spot(0.5, 0.42, 0.07, "刀片电极"), spot(0.5, 0.58, 0.07)];
const holders = [spot(0.23, 0.55, 0.07, "白色底座"), spot(0.77, 0.55, 0.07)];
const post = spot(0.5, 0.89, 0.05, "黄铜柱");

export const singleAtom: Story = {
  id: "single-atom",
  title: "两根针中间的小紫点",
  frameName: "离子阱里的一个原子",
  year: 2017,
  when: "2017 年 8 月 7 日凌晨，英国牛津大学；2018 年获奖",
  field: "物理",
  people: ["大卫·纳德林格", "汉斯·德默尔特"],
  teaser: "两根针尖中间，悬着一个小小的紫色光点——那是一个原子发出的光。",
  frame: {
    src: "frames/single-atom.svg",
    alt: "黑色背景里，左右两根亮闪闪的金属针尖对着尖，中间悬着一个很小的紫色光点；上下是灰色的 V 形金属块，两边是白色底座，下面有一根黄铜柱，四周有青色的光晕",
    kind: "示意图",
    by: "本站按照片构图重绘（原照片：David Nadlinger，牛津大学）",
    license: "原照片版权属拍摄者；示意图为本站绘制",
    page: "https://klickverbot.at/blog/2018/02/photographing-a-single-atom/",
    note: "原照片没有开放许可，这里放的是照着它的构图画的示意图：两根针尖、中间的紫色光点、上下的刀片电极、两边的底座和下面的黄铜柱，位置关系和原照片一致。",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图上有什么？两根针？", { part: "这是什么图", look: needles }),
    dad("对，两根金属针，尖对着尖。仔细看，两个针尖中间有一个小小的紫色光点。", { look: atom }),
    nian("那个小点是什么？"),
    dad("是一个原子！准确地说，是一个锶原子发出的光。"),
    dad("先说清楚：原来的照片是牛津大学的纳德林格拍的，有版权，这里放的是照着它的样子画的示意图，东西的位置是一样的。", { look: "all" }),
    nian("原子不是小到看不见吗？"),
    dad("原子确实非常小。大约两百万个排成一排，才有一毫米长。"),
    nian("那怎么拍得到？"),

    nian("它怎么飘在半空中？", { part: "用电抓住一个原子", look: atom }),
    dad("这个原子少了一个电子，带着一点正电。科学家用电场把它“抓”住，让它几乎一动不动地悬在两根针中间。"),
    nian("用电怎么抓？"),
    dad("就像几只手从不同方向轻轻地推，它往哪边跑，就从哪边把它推回来。这套装置叫“离子阱”。"),
    nian("这两根针离得多远？", { look: needles }),
    dad("大约两毫米，就像两粒米并排放在一起那么宽。"),
    nian("上下这两块灰色的是什么？", { look: blades }),
    dad("也是电极，形状像刀片，尖口对着中间，和两根针一起围住这个原子。"),
    nian("两边白色的呢？", { look: holders }),
    dad("是不导电的底座，把针固定住。下面这根黄铜柱也是装置的一部分。", { look: post }),
    nian("它们都放在哪里？", { look: "all" }),
    dad("放在一个抽成真空的金属罐子里，里面几乎没有空气，不然空气分子会把原子撞走。照片是隔着罐子上的玻璃窗拍的，外面那圈青色的光，就是窗口的边。"),

    nian("原子怎么会发光？", { part: "原子发出的光" }),
    dad("科学家用一束蓝紫色的激光照着它。原子吸收了光，又马上把光放出来，一秒钟能放出大约一千万个小小的光粒子。"),
    nian("一千万个！"),
    dad("听起来很多，可一个光粒子实在太弱了。用普通相机拍，一下子还是什么也看不见。"),
    nian("那纳德林格怎么拍的？"),
    dad("他用一台普通的单反相机，让快门一直开着 30 秒，把光一点一点攒起来，这个小点才显了出来。"),
    nian("像晚上看萤火虫！"),
    dad("说得真好。我们看到的是原子发出的光，就像晚上看到的是萤火虫的光，而不是萤火虫的身体。"),
    nian("那这个点就是原子的大小吗？", { look: atom }),
    dad("不是。真正的原子比这个点小得多得多。光点看起来大，是因为光透过镜头时会散开一点点，相机还会有一点点抖动。"),

    nian("这是世界上第一张原子的照片吗？", { part: "不是第一张" }),
    dad("很多新闻是这么说的，可纳德林格自己说：远远不是第一张，早了差不多四十年。"),
    nian("那第一张是谁拍的？"),
    dad("大约 1980 年，德国和美国的科学家用差不多的办法，抓住了一个钡原子，也拍到了它发出的蓝色光点。"),
    nian("那他们有没有给原子起名字？"),
    dad("有！其中一位叫德默尔特的科学家，把那个钡原子叫作“阿斯特丽德”。他后来因为发明离子阱技术，得了 1989 年的诺贝尔物理学奖。"),
    nian("那纳德林格这张有什么特别的？"),
    dad("它拍得特别漂亮，一眼就能看懂。2018 年，它在英国的一个科学摄影比赛里拿了总冠军。他自己也说，这是摄影比赛的奖，不是科学奖。"),

    nian("抓住一个原子有什么用？", { part: "一个原子能做什么", look: "all" }),
    dad("用处可大了。一个安安静静的原子，可以用来做非常准的钟，比我们戴的手表准得多。"),
    nian("还有呢？"),
    dad("纳德林格所在的实验室，用一个个这样抓住的原子做量子计算机。原子亮还是暗，就代表计算的结果。"),
    nian("一个原子就能算东西？"),
    dad("一个一个排起来就能。科学家们正在努力，让很多个原子一起工作。"),
    nian("他为什么叫它“淡蓝色的小点”？"),
    dad("因为它让人想起旅行者 1 号从远处拍的地球，叫“暗淡蓝点”。一个是我们的家，一个是一颗原子，都只是一个小小的光点。"),
  ],
  remember: "两根针尖中间的小紫点，是一个被电抓住的原子发出的光：真正的原子，比这个点还要小得多得多。",
  facts: [
    ["这张图", "离子阱里的一个锶离子（示意图，按原照片构图重绘）"],
    ["拍摄", "大卫·纳德林格，2017 年 8 月，牛津大学"],
    ["相机", "普通单反相机，曝光 30 秒"],
    ["针尖距离", "约 2 毫米"],
    ["更早的照片", "约 1980 年就拍到过单个钡离子的光点"],
  ],
  sources: [
    { title: "David Nadlinger：Photographing a single atom", url: "https://klickverbot.at/blog/2018/02/photographing-a-single-atom/" },
    { title: "EPSRC（存档）：Single trapped atom captures science photography competition's top prize", url: "https://webarchive.nationalarchives.gov.uk/ukgwa/20200930161403tf_/http://epsrc.ukri.org/newsevents/news/single-trapped-atom-captures-science-photography-competitions-top-prize/" },
    { title: "University of Oxford：Ion Trap Quantum Computing group", url: "https://www.physics.ox.ac.uk/research/group/ion-trap-quantum-computing" },
    { title: "NQIT：Single trapped atom captures top prize", url: "https://nqit.ox.ac.uk/news/single-trapped-atom-captures-science-photography-competitions-top-prize.html" },
    { title: "National Geographic：Trapped atom photograph", url: "https://www.nationalgeographic.com/science/article/trapped-atom-photograph-long-exposure-competition-spd" },
    { title: "Neuhauser et al. 1980：Localized visible Ba+ mono-ion oscillator", url: "https://journals.aps.org/pra/abstract/10.1103/PhysRevA.22.1137" },
    { title: "Hans Dehmelt Nobel Lecture（1989）", url: "https://www.nobelprize.org/uploads/2018/06/dehmelt-lecture.pdf" },
    { title: "Nobel Prize：Physics 1989", url: "https://www.nobelprize.org/prizes/physics/1989/summary/" },
  ],
};
