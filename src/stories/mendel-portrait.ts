import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/mendel-portrait.jpg",
  alt: "黑白半身肖像照：戴着细圆框眼镜的孟德尔神情温和宁静，身穿立领白色教士领与深色修道士长袍，胸前挂着一串珠链和精致的修道院院长十字架",
  kind: "照片",
  by: "约 1868 年摄于布尔诺（威廉·贝特森 1902 年《孟德尔遗传学原理》卷首插图）",
  license: "公有领域",
  commons: "File:Gregor Mendel Monk.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Gregor_Mendel_Monk.jpg",
};

const face = spot(0.485, 0.31, 0.19, "孟德尔");
const glasses = spot(0.48, 0.305, 0.105, "圆框眼镜", 2.4);
const collar = spot(0.5, 0.51, 0.11, "修道士衣领");
const cross = spot(0.495, 0.86, 0.105, "院长十字架", 2.4);

const peaChart: Frame = {
  title: "孟德尔研究的豌豆七对特征对比图",
  src: "frames/mendel-pea-traits.jpg",
  alt: "米色背景上的彩色科学示意图，从左到右并排画着豌豆的七对明显特征：圆粒与皱粒种子、黄粒与绿粒种子、白花与紫花、饱满与皱缩豆荚、黄豆荚与绿豆荚、叶腋花与顶生花、高茎与矮茎",
  kind: "示意图",
  by: "Mariana Ruiz Villarreal（LadyofHats）、Sciencia58 绘",
  license: "CC0（公有领域贡献）",
  commons: "File:Gregor Mendel - characteristics of pea plants 0.png",
  page: "https://commons.wikimedia.org/wiki/File:Gregor_Mendel_-_characteristics_of_pea_plants_0.png",
  note: "按孟德尔 1865 年论文归纳的豌豆七对明显相对性状绘制的彩色科普示意图。",
};

const seedShape = spot(0.075, 0.54, 0.07, "圆粒与皱粒");
const seedColor = spot(0.205, 0.54, 0.07, "黄豆与绿豆");
const flowers = spot(0.355, 0.54, 0.075, "白花与紫花");
const heightTrait = spot(0.925, 0.54, 0.07, "高茎与矮茎");

export const mendelPortrait: Story = {
  id: "mendel-portrait",
  title: "在菜园里数了两万八千棵豌豆的修道士",
  frameName: "格雷戈尔·孟德尔肖像",
  year: 1865,
  circa: true,
  when: "1865 年宣读《植物杂交实验》论文；肖像摄于约 1868 年奥匈帝国布尔诺",
  field: "生物",
  people: ["格雷戈尔·孟德尔", "克里斯蒂安·多普勒"],
  teaser: "考正式教师证两次都没过的温和修道士，拿着小镊子和小毛笔在院子里种了八年豌豆，比发现 DNA 早了将近一百年解开了遗传密码。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一位戴着小圆眼镜的叔叔，胸前还挂着一个花纹十字架！", { part: "这是什么图", look: face }),
    dad("他叫格雷戈尔·孟德尔，住在今天捷克布尔诺的圣托马斯修道院里。拍这张照片时他刚当选修道院院长，所以胸前戴着院长十字架。", { look: cross }),
    nian("修道士不是每天念经祷告吗，怎么也做科学实验？", { look: collar }),
    dad("那座修道院特别热爱科学，里面有大图书馆、植物园和气象站！孟德尔本来是农夫家的穷孩子，爸爸干活受了伤交不起学费，妹妹连嫁妆钱都拿出来帮他读书，后来老师推荐他进了修道院，他才终于能安心做研究了。"),
    nian("他读书考试一定每次都拿第一名吧？", { look: glasses }),
    dad("说出来你可能不信——他去考正式中学教师资格证，考了两次都没通过！第一次偏偏还是生物和地质分最低；第二次在维也纳考笔试时紧张得生病退了场，只好一直当“代课老师”。"),
    dad("不过修道院院长送他去维也纳大学进修过两年，他在大物理学家多普勒门下学会了一样厉害的本事：**不光看一两棵植物，而是像做物理实验一样种成千上万棵，用数学统计找规律！**"),

    nian("他在修道院里种了什么？", { part: "两万八千棵豌豆与小毛笔", show: peaChart, look: seedShape }),
    dad("种大家平时吃的豌豆！从 1856 年到 1863 年整整八年，他在院子一块三十五米长的小菜地里，一共种了两万八千多棵植物，仔细挑出了豌豆最好认的七对特征——你看最左边，有圆溜溜的豌豆，也有皱巴巴的豌豆。"),
    nian("旁边还有黄豆粒和绿豆粒、白花和紫花、高个子和矮个子！", { look: flowers }),
    dad("对！豌豆花平时关着花瓣自己给自己授粉。孟德尔为了给不同豌豆“配对”，每天弯着腰拿小镊子拨开花苞剪掉雄蕊，再用细细的骆驼毛小画笔蘸上另一棵豌豆的花粉涂上去，最后套上小布袋防小虫乱传粉。", { look: heightTrait }),

    nian("这么辛苦涂花粉，他发现了什么秘密？", { part: "颜料没混匀的“三比一”", look: seedColor }),
    dad("在孟德尔以前，大家都以为遗传就像调水彩颜料：红颜料加白颜料混成粉红色，就再也变不回纯白色了。"),
    dad("可孟德尔把纯种黄豌豆和纯种绿豌豆配在一起，长出来的第一代豆子居然**全都是黄色的**，一颗黄绿混色的都没有！"),
    nian("啊？绿色的特点消失了吗？"),
    dad("神奇的事就在第二年！他把这些黄豌豆种下去让它们自己结果，剥开豆荚一数：总共八千零二十三颗豆子里，6022 颗是黄色，2001 颗又变回了清清楚楚的绿色——不多不少，正好是 **3 比 1**！"),
    nian("哇！圆粒和皱粒、紫花和白花也是 3 比 1 吗？", { look: seedShape }),
    dad("七对特征全都是大约 3 比 1！孟德尔一下子想通了：父母传给孩子的不是混成一团的颜料水，而是一颗颗分开的“遗传因子”——爸爸给一颗、妈妈给一颗。显性的黄色盖住了隐性的绿色，可绿色因子一点没坏，下一代碰到两个绿色凑一对，就完好无损地跳出来啦！"),
    dad("那就是今天我们说的“基因”——只是“基因”这个名字，要到孟德尔去世二十五年后才有人取出来呢。"),

    nian("这么伟大的发现，当时轰动全世界了吗？", { part: "睡了三十四年的论文", show: portrait, look: face }),
    dad("没有……1865 年孟德尔在当地学会读了两场报告，台下四十来个人没一个听懂豌豆里怎么跑出了那么多数学公式。论文印出来寄给大植物学家耐格里，对方反而劝他改种“山柳菊”试试。"),
    nian("山柳菊种出来也是 3 比 1 吗？"),
    dad("偏偏山柳菊是个“捣蛋鬼”！那时候没人知道，山柳菊不用授粉就能自己结出一模一样的克隆种子，害得孟德尔在显微镜下白白累坏了眼睛也没测出 3 比 1。直到 1884 年去世，世人只当他是一位和蔼的院长和气象观察员。"),
    nian("后来大家怎么知道他的？有人怀疑过他的数字太整齐了吗？", { look: "all" }),
    dad("整整过了三十四年，到 1900 年春天，三位欧洲植物学家各自做实验发现了同样的规律，一查旧文献，惊讶地发现孟德尔早就写得明明白白！二十世纪曾有统计学家觉得他的数字“准得有点过头”，不过现代学者重新核查植物抽样过程，确认他并没有造假——是那两万八千棵豌豆打开了现代遗传学的大门！"),
  ],
  remember: "孟德尔用八年时间在修道院菜园里给两万八千棵豌豆授粉计数，从神奇的“3 比 1”比例里发现了显性与隐性遗传因子，推翻了混合遗传的旧观念。",
  facts: [
    ["这张图", "约 1868 年孟德尔修道院院长肖像照，及豌豆七对相对性状图"],
    ["生卒年份", "1822 年 7 月 20 日 — 1884 年 1 月 6 日（奥匈帝国布尔诺）"],
    ["实验规模", "1856—1863 年在修道院实验园培育检验约 28000 株植物（聚焦豌豆 7 对性状）"],
    ["两大定律", "遗传分离定律（第二代显性与隐性约呈 3:1）与自由组合定律"],
    ["迟到的认可", "1865 年宣读、1866 年发表，沉寂 34 年后于 1900 年被三位学者同时重现"],
  ],
  sources: [
    { title: "捷克布尔诺马萨里克大学孟德尔博物馆：Gregor Johann Mendel", url: "https://mendelmuseum.muni.cz/en/about-the-museum/gregor-johann-mendel" },
    { title: "冷泉港实验室 DNA 学习中心：Gregor Mendel 传记与实验", url: "https://dnalc.cshl.edu/view/16167-Biography-2-Gregor-Mendel-1822-1884" },
    { title: "Nature Scitable：孟德尔与遗传学基本定律", url: "https://www.nature.com/scitable/topicpage/gregor-mendel-and-the-principles-of-inheritance-593/" },
    { title: "Fairbanks 2022（Heredity）：孟德尔诞辰两百周年史实与误传考辨", url: "https://www.nature.com/articles/s41437-022-00526-0" },
    { title: "Britannica：Gregor Mendel", url: "https://www.britannica.com/biography/Gregor-Mendel" },
  ],
};
