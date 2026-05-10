export const APPROVED_STUDENT_EMAILS = [
  "aditi.coho@gmail.com",
  "student2@example.com",
  "student3@example.com",
] as const;

export function isApprovedStudentEmail(email: string | null | undefined): boolean {
  if (!email) return false;
  const normalizedEmail = email.trim().toLowerCase();
  return APPROVED_STUDENT_EMAILS.some((allowed) => allowed.toLowerCase() === normalizedEmail);
}
