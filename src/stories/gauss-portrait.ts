import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/gauss-portrait.jpg",
  alt: "油画半身肖像：六十三岁的数学家高斯头戴黑色天鹅绒圆便帽，身穿厚重深色毛领学者大衣和洁白领巾，一双深邃的蓝眼睛平静地望向前方",
  kind: "画",
  by: "克里斯蒂安·阿尔布雷希特·延森（Christian Albrecht Jensen）1840 年绘",
  license: "公有领域",
  commons: "File:Carl Friedrich Gauss 1840 by Jensen.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Carl_Friedrich_Gauss_1840_by_Jensen.jpg",
};

const eyes = spot(0.4, 0.27, 0.085, "深邃的蓝眼睛");
const velvetCap = spot(0.47, 0.11, 0.12, "黑色天鹅绒帽");
const cravat = spot(0.56, 0.57, 0.1, "洁白的领巾");
const coat = spot(0.45, 0.75, 0.2, "厚重的学者大衣");

const heliotrope: Frame = {
  title: "高斯发明的“回光仪”（1862 年测量学木刻插图）",
  src: "frames/gauss-heliotrope.jpg",
  alt: "精细的黑白科学仪器木刻图：三脚调平底座上架着一具水平瞄准望远镜，镜筒前端装有两片可旋转的小反光镜，用来把太阳光反射到几十千米外的山头",
  kind: "图表",
  by: "鲍恩费因德《测量学原理》（1862 年版插图）",
  license: "公有领域",
  commons: "File:Gauss' Heliotrope.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Gauss%27_Heliotrope.jpg",
};

const mirrors = spot(0.85, 0.17, 0.1, "旋转反光小镜子");
const scope = spot(0.36, 0.21, 0.15, "瞄准望远镜");

export const gaussPortrait: Story = {
  id: "gauss-portrait",
  title: "九岁算完等差数列、用算式抓回迷路星星的王子",
  frameName: "卡尔·弗里德里希·高斯肖像",
  year: 1840,
  when: "1840 年夏，德国哥廷根（高斯时年 63 岁）",
  field: "数学",
  people: ["卡尔·弗里德里希·高斯", "马丁·巴特尔斯", "朱塞佩·皮亚齐"],
  teaser: "砌砖工家的孩子九岁就把石板往讲台上一放说“答案在这儿”，十九岁解开两千年的画图难题，还用一支笔在天上找回了弄丢的谷神星。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一位戴着黑色圆帽子、穿厚大衣的老爷爷，眼睛蓝蓝的好有神！", { part: "这是什么图", look: eyes }),
    dad("他叫卡尔·弗里德里希·高斯，德国人，大家都叫他“数学王子”。这幅画像后来还被印在了德国的 10 马克纸币上呢！", { look: velvetCap }),
    nian("叫“王子”，是因为他生在皇宫里吗？", { look: coat }),
    dad("一点也不！他的爸爸是辛苦的砌砖工和园丁，妈妈连字都不太认识，只记得他生在某个星期三——高斯长大后自己算出那是 1777 年 4 月 30 日。据他老朋友写的传记回忆，他三岁看爸爸算工钱，就能奶声奶气地指出哪儿算错了！", { look: cravat }),

    nian("哇！那他在小学里秒算“1 加到 100 等于 5050”的故事，也是真的吗？", { part: "小石板上的一个数", look: eyes }),
    dad("大方向是真的，还有个好玩的细节！高斯的好朋友兼传记作者瓦尔特斯豪森记下：高斯九岁那年，比特纳老师给全班近百个孩子出了一道很长的“等差数列连加题”，以为大家得埋头苦算一整堂课。"),
    dad("谁知老师话音刚落，小高斯就把写好答案的小石板往讲台上一放，用家乡话说了一句：“在这儿啦！”下课翻开一看，全班只有他一个人写对了！"),
    nian("原来老师当年出的不一定正好是 1 加到 100 呀？"),
    dad("对，传记里没写具体数字，学者猜老师出的可能是更难的多位数连加；不过道理就跟“1 加到 100”一模一样——把第一项和最后一项一头一尾配成对，50 对 101，一眼就看出是 5050！助教巴特尔斯发现这个神童后，借给他好多数学书一起读。"),

    nian("长大以后，他解开了什么大人都解不开的题？", { part: "两千年的十七边形与迷路的星", look: velvetCap }),
    dad("快满 19 岁那年的一个早晨，高斯证明了：只用没有刻度的直尺和圆规，就能画出“正十七边形”！从古希腊欧几里得算起，两千多年里全世界没人知道正十七边形能这样画出来，高兴得他当场决定一辈子研究数学，还在第一页数学日记上记下了这一天。"),
    nian("听说他的墓碑上就刻着正十七边形？"),
    dad("那也是个小误传——因为十七条边太多，刻在石头上看起来简直跟圆圈一样，石匠没法刻；后来人们是在他家乡纪念碑的底座侧面，刻上了一颗漂亮的十七角星！"),
    nian("他还用数学抓回过天上迷路的星星？"),
    dad("1801 年元旦，天文学家皮亚齐发现了一颗新天体“谷神星”，可刚跟踪了 41 天，它就躲到刺眼的太阳光后面找不着了！全欧洲的天文学家急得团团转，24 岁的高斯用自己发明的“最小二乘法”算出了它的椭圆轨道——年底大家把望远镜往高斯指的地方一瞄，谷神星乖乖等在那儿呢！"),

    nian("最小二乘法又是什么呀？", { part: "山顶闪光的镜子", show: heliotrope, look: scope }),
    dad("人用仪器量东西总会有小小误差，高斯发现误差的分布像一口两头低、中间高的“钟形曲线”——也就是今天大名鼎鼎的“正态分布”，最小二乘法就是从一堆有误差的数据里找出最准答案的办法。"),
    nian("这张图上的望远镜前面，怎么装了两片小镜子？", { look: mirrors }),
    dad("这是高斯亲自发明的“回光仪”！当年他骑马跑遍汉诺威的山头测量大地，几十千米外的测量桩根本看不清；他就用这两片小镜子把太阳光像打手电一样精准反射过去，远处的山头上就像亮起了一颗耀眼的星星！"),
    nian("一边爬山照镜子，一边还在想数学吗？", { show: portrait, look: "all" }),
    dad("是呀！量着弯弯的地球表面，他又想出了“曲面弯曲程度怎么只从表面量出来”的几何定理——一百年后，爱因斯坦正是靠着高斯和学生黎曼开创的这套弯曲空间几何，写出了广义相对论！"),
  ],
  remember: "出身贫寒的“数学王子”高斯九岁巧算等差数列，十九岁尺规作出正十七边形，并用最小二乘法与正态分布算回了迷路的谷神星。",
  facts: [
    ["这张图", "延森 1840 年绘《卡尔·弗里德里希·高斯肖像》（曾印于德国 10 马克纸币）"],
    ["生卒年份", "1777 年 4 月 30 日（不伦瑞克）— 1855 年 2 月 23 日（哥廷根）"],
    ["核心贡献", "正十七边形尺规作图、《算术研究》、最小二乘法与正态分布、高斯曲率、电磁学"],
    ["天文奇功", "1801 年仅凭 41 天观测数据算出谷神星轨道，助天文学家重寻谷神星"],
    ["巧妙发明", "1821 年大地测量时发明反射阳光的“回光仪”"],
  ],
  sources: [
    { title: "国际数学联盟（IMU）：Jensen 1840 年高斯肖像考述", url: "https://www.mathunion.org/imu-awards/carl-friedrich-gauss-prize" },
    { title: "圣安德鲁斯大学 MacTutor 数学史档案：Carl Friedrich Gauss", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Gauss/" },
    { title: "American Scientist：Gauss's Day of Reckoning（小学算题史料考辨）", url: "https://www.americanscientist.org/article/gausss-day-of-reckoning" },
    { title: "NASA JPL：谷神星的发现与高斯轨道计算（1801）", url: "https://www.jpl.nasa.gov/news/ceres-keeping-well-guarded-secrets-for-215-years/" },
    { title: "哥廷根大学数字图书馆：高斯 1796 年 3 月 30 日数学日记第一条", url: "https://gdz.sub.uni-goettingen.de/id/DE-611-HS-3382323" },
    { title: "Britannica：Carl Friedrich Gauss", url: "https://www.britannica.com/biography/Carl-Friedrich-Gauss" },
  ],
};
