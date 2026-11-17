import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const ear = spot(0.4, 0.35, 0.14, "背上的“耳朵”");
const ownEar = spot(0.645, 0.37, 0.04, "它自己的耳朵", 3);
const mouse = spot(0.53, 0.5, 0.3, "小老鼠");
const head = spot(0.72, 0.35, 0.09, "光溜溜的头");

export const earMouse: Story = {
  id: "ear-mouse",
  title: "背上长耳朵的小老鼠",
  frameName: "背上长着“耳朵”的小鼠",
  year: 1995,
  when: "1995 年 10 月上了英国电视，1997 年发表论文；美国马萨诸塞州",
  field: "医学",
  people: ["曹谊林", "查尔斯·瓦坎蒂", "约瑟夫·瓦坎蒂"],
  teaser: "一只小老鼠背上竖着一只“人耳朵”——其实它跟人一点关系也没有，是牛的软骨细胞长出来的。",
  frame: {
    src: "frames/ear-mouse.jpg",
    alt: "玻璃皿里趴着一只没有毛的粉红色小老鼠，头朝右；它背上竖着一个比身子还高的、像人耳朵一样卷曲的东西，长尾巴沿着皿底弯过去",
    kind: "照片",
    by: "1995 年，美国马萨诸塞州 Vacanti 实验室的照片（拍摄者不详）",
    license: "版权归原作者，本站只作非商业的学习用途",
    page: "https://www.famouspictures.org/ear-mouse/",
    note: "这张照片还在版权期内，不是开放许可的图。本站是给孩子看的非商业学习网站，按教学引用放在这里；版权方要求的话就撤下。",
  },
  lines: [
    nian("爸爸，这张图上有什么？小老鼠背上长了一只耳朵！", { part: "这是什么图", look: ear }),
    dad("看起来像一只人的耳朵，对吧？这张照片 1995 年上了英国的电视，好多人吓了一跳。"),
    dad("它趴在实验室的一个玻璃皿里。你看，背上这只“耳朵”，差不多跟它的身子一样大。", { look: mouse }),
    nian("小老鼠真的长出了人的耳朵吗？"),
    dad("没有。它跟人一点关系也没有，也没有改过小老鼠的基因。这只“耳朵”，是用牛的软骨细胞长出来的，只是做成了人耳朵的形状。"),
    nian("那它自己的耳朵呢？", { look: ownEar }),
    dad("在这儿，小小的，好好地长在头上。"),

    nian("这只小老鼠怎么没有毛？", { part: "一只特别的小老鼠", look: head }),
    dad("它是一种特别的实验小鼠，叫“裸鼠”，天生没有毛。"),
    nian("光溜溜的！"),
    dad("更要紧的是，它身体里的“卫兵”很少。一般的小老鼠会把外来的细胞当成敌人赶走，裸鼠不会，牛的细胞放进去，也能好好地长。"),

    nian("这只“耳朵”是怎么做出来的？", { part: "一个会消失的模子", look: ear }),
    dad("科学家先用一种特别的材料，做了一个耳朵形状的模子，大小照着一个三岁小朋友的耳朵。"),
    nian("三岁！比我还小。"),
    dad("然后在模子上撒满牛的软骨细胞。软骨你摸得到：捏捏你的耳朵，软软的、能弯，又能弹回来，那就是软骨。"),
    nian("我的耳朵里也有软骨！"),
    dad("对。科学家把带着细胞的模子，放到小老鼠背上的皮肤下面。小老鼠的身体给细胞送营养，细胞就一点点长起来。"),
    nian("那个模子呢？"),
    dad("模子会慢慢自己消失，就像糖在水里慢慢化掉。等模子化完了，软骨已经长成了耳朵的形状，留了下来。"),
    nian("要多久？"),
    dad("大约十二个星期，差不多三个月。"),

    nian("这是谁做的？", { part: "做这个实验的人" }),
    dad("美国的瓦坎蒂兄弟实验室。论文的第一作者，是从上海去的中国医生曹谊林，很多具体的工作是他做的。"),
    nian("为什么要做耳朵？"),
    dad("有的小朋友生下来一只耳朵没长好。科学家想：能不能用细胞，长出一只新的耳朵给他们？这只小老鼠，就是在试这个办法行不行。"),

    nian("大家为什么吓一跳？", { part: "被说错的照片", look: mouse }),
    dad("因为它看上去太像人耳朵长在了老鼠身上。1999 年，有人在报纸上登广告，说这是一只“基因改造、长着人耳朵的老鼠”。"),
    nian("可是你说不是！"),
    dad("对，那句话说错了。没有人的细胞，也没有改基因，只是牛的软骨，长成了耳朵的形状。所以看到吓人的照片，先别急着信，要问问到底是怎么回事。"),
    nian("小老鼠疼不疼？"),
    dad("做实验的动物，科学家要按规定好好照顾，尽量不让它们难受。所以科学家也一直在想办法，少用一些动物。"),

    nian("后来真的有小朋友得到新耳朵了吗？", { part: "二十年后", look: "all" }),
    dad("有。2018 年，曹谊林和上海的医生们，给五个六到十岁、一只耳朵没长好的小朋友，做了新耳朵。"),
    nian("用牛的细胞吗？"),
    dad("这回用的是他们自己耳朵里的一点点软骨细胞。医生先扫描另一只好耳朵，用 3D 打印照着做出一模一样的模子，再让细胞在上面长。"),
    nian("那他们的新耳朵好看吗？"),
    dad("第一个小姑娘，过了两年半，耳朵的样子还很好。另外几个小朋友效果有好有差，科学家还在继续改进。"),
    nian("一只小老鼠，帮到了好多小朋友。"),
  ],
  remember: "小老鼠背上的“耳朵”不是人的耳朵，是牛的软骨细胞照着耳朵模子长出来的；二十多年后，同样的办法帮小朋友长出了新耳朵。",
  facts: [
    ["这张图", "背上长着耳朵形软骨的裸鼠，1995 年的照片"],
    ["时间", "1995 年上电视，1997 年发表论文"],
    ["做的人", "曹谊林、查尔斯·瓦坎蒂、约瑟夫·瓦坎蒂等"],
    ["“耳朵”", "牛的软骨细胞 + 会自己消失的耳朵形模子"],
    ["后来", "2018 年，五个孩子用自己的细胞长出新耳朵"],
  ],
  sources: [
    { title: "Cao et al. 1997：Transplantation of chondrocytes utilizing a polymer-cell construct to produce tissue-engineered cartilage in the shape of a human ear（Plast Reconstr Surg 100, 297）", url: "https://journals.lww.com/plasreconsurg/abstract/1997/08000/transplantation_of_chondrocytes_utilizing_a.1.aspx" },
    { title: "Times Higher Education（1995）：Spare an ear for unease", url: "https://www.timeshighereducation.com/news/spare-an-ear-for-unease/95941.article" },
    { title: "BMJ 新闻（1995 年 11 月 4 日）", url: "https://www.bmj.com/content/311/7014/1235.2" },
    { title: "Famous Pictures：The Ear Mouse", url: "https://www.famouspictures.org/ear-mouse/" },
    { title: "中国教育和科研计算机网：曹谊林与“人耳鼠”", url: "https://www.edu.cn/te_bie_tui_jian_1073/20110824/t20110824_673082.shtml" },
    { title: "Zhou et al. 2018：In Vitro Regeneration of Patient-specific Ear-shaped Cartilage（EBioMedicine 28, 287）", url: "https://doi.org/10.1016/j.ebiom.2018.01.011" },
    { title: "New Scientist（2018）：Children get new ears grown from their own cells in world first", url: "https://www.newscientist.com/article/2159626-children-get-new-ears-grown-from-their-own-cells-in-world-first/" },
  ],
};
