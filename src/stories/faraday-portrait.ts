import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/faraday-portrait.jpg",
  alt: "黑白老照片：六十五岁左右的法拉第身穿深色礼服和背心，银白头发从正中整齐分开，目光温和坚定，抬起的右手竖着握住一根深色长方棒",
  kind: "照片",
  by: "Maull & Polyblank 照相馆摄，1857 年刊行",
  license: "公有领域",
  commons: "File:Faraday with glass bar crop.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Faraday_with_glass_bar_crop.jpg",
};

const face = spot(0.52, 0.39, 0.14, "法拉第的脸");
const partedHair = spot(0.49, 0.23, 0.12, "中分的白发");
const heldBar = spot(0.21, 0.48, 0.095, "手里的长方棒");
const hand = spot(0.23, 0.62, 0.1, "装订工出身的巧手");

const christmasLecture: Frame = {
  title: "1855 年圣诞节法拉第在英国皇家学会给孩子们做实验讲座（布莱克利石版画）",
  src: "frames/faraday-lecture.jpg",
  alt: "彩色历史石版画：半圆形阶梯讲堂里坐满了孩子和大人，白发法拉第站在摆满玻璃瓶与实验仪器的马蹄形讲台后俯身讲解，前排左侧坐着阿尔伯特亲王和两位小王子",
  kind: "版画",
  by: "亚历山大·布莱克利（Alexander Blaikley）绘，1856 年彩色石版画，英国皇家学会藏",
  license: "公有领域",
  commons: "File:Professor Faraday lecturing at the Royal Institution, 27th December, 1855 RIIC 0006 20110213 BAL EP.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Professor_Faraday_lecturing_at_the_Royal_Institution,_27th_December,_1855_RIIC_0006_20110213_BAL_EP.jpg",
};

const lecternFaraday = spot(0.68, 0.59, 0.075, "讲台后的法拉第");
const tableGear = spot(0.52, 0.69, 0.12, "满桌实验仪器");
const youngAudience = [spot(0.35, 0.81, 0.075, "前排的小王子"), spot(0.18, 0.62, 0.09, "听讲的孩子们")];

export const faradayPortrait: Story = {
  id: "faraday-portrait",
  title: "把磁铁变成电、给孩子讲《蜡烛的故事》的装订工",
  frameName: "迈克尔·法拉第肖像",
  year: 1857,
  when: "1857 年在伦敦刊行（法拉第时年约 65 岁）",
  field: "物理",
  people: ["迈克尔·法拉第", "汉弗莱·戴维", "詹姆斯·克拉克·麦克斯韦"],
  teaser: "铁匠家的穷孩子十三岁辍学去装订书本，白天订书、晚上看书，没学过高等数学，却造出了全世界发电机和电动机的老祖宗。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一位白头发中分的老爷爷，右手举着一根黑黑的小长条，那是什么呀？", { part: "这是什么图", look: heldBar }),
    dad("这位眼神温和的老爷爷叫迈克尔·法拉第！他手里握着的这根小长条特别有来头——连英国的博物馆档案都有两种记载：皇家学会标它是“条形磁铁”，而皇家研究院的科学史家考证它是法拉第亲手烧制的“重玻璃棒”！"),
    nian("磁铁和重玻璃棒，跟他有什么关系？", { look: face }),
    dad("关系太大啦！用磁铁，他在 1831 年变出了电；用那根含铅的重玻璃棒，他在 1845 年发现强磁铁居然能让穿过玻璃的光线偏转——证明电、磁和光根本是一家人！"),

    nian("他一定上过最好的大学吧？", { part: "订书铺里的夜读少年", look: hand }),
    dad("恰恰相反，法拉第只上过最普通的小学！他爸爸是个体弱多病的穷铁匠，闹饥荒那年，九岁的法拉第一整周只有一块面包吃。十三岁他就辍学去伦敦一家书店送报纸，十四岁当了装订书本的小学徒。"),
    nian("当装订学徒，怎么变成科学家的？"),
    dad("好心的老板里博先生看他勤快，免了他的学徒费。法拉第感叹说：书店里别的没有，书可太多了！他白天把书页一针一线订好，晚上点着蜡烛读百科全书里的“电学”和《化学对话》，还攒下零花钱在后屋用小玻璃瓶照着做实验。"),
    dad("二十岁那年，一位顾客送给他四张门票，去听大化学家戴维爵士的演讲。法拉第把三百多页工工整整的听课笔记和插图亲手装订成一本书寄给戴维——正好实验室缺个帮手，他就这样走进了科学殿堂！", { look: partedHair }),

    nian("他是怎么用磁铁变出电来的？", { part: "发电机与看不见的力线", look: heldBar }),
    dad("当时丹麦科学家奥斯特刚发现“通电的电线能让指南针偏转”，也就是电生磁。法拉第先在 1821 年让通电导线绕着磁铁不停转圈，造出了世界上第一台电动机的雏形；接着他又苦苦想了十年：反过来，磁能不能生出电呢？"),
    dad("1831 年夏天，他在一只大铁环两边绕上线圈，发现只有开关通断的一瞬间电流表才会跳；不久他又把一根磁铁推进、拉出线圈——只要磁铁在动，电线里就流出了电！今天全世界所有的发电厂、风车发电机和无线充电，靠的全是法拉第那天的“电磁感应”！"),
    nian("听说他没学过高等数学，那他怎么想明白磁铁是怎么干活的？", { look: face }),
    dad("他的论文里几乎一个复杂公式都没有！他在磁铁上面铺一张白纸撒满铁屑，看着铁屑排成一圈圈优美的弧线，就在脑海里想象磁铁和电荷周围长满了看不见、摸不着却真实存在的“力线”，导线一割断力线就会生电。"),
    dad("一开始好多数学家笑话他的“力线”不够数学；直到年轻物理学家麦克斯韦读懂了他的画，把法拉第的力线翻译成著名的麦克斯韦方程组，算出了电磁波的速度正好等于光速！"),
    nian("我听过一个故事：英国首相问他电有什么用，他回答“将来你可以向它收税”，是真的吗？"),
    dad("这个段子流传特别广，其实是假的！史学家查遍了他留下的四千九百多封信和日记，根本没这句话；而且故事里的格莱斯顿当上英国首相时，法拉第已经去世一年多了，最早是三十年后别人编出来的。"),

    nian("他出名以后，还记得自己小时候没钱听课的事吗？", { part: "给孩子讲了二百年的圣诞课", show: christmasLecture, look: lecternFaraday }),
    dad("他一辈子都没忘！1825 年，法拉第在英国皇家研究院创办了专门讲给青少年听的“圣诞科学讲座”——你看这张 1855 年圣诞节的画，他站在摆满仪器的讲台后面，身子往前探着，讲得多起劲！", { look: tableGear }),
    nian("台下坐了好多小朋友！", { look: youngAudience }),
    dad("连英国女王的丈夫和两位十几岁的小王子也坐在第一排跟孩子们一起听！法拉第自己讲过十九季圣诞课，最有名的《蜡烛的故事》只点一支蜡烛，就把燃烧、空气、毛细现象讲得清清楚楚。这个圣诞少年讲座一直办到今天，已经满两百年啦！"),
    nian("女王有没有封他当大贵族呀？", { show: portrait, look: "all" }),
    dad("维多利亚女王想封他爵士，皇家学会也两次请他当会长，他全都礼貌地谢绝了。他说：“我只想一辈子做普普通通的法拉第先生。”"),
  ],
  remember: "十三岁辍学订书的法拉第发现了“磁生电”的电磁感应并画出看不见的力线，造出了电动机和发电机的老祖宗，还为孩子们留下了延续两百年的圣诞科学讲座。",
  facts: [
    ["这张图", "1857 年法拉第手持长方棒（磁铁/重玻璃棒）肖像照，及 1856 年圣诞讲座石版画"],
    ["生卒年份", "1791 年 9 月 22 日 — 1867 年 8 月 25 日（英国伦敦）"],
    ["核心贡献", "电磁旋转（电动机雏形，1821）、电磁感应（发电机与变压器原理，1831）、磁光效应与力线概念"],
    ["科普传奇", "1825 年创办皇家研究院青少年圣诞讲座，主讲名篇《蜡烛的故事》"],
    ["品格轶事", "婉拒封爵与皇家学会会长，坚持终生只称“法拉第先生”"],
  ],
  sources: [
    { title: "英国皇家研究院（Royal Institution）：Michael Faraday 生平与档案", url: "https://www.rigb.org/explore-science/explore/person/michael-faraday-1791-1867" },
    { title: "英国皇家研究院：1831 年法拉第电磁感应铁环线圈原件", url: "https://www.rigb.org/explore-science/explore/collection/michael-faradays-ring-coil-apparatus" },
    { title: "英国皇家研究院：1845 年法拉第重玻璃磁光实验仪器", url: "https://www.rigb.org/explore-science/explore/collection/michael-faradays-magneto-optical-apparatus" },
    { title: "英国皇家学会图库：Maull & Polyblank 1857 年法拉第肖像（RS.7909）", url: "https://pictures.royalsociety.org/image-rs-7909" },
    { title: "美国物理学会（APS）：1821 与 1831——法拉第与电磁学", url: "https://www.aps.org/apsnews/2001/08/faraday-electromagnetism" },
    { title: "Cohen 1946（Nature）：科学轶事真伪考——关于“向电征税”传说", url: "https://www.nature.com/articles/157196b0.pdf" },
    { title: "Britannica：Michael Faraday", url: "https://www.britannica.com/biography/Michael-Faraday" },
  ],
};
