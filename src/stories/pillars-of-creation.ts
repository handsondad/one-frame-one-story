import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const left = spot(0.19, 0.52, 0.22, "最高的柱子");
const middle = spot(0.57, 0.66, 0.14, "中间的柱子");
const right = spot(0.79, 0.78, 0.12, "最小的柱子");
const fingers = spot(0.29, 0.17, 0.09, "小手指", 2.5);
const fingertip = spot(0.267, 0.128, 0.02, "一根手指", 5);
const rim = spot(0.3, 0.17, 0.07, "发亮的边");
const middleTip = spot(0.625, 0.355, 0.05, "发亮的头", 4);
const star = spot(0.308, 0.591, 0.03, "亮星", 4);
const steps = spot(0.78, 0.19, 0.2, "黑色台阶");

export const pillarsOfCreation: Story = {
  id: "pillars-of-creation",
  title: "宇宙里的三根柱子",
  frameName: "创生之柱",
  year: 1995,
  when: "1995 年 4 月 1 日拍摄，11 月 2 日公布",
  field: "天文",
  people: ["杰夫·赫斯特", "保罗·斯科恩"],
  teaser: "三根高高的“柱子”立在星空里，每根小手指尖都比整个太阳系还大，里面藏着刚出生的星星。",
  frame: {
    src: "frames/pillars-of-creation.jpg",
    alt: "绿色的天空里立着三根深褐色的“柱子”，左边最高，中间一根，右边最矮；柱子顶上镶着亮黄的边，冒出一根根小手指；右上角缺了一块台阶形状的黑色",
    kind: "照片",
    by: "NASA、Jeff Hester、Paul Scowen（亚利桑那州立大学），哈勃太空望远镜 WFPC2 拍摄",
    license: "公有领域",
    commons: "File:Eagle nebula pillars.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Eagle_nebula_pillars.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图上有什么？三根大柱子！", { part: "这是什么图", look: [left, middle, right] }),
    dad("看上去像柱子，其实是三团又冷又浓的气体和尘埃，在太空里立着。它们在老鹰星云里，大家叫它们“创生之柱”。"),
    nian("创生是什么意思？"),
    dad("就是“生出来”。这些柱子里面，正在生出新的星星，所以叫创生之柱。"),
    nian("谁拍的？"),
    dad("哈勃太空望远镜。1995 年 4 月 1 日，天文学家赫斯特和斯科恩用它拍了这张照片，11 月 2 日公布出来，一下子就出名了。"),
    nian("4 月 1 日，愚人节！"),
    dad("对，可这张照片一点也不是玩笑。拿到数据的那天，斯科恩给赫斯特打电话，只说了一句：“你得马上过来。”"),

    nian("这根最高的柱子有多高？", { part: "大得想不出来", look: left }),
    dad("从底到顶大约 4 光年。光一秒钟能绕地球七圈半，要跑整整 4 年，才能从柱子脚跑到柱子头。"),
    nian("4 年！"),
    dad("离太阳最近的那颗星，光大约要跑 4 年多。所以这根柱子，差不多有从太阳到最近一颗星那么长。"),
    nian("顶上那些小小的是什么？", { look: fingers }),
    dad("像不像伸出来的小手指？科学家叫它们“蒸发中的气体团”，在这张照片里找到了大约 50 个。"),
    nian("它们好小呀。", { look: fingertip }),
    dad("只是看着小。每一根手指尖，都比我们整个太阳系还要大一些。"),
    nian("那这些柱子离我们多远？", { look: "all" }),
    dad("大约六千五百到七千光年。两个数字都有官方的说法，因为量这么远的距离，本来就很难量得特别准。"),
    nian("那我们看到的，是它现在的样子吗？"),
    dad("不是。这光大约六七千年前就出发了，比在甲骨上刻字的商朝还要早。我们看到的，是它很久很久以前的样子。"),

    nian("柱子的边为什么亮亮的？", { part: "被星光吹走的沙子", look: rim }),
    dad("在照片上方、画面外面，有一群又热又亮的年轻大星星，有的比太阳亮十万倍。它们的光照在柱子上，把柱子表面的气体一点点“烤”掉。"),
    nian("柱子会被烤没吗？"),
    dad("会慢慢变小。赫斯特打了个比方：就像沙漠里刮大风，轻的沙子被吹走了，重的石头留了下来。"),
    nian("那小手指就是石头！", { look: fingers }),
    dad("说得对！小手指是特别浓的气体团，不那么容易被吹走，就留了下来，像柱子上长出的手指。"),
    nian("那小手指里面有什么？"),
    dad("有的里面可能正在长出一颗新星星。等外面的气体被吹光，它就露出来，赫斯特说，像冰淇淋顶上的一颗樱桃。"),
    nian("中间这根柱子的头也好亮。", { look: middleTip }),
    dad("那里也正被星光照着、吹着。再过大约三百万年，这几根柱子可能就被吹得差不多了。"),

    nian("柱子为什么是绿色的？", { part: "颜色是密码" }),
    dad("这些颜色不是我们眼睛看到的样子，是科学家涂上去的“密码”。绿色代表氢，红色代表硫，蓝色代表氧。"),
    nian("像给不同的东西涂不同的颜色！"),
    dad("对。这样一看，就知道哪里是什么气体。要是你真的飞过去，看到的不会是这个颜色。"),
    nian("那这颗亮晶晶的呢？", { look: star }),
    dad("那是一颗星星，在我们和柱子之间。它身上那几道光芒，是望远镜自己造成的，就像你眯着眼睛看路灯，也会看到光芒一样。"),

    nian("右上角为什么缺了一块？像台阶。", { part: "台阶一样的黑角", look: steps }),
    dad("哈勃的这台相机里面有四个小相机，拼在一起拍。其中一个看得特别细，把东西放得更大。"),
    nian("那怎么会黑？"),
    dad("为了拼在一起，要把放大的那块缩小，缩小以后就填不满它的位置，空出来的地方就成了黑色的台阶。它不是坏了，也不是少了东西。"),
    nian("和哈勃那张深空照片一样！"),
    dad("对，那张也是同一年、同一台相机拍的，所以也有一模一样的台阶。"),

    nian("后来还有人去拍过吗？", { part: "再去看一看" }),
    dad("2014 年，哈勃换了新相机，又拍了一次，比原来清楚得多。科学家把两张一比，发现一颗小星星喷出的气流，19 年里又长长了一大截。"),
    nian("那它们会突然消失吗？"),
    dad("有一段时间，有科学家猜，附近有颗星星爆炸，已经把柱子吹散了，只是光还没传过来。后来更多的观测不太支持这个猜法。"),
    dad("2022 年，詹姆斯·韦布太空望远镜也拍了它们。韦布能看红外线，看得穿灰尘，柱子里那些红红的、刚生出来的小星星，一下子露了出来。"),
    nian("我想看那些小星星宝宝！"),
  ],
  remember: "创生之柱是三团比太阳系大得多的气体和尘埃，星光把它们一点点吹走，留下的“小手指”里正在长出新星星。",
  facts: [
    ["这张图", "哈勃太空望远镜拍的老鹰星云“创生之柱”"],
    ["拍摄", "1995 年 4 月 1 日，WFPC2 相机，32 张照片拼成"],
    ["最高的柱子", "约 4 光年"],
    ["距离", "约 6500～7000 光年"],
    ["颜色", "绿色是氢，红色是硫，蓝色是氧"],
  ],
  sources: [
    { title: "Wikimedia Commons：Eagle nebula pillars.jpg", url: "https://commons.wikimedia.org/wiki/File:Eagle_nebula_pillars.jpg" },
    { title: "NASA：Gas Pillars in the Eagle Nebula (M16): Pillars of Creation", url: "https://science.nasa.gov/asset/hubble/gas-pillars-in-the-eagle-nebula-m16-pillars-of-creation-in-a-star-forming-region/" },
    { title: "HubbleSite：Embryonic Stars Emerge from Interstellar \"Eggs\"（1995）", url: "https://hubblesite.org/contents/news-releases/1995/news-1995-44" },
    { title: "NASA：Star-Birth Clouds in M16: Stellar \"Eggs\" Emerge", url: "https://science.nasa.gov/asset/hubble/star-birth-clouds-in-m16-stellar-eggs-emerge-from-molecular-cloud/" },
    { title: "NASA：Messier 16", url: "https://science.nasa.gov/mission/hubble/science/explore-the-night-sky/hubble-messier-catalog/messier-16/" },
    { title: "NASA：What is a light-year?", url: "https://science.nasa.gov/exoplanets/what-is-a-light-year/" },
    { title: "NASA：Hubble Goes High-Definition to Revisit Iconic 'Pillars of Creation'（2015）", url: "https://science.nasa.gov/missions/hubble/hubble-goes-high-definition-to-revisit-iconic-pillars-of-creation/" },
    { title: "ESA/Hubble：heic1501", url: "https://esahubble.org/news/heic1501/" },
    { title: "ESO：eso1518 Pillars of Destruction", url: "https://www.eso.org/public/news/eso1518/" },
    { title: "ESA/Webb：weic2216 Pillars of Creation", url: "https://esawebb.org/news/weic2216/" },
    { title: "Spitzer：Pillars of Destruction（2007）", url: "https://www.spitzer.caltech.edu/audio/spitzeraudio-026-pillars-of-destruction" },
    { title: "Herschel 观测老鹰星云的尘埃温度（arXiv:1204.6317，2012）", url: "https://arxiv.org/abs/1204.6317" },
    { title: "Hester et al. 1996, AJ 111, 2349", url: "https://authors.library.caltech.edu/53670/1/1996AJ____111_2349H.pdf" },
  ],
};
