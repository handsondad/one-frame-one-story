import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/turing-portrait.jpg",
  alt: "黑白半身肖像照：三十八岁的艾伦·图灵身穿粗花呢西装、白衬衫和深色领带，偏分黑发略显随性，目光沉静深邃地望向左前方",
  kind: "照片",
  by: "伦敦 Elliott & Fry 照相馆 1951 年 3 月 29 日摄（当选英国皇家学会院士留影）",
  license: "公有领域（英国匿名摄影满 70 年期满，Wikimedia Commons 收录）",
  commons: "File:Alan Turing (1951).jpg",
  page: "https://commons.wikimedia.org/wiki/File:Alan_Turing_(1951).jpg",
};

const face = spot(0.47, 0.39, 0.2, "图灵的脸");
const eyes = spot(0.44, 0.35, 0.11, "沉思的眼神");
const hair = spot(0.5, 0.18, 0.16, "随性的偏分黑发");
const jacket = spot(0.47, 0.72, 0.12, "西装与领带");

const bombePhoto: Frame = {
  title: "按图灵原图纸重建的布莱切利园“炸弹机（Bombe）”密码破译机",
  src: "frames/turing-bombe.jpg",
  alt: "彩色实景照片：一整面金属大机柜上整整齐齐排列着三层共一百零八个红、蓝、黄三色圆形转鼓，右侧装有金色指示轮和开关面板",
  kind: "照片",
  by: "TedColes 摄于英国布莱切利庄园国家计算机博物馆（重建机“凤凰号”）",
  license: "CC0（公有领域贡献）",
  commons: "File:RebuiltBombeFrontView.jpg",
  page: "https://commons.wikimedia.org/wiki/File:RebuiltBombeFrontView.jpg",
};

const tripletDrums = spot(0.33, 0.25, 0.095, "三个一组的转鼓");
const coloredDrums = [spot(0.5, 0.18, 0.05, "蓝圈转鼓"), spot(0.5, 0.52, 0.05, "红圈转鼓"), spot(0.5, 0.74, 0.05, "黄圈转鼓")];
const rightDial = spot(0.88, 0.48, 0.085, "右侧停机指示盘");

export const turingPortrait: Story = {
  id: "turing-portrait",
  title: "用一条假想纸带发明现代计算机的长跑健将",
  frameName: "艾伦·图灵肖像",
  year: 1951,
  when: "1951 年 3 月 29 日，英国伦敦（图灵时年 38 岁）",
  field: "数学",
  people: ["艾伦·图灵", "戈登·韦尔奇曼", "琼·克拉克", "马里安·雷耶夫斯基"],
  teaser: "二十四岁在脑海里想出一条带方格的无限长纸带，就画出了今天所有电脑和手机的灵魂蓝图；跑马拉松差一点进奥运会的他，还在追问“机器能不能思考”。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一个穿西装、系领带的年轻叔叔，眼睛望着旁边，好像在心里默算什么难题！", { part: "这是什么图", look: face }),
    dad("他叫艾伦·图灵，英国数学家，也是现代计算机科学和人工智能真正的奠基人！1951 年拍这张照片时他刚当选英国皇家学会院士，今天英国最大面额的 50 英镑钞票背面，印的就是这张照片。", { look: eyes }),
    nian("他看起来文文静静的，平时只坐在屋里算题吗？", { look: hair }),
    dad("你可别小瞧他的体力！13 岁开学第一天遇上大罢工没火车，他一个人骑自行车骑了将近一百千米去学校报到；长大后想不通数学题，他就换上跑鞋去跑马拉松——最好成绩 2 小时 46 分 03 秒，只比第二年伦敦奥运会冠军慢十一分钟！", { look: jacket }),

    nian("那时候还没有我们家这样的电脑吧？他是怎么发明计算机的？", { part: "脑海里的方格纸带", look: eyes }),
    dad("最神奇的就在这儿：1936 年，24 岁的图灵连一颗螺丝钉都没拧，先在数学论文里“想象”出了一台极简单的机器，后人叫它“图灵机”！"),
    nian("假想的机器长什么样？"),
    dad("只有三样东西：一条画满小方格的长纸带、一个能读能擦能写 0 和 1 的小读写头，再加上一张写好规则的小卡片。"),
    dad("在图灵之前，机器都是“一把钥匙开一把锁”，算加法的机器干不了别的；图灵却证明，只要把不同任务的规则也写成 0 和 1 印在纸带上，同一台通用图灵机就能学会干任何可计算的事——今天你平板电脑上装不同软件就能画画、下棋、听故事，底层全都是他那条纸带的主意！"),

    nian("后来他真的造出大机器了吗？", { part: "咔哒作响的密码破译机", show: bombePhoto, look: tripletDrums }),
    dad("第二次世界大战爆发后，德军用一种叫“恩尼格玛”的密码机发报，每天半夜换一套密码，可能的变化多达上万亿亿种，人工几辈子也试不完！"),
    dad("早在开战前，三位聪明的波兰数学家雷耶夫斯基等人最先用数学撕开了早期恩尼格玛的缺口，在战争爆发前夕把成果无私交给了英法盟友。接着德军把密码机升级得更复杂，图灵和伙伴韦尔奇曼就在英国布莱切利庄园设计出了这台两米宽、一吨重的机电破译机——“炸弹机”！"),
    nian("哇，墙上怎么挂满了红圈、蓝圈、黄圈的大圆盘？", { look: coloredDrums }),
    dad("竖着的三个圆鼓算一组，模仿一台德国密码机，整面墙一共装了 36 组、108 个大转鼓！开动起来飞速旋转，声音像上千根毛衣针一起咔哒响，把不可能的组合成批排除掉。"),
    dad("一旦撞上符合逻辑的密码线索，机器就会“咔哒”自动停下，值班的女兵立刻从右边指示盘抄下字母！当时庄园里近万名工作人员四分之三是女性。历史学家估计，大家的努力可能让战争缩短了多达两年，救下了千千万万人的生命，却严守机密几十年没向外人提起半个字。", { look: rightDial }),

    nian("战争结束以后，他又研究了什么好玩的问题？", { part: "机器能思考吗，豹子为什么长斑点", show: portrait, look: face }),
    dad("1950 年，他在论文开头第一句就问：“我提议考虑这样一个问题——机器能思考吗？”他设计了著名的“模仿游戏”，也就是今天的“图灵测试”：如果人隔着屏幕打字聊天，分不清对面是真人还是机器，那机器就算很聪明啦！"),
    dad("一百年前的阿达·洛夫莱斯说过，机器只会照人的吩咐做事。图灵在同一篇论文里专门回应了她，说机器也可能做出让人吃惊的事。"),
    nian("他还研究过小动物？"),
    dad("是呀！1952 年他用数学方程说明：动物身上的条纹和斑点，可以自己一点点长出来！后来他又用计算机研究向日葵盘里的瓜子为什么排成螺旋，可惜没来得及做完。"),
    nian("这么了不起的人，后来过得好吗？", { look: "all" }),
    dad("有一段让人难过的事：因为当时英国一条不公平的旧法律，他在 1952 年受到不公正的惩罚，1954 年才 41 岁就早早去世了。网上常说苹果公司的缺口苹果标志是为了纪念他床边的苹果，设计师其实澄清过那只是巧合。"),
    dad("半个多世纪后，英国政府正式向他公开道歉、恢复名誉，还把他的照片和向日葵螺旋图案一起印上了 50 英镑钞票；今天全世界计算机界的最高荣誉，也叫“图灵奖”！"),
  ],
  remember: "图灵在二十四岁想出了奠定现代计算机原理的“通用图灵机”，二战时领衔设计机电破译机守护生命，并开启了人工智能与生物斑纹数学的大门。",
  facts: [
    ["这张图", "1951 年图灵当选英国皇家学会院士肖像（印于 50 英镑纸币），及重建“炸弹机”"],
    ["生卒年份", "1912 年 6 月 23 日（伦敦）— 1954 年 6 月 7 日（柴郡威尔姆斯洛）"],
    ["核心贡献", "通用图灵机与可计算性理论（1936）、领衔设计恩尼格玛破译机 Bombe、图灵测试（1950）、形态发生方程（1952）"],
    ["隐藏技能", "长跑健将，1947 年马拉松跑出 2 小时 46 分 03 秒，接近奥运选拔水准"],
    ["后世纪念", "计算机界最高荣誉“图灵奖”（1966 设立）；2009 年英国首相正式道歉、2013 年获皇家赦免"],
  ],
  sources: [
    { title: "布莱切利庄园官网：关于图灵的十件事", url: "https://www.bletchleypark.org.uk/our-story/10-things-to-know-about-alan-turing/" },
    { title: "布莱切利庄园官网：Bombe 破译机的六个事实与波兰先驱贡献", url: "https://www.bletchleypark.org.uk/our-story/6-facts-about-the-bombe/" },
    { title: "斯坦福哲学百科全书（SEP）：Alan Turing 学术贡献综述", url: "https://plato.stanford.edu/entries/turing/" },
    { title: "英格兰银行（2021）：印有图灵肖像与二进制纸带的新版 50 英镑纸币", url: "https://www.bankofengland.co.uk/news/2021/march/the-new-50-note-unveiled" },
    { title: "伦敦科学博物馆：The Spirit of Alan Turing", url: "https://blog.sciencemuseum.org.uk/the-spirit-of-alan-turing/" },
    { title: "Wikimedia Commons：RebuiltBombeFrontView.jpg", url: "https://commons.wikimedia.org/wiki/File:RebuiltBombeFrontView.jpg" },
  ],
};
