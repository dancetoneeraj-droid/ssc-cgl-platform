"use client";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { auth } from "@/app/firebase";
import { isApprovedStudentEmail } from "@/lib/approved-emails";

type GuardState = "loading" | "authorized" | "denied";

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [guardState, setGuardState] = useState<GuardState>("loading");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setGuardState("loading");
        router.replace(`/login?next=${encodeURIComponent(pathname)}`);
        return;
      }

      if (!isApprovedStudentEmail(user.email)) {
        setGuardState("denied");
        await signOut(auth);
        router.replace("/login?denied=1");
        return;
      }

      setGuardState("authorized");
    });

    return () => unsubscribe();
  }, [pathname, router]);

  if (guardState === "authorized") return <>{children}</>;

  if (guardState === "denied") {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-500/25 bg-slate-900/80 p-6 text-center shadow-lg ring-1 ring-white/[0.04] backdrop-blur-sm">
          <p className="text-sm font-semibold text-red-300">Access Denied</p>
          <p className="mt-2 text-sm text-slate-400">Your Google account is not approved for this platform.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900/70 p-6 text-center backdrop-blur-sm ring-1 ring-blue-500/10">
        <p className="text-sm font-medium text-slate-300">Checking access...</p>
      </div>
    </main>
  );
}
