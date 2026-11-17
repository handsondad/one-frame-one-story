import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const earth = spot(0.763, 0.562, 0.03, "地球", 4);

export const paleBlueDot: Story = {
  id: "pale-blue-dot",
  title: "那个小点，就是家",
  frameName: "暗淡蓝点",
  year: 1990,
  when: "1990 年 2 月 14 日",
  field: "天文",
  people: ["卡尔·萨根", "旅行者 1 号团队"],
  teaser: "从 60 亿公里外回头一望，地球只是光带里的一个小点。",
  frame: {
    src: "frames/pale-blue-dot.jpg",
    alt: "深色背景上几道彩色光带，右边光带中间有一个几乎看不见的小亮点",
    kind: "照片",
    by: "NASA / JPL，旅行者 1 号",
    license: "公有领域（NASA）",
    commons: "File:Pale Blue Dot.png",
    page: "https://commons.wikimedia.org/wiki/File:Pale_Blue_Dot.png",
    dark: true,
  },
  lines: [
    nian("爸爸，这张图什么都没有啊，就几道彩色的光。", { part: "这是什么图" }),
    dad("再仔细找找，右边那道光带里，有没有一个小小的点？"),
    nian("……找到了！一个很小很小的亮点。", { look: earth }),
    dad("那个小点，就是我们的地球。"),
    nian("啊？地球那么大，怎么只有一个点？"),

    dad("因为拍照的地方实在太远了。这张照片是“旅行者 1 号”探测器拍的。它 1977 年从地球出发，飞过木星、土星，一直往太阳系外面飞。", { part: "很远很远的地方" }),
    dad("1990 年 2 月 14 日，它离我们大约 60 亿公里。"),
    nian("60 亿公里有多远？"),
    dad("光是跑得最快的，一秒钟能绕地球七圈半。可从那里发出的光，也要跑五个半小时才能到地球。"),
    nian("那坐飞机呢？"),
    dad("坐飞机一刻不停地飞，要飞七百多年。"),

    nian("它为什么要回头拍地球？", { part: "回头看一眼" }),
    dad("是天文学家卡尔·萨根提议的。他说，应该让旅行者号回过头来，给我们的家拍一张照片。"),
    dad("这件事并不简单。从那么远看，地球离太阳太近了，就像在大灯泡旁边找一粒灰尘，弄不好强烈的阳光还会伤到相机。"),
    nian("后来拍成了吗？"),
    dad("拍成了。那天它给太阳系拍了一组“全家福”，一共 60 张，拍到了海王星、天王星、土星、木星、金星，还有地球。拍完地球 34 分钟以后，它的相机就永远关掉了，好给后面的旅程省电。"),
    nian("这是它拍的最后一组照片？"),
    dad("是的，就像临走前回头挥了挥手。"),

    nian("那这些彩色的光带是什么？", { part: "那些光带", look: spot(0.78, 0.5, 0.2) }),
    dad("是太阳光。太阳就在这张照片下面不远的地方，阳光在相机里面来回反射，变成了一道道光带。地球正好落在其中一道里，像被舞台的灯光照着。"),
    nian("真巧！", { look: earth }),
    dad("地球在照片里连一个像素都不到，只有零点一二个像素。"),
    nian("像素是什么？"),
    dad("照片是由很多很多小方格拼起来的，每一个小方格就叫一个像素。地球比一个小方格还要小。"),

    nian("我们都在那个小点上吗？", { part: "那个小点上" }),
    dad("都在。萨根后来写了一段很有名的话：“再看看那个点。那就是这里，那就是家，那就是我们。你爱的每一个人，你认识的每一个人，你听说过的每一个人，都在那上面过完了一生。”"),
    nian("小念和爸爸也在上面。"),
    dad("对。所以萨根说，我们要更友善地对待彼此，好好爱护这个暗淡的蓝点，因为它是我们唯一的家。"),

    nian("旅行者 1 号现在在哪儿？", { part: "它还在飞", look: "all" }),
    dad("它还在往前飞，已经飞出了太阳风吹到的范围，进入了恒星和恒星之间的空间，是离我们最远的人造物体。它身上还带着一张金唱片，录着地球上的声音和音乐，还有用 55 种语言说的“你好”。"),
  ],
  remember: "从 60 亿公里外看，地球只是一道光里的一个小点——那是我们所有人的家。",
  facts: [
    ["这张图", "暗淡蓝点，太阳系“全家福”里的一张"],
    ["拍摄", "旅行者 1 号窄角相机（NASA / JPL）"],
    ["时间", "1990 年 2 月 14 日"],
    ["距离", "离地球约 60 亿公里"],
    ["地球大小", "约 0.12 个像素"],
  ],
  sources: [
    { title: "Wikimedia Commons：Pale Blue Dot", url: "https://commons.wikimedia.org/wiki/File:Pale_Blue_Dot.png" },
    { title: "NASA：Voyager 1's Pale Blue Dot", url: "https://science.nasa.gov/mission/voyager/voyager-1s-pale-blue-dot/" },
    { title: "NASA：Pale Blue Dot Revisited", url: "https://science.nasa.gov/photojournal/pale-blue-dot-revisited/" },
  ],
};
