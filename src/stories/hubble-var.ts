import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const plate = spot(0.786, 0.677, 0.21, "哈勃的底片");
const varMark = spot(0.885, 0.449, 0.05, "VAR!", 3.2);
const novae = [spot(0.917, 0.573, 0.035, "N"), spot(0.833, 0.651, 0.035, "N"), spot(0.885, 0.449, 0.035, "N")];
const galaxy = spot(0.396, 0.48, 0.3, "仙女座星系");
const v1 = spot(0.672, 0.286, 0.04, "V1", 3.2);

export const hubbleVar: Story = {
  id: "hubble-var",
  title: "划掉一个字母，宇宙变大了",
  frameName: "哈勃的“VAR!”底片",
  year: 1923,
  when: "1923 年 10 月 5 日夜里拍摄",
  field: "天文",
  people: ["埃德温·哈勃", "亨丽埃塔·莱维特", "哈罗·沙普利"],
  teaser: "一张底片上，“N”被划掉，改成了“VAR!”——仙女座原来是另一个星系。",
  frame: {
    src: "frames/hubble-var.jpg",
    alt: "拼图：左边是彩色的仙女座星系，右上是密密麻麻的星星，右下是一张黑白玻璃底片，上面手写着 VAR! 和 6-Oct 1923",
    kind: "照片",
    by: "NASA、ESA、Z. Levay（STScI）；仙女座照片 R. Gendler；底片 卡内基天文台",
    license: "CC BY 4.0",
    commons: "File:Snapshots of the star that changed the Universe (opo1115d).jpg",
    page: "https://commons.wikimedia.org/wiki/File:Snapshots_of_the_star_that_changed_the_Universe_(opo1115d).jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图拼了好几张。右下角黑黑白白的是什么？", { part: "这是什么图", look: plate }),
    dad("那是这个故事的主角：1923 年，天文学家哈勃在美国威尔逊山天文台，用当时世界上最大的望远镜拍的一张玻璃底片。"),
    nian("上面还写着字！"),
    dad("你看这儿，一个“N”被划掉了，旁边写着“VAR!”，还带个感叹号。这是哈勃自己写的。", { look: varMark }),
    nian("他写错字了吗？"),
    dad("一开始他以为那是一颗“新星”，就写了 N。后来发现不是，就改成了 VAR。这一改，人们心里的宇宙一下子变大了。"),

    nian("他拍的是什么？", { part: "天上的一团云" }),
    dad("仙女座里一团模模糊糊的光，那时候叫“仙女座星云”。左边这张彩色的，是今天的人拍的它，像一个斜放着的大盘子。", { look: galaxy }),
    nian("它离我们远吗？"),
    dad("当时谁也不知道，天文学家还为这个吵了好多年。有人说它就在我们的银河系里，是一小团云；有人说它在银河系外面，自己就是另一个“银河系”。"),
    nian("那谁说对了？"),
    dad("要知道谁对，就得量出它有多远。可天上的东西，尺子够不着啊。"),

    nian("那怎么量？", { part: "一把量宇宙的尺子", look: "all" }),
    dad("这要先讲一位女天文学家，叫亨丽埃塔·莱维特。她在哈佛天文台工作，每天的活儿就是在玻璃底片上找星星、量亮度。"),
    nian("找星星也是工作？"),
    dad("那时候是。有一群女士专门干这个，工钱很少。莱维特耳朵听不太清，可她特别仔细，一共找到两千多颗会变亮变暗的星。"),
    nian("星星会变亮变暗？"),
    dad("有一种叫“造父变星”的星，一会儿亮、一会儿暗，很有规律，像在呼吸。1912 年，莱维特发现：本身越亮的造父变星，亮暗变一次花的时间越长。"),
    nian("那有什么用？"),
    dad("用处可大了！量出它多少天变一次，就知道它本来有多亮；再看它在天上显得多暗，就能算出它有多远。"),
    dad("就像晚上看见远处一盏路灯：你知道它本来有多亮，看它暗成什么样，就能猜出它离你多远。"),

    nian("哈勃找到这种星了吗？", { part: "划掉 N", look: plate }),
    dad("1923 年 10 月 5 日夜里，他拍了这张底片，发现三个以前没注意到的亮点，以为都是新星，就都标上了 N。", { look: novae }),
    nian("后来呢？"),
    dad("他把天文台以前拍的旧底片一张张拿来比，发现其中一颗在旧底片上忽明忽暗——它不是新星，是一颗造父变星！"),
    nian("所以他划掉 N，写上 VAR！", { look: varMark }),
    dad("对，VAR 是“变星”的意思。那个感叹号，大概就是他当时的心情。"),
    nian("它多少天变一次？"),
    dad("31.4 天。哈勃用莱维特的办法一算：这颗星离我们差不多 100 万光年。"),
    nian("那很远吗？"),
    dad("那时候有人算过，整个银河系也就宽三十万光年左右。100 万光年，早就跑出银河系了！所以仙女座不是一团小云，它自己就是一个巨大的星系。", { look: galaxy }),

    nian("那个说它在银河系里的人呢？", { part: "宇宙变大了", look: "all" }),
    dad("其中一位叫沙普利。他收到哈勃的信，对身边的学生说：“这封信毁了我的宇宙。”"),
    nian("他好可怜。"),
    dad("科学就是这样，证据说了算。从那以后，人们知道天上很多模糊的光斑，都是和银河系一样的星系，宇宙比大家想的大得多。"),
    nian("现在知道仙女座有多远了吗？"),
    dad("现在量得更准了，大约 250 万光年。哈勃当时算近了，是因为造父变星其实分好几种，那时候还不知道。"),

    nian("右上角那张是什么？", { part: "九十年后", look: v1 }),
    dad("2011 年，以哈勃名字命名的哈勃太空望远镜，又去拍了这颗星。小圆圈里的就是它，它的名字叫 V1。"),
    nian("用哈勃望远镜看哈勃的星！"),
    dad("对。莱维特 1921 年就因病去世了，没能看到她的办法量出了宇宙。哈勃常说，她应该得诺贝尔奖。", { look: "all" }),
    nian("那我记住她了：莱维特。"),
  ],
  remember: "莱维特给了一把量星星的尺子，哈勃用它量出仙女座在银河系外面——一个“VAR!”让宇宙变大了。",
  facts: [
    ["这张图", "哈勃 1923 年的仙女座底片，和 2011 年哈勃太空望远镜的新照片拼在一起"],
    ["拍摄", "1923 年 10 月 5 日夜里，威尔逊山天文台 100 英寸望远镜"],
    ["那颗星", "造父变星 V1，31.4 天变一次"],
    ["距离", "哈勃算出约 100 万光年；现在测得约 250 万光年"],
    ["尺子", "莱维特 1912 年发现的周光关系"],
  ],
  sources: [
    { title: "Wikimedia Commons：Snapshots of the star that changed the Universe", url: "https://commons.wikimedia.org/wiki/File:Snapshots_of_the_star_that_changed_the_Universe_(opo1115d).jpg" },
    { title: "NASA Science：Hubble Views the Star that Changed the Universe", url: "https://science.nasa.gov/missions/hubble/hubble-views-the-star-that-changed-the-universe/" },
    { title: "National Air and Space Museum：Who is the Man That Discovered the Universe?", url: "https://airandspace.si.edu/air-and-space-quarterly/issue-15/edwin-hubble-astronomy" },
    { title: "Leavitt (1912)：Periods of 25 Variable Stars in the Small Magellanic Cloud", url: "https://ui.adsabs.harvard.edu/abs/1912HarCi.173....1L/abstract" },
    { title: "Harvard Wolbach Library：Henrietta Swan Leavitt, Life and Beginnings", url: "https://library.cfa.harvard.edu/henrietta-swan-leavitt/life-and-beginnings" },
  ],
};
