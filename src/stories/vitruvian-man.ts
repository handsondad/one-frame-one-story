import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const wholeFigure = spot(0.5, 0.42, 0.44, "圆与正方形");
const tPose = [spot(0.18, 0.31, 0.065, "平伸的手"), spot(0.82, 0.31, 0.065), spot(0.495, 0.7, 0.07, "并拢的脚")];
const xPose = [spot(0.2, 0.23, 0.065, "斜举的手"), spot(0.8, 0.23, 0.065), spot(0.3, 0.676, 0.065), spot(0.685, 0.678, 0.065)];
const navel = spot(0.5, 0.415, 0.04, "肚脐（圆心）", 2.6);
const twoCenters = [spot(0.5, 0.415, 0.04, "圆心：肚脐"), spot(0.5, 0.47, 0.045, "方框中心：身体正中")];
const ruler = spot(0.24, 0.757, 0.1, "纸上的刻度尺");
const face = spot(0.5, 0.25, 0.06, "脸部比例");
const topMirror = spot(0.5, 0.08, 0.105, "反着写的笔记");
const bottomMirror = spot(0.5, 0.87, 0.12, "下面的笔记");

export const vitruvianMan: Story = {
  id: "vitruvian-man",
  title: "长了四只手四条腿的人",
  frameName: "维特鲁威人",
  year: 1490,
  circa: true,
  when: "约 1490 年，意大利米兰",
  field: "艺术",
  people: ["列奥纳多·达·芬奇", "维特鲁威"],
  teaser: "五百多年前的一张钢笔手稿：一个人同时站在圆圈和正方形里，纸上还留着圆规扎出的细小针孔。",
  frame: {
    src: "frames/vitruvian-man.jpg",
    alt: "泛黄纸页上的棕墨水手稿：一名卷发男子重叠着平伸双臂并拢双腿、斜举双臂分开双腿两种姿势，恰好撑满一个正方形和一个大圆，上下写满工整的手写意大利文",
    kind: "手稿",
    by: "列奥纳多·达·芬奇绘，威尼斯学院美术馆藏（Luc Viatour 摄）",
    license: "公有领域",
    commons: "File:Da Vinci Vitruve Luc Viatour.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg",
  },
  lines: [
    nian("爸爸，这张图上有什么？一个叔叔怎么长了四只手、四条腿，还在做广播体操！", { part: "这是什么图", look: wholeFigure }),
    dad("哈哈，这不是四只手，是画《蒙娜丽莎》的那位达·芬奇，在五百多年前画的一张“连拍图”！他把同一个人的两个动作叠在了一起。"),
    nian("哪两个动作？"),
    dad("第一个动作：两脚并拢站直，两只胳膊平平张开。你看他的左手指尖、右手指尖、头顶和脚底，刚好贴住哪一个图形？", { look: tPose }),
    nian("贴住那个大正方形！"),
    dad("对！因为一个人双臂平伸展开的宽度，差不多就等于他自己的身高，横竖一样长，正好是一个正方形。小念下回靠墙站着量一量，你也是这样！"),
    nian("那第二个动作呢？", { look: xPose }),
    dad("两腿分开，两手斜着往上举，直到指尖跟头顶一样高——这时候四只手脚的末端，刚好稳稳踩在外面那个大圆圈上。"),

    nian("这幅画为什么叫《维特鲁威人》？是他画的人叫维特鲁威吗？", { part: "两个不同的中心", look: face }),
    dad("不是画里的人，而是两千多年前古罗马的一位建筑师，名叫维特鲁威。他在书里写：盖神庙要像匀称的人体一样讲比例，既能装进圆，又能装进正方形。"),
    nian("那达·芬奇只是照着古书画插图吗？"),
    dad("古书里只有字没有图，好多画家试着画都失败了：他们把圆心和正方形的中心画在同一个点上，结果不是手伸不出圆圈，就是脚悬在半空。"),
    nian("达·芬奇是怎么解开的？", { look: navel }),
    dad("你看他的肚脐！这张纸上留着十几个细小的针孔，是达·芬奇用圆规和量具扎出来的。他画大圆时，把圆规脚扎在肚脐上——大圆的圆心在肚脐。"),
    dad("可是正方形的中心不在肚脐，而是在更低一点的胯部，也就是全身高度的正中间。两个中心悄悄错开一点，圆和方就都严丝合缝了！", { look: twoCenters }),

    nian("正方形下面那条横线上，为什么有好多小竖杠？", { part: "身上的尺子", look: ruler }),
    dad("那是一把用身体做的尺子！古时候没有统一的米尺，达·芬奇在上面画了刻度：四根手指并拢算一掌，四掌算一脚，六掌算一腕尺，一个人高正好是二十四掌。"),
    nian("脸也有比例吗？", { look: face }),
    dad("有，他在笔记里写：从下巴到头顶占身高的八分之一，从发际线到下巴占十分之一。他没有全照维特鲁威的古书，还参考了另一位学者阿尔贝蒂量人体的方法，把头部这些不准的地方改了过来。"),
    nian("我听说这张图里到处藏着“黄金分割”的神奇数字，是真的吗？", { look: wholeFigure }),
    dad("那是后来一些人的猜测。学者仔细读了达·芬奇整页笔记，他一个字都没提黄金分割，用的全是四分之一、六分之一、八分之一这样简单的分数；量原稿的圆和方，也跟黄金分割差了一截。"),

    nian("上面和下面那些密密麻麻的字，我一个字母都认不出来！", { part: "镜子里的字", look: topMirror }),
    dad("因为它是从右往左反着写的“镜像字”，拿一面镜子照着看，就变成正常的意大利文了。下面这一大段也是。", { look: bottomMirror }),
    nian("哇，他是怕别人偷看，故意写的秘密暗号吗？"),
    dad("好多人喜欢这么猜，可这种字拿镜子一照谁都能读，算不上暗号。学者觉得更可能的原因很朴素：达·芬奇是个左撇子，从右往左写对他更顺手。"),
    dad("那时候用鹅毛笔蘸墨水干得慢，左手从左往右写，手掌会一路把湿墨水蹭花；反过来从右往左写，手就干干净净啦！"),
    nian("现在去意大利能看到这张画吗？", { look: "all" }),
    dad("它锁在威尼斯学院美术馆避光的房间里，平时不展出，只在少数特别的展览里露面一小段时间，因为光线晒久了墨水会变淡。"),
    dad("不过意大利的一欧元硬币上就印着他，连太空站的宇航员任务徽章也借用过他的样子。"),
  ],
  remember: "达·芬奇在《维特鲁威人》里把大圆的圆心定在肚脐、正方形的中心定在身体正中，用两个错开的中心解开了古罗马建筑师留下的千古人体比例谜题。",
  facts: [
    ["这张图", "《维特鲁威人》，钢笔棕墨水纸本手稿，约 34.4 × 25.5 厘米"],
    ["创作时间", "约 1490 年，列奥纳多·达·芬奇作于米兰"],
    ["关键巧思", "圆心在肚脐，正方形中心在胯部（全身正中），两心错开"],
    ["手写文字", "左撇子从右往左写的意大利文镜像字，记录分数比例"],
    ["今天在哪", "意大利威尼斯学院美术馆（避光珍藏，极少公开展出）"],
  ],
  sources: [
    { title: "威尼斯学院美术馆藏品页：Uomo Vitruviano", url: "https://www.gallerieaccademia.it/opera/studio-di-proporzioni-del-corpo-noto-come-uomo-vitruviano/" },
    { title: "Britannica：Vitruvian Man", url: "https://www.britannica.com/topic/Vitruvian-Man" },
    { title: "Stanford University：Leonardo's Vitruvian Man", url: "https://leonardodavinci.stanford.edu/projects/vitruvian/welcome.html" },
    { title: "Murtinho 2015：Leonardo's Vitruvian Man Drawing（Nexus Network Journal）", url: "https://doi.org/10.1007/s00004-015-0247-7" },
    { title: "Victoria and Albert Museum：Leonardo da Vinci's Notebooks（镜像字考释）", url: "https://www.vam.ac.uk/articles/leonardo-da-vincis-notebooks/" },
    { title: "欧洲央行：意大利 1 欧元硬币图案", url: "https://www.ecb.europa.eu/euro/coins/1euro/html/index.en.html" },
    { title: "光明网·文摘报：完美的人体（纸上 12 个针孔）", url: "https://epaper.gmw.cn/wzb/html/2019-06/29/nw.D110000wzb_20190629_2-06.htm" },
    { title: "Wikipedia：Vitruvian Man", url: "https://en.wikipedia.org/wiki/Vitruvian_Man" },
    { title: "Wikimedia Commons：Da Vinci Vitruve Luc Viatour.jpg", url: "https://commons.wikimedia.org/wiki/File:Da_Vinci_Vitruve_Luc_Viatour.jpg" },
  ],
};
