import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/newton-portrait.jpg",
  alt: "古典油画半身肖像：四十六岁的牛顿披着自然微卷的银灰长发，目光深邃望向右侧，身穿敞领白衬衫和深棕色学者长袍，左下角露出一只修长的右手",
  kind: "画",
  by: "戈弗雷·内勒（Godfrey Kneller）1689 年绘，朴次茅斯伯爵藏",
  license: "公有领域",
  commons: "File:Portrait of Sir Isaac Newton, 1689 (brightened).jpg",
  page: "https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689_(brightened).jpg",
  dark: true,
};

const face = spot(0.51, 0.28, 0.13, "牛顿的脸");
const eyes = spot(0.52, 0.24, 0.07, "专注的眼神", 2.6);
const hair = spot(0.49, 0.24, 0.22, "自己的银灰长发");
const collar = spot(0.49, 0.44, 0.1, "敞开的白衬衫领");
const hand = spot(0.34, 0.78, 0.11, "修长的右手");

const cannonDiagram: Frame = {
  title: "牛顿《论宇宙体系》（1728）里的“高山大炮”思想实验原图",
  src: "frames/newton-cannonball.jpg",
  alt: "古书木刻插图：圆圆的地球顶端立着一座高山 V，山顶向水平方向射出的炮弹随着速度越来越快，依次落在 D、E、F、G，最快的一颗绕着地球画出一整圈圆轨道",
  kind: "图表",
  by: "艾萨克·牛顿著《论宇宙体系》（1728 年英文初版第 6 页插图）",
  license: "公有领域",
  commons: "File:Newton's cannonball cropped.png",
  page: "https://commons.wikimedia.org/wiki/File:Newton%27s_cannonball_cropped.png",
};

const mountainTop = spot(0.5, 0.19, 0.06, "高山顶 V", 2.6);
const dropPoints = [spot(0.64, 0.27, 0.06, "落点 D"), spot(0.78, 0.4, 0.06, "落点 E")];
const fullOrbit = spot(0.24, 0.54, 0.11, "绕地球一整圈");

export const newtonPortrait: Story = {
  id: "newton-portrait",
  title: "苹果树下想通月亮为什么不掉下来的人",
  frameName: "艾萨克·牛顿肖像",
  year: 1689,
  when: "1689 年，英国伦敦（《自然哲学的数学原理》出版两年后）",
  field: "物理",
  people: ["艾萨克·牛顿", "埃德蒙·哈雷", "戈特弗里德·莱布尼茨"],
  teaser: "他没有戴当时流行的假发，披着一头银灰真发望向远方——从窗缝里的彩虹到天上的月亮，他找出了藏在整个宇宙里的同一条规律。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一个留着银白色大卷发的叔叔，眼神好专注呀！", { part: "这是什么图", look: face }),
    dad("他就是英国大科学家艾萨克·牛顿。1689 年画这幅肖像的时候他 46 岁，刚刚写出了改变人类科学的巨著《自然哲学的数学原理》。"),
    nian("他头上戴的是那种古代法官的卷毛假发吗？", { look: hair }),
    dad("不是假发！当时英国绅士出门确实流行戴厚厚的假发，但牛顿在这幅画里披着自己天生的银灰色长发，连白衬衫领口都松松敞着，一副在书房里专心想问题的模样。", { look: collar }),
    nian("他小时候就很聪明吗？", { look: eyes }),
    dad("他出生时是个早产儿，小得能装进一只大啤酒杯里，差点没活下来。长大后他特别迷恋动手做小机关：做过滴水计时的水钟、墙上的日晷，还做过一架小风车，让一只小老鼠在轮子上跑着磨面粉！", { look: hand }),

    nian("后来他怎么发现了那么多大秘密？", { part: "暗室里的两块三棱镜", look: face }),
    dad("1665 年剑桥大学因为闹鼠疫停课，二十出头的牛顿回到乡下老家待了一年半。他在集市上买了玻璃三棱镜，把卧室窗板关得黑漆漆的，只在上面戳了一个小圆孔。"),
    nian("一束阳光照进小孔，会发生什么？"),
    dad("阳光穿过三棱镜，在对面墙上拉出了一条漂亮的七色彩虹！当时大家都以为白光是最纯净的，是玻璃给白光“染上了颜色”。"),
    dad("牛顿却在彩虹后面又放了一块带小孔的木板和第二个三棱镜，只让红光穿过去——结果红光拐了个弯，还是红光，再也不会变出别的颜色！这一下子证明：不是玻璃染了色，而是白光本来就藏着整道彩虹！"),
    nian("哇，用两块棱镜破了案！"),
    dad("他还因为透镜看星星总带彩色毛边，亲手磨出一面弯弯的金属反射镜，造出了第一台清晰的反射式望远镜——今天太空里的哈勃、韦布望远镜，全都是它的后代。"),

    nian("爸爸，牛顿真的是被树上掉下来的苹果砸中脑袋，才想出万有引力的吗？", { part: "苹果没有砸中头", look: eyes }),
    dad("“砸中脑袋”是后人越传越夸张的段子！不过苹果树是真的。牛顿晚年亲口告诉朋友斯图克利：有天他在院子里喝茶发呆，看见一颗苹果从树上掉下来。"),
    nian("苹果往下掉，谁都见过呀，有什么好奇怪的？"),
    dad("牛顿却问了自己两个孩子气的问题：第一，苹果为什么不往旁边飞、不往天上飞，偏偏每次都笔直朝地心掉？第二，拉住苹果的这股地球引力，能不能一直伸到几十万千米外，拉住天上的月亮？"),
    nian("咦，如果地球也在拉月亮，月亮为什么没像苹果一样掉下来砸到地上？"),
    dad("牛顿画过一张绝妙的插图来回答你！我们换上他书里的原图看看。", { show: cannonDiagram, look: mountainTop }),
    nian("地球头顶怎么长出一座超级高的山，山顶还在放炮！"),
    dad("对！牛顿说：想象在没有空气阻力的超高山顶平着打出一颗炮弹。劲儿小的时候，它弯弯地掉在近处的 D 点；劲儿大一点，就飞到更远的 E 点。", { look: dropPoints }),
    dad("要是炮弹射得足够快——每秒将近八千米，它往下掉一米的时候，圆圆的地球表面刚好也在它脚下往下弯了一米！结果它永远掉向地球，却永远落不到地面，就绕着地球转起圈来了！", { look: fullOrbit }),
    nian("啊！原来月亮一直在往地球上“掉”，只是跑得太快，总也掉不下来！"),
    dad("一点没错！树上的苹果、天上的月亮、绕太阳转的行星，全都听同一条“万有引力定律”的话。多亏天文学家哈雷催他写出来、还自掏腰包帮他印书，全世界才读到了这部巨著。"),

    nian("他还发明过别的吗？", { part: "海边捡贝壳的孩子", show: portrait, look: "all" }),
    dad("为了算清运动和变化的快慢，他还发明了数学里威力巨大的“微积分”——几乎同一时期，德国数学家莱布尼茨也独立发明了微积分，今天课本上写的微积分符号就是莱布尼茨设计的。"),
    nian("他发现了这么多，一定觉得自己什么都懂了吧？"),
    dad("恰恰相反。牛顿晚年说过一段很美的话：我不知道世人怎么看我，但在我自己眼里，我就像一个在海边玩耍的孩子，偶尔捡到一两颗更光滑的石子或更漂亮的贝壳，而真理的大海还在我面前未被发现呢。"),
  ],
  remember: "牛顿用两块三棱镜证明白光藏着七色彩虹，又从落地的苹果想到绕地球旋转的月亮，写下三大运动定律和万有引力定律。",
  facts: [
    ["这张图", "戈弗雷·内勒 1689 年绘《艾萨克·牛顿肖像》（时年 46 岁）"],
    ["生卒年份", "1643 年 1 月 4 日（旧历 1642 年圣诞节）— 1727 年 3 月 31 日"],
    ["核心贡献", "万有引力定律、三大运动定律、白光色散与反射望远镜、微积分（流数法）"],
    ["代表巨著", "1687 年《自然哲学的数学原理》（由埃德蒙·哈雷鼓励并出资付印）"],
    ["苹果真相", "晚年亲述在果园见苹果落地引发思考，但并未砸中头顶"],
  ],
  sources: [
    { title: "剑桥大学图书馆展览：Godfrey Kneller 1689 年牛顿肖像", url: "https://exhibitions.lib.cam.ac.uk/linesofthought/artifacts/newton-by-kneller/" },
    { title: "英国皇家学会：牛顿苹果树与斯图克利 1752 年手稿档案", url: "https://royalsociety.org/blog/2012/02/newtons-apple-tree/" },
    { title: "牛津大学牛顿计划：William Stukeley《牛顿爵士生平回忆录》原文", url: "https://newtonproject.ox.ac.uk/view/texts/normalized/OTHE00001" },
    { title: "英国国民信托：伍尔索普庄园（牛顿故居与苹果树）", url: "https://www.nationaltrust.org.uk/visit/nottinghamshire-lincolnshire/woolsthorpe-manor/history-of-woolsthorpe-manor" },
    { title: "剑桥数字图书馆：牛顿光学手稿与《原理》手稿", url: "https://cudl.lib.cam.ac.uk/view/MS-ADD-03970" },
    { title: "英国皇家学会：牛顿亲手制作的反射望远镜（1671）", url: "https://pictures.royalsociety.org/image-rs-8462" },
    { title: "Britannica：Isaac Newton", url: "https://www.britannica.com/biography/Isaac-Newton" },
  ],
};
