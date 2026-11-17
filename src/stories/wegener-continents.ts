import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const wegenerMap: Frame = {
  src: "frames/wegener-continents.jpg",
  alt: "黑白科学书页插图：从上到下画着三个椭圆形地球地图，最上面所有大陆拼成一整块，中间地球的大陆裂开细缝，最下面地球的大西洋张开，接近今天的世界地图",
  kind: "图表",
  by: "阿尔弗雷德·魏格纳（Alfred Wegener），1929 年《海陆的起源》第 4 版插图",
  license: "公有领域",
  commons: "File:De Wegener Kontinente 018.jpg",
  page: "https://commons.wikimedia.org/wiki/File:De_Wegener_Kontinente_018.jpg",
  note: "魏格纳 1915 年初版《海陆的起源》还没有这幅三阶段复原图；他在 1922 年第 3 版首次画出这组三联图，这里取自他生前最后修订的 1929 年德文第 4 版。",
};

const topGlobe = spot(0.5, 0.17, 0.45, "拼在一起的泛大陆");
const puzzleFit = spot(0.5, 0.2, 0.1, "南美洲贴着非洲", 2.6);
const indiaEarly = spot(0.63, 0.205, 0.06, "还在南边的印度", 2.8);
const midGlobe = spot(0.5, 0.47, 0.45, "开始裂开的地球");
const narrowAtlantic = spot(0.47, 0.49, 0.09, "刚裂开的窄大西洋", 2.6);
const bottomGlobe = spot(0.5, 0.76, 0.45, "接近今天的地球");
const indiaCrash = spot(0.69, 0.735, 0.06, "撞上亚洲的印度", 2.8);

const oceanFloor: Frame = {
  title: "玛丽·萨普与希曾绘出的全球海底地形图（1977，伯兰彩绘）",
  src: "frames/wegener-ocean-floor.jpg",
  alt: "彩色全球海底地形全景图：抽干海水后的大洋底部并非平坦，大西洋正中间蜿蜒着一条巨大的S形海底山脉和裂谷，与两岸大陆轮廓平行",
  kind: "地图",
  by: "玛丽·萨普（Marie Tharp）、布鲁斯·希曾（Bruce Heezen）测绘，海因里希·伯兰绘，美国国会图书馆藏",
  license: "CC0（美国国会图书馆无限制公开）",
  commons: "File:(Manuscript painting of Heezen-Tharp World ocean floor map by Berann).jpg",
  page: "https://commons.wikimedia.org/wiki/File:(Manuscript_painting_of_Heezen-Tharp_World_ocean_floor_map_by_Berann).jpg",
};
const midAtlanticRidge = spot(0.48, 0.52, 0.14, "大西洋中脊裂谷");

export const wegenerContinents: Story = {
  id: "wegener-continents",
  title: "把地球拼回一块大拼图",
  frameName: "魏格纳的大陆漂移图",
  year: 1929,
  when: "1912 年提出假说，插图出自 1929 年《海陆的起源》第 4 版",
  field: "地理",
  people: ["阿尔弗雷德·魏格纳", "玛丽·萨普", "哈里·赫斯"],
  teaser: "页面上从上到下画着三个地球：原来七大洲曾经抱成一整块超级大陆，连喜马拉雅山都是撞出来的！",
  frame: wegenerMap,
  lines: [
    nian("爸爸，这张图上有什么？怎么竖着画了三个地球，最上面那个地球陆地全挤成一团大面饼了！", { part: "这是什么图", look: topGlobe }),
    dad("这不是外星球，就是我们脚下的地球！大约三亿年前，地球上所有的陆地真的像拼图一样抱成一整块超级大陆，德国科学家魏格纳给它取名叫“泛大陆”，意思就是“全部的陆地”。"),
    nian("那中间和下面这两个地球呢？", { look: midGlobe }),
    dad("像放慢动作电影一样：中间这张，大面饼裂开了一道道缝；到最下面这张，裂缝越拉越宽变成了大洋，就渐渐长成今天世界地图的样子了。", { look: bottomGlobe }),

    nian("你快看最上面那张，南美洲鼓出来的尖角，正好塞进非洲凹进去的弯弯里！", { part: "撕碎的旧报纸", look: puzzleFit }),
    dad("你一眼就抓住了关键！其实早在魏格纳之前三百多年，就有制图师发现这两条海岸线像拼图；但魏格纳是第一个像侦探一样找齐证据的科学家。"),
    nian("光靠形状像，万一只是巧合呢？"),
    dad("魏格纳打过一个特别妙的比方：就像把一张撕成两半的报纸拼回去，不光撕口要对得上，连上面印的一行行字也能接着往下读，那就绝不是巧合了！"),
    nian("地球上的“字”是什么？"),
    dad("是岩石和化石！北美洲的山脉跟大西洋对岸苏格兰的山脉，岩石年龄一模一样；还有一种叫“中龙”的小淡水爬行动物，根本游不过咸咸的大海，化石却偏偏只出现在巴西和南非两边对得上的地方。"),
    nian("图上还能看出哪里动得最厉害？", { look: indiaEarly }),
    dad("看这儿！最上面那张图里，印度还远远贴在非洲和南极洲旁边；往下一路向北漂过印度洋，一头撞上亚洲大陆，把地面挤得高高隆起——那就是世界最高的喜马拉雅山！", { look: indiaCrash }),

    nian("这么酷的发现，别的科学家一定全都鼓掌了吧？", { part: "为什么大家不信他", look: narrowAtlantic }),
    dad("恰恰相反，好多地质学家笑话他是在“写地质童话”！首先魏格纳本来是乘热气球研究气象和极地的，在地质学界算个“外行”；更重要的是，有一道难题他真的答不上来。"),
    nian("什么难题？"),
    dad("他以为大陆像破冰船一样，硬生生犁开坚硬的海底岩石往前推。物理学家一算：地球自转和潮汐那点推力太小了，大陆要是硬撞海底，自己早碎成渣啦！"),
    nian("那魏格纳等到大家相信他的那一天了吗？", { look: "all" }),
    dad("没有。印出这张图的第二年，1930 年冬天，他在格陵兰冰原上顶着零下五十多度的严寒给队友送完补给，在满五十岁生日后不久安静地长眠在了冰雪里。"),

    nian("后来是谁帮他找到了答案？", { part: "海底的拉链与指甲盖", show: oceanFloor, look: midAtlanticRidge }),
    dad("过了二十多年，女地质制图师玛丽·萨普登场了！当时规定女人不许上科考船，她就在岸上把船测回来的海底深度一笔笔连成图，结果发现大西洋正中间有一条长长的海底山脉，山顶还裂开一道深谷！"),
    nian("她的同事相信了吗？"),
    dad("一开始她的搭档希曾也不信，笑她是“姑娘家的瞎聊”，因为那太像被批倒的大陆漂移了！可把海底地震的位置叠上去一看，地震全排在那道裂谷里。"),
    dad("科学家哈里·赫斯等人终于恍然大悟：大陆根本不是自己硬犁海底，而是海底裂谷不断涌出炽热岩浆凝成新海底，像超市收银台的传送带一样，驮着大陆往两边慢慢推开——这就是今天的“板块构造学说”！"),
    nian("现在我们脚底下的大陆还在漂吗？我怎么一点感觉都没有！", { show: wegenerMap, look: bottomGlobe }),
    dad("还在漂呢！大西洋每年大约变宽两三厘米，跟你的手指甲长长的速度差不多。等你从小宝宝长成大人，美洲和欧洲就悄悄离远了你一个身高那么多啦！"),
  ],
  remember: "魏格纳用海岸拼缝、跨洋化石和山脉提出了大陆漂移，三十年后玛丽·萨普画出的海底裂谷帮人们找到了“传送带”，证明板块每年都在以指甲生长般的速度移动。",
  facts: [
    ["这张图", "魏格纳《海陆的起源》1929 年第 4 版中的泛大陆三阶段分裂图"],
    ["提出时间", "1912 年首次演讲，1915 年出版专著，1922 年第 3 版首绘三联图"],
    ["关键证据", "大陆架拼合、跨大洋淡水化石（中龙、舌羊齿）、山脉对接与古冰川遗迹"],
    ["三十年后翻案", "1950—1960 年代玛丽·萨普发现大洋中脊裂谷，发展为板块构造学说"],
    ["移动速度", "每年约数厘米（大西洋每年约张开 2.5 厘米，接近指甲生长速度）"],
  ],
  sources: [
    { title: "美国地质调查局（USGS）：Alfred Lothar Wegener", url: "https://pubs.usgs.gov/gip/dynamic/wegener.html" },
    { title: "USGS《动态地球》：从大陆漂移到板块构造的历史", url: "https://pubs.usgs.gov/gip/dynamic/historical.html" },
    { title: "USGS FAQ：板块移动有多快？", url: "https://www.usgs.gov/faqs/how-fast-do-tectonic-plates-move" },
    { title: "NASA Earth Observatory：Alfred Wegener 传记", url: "https://earthobservatory.nasa.gov/features/Wegener" },
    { title: "哥伦比亚大学拉蒙特研究所：玛丽·萨普自述绘制海底地图", url: "https://lamont.columbia.edu/news/marie-tharps-adventures-mapping-seafloor-her-own-words" },
    { title: "英国地质学会：海岸线拼合与跨洋山脉证据", url: "https://www.geolsoc.org.uk/Plate-Tectonics/Chap1-Pioneers-of-Plate-Tectonics/Alfred-Wegener/Tectonic-Fit-of-Coastlines.html" },
    { title: "Wikimedia Commons：De Wegener Kontinente 018.jpg", url: "https://commons.wikimedia.org/wiki/File:De_Wegener_Kontinente_018.jpg" },
  ],
};
