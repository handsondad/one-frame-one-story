import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const original: Frame = {
  src: "frames/moon-aldrin.jpg",
  alt: "月球表面上，一位穿白色宇航服、戴金色面罩的宇航员面朝镜头站着，左手抬起；黑色的天空，灰色的地面上有很多脚印，他的影子长长地拖向左下方",
  kind: "照片",
  by: "尼尔·阿姆斯特朗摄，NASA（AS11-40-5903）",
  license: "公有领域（NASA）",
  commons: "File:Aldrin Apollo 11 original.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Aldrin_Apollo_11_original.jpg",
  note: "这是原始底片的样子：地平线有点斜，背包顶上被切掉了。大家常见的版本是后来转正、裁了边、又在上面补了一块黑天的。",
};
const aldrin = spot(0.54, 0.29, 0.3, "奥尔德林");
const visor = spot(0.514, 0.093, 0.06, "金色面罩");
const armstrong = spot(0.512, 0.084, 0.015, "阿姆斯特朗", 4);
const eagle = spot(0.543, 0.077, 0.035, "登月舱");
const sky = spot(0.15, 0.06, 0.06, "黑色的天");
const prints = spot(0.2, 0.76, 0.2, "脚印");
const boot = spot(0.47, 0.565, 0.035, "推起的土");
const knees = [spot(0.495, 0.49, 0.025, "膝盖"), spot(0.619, 0.48, 0.025)];
const shadow = spot(0.27, 0.71, 0.18, "影子");
const glove = spot(0.575, 0.25, 0.045, "手腕上的清单");
const crosses = [spot(0.305, 0.127, 0.025, "小十字"), spot(0.69, 0.123, 0.025)];
const horizon = [spot(0.12, 0.125, 0.08, "地平线"), spot(0.85, 0.045, 0.08)];

const release: Frame = {
  title: "大家常见的版本（转正、补了黑天）",
  src: "frames/moon-aldrin-release.jpg",
  alt: "同一张月球照片，宇航员站得端端正正，头顶上方多了一大块黑色的天空",
  kind: "照片",
  by: "尼尔·阿姆斯特朗摄，NASA 发布时修整",
  license: "公有领域（NASA）",
  commons: "File:Aldrin Apollo 11.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Aldrin_Apollo_11.jpg",
};

export const moonAldrin: Story = {
  id: "moon-aldrin",
  title: "面罩里的摄影师",
  frameName: "登月者",
  year: 1969,
  when: "1969 年 7 月 21 日（北京时间中午），月球静海",
  field: "技术",
  people: ["尼尔·阿姆斯特朗", "巴兹·奥尔德林", "迈克尔·柯林斯"],
  teaser: "第一个登上月球的人，几乎没有给自己留下照片——可他藏在了这张照片里。",
  frame: original,
  lines: [
    nian("爸爸，这张图上有什么？一个穿白衣服的人，站在灰灰的地上，天是黑的。", { part: "这是什么图", look: aldrin }),
    dad("这是月球！1969 年 7 月，美国“阿波罗 11 号”的宇航员第一次登上了月球。站着的这位叫巴兹·奥尔德林。"),
    nian("那是谁拍的？"),
    dad("他的伙伴尼尔·阿姆斯特朗，第一个踩上月球的人。"),
    nian("第一个人在照片里吗？"),
    dad("在！你看奥尔德林的金色面罩。", { look: visor }),
    nian("面罩里有个小人！", { look: armstrong }),
    dad("面罩弯弯的，像一面镜子。这个小小的人影，就是拿着相机的阿姆斯特朗，他把自己也拍进去了。"),
    nian("旁边金色的是什么？", { look: eagle }),
    dad("是他们坐着降落的登月舱，名字叫“鹰”。"),
    nian("第一个上月球的人，自己的照片为什么这么少？"),
    dad("因为相机大部分时间在他手里。就像我们出去玩，拍照的爸爸总是不在照片里。计划里，本来就是由他给伙伴拍照。"),

    nian("这是什么时候拍的？", { part: "一小步", look: "all" }),
    dad("北京时间 1969 年 7 月 21 日中午。一个多小时前，阿姆斯特朗走下梯子，说了那句有名的话：这是一个人的一小步，却是人类的一大步。"),
    dad("他后来说，他想说的是“一个人”，可录音里那个表示“一个”的英文小词听不出来，到今天大家还在讨论。"),
    nian("全世界都看到了吗？"),
    dad("大约六亿五千万人在电视前看着。月球上说的话传回地球，要一秒多一点，问一句、答一句，要等两秒半。"),

    nian("白天怎么天是黑的？", { part: "黑黑的天", look: sky }),
    dad("月球上没有空气。地球的天是蓝的，是因为空气把阳光散开了；没有空气，太阳照着，天也是黑的。"),
    nian("那怎么一颗星星都没有？"),
    dad("地面和宇航服被太阳照得很亮，相机只开了一眨眼的工夫，暗暗的星星来不及拍进去。晚上在路灯下给人拍照，背后也拍不到星星。"),
    nian("有人说没有星星，所以登月是假的。"),
    dad("那是误会。还有更硬的证据：今天绕着月球飞的探测器，能拍到他们留下的登月舱底座和一条条脚印小路。"),

    nian("地上一个个坑是什么？", { part: "脚印", look: prints }),
    dad("是靴子踩出来的脚印。月球上的土像很细的面粉，一踩就是一个清清楚楚的印子。"),
    nian("他脚边有一小堆土。", { look: boot }),
    dad("他正往前迈步，靴子推起了一点土。再看他的膝盖，也蹭得脏脏的。", { look: knees }),
    nian("脚印会一直留在那儿吗？", { look: prints }),
    dad("那里没有风，也不下雨，能留很久。不过天上会落下很小很小的陨石，慢慢把土搅乱，科学家估计，几万年后就看不清了。"),
    nian("他的影子怎么这么长？", { look: shadow }),
    dad("太阳在他身后，挂得很低，就像我们早上的影子总是长长的。"),

    nian("他抬着手在看什么？", { part: "宇航服上的小秘密", look: glove }),
    dad("宇航员的袖口上缝着一张小清单，写着要做的事。他很可能在看下一步该干什么。"),
    nian("金色的面罩，是金子做的吗？", { look: visor }),
    dad("真的有一层金子，薄得能看透。它挡住刺眼的阳光和热，保护眼睛。"),
    nian("这些小十字是什么？", { look: crosses }),
    dad("相机里有一块刻着小十字的玻璃片，每张照片上都会有。科学家可以拿它们当尺子，量照片里的东西。"),

    nian("我在书上看到的这张，好像跟这张不太一样。", { part: "后来补上的天" }),
    dad("你真细心！大家常见的那张是后来修过的：把照片转正，四边裁掉一些，上面又补了一大块黑天，看起来更整齐。", { show: release, look: "all" }),
    nian("为什么要补？"),
    dad("阿姆斯特朗拍的时候，把奥尔德林背包的顶切掉了，地平线也有点歪。补的只是黑黑的天，人和月面一点都没改。"),
    nian("原来那张歪在哪儿？", { show: original, look: horizon }),
    dad("你看地平线，左边低、右边高。在月球上，穿着笨重的宇航服，相机挂在胸前，拍歪一点很正常。"),

    nian("就他们两个人去的吗？", { part: "还有谁", look: "all" }),
    dad("三个人。第三位叫柯林斯，一个人留在飞船里绕着月球转，转到月球背面时，跟谁都联系不上。"),
    dad("他后来写道：“我现在是一个人了，真正的一个人。”可他说，自己喜欢这种感觉。"),
    nian("他们在月球上待了多久？"),
    dad("在月面上一共二十一个多小时，出去走路两个半小时多，走得最远，也就离登月舱五六十米。"),
    nian("他们留下了什么？"),
    dad("一面特别的镜子。今天科学家还从地球往它上面打激光，测出月球每年离我们远大约 3.8 厘米，差不多一根手指那么宽。"),
    nian("后来还有人去吗？"),
    dad("到 1972 年，一共有十二个人在月球上走过。之后五十多年，再没人登上去。2026 年 4 月，又有四位宇航员坐飞船绕着月球飞了一圈。"),
    dad("中国的嫦娥探测器已经从月球背面带回了土，还计划在 2030 年以前，让中国航天员登上月球。"),
    nian("说不定我也能去！"),
  ],
  remember: "这张登月照片是阿姆斯特朗拍的，他自己就藏在奥尔德林的金色面罩里；月球上没有空气，天是黑的，脚印能留几万年。",
  facts: [
    ["这张图", "AS11-40-5903，奥尔德林站在月面上，阿姆斯特朗拍"],
    ["时间", "1969 年 7 月 21 日，北京时间中午"],
    ["地点", "月球静海，“鹰”号登月舱旁"],
    ["相机", "哈苏 500EL 数据相机，蔡司 60 毫米镜头，柯达彩色反转片"],
    ["面罩里", "阿姆斯特朗和“鹰”号登月舱的倒影"],
    ["常见版本", "转正、裁边，上面补了一块黑天"],
  ],
  sources: [
    { title: "Wikimedia Commons：Aldrin Apollo 11 original.jpg", url: "https://commons.wikimedia.org/wiki/File:Aldrin_Apollo_11_original.jpg" },
    { title: "Apollo Lunar Surface Journal：AS11-40-5903 的版本历史", url: "https://apollojournals.org/alsj/a11/a11-5903history.html" },
    { title: "Apollo Lunar Surface Journal：Mobility and Photography", url: "https://www.apollojournals.org/alsj/a11/a11.mobility.html" },
    { title: "Apollo Lunar Surface Journal：One Small Step", url: "https://www.apollojournals.org/alsj/a11/a11.step.html" },
    { title: "Apollo Lunar Surface Journal：AS11-40-5886（阿姆斯特朗在月面上的照片）", url: "https://www.apollojournals.org/alsj/a11/a11.5886.html" },
    { title: "NASA：Apollo 11 Mission Overview", url: "https://www.nasa.gov/history/apollo-11-mission-overview/" },
    { title: "NASA NSSDCA：AS11-40-5903", url: "https://nssdc.gsfc.nasa.gov/imgcat/html/object_page/a11_h_40_5903.html" },
    { title: "Apollo Lunar Surface Journal：Where are the stars?", url: "https://www.apollojournals.org/alsj/alsj-stars.html" },
    { title: "Apollo Lunar Surface Journal：Extravehicular Visor Assembly", url: "https://www.apollojournals.org/alsj/alsj-LEVA.html" },
    { title: "NASA（2016）：Earth's Moon Hit by Surprising Number of Meteoroids", url: "https://www.nasa.gov/news-release/earths-moon-hit-by-surprising-number-of-meteoroids/" },
    { title: "LROC：Apollo 11 landing site", url: "https://www.lroc.im-ldi.com/images/484" },
    { title: "NASA JPL：The Apollo Experiment That Keeps on Giving", url: "https://www.jpl.nasa.gov/news/the-apollo-experiment-that-keeps-on-giving/" },
    { title: "National Geographic：The literary legacy of Michael Collins", url: "https://www.nationalgeographic.com/science/article/the-literary-legacy-of-michael-collins-the-forgotten-astronaut-of-apollo-11" },
    { title: "NASA Science：Moon Walkers", url: "https://science.nasa.gov/moon/moon-walkers/" },
    { title: "NASA：Artemis II moonfarers back to Earth", url: "https://www.nasa.gov/news-release/nasa-welcomes-record-setting-artemis-ii-moonfarers-back-to-earth/" },
    { title: "中国政府网：嫦娥六号月背样品", url: "https://english.www.gov.cn/news/202504/02/content_WS67ecd7e0c6d0868f4e8f1641.html" },
    { title: "Xinhua（2026）：China's crewed lunar landing program", url: "https://english.news.cn/20260227/f8b10e49638b4d99b9ceafcd1ef57414/c.html" },
  ],
};
