import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const photo: Frame = {
  src: "frames/photo-51.jpg",
  alt: "左边是罗莎琳德·富兰克林的黑白肖像，她手托下巴看着镜头；右边是照片 51 号：灰色底片上由斑点组成的 X 形图案，上下各有一块深色弧形",
  kind: "照片",
  by: "左：富兰克林肖像（常注为 1946 年 Elliott & Fry 照相馆拍摄）；右：照片 51 号，罗莎琳德·富兰克林、雷蒙德·葛斯林摄",
  license: "照片 51 号版权归伦敦国王学院，肖像版权归原作者；本站只作非商业的学习用途",
  page: "https://www.kcl.ac.uk/the-story-behind-photograph-51",
  note: "两张照片都还在版权期内，不是开放许可的图。本站是给孩子看的非商业学习网站，按教学引用放在这里；版权方要求的话就撤下。",
};
const portrait = spot(0.225, 0.43, 0.13, "富兰克林");
const film = spot(0.725, 0.5, 0.27, "照片 51 号");
const x = spot(0.714, 0.5, 0.09, "X");
const arcs = [spot(0.722, 0.13, 0.07), spot(0.722, 0.87, 0.07)];

const drawing: Frame = {
  title: "照着照片 51 号画的示意图",
  src: "frames/photo-51.svg",
  alt: "灰色底上由一个个斑点组成的 X 形图案，上下各有一块深色弧形，X 的每条臂上少了一个斑点",
  kind: "示意图",
  by: "本站按照片 51 号的衍射图案重绘（tools/draw-photo51.mjs）",
  license: "本站绘制",
  page: "https://www.kcl.ac.uk/the-story-behind-photograph-51",
  note: "照着原照片的结构画的：X 形斑点、每条臂上缺掉的第 4 个斑点、上下两块弧形，位置关系和原照片一致，只是画得清楚些。",
};
const drawnX = spot(0.5, 0.5, 0.3);
const missing = [spot(0.35, 0.3, 0.05), spot(0.65, 0.3, 0.05), spot(0.35, 0.7, 0.05), spot(0.65, 0.7, 0.05)];

export const photo51: Story = {
  id: "photo-51",
  title: "一个模糊的 X",
  frameName: "照片 51 号",
  year: 1952,
  when: "1952 年 5 月",
  field: "生物",
  people: ["罗莎琳德·富兰克林", "雷蒙德·葛斯林", "沃森", "克里克", "威尔金斯"],
  teaser: "一张模模糊糊的“X”，藏着生命说明书的形状。",
  frame: photo,
  lines: [
    nian("爸爸，这张图上有什么？左边是一位阿姨，右边模模糊糊的，中间有个大大的“X”。", { part: "这是什么图" }),
    dad("左边这位叫罗莎琳德·富兰克林，是一位用 X 光研究晶体的女科学家。", { look: portrait }),
    nian("那右边呢？", { look: film }),
    dad("右边是她和学生葛斯林 1952 年 5 月在英国伦敦国王学院拍的，叫“照片 51 号”。你一眼就看到了里面最重要的东西：这个 X。"),
    nian("这拍的是什么？看不出来。"),
    dad("拍的是 DNA。"),

    nian("DNA 是什么？", { part: "生命的说明书" }),
    dad("你为什么长得像爸爸妈妈？为什么小猫生下来是小猫，不会是小狗？因为每个生命的身体里都有一份“说明书”，写着该怎么长。这份说明书，就写在一种叫 DNA 的东西上。"),
    nian("那 DNA 长什么样？"),
    dad("1952 年，全世界好多科学家都想知道答案。可是 DNA 太小了，最好的显微镜也看不见。"),
    nian("看不见怎么拍？"),

    dad("富兰克林用的办法叫 X 射线衍射。她把 DNA 拉成非常非常细的丝，用 X 光照它。X 光碰到 DNA 会拐弯散开，在底片上留下一个个斑点。", { part: "用 X 光拍影子" }),
    nian("像影子？"),
    dad("有点像，但不是普通的影子。你可以想象把一根弹簧对着光，墙上会出现一个很有规律的图案。科学家能从图案倒推出东西是什么形状。"),
    nian("拍一张要多久？"),
    dad("这一张，X 光足足照了 62 个小时，差不多三天，还要一直让 DNA 保持合适的湿度。它是那一组照片里的第 51 张，所以叫“照片 51 号”。"),

    dad("来，我们一起读这张图。先看这个 X。", { part: "读懂这个 X", look: x }),
    dad("像这样交叉的 X，说明 DNA 是螺旋形的，像弹簧，又像螺旋楼梯。"),
    nian("那上面和下面这两块黑黑的弯弯的呢？", { look: arcs }),
    dad("它们说明，这个螺旋楼梯每一级台阶的高度都一样，而且非常非常矮：一千万级台阶叠起来，也才三毫米多一点。"),
    nian("X 上的斑点太模糊了，我数不清。", { look: x }),
    dad("原照片是有点糊。爸爸照着它画了一张示意图，斑点的位置跟原照片一样，只是画得清楚些。", { show: drawing, look: drawnX }),
    nian("咦，这里怎么少了一块？", { look: missing }),
    dad("好眼力！X 的每条胳膊上，第四个斑点不见了。科学家后来明白，这是因为 DNA 不是一根螺旋，而是两根螺旋绕在一起，它们的影子刚好在这里互相抵消了。"),
    nian("两根螺旋……就是双螺旋！"),
    dad("对，就是双螺旋。", { look: drawnX }),

    nian("那是富兰克林发现了双螺旋吗？", { part: "被别人看到的照片", show: photo, look: "all" }),
    dad("这里有一段让人有点难过的故事。当时剑桥大学还有两个年轻人也在研究 DNA，叫沃森和克里克。他们像搭积木一样，想拼出 DNA 的模型。"),
    dad("1953 年 1 月，富兰克林的同事威尔金斯，没有告诉她，就把这张照片拿给沃森看了。沃森后来回忆，他一看到，嘴巴都张大了，心怦怦直跳。"),
    nian("没告诉她就给别人看，这样不对。"),
    dad("是不对。沃森和克里克还看到了富兰克林写进研究报告里的重要数据。几个星期以后，他们拼出了正确的双螺旋模型。"),
    nian("那富兰克林自己呢？"),
    dad("她自己也一步步算到了很接近答案的地方。1953 年 4 月，《自然》杂志同一期登了三篇文章：沃森和克里克的模型、威尔金斯小组的文章，还有富兰克林和葛斯林的这张照片。"),

    nian("他们得诺贝尔奖了吗？", { part: "后来呢" }),
    dad("1962 年，沃森、克里克和威尔金斯得了诺贝尔奖。富兰克林在 1958 年就因病去世了，只有 37 岁，而诺贝尔奖不颁给已经去世的人。"),
    nian("她没等到……"),
    dad("是啊。不过今天，越来越多的人知道了她的名字，有学校、有奖项，还有一台要去火星的探测车，都叫“罗莎琳德·富兰克林”。", { look: portrait }),
    nian("我在书上见过一张照片，两个人站在一个很高的 DNA 模型旁边。", { look: "all" }),
    dad("那是 1953 年沃森和克里克跟他们的模型拍的合影，“纸板拼出来的双螺旋”那个故事里就有。下次再看到它，你就知道，那个模型背后还有这张照了 62 个小时的照片。"),
  ],
  remember: "模糊的 X 说明 DNA 是螺旋；X 上缺掉的那个斑点说明是两根——双螺旋。",
  facts: [
    ["这张图", "左：罗莎琳德·富兰克林；右：照片 51 号，B 型 DNA 的 X 射线衍射照片"],
    ["拍摄", "罗莎琳德·富兰克林和学生雷蒙德·葛斯林"],
    ["时间、地点", "1952 年 5 月，伦敦国王学院"],
    ["曝光", "62 小时（富兰克林实验记录）"],
    ["发表", "1953 年 4 月 25 日《自然》"],
  ],
  sources: [
    { title: "伦敦国王学院：The story behind Photograph 51", url: "https://www.kcl.ac.uk/the-story-behind-photograph-51" },
    { title: "Nature 1953：Franklin & Gosling, Molecular Configuration in Sodium Thymonucleate", url: "https://www.nature.com/articles/171740a0" },
    { title: "HISTORY：How Rosalind Franklin's 'Photo 51' Revealed DNA's Structure", url: "https://www.history.com/articles/rosalind-franklin-photo-51-dna" },
    { title: "National Portrait Gallery：Rosalind Franklin（1946 年 Elliott & Fry 拍的肖像）", url: "https://www.npg.org.uk/collections/search/portrait/mw62979/Rosalind-Franklin" },
  ],
};
