import { PlatformShell } from "@/components/platform-shell";
import { AuthGuard } from "@/components/auth-guard";

export default function PlatformSectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthGuard>
      <PlatformShell>{children}</PlatformShell>
    </AuthGuard>
  );
}
