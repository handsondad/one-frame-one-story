// 画“离子阱里的一个原子”示意图，输出 public/frames/single-atom.svg。
// 原照片（David Nadlinger，2017）没有开放许可，这里按它的构图重画：
// 左右两根针尖相对、中间悬着一个紫色光点，上下是 V 形刀片电极，
// 两边白色绝缘座，下面有黄铜柱，外圈是真空室观察窗的青色光晕。
//
//   node tools/draw-atom-trap.mjs
import { writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const S = 1000;
const c = S / 2;

/** 针：从 base 到 tip，水平放在 y = c */
const needle = (base, tip) => {
  const dir = Math.sign(tip - base);
  const coneStart = tip - dir * 42;
  return `
    <rect x="${Math.min(base, coneStart)}" y="${c - 11}" width="${Math.abs(coneStart - base)}" height="22" rx="4" fill="url(#steel)"/>
    <polygon points="${coneStart},${c - 11} ${tip},${c - 1.2} ${tip},${c + 1.2} ${coneStart},${c + 11}" fill="url(#steel)"/>`;
};

/** 刀片电极：上下各一块，V 形尖口对着中心 */
const blade = (side) => {
  const near = c + side * 26;
  const far = c + side * 135;
  return `<polygon points="${c - 230},${far} ${c + 230},${far} ${c + 230},${c + side * 70} ${c + 40},${near} ${c - 40},${near} ${c - 230},${c + side * 70}" fill="url(#metal)"/>
    <polyline points="${c - 230},${c + side * 70} ${c - 40},${near} ${c + 40},${near} ${c + 230},${c + side * 70}" fill="none" stroke="#b46bff" stroke-width="5" opacity="0.7" filter="url(#glow)"/>`;
};

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${S} ${S}" width="${S}" height="${S}">
  <defs>
    <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#5c6066"/>
      <stop offset="0.35" stop-color="#e6e9ee"/>
      <stop offset="0.6" stop-color="#9aa0a8"/>
      <stop offset="1" stop-color="#3c4046"/>
    </linearGradient>
    <linearGradient id="metal" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3d4148"/>
      <stop offset="0.5" stop-color="#6d727a"/>
      <stop offset="1" stop-color="#34373c"/>
    </linearGradient>
    <linearGradient id="brass" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#7a5a1e"/>
      <stop offset="0.45" stop-color="#e4b85a"/>
      <stop offset="1" stop-color="#6a4c18"/>
    </linearGradient>
    <radialGradient id="window" cx="50%" cy="50%" r="50%">
      <stop offset="0.82" stop-color="#000" stop-opacity="0"/>
      <stop offset="0.95" stop-color="#2bb7b0" stop-opacity="0.45"/>
      <stop offset="1" stop-color="#0c3b3a" stop-opacity="0.9"/>
    </radialGradient>
    <filter id="glow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="6"/></filter>
    <filter id="haze" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="40"/></filter>
    <filter id="halo" x="-200%" y="-200%" width="500%" height="500%"><feGaussianBlur stdDeviation="9"/></filter>
  </defs>
  <rect width="${S}" height="${S}" fill="#05060a"/>
  <g filter="url(#haze)" opacity="0.55">
    <ellipse cx="330" cy="170" rx="170" ry="70" fill="#ff8a2a"/>
    <ellipse cx="680" cy="150" rx="150" ry="60" fill="#25c2d6"/>
    <ellipse cx="520" cy="250" rx="120" ry="40" fill="#ff9d4a"/>
  </g>
  ${blade(-1)}
  ${blade(1)}
  <g stroke="#c8733a" stroke-width="5" fill="none">
    <path d="M 175 545 C 120 545 80 580 30 600"/>
    <path d="M 175 575 C 120 590 80 640 20 680"/>
    <path d="M 825 545 C 880 545 920 580 970 600"/>
    <path d="M 825 575 C 880 590 920 640 980 680"/>
  </g>
  <rect x="175" y="470" width="115" height="160" rx="10" fill="#e8e4da"/>
  <rect x="710" y="470" width="115" height="160" rx="10" fill="#e8e4da"/>
  ${needle(290, 482)}
  ${needle(710, 520)}
  <g stroke="#cfd3d8" stroke-width="3">
    <line x1="488" y1="635" x2="494" y2="830"/>
    <line x1="512" y1="635" x2="506" y2="830"/>
  </g>
  <rect x="470" y="830" width="60" height="120" rx="6" fill="url(#brass)"/>
  <circle cx="${c}" cy="${c}" r="16" fill="#c45cff" opacity="0.8" filter="url(#halo)"/>
  <circle cx="${c}" cy="${c}" r="4" fill="#f3a6ff"/>
  <rect width="${S}" height="${S}" fill="url(#window)"/>
</svg>
`;

writeFileSync(join(root, "public", "frames", "single-atom.svg"), svg);
console.log("public/frames/single-atom.svg");
