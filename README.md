# 一图一故事

小念和爸爸，从一张图聊到一段传奇：科学、历史、艺术……

点一张图，小念问、爸爸答，一句一句往下讲；每句话讲到图上哪里，图就圈出哪里、镜头推过去。讲完有“一句话记住”和这张图的小档案、出处。点“听故事”会一句一句念出来。

## 运行

需要 Node.js 22+。

```bash
npm install
npm run dev
```

| 命令 | 作用 |
|---|---|
| `npm run dev` | 开发服务器 |
| `npm run typecheck` | 类型检查 |
| `npm test` | 检查故事数据和取景逻辑 |
| `npm run build` | 生产构建，输出到 `dist/`（相对路径，放到任意子路径都能打开） |
| `npm run frames` | 从 Wikimedia Commons 下载图片并生成缩略图（需要 ffmpeg） |
| `npm run story:index` | 重新生成首页用的故事目录、图片署名和图片比例（`src/stories/*.json`），故事或图片改了就跑 |
| `npm run font` | 从站酷快乐体里截出网站用到的字（需要 `python -m pip install fonttools`） |
| `npm run voice [-- <故事id>]` | 用 edge-tts 给台词配音，只配新的和改过的句子（需要联网、`python -m pip install edge-tts` 和 ffmpeg） |
| `npm run snapshot -- <故事id> [第几句... \| --spots]` | 截图到 `snapshots/` 自查，`--spots` 截每一句指了圈的，`--width 390` 看手机 |
| `npm run grid -- <故事id \| 图片路径>` | 给图画十等分网格，读圈的坐标（需要 ffmpeg） |
| `npm run sheet -- <故事id> [第几句...]` | 把截图里的图拼成一张总览，一眼核对所有圈（需要 ffmpeg） |

## 加一个故事

见 [AGENTS.md](AGENTS.md)。

## 素材

图片来源和许可见 [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)，首页底部“图片从哪里来”也列着。对话是根据史料改写的，每个故事结尾列了参考资料。
