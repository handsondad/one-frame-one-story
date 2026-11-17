import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const bridge = spot(0.66, 0.3, 0.2, "虹桥");
const beams = spot(0.63, 0.25, 0.07, "木头编的拱");
const boat = spot(0.83, 0.32, 0.15, "大船");
const mast = spot(0.85, 0.2, 0.07, "桅杆");
const crew = spot(0.71, 0.38, 0.06, "撑篙的船工");
const crowd = spot(0.66, 0.12, 0.09, "看热闹的人");
const deck = spot(0.5, 0.22, 0.08);
const sedan = spot(0.47, 0.28, 0.04, "轿子");
const rider = spot(0.56, 0.15, 0.04, "骑马的人");
const stalls = spot(0.4, 0.52, 0.1, "小摊");
const tavern = spot(0.04, 0.55, 0.07, "门楼");
const carts = spot(0.22, 0.8, 0.1, "车和牲口");

export const qingmingScroll: Story = {
  id: "qingming-scroll",
  title: "九百年前的一座桥",
  frameName: "清明上河图",
  year: 1110,
  circa: true,
  when: "北宋末年，大约九百年前",
  field: "艺术",
  people: ["张择端"],
  teaser: "大船就要撞上桥，桥上的人都在喊——九百年前的一瞬间。",
  frame: {
    src: "frames/qingming-scroll.jpg",
    alt: "古画的一段：一座没有桥墩的木拱桥横跨河面，桥上挤满了人和小摊，一条大船正斜着从桥下穿过，船上的人撑着长竹竿",
    kind: "画",
    by: "张择端（北宋），北京故宫博物院藏",
    license: "公有领域",
    commons: "File:Along the River During the Qingming Festival (detail of original).jpg",
    page: "https://commons.wikimedia.org/wiki/File:Along_the_River_During_the_Qingming_Festival_(detail_of_original).jpg",
    note: "这是长卷中间虹桥的一段，不是整幅画。",
  },
  lines: [
    nian("爸爸，这幅画上好多人啊！他们在干什么？", { part: "这是什么图" }),
    dad("这是《清明上河图》里最热闹的一段。整幅画是北宋的画家张择端画的，离现在差不多九百年了。"),
    nian("这就是整幅画吗？"),
    dad("不是，这只是一小段。整幅画只有二十五厘米左右高，却有五米多长，比两张大床接起来还长。它画在绢上，绢是一种很薄的丝织品。"),
    nian("那么长，怎么看呀？"),
    dad("古人把它卷起来收着。看的时候从右往左，一边展开一边卷，就像跟着画家沿着河走一趟。"),
    nian("中间这个弯弯的是什么？", { look: bridge }),
    dad("是一座桥，叫虹桥，因为它拱起来，像天上的彩虹。"),

    nian("桥下面那条大船怎么斜着？", { part: "大船要撞桥了", look: boat }),
    dad("你看出来了！这是整幅画里最紧张的时刻：大船顺着水往桥下冲，船上的桅杆还没完全放倒，眼看就要碰到桥了。"),
    nian("桅杆是什么？", { look: mast }),
    dad("就是船上竖着的那根长杆子，用来挂帆、拴绳子。它太高了，过桥之前得放倒，不然会卡住。"),
    nian("船上的人在干什么？", { look: crew }),
    dad("船头的人拿着长长的竹篙，有的抵住桥，有的撑着河底，想让船慢下来、对准桥洞。船顶上还有人在忙着收桅杆。"),
    nian("桥上的人呢？", { look: crowd }),
    dad("桥上的人都趴在栏杆边往下看，有的伸手比画，有的张嘴大喊，好像在说：“小心！往那边！”"),
    nian("他们是来帮忙的吗？"),
    dad("有人在帮着喊，也有人就是看热闹。画家把这一瞬间画了下来，就像按下了照相机的快门。"),
    nian("那船撞上了吗？", { look: "all" }),
    dad("画里没有告诉我们。这就是画的妙处：它只留下一个瞬间，后面的事，要你自己去想。"),

    nian("这座桥下面怎么没有柱子？", { part: "没有柱子的桥", look: bridge }),
    dad("这正是虹桥最神奇的地方。古书《东京梦华录》里说，这种桥没有柱子，全是用大木头架起来的，“宛如飞虹”。"),
    nian("没有柱子，它不会塌吗？"),
    dad("你看桥底下，一根根大木头互相搭着、压着，像编竹筐一样编成一个拱。", { look: beams }),
    dad("东西压在拱上，木头就挤得更紧，所以很结实。桥底下没有柱子挡着，大船也能从中间过去。"),
    nian("现在还有这样的桥吗？"),
    dad("有。福建、浙江的山里，还有用这种办法造的木拱桥。2009 年，中国木拱桥的造桥手艺被列进了联合国急需保护的非物质文化遗产名录。"),
    nian("九百年前的画，把造桥的办法也画下来了！"),
    dad("对。1953 年这幅画展出以后，一位研究桥的专家盯着画里的木头一根根看，琢磨它们是怎么搭的，后来大家才把这种桥认真研究起来。"),

    nian("桥上也好挤啊。", { part: "桥上的街", look: deck }),
    dad("桥两边摆满了小摊，卖吃的、卖杂货的，中间只剩一条窄窄的路，人、马、轿子都要从这儿过。"),
    nian("那里有个轿子！", { look: sedan }),
    dad("对。坐轿子的人从这边来，骑马的人从那边来，在桥上碰上了。", { look: [sedan, rider] }),
    nian("谁让谁呀？"),
    dad("画里没写。有人说他们正在争路，谁也不肯让。不过这只是一种看法，你也可以有自己的猜法。"),
    nian("桥下面那些大伞是干什么的？", { look: stalls }),
    dad("也是小摊，撑着大伞遮太阳。河边还有饭馆、酒店，门口用竹子搭起高高的门楼招揽客人。", { look: tavern }),
    nian("那边是车吗？", { look: carts }),
    dad("对，有牛拉的、驴拉的，运粮食、运货物。大家一般认为，画的是北宋都城东京城外的样子，就是今天的河南开封。"),
    dad("不过画家也可能把好多地方的热闹合在一起画，不一定是照着一条真街一笔一笔描的。", { look: "all" }),

    nian("画里一共有多少人？", { part: "画里的秘密" }),
    dad("很多人都数过，可数出来的都不一样：有的说五百多，有的说八百多。整幅画里还有几十头牲口、二十多条船。"),
    nian("为什么数不一样？"),
    dad("因为有的人只露出半个身子，有的藏在船舱里、屋子里，到底算不算，大家想法不一样。你也可以数一数这一段。"),
    nian("张择端是个什么样的人？"),
    dad("我们知道得很少。画后面有一段八百多年前的人写的话，说他是东武人，年轻时到京城读书，后来学画，最会画船、车、桥和街道。就这么几句。"),
    nian("那“清明”是什么意思？"),
    dad("大多数人认为是清明节前后，画的是城外的春天。也有人说“清明”是天下太平的意思，还有人说是城里一个叫清明坊的地方。到现在还在讨论。"),
    nian("有人说画里藏着秘密吗？"),
    dad("故宫有一位专家认为，画里那些惊险的地方，比如大船差点撞桥，是画家在悄悄提醒皇帝要小心。这是他的看法，别的专家不一定同意。"),

    nian("这幅画一直放在故宫吗？", { part: "跑出皇宫的画" }),
    dad("没有。九百年里，它好几次进了皇宫，又好几次被人带出去，换过很多主人。"),
    nian("最近一次是谁带出去的？"),
    dad("是清朝最后一个皇帝溥仪。1923 年前后，他把很多宝贝悄悄从紫禁城运了出去，其中就有这幅画。"),
    nian("后来找回来了吗？"),
    dad("1945 年以后，这些宝贝被收进了东北的库房。1950 年，一位叫杨仁恺的专家在沈阳整理文物，从三幅都叫《清明上河图》的画里，认出了这一幅是真的。"),
    nian("怎么认出来的？"),
    dad("看画法，看绢，看后面古人写的字和盖的印章，一样一样对。后来的人仿的《清明上河图》有好多，不少把虹桥画成了石头桥，这一幅画的是木头编的。"),
    dad("又过了几年，它来到了北京的故宫博物院。"),
    nian("我能去看吗？"),
    dad("它太老、太娇气了，很少拿出来。2015 年故宫展出它的时候，很多人一大早就在门口排队，一开门就往展厅跑，大家把这叫“故宫跑”。"),
    nian("跑着去看画！"),
    dad("是啊，就为了看一眼九百年前的一座桥、一条船，还有一群喊着“小心”的人。"),
  ],
  remember: "一幅画留住了一个瞬间：九百年前，一条大船正要穿过一座没有柱子的桥。",
  facts: [
    ["这张图", "《清明上河图》中间虹桥的一段"],
    ["作者", "北宋 张择端"],
    ["大小", "整卷高约 25 厘米、长约 5.3 米，画在绢上"],
    ["收藏", "北京故宫博物院"],
    ["画里的人", "有人数出五百多个，有人数出八百多个"],
  ],
  sources: [
    { title: "Wikimedia Commons：Along the River During the Qingming Festival (detail of original)", url: "https://commons.wikimedia.org/wiki/File:Along_the_River_During_the_Qingming_Festival_(detail_of_original).jpg" },
    { title: "故宫博物院：张择端清明上河图卷", url: "https://www.dpm.org.cn/collection/paint/228226.html" },
    { title: "故宫博物院 VR：清明上河图", url: "https://www.dpm.org.cn/vr/stone-moat/wyd_17.html" },
    { title: "Harvard EALC：The Qingming Scroll", url: "https://ealc.fas.harvard.edu/qingming-scroll" },
    { title: "Smarthistory：Zhang Zeduan, Along the River During the Qingming Festival", url: "https://smarthistory.org/zhang-zeduan-along-the-river-qingming-festival/" },
    { title: "每经网：专访故宫博物院研究馆员余辉（《隐忧与曲谏》的观点）", url: "https://www.nbd.com.cn/articles/2019-12-05/1391251.html" },
    { title: "澎湃新闻：清明上河图里的虹桥", url: "https://www.thepaper.cn/newsDetail_forward_2061698" },
    { title: "人民政协网：杨仁恺与清明上河图", url: "https://www.rmzxw.com.cn/c/2016-10-26/1103584.shtml" },
    { title: "中国新闻网：故宫石渠宝笈特展排队", url: "https://www.chinanews.com/cul/2015/09-21/7534594.shtml" },
  ],
};
