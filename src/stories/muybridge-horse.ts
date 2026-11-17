import { dad, nian, spot } from "./lines.ts";
import type { Story } from "./types.ts";

export const muybridgeHorse: Story = {
  id: "muybridge-horse",
  title: "马会飞吗？",
  frameName: "奔跑的马",
  year: 1878,
  when: "1878 年 6 月 19 日",
  field: "技术",
  people: ["埃德沃德·迈布里奇", "利兰·斯坦福"],
  teaser: "十二台照相机排成一排，解开了一个大人们争了很久的问题。",
  frame: {
    src: "frames/muybridge-horse.jpg",
    alt: "三行十二格的照片，一匹马和骑手奔跑的剪影，背景有竖线和数字",
    kind: "照片",
    by: "埃德沃德·迈布里奇",
    license: "公有领域",
    commons: "File:The Horse in Motion high res.jpg",
    page: "https://commons.wikimedia.org/wiki/File:The_Horse_in_Motion_high_res.jpg",
  },
  lines: [
    nian("爸爸，这是连环画吗？一匹马，好多格。", { part: "这是什么图" }),
    dad("很像连环画，不过每一格都是真正的照片。1878 年 6 月，在美国加利福尼亚，摄影师迈布里奇拍下了一匹奔跑的马。马的名字就印在下面，叫“莎莉·加德纳”。", { look: spot(0.36, 0.93, 0.14) }),
    nian("为什么要拍那么多张？", { look: "all" }),
    dad("因为大人们在争一个问题：马飞快奔跑的时候，会不会有一瞬间，四只脚全都离开地面？"),
    nian("盯着看不就知道了吗？"),
    dad("马跑得太快了，腿一晃就过去，眼睛根本跟不上。有人说一定会腾空，有人说不可能，总得有一只脚踩着地，不然马就摔倒了。"),

    nian("那他是怎么拍的？", { part: "十二台照相机" }),
    dad("那时候的照相机很慢，拍一张照片常常要一动不动地等好一会儿。迈布里奇想了个办法：在跑道边上排了十二台照相机，跑道上横着拉了十二根细线。"),
    nian("马一碰到线，照相机就“咔嚓”？"),
    dad("就是这样。每根线连着一台照相机的快门，马跑过去碰到一根，就拍一张。下面的说明写着，每张照片的曝光时间不到两千分之一秒，快到能把奔跑的马“定住”。", { look: spot(0.5, 0.97, 0.3) }),
    nian("后面那些竖线和数字呢？", { look: spot(0.14, 0.15, 0.13) }),
    dad("马身后的墙上画着一格一格的线，能看出马每一下跑了多远。说明里写着，竖线之间隔二十七英寸，差不多七十厘米。"),

    nian("那找到四只脚都离地的照片了吗？", { part: "答案", look: "all" }),
    dad("你自己找找。"),
    nian("这张！第二格，四只脚都缩在肚子下面，没有一只碰到地！", { look: spot(0.37, 0.15, 0.13, "第 2 格") }),
    dad("找得真准，第三格也差不多。所以答案是：会！马跑起来，真的有一瞬间是“飞”着的。", { look: [spot(0.37, 0.15, 0.12, "第 2 格"), spot(0.61, 0.15, 0.12, "第 3 格")] }),
    nian("耶！"),
    dad("还有一个意外：腾空的那一刻，马的四条腿是收在肚子下面的。以前很多画里，马飞奔时前腿往前伸、后腿往后蹬，像一只跳起来的大兔子，那其实是想象出来的。"),
    nian("原来画家都画错了。"),
    dad("眼睛骗了大家很多年。照片出来以后，人们画马的方法也慢慢改了。"),

    nian("我听说他们打赌了，赌了好多钱。", { part: "传说和真相" }),
    dad("这个故事流传很广，说铁路大亨斯坦福为了这个问题和人打了两万五千美元的赌。可是研究历史的人找来找去，都没找到打赌的证据，很可能是后来编出来的。"),
    nian("那斯坦福为什么要拍？"),
    dad("他养了很多马，想弄明白马到底是怎么跑的，好训练出更快的马。拍照的地方是他的农场，后来他在这片农场上办了一所大学，就是今天的斯坦福大学。"),

    nian("如果把这些照片一张一张很快地翻过去……", { part: "会动的照片" }),
    dad("马就会跑起来！迈布里奇后来真做了一台机器，把照片里的马画在玻璃圆盘上，转起来投到墙上，马就在墙上跑。"),
    nian("那不就是动画片吗！"),
    dad("没错，这是电影的老祖宗之一。今天你看的动画和电影，也都是一张张画面快速连起来的。"),
  ],
  remember: "眼睛看不清的一瞬间，照相机帮我们“停住”了：马奔跑时，真的会四脚离地。",
  facts: [
    ["这张图", "《奔跑的马》，12 格连续照片"],
    ["作者", "埃德沃德·迈布里奇（英国出生，在美国工作）"],
    ["时间、地点", "1878 年 6 月 19 日，加利福尼亚帕洛阿尔托"],
    ["曝光", "每张不到 1/2000 秒（照片说明里写的）"],
  ],
  sources: [
    { title: "Wikimedia Commons：The Horse in Motion", url: "https://commons.wikimedia.org/wiki/File:The_Horse_in_Motion_high_res.jpg" },
    { title: "美国国会图书馆：The Horse in motion", url: "https://www.loc.gov/item/97502309/" },
    { title: "Stanford Magazine：The Man Who Stopped Time", url: "https://stanfordmag.org/contents/the-man-who-stopped-time/" },
    { title: "Smarthistory：Eadweard Muybridge, The Horse in Motion", url: "https://smarthistory.org/eadweard-muybridge-the-horse-in-motion/" },
  ],
};
