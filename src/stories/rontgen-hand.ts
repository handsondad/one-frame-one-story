import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

export const rontgenHand: Story = {
  id: "rontgen-hand",
  title: "看得见骨头的照片",
  frameName: "戴戒指的手",
  year: 1895,
  when: "1895 年 12 月 22 日",
  field: "物理",
  people: ["威廉·伦琴", "安娜·贝尔塔"],
  teaser: "一只戴戒指的手，第一次让人看见了身体里面。",
  frame: {
    src: "frames/rontgen-hand.jpg",
    alt: "一张泛黄的 X 光片，能看见手指骨头和一枚黑色的戒指，上方写着 Hand mit Ringen",
    kind: "照片",
    by: "威廉·伦琴",
    license: "公有领域",
    commons: "File:First medical X-ray by Wilhelm Röntgen of his wife Anna Bertha Ludwig's hand - 18951222.jpg",
    page: "https://commons.wikimedia.org/wiki/File:First_medical_X-ray_by_Wilhelm_R%C3%B6ntgen_of_his_wife_Anna_Bertha_Ludwig%27s_hand_-_18951222.jpg",
  },
  lines: [
    nian("爸爸，这只手好吓人，看得见骨头！", { part: "这是什么图" }),
    dad("这是世界上最有名的 X 光片之一。拍的是一位叫安娜·贝尔塔的女士的手，拍照的是她的丈夫，德国物理学家伦琴。上面的德语写着“戴戒指的手”。", { look: spot(0.43, 0.06, 0.2) }),
    nian("那个黑黑的圆块是什么？", { look: spot(0.33, 0.43, 0.08, "戒指", 1.8) }),
    dad("是她的结婚戒指。金属把 X 光挡得严严实实，所以在片子上又黑又清楚；肉挡得很少，只剩淡淡的影子；骨头在中间，一节一节的都看得出来。", { look: spot(0.58, 0.48, 0.22) }),

    nian("X 光是伦琴发明的吗？", { part: "一种看不见的光", look: "all" }),
    dad("是他“发现”的。1895 年 11 月，伦琴在实验室里摆弄一根玻璃管，管子通上电，外面用黑纸板包得严严实实。"),
    dad("奇怪的是，旁边一张涂了药水的纸屏，竟然发出了微微的亮光。"),
    nian("管子被包住了，光是怎么跑出去的？"),
    dad("伦琴也想不通。他猜，一定有一种看不见的东西穿过了黑纸板。他不知道这是什么，就像做数学题一样，用“X”来叫它——X 就是“未知”。"),
    nian("原来 X 光的 X 是这个意思！"),

    dad("接下来好几个星期，伦琴几乎住在实验室里，连吃饭都顾不上。他用纸、木头、金属一样一样地试，看这种光能穿过什么、穿不过什么。", { part: "妻子的手" }),
    nian("他太太不生气吗？"),
    dad("她很担心。圣诞节前几天，伦琴请她来实验室，把手放在照相底片上，一动不动地放了大约十五分钟。"),
    nian("十五分钟！手都酸了。"),
    dad("照片洗出来，她看到了自己手里的骨头。据说她说了一句：“我看见了自己的死亡。”", { look: spot(0.5, 0.5, 0.36) }),
    nian("为什么这么说？"),
    dad("那时候，人们只有在人去世很久以后，才会看到骨头。一只好好的手却露出了骨头，她一定吓坏了。"),

    nian("后来呢？", { part: "全世界都轰动了" }),
    dad("伦琴把论文和几张这样的照片寄给了别的科学家。下面这个圆章，是维尔茨堡大学物理研究所的章，这张就是当年从那里送给一位教授的。", { look: spot(0.54, 0.95, 0.12) }),
    dad("几个星期里，全世界的报纸都在说 X 光。很快，医生就用它找病人身体里的子弹、看骨头断在了哪儿。", { look: "all" }),
    nian("我摔跤的时候，医生也让我拍过片子。"),
    dad("对，就是它。1901 年，伦琴得了第一届诺贝尔物理学奖。"),
    nian("那他一定发大财了。"),
    dad("他没有给 X 光申请专利，觉得这个发现应该属于所有人。诺贝尔奖的奖金，他也捐给了自己的大学。"),

    nian("X 光会伤害身体吗？", { part: "小心看不见的光" }),
    dad("太多了会。早年的人不知道，有的研究者照得太多，受了伤。现在医生会算好用量，拍一张片子很安全，还会给你身上别的地方盖一块铅做的围裙。"),
  ],
  remember: "伦琴不知道它是什么，就叫它“X”——这个“未知”，后来让医生看见了身体里面。",
  facts: [
    ["这张图", "《戴戒指的手》，最早的 X 光照片之一"],
    ["作者", "威廉·伦琴（德国）"],
    ["时间、地点", "1895 年 12 月 22 日，维尔茨堡大学"],
    ["曝光", "大约 15 分钟"],
  ],
  sources: [
    { title: "Wikimedia Commons：Hand mit Ringen", url: "https://commons.wikimedia.org/wiki/File:First_medical_X-ray_by_Wilhelm_R%C3%B6ntgen_of_his_wife_Anna_Bertha_Ludwig%27s_hand_-_18951222.jpg" },
    { title: "PBS：'I Have Seen My Death': How the World Discovered the X-Ray", url: "https://www.pbs.org/newshour/health/i-have-seen-my-death-how-the-world-discovered-the-x-ray" },
    { title: "Atlas Obscura：The Existential Horror Created by the First X-Ray Images", url: "https://www.atlasobscura.com/articles/roentgen-xrays-discovery-radiographs" },
  ],
};
