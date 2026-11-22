import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const terminator = spot(0.278, 0.5, 0.1);
const peaks = spot(0.805, 0.49, 0.06);
const crater = spot(0.277, 0.545, 0.05);

export const galileoMoon: Story = {
  id: "galileo-moon",
  title: "月亮上有山！",
  frameName: "伽利略的月面图",
  year: 1610,
  when: "1609 年底观察，1610 年 3 月出版",
  field: "天文",
  people: ["伽利略"],
  teaser: "伽利略把自己做的望远镜对准月亮，月亮不再是光溜溜的玻璃球。",
  frame: {
    src: "frames/galileo-moon.jpg",
    alt: "五个月亮的黑白版画，亮暗交界处坑坑洼洼",
    kind: "版画",
    by: "伽利略·伽利莱，《星际信使》插图",
    license: "公有领域",
    commons: "File:Galileo's sketches of the moon.png",
    page: "https://commons.wikimedia.org/wiki/File:Galileo%27s_sketches_of_the_moon.png",
  },
  lines: [
    nian("爸爸，这五个黑白球是什么？像五个没剥好的鸡蛋。", { part: "这是什么图" }),
    dad("哈哈，这是五个月亮。四百多年前，一个叫伽利略的意大利人用望远镜看月亮，把看到的样子画下来，印在一本小书里。"),
    nian("月亮为什么一半黑一半白？"),
    dad("那是月亮在不同日子的样子。月亮自己不发光，被太阳照到的那一面是亮的，背着太阳的那一面就是黑的。月牙、半个月亮，都是这么来的。"),

    dad("你仔细看黑白交界的那条线。", { part: "歪歪扭扭的交界线", look: terminator }),
    nian("是歪歪扭扭的！像锯齿。"),
    dad("这就是伽利略最惊讶的地方。那时候很多人相信，天上的东西都是完美的，月亮应该像打磨过的玻璃球一样光滑。要是月亮光溜溜的，这条线就该是平平滑滑的。"),
    nian("可它是坑坑洼洼的。"),
    dad("再看黑的那一边，是不是还有几个小亮点？", { look: peaks }),
    nian("黑的地方怎么会有亮点？"),
    dad("伽利略也琢磨了好久。他想到了地上的山：早上太阳刚出来的时候，山谷里还是黑的，可山尖已经被照亮了。月亮上的小亮点，就是高高的山尖先被太阳照到了。"),
    nian("所以月亮上有山！"),
    dad("对。他还根据亮点离交界线有多远，估算出月亮上的山有好几千米高。"),

    nian("这个大圆圈是什么？", { part: "那个大圆坑", look: crater }),
    dad("这是一个很大的环形坑，一边亮一边暗，就像地上的一个大碗被太阳斜着照。伽利略为了让大家看清楚，很可能故意把它画得比实际更大、更显眼。"),
    nian("画画也可以把重点放大啊。"),
    dad("是的，科学家画图，也是在讲道理。"),

    nian("他的望远镜是买的吗？", { part: "自己做的望远镜" }),
    dad("是他自己磨镜片做的。他听说荷兰有人做出了能把远处东西拉近的镜筒，就自己动手做，越做越好，最好的一台能放大二十倍左右。"),
    nian("二十倍有多大？"),
    dad("就好像月亮一下子飘到了离你近二十倍的地方。他用这台望远镜，还看到了木星旁边的四颗卫星，看到了银河其实是数不清的星星。"),
    nian("那他一定很开心。"),
    dad("开心，也有麻烦。有人不愿意相信，甚至不肯凑到望远镜前看一眼。伽利略的意思是：别光听我说，你们自己看。"),

    nian("现在我们知道月亮上真的有山吗？", { part: "后来呢" }),
    dad("真的有。1969 年，人类坐飞船登上了月球，亲眼看到了伽利略画过的那些山和坑。"),
    nian("我也想用望远镜看看月亮。"),
    dad("下次月亮是半个的时候，咱们就去看黑白交界那条线，那里的山和坑最清楚。"),
  ],
  remember: "别人说天上的东西都是完美的，伽利略说：我自己看过了，月亮上有山。",
  facts: [
    ["这张图", "《星际信使》里的月面版画"],
    ["作者", "伽利略·伽利莱（意大利）"],
    ["时间", "1609 年底观察，1610 年 3 月在威尼斯出版"],
    ["用的工具", "自己磨镜片做的望远镜，约放大 20 倍"],
  ],
  sources: [
    { title: "Wikimedia Commons：Galileo's sketches of the moon", url: "https://commons.wikimedia.org/wiki/File:Galileo%27s_sketches_of_the_moon.png" },
    { title: "Wikipedia：Sidereus Nuncius（星际信使）", url: "https://en.wikipedia.org/wiki/Sidereus_Nuncius" },
  ],
};
