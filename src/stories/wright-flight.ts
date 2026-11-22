import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const flyer = spot(0.555, 0.43, 0.28, "飞行者号");
const orville = spot(0.523, 0.474, 0.04, "奥维尔", 3.5);
const wilbur = spot(0.908, 0.512, 0.05, "威尔伯", 3);
const rail = spot(0.3, 0.62, 0.2, "滑轨");
const elevator = spot(0.587, 0.43, 0.07, "升降舵", 3);
const rudder = spot(0.485, 0.44, 0.045, "方向舵", 3);
const engine = spot(0.563, 0.462, 0.03, "发动机", 3.5);
const props = [spot(0.447, 0.422, 0.03, "螺旋桨"), spot(0.597, 0.408, 0.03, "螺旋桨")];

export const wrightFlight: Story = {
  id: "wright-flight",
  title: "飞了 12 秒",
  frameName: "莱特兄弟首飞",
  year: 1903,
  when: "1903 年 12 月 17 日上午 10 点 35 分，美国北卡罗来纳州",
  field: "技术",
  people: ["奥维尔·莱特", "威尔伯·莱特", "约翰·丹尼尔斯"],
  teaser: "12 秒、36 米：沙滩上的一张照片，拍下了人第一次驾着飞机飞起来。",
  frame: {
    src: "frames/wright-flight.jpg",
    alt: "黑白老照片：一架双层机翼的白色飞机刚刚离开地面，一个人趴在下层机翼中间，右边站着一个人看着它，地上有一条长长的木轨，远处是平平的沙地",
    kind: "照片",
    by: "John T. Daniels 摄，美国国会图书馆藏",
    license: "公有领域",
    commons: "File:First flight2.jpg",
    page: "https://commons.wikimedia.org/wiki/File:First_flight2.jpg",
  },
  lines: [
    nian("爸爸，这是一架飞机吗？长得好奇怪。", { part: "这是什么图", look: flyer }),
    dad("对，它叫“飞行者号”，是世界上第一架真正飞起来的、有发动机、能被人控制的飞机。这张照片拍的就是它飞起来的那一刻。"),
    nian("什么时候？"),
    dad("1903 年 12 月 17 日上午 10 点 35 分，在美国北卡罗来纳州海边的一片沙地上。"),
    nian("飞机上有人吗？", { look: orville }),
    dad("有。机翼中间趴着一个人，他是弟弟奥维尔·莱特。那时候的飞机没有座位，开飞机的人要趴在下面那层机翼上。"),
    nian("右边站着的人呢？", { look: wilbur }),
    dad("是哥哥威尔伯·莱特。他刚才扶着机翼跟着跑，飞机一离地，他就松了手，站在那儿看。"),

    nian("它飞了多远？", { part: "12 秒，36 米", look: "all" }),
    dad("这第一次，只飞了 12 秒，36 米左右。"),
    nian("才 36 米？学校操场都比这长！"),
    dad("是啊，比现在一架大型客机从左翅膀尖到右翅膀尖的距离还短。可这是人第一次坐着自己造的、有发动机的飞机，自己控制着飞起来，再平平安安落下。"),
    nian("那天只飞了一次吗？"),
    dad("一共飞了四次，兄弟俩轮流开。最后一次是哥哥开的，飞了 59 秒，大约 260 米。"),
    nian("地上这条长长的是什么？", { look: rail }),
    dad("是木头做的滑轨。飞机先在上面滑跑一段，再飞起来。兄弟俩还开玩笑，管它叫“大枢纽铁路”。"),
    nian("为什么要在这片沙滩上飞？"),
    dad("他们写信问过气象局，这里风大又稳，沙子软，摔下来不太疼，人也少，没人打扰。"),

    nian("这张照片是谁拍的？", { part: "谁按的快门", look: "all" }),
    dad("是附近救生站的一位叔叔，叫丹尼尔斯。奥维尔提前把相机架好，对准飞机要起飞的地方，请他到时候捏一下快门的小皮球。"),
    nian("他拍到了！"),
    dad("据说他以前从来没用过相机，一捏，就拍下了这张历史上最有名的照片之一。"),
    nian("照片马上就能看吗？"),
    dad("不能。那是玻璃底片，兄弟俩回到家乡代顿以后，才把它冲洗出来。"),
    nian("他们真的是第一个飞起来的吗？"),
    dad("也有人说别人更早飞过，可那些说法缺少可靠的照片和见证人。莱特兄弟这次有照片、有日记、有人看见，所以大家公认是他们。"),

    nian("莱特兄弟是科学家吗？", { part: "自行车铺的兄弟" }),
    dad("他们没上过大学，在俄亥俄州的代顿开了一家自行车铺：修自行车、卖自行车，后来还自己造自行车。"),
    nian("修自行车的人造出了飞机？"),
    dad("对。他们小时候，爸爸带回来一个用橡皮筋做动力的玩具“直升机”，兄弟俩玩了又玩，从那时候起就对飞着了迷。"),
    nian("他们是怎么学会造飞机的？"),
    dad("先做滑翔机，在这片沙地上一次次试飞。发现书上的数据不准，就自己做了一个小风洞，试了大约两百种机翼的形状。"),
    nian("风洞是什么？"),
    dad("一个长长的箱子，用风扇往里吹风，把小小的机翼放进去，看哪种形状被风托得最好。"),

    nian("他们最厉害的是什么？", { part: "最重要的发明", look: flyer }),
    dad("是想出了怎么控制飞机。前面这个白色的叫升降舵，让飞机抬头、低头。", { look: elevator }),
    dad("后面这个叫方向舵，管左右转弯。", { look: rudder }),
    dad("最妙的是，他们能让机翼两头轻轻扭一下，一边高一边低，飞机就不会侧翻。这是看鸟儿飞的时候想到的。", { look: flyer }),
    nian("发动机呢？", { look: engine }),
    dad("那时候买不到又轻又有劲的发动机，他们就和店里的机械师泰勒一起，花六个星期自己造了一台。"),
    dad("发动机用链条带动后面两个螺旋桨，一个往左转，一个往右转。", { look: props }),
    nian("什么都自己做！"),

    nian("飞完以后呢？", { part: "从沙滩到火星", look: "all" }),
    dad("第四次飞完，一阵大风把飞机掀翻摔坏了，它再也没有飞过。兄弟俩给爸爸发电报报喜，电报员还把 59 秒打成了 57 秒，把奥维尔的名字也拼错了。"),
    nian("哈哈，电报写错了！"),
    dad("现在，这架飞行者号挂在美国华盛顿的国家航空航天博物馆里。"),
    nian("后来飞机越飞越远了吧？"),
    dad("是啊。66 年后，宇航员带着它机翼上的一小块布飞到了月球。2021 年，又有一小块布贴在“机智号”直升机上，在火星上飞了起来。"),
    nian("从沙滩飞到了火星！"),
    dad("而一开始，只有 12 秒、36 米。"),
  ],
  remember: "12 秒、36 米：修自行车的兄弟俩，用自己做的风洞和发动机，让人第一次驾着飞机飞上了天。",
  facts: [
    ["这张图", "飞行者号第一次飞起来的瞬间"],
    ["时间", "1903 年 12 月 17 日上午 10 点 35 分"],
    ["地点", "美国北卡罗来纳州基蒂霍克附近的斩魔山"],
    ["第一次", "12 秒，约 36.6 米，奥维尔驾驶"],
    ["最长一次", "59 秒，约 260 米，威尔伯驾驶"],
  ],
  sources: [
    { title: "Wikimedia Commons：First flight2", url: "https://commons.wikimedia.org/wiki/File:First_flight2.jpg" },
    { title: "Library of Congress：First flight, 120 feet in 12 seconds (ppprs.00626)", url: "https://hdl.loc.gov/loc.pnp/ppprs.00626" },
    { title: "National Park Service：The First Flight", url: "https://www.nps.gov/wrbr/learn/historyculture/thefirstflight.htm" },
    { title: "National Park Service：The Wright Brothers", url: "https://www.nps.gov/articles/wright-brothers.htm" },
    { title: "Library of Congress：First Flight (Wright Papers highlights)", url: "https://www.loc.gov/collections/wilbur-and-orville-wright-papers/articles-and-essays/collection-highlights/first-flight/" },
    { title: "Smithsonian NASM：Researching the Wright Way", url: "https://airandspace.si.edu/explore/stories/researching-wright-way" },
    { title: "NASA JPL：Swatch of Wright Brothers Flyer 1 attached to Mars helicopter", url: "https://www.jpl.nasa.gov/images/pia24291-swatch-of-wright-brothers-flyer-1-attached-to-mars-helicopter/" },
    { title: "Smithsonian NASM：Flight claims of Gustave Whitehead", url: "https://airandspace.si.edu/stories/editorial/flight-claims-gustave-whitehead" },
  ],
};
