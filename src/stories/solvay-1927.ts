import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const einstein = spot(0.542, 0.533, 0.042, "爱因斯坦");
const curie = spot(0.298, 0.533, 0.042, "居里夫人");
const planck = spot(0.196, 0.54, 0.042, "普朗克");
const bohr = spot(0.872, 0.508, 0.042, "玻尔");
const heisenberg = spot(0.776, 0.392, 0.04, "海森堡");
const pauli = spot(0.708, 0.405, 0.04, "泡利");
const schrodinger = spot(0.542, 0.398, 0.04, "薛定谔");
const dirac = spot(0.48, 0.478, 0.04, "狄拉克");

export const solvay1927: Story = {
  id: "solvay-1927",
  title: "一张合影里的 17 个诺贝尔奖",
  frameName: "第五届索尔维会议合影",
  year: 1927,
  when: "1927 年 10 月",
  field: "物理",
  people: ["爱因斯坦", "居里夫人", "玻尔", "普朗克", "海森堡", "薛定谔"],
  teaser: "29 个人分三排拍了张合影，其中 17 个得过或后来得了诺贝尔奖。",
  frame: {
    src: "frames/solvay-1927.jpg",
    alt: "二十九位穿西装的科学家在一栋楼前分三排合影",
    kind: "照片",
    by: "本杰明·库普里，索尔维国际物理研究所",
    license: "公有领域",
    commons: "File:Solvay conference 1927.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Solvay_conference_1927.jpg",
  },
  lines: [
    nian("爸爸，这么多爷爷穿着西装，是毕业照吗？", { part: "这是什么图" }),
    dad("哈哈，比毕业照厉害。1927 年 10 月，世界上最顶尖的一群物理学家来到比利时布鲁塞尔开会，会议叫“索尔维会议”，这是会上拍的合影。"),
    nian("有多厉害？"),
    dad("照片里一共 29 个人，其中 17 个人已经得了，或者后来得了诺贝尔奖。"),
    nian("那一大半都是！"),

    dad("我们来认几个人。前排正中间，头发乱蓬蓬的这位，认识吗？", { part: "认一认", look: einstein }),
    nian("爱因斯坦！我在书上见过。"),
    dad("对。从他往左数第二个，是照片里唯一的女士。", { look: curie }),
    nian("是居里夫人！"),
    dad("她是照片里唯一的女科学家，也是到今天为止唯一一个在两门不同的科学里都得了诺贝尔奖的人：物理和化学。"),
    dad("居里夫人左边这位光头、戴眼镜的老先生，是普朗克。", { look: planck }),
    dad("二十多年前，他提出：能量不是连续的，而是一小份一小份的，就像楼梯一级一级，而不像滑梯。"),
    nian("一份一份的能量？"),
    dad("对，这一小份，就叫“量子”。这次开会，大家就是来争论量子的。"),

    nian("争论？是吵架吗？", { part: "两个好朋友的争论" }),
    dad("是讲道理的那种争。你看中间一排最右边，这位是玻尔。", { look: bohr }),
    dad("玻尔这边的人认为：像电子这么小的东西，我们没法同时确切知道它在哪儿、跑多快，只能算出它“可能”在哪儿，有点像掷骰子。"),
    nian("那爱因斯坦怎么说？", { look: einstein }),
    dad("爱因斯坦不服气。他有一句很有名的话：“上帝不掷骰子。”意思是，世界背后一定有确定的规律，只是我们还没找到。"),
    nian("那玻尔呢？", { look: [einstein, bohr] }),
    dad("据说玻尔回了一句：“爱因斯坦，别去告诉上帝该怎么做。”"),
    nian("哈哈，谁赢了？"),
    dad("开会那几天，爱因斯坦常常在早饭时提出一个难题，玻尔他们琢磨一整天，晚饭时给出回答。他们就这样争了好多年，一直是好朋友。"),
    dad("后来的实验大多站在玻尔这一边。不过爱因斯坦提的那些难题，逼着大家把量子想得更清楚，这也是很大的贡献。"),

    nian("后面站着的那些人呢？", { part: "后排的年轻人", look: "all" }),
    dad("有好几个年轻人。这位是海森堡，才 25 岁，“没法同时知道在哪儿、跑多快”的道理，就是他想出来的。", { look: heisenberg }),
    dad("他旁边是泡利，再往左两个是薛定谔，他写下了一个方程，把电子当成一种波来描述。", { look: [pauli, schrodinger] }),
    nian("薛定谔，是那只猫的主人吗？", { look: schrodinger }),
    dad("你还知道薛定谔的猫！那是他想出来的一个思想实验，只在脑子里做，没有真的猫，放心。"),
    dad("中间一排这位是狄拉克，也是 25 岁。他后来从方程里预言了“反物质”。", { look: dirac }),

    nian("为什么这张照片这么有名？", { part: "为什么这么有名", look: "all" }),
    dad("因为照片里的这群人，差不多一起建立了今天的“量子力学”。你用的手机和电脑里的芯片、激光、医院里的核磁共振，都离不开这门学问。"),
    nian("那他们就是“量子天团”！"),
    dad("哈哈，这个名字起得好。"),
  ],
  remember: "一张台阶上的合影，留下了一群人争论出来的量子世界。",
  facts: [
    ["这张图", "第五届索尔维会议（电子与光子）合影"],
    ["摄影", "本杰明·库普里"],
    ["时间、地点", "1927 年 10 月，比利时布鲁塞尔"],
    ["照片里", "29 人，其中 17 人得过或后来得了诺贝尔奖"],
  ],
  sources: [
    { title: "Wikimedia Commons：Solvay conference 1927", url: "https://commons.wikimedia.org/wiki/File:Solvay_conference_1927.jpg" },
    { title: "NobelPrize.org：Marie Curie 照片集（含人物名单）", url: "https://www.nobelprize.org/prizes/physics/1903/marie-curie/photo-gallery/" },
    { title: "Il Nuovo Saggiatore：The 1927 Solvay Meeting", url: "https://www.ilnuovosaggiatore.sif.it/article/182" },
  ],
};
