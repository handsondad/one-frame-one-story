import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const rightRose = spot(0.71, 0.52, 0.21, "第一年");
const leftRose = spot(0.22, 0.33, 0.12, "第二年");
const january = spot(0.684, 0.714, 0.08, "1855 年 1 月");
const blue = spot(0.6, 0.62, 0.07, "蓝色");
const red = spot(0.79, 0.45, 0.04, "红色", 3);
const black = spot(0.69, 0.445, 0.04, "黑色", 3);
const dashed = spot(0.33, 0.45, 0.13, "虚线");

export const nightingaleRose: Story = {
  id: "nightingale-rose",
  title: "会说话的玫瑰图",
  frameName: "南丁格尔玫瑰图",
  year: 1858,
  when: "1858 年，伦敦",
  field: "医学",
  people: ["弗洛伦斯·南丁格尔", "威廉·法尔"],
  teaser: "两朵用数字画成的“花”，让人们明白：干净，能救命。",
  frame: {
    src: "frames/nightingale-rose.jpg",
    alt: "一张老图表：右边一朵大大的、左边一朵小一些的“花”，每朵花分成十二块扇形，大部分涂成灰蓝色，中间有小块的红色和黑色，两朵花之间连着一条虚线，左下方是一段说明文字",
    kind: "图表",
    by: "弗洛伦斯·南丁格尔",
    license: "公有领域",
    commons: "File:Nightingale-mortality.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Nightingale-mortality.jpg",
  },
  lines: [
    nian("爸爸，这是两朵花吗？", { part: "这是什么图" }),
    dad("看起来像花，其实是一张图表，大家叫它“玫瑰图”。画它的是英国的南丁格尔，一位很有名的护士，1858 年印出来的。"),
    nian("护士也画图？"),
    dad("她不光是护士，还特别会算数。这张图讲的，是一场战争里，士兵们是因为什么去世的。"),
    nian("什么战争？"),
    dad("1853 年到 1856 年的克里米亚战争。英国、法国和俄国打仗，很多英国士兵被送到了离家很远的地方。"),

    nian("一朵花怎么看？", { part: "一块块“比萨”", look: rightRose }),
    dad("你看，右边这朵花分成 12 块，像切开的比萨，每一块是一个月。从左上方的 1854 年 4 月开始，顺着时钟转一圈，就是一年。"),
    nian("有的块大，有的块小。"),
    dad("对。块越大，说明那个月去世的士兵越多。最大的这一块，是 1855 年 1 月。", { look: january }),
    nian("每一块里还有不同的颜色！", { look: rightRose }),
    dad("颜色是这张图最重要的地方。红色，是在战场上受伤去世的。", { look: red }),
    dad("黑色，是别的原因。", { look: black }),
    dad("蓝色，是因为生病：脏水、污物、挤在一起的病房里传开的病。这些病，本来是可以预防的。", { look: blue }),
    nian("蓝色好大！比红色大多了！"),
    dad("这正是南丁格尔想让大家一眼看到的：那场战争里，因为生病去世的士兵，比在战场上受伤去世的多得多。"),

    nian("她去了战场吗？", { part: "斯库塔里的医院", look: "all" }),
    dad("1854 年 11 月，她带着 38 位护士，到了土耳其一个叫斯库塔里的地方，那里有一所给英国伤病士兵住的大医院。"),
    nian("医院里怎么样？"),
    dad("很糟糕。房子底下的下水道坏了，屋里不通风，病人挤在一起，被子、药、吃的都不够。"),
    nian("她做了什么？"),
    dad("她带着护士们打扫、洗衣、做饭、照顾病人。晚上她提着一盏灯一间间去看病人，报纸写了她提灯查房的样子，大家就叫她“提灯的女士”。"),
    nian("后来病人好起来了吗？"),
    dad("1855 年 3 月，政府派来了一个卫生委员会，冲洗了下水道，让屋里通风。之后，医院里去世的病人少了很多。"),

    nian("左边那朵小一点的花是什么？", { part: "两朵花", look: leftRose }),
    dad("是第二年：1855 年 4 月到 1856 年 3 月。你看，它比右边那朵小多了，蓝色也少了很多。"),
    nian("中间的虚线呢？", { look: dashed }),
    dad("虚线把两朵花连起来：从右边那朵的 1855 年 3 月，接到左边那朵的 4 月。差不多就是卫生委员会来了、开始清理以后。"),
    nian("右边是打扫以前，左边是打扫以后！", { look: "all" }),
    dad("对。一看就明白：环境干净了，因为生病去世的人就少了。"),

    nian("为什么画成花，不画成一根根柱子？", { part: "用面积说话" }),
    dad("南丁格尔想让当官的人一看就懂。圆圆的花很显眼，颜色一比就清楚。"),
    nian("每一块要怎么量？"),
    dad("量的是面积，不是长短。去世的人多一倍，那一块的面积就大一倍。要是按长短画，大的那几块就会显得比实际夸张得多。"),
    nian("这种图是她发明的吗？"),
    dad("不是。在她之前就有人画过扇形的图，可她用得最好，让一张图替她说服了别人。"),

    nian("她一开始就知道是脏的问题吗？", { part: "改变想法" }),
    dad("其实不是。她原来以为，士兵们去世主要是因为吃得不够好。"),
    nian("那后来呢？"),
    dad("战争结束后，她和一位叫法尔的统计学家一起，把所有的数字认认真真算了一遍，才明白最大的问题是卫生。"),
    nian("她改主意了！"),
    dad("看到证据就愿意改变想法，这正是科学的态度。有历史学家认为，她为这件事很难过，觉得要是早点知道就好了。"),
    nian("后来呢？"),
    dad("她用这些图表说服政府，改善军营和医院的卫生。1858 年，她成了英国皇家统计学会的第一位女会员。"),
    nian("她后来还当护士吗？"),
    dad("1860 年，她在伦敦办了一所护士学校，培养了一批又一批护士。现在每年 5 月 12 日，她的生日，就是国际护士节。"),
  ],
  remember: "两朵用数字画成的花告诉大家：比战场更危险的是脏和病，干净能救命。",
  facts: [
    ["这张图", "《东方军队死亡原因图》，大家叫它“玫瑰图”"],
    ["作者", "弗洛伦斯·南丁格尔（1820—1910）"],
    ["印出", "1858 年"],
    ["颜色", "蓝色是可以预防的病，红色是伤，黑色是别的原因"],
    ["读法", "每一块是一个月，面积越大，去世的人越多"],
  ],
  sources: [
    { title: "Wikimedia Commons：Nightingale-mortality", url: "https://commons.wikimedia.org/wiki/File:Nightingale-mortality.jpg" },
    { title: "Science Museum：Florence Nightingale, pioneer statistician", url: "https://www.sciencemuseum.org.uk/objects-and-stories/florence-nightingale-pioneer-statistician" },
    { title: "Britannica：Florence Nightingale", url: "https://www.britannica.com/biography/Florence-Nightingale" },
    { title: "National Army Museum：Florence Nightingale, the Lady with the Lamp", url: "https://www.nam.ac.uk/explore/florence-nightingale-lady-lamp" },
    { title: "Royal Statistical Society：Our history", url: "https://rss.org.uk/about/history/" },
    { title: "Friendly：The radiant diagrams of Florence Nightingale", url: "https://www.datavis.ca/papers/Nightingale-radiant.pdf" },
    { title: "McDonald：Florence Nightingale and the Crimean War statistics", url: "https://doi.org/10.1136/qhc.12.4.317" },
  ],
};
