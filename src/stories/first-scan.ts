import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const face = spot(0.4, 0.5, 0.28, "小宝宝");
const eyes = spot(0.405, 0.435, 0.18, "眼睛");
const stairs = spot(0.69, 0.22, 0.09, "台阶一样的边", 3);
const grey = spot(0.6, 0.4, 0.05, "灰色", 4);
const ear = spot(0.79, 0.47, 0.06, "耳朵");
const background = spot(0.83, 0.25, 0.08, "黑色背景");
const clothes = spot(0.45, 0.88, 0.2, "衣服");

export const firstScan: Story = {
  id: "first-scan",
  title: "电脑第一次“看”照片",
  frameName: "小沃尔登：第一张扫描进计算机的照片",
  year: 1957,
  when: "1957 年，美国国家标准局（今天的美国国家标准与技术研究院）",
  field: "技术",
  people: ["拉塞尔·基尔希", "沃尔登·基尔希"],
  teaser: "一个三个月大的小宝宝，被拆成了三万多个小方格——这是电脑第一次“看”一张照片。",
  frame: {
    src: "frames/first-scan.jpg",
    alt: "一张黑白的小宝宝头像，全是一格一格的小方块：黑色的背景，白白的小脸，两只黑眼睛，脸边上是一级一级像台阶一样的锯齿",
    kind: "照片",
    by: "Russell A. Kirsch，美国国家标准与技术研究院（NIST）",
    license: "公有领域（美国政府作品）",
    commons: "File:NBSFirstScanImage.jpg",
    page: "https://commons.wikimedia.org/wiki/File:NBSFirstScanImage.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图上有什么？一个小宝宝，可是一格一格的。", { part: "这是什么图", look: face }),
    dad("这个小宝宝叫沃尔登，那年才三个月大。1957 年，他的爸爸基尔希把他的照片带到单位，扫描进了一台计算机。"),
    nian("扫描？就像我们用打印机扫作业那样？"),
    dad("对，就是那个意思。不过那时候，这还是头一回：一张照片被扫进了一台能存程序的计算机里。"),
    nian("他的眼睛黑黑的。", { look: eyes }),
    dad("两只眼睛、小鼻子、小嘴巴，都还认得出来。这张图后来被评为“改变世界的一百张照片”之一。"),

    nian("为什么一格一格的？", { part: "三万个小方格", look: stairs }),
    dad("计算机看不懂一整张照片，只好把它切成一个一个小方格，每个方格记住一个颜色。你看脸边上，一级一级像台阶。"),
    nian("一共有多少个方格？"),
    dad("横着 176 个，竖着 176 个，一共三万零九百七十六个。"),
    nian("才三万个？好像很多。"),
    dad("在当时很多了。那台计算机的记忆力很小，再大就装不下了。现在你手机拍的一张照片，有几百万个小方格。"),
    nian("这张照片有多大？"),
    dad("只有大约五厘米见方，比你的手掌还小。"),

    nian("这一块怎么是灰的？", { part: "黑、白，还有灰", look: grey }),
    dad("扫描机每扫一遍，只能分出黑和白两种。基尔希他们扫了两遍，再叠在一起，就多出了一种灰色。"),
    nian("像两张透明纸叠起来！"),
    dad("对。所以这张图有黑、白、灰三种颜色，比只有黑白两种看起来柔和一点。"),
    nian("这边亮亮的是什么？", { look: ear }),
    dad("是小宝宝的耳朵，在阴影里还亮了一小块。后面黑黑的是背景。", { look: background }),
    nian("下面呢？", { look: clothes }),
    dad("是他的小衣服和肩膀。"),

    nian("那台计算机长什么样？", { part: "一台会记程序的计算机" }),
    dad("它叫 SEAC。1950 年开始工作，是美国第一台真正用起来的“存储程序”电子计算机，一直工作了十四年。"),
    nian("存储程序是什么？"),
    dad("就是把要做的事一步一步写好，先存在计算机的记忆里，它自己照着做。就像你把菜谱背下来，不用别人一句一句地教。"),
    nian("那扫描机是怎么扫的？"),
    dad("把照片贴在一个会转的圆筒上，一边转，一边用光一点一点地照，把每个小格子是亮是暗告诉计算机。"),

    nian("这是世界上第一张数字图片吗？", { part: "不是最早，却很要紧" }),
    dad("说“第一张”不太准确。早在 1920 年代，就有人把新闻照片变成一串密码，通过海底电缆从伦敦发到纽约，那时还没有计算机。"),
    nian("那小沃尔登这张特别在哪？"),
    dad("它是照片第一次走进了能存程序的计算机。从那以后，计算机不光能算数，还能处理图片了。"),
    nian("有人说基尔希发明了“像素”。"),
    dad("那是报纸的标题。“像素”这个词，是好几年以后才流行起来的。不过，用小方格记图的办法，他确实用得很早。"),

    nian("基尔希后来呢？", { part: "说了一句“对不起”", look: stairs }),
    dad("2010 年，他已经 81 岁了，说用方格是一件“很傻的事”，害得大家一直在忍受锯齿。"),
    nian("那他想怎么办？"),
    dad("他写了个新程序，不只用方格，还用三角形之类的形状去拼，像拼马赛克那样，让边更顺滑。他还拿一张沃尔登长大以后的照片做了试验。"),
    nian("小沃尔登长大了做什么？", { look: face }),
    dad("当过电视台记者，后来在一家电脑芯片公司工作。基尔希 2020 年去世，活到 91 岁。这张小照片，现在收在美国波特兰艺术博物馆里。"),
    nian("我的照片也是一格一格的吗？"),
    dad("是呀，放到最大，就能看到一个个小方格。只是现在的方格又小又多，眼睛分不出来，看上去就是平平滑滑的一张。"),
  ],
  remember: "1957 年，一个小宝宝的照片被切成三万多个小方格，第一次走进了能存程序的计算机，今天每张数码照片都是这么来的。",
  facts: [
    ["这张图", "小沃尔登·基尔希，第一张扫描进存储程序计算机的照片"],
    ["时间", "1957 年"],
    ["做的人", "拉塞尔·基尔希和同事，美国国家标准局"],
    ["大小", "176 × 176 个小方格，约 5 厘米见方"],
    ["计算机", "SEAC，1950 年开始工作"],
  ],
  sources: [
    { title: "Wikimedia Commons：NBSFirstScanImage.jpg", url: "https://commons.wikimedia.org/wiki/File:NBSFirstScanImage.jpg" },
    { title: "NIST（2007）：Fiftieth Anniversary of First Digital Image Marked", url: "https://www.nist.gov/news-events/news/2007/05/fiftieth-anniversary-first-digital-image-marked" },
    { title: "NIST：First Digital Image", url: "https://www.nist.gov/mathematics-statistics/first-digital-image" },
    { title: "NIST：Standards Eastern Automatic Computer (SEAC)", url: "https://www.nist.gov/mathematics-statistics/standards-eastern-automatic-computer" },
    { title: "NIST：NBS Builds a Computer", url: "https://www.nist.gov/history/nbsnist-culture-excellence/nbs-builds-computer" },
    { title: "Wired（2010）：Inventor of the Pixel Proposes Smoothing Square Pixels", url: "https://www.wired.com/2010/06/smoothing-square-pixels/" },
    { title: "Kirsch 2010：Precision and Accuracy in Scientific Imaging（J. Res. NIST 115）", url: "https://www.nist.gov/publications/precision-and-accuracy-scientific-imaging" },
    { title: "OregonLive（2020）：Russell Kirsch, inventor of the pixel, dies at 91", url: "https://www.oregonlive.com/silicon-forest/2020/08/russell-kirsch-inventor-of-the-pixel-dies-in-oregon-at-age-91.html" },
    { title: "TechCrunch（2020）：Digital imaging pioneer Russell Kirsch dies at 91", url: "https://techcrunch.com/2020/08/13/digital-imaging-pioneer-russell-kirsch-dies-at-91/" },
    { title: "Wikipedia：Bartlane cable picture transmission system", url: "https://en.wikipedia.org/wiki/Bartlane_system" },
  ],
};
