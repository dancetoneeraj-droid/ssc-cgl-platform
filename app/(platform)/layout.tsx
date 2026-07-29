import { PlatformShell } from "@/components/platform-shell";

export default function PlatformSectionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <PlatformShell>{children}</PlatformShell>;
}
