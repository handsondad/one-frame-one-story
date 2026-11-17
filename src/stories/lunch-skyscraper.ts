import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const beam = spot(0.46, 0.45, 0.47, "铁梁");
const park = spot(0.86, 0.2, 0.12, "中央公园");
const lunchBox = spot(0.069, 0.412, 0.035, "饭盒");
const paper = spot(0.27, 0.439, 0.03, "报纸");
const light = spot(0.1, 0.345, 0.06, "点烟");
const bottle = spot(0.855, 0.485, 0.025, "瓶子", 2.4);
const feet = [spot(0.18, 0.55, 0.12), spot(0.49, 0.567, 0.1), spot(0.72, 0.59, 0.09)];
const below = [spot(0.1, 0.94, 0.08, "下面的钢梁"), spot(0.357, 0.971, 0.05)];
const sign = spot(0.454, 0.278, 0.025, "招牌", 4);
const known = [spot(0.202, 0.326, 0.03, "埃克纳"), spot(0.678, 0.356, 0.03, "柯蒂斯")];

export const lunchSkyscraper: Story = {
  id: "lunch-skyscraper",
  title: "八百英尺高的午饭",
  frameName: "摩天楼顶上的午餐",
  year: 1932,
  when: "1932 年 9 月 20 日，美国纽约，正在盖的 RCA 大楼第 69 层",
  field: "社会",
  people: ["约瑟夫·埃克纳", "乔·柯蒂斯", "十一位钢铁工人"],
  teaser: "十一个工人坐在半空中的一根铁梁上吃午饭，脚底下就是纽约——可这张照片里藏着一个秘密。",
  frame: {
    src: "frames/lunch-skyscraper.jpg",
    alt: "黑白照片：十一个穿工作服的男人并排坐在一根悬空的钢梁上吃午饭，有人点烟、有人看报纸，脚悬在空中，下面远远的是纽约的楼房和中央公园",
    kind: "照片",
    by: "摄影师不详（曾被认为是 Charles C. Ebbets），Acme Newspictures 发行",
    license: "公有领域（1932 年在美国发表，没有续展版权）",
    commons: "File:Lunch atop a Skyscraper - Charles Clyde Ebbets.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg",
    note: "这张照片的底片今天归 Bettmann 图片档案，盖蒂图片社在卖使用权；Commons 按美国法律认定它没有续展版权，已经是公有领域。",
  },
  lines: [
    nian("爸爸，这张图上有什么？一排叔叔坐在一根铁梁上吃饭，脚底下什么都没有！", { part: "这是什么图" }),
    dad("这张照片叫《摩天楼顶上的午餐》。1932 年 9 月 20 日，在美国纽约一座正在盖的大楼上拍的。"),
    nian("他们坐在多高的地方？"),
    dad("第 69 层，离地面两百五十米左右。我们家的楼一层大约三米，那就差不多是八十多层楼那么高。"),
    nian("下面那一大片是什么？", { look: park }),
    dad("那是纽约的中央公园。公园很大，从这么高看下去，只剩一小块。"),
    nian("一共有几个叔叔？", { look: beam }),
    dad("十一个。他们是钢铁工人，每天就在这样的铁梁上走来走去，把一根根钢梁连在一起，搭出大楼的骨架。"),

    nian("最左边的叔叔腿上放着什么？", { part: "半空中的午饭", look: lunchBox }),
    dad("一个饭盒。工人们自己带午饭，到了中午，就在干活的地方坐下来吃。"),
    nian("这个叔叔在看报纸！", { look: paper }),
    dad("一边吃饭一边看报纸，跟坐在地上的饭馆里没什么两样。"),
    nian("左边两个叔叔凑在一起干什么？", { look: light }),
    dad("一个划着火柴，帮另一个点烟。那时候抽烟的人很多，现在大家都知道抽烟对身体不好了。"),
    nian("最右边那个拿着一个瓶子。", { look: bottle }),
    dad("是啊，他手里有个瓶子，里面装的是什么，照片上看不出来。"),
    nian("他们的脚就这么吊着！", { look: feet }),
    dad("没有安全绳，也没戴安全帽，那时候的高空工人就是这样干活的。今天在高处干活，一定要系好安全带。"),

    nian("他们不害怕吗？", { part: "照片的秘密" }),
    dad("告诉你一个秘密：这张照片是摆拍的。大楼的主人想做宣传，让大家知道这座楼盖得多了不起，就请了摄影师上去拍照。"),
    nian("那他们是假装吃饭？"),
    dad("人是真的钢铁工人，那天也真的在楼上；可谁坐哪儿、怎么坐，是摄影师安排的。同一天还拍了他们扔橄榄球、躺在铁梁上装睡的照片。"),
    nian("下面真的什么都没有吗？", { look: below }),
    dad("你看照片最下面，还露出一些钢梁，那是下面几层的骨架。研究这张照片的人说，很可能不远处就有一层楼板，只是镜头没拍进去。"),
    nian("照片会骗人！"),
    dad("镜头只挑了最吓人的那一面。不过它不是拼出来的，玻璃底片上就是一次拍下来的样子。"),
    nian("后面那块牌子上有字。", { look: sign }),
    dad("那是一家酒店楼顶的大招牌，写着酒店的名字，也是 1932 年刚装上去的，正对着公园。我们是从背后看它，所以字看起来是反的。"),

    nian("这些叔叔叫什么名字？", { part: "他们是谁", look: known }),
    dad("大部分人到今天都不知道。只有两个人被认出来了：左边第三个叫约瑟夫·埃克纳，右边第三个叫乔·柯蒂斯。"),
    nian("怎么认出来的？"),
    dad("大楼的档案管理员，把这张照片和同一天拍的、写着名字的别的照片一张张对比，就像在相册里认脸。"),
    nian("其他人呢？", { look: "all" }),
    dad("很多家庭都说照片里有自己的爷爷。2003 年一家报纸征集，十一个人收到了三十九个名字，可大多拿不出证据。"),
    dad("那时候盖纽约高楼的工人，有的从爱尔兰、意大利、东欧坐船来，还有从加拿大来的莫霍克原住民，他们在高高的钢梁上走得特别稳。"),
    nian("那拍照的人是谁？"),
    dad("也不知道。有一阵子大家说是一位叫埃贝茨的摄影师，后来发现那天楼上有好几位摄影师，所以现在写的是“作者不详”。"),

    nian("1932 年，大家过得怎么样？", { part: "难熬的年头" }),
    dad("那几年美国正赶上“大萧条”，很多工厂关了门，差不多四个大人里就有一个找不到工作。"),
    nian("那他们有活干，算运气好的？"),
    dad("可以这么说。这座楼当时叫 RCA 大楼，今天叫洛克菲勒广场 30 号。拍照六天后，钢铁骨架就搭到了顶，第二年大楼建成了。"),
    nian("现在还能上去吗？"),
    dad("能。2023 年，69 层开了一个项目叫“横梁”：游客坐在一根钢梁上，系好安全带，被慢慢升起来，学照片里的样子。"),
    nian("我要系好安全带再坐！"),
  ],
  remember: "《摩天楼顶上的午餐》是一张摆拍的宣传照，可照片里的人是真正的钢铁工人——大萧条的年头，是他们一根钢梁一根钢梁地把纽约搭起来。",
  facts: [
    ["这张图", "《摩天楼顶上的午餐》，摄影师不详"],
    ["时间", "1932 年 9 月 20 日"],
    ["地点", "纽约 RCA 大楼（今洛克菲勒广场 30 号）第 69 层，离地约 250 米"],
    ["照片里的人", "11 位钢铁工人，能确认名字的只有埃克纳和柯蒂斯"],
    ["秘密", "宣传用的摆拍，但不是合成照片"],
  ],
  sources: [
    { title: "Wikimedia Commons：Lunch atop a Skyscraper", url: "https://commons.wikimedia.org/wiki/File:Lunch_atop_a_Skyscraper_-_Charles_Clyde_Ebbets.jpg" },
    { title: "The New York Times Lens（2012）：Revisiting a Lunch at Perilous Heights", url: "https://archive.nytimes.com/lens.blogs.nytimes.com/2012/09/20/revisiting-a-lunch-at-perilous-heights/" },
    { title: "The New York Times（2012）：'Lunch Atop a Skyscraper,' Uncovered", url: "https://web.archive.org/web/20220201220518/https://www.nytimes.com/2012/11/11/movies/lunch-atop-a-skyscraper-uncovered.html" },
    { title: "Rockefeller Center：The Story Behind Lunch Atop a Skyscraper", url: "https://www.rockefellercenter.com/magazine/arts-culture/lunch-atop-skyscraper-irish-immigrants/" },
    { title: "HISTORY：Lunch Atop a Skyscraper Photo", url: "https://www.history.com/articles/lunch-atop-a-skyscraper-photo-1932" },
    { title: "Smithsonian Magazine：Lunch Atop a Skyscraper Photograph", url: "https://www.smithsonianmag.com/history/lunch-atop-a-skyscraper-photograph-the-story-behind-the-famous-shot-43931148/" },
    { title: "Reuters Photographers' Blog（2012）：Protecting an iconic image", url: "https://web.archive.org/web/20120922124704/http://blogs.reuters.com/photographers-blog/2012/09/20/protecting-an-iconic-image/" },
    { title: "New York Post（2003）：Up in the air — mystery deepens in old pic", url: "https://nypost.com/2003/10/26/up-in-the-air-mystery-deepens-in-old-pic/" },
    { title: "Smithsonian NMAI：Booming Out — Mohawk Ironworkers Build New York", url: "https://americanindian.si.edu/explore/exhibitions/item?id=619" },
    { title: "U.S. Bureau of Labor Statistics：Unemployment 1929–1939", url: "https://data.bls.gov/timeseries/LFU21000100&series_id=LFU22000100&from_year=1929&to_year=1939&periods_option=specific_periods&periods=Annual+Data" },
    { title: "Wikipedia：30 Rockefeller Plaza", url: "https://en.wikipedia.org/wiki/30_Rockefeller_Plaza" },
    { title: "CBS New York（2023）：The Beam at Rockefeller Center", url: "https://www.cbsnews.com/newyork/news/the-beam-rockefeller-center-new-york-city-construction-workers-lunch-photo/" },
  ],
};
