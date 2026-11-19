import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/tesla-portrait.jpg",
  alt: "棕褐色古典影室半身肖像照：三十四岁左右的特斯拉梳着中分黑发，留着整齐的八字胡，穿白色高立领衬衫与深色西装，眼神深邃锐利",
  kind: "照片",
  by: "拿破仑·萨罗尼（Napoleon Sarony）约 1890 年摄于纽约，美国国会图书馆藏",
  license: "公有领域",
  commons: "File:Tesla Sarony.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Tesla_Sarony.jpg",
};

const face = spot(0.49, 0.385, 0.21, "特斯拉");
const eyes = spot(0.485, 0.345, 0.14, "锐利的眼神");
const mustache = spot(0.475, 0.455, 0.085, "八字胡", 2.5);
const collar = spot(0.495, 0.61, 0.125, "高立领衬衫");

const lightningLab: Frame = {
  title: "1899 年底科罗拉多斯普林斯实验室里的“看书与人造闪电”多重曝光照",
  src: "frames/tesla-lightning-lab.jpg",
  alt: "震撼的黑白实验室照片：左边巨大的金属球顶线圈喷射出近七米长、树枝般炸裂的白色闪电横贯房间，而特斯拉安安静静坐在木椅上低头看书",
  kind: "照片",
  by: "迪肯森·阿利（Dickenson V. Alley）1899 年 12 月摄（特斯拉 1901 年题赠克鲁克斯爵士印本）",
  license: "公有领域",
  commons: "File:Nikola Tesla, with his equipment Wellcome M0014782 - restoration1.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Nikola_Tesla,_with_his_equipment_Wellcome_M0014782_-_restoration1.jpg",
  note: "特斯拉在 1899 年 12 月 31 日实验笔记中亲自写明：这张名照是分开曝光拍在同一张玻璃底片上的——放电时椅子上是空的，关掉高压线圈后他才坐上去看书补拍。",
  dark: true,
};

const arcs = spot(0.49, 0.38, 0.24, "近七米长的人造闪电");
const readingTesla = spot(0.28, 0.66, 0.105, "安静看书的特斯拉", 2.4);
const transmitter = spot(0.155, 0.52, 0.15, "巨大的特斯拉线圈");

export const teslaPortrait: Story = {
  id: "tesla-portrait",
  title: "把瀑布的电送进千家万户、在闪电旁“看书”的发明家",
  frameName: "尼古拉·特斯拉肖像",
  year: 1890,
  circa: true,
  when: "肖像摄于约 1890 年纽约；闪电实验室照片摄于 1899 年 12 月",
  field: "技术",
  people: ["尼古拉·特斯拉", "乔治·威斯汀豪斯", "托马斯·爱迪生"],
  teaser: "公园散步时用树枝在泥地上画出了旋转磁场，让交流电穿过细电线点亮整座城市；那张他在七米闪电底下淡定看书的照片，还藏着他自己坦白的小把戏。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一个留着小胡子、穿高领白衬衫的瘦叔叔，眼睛亮得像会发电！", { part: "这是什么图", look: face }),
    dad("哈哈，你这个比方太准了——他一辈子真就在跟“电”打交道！他叫尼古拉·特斯拉，1856 年出生在欧洲，家里相传他出生那天半夜正好电闪雷鸣，接生婆吓得说他是“暴风雨之子”，他妈妈却说：“不，他会是光明之子！”当然，这只是家里流传的浪漫传说。", { look: eyes }),
    nian("他的记忆力也很厉害吗？", { look: mustache }),
    dad("他在自传里说，自己设计机器很少先画图纸，总是在脑海里把整台机器搭起来、开动运转，连哪个零件磨歪了都能在脑子里“看见”！", { look: collar }),

    nian("他最重要的发明是什么？", { part: "泥地上画出来的旋转磁场", look: eyes }),
    dad("你看看咱们家墙上的电源插座——能把发电厂的电隔着几百千米送到千家万户的“多相交流电系统”和“交流感应电动机”，最关键的设计就出自特斯拉！"),
    nian("爱迪生不是已经发明电灯和发电站了吗？"),
    dad("爱迪生最早用的是低电压“直流电”，就像在水管里推一股又粗又慢的大水，电线很快就会发热耗掉能量，发电站只能管周围一两千米的房子，再远就黑灯瞎火了！"),
    dad("而“交流电”每秒钟来回换几十次方向，能配合法拉第原理造出的变压器：出厂时先把电压升得极高，只用细细的电线就能把电送到几百千米外，进城前再降回安全的电压。"),
    nian("可是交流电来回变方向，怎么让电动机顺顺当当转起来呢？"),
    dad("这道题困住了好多工程师！1882 年傍晚，26 岁的特斯拉在布达佩斯公园散步背诵诗句，脑子里像闪电一样跳出了“旋转磁场”：用两三股步伐错开的交流电轮流接力，磁场自己就会转起圈来，连容易冒火花的电刷都不用！他激动得抓起一根树枝，蹲在公园泥地上就把电动机原理图画了出来。"),
    dad("后来企业家威斯汀豪斯买下他的专利，在 1893 年点亮了芝加哥世博会十万盏灯，又在尼亚加拉大瀑布建起水电站，把奔腾的水流变成了远方城市的灯光！"),

    nian("我还见过一张他在满屋子大闪电底下看书的照片，他不怕被电死吗？", { part: "闪电旁看书的真相", show: lightningLab, look: arcs }),
    dad("就是这一张！1899 年底在科罗拉多斯普林斯的实验室里，左边那座巨大的“特斯拉线圈”喷出了将近七米长的人造闪电，雷声震得几千米外都能听见。", { look: transmitter }),
    nian("天哪，闪电都快劈到他头顶了，他怎么还稳稳坐着看书呀！", { look: readingTesla }),
    dad("哈哈，别被骗啦——要是线圈真开着，坐在那儿可太危险了！特斯拉自己在那年 12 月 31 日的实验笔记里老老实实写下了真相：这是摄影师用同一张玻璃底片拍了两次的“多重曝光”！"),
    nian("怎么拍两次呀？"),
    dad("先把屋里灯全关黑，椅子空着，开动机器拍下漫天闪电；然后把高压电彻底关掉，特斯拉再安安全全坐到椅子上捧起书，打一束光补拍上去——两幅画面叠在一起，就成了这张传遍世界的奇照！"),

    nian("他还发明过无线遥控的小船？", { part: "真本事与假传说", show: portrait, look: face }),
    dad("对！1898 年他用无线电波隔空指挥一艘一米多长的铁皮小船转弯、亮灯，观众从来没见过“遥控器”，有人甚至猜船肚子里是不是藏了一只训练过的小猴子，特斯拉干脆掀开船盖让大家看个明白——那就是今天所有遥控玩具和无人机的老祖宗！"),
    nian("网上有人说他一个人发明了所有的电，还造出了不用花钱的“免费无线电”被人藏起来了，是真的吗？", { look: "all" }),
    dad("那些都是越传越玄的夸张说法。交流电也有皮克西、费拉里斯等许多科学家的接力贡献；他晚年想建高塔向全球无线输电，是因为无线电波向四面八方散开损耗太大、资金也断了才没成功——毕竟发电本身总要烧燃料或靠水力，哪有凭空变出来的免费电呢？他真正留给全人类的交流电与无线电创见，本来就已经足够伟大啦！"),
  ],
  remember: "特斯拉发明了旋转磁场与多相交流电电动机系统，让电力能翻山越岭点亮千家万户；那张他在七米人造闪电旁看书的名照，其实是一张巧妙的多重曝光。",
  facts: [
    ["这张图", "约 1890 年萨罗尼摄特斯拉肖像，及 1899 年科罗拉多实验室多重曝光闪电照"],
    ["生卒年份", "1856 年 7 月 10 日 — 1943 年 1 月 7 日"],
    ["核心贡献", "旋转磁场与多相交流感应电动机（1888 专利）、尼亚加拉瀑布交流水电系统、特斯拉线圈、无线电遥控船（1898）"],
    ["照片秘密", "1899 年底实验笔记亲载：放电时椅子为空，关电后补拍看书人像"],
    ["科学单位", "国际单位制将磁感应强度（磁场强弱）的单位命名为“特斯拉（T）”"],
  ],
  sources: [
    { title: "美国国会图书馆：Napoleon Sarony 摄尼古拉·特斯拉肖像（约 1890）", url: "https://www.loc.gov/item/2014684845/" },
    { title: "Wellcome Collection：1899 年科罗拉多斯普林斯实验室闪电照片档案", url: "https://wellcomecollection.org/works/zncts6ch" },
    { title: "Smithsonian 美国国家历史博物馆：尼亚加拉大瀑布与多相交流电革命", url: "https://www.americanhistory.si.edu/lighting/19thcent/consq19.htm" },
    { title: "IEEE 工程技术史百科（ETHW）：Nikola Tesla", url: "https://ethw.org/Nikola_Tesla" },
    { title: "贝尔格莱德尼古拉·特斯拉博物馆（联合国世界记忆遗产档案）", url: "https://www.unesco.org/en/memory-world/nikola-teslas-archive" },
    { title: "Britannica：Nikola Tesla", url: "https://www.britannica.com/biography/Nikola-Tesla" },
  ],
};
