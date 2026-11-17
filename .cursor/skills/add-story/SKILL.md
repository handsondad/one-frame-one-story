---
name: add-story
description: 给「一图一故事」加一个新故事，或者给已有故事换图、加第二张图：查资料、找图、写小念和爸爸的对话、对圈、配音、核对、更新署名。Use when the user asks to add a story (加故事、添加一张名图), replace a story's image with a screenshot or original photo (换成原图、换成截图), or add more images to a story in this repo.
---

# 加一个故事 / 给故事换图

规矩和代码地图在仓库根目录的 `AGENTS.md`，先读它；这里只讲怎么一步步做完。

## 清单

```
- [ ] 1. 查资料：图、要圈的位置、带出处的史实、传说和争议
- [ ] 2. 图放进 public/frames/，生成缩略图
- [ ] 3. 写 src/stories/<id>.ts，加进 index.ts
- [ ] 4. 画网格读坐标，写 spot
- [ ] 5. 截图 + 总览，核对每个圈，改到圈对为止
- [ ] 6. npm run font，npm run voice -- <id>
- [ ] 7. THIRD_PARTY_NOTICES.md、README.md 的图片清单
- [ ] 8. npm run typecheck && npm test && npm run build，git add -A
```

## 1. 查资料

一次要加好几个故事时，每个故事交给一个查资料的子代理并行查，提示词模板见 [research-brief.md](research-brief.md)。拿到资料后自己再核一遍关键数字，子代理也会错。

- 数字、日期、引语都要有 https 出处；几个来源说法不一时，选一个并在台词里说“大约”“一般认为”。
- 流传很广但没证据的说法，让爸爸说明“这是传说”或“说法不一”。
- 拍摄者、作者有争议的，署名写“一般认为是……”，不要写死。

## 2. 图

- **Commons 上有**：`frame.commons` 写 `File:...`，`npm run frames -- <id>` 下载图片并生成缩略图。
- **用户给的截图或原图**：不写 `commons`，自己转成 JPEG 放进去，再跑 `npm run frames -- <id>` 补缩略图：

  ```bash
  ffmpeg -y -i <截图> -q:v 3 public/frames/<id>.jpg
  ```

  - 截图上带进来的界面残留（右上角的关闭 ×、水印按钮）用 `delogo=x=..:y=..:w=..:h=..` 抹掉，它会用周围的颜色补，比盖白块自然。
  - 几张图拼在一起的截图（比如人像 + 作品），晾衣杆的小圆图会切在接缝上：缩略图手动只截主体，`ffmpeg -i public/frames/<id>.jpg -vf "crop=...,scale=420:-2" public/frames/thumbs/<id>.jpg`。
- **有版权的图**：`license` 写版权归谁 +“本站只作非商业的学习用途”，`note` 写“版权方要求的话就撤下”，再登记到 `THIRD_PARTY_NOTICES.md` 的「有版权的照片」。

### 一张图讲不清就换图

台词里写 `show: 另一张图` 就从这句换过去，之后的 `look` 按那张图算，要换回来再写一次 `show`。中途换上的图要写 `title`，图片说明、结尾的许可、首页的「图片从哪里来」会自动带上它。好用的几种：

| 情形 | 例子 |
|---|---|
| 原图太糊，换示意图看细节 | `photo-51.ts`：原照片 → 示意图看缺掉的斑点 → 换回原照片 |
| 老照片零件看不清，换清楚的复制品 | `dna-model.ts`：1953 年合影 ↔ 博物馆复制品 |
| 同一件事换个角度 | `nagasaki-cloud.ts`：飞机上拍的 → 地面上拍的 |
| 常见版本是修过的 | `moon-aldrin.ts`：原始底片 → 发布时补了黑天的版本 → 换回原始底片 |

两张图都用 `const xxx: Frame = {...}` 先定义好，`frame: photo`，台词里 `show: photo` 换回来。

## 3. 写数据

照着最像的已有故事写（结构见 `src/stories/types.ts`）。要点都在 `AGENTS.md`「写台词的规矩」：小念先问“这张图上有什么”，每句不超过 160 字，用 `part` 分段，至少 16 句、至少指两处。`year` 决定在晾衣杆上的位置，新学科要在 `types.ts` 和 `src/pages/line.ts` 的 `FIELD_LOOK` 里加。

## 4. 圈

```bash
npm run grid -- <id>        # 或 npm run grid -- <图片路径>
```

打开 `tools/.cache/grid/<文件名>.png`，红线每格 0.1，读出要圈的东西的中心和大小。

- `r` 按图宽算：横的宽图上，同一个 `r` 在竖直方向占得更多，靠上下边的圈要小一点，不然会被裁掉。
- 一句话圈好几处时不要给 `zoom`。
- 很小的东西（面罩里的倒影、瓶子）给 `zoom` 2.4～4；图本身像素少时放太大会糊，宁可小一点。

## 5. 核对

```bash
npm run snapshot -- <id> --spots    # 截每一句指了圈或换了图的
npm run sheet -- <id>               # 拼成 snapshots/<id>-sheet.png
```

看总览，可疑的再打开 `snapshots/<id>-<第几句>-1280.png` 整张看。改了 `spot` 只重截那几句：`npm run snapshot -- <id> 5 15`。最后挑一句用 `--width 390` 看手机。开发服务器已经开着时加 `--url http://localhost:<端口>/` 快一些。

## 6. 字体和配音

台词定稿后 `npm run font`，再 `npm run voice -- <id...>`（每句约 2 秒，句子多时放后台跑）。之后再改台词要重跑这两个；只改 `spot` 不用。

## 7. 署名和清单

- `THIRD_PARTY_NOTICES.md`：开放许可的图加一行到总表；有版权的放「有版权的照片」；自己画的示意图放「本站绘制的示意图」。换下来不用的图和画图脚本要删，表里的行也删。
- `README.md` 第一段的图片清单按年份插进去。
- 加了新工具或新做法，更新 `AGENTS.md`。

## 8. 收尾

`npm run typecheck && npm test && npm run build` 全过后 `git add -A`。用户没让提交就不要 commit / push。给用户汇报时附上两三张截图（圈对了的、换图的那句），说清哪些说法没能核实。
