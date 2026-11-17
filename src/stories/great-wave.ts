import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const claws = spot(0.5, 0.31, 0.1, "浪花");
const fuji = spot(0.635, 0.69, 0.05, "富士山", 3);
const boats = [spot(0.14, 0.64, 0.08, "船"), spot(0.8, 0.63, 0.09, "船"), spot(0.6, 0.88, 0.11, "船")];
const miniFuji = spot(0.33, 0.65, 0.1, "小浪");
const deepBlue = spot(0.33, 0.32, 0.08, "蓝色");
const signature = spot(0.055, 0.2, 0.05, "标题和签名", 3);

export const greatWave: Story = {
  id: "great-wave",
  title: "浪花的爪子",
  frameName: "神奈川冲浪里",
  year: 1831,
  circa: true,
  when: "约 1831 年，日本江户",
  field: "艺术",
  people: ["葛饰北斋"],
  teaser: "一位七十岁的老画家，用一种新的蓝色，印出了全世界最有名的一朵浪。",
  frame: {
    src: "frames/great-wave.jpg",
    alt: "彩色木版画：一朵巨大的深蓝色海浪卷起来，浪尖的白色浪花像一根根爪子，下面三条细长的小船上的人伏着身子，远处是一座小小的白顶富士山",
    kind: "版画",
    by: "葛饰北斋，美国大都会艺术博物馆藏",
    license: "公有领域",
    commons: "File:Tsunami by hokusai 19th century.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Tsunami_by_hokusai_19th_century.jpg",
  },
  lines: [
    nian("爸爸，好大的浪！", { part: "这是什么图" }),
    dad("这是日本画家葛饰北斋的《神奈川冲浪里》，意思是“在神奈川外海的浪下面”，大约 1831 年印出来的。"),
    nian("浪头上那些像爪子一样的是什么？", { look: claws }),
    dad("是浪花。北斋把浪尖画成一根根弯弯的小手指，好像要一把抓住下面的船。"),
    nian("下面有船！", { look: boats }),
    dad("一共三条船，船上的人都伏下身子，紧紧抓着船桨。他们是送鲜鱼去江户卖的快船，江户就是今天的东京。"),
    nian("他们会被浪打翻吗？", { look: "all" }),
    dad("画里没有告诉我们。北斋只画了浪就要落下来的那一刻。"),

    nian("这幅画是哪个系列的？", { part: "藏在浪后面的山" }),
    dad("它属于一套叫《富岳三十六景》的版画，“富岳”就是富士山，每一张里都要有富士山。"),
    nian("富士山在哪儿？我没看见。"),
    dad("仔细找找，在浪的下面，远远的、小小的那座白顶的山。", { look: fuji }),
    nian("找到了！好小啊。"),
    dad("富士山是日本最高的山，可在这张画里，它还没有一朵浪大。北斋故意让近处的浪显得巨大，让远处的山显得很小。"),
    nian("前面这个小浪，也长得像一座山！", { look: miniFuji }),
    dad("你发现了！有人觉得，北斋是故意让这个小浪像一座小富士山，跟远处真的富士山遥遥相望。不过他自己没这么说过。"),
    nian("这是海啸吗？", { look: "all" }),
    dad("很多人这么叫它，可它更像是一朵被大风掀起来的巨浪，不是地震引起的海啸。"),

    nian("版画是怎么做的？", { part: "一套木板印几千张" }),
    dad("北斋先画好底稿，交给出版商。刻工把画刻到木板上，每一种颜色刻一块板，印工再一块一块地刷颜色、压纸。"),
    nian("跟《金刚经》一样，也是木板印的！"),
    dad("对，都是雕版印刷，只是这张是彩色的。用同一套木板，可以印出好几千张。"),
    nian("好几千张！那很贵吗？"),
    dad("不贵。有资料说，那时候一张这样的版画，大概只要两碗面的钱，很多普通人家都买得起。"),
    nian("现在还剩多少张？"),
    dad("当年印的，留到今天的大约一百多张，都被博物馆好好收着。这一张在美国纽约的大都会艺术博物馆。"),

    nian("这张画好蓝啊。", { part: "一种新的蓝色", look: deepBlue }),
    dad("这里面有一种当时很新的蓝颜料，叫普鲁士蓝。它是从欧洲坐船运来的，又鲜亮又不容易褪色。"),
    nian("以前没有蓝色吗？"),
    dad("以前用植物做的蓝，颜色暗一些，也容易褪色。普鲁士蓝在那几年变便宜了，北斋就大胆地用了好多。"),
    nian("全是普鲁士蓝吗？"),
    dad("不全是。科学家化验过：最深的那些蓝，是老的靛蓝，或者两种蓝混在一起；浅一点的蓝，才是普鲁士蓝。"),

    nian("北斋画这张画的时候多大？", { part: "七十岁的画家" }),
    dad("七十岁左右，已经是个老爷爷了。左上角这块是画的名字，旁边一行是他的签名：“北斋改为一笔”。", { look: signature }),
    nian("是一笔画出来的意思吗？"),
    dad("不是。那时候他给自己改了个新名字叫“为一”。签名的意思是：原来叫北斋、现在叫为一的人画的。“笔”在这里就是“画”。"),
    nian("他画了一辈子吗？", { look: "all" }),
    dad("画了七十多年。他在另一本书里写：七十岁以前画的东西都不值一提；到一百一十岁，每一个点、每一笔都会像活的一样。"),
    nian("七十岁了还想着进步！"),
    dad("是啊。后来这张画传到了欧洲。梵高的弟弟提奥在信里说，浪花像爪子，船被抓在里面；梵高回信说，他也有同样的感觉。"),
    nian("是画《星月夜》的那个梵高！"),
    dad("就是他。法国音乐家德彪西也很喜欢它，还把这朵浪印在了自己的乐曲《大海》的封面上。"),
  ],
  remember: "一位七十岁的老画家，一种新的蓝颜料，一块块木板，印出了全世界最有名的一朵浪。",
  facts: [
    ["这张图", "《神奈川冲浪里》，《富岳三十六景》之一"],
    ["画家", "葛饰北斋（1760—1849）"],
    ["印成", "约 1831 年，日本江户"],
    ["做法", "彩色木版画，每种颜色一块版"],
    ["这一张", "美国大都会艺术博物馆藏"],
  ],
  sources: [
    { title: "Wikimedia Commons：Tsunami by hokusai 19th century", url: "https://commons.wikimedia.org/wiki/File:Tsunami_by_hokusai_19th_century.jpg" },
    { title: "The Met：Under the Wave off Kanagawa (JP1847)", url: "https://www.metmuseum.org/art/collection/search/45434" },
    { title: "British Museum：The Great Wave (1906,1220,0.533)", url: "https://www.britishmuseum.org/collection/object/A_1906-1220-0-533" },
    { title: "British Museum Blog：The Great Wave, spot the difference", url: "https://www.britishmuseum.org/blog/great-wave-spot-difference" },
    { title: "BBC：A History of the World, episode 93", url: "https://www.bbc.co.uk/ahistoryoftheworld/about/transcripts/episode93/" },
    { title: "Dudley et al. 2013：The Great Wave off Kanagawa, a rogue wave?", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC3645210/" },
    { title: "WebExhibits：Van Gogh letter 533", url: "https://www.webexhibits.org/vangogh/letter/18/533.html" },
    { title: "The Met：Debussy's La Mer and Hokusai", url: "https://www.metmuseum.org/perspectives/debussy-la-mer" },
    { title: "RISD Museum：Hokusai's Mount Fuji", url: "https://risdmuseum.org/exhibitions-events/exhibitions/hokusais-mount-fuji" },
  ],
};
