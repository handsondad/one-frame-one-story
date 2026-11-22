import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const taizong = spot(0.74, 0.49, 0.075, "唐太宗");
const litter = spot(0.73, 0.63, 0.095, "步辇");
const maids = [spot(0.61, 0.61, 0.075, "抬辇的宫女"), spot(0.86, 0.63, 0.08)];
const canopy = [spot(0.7, 0.21, 0.105, "大掌扇"), spot(0.87, 0.14, 0.075, "红华盖")];
const threeGuests = spot(0.2, 0.55, 0.17, "左边的三个人");
const redOfficial = spot(0.33, 0.52, 0.075, "红袍官员");
const gar = spot(0.19, 0.55, 0.07, "禄东赞");
const robe = spot(0.19, 0.69, 0.06, "团花锦袍");
const whiteMan = spot(0.065, 0.56, 0.06, "白袍人");

export const bunianScroll: Story = {
  id: "bunian-scroll",
  title: "哪一位才是远方来的客人",
  frameName: "步辇图",
  year: 641,
  circa: true,
  when: "唐贞观十五年（641 年）前后；现存画卷一般认为是北宋摹本",
  field: "历史",
  people: ["阎立本", "唐太宗李世民", "禄东赞", "文成公主", "松赞干布"],
  teaser: "唐朝皇帝坐在一张没有轮子的椅子上，接见从青藏高原走了好几个月来的求亲使者。",
  frame: {
    src: "frames/bunian-scroll.jpg",
    alt: "古旧的绢画上没有背景：右边一位身材高大的胡须男子坐在红垫步辇上，九位宫女有的抬辇、有的举大扇和红伞盖；左边站着三个人，依次穿红袍、花锦袍和白袍",
    kind: "画",
    by: "传唐·阎立本绘（现存一般认为是北宋宫廷摹本），北京故宫博物院藏",
    license: "公有领域",
    commons: "File:Yan Liben. Emperor Taizong gives an audience to Gar, the ambassador of Tibet. Palace Museum, Beijing.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Yan_Liben._Emperor_Taizong_gives_an_audience_to_Gar,_the_ambassador_of_Tibet._Palace_Museum,_Beijing.jpg",
    note: "全卷左边还有宋代以来的许多题字，这里展示的是右边的画芯部分。多数书画鉴定家认为唐代原画早已失传，故宫现存这卷是九百多年前北宋的精细摹本。",
  },
  lines: [
    nian("爸爸，这张图上有什么？右边一个大胡子叔叔坐在小床上，好几个姐姐抬着他！", { part: "这是什么图", look: taizong }),
    dad("这位“大胡子叔叔”是唐朝的皇帝唐太宗李世民。这幅有名的古画叫《步辇图》，讲的是一千三百多年前长安皇宫里的一次见面。"),
    nian("他坐的为什么没有轮子，也不用马拉？", { look: litter }),
    dad("皇宫里有台阶、有院门，马车进出不方便。皇帝在宫里出门，就坐这种由人抬着走的矮榻，叫“步辇”，画的名字就是这么来的。"),
    nian("抬他的姐姐们看起来好小呀。", { look: maids }),
    dad("一共九位宫女，六个抬着木杆，两个举着大掌扇，一个撑着红华盖。古人画画不像照相机，谁最重要就把谁画得最大，所以唐太宗比宫女高出一大截。", { look: canopy }),

    nian("左边站着三个人，他们在干什么？", { part: "猜猜谁是客人", look: threeGuests }),
    dad("当时青藏高原上的吐蕃赞普松赞干布，派了大相禄东赞到长安来，向唐朝求娶公主。爸爸考考你：这三个人里，哪一位才是远道而来的禄东赞？"),
    nian("最前面穿大红衣服的那个！他站得最近。", { look: redOfficial }),
    dad("好多人第一眼都猜他，可猜错啦！大红圆领袍、黑色展脚官帽、手里捧着白笏板，这是标准的大唐官员打扮。他是负责带客人见皇帝的礼宾官。"),
    nian("那是中间这一个？", { look: gar }),
    dad("猜对了！你看他头发束着带子，脸瘦瘦的，一路从高原风尘仆仆赶来。他微微弯着腰，既恭敬，又一点也不慌张。"),
    nian("他的衣服上有好多圆圈花纹！", { look: robe }),
    dad("那叫团花锦袍，圆圈里织着小鸟和瑞兽，是当时西域和高原贵族很喜欢的花样。"),
    nian("最后面穿白衣服的又是谁？", { look: whiteMan }),
    dad("连故宫的专家都有两种猜法：有人看他没有胡子、穿白袍捧笏板，觉得是宫里的内侍官员；也有人觉得他是帮忙传话的翻译官。"),

    nian("皇帝答应把公主嫁过去了吗？", { part: "真事和传说", look: taizong }),
    dad("答应了。公元 641 年春天，文成公主带着书本、谷物种子、农具和工匠出发去吐蕃，在高原上生活了近四十年。"),
    nian("我听过一个故事：皇帝出了好多难题考使者，让蚂蚁带着丝线钻过弯弯曲曲的珠子！"),
    dad("那是西藏民间流传很广的“六试婚使”传说，故事编得特别巧：把蜂蜜涂在九曲明珠一头，蚂蚁闻着甜味就把丝线拉过去了。"),
    dad("不过唐朝的史书里没有写这些比赛，只记了一件真事：唐太宗夸禄东赞特别会回答问题，还想把皇族的姑娘嫁给他，留在长安做大官。"),
    nian("禄东赞愿意吗？", { look: gar }),
    dad("他恭恭敬敬地谢绝了。他说：我在家乡已经有父母替我娶的妻子，不能丢下她；而且我们赞普还没见到公主，我怎么敢先成亲呢？唐太宗听了更加佩服他。"),

    nian("画里怎么连一棵树、一面墙都没有？", { part: "九百年前的摹本", look: "all" }),
    dad("早期中国人物画常常留着空白的绢底，不画房子和树，让你专心看每个人的眼神和动作——画它的人，相传是唐朝大画家、后来还当了宰相的阎立本。"),
    nian("为什么说“相传”？"),
    dad("因为绢放了一千多年很容易脆裂。今天大多数书画鉴定家看它的丝绢织法和笔墨，认为故宫里这一卷，是九百多年前北宋画师照着唐朝原画一笔一笔临摹下来的。"),
    nian("摹本也很珍贵吗？"),
    dad("当然啦，多亏北宋人认真临摹，我们今天才能看见唐太宗和禄东赞见面的样子。清朝灭亡后，末代皇帝溥仪把它带出了紫禁城，后来在天津卖掉了。"),
    nian("那它不就丢了吗？"),
    dad("还好它一路躲过了战乱。新中国成立后，国家文物部门把它找了回来，交给故宫，从 1959 年起一直收藏在北京故宫博物院。"),
  ],
  remember: "《步辇图》记下了公元 641 年唐太宗接见吐蕃使者禄东赞的一幕：左边穿团花锦袍的中间那位才是客人，促成了文成公主入藏的佳话。",
  facts: [
    ["这张图", "《步辇图》画芯，绢本设色，纵 38.5 厘米、横 129 厘米"],
    ["画中大事", "640—641 年吐蕃大相禄东赞来长安求亲，迎接文成公主"],
    ["作者与版本", "传唐代阎立本绘；学界多认为现存卷为北宋摹本"],
    ["画里的人", "右边唐太宗与 9 位宫女，左边引见官、禄东赞与白袍侍从/译官"],
    ["今天在哪", "北京故宫博物院（1959 年入藏）"],
  ],
  sources: [
    { title: "故宫博物院藏品：《阎立本步辇图卷》", url: "https://www.dpm.org.cn/collection/paint/234620.html" },
    { title: "故宫名画记：《阎立本步辇图》高清大图", url: "https://minghuaji.dpm.org.cn/paint/detail?id=4b24c04a7a544661a1d523b98f74fdd3" },
    { title: "上海博物馆：唐·阎立本《步辇图》（北宋摹本考述）", url: "https://www.shanghaimuseum.net/mu/frontend/pg/article/id/P00002758" },
    { title: "《故宫博物院院刊》：《步辇图》流传考", url: "https://www.dpm.org.cn/Uploads/File/2018/06/05/u5b1666294a42e.pdf" },
    { title: "澎湃新闻：故宫祥开万象展中的《步辇图》与历史细节", url: "https://www.thepaper.cn/newsDetail_forward_22894317" },
    { title: "Britannica：Yan Liben", url: "https://www.britannica.com/biography/Yan-Liben" },
    { title: "Britannica：Srong-brtsan-sgam-po（松赞干布）", url: "https://www.britannica.com/biography/Srong-brtsan-sgam-po" },
    { title: "中国藏族网通：“六试婚使”民间故事渊源", url: "https://www.tibetcul.com/people/ls/gjms/23648.html" },
  ],
};
