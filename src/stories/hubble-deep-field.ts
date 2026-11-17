import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const stars = [spot(0.134, 0.477, 0.025, "星星"), spot(0.191, 0.794, 0.025, "星星"), spot(0.721, 0.757, 0.022, "星星")];
const bigStar = spot(0.134, 0.477, 0.025, "带十字的星星", 4);
const elliptical = spot(0.305, 0.263, 0.035, "椭圆星系", 3.5);
const disk = spot(0.309, 0.452, 0.03, "盘子一样的星系", 3.5);
const edgeOn = spot(0.165, 0.77, 0.04, "侧着的星系", 3.5);
const spiral = spot(0.771, 0.962, 0.022, "旋涡星系", 4);
const pair = spot(0.059, 0.771, 0.035, "挨在一起的两个", 3.5);
const odd = spot(0.843, 0.929, 0.02, "歪歪扭扭的", 4);
const redDot = spot(0.082, 0.522, 0.012, "红色小点", 6);
const blackStep = [spot(0.75, 0.135, 0.13, "黑色台阶"), spot(0.865, 0.38, 0.07)];
const smallWindow = spot(0.615, 0.38, 0.12, "小窗口");

export const hubbleDeepField: Story = {
  id: "hubble-deep-field",
  title: "盯着“空”天看十天",
  frameName: "哈勃深空场",
  year: 1995,
  when: "1995 年 12 月 18 日至 28 日拍摄，1996 年 1 月公布",
  field: "天文",
  people: ["罗伯特·威廉斯", "哈勃深空场团队"],
  teaser: "大家都说那块天什么也没有，哈勃盯着它看了十天，看见了几千个星系。",
  frame: {
    src: "frames/hubble-deep-field.jpg",
    alt: "黑色的太空里散落着几千个大大小小的光点和光斑，有白色、黄色、橙色、蓝色，有的是旋涡形、有的是椭圆形，右上角缺了一块，是台阶形状的黑色",
    kind: "照片",
    by: "Robert Williams 与哈勃深空场团队（NASA、ESA、STScI）",
    license: "公有领域",
    commons: "File:HubbleDeepField.800px.jpg",
    page: "https://commons.wikimedia.org/wiki/File:HubbleDeepField.800px.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这么多亮点，都是星星吗？", { part: "这是什么图" }),
    dad("你猜错啦，这里面几乎没有星星。这张照片叫“哈勃深空场”，是哈勃太空望远镜 1995 年拍的。"),
    nian("那这些亮点是什么？"),
    dad("几乎每一个都是一个星系。一个星系里有几十亿、几百亿颗太阳那样的恒星。"),
    nian("一个小点里就有几十亿个太阳？！"),
    dad("对。它们离我们太远了，远到整个星系看起来只有一个小点那么大。"),
    nian("那星星在哪儿？", { look: stars }),
    dad("整张照片里只有很少几颗。你看这几个，亮点上带着一个小十字，它们才是我们银河系里的星星。", { look: bigStar }),
    nian("为什么星星会带十字？"),
    dad("星星离我们近，光又集中成一个点，望远镜里撑镜子的架子会把光拉出四道细线。远处的星系是一团团的，就不太看得出来。"),

    nian("哈勃为什么要拍这么一张？", { part: "盯着一块“空”的天", look: "all" }),
    dad("当时管哈勃的天文学家罗伯特·威廉斯，手里有一点可以自己决定怎么用的观测时间。他想做一件很大胆的事。"),
    nian("什么事？"),
    dad("在北斗七星的“勺子柄”旁边，找一块看起来什么都没有的天，让哈勃一直盯着它看，看看到底有多深。"),
    nian("什么都没有，看什么呀？"),
    dad("很多同行也是这么想的，说这是个糟糕的主意，白白浪费宝贵的望远镜时间。"),
    nian("那他还拍吗？"),
    dad("他说：“如果真有那么糟，我就辞职。”后来，当年反对他的一位天文学家说：“鲍勃是对的，我错了。”"),

    nian("拍了多久？", { part: "十天，342 张" }),
    dad("1995 年 12 月 18 日到 28 日，整整十天。哈勃一共拍了 342 张，每张曝光十几分钟到四十分钟。"),
    nian("为什么要拍那么多张？"),
    dad("那么远的星系，光非常非常弱。就像在黑屋子里接雨点，一张照片只接到一点点光，叠起来才够亮。"),
    nian("这些颜色是真的吗？"),
    dad("哈勃是隔着不同颜色的滤镜一张张拍的，有蓝光、红光，还有人眼看不见的近红外光。科学家再给它们配上颜色，叠成这一张。"),
    nian("那块天有多大？"),
    dad("非常非常小。想象一枚一角硬币放在二十多米外，它挡住的那一点点天，就差不多是这张照片的大小。"),
    nian("那么小一块，就有这么多星系？"),
    dad("当时数出来有一千五百多个，后来大家说大约三千个。总之，是好几千个。"),

    nian("星系都长一个样吗？", { part: "星系动物园", look: "all" }),
    dad("一点也不一样，像个动物园。这个圆圆胖胖、很光滑的，叫椭圆星系。", { look: elliptical }),
    dad("这个像个发亮的盘子，上面还有一块块亮斑。", { look: disk }),
    nian("这个长长的、黄黄的呢？", { look: edgeOn }),
    dad("那可能是一个侧着身子的星系，就像从侧面看一张光盘，只看到一条线。"),
    nian("有像银河系一样带旋臂的吗？"),
    dad("有，你看最下面这个小小的，有弯弯的旋臂，像个风车。", { look: spiral }),
    dad("还有挨得很近的两个，可能正在互相拉扯。", { look: pair }),
    dad("还有歪歪扭扭、一串一串的。很多年轻的星系还没长成整齐的样子。", { look: odd }),

    nian("这个红红的小点呢？", { part: "时间机器", look: redDot }),
    dad("这样又小又暗的红点，有的离我们特别远。不过红色也可能是因为星系老了，或者被灰尘挡着，不一定都最远。"),
    nian("特别远是多远？"),
    dad("远到光要走几十亿年才能到我们这儿。威廉斯说，有些星系，我们看到的是它们一百多亿年前的样子。"),
    nian("我们看到的是它们以前的样子？"),
    dad("对。光从那里出发的时候，地球可能还不存在呢。所以看深空，就像坐了一趟时间机器，往回看。"),

    nian("右上角怎么缺了一块？", { part: "台阶一样的黑角", look: blackStep }),
    dad("那是哈勃相机的样子。它的相机有四只“眼睛”，三只看得宽，一只看得细，但只能看小小一块。", { look: smallWindow }),
    dad("四张拼在一起的时候，看得细的那张变小了，旁边空出来的地方没有拍到东西，就成了黑黑的台阶。", { look: blackStep }),
    nian("原来不是天上缺了一块！"),

    nian("后来哈勃还这样拍过吗？", { part: "越看越深", look: "all" }),
    dad("拍过。1998 年拍了南边天空的一块，2004 年又拍了“超深空场”，找到了大约一万个星系。"),
    nian("现在还有更厉害的吗？"),
    dad("2022 年，韦布太空望远镜也拍了一张深空场，只拍了十几个小时，就看到了成千上万个星系。"),
    nian("那宇宙里一共有多少个星系？"),
    dad("科学家还在数。有人估计几千亿个，也有人估计可能有两万亿个，到现在还没有定论。"),
    nian("都是从那块“什么都没有”的天开始的！"),
  ],
  remember: "一块看起来什么都没有的天，盯着看了十天，里面藏着几千个星系：天空比我们想象的深得多。",
  facts: [
    ["这张图", "哈勃深空场（HDF）"],
    ["拍摄", "1995 年 12 月 18 日至 28 日，342 张照片叠成"],
    ["位置", "大熊座，北斗七星勺子柄附近"],
    ["大小", "约等于一枚硬币放在二十多米外挡住的天"],
    ["里面有", "好几千个星系，只有很少几颗银河系里的星星"],
  ],
  sources: [
    { title: "Wikimedia Commons：HubbleDeepField.800px", url: "https://commons.wikimedia.org/wiki/File:HubbleDeepField.800px.jpg" },
    { title: "HubbleSite 1996 新闻稿：Hubble's Deepest View Ever of the Universe", url: "https://hubblesite.org/contents/news-releases/1996/news-1996-01" },
    { title: "NASA：Hubble Deep Fields", url: "https://science.nasa.gov/mission/hubble/science/universe-uncovered/hubble-deep-fields/" },
    { title: "ESA/Hubble：Hubble Deep Field (opo9601a)", url: "https://esahubble.org/images/opo9601a/" },
    { title: "Williams et al. 1996：The Hubble Deep Field: Observations, Data Reduction, and Galaxy Photometry", url: "https://arxiv.org/abs/astro-ph/9607174" },
    { title: "National Geographic：When Hubble stared at nothing for 100 hours", url: "https://www.nationalgeographic.com/science/article/when-hubble-stared-at-nothing-for-100-hours" },
    { title: "ESA/Hubble：Hubble Ultra Deep Field (heic0406)", url: "https://esahubble.org/news/heic0406/" },
    { title: "NASA：Webb delivers deepest infrared image of universe yet", url: "https://science.nasa.gov/missions/webb/nasas-webb-delivers-deepest-infrared-image-of-universe-yet/" },
    { title: "ESA/Hubble：Hubble reveals observable Universe contains 10 times more galaxies (heic1620)", url: "https://esahubble.org/news/heic1620/" },
    { title: "STScI：WFPC2 Instrument Handbook", url: "https://www.stsci.edu/files/live/sites/www/files/home/hst/instrumentation/legacy/wfpc2/_documents/wfpc2_ihb.pdf" },
  ],
};
