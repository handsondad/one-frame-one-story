import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

const earth = spot(0.568, 0.515, 0.09, "地球", 3);
const moon = spot(0.5, 0.86, 0.4, "月球表面");

export const earthrise: Story = {
  id: "earthrise",
  title: "从月亮上看地球升起",
  frameName: "地出",
  year: 1968,
  when: "1968 年 12 月 24 日",
  field: "技术",
  people: ["比尔·安德斯", "弗兰克·博尔曼", "吉姆·洛弗尔"],
  teaser: "飞去探索月亮，最重要的发现却是地球。",
  frame: {
    src: "frames/earthrise.jpg",
    alt: "黑色太空里，半个蓝白色的地球悬在灰色的月球地平线上方",
    kind: "照片",
    by: "NASA / 比尔·安德斯",
    license: "公有领域",
    commons: "File:NASA-Apollo8-Dec24-Earthrise.jpg",
    page: "https://commons.wikimedia.org/wiki/File:NASA-Apollo8-Dec24-Earthrise.jpg",
    dark: true,
  },
  lines: [
    nian("爸爸，这是在月亮上看到的地球吗？", { part: "这是什么图" }),
    dad("对。下面灰灰的是月球表面，上面那个蓝白色的就是地球。这张照片叫“地出”，就像“日出”一样，是地球从月亮的地平线上升起来。", { look: [moon, earth] }),
    nian("谁拍的？"),
    dad("1968 年 12 月 24 日，美国阿波罗 8 号飞船上的宇航员比尔·安德斯拍的。那天正好是平安夜。"),

    nian("他们在月亮上走路了吗？", { part: "第一次飞到月亮", look: moon }),
    dad("没有。阿波罗 8 号没有降落，它是第一艘载着人绕月亮飞的飞船。船上三个人：博尔曼、洛弗尔和安德斯。"),
    nian("那他们去干什么？"),
    dad("试飞船，看看人能不能安全地飞到月亮再回来；还要给月面拍照，给以后登月找地方。安德斯的任务就是拍月亮。"),
    nian("只拍月亮，不拍地球？"),
    dad("飞行计划里根本没有拍地球这一项。后来安德斯说，他也想不通为什么，大概是大家一心只想着月亮。"),

    nian("那这张是怎么拍到的？", { part: "差点错过", look: "all" }),
    dad("飞船一圈一圈绕着月亮飞，这是第四圈。博尔曼正在给飞船转方向，地球忽然出现在安德斯的窗外。", { look: earth }),
    nian("他说什么了？"),
    dad("飞船上的录音机录下来了。他喊：“天哪，快看那边！地球升起来了。哇，真漂亮！”"),
    nian("然后就咔嚓了？"),
    dad("他先用手里的相机拍了一张，可里面装的是黑白胶卷。他赶紧喊洛弗尔：“快给我一卷彩色的！快！”"),
    nian("快快快！"),
    dad("洛弗尔翻了半天，找到一卷彩色胶卷递过去。安德斯装好相机，连拍了两张。我们看到的这张，就是其中一张。", { look: "all" }),
    nian("要是没找到彩色胶卷呢？"),
    dad("那我们就只有一张黑白的地出了。洛弗尔急着问他拍到没有，安德斯说：“放心，它还会再升起来的。”"),

    nian("地球为什么只有半个？", { part: "另一半去哪了", look: earth }),
    dad("另一半其实也在，只是那边正是夜里，没有太阳照着，黑黑的跟太空混在一起了。"),
    nian("原来那边的人在睡觉！"),
    dad("对。亮的这一边是白天：白色的是云，蓝色的是海洋。"),
    nian("月亮上怎么这么多坑？", { look: moon }),
    dad("那是陨石撞出来的坑。月亮上没有空气，也没有风雨，很久很久以前撞出来的坑都还留着。"),

    nian("地球是从下面往上升的吗？", { part: "哪边是上", look: "all" }),
    dad("告诉你个小秘密：安德斯拍的时候，月亮的地平线是竖着的，地球在它旁边。后来人们把照片转了 90 度，看起来就像日出了。"),
    nian("太空里没有上下吗？"),
    dad("没有。飘在太空里，哪边是上，全看你怎么摆。"),

    nian("大家看到这张照片怎么想？", { part: "发现了地球" }),
    dad("很多人第一次觉得，地球那么小、那么孤单，又那么美。四周全是黑的，只有它是蓝色的。", { look: earth }),
    nian("跟“暗淡蓝点”有点像！"),
    dad("对，那张是二十多年后旅行者 1 号拍的。“地出”上了杂志、上了邮票，很多人说，是它让大家开始想要好好保护地球。", { look: "all" }),
    nian("是它让大家过地球日的吗？"),
    dad("1970 年 4 月 22 日，美国办了第一个地球日，大约两千万人走上街头，要求保护空气和河流。很多人说，地出这样的照片也出了一份力。"),
    dad("不过地球日不是一张照片变出来的。发起的人主要是看到了海上漏油、读了讲农药危害的书《寂静的春天》，才想把大家叫到一起。"),
    dad("安德斯后来说：“我们大老远跑来探索月亮，最重要的却是发现了地球。”"),
    nian("去看月亮，结果看见了地球。"),
  ],
  remember: "去探索月亮的人，回头看了一眼——那一眼让所有人重新认识了地球。",
  facts: [
    ["这张图", "“地出”，NASA 编号 AS08-14-2383"],
    ["拍摄", "比尔·安德斯，阿波罗 8 号绕月第四圈"],
    ["时间", "1968 年 12 月 24 日"],
    ["相机", "哈苏相机、长焦镜头、彩色胶卷"],
    ["小秘密", "原照片里月球地平线是竖着的，发表时转了 90 度"],
  ],
  sources: [
    { title: "Wikimedia Commons：NASA-Apollo8-Dec24-Earthrise", url: "https://commons.wikimedia.org/wiki/File:NASA-Apollo8-Dec24-Earthrise.jpg" },
    { title: "NASA Science：The Story Behind Apollo 8's Famous Earthrise Photo", url: "https://science.nasa.gov/resource/the-story-behind-apollo-8s-famous-earthrise-photo/" },
    { title: "Apollo 8 Flight Journal：Day 4, Lunar Orbits 4, 5 and 6", url: "https://web.archive.org/web/20071002204030/https:/history.nasa.gov/ap08fj/14day4_orbits456.htm" },
    { title: "BackStory：Earthrise, Behind the Lens（安德斯访谈）", url: "https://backstory.newamericanhistory.org/episodes/moon-man-myths/6/" },
    { title: "EARTHDAY.ORG：The History of Earth Day", url: "https://www.earthday.org/history/" },
    { title: "NASA JPL：NASA Celebrates Earth Day With Downloadable Art", url: "https://www.nasa.gov/centers-and-facilities/jpl/nasa-celebrates-earth-day-with-downloadable-art/" },
    { title: "National Air and Space Museum：Earth Day and Spaceflight", url: "https://airandspace.si.edu/stories/editorial/earth-day-and-spaceflight" },
  ],
};
