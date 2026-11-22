import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const leftCol = spot(0.19, 0.45, 0.2, "左边一列");
const rightCol = spot(0.8, 0.4, 0.2, "右边一列");
const zhen = spot(0.172, 0.385, 0.045, "贞", 3.5);
const bu = spot(0.797, 0.289, 0.03, "卜", 4);
const crack = spot(0.695, 0.395, 0.07, "裂纹", 3);
const nums = [
  spot(0.684, 0.237, 0.035, "三"),
  spot(0.702, 0.356, 0.035, "四"),
  spot(0.702, 0.527, 0.035, "五"),
  spot(0.695, 0.633, 0.035, "六"),
];

export const oracleBone: Story = {
  id: "oracle-bone",
  title: "龟甲上的问题",
  frameName: "甲骨文龟甲",
  year: -1200,
  circa: true,
  when: "商朝武丁时期，约公元前 1200 年",
  field: "历史",
  people: ["商王武丁", "王懿荣", "刘鹗"],
  teaser: "三千多年前，商朝的国王把问题刻在龟甲上，留下了最早成体系的汉字。",
  frame: {
    src: "frames/oracle-bone.jpg",
    alt: "一整块黄褐色的乌龟腹甲，上面有粗粗的黑色拼缝，左右两边各刻着一竖列细小的古文字，旁边还有细细的裂纹和小记号",
    kind: "照片",
    by: "BabelStone 摄，中国国家博物馆藏",
    license: "CC BY-SA 3.0",
    commons: "File:Shang dynasty inscribed tortoise plastron.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Shang_dynasty_inscribed_tortoise_plastron.jpg",
  },
  lines: [
    nian("爸爸，这是一块石头吗？上面有好多裂缝。", { part: "这是什么图" }),
    dad("这是一块乌龟的腹甲，就是乌龟肚子底下那块平平的壳。它有三千多年了，是商朝的东西，现在在中国国家博物馆。"),
    nian("上面刻的是字吗？", { look: leftCol }),
    dad("是字，叫甲骨文。“甲”是龟甲，“骨”是牛的骨头。这是我们现在知道的、最早成体系的汉字。"),
    nian("我能认出来吗？"),
    dad("我们来试试。左边这一列从上往下读，右边还有一列，两边写的几乎一样。", { look: [leftCol, rightCol] }),

    nian("为什么写两遍？", { part: "问一个问题" }),
    dad("因为这是在问问题。左边问：“般会有灾祸吗？”右边问：“般没有灾祸吧？”同一件事，正着问一遍，反着又问一遍。"),
    nian("般是谁？"),
    dad("是商王武丁时候的一位贵族，常替商王带兵出去打仗。商王亲自为他问吉凶，说明很看重他。"),
    nian("这是问谁呀？", { look: "all" }),
    dad("商朝人相信，去世的祖先能看到将来的事，还能保佑后人。所以国王遇到大事小事，都要问一问。"),
    nian("都问些什么？"),
    dad("什么都问：明天下不下雨，今年收成好不好，去打猎能不能打到，有人生病了会不会好，打仗会不会赢。"),
    dad("有一片甲骨上问：今天下雨吗？雨从西边来？从东边来？从北边来？还是从南边来？像在问天气预报。"),

    nian("那祖先怎么回答呢？", { part: "会说话的裂纹" }),
    dad("靠裂纹。先在龟甲背面挖出一个个小坑，再用烧红的木棍去烫，正面就会“啪”地裂开一道纹。"),
    nian("裂纹在哪儿？", { look: crack }),
    dad("你看这儿细细的一道，横着伸出去，就是烫出来的裂纹。那些粗粗的黑线可不是，那是龟甲本来的拼缝和后来断开的地方。"),
    nian("裂纹长什么样？"),
    dad("一竖，旁边伸出一个小叉。右边那列字的第三个，就是“卜”，它就是照着裂纹的样子造出来的。", { look: bu }),
    nian("那怎么看出是好是坏？"),
    dad("由国王来看裂纹，说是吉还是凶。至于他们到底怎么看，今天已经没有人知道了。"),
    nian("旁边这些小记号是什么？", { look: nums }),
    dad("是数字！烫一次就记一个数。三道横是“三”，四道横是“四”，像沙漏的是“五”，像小屋顶的是“六”。同一个问题，他们一连烫了好几次。"),

    nian("还有我能认出来的字吗？", { part: "汉字的老祖宗" }),
    dad("你看这个字，像不像一只有脚的锅？", { look: zhen }),
    nian("像！"),
    dad("它是“贞”，意思是“问”。商朝人借了一种叫“鼎”的锅的样子来写它。它上面那个字是“古”，是占卜人的名字，“古贞”就是“古来问”。"),
    nian("他们的字和我们的不太一样。", { look: "all" }),
    dad("样子差别很大，可它们是我们今天汉字的老祖宗。很多字一开始就像小图画，后来一点点变成了今天的样子。"),
    nian("甲骨文一共有多少个字？"),
    dad("已经找到四千多个不同的字，专家们认出来的有一千五百多个。还有好多字，到今天也没人认得。"),

    nian("这些龟甲是怎么找到的？", { part: "药铺里的龙骨" }),
    dad("很早以前，河南安阳小屯村的农民常在地里挖到这种骨头，拿去卖给药铺当“龙骨”，说是能治病。"),
    nian("被当成药吃掉了？！"),
    dad("有不少被磨成了药粉。药铺不收有字的，农民还会先把字刮掉再卖。"),
    nian("那后来是谁认出来的？"),
    dad("1899 年前后，北京有一位大学问家叫王懿荣，从古董商手里看到了这些刻字的骨头，认出是很古老的文字，花大价钱买了下来。"),
    nian("我听说，他是生病吃药的时候发现的？"),
    dad("那是一个很有名的故事：说他抓药时在药里看到了字。不过专家查过，没有可靠的证据，更像是后来的人编出来的。"),
    nian("那后来呢？"),
    dad("他的朋友刘鹗接着收集，1903 年出了第一本印着甲骨文的书。再后来，大家找到了它们出土的地方，就是商朝的都城，叫殷墟。"),
    nian("殷墟挖出来很多吗？"),
    dad("1928 年起，考古学家在殷墟一次次发掘。1936 年，在一个坑里一下子找到了一万七千多片刻字的甲骨。"),
    nian("一万七千多片！"),
    dad("到现在，一共发现了大约十五万片。2017 年，甲骨文被列进了联合国的《世界记忆名录》。"),
  ],
  remember: "三千多年前，商朝人把问题刻在龟甲上：裂纹回答了问题，文字留了下来，成了汉字的老祖宗。",
  facts: [
    ["这张图", "刻着字的龟甲，商王武丁时期，中国国家博物馆藏"],
    ["上面写的", "戊午卜，古贞：般其有祸？（另一边：般亡祸？）"],
    ["发现", "1899 年前后，王懿荣认出甲骨上的古文字"],
    ["数量", "已发现大约十五万片甲骨"],
    ["字数", "四千多个不同的字，认出来的一千五百多个"],
  ],
  sources: [
    { title: "Wikimedia Commons：Shang dynasty inscribed tortoise plastron", url: "https://commons.wikimedia.org/wiki/File:Shang_dynasty_inscribed_tortoise_plastron.jpg" },
    { title: "中国国家博物馆：「王为般卜」刻辞龟甲", url: "https://www.chnmuseum.cn/zp/zpml/kgfjp/202108/t20210802_250929.shtml" },
    { title: "UNESCO Memory of the World：Chinese Oracle-Bone Inscriptions", url: "https://www.unesco.org/en/memory-world/chinese-oracle-bone-inscriptions" },
    { title: "中国社会科学网：甲骨文研究（2024）", url: "https://www.cssn.cn/skgz/bwyc/202408/t20240806_5768933.shtml" },
    { title: "Britannica：oracle bone", url: "https://www.britannica.com/topic/oracle-bone" },
    { title: "澎湃新闻：王懿荣与甲骨文的发现", url: "https://www.thepaper.cn/newsDetail_forward_8297008" },
    { title: "史语所历史文物陈列馆：甲骨文的占卜", url: "https://museum.sinica.edu.tw/resources/item/61/" },
  ],
};
