import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const blackboardPortrait: Frame = {
  src: "frames/einstein-portrait.jpg",
  alt: "黑白半身肖像照：四十二岁的爱因斯坦身穿整洁的三件套西装站在黑板前，头发浓密微卷，右手捏着一截白粉笔，左手轻扶木讲台，身后黑板上画着粉笔大圆弧、直角坐标线和字母 K",
  kind: "照片",
  by: "费迪南德·施穆策（Ferdinand Schmutzer）1921 年摄于维也纳，奥地利国家图书馆藏",
  license: "公有领域",
  commons: "File:Einstein 1921 by F Schmutzer - restoration.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
  dark: true,
};

const face1921 = spot(0.5, 0.23, 0.14, "42 岁的爱因斯坦");
const darkHair = spot(0.5, 0.12, 0.14, "浓密的黑发");
const chalkHand = spot(0.36, 0.56, 0.08, "捏着粉笔的右手");
const boardArc = spot(0.77, 0.27, 0.15, "粉笔大圆弧");
const letterK = spot(0.16, 0.46, 0.08, "参考系字母 K", 2.4);

const princetonPortrait: Frame = {
  title: "1947 年在普林斯顿拍摄的晚年爱因斯坦肖像",
  src: "frames/einstein-1947.jpg",
  alt: "黑白特写肖像：六十八岁的爱因斯坦顶着一头蓬松如蒲公英的白发，穿一件不系领带的粗花呢外套，满眼温和笑意与深深皱纹直视镜头",
  kind: "照片",
  by: "奥伦·杰克·特纳（Orren Jack Turner）1947 年摄于美国普林斯顿，美国国会图书馆藏",
  license: "公有领域",
  commons: "File:Albert Einstein Head.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Albert_Einstein_Head.jpg",
  dark: true,
};

const whiteHair = spot(0.5, 0.22, 0.3, "蓬松的白发");
const sweater = spot(0.5, 0.82, 0.22, "不打领带的旧外套");

export const einsteinPortrait: Story = {
  id: "einstein-portrait",
  title: "数学从来没不及格的追光少年",
  frameName: "阿尔伯特·爱因斯坦肖像",
  year: 1921,
  when: "1921 年 1 月，奥地利维也纳（获诺贝尔物理学奖同年）",
  field: "物理",
  people: ["阿尔伯特·爱因斯坦"],
  teaser: "五岁生病躺床上盯着小罗盘发呆，十六岁幻想骑在光束上赛跑，二十六岁在专利局下班后的小书桌上，一年写出了四篇改变宇宙的论文。",
  frame: blackboardPortrait,
  lines: [
    nian("爸爸，这张图上有什么？一个拿粉笔站在黑板前面的叔叔——咦，他的脸好眼熟，是头发还没全白的爱因斯坦吗？", { part: "这是什么图", look: face1921 }),
    dad("你一眼就认出来啦！大家平时见到的爱因斯坦大多是满头白发的老爷爷；这张照片拍在 1921 年，他才 42 岁，头发还黑黑的，在维也纳给将近三千名听众讲课。", { look: darkHair }),
    nian("他右手捏着半截粉笔，黑板上画的是什么呀？", { look: chalkHand }),
    dad("黑板右边画着一道大大的粉笔圆弧，左边画着直角坐标线和大写字母 K——那是他在相对论讲座里最爱用的记号，用来代表“站在不同地方看世界的参考系”。", { look: letterK }),

    nian("我听同学说，爱因斯坦小时候是个笨小孩，连数学考试都不及格，是真的吗？", { part: "倒过来的最高分", look: face1921 }),
    dad("那可是科学史上最冤枉人的大谣言！1935 年真有人拿印着这条传言的剪报去问爱因斯坦本人，他哈哈大笑说：“我数学从来没不及格过！十五岁以前我就自学完微积分了！”"),
    nian("那为什么会传出他得“1 分”不及格呢？"),
    dad("因为瑞士和德国的打分正好倒过来！德国学校 1 分是最高分、6 分是不及格；可爱因斯坦读的瑞士阿劳州立中学，6 分才是最高分！他的毕业成绩单今天还保存着：代数 6 分、几何 6 分、物理 6 分——全是满分！"),
    nian("哈哈，原来把满分看成倒数第一啦！他小时候最喜欢什么？"),
    dad("他小时候说话确实比别的孩子晚一点，但遇到好奇的事就追着想个没完。五岁生病躺床上，爸爸给他看了一个小罗盘：不管怎么转盒子，指针总被一股看不见的力量拉向北方，小爱因斯坦激动得手心发凉，觉得万物背后一定藏着大秘密。"),
    dad("到了十六岁，他又在脑子里做了一个白日梦：“要是我骑在一束光旁边，跑得跟光一样快，我会看见什么？光波会冻住不动吗？”这个问题在他脑子里整整转了十年！"),

    nian("大学毕业以后，他就当上大教授了吗？", { part: "专利局里的奇迹年", look: boardArc }),
    dad("没有，毕业后没有大学肯留他，多亏老同学爸爸帮忙，他去瑞士伯尔尼专利局当了一名“三级技术员”，每天上班审核别人的发明图纸，下班回家在小书桌上一边推婴儿车、一边算物理。"),
    dad("就在 1905 年，26 岁的专利局小职员在一年之内连发了四篇震动世界的论文，科学史把这一年叫作“爱因斯坦奇迹年”！"),
    nian("一年四篇！都讲了什么呀？"),
    dad("第一篇说光是一份份像小颗粒一样的“光量子”，能把金属里的电子撞出来——今天太阳能发电板和手机摄像头全靠它！猜猜看：1921 年他得诺贝尔奖，是靠相对论还是靠这一篇？"),
    nian("肯定是相对论吧？"),
    dad("偏偏不是！当时评委觉得相对论还太超前，诺贝尔奖是专门颁给这篇“光电效应”的！第二篇他通过花粉在水里不停乱晃，算出了看不见的水分子有多大，彻底证明了原子真的存在。"),
    dad("第三篇就是解开他十六岁追光之谜的“狭义相对论”：光速永远不变，飞得极快的飞船上时间会变慢——今天天上的北斗和 GPS 导航卫星，每天都必须按爱因斯坦的相对论校准几十微秒时间，不然你手机上的地图定位一天就要偏出十千米！第四篇则写下了大名鼎鼎的 E=mc²，揭开了太阳发光几十亿年的能量来源。"),

    nian("那他后来怎么变成爆炸白头发的老爷爷啦？", { part: "不穿袜子的老爷爷", show: princetonPortrait, look: whiteHair }),
    dad("1933 年纳粹在德国上台，爱因斯坦再也没回德国，搬去美国普林斯顿大学生活，还拼命写信担保、救出了许多受迫害的科学家。年纪大了，他就懒得打领带、懒得理发了。", { look: sweater }),
    nian("听说他连袜子都不爱穿？"),
    dad("真的！他在信里一本正经地开玩笑说：“年轻时我发现大脚趾总会在袜子上顶出个洞，干脆就不穿袜子了！”他最爱拉小提琴，给心爱的琴取名叫“莉娜”；遇到不认识他的小女孩拿数学作业来敲门求助，他还会请人家吃饼干、耐心地讲题。"),
    dad("去世前一个星期，他在和平宣言上签下名字，留给全世界最后一句话：“记住你们的人性，忘掉其余的一切。”", { show: blackboardPortrait, look: "all" }),
  ],
  remember: "爱因斯坦数学从来都是满分：二十六岁在专利局的一年里，他一口气解开了光电效应、分子运动、狭义相对论和质能方程四大谜题。",
  facts: [
    ["这张图", "1921 年施穆策摄于维也纳的黑板讲课肖像，及 1947 年特纳摄普林斯顿晚年肖像"],
    ["生卒年份", "1879 年 3 月 14 日（德国乌尔姆）— 1955 年 4 月 18 日（美国普林斯顿）"],
    ["1905 奇迹年", "26 岁任伯尔尼专利局技术员时连发四篇划时代论文（光电效应、布朗运动、狭义相对论、质能方程）"],
    ["诺贝尔奖", "1921 年诺贝尔物理学奖（授奖理由为发现光电效应定律，而非相对论）"],
    ["辟谣真相", "瑞士阿劳中学 6 分为最高分，爱因斯坦代数、几何、物理均获满分 6 分"],
  ],
  sources: [
    { title: "诺贝尔奖官网：Albert Einstein – Facts（1921 授奖理由）", url: "https://www.nobelprize.org/prizes/physics/1921/einstein/facts/" },
    { title: "诺贝尔奖官网：Albert Einstein 传记", url: "https://www.nobelprize.org/prizes/physics/1921/einstein/biographical/" },
    { title: "美国物理学会（APS）：伯尔尼爱因斯坦故居与 1905 奇迹年", url: "https://www.aps.org/funding-recognition/historic-sites/einsteinhaus" },
    { title: "普林斯顿大学出版社：《爱因斯坦全集》第 2 卷（瑞士时期）", url: "https://einsteinpapers.press.princeton.edu/vol2-trans/" },
    { title: "TIME 周刊：辟谣“爱因斯坦数学不及格”与 1935 年本人回应", url: "https://content.time.com/time/specials/packages/article/0,28804,1936731_1936743_1936758,00.html" },
    { title: "美国国会图书馆：Orren Jack Turner 1947 年爱因斯坦肖像", url: "https://www.loc.gov/item/2004671908/" },
    { title: "帕格沃什会议：1955 年《罗素—爱因斯坦宣言》全文", url: "https://pugwash.org/1955/07/09/statement-manifesto/" },
  ],
};
