/** 年份怎么写、怎么分世纪。公元前的年份用负数存，比如公元前 196 年写 -196（没有公元 0 年）。 */

export const yearText = (s: { year: number; circa?: boolean }) =>
  `${s.circa ? "约 " : ""}${s.year < 0 ? `公元前 ${-s.year}` : s.year}`;

/** 1~100 年是 1 世纪；公元前 100~1 年是 -1 世纪（公元前 1 世纪） */
export const centuryOf = (year: number) =>
  year < 0 ? -(Math.floor((-year - 1) / 100) + 1) : Math.floor((year - 1) / 100) + 1;

export const centuryName = (c: number) => (c < 0 ? `公元前 ${-c} 世纪` : `${c} 世纪`);

/** 这个世纪从哪年到哪年，按从早到晚说 */
export const centuryNote = (c: number) =>
  c < 0 ? `公元前 ${-c * 100}—前 ${(-c - 1) * 100 + 1} 年` : `${(c - 1) * 100 + 1}—${c * 100} 年`;
