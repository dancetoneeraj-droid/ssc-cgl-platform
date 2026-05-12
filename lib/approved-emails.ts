export const APPROVED_STUDENT_EMAILS = [
  "poorvabansal7@gmail.com",
  "kirarsachin20@gmail.com",
  "suruchidiwedi1107@gmail.com",
  "deek431@gmail.com",
  "mkme2020@gmail.com",
  "palasha770388@gmail.com",
  "dancetoneeraj@gmail.com"
  "choudharydeepanshu824@gmail.com",
  "ashish0602kumar@gmail.com",
] as const;

export function isApprovedStudentEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalizedEmail = email.trim().toLowerCase();
  return APPROVED_STUDENT_EMAILS.some((allowed) => allowed.toLowerCase() === normalizedEmail);
}
