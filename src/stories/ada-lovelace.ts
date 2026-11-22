import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/ada-lovelace.jpg",
  alt: "古典水彩肖像：年轻的阿达·洛夫莱斯头戴金色花冠发饰，乌黑卷发盘在耳畔，身穿白裙与黑色提花蕾丝披肩，戴白手套的右手轻握折扇，眼神明亮聪慧",
  kind: "画",
  by: "一般认为是阿尔弗雷德·爱德华·沙隆（Alfred Edward Chalon）约 1840 年绘，伦敦科学博物馆藏",
  license: "公有领域",
  commons: "File:Ada Lovelace portrait.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Ada_Lovelace_portrait.jpg",
};

const face = spot(0.49, 0.3, 0.13, "阿达的脸");
const tiara = spot(0.56, 0.19, 0.11, "金色花冠发饰");
const laceShawl = spot(0.52, 0.52, 0.14, "提花蕾丝披肩");
const glovedHand = spot(0.33, 0.48, 0.09, "戴白手套的手");

const noteGTable: Frame = {
  title: "阿达 1843 年《注文 G》里计算伯努利数的分析机算法大表",
  src: "frames/ada-bernoulli-table.jpg",
  alt: "1843 年英文科学期刊折叠大表：从上到下排着 1 到 25 步运算指令、加减乘除符号、变量列 V1 到 V24，下方印着重复执行第 13 至 23 步的循环说明",
  kind: "图表",
  by: "奥古斯塔·阿达·洛夫莱斯（署名 A.A.L.），1843 年 8 月《泰勒科学文集》插表",
  license: "公有领域",
  commons: "File:Diagram for the computation of Bernoulli numbers.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Diagram_for_the_computation_of_Bernoulli_numbers.jpg",
};

const opSteps = spot(0.08, 0.3, 0.065, "一步步的运算指令", 2.4);
const bugRow4 = spot(0.155, 0.32, 0.05, "第 4 步的小笔误", 2.5);
const variables = spot(0.73, 0.13, 0.13, "存放数字的变量柱");
const loopLine = spot(0.46, 0.835, 0.16, "重复循环指令");

export const adaLovelace: Story = {
  id: "ada-lovelace",
  title: "在一百八十年前给齿轮机器写程序的伯爵夫人",
  frameName: "阿达·洛夫莱斯肖像",
  year: 1843,
  when: "肖像绘于约 1840 年；1843 年 8 月发表《分析机注文》",
  field: "数学",
  people: ["阿达·洛夫莱斯", "查尔斯·巴贝奇", "玛丽·萨默维尔"],
  teaser: "那时候世界上连电灯和电子计算机都还没有，一位披着提花蕾丝披肩的年轻妈妈，已经在一张大表上写出了带“循环”的计算机算法。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一位戴着金花冠、披着黑纱花边披肩的漂亮阿姨，像童话里的公主！", { part: "这是什么图", look: face }),
    dad("她叫阿达·洛夫莱斯，是英国大诗人拜伦的女儿，也是世界上最早看懂“计算机能干什么”的数学家！", { look: tiara }),
    nian("诗人的女儿怎么去学数学啦？"),
    dad("阿达刚出生一个多月父母就分开了，她妈妈自己很喜欢几何，请来女天文学家萨默维尔和数学教授德·摩根教阿达学高等数学。十二岁那年，小阿达迷上了研究鸟翅膀的比例，自己画图设计蒸汽飞鸟呢！", { look: glovedHand }),
    nian("她肩上披的黑纱花纹织得好细呀！", { look: laceShawl }),
    dad("你盯住这条提花蕾丝披肩看——在十九世纪，法国人雅卡尔发明了一种神奇的织布机，用一串串扎了小洞的硬纸板“打孔卡”控制丝线：有洞就挑起线，没洞就放下，机器自己就能织出复杂的花朵和树叶！"),

    nian("织布机跟计算机有什么关系呀？", { part: "会织算式的齿轮机器", look: face }),
    dad("17 岁那年，阿达去参加数学家巴贝奇的聚会。别人看巴贝奇造的铜齿轮计算机器只觉得新奇好玩，阿达却一眼看懂了齿轮怎么算数学。后来巴贝奇在信里称她为“数字女巫”！"),
    dad("后来巴贝奇设计了一台更庞大的蒸汽齿轮机器，叫“分析机”：里面有专门存数字的“仓库”，有负责算数的“磨坊”，而指挥它的，正是从提花织布机借来的“打孔卡”！"),
    nian("那台蒸汽大电脑造出来了吗？"),
    dad("因为零件太精密、经费又不够，巴贝奇一辈子也没把它真正造出来。可在 1843 年，27 岁的阿达把一篇介绍分析机的法文文章译成英文，还在后面加上了自己写的七篇《注文》，足足比原文长了三倍！"),

    nian("她在《注文》里写了什么？", { part: "第一张程序运行大表", show: noteGTable, look: "all" }),
    dad("你看这张折叠大表，就是她在最后一篇《注文 G》里列出来的算法表，教还没造出来的分析机一步步算出复杂的“伯努利数”！"),
    nian("左边一排数字 1、2、3……还有加减乘除号！", { look: opSteps }),
    dad("对！左边写着第几步做什么加减乘除，上面一排 V1、V2、V3 就像今天电脑内存里的一个个小抽屉，把中间算出来的数存进去、取出来。", { look: variables }),
    nian("底下那行英文写的是什么？", { look: loopLine }),
    dad("写的是：“下面重复执行第 13 步到第 23 步”——这就是今天所有程序员天天都在用的“循环”！更逗的是，第 4 步还印反了一个除号顺序，本该是 V4 除以 V5，却印成了 V5 除以 V4，被大家笑称是最早的“程序小虫子”！", { look: bugRow4 }),
    nian("这张表全都是阿达一个人想出来的吗？"),
    dad("科学史家考证过他们来往的信件：巴贝奇自己笔记本里早先写过二十来段简单的算例草稿，两人一起商量过伯努利数的公式，阿达还抓出过巴贝奇推导里的一个大错；而把整套带分支和循环的步骤清清楚楚编成正式发表的大表，正是阿达完成的！"),

    nian("那阿达比巴贝奇看得更远的地方在哪儿？", { part: "织出音乐与百年的预言", show: portrait, look: laceShawl }),
    dad("巴贝奇一门心思只想用机器快点算数学表；阿达却在《注文 A》里写下了一句天才的预言：“分析机织出代数的花样，就像提花织布机织出花朵和树叶一样！”"),
    dad("她说，只要把音符高低和节奏的规律也变成符号喂给机器，将来的计算机不光能算数，还能谱写出优美复杂的音乐！"),
    nian("哇，一百八十年前就猜到电脑能写歌了！那她觉得机器自己会思考吗？", { look: face }),
    dad("阿达冷静地提醒大家：分析机不会凭空创造任何东西，它只会做我们知道怎么命令它去做的事。一百多年后，计算机先驱图灵专门引用了她这段话，取名叫“洛夫莱斯夫人的异议”，开启了“人工智能会不会思考”的大讨论！"),
  ],
  remember: "阿达·洛夫莱斯在 1843 年为尚未造出的齿轮分析机写下了带变量与循环的伯努利数算法表，并预言计算机不仅能算数，还能像织布机织花一样处理符号与谱写音乐。",
  facts: [
    ["这张图", "约 1840 年《阿达·洛夫莱斯水彩肖像》（伦敦科学博物馆藏）及 1843 年《注文 G》算法表"],
    ["生卒年份", "1815 年 12 月 10 日 — 1852 年 11 月 27 日（英国伦敦）"],
    ["代表著作", "1843 年发表《分析机注文》（署名 A.A.L.，篇幅为译文正文的三倍）"],
    ["两大创见", "发表史上首张含循环结构的复杂计算机算法跟踪表；预见通用符号计算与计算机作曲"],
    ["后世纪念", "美国国防部 1980 年以她的名字将新一代编程语言命名为 Ada"],
  ],
  sources: [
    { title: "伦敦科学博物馆：Ada Lovelace 与早期女性计算机先驱", url: "https://www.sciencemuseum.org.uk/objects-and-stories/women-computing" },
    { title: "牛津大学博德利图书馆档案：Ada Lovelace and the Analytical Engine", url: "https://blogs.bodleian.ox.ac.uk/adalovelace/2018/07/26/ada-lovelace-and-the-analytical-engine/" },
    { title: "美国计算机历史博物馆（CHM）：Ada Lovelace 传记与巴贝奇合作史料", url: "https://www.computerhistory.org/babbage/adalovelace/" },
    { title: "伦敦科学博物馆：从巴贝奇、阿达到图灵的思考机器", url: "https://www.sciencemuseum.org.uk/objects-and-stories/human-machine" },
    { title: "Britannica：Ada Lovelace", url: "https://kids.britannica.com/scholars/article/Ada-Lovelace/49130" },
    { title: "Wikimedia Commons：Diagram for the computation of Bernoulli numbers.jpg", url: "https://commons.wikimedia.org/wiki/File:Diagram_for_the_computation_of_Bernoulli_numbers.jpg" },
  ],
};
