import type { Line, Spot } from "./types.ts";

type Extra = Pick<Line, "look" | "part" | "show">;

export const nian = (say: string, extra: Extra = {}): Line => ({ who: "nian", say, ...extra });
export const dad = (say: string, extra: Extra = {}): Line => ({ who: "dad", say, ...extra });

export const spot = (x: number, y: number, r: number, label?: string, zoom?: number): Spot =>
  ({ x, y, r, ...(label ? { label } : {}), ...(zoom ? { zoom } : {}) });
