import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const aerial: Frame = {
  src: "frames/nagasaki-cloud.jpg",
  alt: "黑白照片：一根巨大的烟柱从云层中升起，顶上是一团翻滚的白色蘑菇状云，旁边和下面是普通的白云",
  kind: "照片",
  by: "美国陆军航空队；一般认为是投弹手查尔斯·利维（Charles Levy）在 B-29 “大艺术家”号上拍的",
  license: "公有领域（美国政府作品）",
  commons: "File:Nagasakibomb.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Nagasakibomb.jpg",
  note: "美国国家档案馆（NAID 535795）的记录只写“美国陆军航空队”拍摄；说是利维拍的，来自后来的资料。",
};
const cap = spot(0.525, 0.125, 0.26, "蘑菇的伞");
const stem = spot(0.525, 0.35, 0.1, "柄");
const layer = spot(0.74, 0.475, 0.1, "普通的云");
const lower = spot(0.51, 0.74, 0.16, "翻滚的烟尘");

const ground: Frame = {
  title: "从地上看：香烧岛上拍的蘑菇云",
  src: "frames/nagasaki-ground.jpg",
  alt: "黑白照片：远处的海面和小山后面，一大团烟云高高升起",
  kind: "照片",
  by: "松田弘道摄（川南造船所的摄影技师），长崎原爆资料馆藏",
  license: "公有领域（日本旧照片）",
  commons: "File:Atomic cloud over Nagasaki from Koyagi-jima.jpeg",
  page: "https://commons.wikimedia.org/wiki/File:Atomic_cloud_over_Nagasaki_from_Koyagi-jima.jpeg",
  note: "爆炸后大约 15 分钟，在离爆心约 9.4 公里的香烧岛上拍的，是从地面拍到的最早的长崎蘑菇云照片。",
};

export const nagasakiCloud: Story = {
  id: "nagasaki-cloud",
  title: "长崎上空的那朵云",
  frameName: "长崎上空的蘑菇云",
  year: 1945,
  when: "1945 年 8 月 9 日上午，日本长崎上空",
  field: "历史",
  people: ["查尔斯·利维", "松田弘道", "长崎的被爆者"],
  teaser: "一朵比飞机飞得还高的云。拍下它的人说它“像煮开的咖啡”，长崎人从此每年都在这一天静默一分钟。",
  frame: aerial,
  lines: [
    nian("爸爸，这张图上有什么？一朵好高好高的云，顶上像一朵大蘑菇。", { part: "这是什么图", look: cap }),
    dad("这是 1945 年 8 月 9 日上午，原子弹在日本长崎爆炸以后升起来的蘑菇云。"),
    nian("原子弹……就是沙漠里试验的那种？"),
    dad("对。“三位一体”试验三个星期以后，美国先在广岛投了一颗，三天后又在长崎投了这一颗。那时第二次世界大战还没有结束。"),
    nian("这是从哪儿拍的？", { look: "all" }),
    dad("从天上，一架跟在投弹飞机旁边的美国飞机上。这朵云后来升得比飞机还高。"),

    nian("谁拍的？", { part: "玻璃泡泡里的照相机" }),
    dad("一般认为是飞机上的投弹手查尔斯·利维。他坐在飞机最前面透明的机头里，像坐在一个玻璃泡泡里。"),
    dad("不过美国国家档案馆的记录上，只写着“美国陆军航空队”。那天飞机上好几个人都在拍，所以只能说“一般认为”。"),
    nian("他看到这朵云，说了什么？"),
    dad("他后来对报纸说，那团云像煮开的咖啡，翻滚着，好像是活的，大家都很害怕。"),
    nian("为什么有好几架飞机？"),
    dad("一架投弹，一架带着仪器，测量爆炸有多大，利维就在带仪器的这一架上。本来还有一架专门拍照的，可它没赶上会合。"),

    nian("为什么偏偏是长崎？", { part: "差在一片云上" }),
    dad("本来的目标是另一座城市，叫小仓。可那天小仓被云和烟遮住了，飞机绕了三次都看不清地面，油不多了，才转向长崎。"),
    nian("要是那天小仓没有云……"),
    dad("是啊，历史有时候就差在一片云上。上午 11 点 02 分，原子弹在长崎上空大约五百米的地方爆炸了。"),

    nian("顶上那团白白的是什么？", { part: "读这朵云", look: cap }),
    dad("爆炸放出的热，让空气一股劲往上冲，冲到很高的地方散开，就成了蘑菇的伞。"),
    nian("下面细细的这根呢？", { look: stem }),
    dad("是蘑菇的柄，热空气带着烟尘往上升的通道。"),
    nian("旁边那一层白白的，是普通的云吗？", { look: layer }),
    dad("对。那天天上本来就有云，蘑菇云从云层里一下子穿了过去。"),
    nian("下面这一团黑黑的，鼓鼓的。", { look: lower }),
    dad("那是还在翻滚的烟尘。同一架飞机上的一位记者写道，蘑菇的伞飘走以后，柱子上又冒出了一朵小一点的蘑菇。"),
    nian("这朵云有多高？", { look: "all" }),
    dad("当时的人估计，云顶升到了大约 18 公里，差不多是两座珠穆朗玛峰叠起来那么高，比投弹的飞机飞得高一倍。"),

    nian("云底下的城市呢？我看不到。", { part: "地上的人" }),
    dad("从飞机上看，城市被烟尘挡住了。同一朵云，地上也有人拍了下来。", { show: ground, look: "all" }),
    dad("这是长崎造船厂的摄影技师松田弘道拍的。他在离爆炸点九公里多的一个小岛上，爆炸大约十五分钟后，拍下了这一张。"),
    nian("城里的人怎么样了？"),
    dad("城里很多房子倒了、烧了。到那一年年底，长崎有七万多人因此失去了生命，还有很多人受了伤。"),
    nian("好多人……"),
    dad("是的。活下来的人叫“被爆者”，很多人后来身体一直不好，也一直记着那一天。"),

    nian("后来呢？", { part: "让长崎成为最后一个", show: aerial, look: "all" }),
    dad("六天以后，8 月 15 日，日本宣布投降。9 月 2 日签了投降书，第二次世界大战结束了。"),
    nian("长崎现在什么样？"),
    dad("长崎重新建起来了。爆炸的地方附近有一座和平公园，里面有一座很大的铜像：右手指着天，提醒人们原子弹的危险；左手平平伸开，表示和平。"),
    dad("每年 8 月 9 日上午 11 点 02 分，长崎的人一起静默一分钟。市长念的《和平宣言》里说：要让长崎成为最后一个被原子弹炸过的地方。"),
    nian("那些被爆者呢？"),
    dad("他们组织起来，几十年里到处讲自己的经历，请大家不要再用核武器。2024 年，他们的团体“日本被团协”得了诺贝尔和平奖。"),
    nian("从那以后，还有人用过原子弹吗？"),
    dad("没有。从 1945 年到今天，八十多年了，战争里再也没有用过原子弹。大家都希望一直这样下去。"),
    nian("我也希望。"),
  ],
  remember: "1945 年 8 月 9 日长崎上空的那朵云，让七万多人失去了生命；长崎人每年静默一分钟，希望长崎成为最后一个被原子弹炸过的地方。",
  facts: [
    ["这张图", "长崎原子弹爆炸后的蘑菇云，从美国 B-29 飞机上拍摄"],
    ["时间", "1945 年 8 月 9 日上午 11:02 爆炸"],
    ["拍摄者", "一般认为是查尔斯·利维；国家档案馆只写“美国陆军航空队”"],
    ["云有多高", "当时估计约 18 公里"],
    ["遇难", "到 1945 年底约 7.4 万人（长崎市 1950 年调查）"],
    ["今天", "每年 8 月 9 日 11:02 静默一分钟，宣读《和平宣言》"],
  ],
  sources: [
    { title: "Wikimedia Commons：Nagasakibomb.jpg", url: "https://commons.wikimedia.org/wiki/File:Nagasakibomb.jpg" },
    { title: "U.S. National Archives：Atomic Cloud Rises Over Nagasaki, Japan（NAID 535795）", url: "https://catalog.archives.gov/id/535795" },
    { title: "Atomic Heritage Foundation：Charles Levy", url: "https://ahf.nuclearmuseum.org/ahf/profile/charles-levy/" },
    { title: "The War Zone：Iconic atomic bomb blast imagery from Japan almost never happened", url: "https://www.twz.com/iconic-atomic-bomb-blast-imagery-from-japan-almost-never-happened" },
    { title: "Amateur Photographer：Nagasaki, by Charles Levy", url: "https://amateurphotographer.com/iconic-images/nagasaki-charles-levy/" },
    { title: "Getty Museum：Nagasaki photograph（拍摄者不确定）", url: "https://www.getty.edu/education/for_teachers/curricula/headlines/ib_nagasaki.html" },
    { title: "Atomic Archive：William Laurence, Eyewitness Account of Atomic Bomb over Nagasaki", url: "https://atomicarchive.com/resources/documents/hiroshima-nagasaki/eyewitness-nagasaki.html" },
    { title: "Wikipedia：Atomic bombings of Hiroshima and Nagasaki", url: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki" },
    { title: "长崎市：原子爆弾の概要", url: "https://www.city.nagasaki.lg.jp/page/44706.html" },
    { title: "长崎和平推进协会：死伤者数（1950 年调查）", url: "https://nagasakipeace.jp/en/search/record/photo/part_2_02.html" },
    { title: "RERF：Frequently Asked Questions", url: "https://www.rerf.or.jp/en/faq/" },
    { title: "长崎原爆资料馆：松田弘道拍摄的原子云", url: "https://city-nagasaki-a-bomb-museum-db.jp/collection/87666.html" },
    { title: "U.S. National Archives：Surrender of Japan（1945）", url: "https://www.archives.gov/milestone-documents/surrender-of-japan" },
    { title: "长崎市：平和祈念像", url: "https://www.city.nagasaki.lg.jp/page/6808.html" },
    { title: "长崎市：长崎和平宣言", url: "https://www.city.nagasaki.lg.jp/page/4920.html" },
    { title: "Nobel Prize：The Nobel Peace Prize 2024 — Nihon Hidankyo", url: "https://www.nobelprize.org/prizes/peace/2024/press-release/" },
  ],
};
