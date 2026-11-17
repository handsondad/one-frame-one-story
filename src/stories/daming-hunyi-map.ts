import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const mainMap: Frame = {
  src: "frames/daming-hunyi-map.jpg",
  alt: "巨幅彩色古绢本世界地图：正中是占了大半幅画面的明朝山河与城池，东边是朝鲜与日本，南边有印度半岛，最左边画着三角形的非洲、非洲中部的大湖以及欧洲与地中海",
  kind: "地图",
  by: "明代宫廷画师彩绘（佚名），清康熙年间加贴满文纸签，中国第一历史档案馆藏",
  license: "公有领域",
  commons: "File:Da-ming-hun-yi-tu.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Da-ming-hun-yi-tu.jpg",
  note: "原图高 386 厘米、宽 456 厘米，没有署年份；学者根据图上“广元县”“龙州”等洪武二十二年的政区建置，考定它绘成于 1389 年。",
};

const mingCenter = spot(0.64, 0.54, 0.2, "大明疆域");
const yellowRiver = spot(0.62, 0.43, 0.09, "黄河");
const capitals = spot(0.76, 0.62, 0.08, "南京与凤阳");
const eastNeighbors = spot(0.93, 0.57, 0.11, "朝鲜与日本");
const india = spot(0.4, 0.82, 0.08, "印度半岛");
const africa = spot(0.11, 0.7, 0.1, "非洲");
const cape = spot(0.135, 0.81, 0.045, "非洲南端");
const lake = spot(0.105, 0.66, 0.05, "非洲中部大湖");
const europe = spot(0.13, 0.44, 0.09, "欧洲与地中海");
const manchuSlips = spot(0.76, 0.58, 0.06, "满文纸签");

const kangnidoAfrica: Frame = {
  title: "1402 年朝鲜姊妹图《混一疆理历代国都之图》局部（非洲与地中海）",
  src: "frames/daming-hunyi-kangnido-africa.jpg",
  alt: "古地图局部特写：清楚画出三角形的非洲大陆、中间巨大的内陆湖泊、南端环绕的大海，以及北边的地中海和欧洲海岸",
  kind: "地图",
  by: "朝鲜权近、李荟等据元代李泽民、清浚地图编绘（日本本光寺藏摹本局部）",
  license: "公有领域",
  commons: "File:Africa and the Mediterranean in the Kangnido map.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Africa_and_the_Mediterranean_in_the_Kangnido_map.jpg",
  note: "《大明混一图》存世网图分辨率较低，这里换上晚 13 年、同样源自元代李泽民地图的朝鲜姊妹图局部，能清楚看见没有被满文签遮住的非洲与地中海画法。",
};
const kangnidoLake = spot(0.48, 0.52, 0.22, "非洲中部的大湖");
const kangnidoMed = spot(0.46, 0.19, 0.22, "欧洲与地中海沿岸");

export const damingHunyiMap: Story = {
  id: "daming-hunyi-map",
  title: "贴满小纸条的巨幅丝绸世界",
  frameName: "大明混一图",
  year: 1389,
  when: "明洪武二十二年（1389 年）绘成，清康熙年间加贴满文签",
  field: "地理",
  people: ["明初宫廷画师", "扎马鲁丁", "李泽民", "清浚"],
  teaser: "比一面卧室墙还大的丝绸地图：郑和还没下西洋、欧洲人还没绕过好望角，图的最左边已经画出了尖尖的非洲。",
  frame: mainMap,
  lines: [
    nian("爸爸，这张图上有什么？密密麻麻像一块花地毯，上面全是弯弯曲曲的河！", { part: "这是什么图", look: mingCenter }),
    dad("这是中国现存最古老、也最大的一幅中文世界地图，叫《大明混一图》。它是画在丝绸上的，高将近四米、宽四米半，挂起来比咱们家一整面墙还大！"),
    nian("中间这一大片全是中国吗？"),
    dad("对，那是明朝初年的疆域。“混一”就是天下合为一体的意思。当时画这幅图主要是给皇帝看国家治理的，所以把大明画得特别大，装下一千多个地名。"),
    nian("这根黄颜色的弯线是黄河吗？", { look: yellowRiver }),
    dad("好眼力！别的河都涂灰绿色，只有黄河特意涂成了黄色。东南边还有大大的蓝框，标着明太祖朱元璋定都的“皇都”南京和老家“中都”凤阳。", { look: capitals }),
    nian("咦，北边怎么没有画长城？", { look: yellowRiver }),
    dad("这就是破案线索啦！地图上没写哪一年画的，学者查了上面的县名，发现它画在 1389 年夏天——今天我们熟悉的那道明代砖石长城，那时候还没修起来呢。"),

    nian("大明周围还画了别的国家吗？", { part: "比好望角早一百年", look: eastNeighbors }),
    dad("往东看，这是朝鲜半岛和日本。再往南走，这块伸进大海的三角形是印度半岛。", { look: india }),
    nian("那最左边这块尖尖的陆地是哪里？", { look: africa }),
    dad("是非洲！你看它的最南端，两边都是深色的大海，说明乘船可以从南边绕过去。", { look: cape }),
    nian("这有什么稀奇的吗？"),
    dad("太稀奇了！1389 年的时候，郑和下西洋还没开始，葡萄牙航海家迪亚士绕过非洲南端的好望角更是将近一百年以后的事。当时的欧洲地图，好多还把非洲南边画成封死的大陆呢。"),
    nian("那明朝人怎么知道非洲长这样？"),
    dad("靠的是丝绸之路和海上贸易传来的学问！早在元朝，西域天文学家扎马鲁丁就给忽必烈献过彩绘地球仪，元代学者李泽民、清浚又吸收阿拉伯航海地图画出了远方海陆。"),

    nian("非洲肚子中间怎么有一大片绿色的水？", { part: "非洲肚子里的“大湖”", look: lake }),
    dad("全图缩得小，我们换一张晚十三年、跟它同出一源的朝鲜姊妹图局部，就能看清啦。", { show: kangnidoAfrica, look: kangnidoLake }),
    nian("哇，真的有一个超级大的湖！非洲中间有这么大的海吗？"),
    dad("现实里没有这么大，东非只有维多利亚湖等几座小得多的湖。这是从古希腊托勒密传到阿拉伯地理学家的古老说法，说非洲赤道附近的“月亮山”下有大湖，是尼罗河的源头。"),
    nian("北边这一圈弯弯曲曲的海岸是哪里？", { look: kangnidoMed }),
    dad("那是地中海和欧洲！当时画师忘了给地中海涂深蓝色的海水，可北岸靴子形状的意大利和周围半岛的大概轮廓都已经画出来啦。"),
    nian("有人说这幅图证明郑和船队去过美洲，是真的吗？", { show: mainMap, look: "all" }),
    dad("不是真的。第一，这幅图比郑和第一次出海还早十六年；第二，你看整幅图左边到大西洋、右边到日本就结束了，根本没有美洲。中国人地图上第一次画出美洲，要等到两百多年后利玛窦的《坤舆万国全图》。"),

    nian("图上那一点点密密麻麻的小白块是什么？", { part: "两个朝代的“便利贴”", look: manchuSlips }),
    dad("那是清朝贴上去的“小纸条”！原来明朝画师在方框里写的全是汉字地名。到了三百年后的清朝康熙年间，宫里为了方便读满文，剪了一千多张小红签、小白签，写上满文贴在汉字上面。"),
    nian("把原来的字盖住了？"),
    dad("大部分盖住了，清宫档案里干脆叫它《清字签一统图》。不过几百年下来，有几张小纸签翘起来掉了，底下的明朝汉字又露了出来。"),
    nian("一幅地图上叠着两个朝代！它现在放在哪里？", { look: "all" }),
    dad("保存在北京的中国第一历史档案馆里。因为它太大又画在六百多岁的丝绸上，平时很少展开，静静守着当年东西方互相认识的记忆。"),
  ],
  remember: "1389 年的《大明混一图》吸收了元代与阿拉伯地理学知识，比欧洲人绕过好望角早近一百年画出了三角形的非洲，上面还贴着清朝的满文小纸签。",
  facts: [
    ["这张图", "《大明混一图》，彩绘绢本，纵 386 厘米、横 456 厘米"],
    ["绘成年份", "明洪武二十二年（1389 年，据政区建置考定）"],
    ["地理来源", "明初政区图 + 元代李泽民《声教广被图》、清浚《混一疆理图》及阿拉伯舆图传统"],
    ["特别之处", "左端已绘出非洲南端环海与欧洲地中海；清康熙年间加贴满文纸签"],
    ["今天在哪", "北京，中国第一历史档案馆"],
  ],
  sources: [
    { title: "中国第一历史档案馆镇馆之宝：《大明混一图》", url: "https://fhac.com.cn/treasure/detail/1347.html" },
    { title: "中国测绘学会：影响深远的《大明混一图》", url: "https://www.csgpc.org/detail/23044.html" },
    { title: "Wikimedia Commons：Da-ming-hun-yi-tu.jpg", url: "https://commons.wikimedia.org/wiki/File:Da-ming-hun-yi-tu.jpg" },
    { title: "Akin 2016：The Da Ming Hunyi Tu and Yuan-Islamic Cartography（UC Berkeley）", url: "https://escholarship.org/content/qt5r17c7g0/qt5r17c7g0.pdf" },
    { title: "Kenzheakhmet 2016：Place Names of Africa in the Kangnido and Da Ming Hunyi Tu（The Silk Road）", url: "https://edspace.american.edu/silkroadjournal/wp-content/uploads/sites/984/2017/09/Kenzheakhmet_SR14_2016_106_125_Pl7.pdf" },
    { title: "Wikipedia：Da Ming Hunyi Tu", url: "https://en.wikipedia.org/wiki/Da_Ming_Hunyi_Tu" },
    { title: "Wikipedia：Gangnido（混一疆理历代国都之图）", url: "https://en.wikipedia.org/wiki/Gangnido" },
  ],
};
