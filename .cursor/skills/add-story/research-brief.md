# 查资料子代理的提示词模板

把 `<...>` 换掉后交给子代理（能上网、只读、不改仓库）。几个故事就开几个，并行跑。

```
Fact research (web) for a children's story app. Do NOT edit any files in the repo.

Story: <图的名字>, <作者>, <年份>. The app tells the story of one famous image as a
dialogue between a boy (小念) and his dad, for children. Write the brief in English or Chinese.

Return a brief with these sections:

1. IMAGE
   - Best Wikimedia Commons file (exact "File:..." name, pixel size, license template, author line).
     Other versions worth knowing (crops, retouched versions, originals) and how they differ.
   - If only copyrighted versions exist, say who holds the copyright.
   - Download a ~1000px copy to %TEMP%, draw circles on it to check, and give spot positions as
     spot(x, y, r): x, y = fractions of image width/height of the centre, r = fraction of image width.
     Give 8-15 spots for things a child would ask about. Flag anything you could not identify.

2. FACTS, each with an https source
   Date, place, who made it and how, numbers, what happened next, where it is today.

3. MYTHS AND DISPUTES
   Widely repeated claims that are wrong or unproven, competing attributions, conflicting numbers
   (say which source gives which).

4. KID-FRIENDLY HOOKS
   Things a child would notice or ask, simple comparisons, a gentle ending.
   <涉及战争、死亡时加：Keep the tone calm and factual; no frightening details.>
```

拿到资料后：

- 图片坐标只当初值，自己用 `npm run grid` 再看一遍，截图核对。
- 子代理说“没找到出处”的，台词里不要用。
- 有争议的，爸爸用“一般认为”“说法不一”。
