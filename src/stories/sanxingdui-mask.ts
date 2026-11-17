import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const mask = spot(0.48, 0.46, 0.36, "青铜面具");
const eyes = [spot(0.31, 0.36, 0.06, "眼睛"), spot(0.59, 0.37, 0.06, "眼睛")];
const eyePair = spot(0.45, 0.36, 0.2, "伸出来的眼睛");
const ears = [spot(0.21, 0.33, 0.09, "耳朵"), spot(0.75, 0.33, 0.1, "耳朵")];
const hole = spot(0.447, 0.29, 0.035, "方孔", 3);
const nose = spot(0.455, 0.53, 0.07, "鼻子");
const mouth = spot(0.46, 0.665, 0.14, "嘴巴");

export const sanxingduiMask: Story = {
  id: "sanxingdui-mask",
  title: "千里眼，顺风耳",
  frameName: "三星堆青铜纵目面具",
  year: -1100,
  circa: true,
  when: "商代晚期，约三千多年前；1986 年出土",
  field: "历史",
  people: ["燕道诚父子", "葛维汉", "砖厂的工人们", "考古学家们"],
  teaser: "眼睛像望远镜一样伸出来，耳朵像翅膀一样张开——三千多年前，古蜀人做了这张大面具。",
  frame: {
    src: "frames/sanxingdui-mask.jpg",
    alt: "深色展柜里一张宽大的青铜面具：两只眼睛像圆柱一样向前伸出，两只大耳朵向两边张开，额头中间有一个方孔，鼻子弯弯，嘴角往上翘，像在微笑",
    kind: "照片",
    by: "Gary Todd 摄，三星堆博物馆藏",
    license: "CC0",
    commons: "File:Ancient Bronze Mask from Sanxingdui with Protruding Eyes & Ears a.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Ancient_Bronze_Mask_from_Sanxingdui_with_Protruding_Eyes_%26_Ears_a.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这是什么？长得好奇怪，眼睛怎么伸出来了？", { part: "这是什么图", look: eyePair }),
    dad("这是一张青铜面具，三千多年前做的，在四川广汉的三星堆出土。大家叫它“青铜纵目面具”。"),
    nian("纵目是什么意思？"),
    dad("就是眼睛竖着往外凸出来。你看，两只眼珠像两根圆柱一样往前伸，伸出来有 16 厘米，差不多一支铅笔那么长。", { look: eyes }),
    nian("它好大呀！", { look: mask }),
    dad("宽 138 厘米，高 66 厘米。比你整个人躺下来还要宽。"),

    nian("它的耳朵也好大！", { part: "千里眼，顺风耳", look: ears }),
    dad("耳朵往两边张开，像两片大翅膀。大家给它起了个外号，叫“千里眼、顺风耳”。"),
    nian("看得远，听得远！"),
    dad("很多专家也是这么猜的：做这张面具的人，大概想让它看得更远、听得更清。"),
    nian("额头上为什么有个小方洞？", { look: hole }),
    dad("那个方孔里，以前可能插着一件装饰，现在不见了，就像拼图少了一块。"),
    nian("鼻子弯弯的。", { look: nose }),
    dad("像一个钩子。鼻子下面黑黑的那块不是洞，是鼻子的影子。"),
    nian("它在笑吗？", { look: mouth }),
    dad("你看嘴角往上翘，长长的一张嘴，好像在神秘地微笑。"),

    nian("这是照着谁做的？", { part: "它是谁", look: mask }),
    dad("没人确切知道。有一本一千六百多年前的书叫《华阳国志》，说古蜀国最早的王叫蚕丛，“其目纵”，眼睛是竖着凸出来的。"),
    nian("那它就是蚕丛！"),
    dad("有专家这么猜。可那本书比面具晚了一千多年才写成，所以这只是一种说法。还有人猜它是神话里的烛龙，或者是太阳神。"),
    nian("我在网上看到有人说，它是外星人！"),
    dad("那是瞎说的。它是古蜀人用青铜铸出来的，他们有自己的想象力，不需要外星人帮忙。"),

    nian("三星堆是怎么发现的？", { part: "挖水车坑挖出来的", look: "all" }),
    dad("1929 年春天，广汉有一对姓燕的父子，在自家旁边挖坑，想装一架水车，结果挖出了四百多件玉器和石器。"),
    nian("挖坑挖出宝贝！"),
    dad("也有资料说是 1927 年。消息传开以后，1934 年，华西协合大学博物馆的葛维汉和林名均来这里正式发掘了十天。"),
    nian("那这张面具是那时候挖到的吗？"),
    dad("不是。又过了五十多年。1986 年 7 月，砖厂的工人在这里挖土烧砖，挖到了一个坑，里面堆满了玉器、青铜器和象牙。"),
    dad("没过一个月，8 月 14 日，又在三十多米外挖到了第二个坑。这张面具，就是从第二个坑里出来的。"),
    nian("工人们一定吓了一跳！"),

    nian("这些东西为什么埋在坑里？", { part: "砸碎、烧过，再埋起来" }),
    dad("奇怪的是，坑里几乎每件东西都被故意砸过、烧过，然后才一层层埋起来。"),
    nian("为什么要砸坏？"),
    dad("科学家还在争论。有人认为这是一场很大的祭祀；也有人认为，是把一座神庙里的东西整个埋掉了。"),
    nian("他们没写下来吗？"),
    dad("三星堆到现在还没有发现文字。没有字可读，考古学家就像侦探，只能从东西本身找线索。"),
    nian("怎么找？"),
    dad("比如把坑里烧过的竹子灰拿去测年代。测了大约两百个样品，知道这些坑是三千两百年到三千年前埋下的，跟商朝晚期差不多同时。"),
    nian("就是在龟甲上刻字的那个商朝？"),
    dad("对！差不多同一个时候，中原的商朝人在龟甲上刻字，四川的古蜀人在铸这些奇特的青铜像。"),
    nian("他们认识吗？"),
    dad("很可能有来往。坑里有一些青铜尊、青铜罍，样子跟商朝的很像；还有些玉器，像是从遥远的西北传过来的。"),

    nian("后来还挖到新东西了吗？", { part: "还在挖", look: "all" }),
    dad("2019 年起，考古学家在旁边又找到了六个新坑。2021 年，他们挖出了半张金面具，金灿灿的，轰动了全国。"),
    nian("金面具！"),
    dad("到 2022 年，新坑里编了号的东西有一万三千多件。还有一棵将近 4 米高的青铜神树，和一个两米六高的青铜大立人。"),
    nian("比两个我还高！"),
    dad("2023 年，三星堆博物馆盖了新馆，这张面具就在里面。成都的金沙遗址也发现了很多跟三星堆相像的宝贝，那里的“太阳神鸟”金饰，成了中国文化遗产的标志。"),
    nian("我想去看看它的眼睛！"),
  ],
  remember: "三千多年前，没有留下文字的古蜀人，用青铜做出了“千里眼、顺风耳”，把他们的想象留给了我们。",
  facts: [
    ["这张图", "三星堆青铜纵目面具"],
    ["年代", "商代晚期，约三千多年前"],
    ["大小", "宽 138 厘米，高 66 厘米，眼珠凸出 16 厘米"],
    ["出土", "1986 年，三星堆二号坑"],
    ["收藏", "四川广汉 三星堆博物馆"],
  ],
  sources: [
    { title: "Wikimedia Commons：Ancient Bronze Mask from Sanxingdui with Protruding Eyes & Ears", url: "https://commons.wikimedia.org/wiki/File:Ancient_Bronze_Mask_from_Sanxingdui_with_Protruding_Eyes_%26_Ears_a.jpg" },
    { title: "四川省文物局：三星堆青铜纵目面具", url: "https://wwj.sc.gov.cn/scwwj/sdai/2023/4/25/11995271d8f5407b88a965b38e4a3fbd.shtml" },
    { title: "上海大学博物馆：青铜纵目面具（K2②:148）", url: "https://museum.shu.edu.cn/info/1030/3736.htm" },
    { title: "四川省文物局：三星堆的发现", url: "https://wwj.sc.gov.cn/scwwj/newpic/2020/4/7/47ac9eb592be423ab934c4d4b4817d3a.shtml" },
    { title: "四川大学档案馆：葛维汉与三星堆首次发掘", url: "https://archives.scu.edu.cn/info/1015/1948.htm" },
    { title: "四川在线：三星堆发现往事", url: "https://sichuan.scol.com.cn/ggxw/202103/58093511.html" },
    { title: "新华网：三星堆遗址新发现 6 个祭祀坑（2021）", url: "https://www.xinhuanet.com/2021-03/20/c_1127234295.htm" },
    { title: "新华网：三星堆考古发掘最新成果（2022）", url: "https://www.news.cn/2022-06/13/c_1128736114.htm" },
    { title: "央视网：青铜大立人", url: "https://m.news.cctv.com/2021/03/26/ARTIdkNRkWcQw2qNoCDzwO06210326.shtml" },
    { title: "中新网：许宏谈三星堆“器物坑”", url: "https://www.chinanews.com.cn/sh/2021/04-05/9447910.shtml" },
    { title: "新华网：三星堆博物馆新馆开馆（2023）", url: "https://www.news.cn/2023-07/27/c_1129771127.htm" },
    { title: "UNESCO Tentative List：Archaeological Sites of the Ancient Shu State", url: "https://whc.unesco.org/en/tentativelists/5816" },
  ],
};
