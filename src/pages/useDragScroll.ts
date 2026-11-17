import { useEffect, type RefObject } from "react";

/** 鼠标按住挪过这么多像素才算拖动，不算点击 */
const DRAG = 5;

/** 横向滚动的容器：电脑上可以按住拖、用竖向滚轮推；手机上手指直接滑 */
export function useDragScroll(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let drag: { x: number; left: number; moved: boolean } | null = null;
    let draggedAt = 0;
    const down = (e: PointerEvent) => {
      if (e.pointerType === "mouse" && e.button === 0) drag = { x: e.clientX, left: el.scrollLeft, moved: false };
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - drag.x;
      if (!drag.moved && Math.abs(dx) > DRAG) {
        drag.moved = true;
        el.classList.add("dragging");
      }
      if (drag.moved) el.scrollLeft = drag.left - dx;
    };
    const up = () => {
      if (drag?.moved) draggedAt = Date.now();
      drag = null;
      el.classList.remove("dragging");
    };
    // 拖完松手时浏览器会补一个点击，别让它点开卡片
    const click = (e: MouseEvent) => {
      if (Date.now() - draggedAt < 80) {
        e.stopPropagation();
        e.preventDefault();
      }
    };
    const wheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) <= Math.abs(e.deltaX)) return;
      const max = el.scrollWidth - el.clientWidth;
      // 滚到头了就让页面接着上下滚
      if (max <= 0 || (e.deltaY < 0 && el.scrollLeft <= 0) || (e.deltaY > 0 && el.scrollLeft >= max - 1)) return;
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    };
    el.addEventListener("pointerdown", down);
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
    el.addEventListener("click", click, true);
    el.addEventListener("wheel", wheel, { passive: false });
    return () => {
      el.removeEventListener("pointerdown", down);
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", up);
      el.removeEventListener("click", click, true);
      el.removeEventListener("wheel", wheel);
    };
  }, [ref]);
}
