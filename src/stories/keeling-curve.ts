import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const curveChart: Frame = {
  src: "frames/keeling-curve.jpg",
  alt: "白底科学折线图：横轴从 1958 年到 2025 年，一条带规律上下小锯齿的红线和蓝色平滑趋势线一路向右上攀升，从约 316 一路升到超过 426；左上角有一张放大一年四季涨落的小插图",
  kind: "图表",
  by: "Oeneis 制图（数据来自美国国家海洋和大气管理局 NOAA 与斯克里普斯海洋研究所基林团队）",
  license: "CC BY-SA 4.0",
  commons: "File:Mauna Loa CO2 monthly mean concentration.svg",
  page: "https://commons.wikimedia.org/wiki/File:Mauna_Loa_CO2_monthly_mean_concentration.svg",
  note: "图表收录了夏威夷莫纳罗亚观测站 1958 年 3 月至 2025 年底的月均二氧化碳浓度数据：红点是每月实测值，蓝线是去掉季节起伏后的长期趋势。",
};

const start1958 = spot(0.12, 0.83, 0.055, "1958 年起点");
const end2025 = spot(0.93, 0.14, 0.06, "2025 年高点");
const sawtooth = spot(0.66, 0.46, 0.075, "一上一下的锯齿");
const inset = spot(0.31, 0.365, 0.2, "一年里的呼吸");
const mayPeak = spot(0.32, 0.24, 0.045, "5 月最高", 2.4);
const octLow = spot(0.436, 0.47, 0.045, "9—10 月最低", 2.4);

const stationPhoto: Frame = {
  title: "太平洋中央的夏威夷莫纳罗亚火山观测站（海拔约 3400 米）",
  src: "frames/keeling-mauna-loa.jpg",
  alt: "晴朗蓝天下，寸草不生的黑色火山熔岩坡上立着观测站屋顶和高高的金属空气采样铁塔，远处翻涌着白色云海，云海之上露出邻近的莫纳克亚火山峰顶",
  kind: "照片",
  by: "Forrest M. Mims III 摄，美国国家海洋和大气管理局（NOAA）图库",
  license: "公有领域（NOAA）",
  commons: "File:Pl23 wea03453 - Mauna Loa Observatory in 2006.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Pl23_wea03453_-_Mauna_Loa_Observatory_in_2006.jpg",
};
const tower = spot(0.69, 0.45, 0.08, "采样铁塔");
const lava = spot(0.52, 0.8, 0.11, "光秃秃的火山岩");
const sisterPeak = spot(0.22, 0.61, 0.13, "远处的莫纳克亚山");

export const keelingCurve: Story = {
  id: "keeling-curve",
  title: "地球每年深呼吸一次的锯齿线",
  frameName: "基林曲线",
  year: 1958,
  when: "1958 年 3 月开始连续测量至今，夏威夷莫纳罗亚火山；图表数据更新至 2025 年",
  field: "地理",
  people: ["查尔斯·大卫·基林", "拉尔夫·基林"],
  teaser: "一条从 1958 年画到今天的红线，一边像锯齿一样每年一上一下“呼吸”，一边悄悄爬上了八十万年没到过的高坡。",
  frame: curveChart,
  lines: [
    nian("爸爸，这张图上有什么？一条红色的线一直往山上爬，上面还长满了尖尖的小锯齿！", { part: "这是什么图", look: sawtooth }),
    dad("这条线有个大名鼎鼎的名字，叫“基林曲线”。从 1958 年春天开始，科学家查尔斯·大卫·基林开始每天给地球的空气做体检，量空气里有多少二氧化碳，他和接班的人一量就是将近七十年！"),
    nian("为什么这根红线不是滑溜溜的，要一上一下像小锯子一样？"),
    dad("每一个小锯齿刚好是一年——那是整个地球在“深呼吸”呢！我们看左上角这张把一年单独放大出来的小图。", { look: inset }),
    nian("5 月份爬到最高，9 月、10 月又掉到最低！谁在吸气呀？", { look: mayPeak }),
    dad("是陆地上的森林和草地！地球北半球的陆地比南半球多得多。每年北半球到了春夏，亿万片新绿叶长出来，大口吸进二氧化碳做光合作用，红线就往下掉。", { look: octLow }),
    dad("等到秋天树叶落下、冬天草木枯黄腐烂，二氧化碳又被呼回空气里，红线就往上爬，到第二年 5 月达到最高。基林第一次在数字里看见了地球一吸一呼的脉搏！"),

    nian("可是它吸一口、呼一口，怎么没有回到原地，反而越爬越高了呢？", { part: "一百万颗玻璃珠", look: start1958 }),
    dad("这就是基林曲线告诉全人类的第二件大事！你看左下角 1958 年刚开始记的时候，数字大约是 316。", { look: start1958 }),
    nian("316 是什么意思？多不多？"),
    dad("单位叫“百万分之一”。想象把一个大房间装满整整一百万颗透明玻璃珠代表空气，1958 年里面只有 316 颗是二氧化碳珠子；再看右上角 2025 年，已经爬到将近 430 颗了！", { look: end2025 }),
    nian("一百万颗里才四百多颗，听起来很少呀！"),
    dad("别小看这四百多颗！二氧化碳就像盖在地球身上的薄羽绒被，没有它地球会冻成冰球；可人类烧煤、烧油、开车，短短几十年多塞进去一百多颗“保暖珠”，被子变厚，地球就发烧变暖了。"),
    dad("科学家钻开南极厚冰层，测量封在古冰泡里的空气，发现过去八十万年里这个数字从来没超过 300——现在的高度是八十万年来头一回。"),

    nian("基林叔叔是在哪里装瓶子量空气的？在城市楼顶吗？", { part: "云海上面的火山顶", show: stationPhoto, look: tower }),
    dad("城市里有汽车尾气和烟囱，森林里早晚树叶呼吸变化又太大！早先年轻的基林去加州森林露营，半夜钻出睡袋每隔几小时拧开抽真空的玻璃瓶取气，发现只有下午混合均匀的风才最准。"),
    dad("于是 1958 年，他把仪器搬到了太平洋正中央、夏威夷莫纳罗亚火山海拔三千四百米的山坡上，从这座高高的铁塔顶上抽空气。"),
    nian("地上黑乎乎的一棵树都没有，云还在脚底下呢！", { look: lava }),
    dad("对！云海把山下的烟尘挡在下面，周围全是光秃秃的黑色火山岩，吹来的全是太平洋干干净净的海风。"),
    nian("等等，这可是一座活火山！火山自己冒出来的气，不会把数字弄假吗？"),
    dad("问到点子上了！其实火山口偶尔飘下来的气是一阵阵乱跳的，仪器一看见数字几分钟里忽高忽低，就会自动把那几个小时剔除掉；而且连没有火山的南极洲测站，也测出了一模一样的上升曲线。"),

    nian("要是这座活火山真喷发了怎么办？", { part: "不能断掉的接力棒", look: sisterPeak }),
    dad("2022 年 11 月底，莫纳罗亚火山真的喷发了！滚烫的岩浆虽然绕开了房子，却埋掉了上山的路和电线，记录只好停了两个多星期。科学家把备用仪器搬到对面云海露尖的那座姊妹山“莫纳克亚”顶上，12 月中旬接着测；后来又用直升机吊来太阳能板，2023 年 3 月恢复了原站。"),
    nian("基林叔叔今天还在测吗？", { show: curveChart, look: "all" }),
    dad("老基林在 2005 年去世了，他的儿子拉尔夫·基林接过了爸爸的班，带着团队继续每天画这条曲线——提醒全世界一起少排温室气体，帮发烧的地球慢慢降下温来。"),
  ],
  remember: "基林曲线从 1958 年画到今天：一上一下的小锯齿是北半球草木一年一度的深呼吸，一路向上的陡坡则记录下人类燃烧化石燃料让二氧化碳升破了八十万年的高点。",
  facts: [
    ["这张图", "1958—2025 年夏威夷莫纳罗亚观测站大气二氧化碳月均浓度（基林曲线）"],
    ["起点与今天", "1958 年 3 月约 315.7 ppm；2013 年首破 400 ppm；2025 年峰值突破 430 ppm"],
    ["为什么有锯齿", "北半球陆地植被春夏光合作用吸碳（9—10 月谷值），秋冬落叶分解呼碳（5 月峰值）"],
    ["观测地点", "太平洋夏威夷莫纳罗亚火山北坡（海拔约 3397 米，远离局地烟囱与森林干扰）"],
    ["两代接力", "查尔斯·大卫·基林 1958 年开创，其子拉尔夫·基林至今在斯克里普斯研究所主持"],
  ],
  sources: [
    { title: "斯克里普斯海洋研究所：The Keeling Curve 实时数据与历史", url: "https://keelingcurve.ucsd.edu/2013/04/03/the-history-of-the-keeling-curve/" },
    { title: "美国国家海洋和大气管理局（NOAA GML）：Mauna Loa CO₂ 趋势", url: "https://gml.noaa.gov/ccgg/trends/mlo.html" },
    { title: "NOAA GML：莫纳罗亚如何测量并剔除局地火山气体干扰", url: "https://gml.noaa.gov/ccgg/about/co2_measurements.html" },
    { title: "美国地质调查局（USGS）：活火山上的基林曲线里程碑", url: "https://www.usgs.gov/observatories/hvo/news/volcano-watch-mauna-loa-observatory-keeling-curve-recognized-landmark" },
    { title: "斯克里普斯研究所（2023）：2022 火山喷发后的跨山接力与复测", url: "https://keelingcurve.ucsd.edu/2023/03/16/mauna-loa-observatory-back-in-action/" },
    { title: "美国化学会（ACS）国家化学史里程碑：The Keeling Curve", url: "https://www.acs.org/content/dam/acsorg/education/whatischemistry/landmarks/lesson-plans/keeling-curve-lesson-plan.pdf" },
    { title: "Wikimedia Commons：Mauna Loa CO2 monthly mean concentration.svg", url: "https://commons.wikimedia.org/wiki/File:Mauna_Loa_CO2_monthly_mean_concentration.svg" },
  ],
};
