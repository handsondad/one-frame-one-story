import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const pierre = spot(0.24, 0.19, 0.09, "皮埃尔");
const marie = spot(0.82, 0.44, 0.09, "玛丽");
const meter = spot(0.5, 0.5, 0.17, "测量仪器");
const hands = spot(0.62, 0.76, 0.11);

export const curieLab: Story = {
  id: "curie-lab",
  title: "会发光的新元素",
  frameName: "居里夫妇在实验室",
  year: 1904,
  when: "大约 1904 年，巴黎",
  field: "化学",
  people: ["玛丽·居里", "皮埃尔·居里", "亨利·贝克勒尔"],
  teaser: "一台测“看不见的东西”的仪器，一个漏雨的棚子，找出了镭。",
  frame: {
    src: "frames/curie-lab.jpg",
    alt: "黑白老照片：留胡子的男人站在左边，穿白衣服的女人坐在右边，两人中间的桌上有一台带竖筒和横杆的仪器",
    kind: "照片",
    by: "摄影师不详",
    license: "公有领域",
    commons: "File:Pierre and Marie Curie.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg",
  },
  lines: [
    nian("爸爸，这是一个叔叔和一个阿姨在做实验吗？", { part: "这是什么图" }),
    dad("对，他们是一对夫妻科学家。站着的是皮埃尔·居里，坐着的是玛丽·居里，大家常叫她居里夫人。这张照片大约是 1904 年拍的。", { look: [pierre, marie] }),
    nian("他们中间这个是什么机器？"),
    dad("一台测量仪器。它能量出一种看不见的“射线”有多强。", { look: meter }),
    nian("居里夫人的手在干什么？", { look: hands }),
    dad("她一只手往一个小秤盘上加减砝码，另一只手按秒表计时。照片外面还有一个小光点在刻度上移动，她得一边盯着，一边掐时间。"),

    nian("看不见的射线？是 X 光吗？", { part: "看不见的射线", look: "all" }),
    dad("是 X 光的“亲戚”。1896 年，伦琴发现 X 光后没多久，法国科学家贝克勒尔发现，铀矿石不用通电，自己就会放出看不见的射线。"),
    nian("石头自己会放射线？"),
    dad("对。玛丽决定把它当成自己的博士研究题目。她用皮埃尔和他哥哥发明的一种特别灵敏的仪器，把各种矿石一样一样拿来测。"),
    nian("就是照片里这台吗？", { look: meter }),
    dad("就是这一类。射线穿过空气，空气就能导一点点电。射线越强，电就越多。这台仪器能感觉到那一丁点儿电。"),
    nian("她测出什么了？"),
    dad("她发现一种叫沥青铀矿的黑石头，射线比里面的铀应该放出的强得多。她想：石头里一定藏着一种还没人知道的东西。"),

    nian("那是什么东西？", { part: "两个新元素" }),
    dad("皮埃尔觉得太有意思了，放下自己的研究来帮她。1898 年 7 月，他们找到了第一种新元素，玛丽给它起名叫“钋”，纪念她的祖国波兰。", { look: pierre }),
    nian("她不是法国人吗？"),
    dad("她出生在波兰华沙，二十多岁才到巴黎读书。那时候波兰被别的国家分掉了，地图上没有它的名字，她就用一个元素记住它。", { look: marie }),
    nian("那第二种呢？"),
    dad("同一年 12 月，他们又宣布了第二种，叫“镭”，名字来自拉丁文里的“射线”。“放射性”这个词，也是他们最先用的。", { look: "all" }),

    nian("找到了，不就成功了吗？", { part: "破棚子里的四年" }),
    dad("别的科学家说：你得把它拿出来，称一称有多重，才算数。可是镭在矿石里少得可怜，要从好几吨矿渣里一点一点提出来。"),
    nian("好几吨！那得多大的地方？"),
    dad("学校借给他们一个没人用的旧棚子，以前是解剖室。玻璃屋顶漏雨，夏天闷得像蒸笼，冬天只有一个铁炉子。"),
    nian("好辛苦啊。"),
    dad("玛丽写过，她有时候一整天都在搅一大锅滚烫的东西，铁棍差不多跟她一样高，晚上累得散了架。"),
    nian("后来提出来了吗？"),
    dad("1902 年，差不多四年以后，她终于得到了 0.1 克很纯的氯化镭，还算出了镭原子有多重。"),
    nian("才 0.1 克？"),
    dad("大约四五粒米那么重。可就是这一点点，让所有人相信了：镭是真的。"),

    nian("镭长什么样？", { part: "会发光的瓶子" }),
    dad("它最神奇的是自己会发出淡淡的光。玛丽写过：晚上走进棚子，四周装着镭的小瓶子微微发亮，“像童话里淡淡的小灯”。"),
    nian("好美啊。"),
    dad("她说，在那个破棚子里的日子，是他们一生里最好、最快乐的几年。"),

    nian("他们得奖了吗？", { part: "两个诺贝尔奖" }),
    dad("1903 年，居里夫妇和贝克勒尔一起得了诺贝尔物理学奖。玛丽是第一个得诺贝尔奖的女性。"),
    nian("找到镭，他们发财了吧？"),
    dad("没有。镭很快被用来治病，价钱很贵。他们本来可以申请专利，可玛丽说，那样“不符合科学的精神”，就把提炼方法公开给了所有人。"),
    nian("跟伦琴一样！"),
    dad("是啊。1906 年，皮埃尔在街上被马车撞倒，去世了。玛丽很伤心，但她接过了他在巴黎大学的课，成了那里第一位女教授。", { look: pierre }),
    dad("1911 年，她又一个人得了诺贝尔化学奖。到今天，她还是唯一在两门不同的科学里都得过诺贝尔奖的人。", { look: marie }),

    nian("射线会伤人吗？", { part: "看不见的危险", look: "all" }),
    dad("会。那时候大家还不知道它的危险，你看照片里，他们没戴手套，也没穿防护服。玛丽晚年病得很重，医生认为和她多年接触放射性物质有关。", { look: hands }),
    nian("现在的人知道要小心了吧？", { look: "all" }),
    dad("对。她的实验笔记本一百多年后还带着一点放射性，现在放在法国国家图书馆里，最“脏”的几页用塑料封了起来，要看原件得经过很严格的手续。"),
    nian("隔着玻璃看也危险吗？"),
    dad("不危险。专家量过，在玻璃柜前站十分钟，受到的辐射比我们一天里从大自然受到的还少几千倍。"),
  ],
  remember: "一台测“看不见的东西”的仪器、一个漏雨的棚子、四年的坚持——镭就是这样被找到的。",
  facts: [
    ["这张图", "居里夫妇在实验室演示测量放射性的仪器"],
    ["时间、地点", "大约 1904 年，巴黎"],
    ["新元素", "1898 年 7 月钋，12 月镭"],
    ["提纯", "1902 年得到 0.1 克氯化镭"],
    ["诺贝尔奖", "1903 年物理学奖（与皮埃尔、贝克勒尔），1911 年化学奖"],
  ],
  sources: [
    { title: "Wikimedia Commons：Pierre and Marie Curie", url: "https://commons.wikimedia.org/wiki/File:Pierre_and_Marie_Curie.jpg" },
    { title: "NobelPrize.org：Marie and Pierre Curie and the discovery of polonium and radium", url: "https://www.nobelprize.org/prizes/chemistry/marie-and-pierre-curie-and-the-discovery-of-polonium-and-radium/" },
    { title: "AIP：Marie Curie, The Struggle to Isolate Radium (In Her Own Words)", url: "https://history.aip.org/exhibits/curie/brief/06_quotes/quotes_08.html" },
    { title: "BnF：Un héritage qui rayonne. Les carnets de Marie Curie", url: "https://www.bnf.fr/fr/un-heritage-qui-rayonne-les-carnets-de-marie-curie" },
    { title: "Encyclopedia.com：Madame Curie", url: "https://www.encyclopedia.com/arts/culture-magazines/madame-curie" },
  ],
};
