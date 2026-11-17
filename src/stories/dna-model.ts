import { dad, nian, spot } from "./lines.ts";
import type { Frame, Story } from "./types.ts";

const photo: Frame = {
  src: "frames/dna-model-1953.jpg",
  alt: "黑白照片：左边一个年轻人坐着仰头看，右边一个人站着，手拿计算尺指向中间高高的金属模型，模型由竖杆、细铁丝和一块块小金属板搭成",
  kind: "照片",
  by: "安东尼·巴林顿·布朗（Antony Barrington Brown）摄",
  license: "版权归摄影师（Science Photo Library 代理），本站只作非商业的学习用途",
  page: "https://www.npg.org.uk/collections/search/portrait/mw13740/James-Dewey-Watson-Francis-Harry-Compton-Crick",
  note: "这张照片还在版权期内，不是开放许可的图。本站是给孩子看的非商业学习网站，按教学引用放在这里；版权方要求的话就撤下。",
};
const model = spot(0.32, 0.5, 0.33, "双螺旋模型");
const watson = spot(0.15, 0.55, 0.1, "沃森");
const crick = spot(0.77, 0.25, 0.09, "克里克");
const rule = spot(0.53, 0.22, 0.08, "计算尺");
const plates = [spot(0.25, 0.14, 0.07, "金属板"), spot(0.23, 0.32, 0.07)];

// 柏林复制品上的圈
const replica: Frame = {
  title: "柏林医学史博物馆的复制品",
  src: "frames/dna-model.jpg",
  alt: "白墙前立着一个高高的金属模型：中间一根竖杆，四周一块块小金属板和细铁丝拧成麻花一样的梯子，从底座一直盘到顶上",
  kind: "照片",
  by: "Flocci Nivis 摄，柏林医学史博物馆藏复制品",
  license: "CC BY 4.0",
  commons: "File:20251019 Replica DNA double helix model Berlin 03.jpg",
  page: "https://commons.wikimedia.org/wiki/File:20251019_Replica_DNA_double_helix_model_Berlin_03.jpg",
  note: "柏林医学史博物馆照着沃森和克里克的模型做的复制品。1953 年那个原模型早就拆散了，伦敦科学博物馆 1977 年照着老照片、用一部分原来的金属板重新搭过一个。",
};
const whole = spot(0.45, 0.52, 0.38, "复制品");
const backbones = [spot(0.2, 0.51, 0.06, "扶手"), spot(0.66, 0.535, 0.05, "扶手")];
const twist = [spot(0.15, 0.45, 0.05), spot(0.76, 0.27, 0.05), spot(0.16, 0.79, 0.05), spot(0.74, 0.71, 0.05)];
const rungs = [spot(0.41, 0.77, 0.08, "横档"), spot(0.475, 0.848, 0.08)];
const plate = spot(0.56, 0.57, 0.05, "一块碱基", 2.5);
const rods = spot(0.45, 0.6, 0.06, "中间的铁杆");

export const dnaModel: Story = {
  id: "dna-model",
  title: "纸板拼出来的双螺旋",
  frameName: "沃森和克里克与 DNA 双螺旋模型",
  year: 1953,
  when: "1953 年 5 月 21 日，英国剑桥卡文迪什实验室",
  field: "生物",
  people: ["詹姆斯·沃森", "弗朗西斯·克里克", "罗莎琳德·富兰克林", "莫里斯·威尔金斯"],
  teaser: "两个年轻人站在一架拧成麻花的梯子旁边——它讲的是世界上最小、最要紧的一样东西。",
  frame: photo,
  lines: [
    nian("爸爸，这张图上有什么？两个叔叔，还有一个弯弯绕绕的铁架子！", { part: "这是什么图", look: model }),
    dad("铁架子是 DNA 双螺旋的模型，旁边就是搭出它的两个人。1953 年 5 月 21 日，一位摄影师在英国剑桥的实验室里拍下了这张照片。"),
    nian("坐着的是谁？", { look: watson }),
    dad("他叫沃森，美国人，那年才 25 岁。他仰着头，看着自己搭的模型。"),
    nian("站着的呢？", { look: crick }),
    dad("他叫克里克，英国人，36 岁。他俩在同一个实验室，天天凑在一起琢磨 DNA。"),
    nian("他手里拿着一把尺子，指着模型，像在讲课！", { look: rule }),
    dad("那是计算尺，那时候还没有计算器，科学家用它算乘除。这个姿势是摄影师让摆的：他说，站到模型旁边，显得重要一点。他后来笑着说，他俩可没做到。"),
    nian("DNA 是什么？", { look: model }),
    dad("你身上每个细胞里都有 DNA。它像一本写满了说明的书，告诉身体怎么长头发、长眼睛，为什么你长得有点像爸爸，又有点像妈妈。"),
    nian("这个模型比人还高！"),
    dad("伦敦博物馆后来复原的那个有 1.85 米高，比爸爸还高。可是真正的 DNA，只有大约 2 纳米粗，要五十万根并排才有一毫米。"),
    nian("最大的模型，搭的是最小的东西！"),

    nian("这么多铁丝和小板子，我都看不清哪是哪了。", { part: "拧起来的梯子" }),
    dad("我们换一张看。这是照着他们的模型做的复制品，放在德国柏林的博物馆里，白墙前面看得更清楚。", { show: replica, look: whole }),
    nian("这两条歪歪扭扭的边是什么？", { look: backbones }),
    dad("想象一架梯子。这两条边就是梯子的两根扶手，是一个一个小零件连成的长链子。"),
    nian("可是梯子是直的呀。"),
    dad("这架梯子拧起来了，像一根麻花，一圈一圈往上盘。你看它的外边，一会儿鼓到左边，一会儿鼓到右边。", { look: twist }),
    nian("所以叫“双螺旋”！"),
    dad("对，两根扶手，拧成螺旋。每拧一整圈，正好有十级台阶。"),

    nian("那梯子的台阶在哪？", { part: "四种拼图块", look: rungs }),
    dad("中间这一对对平平的小板子，就是台阶。每一级台阶，由两块小板子在中间对上。"),
    nian("小板子是什么？", { look: plate }),
    dad("每一块代表一个“碱基”。DNA 里一共只有四种，名字简写成 A、T、G、C。"),
    nian("四种怎么配？"),
    dad("A 只和 T 配，G 只和 C 配，像拼图一样，对上了才能卡紧。妙的是，A 配 T 和 G 配 C，拼出来一样宽，所以梯子才能整整齐齐。"),
    nian("中间这根铁杆呢？", { look: rods }),
    dad("那是撑着模型的架子，真正的 DNA 里没有它。"),

    nian("他们是怎么想出来的？", { part: "纸板先上场", show: photo, look: watson }),
    dad("他们自己没做 DNA 的实验，是把别人的实验结果拼在一起想。有一位叫查加夫的科学家早就发现：DNA 里 A 和 T 一样多，G 和 C 一样多。"),
    nian("那他们为什么不马上搭出来？"),
    dad("沃森请实验室的工人做金属小板子，可是还没做好。他等不及，1953 年 2 月 28 日，就用硬纸板剪出了四种碱基的形状。"),
    dad("他在桌子上把纸板挪来挪去，突然发现：A 和 T 拼在一起，跟 G 和 C 拼在一起，形状一模一样！"),
    nian("纸板比铁板先上场！"),
    dad("是呀。过了几天金属板做好了，他们赶紧搭，3 月 7 日，整个模型搭完了。"),
    nian("有没有别人也在猜？"),
    dad("有。大化学家鲍林猜 DNA 是三股拧在一起的，可他猜错了。后来他自己也说，奇怪当时怎么没试试两股。"),

    nian("只靠想，就能想对吗？", { part: "富兰克林的照片" }),
    dad("还要靠证据。伦敦的富兰克林用 X 光给 DNA 拍了很清楚的照片，还做了很多测量，就是“照片 51 号”那个故事。"),
    dad("她的同事威尔金斯，没告诉她，就把照片给沃森看了；她的一些测量结果，也通过一份报告传到了克里克他们手里。"),
    nian("没告诉她，这样不对吧？"),
    dad("很多人也这么想。历史学家说，他们本来应该先问一问她。第二年，沃森和克里克自己写道，要是没有她的数据，他们几乎不可能搭出这个模型。"),
    nian("那后来呢？"),
    dad("后来富兰克林和克里克他们成了朋友。1962 年，沃森、克里克和威尔金斯得了诺贝尔奖。富兰克林 1958 年就生病去世了，才 37 岁，诺贝尔奖不发给已经去世的人。"),

    nian("他们把模型告诉大家了吗？", { part: "一页纸", look: model }),
    dad("1953 年 4 月 25 日，他们在《自然》杂志上发表了一篇文章，只有大约一页纸长。谁的名字写在前面，据说是扔硬币决定的。"),
    nian("扔硬币！"),
    dad("文章里有一句很有名的话，意思是：我们注意到了，这样两两配对，让人马上想到 DNA 可能是怎么复制自己的。"),
    nian("怎么复制？", { show: replica, look: rungs }),
    dad("像拉开拉链。梯子从中间一分为二，每一半照着 A 配 T、G 配 C，再配出另一半。一架梯子，就变成了两架一模一样的梯子。"),
    nian("这样每个新细胞都有一本说明书了！"),

    nian("那第一张照片是什么时候登出来的？", { part: "这张照片的故事", show: photo }),
    dad("一开始没登。摄影师是替朋友给《时代》杂志拍的，杂志最后没用，把底片退了回来。直到 1968 年，沃森写了一本讲这段经历的书，才把它印出来。"),
    nian("拍的时候他们已经搭好两个月了？"),
    dad("对，模型 3 月就搭好了，照片是 5 月拍的。你看左上角这些平平的金属板，就是当年等不及才先用纸板代替的碱基。", { look: plates }),
    nian("后来他们还一起拍过吗？"),
    dad("将近四十年以后，两个人都老了，又站到模型旁边，照着这张照片的样子摆好姿势，再拍了一张。"),

    nian("原来那个模型还在吗？", { part: "模型后来去哪了", show: replica, look: whole }),
    dad("早就拆散了。1977 年，伦敦科学博物馆照着当年的老照片，用一部分原来的金属板，重新搭了一个。柏林这一个，是又照着它做的复制品。"),
    nian("我听说他们搭好以后，跑到酒馆里大喊“我们发现了生命的秘密”！"),
    dad("这是沃森后来回忆的，克里克说自己不记得有这回事，所以只能算一个说法。"),
    nian("那 DNA 是他们发现的吗？"),
    dad("也不是。DNA 早在一百多年前就被人找到了。他们发现的，是 DNA 长什么样子：一架拧起来的梯子。"),
  ],
  remember: "DNA 像一架拧成麻花的梯子：两根扶手，中间的台阶只有 A 配 T、G 配 C，从中间拉开，就能照着复制出一模一样的两架。",
  facts: [
    ["这张图", "沃森和克里克与 DNA 模型，1953 年 5 月 21 日，巴林顿·布朗摄"],
    ["第一次印出来", "1968 年，沃森的书里"],
    ["原模型", "1953 年 3 月 7 日在剑桥搭成，后来拆散；1977 年伦敦复原"],
    ["发表", "1953 年 4 月 25 日《自然》，约一页纸"],
    ["配对", "A 配 T，G 配 C"],
    ["诺贝尔奖", "1962 年，沃森、克里克、威尔金斯"],
  ],
  sources: [
    { title: "National Portrait Gallery：James Dewey Watson; Francis Harry Compton Crick（Antony Barrington Brown，1953）", url: "https://www.npg.org.uk/collections/search/portrait/mw13740/James-Dewey-Watson-Francis-Harry-Compton-Crick" },
    { title: "de Chadarevian 2003：The Making of an Icon（Science）", url: "https://www.science.org/doi/10.1126/science.1081133a" },
    { title: "de Chadarevian 2003：Portrait of a Discovery（Isis 94）", url: "https://www.journals.uchicago.edu/doi/10.1086/376100" },
    { title: "The Telegraph：Antony Barrington Brown（讣告）", url: "https://www.telegraph.co.uk/news/obituaries/culture-obituaries/9082749/Antony-Barrington-Brown.html" },
    { title: "CMAJ 2003：One thousand words", url: "https://www.cmaj.ca/content/168/8/1025" },
    { title: "Wikimedia Commons：Replica DNA double helix model Berlin", url: "https://commons.wikimedia.org/wiki/File:20251019_Replica_DNA_double_helix_model_Berlin_03.jpg" },
    { title: "NLM Profiles in Science：Francis Crick — The Discovery of the Double Helix", url: "https://profiles.nlm.nih.gov/spotlight/sc/feature/doublehelix" },
    { title: "Watson & Crick 1953：Molecular Structure of Nucleic Acids（Nature 171, 737）", url: "https://www.nature.com/articles/171737a0" },
    { title: "PBS NewsHour：The pub where the secret of life was first announced", url: "https://www.pbs.org/newshour/health/the-pub-where-the-secret-of-life-was-first-announced" },
    { title: "Britannica：Erwin Chargaff", url: "https://www.britannica.com/biography/Erwin-Chargaff" },
    { title: "Oregon State University：Linus Pauling and the Race for DNA", url: "https://scarc.library.oregonstate.edu/coll/pauling/dna/narrative/page19.html" },
    { title: "Cobb & Comfort 2023：What Rosalind Franklin truly contributed（Nature）", url: "https://www.nature.com/articles/d41586-023-01313-5" },
    { title: "Nobel Prize：Physiology or Medicine 1962", url: "https://www.nobelprize.org/prizes/medicine/1962/summary/" },
    { title: "Britannica：Rosalind Franklin", url: "https://www.britannica.com/biography/Rosalind-Franklin" },
    { title: "Science Museum Group：Crick and Watson's DNA molecular model", url: "https://collection.sciencemuseumgroup.org.uk/objects/co146411/crick-and-watsons-dna-molecular-model-molecular-model" },
    { title: "Science Museum Group：Templates from Crick and Watson's DNA molecular model", url: "https://collection.sciencemuseumgroup.org.uk/objects/co146410/templates-from-crick-and-watsons-dna-molecular-model" },
    { title: "NHGRI：Deoxyribonucleic Acid (DNA) Fact Sheet", url: "https://www.genome.gov/about-genomics/fact-sheets/Deoxyribonucleic-Acid-Fact-Sheet" },
  ],
};
