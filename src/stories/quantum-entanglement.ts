import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const p0 = spot(0.21, 0.2, 0.14, "0°");
const p45 = spot(0.76, 0.19, 0.14, "45°");
const p90 = spot(0.22, 0.81, 0.14, "90°");
const p135 = spot(0.78, 0.8, 0.14, "135°");
const gap = spot(0.21, 0.2, 0.05, "中间的缝", 4);

export const quantumEntanglement: Story = {
  id: "quantum-entanglement",
  title: "双胞胎光子的合影",
  frameName: "量子纠缠的第一张图像",
  year: 2019,
  when: "2019 年 7 月 12 日发表，英国格拉斯哥大学",
  field: "物理",
  people: ["保罗-安托万·莫罗", "迈尔斯·帕吉特", "阿尔伯特·爱因斯坦"],
  teaser: "四个模糊的光环，中间的缝一个比一个歪——每一个都是用一对对“双胞胎光子”，攒了十一个小时攒出来的。",
  frame: {
    src: "frames/quantum-entanglement.jpg",
    alt: "黑色背景上四个模糊的灰白色光环，排在四个角上；每个光环都被一道黑缝分成两个月牙，四道缝朝着不同的方向",
    kind: "照片",
    by: "P.-A. Moreau 等，格拉斯哥大学；Science Advances 5, eaaw2563（2019）图 3A",
    license: "CC BY 4.0",
    page: "https://eprints.gla.ac.uk/186036/",
    note: "这张图出自论文的图 3A：四种滤镜角度的结果，拼在同一张图的四个角上。论文按 CC BY 4.0 许可发表。",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图上有什么？四个模模糊糊的圆圈，每个都被切成了两半。", { part: "这是什么图", look: [p0, p45, p90, p135] }),
    dad("这是 2019 年，英国格拉斯哥大学的科学家拍到的一张图。新闻里叫它“第一张量子纠缠的照片”。"),
    nian("量子纠缠是什么？"),
    dad("先说说光。光是由一颗一颗非常小的“光子”组成的。科学家有办法让光子一对一对地生出来，像双胞胎一样。"),
    nian("双胞胎光子！"),
    dad("用一束激光照一块特别的晶体，偶尔就会有一颗光子变成两颗。这样生出来的一对，就是“纠缠”在一起的。"),

    nian("纠缠在一起，是绑在一起吗？", { part: "说不清的双胞胎" }),
    dad("不是绑着。诺贝尔奖的介绍里打过一个比方：有两个球，在你看之前，都是说不清的灰色。"),
    dad("你一看，一个随机变成黑的，另一个就是白的。不管离得多远，它们俩总是对得上。"),
    nian("那会不会是早就决定好了，一个黑一个白？就像手套，一只左一只右。"),
    dad("问得好！爱因斯坦也这么猜。后来科学家想出了一种检验办法，叫“贝尔检验”：要是早就决定好了，配合得再好也有个上限。"),
    nian("那结果呢？"),
    dad("双胞胎光子配合得比那个上限还要好。所以它们不像手套那样，早早写好了“左”和“右”。"),

    nian("这张图是怎么拍的？", { part: "一个看圆，一个拍照", look: "all" }),
    dad("每对双胞胎分开走。一颗光子去照一个看不见的圆圈图案，然后撞进一个探测器，“咔”地响一下。"),
    dad("另一颗光子根本没碰过那个圆圈，它走另一条路，穿过一个滤镜，再绕二十米的远路，才到相机。"),
    nian("为什么要绕远路？"),
    dad("让它等一等。只有那边的探测器“咔”一声，说“我的双胞胎到了”，相机才睁开眼睛，而且只睁十亿分之四秒。"),
    nian("那相机拍到了什么？"),
    dad("奇妙的是，相机拍到的光子，明明没碰过那个圆圈，拍出来却是一个圆环。这个圆，是它的双胞胎“看”到的。"),

    nian("中间那道黑缝是什么？", { part: "拧一拧滤镜", look: gap }),
    dad("那是滤镜留下的。这一张，滤镜摆成 0 度，缝是横着的，圆环分成上下两个月牙。"),
    nian("另外三个呢？", { look: p45 }),
    dad("滤镜拧到 45 度，缝就斜过来了。", { look: p90 }),
    dad("拧到 90 度，缝变成竖的，月牙一左一右。", { look: p135 }),
    dad("拧到 135 度，又斜向另一边。滤镜转多少，缝就跟着转多少。"),
    nian("这说明什么？", { look: [p0, p45, p90, p135] }),
    dad("科学家把四张图上的亮暗一算，正好就是一次贝尔检验，结果超过了“早就决定好”的上限。"),

    nian("拍一张要多久？", { part: "攒了十一个小时" }),
    dad("每个光环都拍了四万次，每次一秒，加起来大约十一个小时。每个亮点，都是一颗光子落下的地方。"),
    nian("一颗一颗攒起来的！"),
    dad("对，就像下雪，一片雪花看不出什么，攒了一整夜，地上才白了一片。"),

    nian("我听说，一颗光子变了，另一颗马上跟着变，不管隔多远，那不就能瞬间传话了？", { part: "不能瞬间传话" }),
    dad("很多新闻是这么说的，可这里要说清楚：这样没法传话，任何消息都快不过光。"),
    nian("为什么？"),
    dad("你单看一边，看到的只是乱七八糟的随机结果。要靠一根普通的电线，把两边的记录对一对，那个圆环才会出现。"),
    nian("那这张图证明了什么？"),
    dad("它把量子纠缠第一次变成了一张能看的图。科学家自己也说，这个实验还有些漏洞，它更像一次漂亮的演示。"),

    nian("爱因斯坦为什么不信？", { part: "鬼魅般的作用" }),
    dad("1947 年，他在给朋友玻恩的信里说，这种事像“鬼魅般的超距作用”。"),
    nian("鬼魅！"),
    dad("可后来的实验一次次证明，量子纠缠是真的。2022 年，三位做这种实验的科学家得了诺贝尔物理学奖。"),
    nian("双胞胎光子能分开多远？"),
    dad("2017 年，中国的“墨子号”卫星把一对对双胞胎光子，送到了相隔 1203 公里的两个地方，它们照样通过了贝尔检验。"),
    nian("我也想要一对双胞胎光子！"),
  ],
  remember: "一对纠缠的光子，一个看见了圆，另一个虽然没碰过圆，配起对来也拍出了圆；可这样没法瞬间传话。",
  facts: [
    ["这张图", "论文图 3A：四种滤镜角度下的“幽灵成像”"],
    ["做的人", "莫罗、帕吉特等，格拉斯哥大学"],
    ["发表", "2019 年 7 月 12 日《科学进展》"],
    ["拍一个光环", "4 万帧、每帧 1 秒，约 11 小时"],
    ["贝尔检验", "S ≈ 2.44，超过上限 2"],
  ],
  sources: [
    { title: "Moreau et al. 2019：Imaging Bell-type nonlocal behavior（Science Advances 5, eaaw2563）", url: "https://europepmc.org/articles/PMC6625815" },
    { title: "University of Glasgow Enlighten：论文全文 PDF（CC BY 4.0）", url: "https://eprints.gla.ac.uk/186036/" },
    { title: "University of Glasgow（2019）：Scientists unveil the first-ever image of quantum entanglement", url: "https://www.gla.ac.uk/news/archiveofnews/2019/july/headline_655958_en.html" },
    { title: "BBC News（2019）：Glasgow scientists capture first image of quantum entanglement", url: "https://www.bbc.co.uk/news/uk-scotland-glasgow-west-48971538" },
    { title: "Gizmodo：This Is an Image of Quantum Entanglement, Sort Of", url: "https://gizmodo.com/this-is-an-image-of-quantum-entanglement-sort-of-1836506100" },
    { title: "Nobel Prize：Physics 2022 popular information", url: "https://www.nobelprize.org/prizes/physics/2022/popular-information/" },
    { title: "Wiktionary：spukhafte Fernwirkung（爱因斯坦 1947 年致玻恩的信）", url: "https://en.wiktionary.org/wiki/spukhafte_Fernwirkung" },
    { title: "Yin et al. 2017：Satellite-based entanglement distribution over 1200 kilometers（Science）", url: "https://www.science.org/doi/10.1126/science.aan3211" },
    { title: "Wikipedia：No-communication theorem", url: "https://en.wikipedia.org/wiki/No-communication_theorem" },
  ],
};
