# AGENTS.md：给接手这个仓库的代码助手

## 这是什么

「一图一故事」：从一张有名的图（实验照片、手稿、人物合影、太空照片，也有文物、古画、老地图）讲起，用小念（男孩）和爸爸一问一答的方式讲科学家和科学发现的故事。和 `storyverse`（小念家的漫画书）是一家人，但这里不画漫画人物，主角是真实的图。

技术栈：React 18 + TypeScript（strict）+ Vite 5，Hash 路由，没有后端。

## 地图

| 路由 | 页面 | 文件 |
|---|---|---|
| `#/` | 晾衣绳：先只挂分类牌（按学科 / 按年代），点开一类才挂这一类的图 | `src/pages/LinePage.tsx`，挂法在 `src/pages/line.ts` |
| `#/story/<id>/<n>` | 看图讲故事，讲到第 n 句（从 1 数） | `src/pages/StoryPage.tsx` |

- `src/stories/<id>.ts`：一个故事一份数据，类型在 `src/stories/types.ts`；`src/stories/index.ts` 是列表
- `src/stories/lines.ts`：`nian()`、`dad()`、`spot()` 三个写台词的小工具
- `src/lib/view.ts`：每句话指图上哪儿（`resolveLooks`）、镜头怎么推（`viewFor`），纯函数，有测试
- `src/components/FrameStage.tsx`：图 + 圈 + 压暗 + 推镜头
- `src/index.css`：样子和 storyverse 一个系列——站酷快乐体（`public/fonts/story.woff`，`tools/font.mjs` 截字生成）、暖色底、3px 深色描边、圆角、按下去的橙色按钮
- `src/lib/speech.ts`：念一句——有配音放配音，没有就用浏览器自带朗读
- `src/lib/voice.ts`：配音用的声音和每句台词的指纹；`src/lib/voice-manifest.ts` 是 `npm run voice` 生成的，别手改
- `public/voice/<故事>/<指纹>.mp3`：配音，`tools/voice.mjs` 生成
- `public/frames/`：图片（≤1400px JPEG），`public/frames/thumbs/`：晾衣杆缩略图
- `tools/fetch-frames.mjs`：从 Commons 下载图片、生成缩略图；`tools/draw-photo51.mjs`、`draw-atom-trap.mjs`、`draw-nano.mjs`：画没有开放许可的图的示意图（照片 51 号的斑点、单个原子、IBM 原子字和并五苯）
- `tools/snapshot.mjs`：无头浏览器截图；`tools/grid.mjs`：给图画网格读 `spot` 坐标；`tools/sheet.mjs`：把几张截图里的图拼成总览，核对圈
- `.cursor/skills/add-story/`：加故事、换图的一步步做法（清单、查资料的提示词模板），下面是要点

## 加一个故事

1. 找图：优先 Wikimedia Commons 上公有领域或 CC 许可的图，记下文件名（`File:...`）、作者、许可。有名的图如果只有带版权的版本（比如照片 51 号、沃森和克里克与模型的合影），本站是非商业的学习网站，可以放原图：`license` 写明版权归谁、只作非商业学习用途，`note` 里说明，再登记到 `THIRD_PARTY_NOTICES.md` 的「有版权的照片」。也可以自己画示意图，`kind: "示意图"` 并在 `note` 里说明。
 - 一张图讲不清时可以中途换图：台词里写 `show: 另一张图`（要有 `title`），从这句起显示那张，之后的 `look` 按那张图算，直到再写 `show` 换回来。例子见 `dna-model.ts`（老照片 + 博物馆复制品）、`photo-51.ts`（原照片 + 示意图）。
2. 新建 `src/stories/<id>.ts`，加进 `src/stories/index.ts`。`frame.src` 写 `frames/<id>.jpg`，`frame.commons` 写 Commons 文件名。原图太大、只讲其中一块（比如老地图）时写 `frame.crop`，下载时裁好，`note` 里说明。
   - `field` 不限理化生：还有数学、医学、地理、历史、艺术、社会，新学科在 `src/stories/types.ts` 和 `src/pages/line.ts` 的 `FIELD_LOOK` 里加。
   - `year` 是图产生的年份：公元前写负数（罗塞塔石碑是 `-196`），说不准哪一年的古画加 `circa: true`，显示用 `src/lib/year.ts` 的 `yearText`。
3. `npm run frames -- <id>` 下载图片和缩略图。不在 Commons 上的图（用户发来的截图）不写 `commons`，自己用 ffmpeg 转成 JPEG 放到 `public/frames/<id>.jpg`，再跑这一步补缩略图。
4. `npm run grid -- <id>` 给图画上网格，看清楚再写 `spot(x, y, r)`：x、y 是占图宽、高的比例，r 按图宽算。圈太小看不清就给第 5 个参数 `zoom`。
5. 核实史实：数字、日期、引语都要有出处，写进 `sources`；流传很广但没有证据的说法（比如斯坦福打赌、门捷列夫做梦）要让爸爸说明“这是传说”。
6. `npm run snapshot -- <id> --spots` 截每一句指了圈的，`npm run sheet -- <id>` 拼成总览，看圈有没有圈对；`--width 390` 看手机。
7. 台词定了先跑 `npm run font`（新故事里有新汉字，字体要重新截，测试会检查），再跑 `npm run voice -- <id>` 配音（要联网，需要 `python -m pip install edge-tts` 和 ffmpeg）。改过台词也要跑，测试会检查每句都有配音。
8. 图的署名登记到 `THIRD_PARTY_NOTICES.md`，`README.md` 第一段的图片清单按年份插进去。
9. `npm run typecheck && npm test && npm run build`。

## 写台词的规矩

- 第一句由小念开口，从“这张图上有什么”问起；故事围着图讲，至少在图上指两处。
- 小念的问题像孩子会问的；爸爸的回答用孩子听得懂的比方，一句不超过 160 字，长了就拆。
- 用 `part` 分段，段名短。
- 小念是男孩，用「他」。不写家里人的真名。
- 不写吓人的细节；涉及去世、战争、不公平的事，讲清事实，语气平和。

## 已知的坑

- **Commons 限流**：脚本直接下原图地址会一直 429，`fetch-frames.mjs` 一律下缩略图地址；API 限流时回的是一句英文，脚本会等一会儿重试。
- **一句话指好几个圈时别给 `zoom`**：`zoom` 会盖过按圈的范围自动算的放大倍数，几个圈离得远就会被裁到画面外。
- **宽图上的圈竖着更大**：`r` 按图宽算，横的宽图上靠上下边的圈要给小一点，不然会被裁掉。
- **截图带进来的界面残留**：用户发来的截图常带关闭按钮 ×，用 ffmpeg 的 `delogo` 抹，比盖白块自然；几张图拼成的截图，缩略图要手动只截主体。
- **Windows PowerShell**：字符串里的中文弯引号“”会被当成引号，改含中文引号的文件用编辑工具别用命令行替换；`Set-Content -Encoding utf8` 会加 BOM，写文件用编辑工具或 .NET 的无 BOM UTF-8。
- **`scrollTo` 返回 Promise**：新版 Chrome 里 `window.scrollTo()` 有返回值，写成 `useEffect(() => scrollTo(0, 0))` 会让 React 把它当清理函数报错，要加花括号。
- **`.ts` 扩展名**：测试和工具用 Node 直接跑 `.ts`，互相导入时要写 `.ts` 扩展名。
- **截图要用本机 Edge/Chrome**：找不到时设环境变量 `BROWSER_PATH`。
- **首页不要一次挂出所有图**：图会越来越多，绳子上一开始只挂分类牌（每块牌子最多 4 个小圆图），同一时间只打开一类。新学科要在 `src/pages/line.ts` 的 `FIELD_LOOK` 补上图标、颜色和一句话。
- **配音按台词指纹命名**：同一句话不管挪到第几句都不用重配；改一个字就会重配那一句，旧文件由 `npm run voice` 自动删掉。
- **配音只按非商业用途考虑**：edge-tts 调的是 Edge 朗读的在线语音，没有批量生成的授权条款，见 `THIRD_PARTY_NOTICES.md`。
