// 画照片 51 号的示意图，输出 public/frames/photo-51.svg。
// 原照片版权属于伦敦国王学院，这里只按它的衍射图案结构重画：
// X 形的层线斑点（每条臂上第 4 层缺失）、上下两块子午弧、中间的挡束器阴影。
//
//   node tools/draw-photo51.mjs
import { writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const W = 800;
const H = 960;
const cx = W / 2;
const cy = H / 2;
/** 层线间距和 X 的张开程度 */
const STEP = 48;
const SPREAD = 30;

const blobs = [];
for (const side of [-1, 1]) {
  for (const arm of [-1, 1]) {
    for (let n = 1; n <= 8; n++) {
      if (n === 4) continue;
      const x = cx + arm * n * SPREAD;
      const y = cy + side * n * STEP;
      const w = 26 + n * 4;
      const o = n === 1 ? 0.55 : n <= 3 ? 0.85 : n <= 6 ? 0.7 : 0.4;
      blobs.push(`<ellipse cx="${x}" cy="${y}" rx="${w}" ry="11" fill-opacity="${o}"/>`);
    }
  }
}

// 子午弧：以中心为圆心、半径 R 的一小段圆弧，画得粗而模糊
const R = 400;
const arc = (side) => {
  const a = 0.36;
  const x1 = cx - R * Math.sin(a);
  const x2 = cx + R * Math.sin(a);
  const y = cy + side * R * Math.cos(a);
  return `<path d="M ${x1.toFixed(1)} ${y.toFixed(1)} A ${R} ${R} 0 0 ${side < 0 ? 1 : 0} ${x2.toFixed(1)} ${y.toFixed(1)}" />`;
};

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <defs>
    <radialGradient id="film" cx="50%" cy="50%" r="65%">
      <stop offset="0" stop-color="#ebe7df"/>
      <stop offset="0.6" stop-color="#cdc8bf"/>
      <stop offset="1" stop-color="#8e8a83"/>
    </radialGradient>
    <filter id="soft" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="4"/></filter>
    <filter id="softer" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="12"/></filter>
    <filter id="haze" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="40"/></filter>
    <filter id="grain">
      <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="51"/>
      <feColorMatrix values="0 0 0 0 0.2  0 0 0 0 0.19  0 0 0 0 0.18  0 0 0 0.22 0"/>
    </filter>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#film)"/>
  <g fill="#4a4740" opacity="0.32" filter="url(#haze)">
    <polygon points="${cx},${cy} 0,${cy - (cx * STEP) / SPREAD} 0,${cy + (cx * STEP) / SPREAD}"/>
    <polygon points="${cx},${cy} ${W},${cy - (cx * STEP) / SPREAD} ${W},${cy + (cx * STEP) / SPREAD}"/>
  </g>
  <g fill="#1f1d19" filter="url(#soft)">
    ${blobs.join("\n    ")}
  </g>
  <g fill="none" stroke="#1f1d19" stroke-width="44" stroke-linecap="round" filter="url(#softer)" opacity="0.9">
    ${arc(-1)}
    ${arc(1)}
  </g>
  <circle cx="${cx}" cy="${cy}" r="34" fill="#efece6" filter="url(#soft)"/>
  <rect width="${W}" height="${H}" filter="url(#grain)"/>
</svg>
`;

const out = join(root, "public", "frames", "photo-51.svg");
writeFileSync(out, svg);
console.log("public/frames/photo-51.svg");
