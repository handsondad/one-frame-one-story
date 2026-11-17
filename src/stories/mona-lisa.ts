import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const eyes = spot(0.45, 0.23, 0.09, "眼睛");
const smile = spot(0.45, 0.315, 0.06, "嘴角", 3);
const hands = spot(0.4, 0.83, 0.14, "手");
const road = spot(0.13, 0.53, 0.06, "小路");
const lake = spot(0.12, 0.39, 0.06, "左边的水");
const bridge = spot(0.84, 0.46, 0.05, "桥", 3);
const rightWater = spot(0.85, 0.285, 0.06, "右边的水");
const veil = spot(0.47, 0.13, 0.06, "薄纱");

export const monaLisa: Story = {
  id: "mona-lisa",
  title: "墙上空了的那一天",
  frameName: "蒙娜丽莎",
  year: 1503,
  circa: true,
  when: "1503 年开始画，达·芬奇一直画到晚年",
  field: "艺术",
  people: ["列奥纳多·达·芬奇", "丽莎·盖拉尔迪尼", "温琴佐·佩鲁贾"],
  teaser: "一幅不大的画，一个说不清的微笑，还有一天，它从墙上不见了。",
  frame: {
    src: "frames/mona-lisa.jpg",
    alt: "油画：一位穿深色衣服、头上罩着薄纱的女士，双手交叠放在椅子扶手上，嘴角带着淡淡的微笑；她身后是弯弯的小路、河水、一座小桥和雾蒙蒙的远山",
    kind: "画",
    by: "列奥纳多·达·芬奇，巴黎卢浮宫藏",
    license: "公有领域",
    commons: "File:Mona Lisa, by Leonardo da Vinci, from C2RMF retouched.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg",
  },
  lines: [
    nian("爸爸，这个阿姨是谁？她在笑吗？", { part: "这是什么图" }),
    dad("这是意大利画家达·芬奇画的《蒙娜丽莎》，可能是全世界最有名的一幅画，现在挂在法国巴黎的卢浮宫。"),
    nian("她真的叫蒙娜丽莎吗？"),
    dad("“蒙娜”是意大利语里对女士的尊称，有点像“夫人”。她叫丽莎，是佛罗伦萨一位丝绸商人的妻子。"),
    nian("怎么知道是她？"),
    dad("1503 年，有个人在一本书的空白处写了一句话，说达·芬奇正在画丽莎的像。2005 年，德国的学者在图书馆里发现了这句话。"),
    nian("这幅画很大吗？"),
    dad("不大，高 79 厘米，宽 53 厘米，差不多就是你书桌那么大。它是用油彩画在一块杨木板上的。"),

    nian("她到底在不在笑？", { part: "说不清的微笑", look: smile }),
    dad("这就是大家争了五百年的事。你盯着她的眼睛看，好像在笑；盯着她的嘴看，笑又好像淡了。"),
    nian("真的！好奇怪。"),
    dad("秘密在嘴角。达·芬奇没有用清楚的线条画嘴角，而是让颜色一层一层、像烟雾一样慢慢变淡。"),
    nian("像烟雾一样？"),
    dad("这种画法有个名字，叫“晕涂法”，意大利语的意思就是“像烟一样”。他涂了很多层很薄的颜料，看不出一点笔触。"),
    nian("她的头上有什么？", { look: veil }),
    dad("一层很薄很薄的纱，透过它还能看见头发。要画出这么薄的纱，得有非常好的耐心。"),
    nian("她的手放在哪儿？", { look: hands }),
    dad("右手轻轻搭在左手上，放在椅子的扶手上。她看起来很安静，很放松。"),

    nian("我听说，不管站在哪儿，她的眼睛都跟着你转？", { part: "眼睛和风景", look: eyes }),
    dad("很多人这么说。可是 2019 年，德国的科学家请好多人来测，发现她其实看的是你右边一点点，不是正对着你。"),
    nian("哈哈，原来她没在看我！"),
    dad("是啊。大家都说的事，也可以用科学去试一试。"),
    nian("她后面的风景好像梦里一样。", { look: "all" }),
    dad("远处的山雾蒙蒙的，越远越蓝、越淡，就像我们真的看远山时那样。"),
    nian("左边有一条弯弯的路！", { look: road }),
    dad("对，弯弯曲曲地伸到远处去。"),
    nian("右边有一座小桥！", { look: bridge }),
    dad("你眼睛真尖。一座拱起来的石桥，桥下面是河水。这么小的桥，达·芬奇也画得清清楚楚。"),
    nian("左边的水好像比右边的低？", { look: [lake, rightWater] }),
    dad("好多人都这么觉得，还说达·芬奇是故意画歪的。不过卢浮宫的专家说，两边的水其实是连在一起的。"),

    nian("达·芬奇画了多久？", { part: "带在身边的画", look: "all" }),
    dad("1503 年开始画，可他一直没有交给丽莎家，而是带在身边，不停地修改，一改就是好多年。"),
    nian("为什么不给人家？"),
    dad("没人知道确切的原因。也许他觉得还没画完。他晚年去了法国，也把这幅画带了过去。"),
    nian("所以它才在法国！"),
    dad("对。后来法国国王买下了它，它就一直留在了法国，最后进了卢浮宫。"),

    nian("它一直挂在卢浮宫吗？", { part: "墙上空了" }),
    dad("有一回，它不见了。1911 年 8 月 21 日，星期一，卢浮宫闭馆的日子，有人把它从墙上取走了。"),
    nian("被偷了？！"),
    dad("偷它的人叫佩鲁贾，以前在卢浮宫干过活，给画装玻璃罩。他穿着和工人一样的白色工作服，没人注意他。"),
    nian("大家什么时候发现的？"),
    dad("过了一天多才发现。本来只在懂画的人里有名的它，一下子上了全世界的报纸。"),
    nian("那后来呢？"),
    dad("卢浮宫关了一个星期。重新开门以后，好多人排队进去，只为看一看墙上那块空地方和四个挂钩。"),
    nian("去看一面空墙？！"),
    dad("是啊。警察还抓过诗人阿波利奈尔，问过画家毕加索，后来证明他们跟这件事都没有关系。"),

    nian("画找回来了吗？", { part: "回家" }),
    dad("两年多以后，1913 年，佩鲁贾带着画去了意大利的佛罗伦萨，想卖给那里的画商和博物馆。"),
    nian("他们买了吗？"),
    dad("画商请来博物馆的馆长，一看是真的，马上报了警。1913 年 12 月 12 日，佩鲁贾被抓住了。"),
    nian("他为什么要偷？"),
    dad("他说，是想把达·芬奇的画送回意大利。至于还有没有别的原因，比如想卖钱，到今天大家还在讨论。"),
    nian("有人说是一个大骗子指使他的？"),
    dad("这个故事流传很广，可是没有证据，更像是后来编出来的。"),
    nian("画回到法国了吗？"),
    dad("它先在意大利展出了几次，1914 年 1 月 4 日回到了卢浮宫。佩鲁贾被判坐牢一年多，后来减成了七个多月。"),
    nian("现在它安全吗？"),
    dad("现在它装在防弹玻璃柜里，每天大约有两万人来看它。一幅书桌大小的画，前面总是挤满了人。"),
  ],
  remember: "一个像烟雾一样的微笑，一面空了的墙：丢过一次以后，全世界的人都想来看看她。",
  facts: [
    ["这张图", "《蒙娜丽莎》，杨木板油画"],
    ["画家", "列奥纳多·达·芬奇（1452—1519）"],
    ["画的是", "佛罗伦萨的丽莎·盖拉尔迪尼（1479—1542）"],
    ["大小", "79.4 × 53.4 厘米"],
    ["被偷", "1911 年 8 月 21 日；1914 年 1 月 4 日回到卢浮宫"],
  ],
  sources: [
    { title: "Wikimedia Commons：Mona Lisa, by Leonardo da Vinci, from C2RMF retouched", url: "https://commons.wikimedia.org/wiki/File:Mona_Lisa,_by_Leonardo_da_Vinci,_from_C2RMF_retouched.jpg" },
    { title: "Louvre：Portrait de Lisa Gherardini, dit La Joconde", url: "https://collections.louvre.fr/en/ark:/53355/cl010062370" },
    { title: "Britannica：Mona Lisa", url: "https://www.britannica.com/topic/Mona-Lisa-painting" },
    { title: "Heidelberg University：Identity of Mona Lisa confirmed (2008)", url: "https://www.uni-heidelberg.de/press/news/press552e.html" },
    { title: "Horstmann & Loth 2019：The Mona Lisa illusion—scientists see her looking at them though she isn't", url: "https://journals.sagepub.com/doi/full/10.1177/2041669518821702" },
    { title: "Smithsonian：Stolen, how the Mona Lisa became the world's most famous painting", url: "https://www.smithsonianmag.com/arts-culture/stolen-how-the-mona-lisa-became-the-worlds-most-famous-painting-16406234/" },
    { title: "NPR：The theft that made the Mona Lisa a masterpiece", url: "https://www.npr.org/2011/07/30/138800110/the-theft-that-made-the-mona-lisa-a-masterpiece" },
    { title: "BBC：How the Mona Lisa was stolen", url: "https://www.bbc.com/news/magazine-25241576" },
    { title: "Archivio di Stato di Firenze：Vincenzo Peruggia", url: "https://archiviodistatofirenze.cultura.gov.it/asfi/mostre/vincenzo-peruggia" },
    { title: "INHA：Quand la Joconde rencontre les Demoiselles d'Avignon", url: "https://www.inha.fr/actualites/quand-la-joconde-rencontre-les-demoiselles-davignon/" },
    { title: "Artnet：The Louvre plans a room of its own for the Mona Lisa", url: "https://news.artnet.com/art-world/the-louvre-mona-lisa-own-room-2477679" },
  ],
};
