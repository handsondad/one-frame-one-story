import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const gaps = spot(0.527, 0.386, 0.06, "?=68  ?=70");

export const mendeleevTable: Story = {
  id: "mendeleev-table",
  title: "表格里留下的问号",
  frameName: "门捷列夫的周期表手稿",
  year: 1869,
  when: "1869 年 2 月 17 日（俄历）",
  field: "化学",
  people: ["德米特里·门捷列夫"],
  teaser: "一张写满字母和数字的草稿，最了不起的是那几个问号。",
  frame: {
    src: "frames/mendeleev-table.jpg",
    alt: "手写的元素表草稿，一列列写着元素符号和数字，有几处写着问号",
    kind: "手稿",
    by: "德米特里·门捷列夫",
    license: "公有领域",
    commons: "File:Mendeleev law.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Mendeleev_law.jpg",
  },
  lines: [
    nian("爸爸，这张纸上写满了字母和数字，是算术作业吗？", { part: "这是什么图" }),
    dad("是一张草稿，可比算术作业厉害多了。这是俄国化学家门捷列夫在 1869 年写下的第一张元素周期表。"),
    nian("元素是什么？"),
    dad("世界上所有的东西，桌子、空气、你的身体，都是由一些最基本的“材料”组成的，这些材料就叫元素。比如氢、氧、铁、金。"),

    nian("那他为什么要把它们写成表格？", { part: "给元素排队" }),
    dad("那时候人们已经发现了六十多种元素，可它们乱糟糟的，像一大堆没收拾的玩具。门捷列夫想找到一个规律，给它们排好队。"),
    dad("你看这里，H=1。", { look: spot(0.22, 0.335, 0.05, "H=1") }),
    nian("H 是什么？"),
    dad("H 是氢，最轻的元素，后面的数字是它有多重。门捷列夫按轻重把元素一个个排下去，发现每隔几个，性质相像的元素就会又出现一次，就像一周七天，过完星期天又是星期一。"),
    nian("所以叫“周期”表！"),
    dad("对，就是这个周期。"),

    dad("现在找找看，表里有没有奇怪的地方？", { part: "问号", look: "all" }),
    nian("有问号！这里写着“?=68”，下面还有一个“?=70”。", { look: gaps }),
    dad("这就是这张草稿最了不起的地方。按照规律，这两个位置上应该各有一个元素，可当时谁也没见过。"),
    nian("那他怎么不把后面的元素挪上来，把空填满？"),
    dad("很多人都会这么做。门捷列夫偏不，他相信规律，宁可空着，打个问号，意思是：这里有一个还没被发现的元素，它大概有 68 那么重。"),
    nian("他怎么知道？"),
    dad("因为它上下左右的邻居都知道了呀。就像同学们按身高排队，空出来的那个位置上的人大概多高，你也能猜出来。后来他还写得更具体：它有多重、多密、会和什么东西反应。"),

    nian("后来找到了吗？", { part: "猜对了吗" }),
    dad("1875 年，一位法国化学家发现了一种新元素，叫“镓”，正好补在 68 那个位置上。", { look: gaps }),
    nian("门捷列夫猜对了！"),
    dad("还有个小插曲：门捷列夫看了人家的报告，写信说你测的密度不太对，应该再测一次。人家重新一测，还真接近门捷列夫算的那个数。"),
    nian("哇，他都没见过镓，就知道它多重。"),
    dad("后来，70 那个位置上的“锗”在 1886 年被发现了。这里还有一个“?=45”，后来也找到了，叫“钪”。", { look: spot(0.425, 0.507, 0.05, "?=45") }),

    nian("左下角的数字是什么？", { part: "草稿上的日子", look: spot(0.14, 0.79, 0.07) }),
    dad("是日期，按俄国当时的日历，1869 年 2 月 17 日。旁边框里写的是法语，意思是“根据原子量和化学性质排列元素体系的尝试”。", { look: spot(0.36, 0.68, 0.22) }),
    nian("“尝试”？他没说自己一定对。"),
    dad("对，科学家常常这么说：我先试一试，请大家来检验。"),
    nian("我听说他是做梦梦到这张表的，真的吗？"),
    dad("有这样的传说，还有人说他把元素写在卡片上，像玩纸牌一样排来排去，可那些卡片从来没被找到过。能确定的是，他为了写一本化学课本，琢磨这些元素琢磨了很久很久。"),

    nian("现在的周期表还有问号吗？", { part: "后来呢" }),
    dad("现在的周期表已经有 118 种元素，空位都填满了。第 101 号元素叫“钔”，就是为了纪念门捷列夫。"),
  ],
  remember: "门捷列夫敢在表格里留下问号，因为他相信规律，规律后来也没有辜负他。",
  facts: [
    ["这张图", "《元素体系的尝试》手稿"],
    ["作者", "德米特里·门捷列夫（俄国）"],
    ["时间", "俄历 1869 年 2 月 17 日（公历 3 月 1 日）"],
    ["预言成真", "镓 1875 年、钪 1879 年、锗 1886 年"],
  ],
  sources: [
    { title: "Wikimedia Commons：Mendeleev law", url: "https://commons.wikimedia.org/wiki/File:Mendeleev_law.jpg" },
    { title: "OUPblog：How exactly did Mendeleev discover his periodic table of 1869?", url: "https://blog.oup.com/2012/08/how-exactly-did-mendeleev-discover-his-periodic-table-of-1869/" },
    { title: "CHIMIA：The Gestation and Growth of the Periodic Table", url: "https://www.chimia.ch/chimia/article/download/2019_144/528/11183" },
  ],
};
