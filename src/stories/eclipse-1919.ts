import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const stars = [spot(0.83, 0.184, 0.045), spot(0.773, 0.23, 0.045), spot(0.088, 0.257, 0.045)];

export const eclipse1919: Story = {
  id: "eclipse-1919",
  title: "太阳把星光掰弯了",
  frameName: "日全食底片",
  year: 1919,
  when: "1919 年 5 月 29 日",
  field: "物理",
  people: ["阿瑟·爱丁顿", "弗兰克·戴森", "阿尔伯特·爱因斯坦"],
  teaser: "日全食那几分钟拍下的星星，悄悄挪了一点点位置。",
  frame: {
    src: "frames/eclipse-1919.jpg",
    alt: "黑色的圆盘被一圈白色日冕包围，右上和左边有几道小横线",
    kind: "照片",
    by: "戴森、爱丁顿、戴维森 1920 年论文中的底片",
    license: "公有领域",
    commons: "File:1919 eclipse positive.jpg",
    page: "https://commons.wikimedia.org/wiki/File:1919_eclipse_positive.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这是黑色的太阳吗？", { part: "这是什么图" }),
    dad("这是日全食。1919 年 5 月 29 日，月亮正好把太阳整个挡住，天一下子黑了，太阳周围只剩一圈白白的光，叫日冕。"),
    nian("日全食的时候拍照片干什么？"),
    dad("为了拍星星。平时白天太阳太亮，星星都被淹没了。只有日全食那几分钟，太阳旁边的星星才拍得到。"),
    nian("星星在哪？我只看见黑的白的。"),
    dad("看这几道小横线。底片上的星星太小，印出来看不清，科学家就在旁边画了小横线做记号，星星就在那儿。", { look: stars }),

    nian("为什么一定要拍太阳旁边的星星？", { part: "一个大胆的预言" }),
    dad("因为爱因斯坦提出了一个大胆的想法：很重很重的东西，会让周围的空间弯下去。星星的光从太阳旁边经过时，路线会被掰弯一点点。"),
    nian("光也会拐弯？"),
    dad("想象一张绷紧的蹦床，中间放一个大铅球，蹦床就凹下去了。你再滚一颗弹珠过去，它就会顺着凹坑拐个弯。太阳就是那个大铅球。"),
    nian("那星星的位置就会变？", { look: stars }),
    dad("对，看起来会往外挪一点点。有多小呢？差不多是在两公里外看一枚硬币那么小。"),
    nian("那也太小了！"),
    dad("所以要量得非常仔细。爱因斯坦算出来的数字，正好是按牛顿的老办法算出来的两倍。到底谁对，就看这次日全食了。"),

    dad("英国的天文学家派出了两支队伍：一支去巴西的索布拉尔，一支由爱丁顿带队，去非洲西海岸的小岛普林西比。", { part: "两支探险队" }),
    nian("为什么要跑那么远？"),
    dad("因为那次日全食，只有地球上一条窄窄的带子里才看得到。分成两队，是怕一边碰上坏天气。"),
    nian("碰上了吗？"),
    dad("普林西比那天上午下了大雨，乌云一直不散，爱丁顿急坏了。直到日全食快开始，云才散开一些，他赶紧拍。拍完他发了一封电报，只有几个词：“透过云层，有希望。”"),

    nian("量出来了吗？", { part: "结果" }),
    dad("他们回到英国，把日全食时拍的星星，和平时夜里拍的同一片星星比，一颗一颗地量。半年后，1919 年 11 月，宣布了结果：星光真的弯了，弯的程度和爱因斯坦算的很接近。"),
    nian("爱因斯坦赢了！"),
    dad("第二天，伦敦的报纸大标题写着：“科学的革命”。爱因斯坦一下子成了全世界最有名的科学家。"),
    nian("要是量出来不对呢？"),
    dad("有个学生真这么问过爱因斯坦。他说：“那我只好替亲爱的上帝感到遗憾了，这个理论是对的。”"),
    nian("他好自信啊。"),
    dad("自信是自信，不过科学还是要靠证据说话。后来的科学家用更好的仪器又测了很多次，结果都支持爱因斯坦。"),

    dad("还有一件让人感动的事：那时候第一次世界大战刚结束，英国和德国刚刚还是敌人。爱因斯坦在德国工作，而去验证他理论的，是英国的科学家。", { part: "战争刚刚结束" }),
    nian("科学不分敌人和朋友。"),
    dad("说得好，爱丁顿也是这么想的。"),
  ],
  remember: "太阳会把星光掰弯一点点——1919 年的日全食照片，帮爱因斯坦证明了这件事。",
  facts: [
    ["这张图", "1919 年日全食底片，横线标出了星星的位置"],
    ["拍摄", "英国派往巴西索布拉尔和非洲普林西比的两支观测队"],
    ["时间", "1919 年 5 月 29 日；11 月 6 日公布结果"],
    ["要量的", "星光经过太阳边上时偏折的角度"],
  ],
  sources: [
    { title: "Wikimedia Commons：1919 eclipse positive", url: "https://commons.wikimedia.org/wiki/File:1919_eclipse_positive.jpg" },
    { title: "St Andrews：The Controversial British-led Eclipse Expeditions of 1919", url: "https://eclipse-history.wp.st-andrews.ac.uk/the-controversial-british-led-eclipse-expeditions-of-1919-that-validated-general-relativity/" },
    { title: "arXiv：A Revolution in Science: the Eclipse Expeditions of 1919", url: "https://arxiv.org/abs/astro-ph/0102462" },
  ],
};
