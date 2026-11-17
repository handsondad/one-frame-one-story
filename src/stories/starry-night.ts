import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const swirl = spot(0.49, 0.32, 0.12, "大漩涡");
const moon = spot(0.89, 0.18, 0.09, "月亮");
const venus = spot(0.355, 0.53, 0.04, "晨星", 3);
const cypress = spot(0.21, 0.52, 0.15, "柏树");
const steeple = spot(0.565, 0.7, 0.04, "教堂尖顶", 3);
const village = spot(0.68, 0.85, 0.14, "村子");
const stars = [
  [0.105, 0.045], [0.23, 0.03], [0.345, 0.035], [0.41, 0.065], [0.235, 0.17], [0.61, 0.085],
  [0.705, 0.23], [0.325, 0.325], [0.045, 0.45], [0.13, 0.475], [0.355, 0.53],
].map(([x, y]) => spot(x, y, 0.03));

export const starryNight: Story = {
  id: "starry-night",
  title: "白天画出来的星空",
  frameName: "星月夜",
  year: 1889,
  when: "1889 年 6 月，法国圣雷米",
  field: "艺术",
  people: ["文森特·梵高", "提奥·梵高", "乔·梵高-邦格"],
  teaser: "一扇朝东的窗，一颗很大的晨星，画成了一片会转的天空。",
  frame: {
    src: "frames/starry-night.jpg",
    alt: "油画：深蓝的夜空里卷着一团团漩涡，右上角是发光的弯月，十几颗星星像光圈；左边一棵黑色的柏树像火苗一样往上蹿，下面是有尖顶教堂的小村子",
    kind: "画",
    by: "文森特·梵高，纽约现代艺术博物馆藏",
    license: "公有领域",
    commons: "File:Van Gogh - Starry Night - Google Art Project.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
  },
  lines: [
    nian("爸爸，这幅画的天空在转圈圈！", { part: "这是什么图" }),
    dad("是啊。这是荷兰画家梵高画的《星月夜》，1889 年 6 月画的，现在挂在美国纽约的现代艺术博物馆里。"),
    nian("天上这个大漩涡是什么？", { look: swirl }),
    dad("是梵高画的夜空。真正的天空不会这样转，可他想把看星星时的感觉画出来：风在吹，星星在闪，好像整片天都在动。"),
    nian("右上角是月亮吧？", { look: moon }),
    dad("对，一弯亮亮的月亮，周围还套着一圈光。有人算过，那些天真正的月亮其实快圆了，梵高按自己喜欢的样子画成了弯弯的。"),
    nian("星星有几颗？", { look: stars }),
    dad("你数数看。加上最亮的那一颗，一共十一颗，每一颗都画成了一团一团的光圈。"),

    nian("柏树旁边这颗最大最亮的，是什么星？", { part: "最亮的那颗", look: venus }),
    dad("它其实不是星星，是金星，一颗行星。天快亮的时候它特别亮，人们叫它“晨星”。"),
    nian("梵高看见它了？"),
    dad("看见了。他在给弟弟提奥的信里写：今天早上，天还没亮，我从窗口看了很久外面的田野，天上只有一颗晨星，看起来很大。"),
    nian("他为什么那么早起来看？"),
    dad("他房间的窗户朝东，每天早上都能看到太阳升起来。那年春末夏初，金星正好是最亮的时候。"),

    nian("他是在外面对着夜空画的吗？", { part: "窗户后面的画家", look: "all" }),
    dad("不是。这幅夜晚的画，是白天在屋里画的。"),
    nian("白天画夜晚？"),
    dad("那时候梵高住在法国南部一个叫圣雷米的小镇，在一家疗养院里。卧室里不让画画，疗养院就给了他楼下一间小屋子当画室。"),
    nian("他为什么住在疗养院？"),
    dad("他生病了。不是感冒那种病，是会让人心里特别难受、特别害怕的病。那年五月，他自己决定住进去，好好休养。"),
    nian("他是自己去的？"),
    dad("对，这很勇敢。生病了去找人帮忙，一点也不丢人。在那里，医生让他接着画画，他一年里画了大约一百五十幅画。"),
    nian("那他是怎么画出窗外的？"),
    dad("他记住了从窗口看到的样子，又照着自己画的草图，再加上想象，在画室里一笔一笔画出来。"),

    nian("下面有一个小村子。", { part: "搬进画里的村子", look: village }),
    dad("有意思的是，从他的窗口其实看不到这个村子。是他照着在别处画的草图，把村子搬进了画里。"),
    nian("这个尖尖的是什么？", { look: steeple }),
    dad("是教堂的尖顶。有人觉得它不太像法国南部的教堂，倒像他小时候在荷兰家乡见过的那种。这是大家的猜测。"),
    nian("左边这个黑黑高高的呢？", { look: cypress }),
    dad("是一棵柏树。真正的柏树离窗户没那么近，梵高把它画得又高又大，像一团往上蹿的黑色火苗，一直伸进天空。"),
    nian("他为什么要改呀？", { look: "all" }),
    dad("因为他不是在拍照片。他想画的，是他心里的那片夜空。"),

    nian("画上的颜色怎么一道一道的？", { part: "厚厚的颜料", look: swirl }),
    dad("梵高画画时，颜料涂得很厚，一笔一笔像短短的线条，排在一起。凑近看，还能看到颜料鼓起来，像一条条小沟。"),
    nian("有人说这些漩涡跟真的风一样？"),
    dad("有几位科学家研究过，说画里漩涡的大小排列，跟空气、水流打转的规律很像。也有别的科学家不同意，现在还在争论。"),
    nian("画一幅画，科学家也来研究！"),

    nian("梵高一定很喜欢这幅画吧？", { part: "让大家看到星空的人", look: "all" }),
    dad("好像没有。那年冬天，他在给一位画家朋友的信里说，自己又去够那些太大的星星，“又一次失败了”。"),
    nian("他说自己失败了？！"),
    dad("是啊，了不起的画家也会怀疑自己。可是今天，每年有好多好多人专门去纽约，就为了站在这幅画前看一看。"),
    nian("他活着的时候，画卖得好吗？"),
    dad("卖得很少。有人说他一辈子只卖出过一幅画，其实不止一幅，但确实不多。一直是弟弟提奥给他寄钱、寄颜料，支持他画下去。"),
    nian("后来呢？"),
    dad("梵高第二年夏天就去世了，只有 37 岁。没过多久，提奥也病逝了。"),
    nian("那这些画怎么办？"),
    dad("提奥的妻子乔把它们好好收了起来。她办展览，把画介绍给博物馆，还把兄弟俩的信整理出版。慢慢地，全世界都认识了梵高。"),
    nian("原来是好多人一起，才让我们看到这片星空。"),
    dad("是啊。1941 年，这幅画到了纽约的现代艺术博物馆，一直挂到今天。"),
  ],
  remember: "这片夜空是白天画出来的：梵高把窗口看到的晨星和心里的感觉，一起画成了会转的天空。",
  facts: [
    ["这张图", "《星月夜》，布面油画"],
    ["画家", "文森特·梵高（1853—1890）"],
    ["时间、地点", "1889 年 6 月，法国圣雷米的疗养院"],
    ["大小", "73.7 × 92.1 厘米"],
    ["收藏", "纽约现代艺术博物馆，1941 年起"],
  ],
  sources: [
    { title: "Wikimedia Commons：Van Gogh - Starry Night - Google Art Project", url: "https://commons.wikimedia.org/wiki/File:Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg" },
    { title: "MoMA：Vincent van Gogh, The Starry Night", url: "https://www.moma.org/collection/works/79802/" },
    { title: "Britannica：The Starry Night", url: "https://www.britannica.com/topic/The-Starry-Night" },
    { title: "梵高博物馆：住院治疗（1889—1890）", url: "https://www.vangoghmuseum.nl/zh/van-goghs-life-chinese/hospitalization-1889-1890" },
    { title: "Van Gogh Museum：De vrouw die Vincent beroemd maakte", url: "https://www.vangoghmuseum.nl/nl/kunst-en-verhalen/verhalen/de-vrouw-die-vincent-beroemd-maakte" },
    { title: "Van Gogh Museum：Hoeveel schilderijen heeft Van Gogh tijdens zijn leven verkocht?", url: "https://www.vangoghmuseum.nl/nl/kunst-en-verhalen/veelgestelde-vragen-over-van-gogh/hoeveel-schilderijen-heeft-van-gogh-tijdens-zijn-leven-verkocht" },
    { title: "WebExhibits：Van Gogh letter to Émile Bernard (B21)", url: "https://www.webexhibits.org/vangogh/letter/20/B21.htm" },
    { title: "arXiv：Hidden turbulence in van Gogh's The Starry Night (2024)", url: "https://arxiv.org/abs/2310.03415" },
  ],
};
