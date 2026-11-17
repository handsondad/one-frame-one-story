import { useId, useState } from "react";
import { viewFor } from "../lib/view.ts";
import type { Frame, Spot } from "../stories/types.ts";

/** viewBox 的宽度；高度按图片比例算 */
const VB = 1000;

/** 标签放在圈的上面；贴着图片上边放不下时挪到圈下面 */
function labelY(s: Spot, h: number, k: number) {
  const above = s.y * h - s.r * VB - 12 * k;
  return above > 34 * k ? above : s.y * h + s.r * VB + 36 * k;
}

/** 一张图：把要看的地方圈出来，四周压暗，镜头慢慢推过去 */
export function FrameStage({ frame, spots }: { frame: Frame; spots: readonly Spot[] }) {
  const [aspect, setAspect] = useState<number | null>(null);
  const maskId = useId();
  const a = aspect ?? 1;
  const view = aspect ? viewFor(spots, a) : { scale: 1, x: 0, y: 0 };
  const h = VB * a;
  const k = 1 / view.scale;
  const spotsKey = spots.map((s) => `${s.x},${s.y},${s.r}`).join(";");

  return (
    <div className={frame.dark ? "frame-box dark" : "frame-box"}
      style={{ aspectRatio: `1 / ${a}`, ["--aspect" as string]: a }}>
      <div className="zoomer" style={{ transform: `translate(${view.x * 100}%, ${view.y * 100}%) scale(${view.scale})` }}>
        <img src={frame.src} alt={frame.alt} draggable={false}
          onLoad={(e) => setAspect(e.currentTarget.naturalHeight / e.currentTarget.naturalWidth)} />
        {aspect && spots.length > 0 && (
          <svg className="spots" key={spotsKey} viewBox={`0 0 ${VB} ${h}`} preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <mask id={maskId}>
                <rect width={VB} height={h} fill="#fff" />
                {spots.map((s, i) => <circle key={i} cx={s.x * VB} cy={s.y * h} r={s.r * VB} fill="#000" />)}
              </mask>
            </defs>
            <rect className="shade" width={VB} height={h} mask={`url(#${maskId})`} />
            {spots.map((s, i) => (
              <g key={i}>
                <circle className="ring" cx={s.x * VB} cy={s.y * h} r={s.r * VB} strokeWidth={5 * k} strokeDasharray={`${14 * k} ${9 * k}`} />
                {s.label && (
                  <text className="label" x={s.x * VB} y={labelY(s, h, k)} fontSize={34 * k} strokeWidth={9 * k}>
                    {s.label}
                  </text>
                )}
              </g>
            ))}
          </svg>
        )}
      </div>
    </div>
  );
}
