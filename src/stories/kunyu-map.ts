import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const daming = spot(0.4, 0.31, 0.04, "大明", 3);
const pacific = spot(0.68, 0.55, 0.08, "太平洋");
const essay = spot(0.96, 0.25, 0.04, "总论", 3);
const hemispheres = [spot(0.055, 0.12, 0.05, "北半球"), spot(0.055, 0.88, 0.05, "南半球")];
const americas = spot(0.78, 0.4, 0.15, "南北亚墨利加");
const europe = spot(0.19, 0.22, 0.06, "欧逻巴");
const africa = spot(0.17, 0.5, 0.08, "利未亚");
const magellanica = spot(0.5, 0.82, 0.12, "墨瓦蜡泥加");
const liPreface = spot(0.565, 0.435, 0.06, "李之藻的序", 3);
const ricciPreface = spot(0.49, 0.71, 0.06, "利玛窦的序", 3);

export const kunyuMap: Story = {
  id: "kunyu-map",
  title: "把整个世界画给你看",
  frameName: "坤舆万国全图",
  year: 1602,
  when: "1602 年，北京",
  field: "地理",
  people: ["利玛窦", "李之藻"],
  teaser: "四百多年前，一张大地图第一次把五大洲画给中国人看。",
  frame: {
    src: "frames/kunyu-map.jpg",
    alt: "一张横着的古代世界地图，五大洲涂着不同的颜色，到处写满汉字；中间偏左是中国，右边是美洲，最下面一长条是一片很大的南方大陆",
    kind: "地图",
    by: "利玛窦、李之藻原作；日本东北大学图书馆藏彩色摹本",
    license: "公有领域",
    commons: "File:Kunyu Wanguo Quantu (坤輿萬國全圖).jpg",
    page: "https://commons.wikimedia.org/wiki/File:Kunyu_Wanguo_Quantu_(%E5%9D%A4%E8%BC%BF%E8%90%AC%E5%9C%8B%E5%85%A8%E5%9C%96).jpg",
    note: "这一张是后来照着原版描画、上了颜色的摹本，旁边加了日文注音；内容和 1602 年的刻印本基本一样。",
  },
  lines: [
    nian("爸爸，这是世界地图吗？怎么上面都是汉字？", { part: "这是什么图" }),
    dad("对，这是一张四百多年前的世界地图，叫《坤舆万国全图》。“坤舆”就是大地，“万国”就是很多很多国家。"),
    nian("是谁画的？"),
    dad("一位从意大利来的传教士，叫利玛窦，和他的中国朋友李之藻一起做的。1602 年在北京刻成木版印了出来。"),
    nian("它有多大？"),
    dad("很大！原版分成六大幅，拼起来有一米七左右高、三米七左右宽，比我们家的墙还宽，可以装成一扇屏风立起来。"),
    nian("这一张也是那时候印的吗？"),
    dad("这一张是后来的人照着原版描画、涂上颜色的，所以五大洲颜色都不一样，更好认。旁边还有日本人加的小字注音。"),

    nian("中国在哪儿？", { part: "谁在中间" }),
    dad("你找找“大明”两个字。那时候是明朝，中国就叫大明。", { look: daming }),
    nian("找到了！在中间偏左一点。"),
    dad("对。利玛窦从欧洲带来的地图，本来是把欧洲放在中间的，中国被挤在最右边。", { look: "all" }),
    nian("那中国人看了会不高兴吧？"),
    dad("确实有人觉得不对劲。利玛窦就换了个办法：把地图从大西洋那里“剪开”，这样中国就挪到了靠中间的地方。"),
    nian("可以这样随便挪吗？"),
    dad("可以呀。地球是圆的，像个球。把球摊平画在纸上，从哪儿剪开都行，每张世界地图都得自己选一个“中间”。"),
    nian("那中间这一大片是什么？", { look: pacific }),
    dad("是太平洋，在中国和美洲之间。这张地图把太平洋放在了中间，我们今天的中文世界地图也常常这样画。"),

    nian("那时候的人知道地球是圆的吗？", { part: "像个鸡蛋黄" }),
    dad("地图右边这一长条字，开头就写着：“地与海本是圆形而合为一球”，大地和大海合起来，是一个球。", { look: essay }),
    dad("它还打了个比方：地球在天的中间，就像鸡蛋黄在蛋清里面。"),
    nian("那住在球下面的人，不会掉下去吗？", { look: "all" }),
    dad("那时候好多人也这么问！李之藻说，古书里早就有“地像鸡蛋”的说法，可是说海水也包着这个球、球上到处都住着人，这让很多人听了很吃惊。"),
    nian("左边角上这两个圆圈是什么？", { look: hemispheres }),
    dad("是两个小地球：上面这个画的是北半球，下面这个画的是南半球。就像把一个橘子从中间切开，分别从上面和下面看。"),

    nian("右边那一大块是哪儿？", { part: "五大洲", look: americas }),
    dad("是美洲，地图上叫“南北亚墨利加”。这是中国人第一次在地图上看到美洲。"),
    nian("以前大家不知道有美洲吗？"),
    dad("不光中国，欧洲人也是在一百多年前才坐船到了那里。利玛窦在地图上也写了这件事。"),
    nian("左边呢？", { look: europe }),
    dad("左上是欧洲，地图上叫“欧逻巴”。"),
    dad("下面那块大的是非洲，那时候叫“利未亚”。我们住的这一大块叫“亚细亚”，就是亚洲。", { look: africa }),
    nian("欧逻巴、亚细亚，听起来跟现在差不多！", { look: "all" }),
    dad("对。地图上有好多名字一直用到今天，比如地中海、大西洋、加拿大、古巴、罗马。地理课上的经线、纬线，也是从这张图传开的。"),

    nian("最下面这一长条是哪儿？", { part: "猜出来的大陆", look: magellanica }),
    dad("那叫“墨瓦蜡泥加”，名字来自航海家麦哲伦。那时候的人认为，地球南边有一块很大很大的陆地。"),
    nian("是南极洲吗？"),
    dad("不完全是。这块大陆有一大半是猜出来的。那时候还没有人真正到过南极，地图自己也老老实实写着：它的边在哪儿，还不清楚。"),
    nian("画地图还能猜呀？"),
    dad("不知道的地方，先照着大家的想法画上，再写明白“还不确定”。这就是诚实。"),
    nian("后来呢？"),
    dad("一直到 1820 年，才有人真正看见南极洲。那时候，离这张地图印出来已经两百多年了。"),

    nian("海里这一大段字是什么？", { part: "两个朋友", look: liPreface }),
    dad("是李之藻写的序。做这张大地图正是他的主意：他嫌以前南京刻的那张太小，要做一张大的，印出来给更多人看。"),
    nian("那利玛窦也写了吗？", { look: ricciPreface }),
    dad("写了，在下面这儿，最后署着他的名字。他说，自己刚到中国的时候汉语还不熟，画的第一张地图有好多毛病。"),
    nian("他后来学会中文了？"),
    dad("学得很好。他在中国住了将近三十年，穿中国衣服，用中文写书，交了很多中国朋友。"),
    nian("皇帝看到这张地图了吗？", { look: "all" }),
    dad("看到了。几年以后，万历皇帝看到一幅彩色的，很喜欢，让人又做了好多幅。南京博物院就藏着一幅 1608 年给宫里画的彩色本。"),
    nian("1602 年印的那种，现在还多吗？"),
    dad("全世界只剩几幅了。2009 年，美国的一家图书馆花一百万美元买下了一幅。"),
    nian("一张地图那么贵！"),
    dad("因为它记下了一件大事：四百多年前，中国人第一次在一张地图上，看到了整个世界。"),
  ],
  remember: "地球是圆的，每张地图都要选一个中间；这张图第一次把五大洲画给了中国人看。",
  facts: [
    ["这张图", "《坤舆万国全图》的彩色摹本，日本东北大学图书馆藏"],
    ["原版", "1602 年在北京刻版印刷，六幅拼成"],
    ["大小", "原版约高 1.68 米、宽 3.71 米"],
    ["作者", "利玛窦、李之藻"],
    ["五大洲", "欧逻巴、利未亚、亚细亚、南北亚墨利加、墨瓦蜡泥加"],
  ],
  sources: [
    { title: "Wikimedia Commons：Kunyu Wanguo Quantu (坤輿萬國全圖)", url: "https://commons.wikimedia.org/wiki/File:Kunyu_Wanguo_Quantu_(%E5%9D%A4%E8%BC%BF%E8%90%AC%E5%9C%8B%E5%85%A8%E5%9C%96).jpg" },
    { title: "Library of Congress：Rare Matteo Ricci World Map on Display (2010)", url: "https://loc.gov/today/pr/2010/10-002.html" },
    { title: "Library of Congress：Jonathan Spence on the Ricci map", url: "https://loc.gov/loc/lcib/1005/map.html" },
    { title: "Library of Congress：坤輿萬國全圖 catalog record", url: "https://loc.gov/item/2010585650" },
    { title: "舆图记：坤舆万国全图（序跋原文）", url: "https://yutuji.com/kunyu/" },
    { title: "MPR News：The 'black tulip' map comes to Minnesota (2010)", url: "https://www.mprnews.org/story/2010/01/12/blacktulip-map" },
    { title: "British Antarctic Territory：Antarctica 200", url: "https://www.britishantarcticterritory.org.uk/heritage/antarctica-200/" },
  ],
};
