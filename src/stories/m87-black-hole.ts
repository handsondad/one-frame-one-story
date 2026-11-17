import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

export const m87BlackHole: Story = {
  id: "m87-black-hole",
  title: "给黑洞拍张照",
  frameName: "M87 黑洞",
  year: 2019,
  when: "2019 年 4 月 10 日公布",
  field: "天文",
  people: ["事件视界望远镜合作组织"],
  teaser: "八台望远镜连成一台“地球那么大”的望远镜，拍下了第一张黑洞照片。",
  frame: {
    src: "frames/m87-black-hole.jpg",
    alt: "黑色背景上一个橙色的发光圆环，中间是暗的，下半边更亮",
    kind: "照片",
    by: "事件视界望远镜合作组织（EHT Collaboration）",
    license: "CC BY 4.0",
    commons: "File:Black hole - Messier 87 crop max res.jpg",
    page: "https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87_crop_max_res.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这个像一个橘色的甜甜圈！", { part: "这是什么图" }),
    dad("很多人第一眼都这么说。这是人类拍到的第一张黑洞照片，2019 年 4 月 10 日公布的。"),
    nian("黑洞在哪？"),
    dad("中间那块暗暗的地方。", { look: spot(0.5, 0.45, 0.1) }),

    nian("黑洞是什么？是一个洞吗？", { part: "光都逃不出来" }),
    dad("不是洞，是一个特别特别重、又挤得特别特别小的东西。它的引力大到连光跑到它附近都逃不出来。"),
    nian("光都逃不出来，那怎么拍得到？"),
    dad("好问题！我们拍到的其实是黑洞的“影子”。黑洞周围有很多气体，绕着它飞快地转，热得发光。光被黑洞的引力掰弯，绕成一个亮环，中间光逃不出来的那块，就是黑黑的影子。", { look: spot(0.51, 0.5, 0.25) }),
    nian("光被掰弯——是不是和爱因斯坦日全食那个故事一样？"),
    dad("你记得真牢！就是同一个道理。爱因斯坦的理论早就算出了黑洞的影子大概是什么样子，这张照片正好对上了。"),
    nian("为什么下面比上面亮？", { look: spot(0.52, 0.57, 0.12) }),
    dad("因为气体在绕着黑洞转，朝我们这边冲过来的那一边看起来更亮，就像迎面开来的车灯更晃眼。"),

    nian("这个黑洞在哪？", { part: "又远又重", look: "all" }),
    dad("在一个叫 M87 的星系中间，离我们 5500 万光年。我们现在看到的光，是 5500 万年前出发的，那时候恐龙已经灭绝一千多万年了。"),
    nian("它有多重？"),
    dad("有 65 亿个太阳那么重。"),

    nian("什么望远镜能看那么远？", { part: "地球那么大的望远镜" }),
    dad("它离得太远，看起来特别小，就好像站在地球上，想看清月亮上的一个橙子。要看清这么小的东西，望远镜得有整个地球那么大。"),
    nian("没有那么大的望远镜啊！"),
    dad("所以科学家想了个聪明的办法：把分散在地球各地的八台射电望远镜——在夏威夷、智利、墨西哥、西班牙、美国亚利桑那，还有南极——在同一时间对准同一个地方，再把数据合起来，就像一台和地球一样大的望远镜。"),
    nian("它们怎么知道是同一时间？"),
    dad("每台望远镜旁边都放着非常非常准的原子钟。2017 年 4 月，它们一起看了好几个晚上。"),

    nian("拍完马上就能看了吗？", { part: "坐飞机的硬盘" }),
    dad("没有。数据太多了，一台望远镜一天就能记下大约 350 TB，比你的平板电脑能装下的多上千倍。用网络传太慢，科学家干脆把硬盘装进箱子，坐飞机运到美国和德国的超级计算机那里。"),
    nian("硬盘坐飞机！"),
    dad("南极的硬盘还得等南极的冬天过去、飞机能飞了才运出来。然后两百多位科学家分成几个小组，各自用不同的方法把图像算出来，互相不许偷看，最后一对，都是一个亮环中间一块影子，才放心公布。"),
    nian("不许偷看，是怕互相影响吗？"),
    dad("对，这样大家才能相信，看到的是真的，而不是自己想看到的。"),

    nian("还会有更多黑洞照片吗？", { part: "后来呢" }),
    dad("已经有了。2022 年，他们又公布了我们银河系中心那个黑洞的照片。望远镜会越来越多，以后还会拍得更清楚。"),
  ],
  remember: "八台望远镜连成一台“地球那么大”的望远镜，拍下了连光都逃不出来的黑洞的影子。",
  facts: [
    ["这张图", "M87 星系中心黑洞的影子"],
    ["拍摄", "事件视界望远镜（8 台射电望远镜）"],
    ["时间", "2017 年 4 月观测，2019 年 4 月 10 日公布"],
    ["距离", "5500 万光年"],
    ["质量", "约 65 亿个太阳"],
  ],
  sources: [
    { title: "Wikimedia Commons：Black hole - Messier 87", url: "https://commons.wikimedia.org/wiki/File:Black_hole_-_Messier_87_crop_max_res.jpg" },
    { title: "ESO：Astronomers Capture First Image of a Black Hole", url: "https://www.eso.org/public/news/eso1907/" },
    { title: "MIT News：Working together as a “virtual telescope”", url: "https://news.mit.edu/2019/mit-haystack-first-image-black-hole-0410" },
    { title: "EHT：数据量和运输", url: "https://eventhorizontelescope.org/faq/how-much-data-recorded-during-observation-and-how-it-transferred-central-processing" },
  ],
};
