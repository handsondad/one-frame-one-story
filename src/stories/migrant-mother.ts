import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const closeUp: Frame = {
  src: "frames/migrant-mother.jpg",
  alt: "黑白特写肖像：一位眉头微蹙、神情坚毅的年轻母亲右手轻托下巴望向远方，左右两个年幼的孩子背对镜头把脸埋在她肩头，她怀里还躺着一个熟睡的婴儿",
  kind: "照片",
  by: "多萝西娅·兰格（Dorothea Lange）摄，美国国会图书馆藏",
  license: "公有领域（美国农业安全管理局档案）",
  commons: "File:Lange-MigrantMother02.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Lange-MigrantMother02.jpg",
  note: "原底片右下角木杆上本来拍到了母亲抓着帐篷杆的左手大拇指；约 1939 年兰格请助手修掉了拇指，木杆上留下了一小块淡淡的修描暗影。",
};

const motherFace = spot(0.46, 0.31, 0.14, "妈妈的眼神");
const handChin = spot(0.39, 0.45, 0.08, "托着下巴的手");
const twoKids = [spot(0.18, 0.43, 0.13, "左边的孩子"), spot(0.77, 0.39, 0.13, "右边的孩子")];
const baby = spot(0.68, 0.8, 0.15, "熟睡的小婴儿");
const sleeve = spot(0.28, 0.65, 0.12, "磨破的袖口");
const thumbSpot = spot(0.92, 0.9, 0.075, "修掉拇指的木杆", 2.4);

const wideTent: Frame = {
  title: "十分钟里拍的第一张远景：泥地上的帆布帐篷",
  src: "frames/migrant-mother-tent.jpg",
  alt: "黑白远景照片：泥地上支着一个简陋的斜顶帆布棚，棚外破摇椅上坐着十几岁的大女儿，棚子阴影里坐着抱婴儿的母亲和年幼的孩子，旁边堆着旧木箱",
  kind: "照片",
  by: "多萝西娅·兰格摄，美国国会图书馆藏",
  license: "公有领域（美国农业安全管理局档案）",
  commons: "File:Migrant agricultural worker's family. Seven hungry children. Mother aged thirty-two, 03054.jpg",
  page: "https://commons.wikimedia.org/wiki/File:Migrant_agricultural_worker%27s_family._Seven_hungry_children._Mother_aged_thirty-two,_03054.jpg",
};
const tent = spot(0.54, 0.44, 0.27, "路边的帆布棚");
const olderSister = spot(0.39, 0.64, 0.13, "摇椅上的大姐姐");

export const migrantMother: Story = {
  id: "migrant-mother",
  title: "雨天调头拍下的妈妈",
  frameName: "移居的母亲",
  year: 1936,
  when: "1936 年 3 月初，美国加利福尼亚州尼波莫豌豆采摘营地",
  field: "社会",
  people: ["多萝西娅·兰格", "弗洛伦斯·欧文斯·汤普森"],
  teaser: "两个孩子把脸埋在妈妈肩膀上，怀里还睡着小宝宝——女摄影师在雨里多开了三十二公里又掉头回来，用十分钟拍下了大萧条最动人的一张脸。",
  frame: closeUp,
  lines: [
    nian("爸爸，这张图上有什么？一位皱着眉头的阿姨托着下巴，旁边两个小朋友怎么都背过脸不看镜头呀？", { part: "这是什么图", look: twoKids }),
    dad("这张著名的照片叫《移居的母亲》，拍在 1936 年春天美国“大萧条”的年头。两个小姐姐把脸埋进妈妈肩头，这样看照片的人不会被孩子的表情分心，一眼就会望进妈妈担忧又坚强的眼睛里。", { look: motherFace }),
    nian("呀，她怀里居然还睡着一个小宝宝！", { look: baby }),
    dad("真细心！不到一岁的小妹妹裹在布里睡着了，妈妈的毛衣袖口也已经磨破了。", { look: sleeve }),
    nian("她们这是在哪里？在家里吗？", { look: handChin }),
    dad("不在家里，而是在加州路边湿冷的泥地帐篷里。我们换上摄影师几分钟前站在远处拍的第一张，你就看见她们住的地方了。", { show: wideTent, look: tent }),

    nian("只是一块帆布搭起来的棚子！外面摇椅上还坐着一个大姐姐。", { part: "开了三十二公里又掉头", look: olderSister }),
    dad("对，这位妈妈那年才 32 岁，带着好几个孩子四处找农活干。那年春天一场冻雨冻坏了地里的豌豆，营地里两千多名采豆工人一下子没了收入，被困在雨地里挨饿。"),
    nian("是谁拍下了她们？"),
    dad("女摄影师多萝西娅·兰格。那天她本来已经在外奔波了一个月，正冒雨开车往家赶，路过手写的“采豌豆营地”木牌时没有停。"),
    dad("可是往前开了二十英里——差不多三十二公里，那块木牌一直在她脑子里转。她终于踩下刹车掉头回去，在泥地里只待了大约十分钟，一步步走近拍了七张，最后一张就是刚才那幅特写。", { show: closeUp, look: motherFace }),
    nian("照片拍回去有用吗？"),
    dad("太有用了！几天后《旧金山新闻报》登出营地的照片，政府立刻往营地紧急运去了两万磅食物，帮到了困在那里的两千多人。"),

    nian("那这位妈妈和孩子们领到食物了吗？", { part: "卖轮胎的误会与消失的拇指", look: "all" }),
    dad("等粮食运到的时候，她们一家已经修好旧汽车离开，去别处找活干了。因为走得匆忙，兰格当年甚至没顾上问这位妈妈叫什么名字。"),
    nian("我听说她们为了买吃的，把汽车轮胎都卖掉了？"),
    dad("这是兰格二十多年后回忆时写下的说法，流传特别广；不过妈妈的儿女后来澄清说，当时家里的旧车只是坏在半路等零件，轮胎并没有卖掉，可能是摄影师把营地里别家的难处记混了。"),
    nian("照片右下角那根木头杆子上，怎么有一团糊糊的黑印子？", { look: thumbSpot }),
    dad("你发现了连专家都津津乐道的小秘密！原来妈妈左手正紧紧抓着撑帐篷的木杆，那里本来拍到了她的大拇指。"),
    dad("过了三年，兰格觉得角落里露出一只拇指不好看，请助手在底片上把它修掉了。她的主管知道后很不高兴，觉得真实的纪实照片哪怕有一点不完美，也不该动手涂改。"),

    nian("后来大家知道这位妈妈叫什么名字了吗？", { part: "两千封陌生人的信", look: motherFace }),
    dad("直到四十多年后的 1978 年，一位记者才找到她：她叫弗洛伦斯·欧文斯·汤普森，是有切罗基原住民血统的母亲，一生靠双手辛苦抚养大了十个孩子。"),
    nian("她喜欢这张照片吗？"),
    dad("一开始她心里有些委屈：照片印遍了全世界，她却一分钱也没得到过，孩子们小时候还怕别人知道家里那么穷。"),
    dad("可是在 1983 年她生了重病的时候，全美国各地的普通人寄来了两千多封信和三万多美元帮她看病。许多人在信里写：“最难熬的日子里，是您妈妈的眼神给了我们撑下去的力气。”"),
    nian("她的孩子们看到信一定很骄傲吧？", { look: "all" }),
    dad("是呀，她的儿子说，从那一刻起，全家人终于明白妈妈当年那双眼睛有多了不起。"),
  ],
  remember: "多萝西娅·兰格在雨天掉头拍下的《移居的母亲》，当天就为饥饿的营地换来了救急粮，也让无数人在艰难岁月里记住了这位普通母亲坚韧的眼神。",
  facts: [
    ["这张图", "《移居的母亲》，多萝西娅·兰格摄（4×5 英寸大画幅相机）"],
    ["时间与地点", "1936 年 3 月初，美国加州尼波莫冻雨受灾的豌豆采摘营地"],
    ["立刻带来的改变", "《旧金山新闻报》刊发后，联邦政府向营地紧急运送两万磅食物"],
    ["照片里的母亲", "弗洛伦斯·欧文斯·汤普森（当时 32 岁，1978 年才公开确认身份）"],
    ["底片小插曲", "约 1939 年底片右下角抓木杆的大拇指被修掉，留下淡淡暗影"],
  ],
  sources: [
    { title: "美国国会图书馆专题：Dorothea Lange's \"Migrant Mother\" Photographs", url: "https://guides.loc.gov/migrant-mother" },
    { title: "美国国会图书馆藏品页：Migrant Mother（LC-USF34-009058-C）", url: "https://www.loc.gov/item/2017762891/" },
    { title: "美国国会图书馆展览：Icons — Migrant Mother 与修底片争议", url: "https://www.loc.gov/exhibitions/images-from-americas-library/about-this-exhibition/icons/dorothea-lange-migrant-mother/" },
    { title: "MoMA Learning：Dorothea Lange, Migrant Mother, Nipomo, California", url: "https://www.moma.org/learn/moma_learning/dorothea-lange-migrant-mother-nipomo-california-1936/" },
    { title: "Getty Museum：Migrant Mother 教学与史料档案", url: "https://www.getty.edu/education/k-12-learning/explore-human-erosion-migrant-mother/" },
    { title: "Smithsonian 美国国家历史博物馆：Florence Thompson 与兰格相机档案", url: "https://americanhistory.si.edu/collections/object/nmah_1313354" },
  ],
};
