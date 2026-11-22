import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const sadie = spot(0.55, 0.56, 0.14, "小女工萨迪");
const face = spot(0.56, 0.415, 0.045, "萨迪的脸", 2.8);
const hand = spot(0.52, 0.575, 0.045, "伸向纱锭的手", 2.8);
const bobbins = spot(0.31, 0.48, 0.085, "飞转的纱锭");
const upperSpools = spot(0.22, 0.2, 0.085, "头顶的粗纱筒");
const corridor = spot(0.65, 0.46, 0.09, "望不到头的机器");
const windows = spot(0.755, 0.34, 0.085, "紧闭的窗户");
const boots = spot(0.55, 0.82, 0.055, "旧皮靴");

export const cottonMillGirl: Story = {
  id: "cotton-mill-girl",
  title: "跟二年级小朋友一样高的小工人",
  frameName: "纺织厂里的小纺纱工",
  year: 1908,
  when: "1908 年 11 月 30 日，美国南卡罗来纳州兰开斯特棉纺厂",
  field: "社会",
  people: ["萨迪·普法伊弗", "路易斯·海因"],
  teaser: "一排望不到头的纺纱机旁边，站着一个身高只有一米二出头的小姑娘——拍下她的老师，用西装马甲上的纽扣偷偷量出了她的身高。",
  frame: {
    src: "frames/cotton-mill-girl.jpg",
    alt: "黑白老照片：高大狭长的棉纺厂车间里，一名扎头发、穿围裙的小女孩站在左侧一长排纺纱机旁，左手伸向飞转的纱锭；右侧是一排挂着布帘的窗户和长长的木地板过道",
    kind: "照片",
    by: "路易斯·海因（Lewis Wickes Hine）摄，美国国会图书馆藏",
    license: "公有领域（美国国会图书馆国家童工委员会档案）",
    commons: "File:Sadie Pfeifer, 48 inches high, has worked half a year. One of the many small children at work in Lancaster Cotton Mills. Nov. 30, 1908. LOC cph.3a13674.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Sadie_Pfeifer,_48_inches_high,_has_worked_half_a_year._One_of_the_many_small_children_at_work_in_Lancaster_Cotton_Mills._Nov._30,_1908._LOC_cph.3a13674.jpg",
  },
  lines: [
    nian("爸爸，这张图上有什么？好长好大的机器旁边，怎么站着一个这么小的小姐姐！", { part: "这是什么图", look: sadie }),
    dad("她叫萨迪，1908 年冬天拍下这张照片的时候，她已经在棉纺厂里干了半年活了。摄影师在照片背面记下：她只有 48 英寸高——差不多一米二二，跟今天小学一二年级的小朋友一样高。"),
    nian("她比机器矮好多呀！", { look: upperSpools }),
    dad("你看机器顶上那一排白色的粗纱筒，比她的头顶高出一大截，她垫起脚尖都够不着。"),
    nian("她的手在机器里干什么？", { look: hand }),
    dad("她在“接线头”。下面这一排排白色的纱锭转得飞快，棉线一旦绷断，就要立刻伸进机器里把断头捻起来接好。", { look: bobbins }),
    nian("工厂为什么不请大人，要请这么小的孩子？"),
    dad("一来孩子的工资低得多；二来工厂老板觉得小孩的手指细小灵活，钻进纱锭缝里接线头快。那时候全美国有差不多两百万个孩子在矿井、农场和工厂里干活，没法去上学。"),

    nian("车间里看起来好长好闷呀。", { part: "紧闭的窗户", look: corridor }),
    dad("这一排纺纱机一眼望不到头，远处还站着另一位年轻女工。小工人们每天要站十到十二个小时，耳朵边全是震耳的轰隆声。"),
    nian("右边明明有大窗户，为什么都关得严严实实的，还挂着帘子？", { look: windows }),
    dad("因为干爽的风一吹，细细的棉纱就容易断。工厂为了少断线，一年四季把窗户关紧，屋里又热又潮，空气里到处飘着雪花一样的白棉絮。"),
    nian("她脚上穿的鞋也旧旧的。", { look: boots }),
    dad("在洒了机油和棉絮的木地板上走来走去，好多南方纺织厂的孩子甚至光着脚干活，萨迪算有一双旧皮靴穿的。"),

    nian("工厂老板愿意让摄影师拍这些照片吗？", { part: "马甲纽扣当尺子", look: face }),
    dad("很多老板当然不愿意，常常把调查的人赶出去！拍这张照片的路易斯·海因，本来是纽约一所学校的老师，1908 年辞掉教书工作，专门背着二十多公斤重的相机去调查童工。"),
    nian("老板不让进，他怎么拍到的？"),
    dad("他穿得整整齐齐，有时候扮成推销明信片和保险的人，有时候说是来查消防通道的，或者假装专门给工厂拍“漂亮的现代化大机器”——等老板不注意，就把机器前的小孩一起拍下来！"),
    nian("那他怎么知道萨迪正好 48 英寸高？拿尺子量会被发现吧！"),
    dad("他想出了一个绝招：事先量好自己西装马甲上每一颗纽扣离地面的高度！跟孩子说话时悄悄往旁边一站，瞄一眼孩子的头顶对齐第几颗扣子，再把手伸进大衣口袋里，摸黑在小纸片上记下名字和身高。"),
    nian("真像侦探一样！"),
    dad("海因相信：只要大家亲眼看见孩子们是怎么干活的，就会要求立法保护他们。他拍下的五千多张清清楚楚的照片登上报纸、摆进展览，谁也没法再假装看不见了。"),

    nian("照片登出来以后，萨迪就能去上学了吗？", { part: "三十年的接力", look: "all" }),
    dad("改变比大家想的慢得多。美国国会在 1916 年第一次通过限制童工的法律，可惜两年后被最高法院判成无效。直到这张照片拍下整整三十年后的 1938 年，全国性的法律才真正定下来，让孩子们离开工厂回到学校。"),
    nian("那萨迪后来怎么样了？"),
    dad("后来有历史研究者查人口普查档案，推算拍照时她大概只有八九岁，二年级以后就没再上过学，长大后一辈子都在纺织厂里做工。她自己没能赶上新法律，但她的照片帮到了千千万万后来的孩子。"),
    nian("路易斯·海因这个名字，我好像在别的照片故事里听过！"),
    dad("你记性真好！开始拍童工二十多年后，他又爬上纽约帝国大厦的高空钢梁给建筑工人拍照，拍得太有名了，结果好多人把洛克菲勒中心那张《摩天楼顶上的午餐》也误当成他拍的呢。"),
  ],
  remember: "路易斯·海因用马甲纽扣当尺子、在口袋里摸黑记笔记，拍下了身高只有一米二二的小纺纱工萨迪和五千多张童工照片，推动法律把孩子从工厂送回了学校。",
  facts: [
    ["这张图", "《兰开斯特棉纺厂里的小纺纱工萨迪·普法伊弗》，路易斯·海因摄"],
    ["拍摄时间", "1908 年 11 月 30 日，美国南卡罗来纳州兰开斯特"],
    ["照片记录", "萨迪身高 48 英寸（约 122 厘米），已在棉纺厂工作半年"],
    ["调查总数", "美国国会图书馆收藏的国家童工委员会档案里，有 5100 多张 1908—1924 年的照片，大多出自海因之手"],
    ["法律改变", "历经波折，美国于 1938 年通过《公平劳动标准法》禁止工厂雇佣童工"],
  ],
  sources: [
    { title: "美国国会图书馆藏品页：Sadie Pfeifer, Lancaster Cotton Mills（Hine #362）", url: "https://www.loc.gov/pictures/item/2018674894/" },
    { title: "美国国会图书馆：National Child Labor Committee Collection 综述", url: "https://loc.gov/collections/national-child-labor-committee/about-this-collection" },
    { title: "美国国家档案馆（NARA）：Lewis Hine 童工调查档案教学页", url: "https://www.archives.gov/education/lessons/hine-photos" },
    { title: "美国国家档案馆：1916 年《基廷-欧文童工法》与立法历程", url: "https://www.archives.gov/milestone-documents/keating-owen-child-labor-act" },
    { title: "Smithsonian：Lewis Hine, Investigative Photographer", url: "https://www.si.edu/spotlight/lewis-hine-photographer" },
    { title: "Britannica：Lewis W. Hine", url: "https://www.britannica.com/biography/Lewis-W-Hine" },
    { title: "MoMA 藏品解读：Sadie Pfeifer, Spinner in Cotton Mill", url: "https://www.moma.org/collection/works/48220" },
    { title: "Joe Manning（Lewis Hine Project）：Sadie Phifer, Lancaster, South Carolina", url: "https://morningsonmaplestreet.com/2014/12/29/sadie-phifer/" },
  ],
};
