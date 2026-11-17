import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const buddha = spot(0.63, 0.4, 0.13, "佛");
const canopy = spot(0.66, 0.11, 0.08, "华盖");
const subhuti = spot(0.335, 0.79, 0.07, "须菩提");
const nameTag = spot(0.27, 0.68, 0.03, "长老须菩提", 3.5);
const lions = [spot(0.37, 0.64, 0.05, "狮子"), spot(0.545, 0.85, 0.07, "狮子")];
const title = spot(0.03, 0.27, 0.06, "经名");
const prayer = spot(0.16, 0.5, 0.1, "念经前的话");

export const diamondSutra: Story = {
  id: "diamond-sutra",
  title: "印出来的经书",
  frameName: "敦煌《金刚经》",
  year: 868,
  when: "唐朝咸通九年（公元 868 年）",
  field: "技术",
  people: ["王玠", "王圆箓", "斯坦因"],
  teaser: "公元 868 年，一个人为父母印了一卷经：世界上有确切日期、保存完整的最早的印本书。",
  frame: {
    src: "frames/diamond-sutra.jpg",
    alt: "黑白木刻版画：佛坐在莲花座上讲经，头顶有华盖，周围站着弟子和护法，左下方一位老僧跪着合掌；画的左边是竖排的经文",
    kind: "版画",
    by: "王玠出资刻印，大英图书馆藏（Or.8210/P.2）",
    license: "公有领域",
    commons: "File:Jingangjing.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Jingangjing.jpg",
  },
  lines: [
    nian("爸爸，这幅画中间坐着的是谁？", { part: "这是什么图", look: buddha }),
    dad("是佛，坐在莲花座上，正在给大家讲道理。头顶上是华盖，就像一把装饰得很漂亮的大伞。", { look: canopy }),
    nian("下面跪着的老爷爷呢？", { look: subhuti }),
    dad("他是佛的弟子，叫须菩提。你看他旁边的小方框，里面就印着他的名字：长老须菩提。", { look: nameTag }),
    nian("名字直接写在画上！"),
    dad("对，像图片说明。画里还藏着两只狮子：一只蹲在他身后，一只趴在桌子前面。", { look: lions }),
    nian("这是画出来的吗？", { look: "all" }),
    dad("不是画的，是印出来的。这幅画是一卷经书最前面的插图。这卷经叫《金刚经》，是一千一百多年前、唐朝时候印的。"),

    nian("怎么印呀？", { part: "一个大印章" }),
    dad("先把字和画写在薄纸上，反过来贴到木板上。刻工照着把字周围的木头挖掉，字就凸出来了，不过是反的。"),
    nian("反的字？"),
    dad("对。然后在木板上刷墨，盖上纸，用刷子一刷，揭下来，字就变成正的了，就像我们盖印章。"),
    nian("一块木板就够了吗？"),
    dad("这卷经一共用了七张纸，每张都用一块木板印，再一张张粘起来，卷成一卷，大约五米长。"),
    nian("比两张床接起来还长！"),
    dad("第一张就是这幅画，后面都是字。画旁边这几行，是念经之前要先念的话。", { look: prayer }),
    dad("最左边这一行，才是经的名字：“金刚般若波罗蜜经”，再往后就是经文了。", { look: title }),
    nian("刻得好细啊。", { look: buddha }),
    dad("线条又细又匀。专家说，能刻得这么好，说明那时候雕版印刷已经发展了一两百年。"),

    nian("怎么知道它是哪一年印的？", { part: "最后一行字", look: "all" }),
    dad("经卷最后有一行字：“咸通九年四月十五日王玠为二亲敬造普施。”"),
    nian("什么意思？"),
    dad("咸通九年四月十五日，换成今天的日历，是公元 868 年 5 月 11 日。王玠是一个人的名字，他为了父母，恭恭敬敬地印了这卷经，送给大家。"),
    nian("他是为爸爸妈妈印的！"),
    dad("对。正因为写下了这个日子，它成了世界上有确切日期、保存完整的最早的印本书。"),
    nian("它不是最早的书吗？"),
    dad("比它早的印刷品也有，可要么只剩碎片，要么没写日子。又有日期、又完整的，它是最早的一本。"),
    nian("比别的国家早吗？"),
    dad("欧洲的古腾堡用金属活字印《圣经》，大约在 1455 年，比它晚了差不多六百年。中国的毕昇发明泥活字，也在它之后一百七十多年。"),

    nian("这卷经一直放在哪里？", { part: "藏经洞" }),
    dad("在甘肃敦煌的莫高窟。那里有一个小石窟，大约一千年前被人封了起来，里面藏了好几万件经卷和画。"),
    nian("谁发现的？"),
    dad("1900 年，看守石窟的王圆箓道士在清理沙子，发现墙后面有个小门，打开一看，满满一屋子经卷。后来大家叫它“藏经洞”。"),
    nian("那这卷经怎么到了英国？"),
    dad("1907 年，一个叫斯坦因的探险家来到敦煌，用几块银锭，从王道士手里换走了很多经卷和画，这卷《金刚经》就在里面。"),
    nian("王道士为什么给他？"),
    dad("王道士想修石窟，可是缺钱。他向官府报告过，没有人管。斯坦因自己当时也不知道这卷经有多珍贵。"),
    nian("我们是不是很难过？"),
    dad("很多中国人想到这件事都很心疼。有人说，敦煌是我国学术的伤心史；历史学家陈寅恪却说，留在国内的经卷也很珍贵，鼓励大家好好研究。"),
    nian("现在能看到它吗？"),
    dad("它在伦敦的大英图书馆。修复师花了一千多个小时把它修好，还拍成照片放在网上，谁都可以免费看。"),

    nian("《金刚经》讲的是什么？", { part: "像泡泡一样" }),
    dad("讲的是佛和须菩提的一段对话，劝人不要死死抓着东西不放。“金刚”就是钻石，意思是智慧像钻石一样，能切开心里的糊涂。"),
    nian("最后一页写了什么？"),
    dad("快结束的地方有一首小诗：“一切有为法，如梦幻泡影，如露亦如电。”意思是，世上的东西都在变，像梦，像泡泡，像露水，像闪电。"),
    nian("像泡泡一样……"),
    dad("可是这卷薄薄的纸经书，倒从 868 年一直留到了今天。"),
  ],
  remember: "一块块木板，一张张纸：公元 868 年，有人为父母印了一卷经，也把印刷术留在了时间里。",
  facts: [
    ["这张图", "《金刚经》卷首的佛说法图"],
    ["印成", "唐咸通九年四月十五日（公元 868 年 5 月 11 日）"],
    ["大小", "高约 27.6 厘米、长约 5 米，七张纸粘成"],
    ["发现", "1900 年，敦煌莫高窟藏经洞"],
    ["现藏", "伦敦大英图书馆（Or.8210/P.2）"],
  ],
  sources: [
    { title: "Wikimedia Commons：Jingangjing", url: "https://commons.wikimedia.org/wiki/File:Jingangjing.jpg" },
    { title: "British Library：The Diamond Sutra（存档）", url: "https://web.archive.org/web/20120709024228/www.bl.uk/onlinegallery/sacredtexts/diamondsutra.html" },
    { title: "International Dunhuang Programme：Or.8210/P.2", url: "https://idp.bl.uk/collection/51FDAEAFB4A24E2E9981692A98130BC8/" },
    { title: "IDP Blog：Wang Yuanlu, the first curator", url: "https://idp.bl.uk/blog/shaping-the-stein-collections-dunhuang-corpus-1-wang-yuanlu-the-first-curator/" },
    { title: "British Museum：Exploring the Silk Roads", url: "https://www.britishmuseum.org/collection/china/exploring-silk-roads" },
    { title: "澎湃新闻：荣新江谈敦煌学", url: "https://www.thepaper.cn/newsDetail_forward_34014484" },
    { title: "《梦溪笔谈》卷十八：毕昇活板", url: "https://www.quanxue.cn/ct_baijia/mengxi/mengxi126.html" },
    { title: "Britannica：Diamond Sutra", url: "https://www.britannica.com/topic/Diamond-Sutra" },
  ],
};
