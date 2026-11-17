import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const wings = [spot(0.21, 0.31, 0.1, "左翅飞羽"), spot(0.77, 0.46, 0.11, "右翅飞羽")];
const leftClaws = spot(0.34, 0.14, 0.07, "翅膀上的三根爪子", 2.8);
const rightClaws = spot(0.81, 0.29, 0.075, "右翅的三根爪子", 2.8);
const skull = spot(0.31, 0.4, 0.065, "带尖牙的嘴", 3);
const tail = spot(0.42, 0.82, 0.12, "长骨尾与尾羽");
const legs = spot(0.56, 0.65, 0.12, "两条长腿");
const slab = spot(0.76, 0.8, 0.09, "印画用的石灰岩");

export const archaeopteryxBerlin: Story = {
  id: "archaeopteryx-berlin",
  title: "翅膀上长爪子的小怪物",
  frameName: "柏林始祖鸟化石",
  year: 1874,
  circa: true,
  when: "约 1874—1876 年在德国巴伐利亚发现；化石形成于约 1.5 亿年前",
  field: "生物",
  people: ["雅各布·尼迈耶", "维尔纳·冯·西门子", "查尔斯·达尔文"],
  teaser: "一块用来印画的细腻石头劈开来，里面躺着一只一亿五千万年前的动物——长着鸟的羽毛，却有恐龙的尖牙、利爪和长尾巴。",
  frame: {
    src: "frames/archaeopteryx-berlin.jpg",
    alt: "米黄色细粒石灰岩石板上保存着一具完整的古生物骨骼化石：左右展开清晰的羽毛印痕，脖子向后弯曲带着小头骨，翅膀前端伸出带钩爪的指骨，身后拖着一长串尾骨和两侧对称的尾羽",
    kind: "照片",
    by: "H. Raab（User:Vesta）摄，柏林自然博物馆藏标本（MB.Av.101）",
    license: "CC BY-SA 3.0",
    commons: "File:Archaeopteryx lithographica (Berlin specimen).jpg",
    page: "https://commons.wikimedia.org/wiki/File:Archaeopteryx_lithographica_(Berlin_specimen).jpg",
  },
  lines: [
    nian("爸爸，这张图上有什么？一块黄黄的石头上，印着一只张开翅膀的大鸟骨头！", { part: "这是什么图", look: wings }),
    dad("它叫“始祖鸟”，意思是“古老的翅膀”，生活在大约一亿五千万年前的侏罗纪晚期。这一块保存在德国柏林自然博物馆，是全世界最漂亮、最有名的一块始祖鸟化石。"),
    nian("它有多大？像老鹰那么大吗？"),
    dad("没那么大，从头到尾巴大约半米长，体重不到一公斤，跟咱们在公园里见到的喜鹊、乌鸦差不多大。"),
    nian("一亿五千万年前！羽毛那么软，怎么没烂掉，还一根根印在石头上？", { look: slab }),
    dad("全靠这块特别的石头！德国索伦霍芬当年有一片又咸又缺氧的浅海潟湖，海底的泥细得像面粉一样。它掉进去被细泥轻轻盖住，连羽毛丝的印子都留了下来。"),
    dad("更好玩的是，后来人们采这种细石头，本来是拿去做“石版印刷”印书印画的——工人们一锤子劈开石板，发现大自然早就在里面“印”好了一亿多年前的画！"),

    nian("那它就是一只古老的鸟啰？", { part: "半只鸟，半只恐龙", look: leftClaws }),
    dad("别急，我们放大看它左边翅膀尖上伸出来的三根小骨头——你看见上面长着什么了吗？"),
    nian("啊！翅膀上怎么长着三根弯弯的尖爪子！右边翅膀上也有！", { look: rightClaws }),
    dad("今天的鸽子、麻雀翅膀里骨头早就合在一起，没有分开的三根手指爪了，可小型食肉恐龙的前爪就是这个样子！再看它往后仰着的小脑袋。", { look: skull }),
    nian("嘴里还有一排小小的尖牙齿！鸟不是都没有牙吗？"),
    dad("现在的鸟确实一概没有牙。再往下看它的尾巴：今天的鸟屁股后面只有短短一截尾综骨，可它拖着二十多节长长的骨头尾巴，两边像树叶一样排着羽毛！", { look: tail }),
    nian("既有鸟的羽毛和翅膀，又有恐龙的牙齿、爪子和长尾巴！", { look: legs }),
    dad("你说得太准了！1859 年达尔文刚发表《物种起源》，说新物种是从古老物种一步步演变来的，中间应该有“过渡”的样子；才过了两年人们就挖出了第一块始祖鸟，十几年后又找到了这件带完整头骨的柏林标本。"),

    nian("谁这么幸运挖到了它？", { part: "一头牛与真假之争", look: "all" }),
    dad("据当地采石农夫尼迈耶的后人回忆，1874 年前后他劈出了这块石头，卖了一百多马克，刚好去买了一头家里急需的母牛。"),
    dad("后来化石辗转涨到两万金马克，差点被买去国外。发明发电机的德国工程师西门子赶紧掏钱买下它，留在了柏林的博物馆里。"),
    nian("会不会是有人在水泥上拿鸡毛印出来的假化石呀？"),
    dad("1985 年还真有位天文学家这么怀疑过！博物馆的科学家把石板放到显微镜和紫外线下检查：天然形成的极细矿物裂纹和树枝状结晶，清清楚楚地穿过石头、骨头和羽毛印痕，根本造不了假。"),

    nian("那今天天上飞的所有小鸟，都是它的孩子吗？", { part: "窗外的活恐龙", look: wings }),
    dad("以前课本常叫它“鸟类的老祖宗”，现在科学家研究得更细了：它更像鸟类家谱树靠近根部的一位“表亲”，不一定就是今天所有鸟的直系太爷爷。"),
    dad("尤其是 1996 年以后，中国辽宁挖出了中华龙鸟、小盗龙、赫氏近鸟龙等好多长羽毛的恐龙化石，大家终于明白：羽毛本来就是恐龙先长出来的，一开始可能是为了保暖和好看，后来才帮它们飞上蓝天！"),
    nian("它当年是什么颜色的，也能知道吗？"),
    dad("能！科学家用电子显微镜找到了它羽毛化石里残留的微小色素颗粒，推算出它的翅膀羽毛很可能是哑光黑色的，而且黑色素还能让羽毛更结实。"),
    nian("原来恐龙没有全都灭绝？", { look: "all" }),
    dad("没有全灭绝！大个子的恐龙消失了，可长羽毛、飞上天的这一支活了下来——今天停在咱们窗台上的每一只麻雀和鸽子，其实就是活生生的恐龙后代！"),
  ],
  remember: "柏林始祖鸟化石同时长着鸟的羽毛翅膀和恐龙的尖牙、三根翼爪与长骨尾；它和后来中国发现的带羽恐龙一起证明，今天的鸟类就是活着的恐龙后代。",
  facts: [
    ["这张图", "柏林始祖鸟化石标本（MB.Av.101），长约 50 厘米"],
    ["生活年代", "侏罗纪晚期，距今约 1.5 亿年"],
    ["发现地", "德国巴伐利亚索伦霍芬一带的石版印刷石灰岩采石场（约 1874—1876 年）"],
    ["双重特征", "鸟类特征：飞羽、翅膀、叉骨；恐龙特征：颌骨利齿、三指翼爪、长骨尾"],
    ["今天在哪", "德国柏林自然博物馆（1880 年由西门子出资促成留藏）"],
  ],
  sources: [
    { title: "柏林自然博物馆：Fossil Vertebrates & Berlin Archaeopteryx", url: "https://www.museumfuernaturkunde.berlin/en/research/collection/palaeontology/fossil-vertebrates/" },
    { title: "英国自然历史博物馆（NHM）：Archaeopteryx", url: "https://www.nhm.ac.uk/discover/dino-directory/archaeopteryx.html" },
    { title: "英国自然历史博物馆：恐龙是如何演化成鸟类的", url: "https://www.nhm.ac.uk/discover/how-dinosaurs-evolved-into-birds.html" },
    { title: "加州大学伯克利古生物博物馆（UCMP）：Archaeopteryx", url: "https://ucmp.berkeley.edu/diapsids/birds/archaeopteryx.html" },
    { title: "Charig et al. 1986：Archaeopteryx Is Not a Forgery（Science）", url: "https://www.science.org/doi/10.1126/science.232.4750.622" },
    { title: "Carney et al. 2012：始祖鸟羽毛黑色素体颜色研究（Nature Communications）", url: "https://www.nature.com/articles/ncomms1642" },
    { title: "Wikimedia Commons：Archaeopteryx lithographica (Berlin specimen).jpg", url: "https://commons.wikimedia.org/wiki/File:Archaeopteryx_lithographica_(Berlin_specimen).jpg" },
  ],
};
