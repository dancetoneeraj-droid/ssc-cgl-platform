export type ContentTrack = "full-course" | "pyq";

export const ACCESS_PRICING: Record<ContentTrack, { label: string; amount: number }> = {
  pyq: { label: "PYQ", amount: 250 },
  "full-course": { label: "Full Course", amount: 1000 },
};

/** First lecture in every section is free; index 0 = free, 1+ = gated. */
export function isFreeLecture(lectureIndex: number): boolean {
  return lectureIndex === 0;
}

export function lectureRequiresAccess(lectureIndex: number): boolean {
  return lectureIndex > 0;
}
