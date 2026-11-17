import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const portrait: Frame = {
  src: "frames/lavoisier-lab.jpg",
  alt: "巨幅古典油画：穿白裙的玛丽-安娜站在红丝绒书桌旁，一手搭在穿黑衣坐着写字的丈夫拉瓦锡肩上；桌上和右下角地板上摆着玻璃烧瓶与黄铜化学仪器，左边椅子上放着素描画夹",
  kind: "画",
  by: "雅克-路易·大卫（Jacques-Louis David）绘，纽约大都会艺术博物馆藏",
  license: "公有领域（大都会艺术博物馆 Open Access）",
  commons: "File:David - Portrait of Monsieur Lavoisier and His Wife.jpg",
  page: "https://commons.wikimedia.org/wiki/File:David_-_Portrait_of_Monsieur_Lavoisier_and_His_Wife.jpg",
};

const antoine = spot(0.58, 0.38, 0.065, "拉瓦锡");
const marie = spot(0.39, 0.34, 0.07, "玛丽-安娜");
const quill = spot(0.61, 0.56, 0.09, "鹅毛笔与手稿");
const tableGear = spot(0.79, 0.49, 0.11, "桌上的化学仪器");
const floorFlask = spot(0.81, 0.83, 0.11, "大玻璃球烧瓶");
const portfolio = spot(0.16, 0.55, 0.1, "素描画夹");
const hiddenHatArea = spot(0.41, 0.25, 0.11, "底下藏着大红帽");

const engraving: Frame = {
  title: "玛丽-安娜亲手刻制的《化学基础论》仪器铜版画（1789）",
  src: "frames/lavoisier-plate.jpg",
  alt: "精细的黑白铜版画科学插图，绘有集气水槽、玻璃钟罩、量气管以及架在钟罩上给气体称重的圆肚玻璃球烧瓶，右下角刻着署名",
  kind: "版画",
  by: "玛丽-安娜·保尔兹·拉瓦锡（Marie-Anne Paulze Lavoisier）绘图并蚀刻，科学史研究所藏",
  license: "公有领域",
  commons: "File:Traité Élémentaire de Chimie - DPLA - 7f69f306652cefd113d85b858be8b900 (page 22).jpg",
  page: "https://commons.wikimedia.org/wiki/File:Trait%C3%A9_%C3%89l%C3%A9mentaire_de_Chimie_-_DPLA_-_7f69f306652cefd113d85b858be8b900_(page_22).jpg",
};
const plateBalloon = spot(0.82, 0.53, 0.14, "称气体的大玻璃球");
const plateSignature = spot(0.84, 0.88, 0.055, "玛丽-安娜的签名", 2.4);

export const lavoisierLab: Story = {
  id: "lavoisier-lab",
  title: "给看不见的空气称体重",
  frameName: "拉瓦锡夫妇像",
  year: 1788,
  when: "1788 年，法国巴黎",
  field: "化学",
  people: ["安托万·拉瓦锡", "玛丽-安娜·拉瓦锡", "雅克-路易·大卫"],
  teaser: "两百多年前的一幅夫妻画像，脚边却摆着圆圆的大玻璃球——他们用天平称出了燃烧和水的秘密，X 光还在画布底下照出了一顶藏起来的大红帽。",
  frame: portrait,
  lines: [
    nian("爸爸，这张图上有什么？一位穿白裙子的阿姨扶着一个拿羽毛笔写字的叔叔，地上怎么还放着一个大玻璃球？", { part: "这是什么图", look: floorFlask }),
    dad("这可不是普通的装饰瓶，是真正的化学实验仪器！画里坐着的是法国化学家安托万·拉瓦锡，站着的是他的妻子玛丽-安娜。1788 年，法国大画家大卫给他们画了这幅比篮球运动员还高的全身像。", { look: antoine }),
    nian("叔叔没有看我们，他在抬头看阿姨呢！", { look: marie }),
    dad("因为玛丽-安娜不只是来合影的家人，更是他最重要的实验室搭档。你看他手边铺着正在修改的化学书稿，桌子上还摆着闪亮的玻璃和黄铜仪器。", { look: quill }),

    nian("这些玻璃瓶子是用来干什么的？", { part: "铁生锈为什么变重了", look: tableGear }),
    dad("用来捉住看不见的气体，再给它们称体重！那时候许多科学家相信一种叫“燃素”的东西，觉得木头烧成灰变轻了，是因为火精灵一样的“燃素”跑掉了。"),
    nian("木头烧完只剩一点灰，看起来真的变轻了呀！"),
    dad("可拉瓦锡最爱用极准的天平说话。他把锡块、铁块封进密闭的玻璃瓶里加热，结果金属生锈、烧过以后，本身居然“吃胖”变重了，而整只密封瓶连气带金属总重量一克都没变！"),
    nian("咦，多出来的重量是从哪儿来的？"),
    dad("是从瓶子里的空气吸过来的！原来燃烧根本不是跑掉了什么“燃素”，而是东西和空气里的一种气体结合在了一起。"),
    nian("那种气体就是氧气吗？"),
    dad("对！其实瑞典的舍勒和英国的普利斯特里比他更早收集到了这种气体，可他们还用旧的“燃素”去猜；是拉瓦锡第一个用天平听懂了它是什么，给它取名叫“氧气”。"),
    dad("他还把氢气和氧气点成纯水，又用烧红的铁把水拆回气体，证明两千年来大家当成基本元素的“水”，其实是氢和氧合起来的！化学反应不管怎么变，前后总质量永远不变。"),

    nian("看不见的空气，怎么放在天平上称呀？", { part: "画夹里的秘密", look: floorFlask }),
    dad("秘密就在地板上这只带黄铜阀门的大玻璃球里！我们换一张第二年印在《化学基础论》里的铜版画，你就看懂啦。", { show: engraving, look: plateBalloon }),
    nian("哇，就是油画地上那只大圆球！"),
    dad("一模一样吧？先把玻璃球抽空空气称一次重量，再拧开黄铜阀门把气体吸进去称第二次，两次相减，就知道这团空气有多重了。"),
    nian("这张仪器图画得好细呀，是谁画的？", { look: plateSignature }),
    dad("放大右下角这行小字——刻着玛丽-安娜的名字！整本书十三张折叠大图、一百七十多件仪器，全是她亲手按比例画下来，再用针刻在铜板上印出来的。"),
    nian("难怪油画左边椅子上放着一个大画夹！", { show: portrait, look: portfolio }),
    dad("你发现啦！给她画像的大画家大卫，正是她的美术老师。拉瓦锡不懂英语，也是玛丽-安娜学了英语把外国论文翻译给他，还在实验室里一笔笔记下数据。"),

    nian("这幅大油画底下真的还藏着别的画吗？", { part: "X 光照出的大红帽", look: hiddenHatArea }),
    dad("2019 年，纽约大都会博物馆用红外线和 X 光给这幅画做“体检”，吓了一跳：在玛丽-安娜头顶上方这片灰色背景底下，居然藏着一顶插满红羽毛和红花的大礼帽！"),
    nian("啊？为什么要把漂亮的大红帽涂掉？"),
    dad("因为拉瓦锡除了做实验，还做过替国王收税的包税官，很有钱。大卫第一版把他们画成了阔气的贵族，一件仪器都没有；一年后大革命快来了，才涂掉红帽和金饰书桌，改画成朴素的科学家夫妇。"),
    nian("那后来呢？", { look: "all" }),
    dad("1794 年法国大革命最激烈的时候，法庭清算旧时代的包税官，50 岁的拉瓦锡被判处死刑去世了。网上常传法官说“共和国不需要科学家”，史学家查过档案，那其实是后人编出来的传说。"),
    dad("第二天，大数学家拉格朗日难过地说，失去这样一颗头脑只要一瞬间，再长出一颗也许一百年都不够。好在玛丽-安娜保住了他的仪器，还把他的遗稿整理印了出来。"),
  ],
  remember: "拉瓦锡夫妇用精密天平给看不见的气体称重，推翻了“燃素说”，证明了燃烧是与氧气结合、水由氢和氧组成，立下了化学反应质量守恒的基石。",
  facts: [
    ["这张图", "《拉瓦锡夫妇像》，雅克-路易·大卫绘，高 259.7 厘米、宽 194.6 厘米"],
    ["创作年份", "1788 年（2019—2021 年红外与 X 光扫描发现底层原为无仪器的贵族红帽像）"],
    ["科学贡献", "推翻燃素说，命名氧气与氢气，证明水的组成与化学反应质量守恒"],
    ["最佳搭档", "玛丽-安娜翻译英文论文、记录实验，并亲手绘制蚀刻《化学基础论》全部 13 幅插图"],
    ["今天在哪", "美国纽约大都会艺术博物馆"],
  ],
  sources: [
    { title: "大都会艺术博物馆藏品页：Antoine Laurent Lavoisier and His Wife", url: "https://www.metmuseum.org/art/collection/search/436106" },
    { title: "The Met（2021）：红外与 X 光揭开《拉瓦锡夫妇像》底层大红帽初稿", url: "https://www.metmuseum.org/perspectives/david-lavoisier-conservation" },
    { title: "Centeno et al. 2021：Discovering the evolution of David's portrait of the Lavoisiers（Heritage Science）", url: "https://doi.org/10.1186/s40494-021-00551-y" },
    { title: "Science History Institute：拉瓦锡传记与化学革命", url: "https://www.sciencehistory.org/education/scientific-biographies/antoine-laurent-lavoisier/" },
    { title: "Science History Institute：画中的拉瓦锡真实仪器考证", url: "https://www.sciencehistory.org/stories/magazine/revolutionary-instruments-lavoisiers-tools-as-objets-dart/" },
    { title: "Science History Institute 数字馆藏：1789 年《化学基础论》玛丽-安娜铜版插图", url: "https://digital.sciencehistory.org/works/v979v4270" },
    { title: "Britannica：Antoine Lavoisier", url: "https://www.britannica.com/biography/Antoine-Lavoisier" },
    { title: "法国科学院院刊：关于“共和国不需要学者”传说的史料辨析", url: "https://www.academie-sciences.fr/pdf/lettre/lettre37_38_fr.pdf" },
  ],
};
