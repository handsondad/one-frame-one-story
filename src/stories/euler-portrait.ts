import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/euler-portrait.jpg",
  alt: "粉彩半身肖像画：头戴浅蓝银灰色丝绸软帽、身穿蓝黑宽条纹家居长袍的数学家欧拉侧身回望，左眼明亮有神，右眼眼睑明显低垂近乎闭合，嘴角带着温和笑意",
  kind: "画",
  by: "雅各布·伊曼纽尔·汉德曼（Jakob Emanuel Handmann）1753 年绘，巴塞尔艺术博物馆藏",
  license: "公有领域",
  commons: "File:Leonhard Euler - Jakob Emanuel Handmann (Kunstmuseum Basel).jpg",
  page: "https://commons.wikimedia.org/wiki/File:Leonhard_Euler_-_Jakob_Emanuel_Handmann_(Kunstmuseum_Basel).jpg",
};

const rightEye = spot(0.35, 0.33, 0.05, "失明的右眼", 2.4);
const leftEye = spot(0.465, 0.33, 0.05, "明亮的左眼", 2.4);
const silkCap = spot(0.54, 0.18, 0.17, "丝绸软帽");
const stripedRobe = spot(0.45, 0.8, 0.18, "蓝黑条纹睡袍");

const bridgesMap: Frame = {
  title: "欧拉 1736 年论文里的“哥尼斯堡七桥”原版铜版图",
  src: "frames/euler-bridges.jpg",
  alt: "黑白古籍铜版地图：一条分叉的河流围出河心岛 A 和东岛 D，连同南北两岸 B、C 一共架着标有字母 a 到 g 的七座桥",
  kind: "图表",
  by: "莱昂哈德·欧拉（Leonhard Euler），《圣彼得堡帝国科学院院刊》1736 年卷插图",
  license: "公有领域",
  commons: "File:Solutio problematis ad geometriam situs pertinentis, Fig. 1 - Cleaned Up.png",
  page: "https://commons.wikimedia.org/wiki/File:Solutio_problematis_ad_geometriam_situs_pertinentis,_Fig._1_-_Cleaned_Up.png",
};

const islandA = spot(0.37, 0.55, 0.13, "河心岛 A（连着 5 座桥）");
const islandD = spot(0.76, 0.55, 0.11, "东岛 D（连着 3 座桥）");
const sevenBridges = [
  spot(0.24, 0.78, 0.035), spot(0.49, 0.84, 0.035),
  spot(0.28, 0.27, 0.035), spot(0.45, 0.26, 0.035),
  spot(0.58, 0.56, 0.035), spot(0.69, 0.75, 0.035), spot(0.71, 0.33, 0.035),
];

export const eulerPortrait: Story = {
  id: "euler-portrait",
  title: "闭上眼睛也能心算星辰的七桥破案人",
  frameName: "莱昂哈德·欧拉肖像",
  year: 1753,
  when: "1753 年，瑞士巴塞尔（欧拉时年 46 岁）",
  field: "数学",
  people: ["莱昂哈德·欧拉", "约翰·伯努利"],
  teaser: "画里他的右眼已经几乎看不见了，后来连左眼也失明了——可他凭着惊人的记忆力，在黑暗里口述出四百多篇论文。早在年轻时，他还用“数单双数”解开了全城人走不通的七座桥。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一个戴着软软布帽子、穿条纹衣服的叔叔，咦，他的两只眼睛怎么一大一小呀？", { part: "这是什么图", look: rightEye }),
    dad("你观察得真细！这位是瑞士大数学家莱昂哈德·欧拉。画里靠左边这只低垂的眼睛是他的右眼，三十岁出头一场重病后就几乎看不见了，只剩右边这只明亮的左眼能看东西。", { look: leftEye }),
    nian("有人说他是盯着太阳看才把眼睛看瞎的，是真的吗？"),
    dad("那是后人编出来的说法。史学家查过记录，他其实是先发过一次差点要命的高烧，加上没日没夜地趴在桌上帮科学院绘制精细的大地图，感染和劳累才夺走了右眼的视力。可他一点也不难过，笑着说：“这样也好，以后让我分心的事就更少了！”"),
    nian("他穿的蓝黑条纹衣服像睡衣一样舒服！", { look: stripedRobe }),
    dad("那是十八世纪学者在家里常穿的丝绸晨袍，头上戴的也是轻便的丝绸软帽。欧拉十三岁就上了巴塞尔大学，大数学家约翰·伯努利每周六下午专门抽出时间给他解答难题。", { look: silkCap }),

    nian("爸爸，听说欧拉还帮一座城市解过一道散步的难题？", { part: "七座桥的一笔画", look: leftEye }),
    dad("对！当时有一座叫哥尼斯堡的城市，河中间有两座小岛，架着七座桥。据说城里人散步时爱琢磨：能不能不重复、不漏掉，一次走遍全部七座桥？谁也没走成。后来，不远处但泽城的市长埃勒写信，把这道题告诉了欧拉。"),
    dad("我们换上欧拉 1736 年论文里亲手画的地图，小念拿手指试试看！", { show: bridgesMap, look: sevenBridges }),
    nian("我从中间的大岛 A 出发……走过去、走回来、再过去……哎呀，最后总有一座桥过不去！", { look: islandA }),
    dad("欧拉根本没去一座座傻走，他一眼看穿了背后的秘密：岛有多大、桥有多长全都没关系，只要数每一块陆地连着几座桥！你看中间的河心岛 A 连着 5 座桥，东岛 D 连着 3 座桥，南北两岸也各连着 3 座桥。", { look: [islandA, islandD] }),
    nian("5、3、3、3——全都是单数！单数怎么啦？"),
    dad("你想呀，除了起点和终点，你每路过一块陆地，都得“一进一出”用掉两座桥——那必须是双数！如果单数桥的陆地超过两块，神仙也没法一笔画走完！"),
    nian("哇，不用试几百遍，数一数单数双数就破案了！"),
    dad("这就是今天数学里“图论”和“拓扑学”的起点——现在手机地图给你算最短路线、地铁换乘图怎么画，老祖宗都是欧拉那天的七座桥！"),

    nian("他还发明过我们学过的东西吗？", { part: "看不见以后的四百篇论文", show: portrait, look: leftEye }),
    dad("太多啦！圆周率用希腊字母 π 表示，就是欧拉推广到全世界的；还有函数符号 f(x)、自然常数 e、求和号 Σ，他简直是给现代数学定下“字母表”的人。连正方体“8 个顶点减 12 条棱加 6 个面等于 2”这个多面体公式，也是他发现的！"),
    nian("他只剩一只好眼睛，写这么多字不累吗？"),
    dad("更让人敬佩的还在后面：快六十岁时，他唯一的好眼睛——左眼也长了白内障，渐渐几乎看不见了。六十四岁那年做了手术，眼前亮了没几天，又因为并发症几乎完全失明。"),
    nian("两只眼睛都看不见了，还怎么算数学呀？"),
    dad("欧拉没有停下来。他的记忆力惊人：有一回，两个学生把一串很长的数一项项加到第十七项，结果对不上，他就在脑子里把整道题重算一遍，判出了谁对。平时他坐在桌前口述，让儿子和助手记下来。"),
    dad("他特别喜欢孩子，说过自己有些最了不起的发现，是怀里抱着小宝宝、脚边围着一群玩耍的孩子时想出来的。他一生写下八百六十多篇著作，差不多一半是快六十岁、视力几乎全失以后完成的！", { look: "all" }),
    nian("闭着眼睛心里还有一整片星空！"),
    dad("所以法国大数学家拉普拉斯常对年轻学生说：“读欧拉吧，读欧拉吧，他是我们所有人的老师。”"),
  ],
  remember: "欧拉用“数单双数桥”解开了哥尼斯堡七桥难题、开创了图论，即使双目几乎失明后仍凭着惊人记忆力口述出四百多篇数学著作。",
  facts: [
    ["这张图", "汉德曼 1753 年绘《莱昂哈德·欧拉粉彩肖像》，巴塞尔艺术博物馆藏"],
    ["生卒年份", "1707 年 4 月 15 日（瑞士巴塞尔）— 1783 年 9 月 18 日（圣彼得堡）"],
    ["著名成就", "解决哥尼斯堡七桥问题（开创图论与拓扑学）、多面体欧拉公式 V−E+F=2、微积分与数论"],
    ["数学符号", "创立或推广了 π、e、i、f(x)、Σ 等今天通用的数学符号"],
    ["惊人毅力", "一生完成 860 余部论著，其中约一半在双目近乎全盲后口述完成"],
  ],
  sources: [
    { title: "巴塞尔艺术博物馆藏品页：Jakob Emanuel Handmann 绘欧拉肖像（1753）", url: "https://sammlungonline.kunstmuseumbasel.ch/eMuseumPlus?module=collection&objectId=1429&service=ExternalInterface&viewType=detailView" },
    { title: "圣安德鲁斯大学 MacTutor 数学史档案：Leonhard Euler", url: "https://mathshistory.st-andrews.ac.uk/Biographies/Euler/" },
    { title: "MacTutor：孔多塞《欧拉颂词》英译（学生级数之争、去世当天）", url: "https://mathshistory.st-andrews.ac.uk/Extras/Euler_elogium/" },
    { title: "Gautschi 2008：Leonhard Euler: His Life, the Man, and His Works（SIAM Review，含欧拉自传“每周六下午”）", url: "https://doi.org/10.1137/070702710" },
    { title: "Hopkins & Wilson 2004：The Truth about Königsberg（但泽市长埃勒的来信）", url: "https://doi.org/10.2307/4146895" },
    { title: "欧拉档案（Euler Archive E53）：1736 年哥尼斯堡七桥原论文与插图", url: "https://scholarlycommons.pacific.edu/euler-works/53/" },
    { title: "欧拉档案（Euler Archive E230）：多面体公式 V−E+F=2", url: "https://scholarlycommons.pacific.edu/euler-works/230/" },
    { title: "Bullock 2022：Why was Leonhard Euler blind?（英国数学史杂志）", url: "https://doi.org/10.1080/26375451.2022.2052493" },
    { title: "Britannica：Leonhard Euler", url: "https://www.britannica.com/biography/Leonhard-Euler" },
  ],
};
