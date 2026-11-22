import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const rows = spot(0.45, 0.76, 0.12, "一排排兵马俑");
const warrior = spot(0.455, 0.8, 0.035, "武士俑", 3.5);
const walls = [spot(0.33, 0.75, 0.05, "隔墙"), spot(0.55, 0.75, 0.05, "隔墙")];
const horses = spot(0.44, 0.95, 0.06, "陶马");
const roof = spot(0.5, 0.17, 0.2, "大棚");
const unexcavated = spot(0.3, 0.5, 0.08, "还没挖的地方");

export const terracottaArmy: Story = {
  id: "terracotta-army",
  title: "打井打出来的军队",
  frameName: "兵马俑一号坑",
  year: -210,
  circa: true,
  when: "秦朝，约公元前 210 年；1974 年被发现",
  field: "历史",
  people: ["秦始皇", "西杨村打井的村民", "赵康民"],
  teaser: "1974 年，几个农民打井找水，挖出了一支两千多年前的泥土军队。",
  frame: {
    src: "frames/terracotta-army.jpg",
    alt: "从高处看兵马俑一号坑：一道道土墙隔出长长的过道，过道里站满一排排土黄色的陶俑，前面有陶马，上方是大棚的屋顶，远处栏杆边站着参观的人",
    kind: "照片",
    by: "Jmhullot",
    license: "CC BY 3.0",
    commons: "File:Terracotta Army, View of Pit 1.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg",
  },
  lines: [
    nian("爸爸，这么多人站成一排一排的！是真的人吗？", { part: "这是什么图", look: rows }),
    dad("不是真人，是用泥土烧出来的陶俑，叫兵马俑。这里是陕西西安附近的兵马俑一号坑，它们已经在地下站了两千多年。"),
    nian("两千多年！"),
    dad("它们是秦朝的“军队”，是为秦始皇的陵墓做的。秦始皇就是第一个统一中国的皇帝。"),
    nian("他们好高啊。", { look: warrior }),
    dad("一般有一米八左右，有的快到两米，比爸爸还高。"),

    nian("是谁发现的？", { part: "打井打出了“瓦盆爷”", look: "all" }),
    dad("1974 年春天，西安临潼的西杨村很久没下雨，几个村民在村外打井找水。"),
    nian("找到水了吗？"),
    dad("挖到四五米深，没见着水，却挖出了碎陶片、陶人的头和身子，还有青铜的箭头。"),
    nian("他们吓坏了吧？"),
    dad("村里人一开始叫它们“瓦盆爷”，不知道是什么。那口井是好几个村民一起挖的，所以要问谁发现了兵马俑，答案是一群打井的农民。"),
    nian("后来呢？"),
    dad("县里管文物的赵康民骑着自行车赶来，认出这是秦朝的陶俑，还把碎片拼成了两个陶人。"),
    dad("后来，一位叫蔺安稳的新华社记者回家乡探亲听说了这件事，写了报告，国家很快派人来保护、发掘。"),
    nian("一口井挖出一支军队！"),
    dad("是啊。那年 7 月，正式的考古发掘就开始了。"),

    nian("这个坑有多大？", { part: "一号坑", look: roof }),
    dad("一号坑长 230 米、宽 62 米，差不多有两个足球场那么大。上面盖着大棚子，保护它们不被风吹雨淋。"),
    nian("中间这一道道土墙是什么？", { look: walls }),
    dad("是隔墙。坑里有 10 道隔墙，隔出 11 条长长的过道，陶俑就排在过道里，像站在一条条战壕里。"),
    nian("下面还有马！", { look: horses }),
    dad("对，有陶马，还有拉战车的马。木头做的战车早就烂掉了，只留下陶马和一些铜零件。"),
    nian("一共有多少个？", { look: "all" }),
    dad("专家估计，三个坑加起来大约有八千个陶俑和陶马。可还有很多没挖出来，你看那边还是一片土。", { look: unexcavated }),
    nian("为什么不全挖出来？"),
    dad("因为一挖出来就要碰到空气和阳光，很难保护。考古学家宁可慢一点，等有了更好的办法再挖。"),

    nian("他们长得都一样吗？", { part: "每张脸都不一样吗", look: warrior }),
    dad("你仔细看，有的留胡子，有的没有；有的胖，有的瘦。几乎每张脸都不一样。"),
    nian("是照着真的士兵做的吗？"),
    dad("有人这么说，可没有证据。工匠先用模子做出头和身子的大样子，再一个个用手刻出眉毛、胡子和表情，所以看起来各不相同。"),
    nian("像拼乐高一样！"),
    dad("有点像。头、手、身子分开做，拼在一起，再放进窑里烧。"),
    nian("他们为什么都是土黄色的？"),
    dad("他们原来是彩色的！衣服有红的、绿的、紫的。可一挖出来，颜色碰到空气，几分钟里就会卷起来、剥落。"),
    nian("几分钟？！"),
    dad("差不多是煮熟一个鸡蛋的工夫。所以考古学家现在一边挖，一边想办法马上把颜色保护起来。"),
    nian("他们手里拿着武器吗？"),
    dad("原来拿着真的青铜武器，有剑、有弩、有长矛。一号坑里出土了四万多件，大多数是箭头。"),
    nian("我听说那些剑两千年都不生锈，因为镀了一层东西？"),
    dad("以前有人这么说。后来科学家研究发现，那层东西是从木头柄上的漆里来的。剑不生锈，主要是因为埋着它们的土刚好合适。"),

    nian("秦始皇自己埋在哪儿？", { part: "还没打开的陵墓", look: "all" }),
    dad("离兵马俑一公里多的地方，有一座小山一样的大土堆，就是他的陵墓。兵马俑排在它的东边，好像在替他守着。"),
    nian("里面有什么？"),
    dad("两千多年前的史书《史记》里说，墓里用水银做成了江河大海。科学家测过，土堆上的土里，水银真的比别处多很多。"),
    nian("那为什么不打开看看？"),
    dad("怕保护不好里面的东西。大家都同意：等到有了足够好的办法，再去打开它。"),
    nian("那我们只能先看兵马俑啦。"),
    dad("是啊。博物馆 1979 年开门，1987 年秦始皇陵和兵马俑被列入了世界遗产。全世界的人都来看这支站了两千多年的军队。"),
  ],
  remember: "几个农民打井找水，挖出了一支两千多年前的泥土军队：几乎每张脸都不一样，原来还是彩色的。",
  facts: [
    ["这张图", "兵马俑一号坑"],
    ["做成", "秦朝，为秦始皇陵而造（秦始皇死于公元前 210 年）"],
    ["发现", "1974 年 3 月，西杨村村民打井时"],
    ["一号坑", "长 230 米、宽 62 米，10 道隔墙、11 条过道"],
    ["数量", "三个坑估计约八千件陶俑和陶马"],
  ],
  sources: [
    { title: "Wikimedia Commons：Terracotta Army, View of Pit 1", url: "https://commons.wikimedia.org/wiki/File:Terracotta_Army,_View_of_Pit_1.jpg" },
    { title: "秦始皇帝陵博物院：兵马俑坑的发现与发掘", url: "https://www.bmy.com.cn/news/news/1618.html" },
    { title: "中国新闻网：兵马俑发现往事", url: "https://www.chinanews.com/cul/2021/02-19/9414333.shtml" },
    { title: "UNESCO World Heritage：Mausoleum of the First Qin Emperor", url: "https://whc.unesco.org/en/list/441/" },
    { title: "Britannica：Terra-Cotta Army", url: "https://www.britannica.com/topic/Terra-Cotta-Army" },
    { title: "National Geographic：Terra-cotta warriors", url: "https://www.nationalgeographic.com/magazine/article/terra-cotta-warriors" },
    { title: "Scientific Reports (2019)：Chromium on Terracotta Army weapons", url: "https://www.nature.com/articles/s41598-019-40613-7" },
    { title: "UCL：Terracotta warriors and the portrait debate", url: "https://www.ucl.ac.uk/social-historical-sciences/news/2014/dec/terracotta-warriors-and-portrait-debate" },
  ],
};
