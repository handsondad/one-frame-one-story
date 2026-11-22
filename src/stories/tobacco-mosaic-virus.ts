import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const scaleBar = spot(0.148, 0.926, 0.1, "100 纳米的尺子");
const loneRod = spot(0.769, 0.509, 0.19, "一根病毒");
const leftRod = spot(0.233, 0.563, 0.23, "长长的一根");
const brokenRod = spot(0.633, 0.239, 0.22, "断了的一根");
const brokenGap = spot(0.59, 0.172, 0.05, "断口", 4);
const joins = [spot(0.633, 0.786, 0.05, "接头"), spot(0.605, 0.828, 0.05)];
const empty = spot(0.3, 0.2, 0.1, "空的背景");

export const tobaccoMosaicVirus: Story = {
  id: "tobacco-mosaic-virus",
  title: "看清第一个被发现的病毒",
  frameName: "电子显微镜下的烟草花叶病毒",
  year: 1939,
  when: "1939 年第一次清楚地拍到它（德国柏林）；这张照片是后来用电子显微镜拍的",
  field: "生物",
  people: ["赫尔穆特·鲁斯卡", "恩斯特·鲁斯卡", "德米特里·伊万诺夫斯基", "温德尔·斯坦利", "罗莎琳德·富兰克林"],
  teaser: "一根根细细的小棍子，就是让烟草叶子长出花斑的病毒——人们找了四十多年，1939 年才第一次清楚地看见它。",
  frame: {
    src: "frames/tobacco-mosaic-virus.jpg",
    alt: "灰色的电子显微镜照片：许多细细直直的小棍子散落着，有的单独一根，有的断成两截，有的首尾相接排成长条；左下角有一根白色的比例尺",
    kind: "照片",
    by: "国际病毒分类委员会（ICTV）",
    license: "CC BY-SA 4.0",
    commons: "File:TMV under TEM.png",
    page: "https://commons.wikimedia.org/wiki/File:TMV_under_TEM.png",
    note: "1939 年那张最早的照片还在版权保护期内，这里用的是今天用电子显微镜拍的烟草花叶病毒，样子和当年拍到的一样，都是一根根小棍子。",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图上有什么？好多细细的小棍子。", { part: "这是什么图", look: loneRod }),
    dad("每一根小棍子，都是一个病毒，叫烟草花叶病毒。这张是用电子显微镜拍的。"),
    nian("病毒？会让人生病吗？"),
    dad("别怕，它只让植物生病，不会让人生病。得了病的烟草叶子，会长出深一块、浅一块的绿斑，像马赛克一样，所以叫“花叶”。"),
    dad("先说清楚：1939 年第一次拍到它的那张照片还有版权，这里放的是后来拍的，样子是一样的。", { look: "all" }),

    nian("谁发现它的？", { part: "看不见的小偷" }),
    dad("1892 年，俄国科学家伊万诺夫斯基，把病叶子的汁挤出来，用一种很细的过滤器过滤。当时知道的细菌，全都会被拦住。"),
    nian("那过滤完就没事了吧？"),
    dad("怪就怪在这里：过滤好的汁，抹到健康的叶子上，叶子照样生病！"),
    nian("像一个看不见的小偷！"),
    dad("对。1898 年，荷兰科学家拜耶林克说，这是一种“活的、会传染的液体”，能在植物里越变越多。后来大家叫它“病毒”。"),
    nian("那他们看见它了吗？"),
    dad("没有。用最好的显微镜也看不见。人们又找了四十多年。"),

    nian("为什么看不见？", { part: "光太粗了" }),
    dad("普通显微镜用的是光。光像一把粗粗的刷子，比它还细的东西，它就“摸”不出形状来。"),
    nian("病毒有多细？"),
    dad("大约 18 纳米粗。光的“刷毛”要比它粗二三十倍，怎么也照不清楚。"),
    nian("那怎么办？"),
    dad("换一把细得多的刷子：电子。德国的恩斯特·鲁斯卡和同事，用电子代替光，造出了电子显微镜。1933 年，它第一次比普通显微镜看得还清楚。"),
    nian("他一个人造的吗？"),
    dad("和好几位同事一起。他的弟弟赫尔穆特是医生，哥哥造“超级眼睛”，弟弟就拿它去看病菌和病毒。"),
    nian("然后呢？"),
    dad("1939 年，赫尔穆特和两位同事发表了照片：烟草花叶病毒，原来是一根根细细的小棍子！1986 年，哥哥恩斯特因为电子显微镜得了诺贝尔奖。"),

    nian("我能量一量它多长吗？", { part: "量一量", look: scaleBar }),
    dad("能！左下角这根白线是一把尺子，长 100 纳米。"),
    nian("那这根病毒呢？", { look: leftRod }),
    dad("你比一比，大约两根半到三根尺子长。书上说，它一般长 300 纳米左右。"),
    nian("那多少根接起来才有一毫米？"),
    dad("三千多根。一粒芝麻那么长，就能排下一万根。"),
    nian("这一根怎么断了？", { look: brokenGap }),
    dad("做样品的时候，有的病毒会断成两截。", { look: brokenRod }),
    nian("下面这些排成一长条！", { look: joins }),
    dad("有的病毒会头对头接在一起，像一列小火车。"),
    nian("周围空空的地方呢？", { look: empty }),
    dad("那是放病毒的薄膜，上面什么也没有。"),

    nian("这是世界上第一张病毒的照片吗？", { part: "不是第一张，却很要紧" }),
    dad("差一点。一年前，鲁斯卡兄弟他们已经拍到过天花一类的病毒颗粒。可这是人们第一次清楚地看见那个最早被发现的病毒。"),
    nian("病毒是活的吗？"),
    dad("这个问题科学家到现在还在争论。1935 年，美国的斯坦利把它做成了像盐一样的晶体，晶体再溶开，照样能让叶子生病。"),
    nian("能变成晶体，又能传染？"),
    dad("所以它有时像一种化学药品，有时又像活的东西，会在植物里越变越多。斯坦利后来得了诺贝尔化学奖。"),

    nian("小棍子里面是什么？", { part: "一根空心管", look: loneRod }),
    dad("后来，罗莎琳德·富兰克林发现，它其实是一根空心管，外面是一圈圈蛋白质，里面盘着它的遗传物质。"),
    nian("就是拍“照片 51 号”的富兰克林？"),
    dad("就是她。她的小组还用二百多个自行车把手套搭过病毒模型。1958 年 4 月她因病去世，第二天，布鲁塞尔世界博览会开幕，里面就展出了他们做的烟草花叶病毒模型。"),
    nian("一根小棍子，藏了这么多故事！"),
  ],
  remember: "烟草花叶病毒细得连光都“摸”不出来，直到有了电子显微镜，1939 年人们才第一次看清它是一根根小棍子。",
  facts: [
    ["这张图", "电子显微镜下的烟草花叶病毒（现代照片）"],
    ["第一次看清", "1939 年，考舍、潘库赫、赫尔穆特·鲁斯卡"],
    ["大小", "长约 300 纳米，粗约 18 纳米"],
    ["最早发现", "1892 年伊万诺夫斯基，1898 年拜耶林克"],
    ["会传染人吗", "不会，只让植物生病"],
  ],
  sources: [
    { title: "Wikimedia Commons：TMV under TEM.png（ICTV）", url: "https://commons.wikimedia.org/wiki/File:TMV_under_TEM.png" },
    { title: "ICTV Report：Genus Tobamovirus", url: "https://ictv.global/report/chapter/virgaviridae/virgaviridae/tobamovirus" },
    { title: "Kausche, Pfankuch & Ruska 1939（Naturwissenschaften 27, 292）", url: "https://link.springer.com/article/10.1007/BF01493353" },
    { title: "von Borries, Ruska & Ruska 1938：Bakterien und Virus in übermikroskopischer Aufnahme", url: "https://link.springer.com/article/10.1007/BF01775798" },
    { title: "Helmut Ruska（家族网站）", url: "https://helmut.ruska.de/?page_id=9" },
    { title: "Britannica：Electron microscope", url: "https://www.britannica.com/technology/electron-microscope" },
    { title: "Nobel Prize：Ernst Ruska Biographical", url: "https://www.nobelprize.org/prizes/physics/1986/ruska/biographical/" },
    { title: "Nobel Prize：Physics 1986", url: "https://www.nobelprize.org/prizes/physics/1986/summary/" },
    { title: "Britannica：Dmitry Ivanovsky", url: "https://www.britannica.com/biography/Dmitry-Ivanovsky" },
    { title: "Wikipedia：Tobacco mosaic virus", url: "https://en.wikipedia.org/wiki/Tobacco_mosaic_virus" },
    { title: "Nobel Prize：Wendell M. Stanley Biographical", url: "https://www.nobelprize.org/prizes/chemistry/1946/stanley/biographical/" },
    { title: "PLOS ONE（2013）：Plant viruses and humans", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0060621" },
    { title: "IUCr Journals（2020）：Rosalind Franklin and the tobacco mosaic virus", url: "https://journals.iucr.org/d/issues/2020/07/00/me6088/" },
    { title: "Britannica：Rosalind Franklin", url: "https://www.britannica.com/biography/Rosalind-Franklin" },
    { title: "Wikipedia：Expo 58（1958 年布鲁塞尔世博会，4 月 17 日开幕）", url: "https://en.wikipedia.org/wiki/Expo_58" },
    { title: "Chem（Cell Press, 2021）：Rosalind Franklin's TMV work", url: "https://www.cell.com/chem/fulltext/S2451-9294(21)00100-5" },
  ],
};
