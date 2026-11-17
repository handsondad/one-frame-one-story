// 画两张“摸”出来的原子图的示意图，原图都没有开放许可，这里按它们的样子重画：
//   public/frames/ibm-atoms.svg —— 1989 年 IBM 用 35 个氙原子在镍表面拼出的“IBM”
//   public/frames/pentacene.svg —— 2009 年 IBM 用一氧化碳针尖的原子力显微镜拍到的并五苯分子
//
//   node tools/draw-nano.mjs
import { writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const out = (name, svg) => {
  writeFileSync(join(root, "public", "frames", name), svg);
  console.log(`public/frames/${name}`);
};

// ---------- IBM：5 行 × 14 列的格子，和 src/stories/ibm-atoms.ts 里圈的位置对应 ----------
{
  const W = 1600;
  const H = 900;
  /** [行, 列] */
  const cells = [
    // I
    [0, 0], [0, 1], [0, 2], [1, 1], [2, 1], [3, 1], [4, 0], [4, 1], [4, 2],
    // B
    [0, 4], [1, 4], [2, 4], [3, 4], [4, 4], [0, 5], [0, 6], [2, 5], [2, 6], [4, 5], [4, 6], [1, 7], [3, 7],
    // M
    [0, 9], [1, 9], [2, 9], [3, 9], [4, 9], [0, 13], [1, 13], [2, 13], [3, 13], [4, 13], [1, 10], [2, 11], [1, 12],
  ];
  const at = ([row, col]) => [(0.12 + col * 0.058) * W, (0.28 + row * 0.11) * H];
  /** 一个氙原子：画成一个小山包，山包的中间落在格点上 */
  const bump = ([x, cy]) => {
    const w = 38;
    const h = 74;
    const y = cy + h / 2;
    return `<ellipse cx="${x + 10}" cy="${y + 8}" rx="${w}" ry="${w * 0.42}" fill="#000" opacity="0.45" filter="url(#soft)"/>
    <path d="M ${x - w} ${y + 10} C ${x - w * 0.55} ${y + 8}, ${x - w * 0.35} ${y - h}, ${x} ${y - h} C ${x + w * 0.35} ${y - h}, ${x + w * 0.55} ${y + 8}, ${x + w} ${y + 10} Z" fill="url(#cone)"/>
    <ellipse cx="${x - 4}" cy="${y - h + 14}" rx="7" ry="10" fill="#fff" opacity="0.85" filter="url(#tiny)"/>`;
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <linearGradient id="slab" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#6c7078"/>
      <stop offset="0.6" stop-color="#4c5058"/>
      <stop offset="1" stop-color="#2e3138"/>
    </linearGradient>
    <linearGradient id="cone" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#f4fdff"/>
      <stop offset="0.3" stop-color="#7fe3f2"/>
      <stop offset="0.75" stop-color="#1f8fb8"/>
      <stop offset="1" stop-color="#0d4c6e"/>
    </linearGradient>
    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="8"/></filter>
    <filter id="tiny" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="3"/></filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="2" seed="7"/>
      <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.16 0"/>
      <feComposite in2="SourceGraphic" operator="in"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#050608"/>
  <polygon points="90,150 1530,110 1560,820 50,860" fill="url(#slab)"/>
  <polygon points="90,150 1530,110 1560,820 50,860" fill="#fff" filter="url(#grain)"/>
  <polygon points="50,860 1560,820 1560,845 50,885" fill="#1c1e23"/>
  ${cells.map((c) => bump(at(c))).join("\n  ")}
</svg>
`;
  out("ibm-atoms.svg", svg);
}

// ---------- 并五苯：五个六边形排成一排，和 src/stories/pentacene.ts 里圈的位置对应 ----------
{
  const W = 1200;
  const H = 580;
  const cy = H / 2;
  const a = 83; // 六边形边长
  const s = Math.sqrt(3) * a; // 相邻环中心的距离
  const centers = [-2, -1, 0, 1, 2].map((k) => W / 2 + k * s);
  const hex = (cx) => {
    const pts = [];
    for (let i = 0; i < 6; i++) {
      const t = ((60 * i - 90) * Math.PI) / 180;
      pts.push([cx + a * Math.cos(t), cy + a * Math.sin(t)]);
    }
    return pts;
  };
  const poly = (pts) => pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  /** 碳氢键：从碳原子往外伸的一小段亮线 */
  const ch = ([x, y], [dx, dy]) => {
    const len = Math.hypot(dx, dy);
    return `<line x1="${x.toFixed(1)}" y1="${y.toFixed(1)}" x2="${(x + (dx / len) * 46).toFixed(1)}" y2="${(y + (dy / len) * 46).toFixed(1)}"/>`;
  };
  const bonds = [];
  centers.forEach((cx, i) => {
    const p = hex(cx);
    bonds.push(ch(p[0], [0, -1]), ch(p[3], [0, 1]));
    if (i === 0) bonds.push(ch(p[4], [-Math.sqrt(3), 1]), ch(p[5], [-Math.sqrt(3), -1]));
    if (i === 4) bonds.push(ch(p[1], [Math.sqrt(3), -1]), ch(p[2], [Math.sqrt(3), 1]));
  });
  const left = centers[0] - s / 2;
  const right = centers[4] + s / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <filter id="blur4" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>
    <filter id="blur10" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="10"/></filter>
    <filter id="blur30" x="-30%" y="-80%" width="160%" height="260%"><feGaussianBlur stdDeviation="30"/></filter>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="1" seed="3"/>
      <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.12 0"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="#8b8b8b"/>
  <rect x="${left - 70}" y="${cy - 175}" width="${right - left + 140}" height="350" rx="175" fill="#3e3e3e" filter="url(#blur30)"/>
  <g fill="#262626" filter="url(#blur10)">
    ${centers.map((cx, i) => `<polygon points="${poly(hex(cx))}" fill="${i === 0 || i === 4 ? "#5a5a5a" : "#262626"}"/>`).join("\n    ")}
  </g>
  <g fill="none" stroke="#f2f2f2" stroke-width="15" stroke-linejoin="round" filter="url(#blur4)">
    ${centers.map((cx) => `<polygon points="${poly(hex(cx))}"/>`).join("\n    ")}
  </g>
  <g stroke="#c9c9c9" stroke-width="11" stroke-linecap="round" filter="url(#blur4)">
    ${bonds.join("\n    ")}
  </g>
  <g fill="none" stroke="#ffffff" stroke-width="26" stroke-linecap="round" filter="url(#blur10)">
    <path d="M ${centers[0] - 20} ${cy - 120} Q ${left - 45} ${cy} ${centers[0] - 20} ${cy + 120}"/>
    <path d="M ${centers[4] + 20} ${cy - 120} Q ${right + 45} ${cy} ${centers[4] + 20} ${cy + 120}"/>
  </g>
  <rect width="${W}" height="${H}" filter="url(#grain)"/>
</svg>
`;
  out("pentacene.svg", svg);
}
