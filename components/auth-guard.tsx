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
      <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
        <div className="w-full max-w-md rounded-2xl border border-red-200 bg-white p-6 text-center shadow-sm">
          <p className="text-sm font-semibold text-red-700">Access Denied</p>
          <p className="mt-2 text-sm text-slate-600">Your Google account is not approved for this platform.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
        <p className="text-sm font-medium text-slate-700">Checking access...</p>
      </div>
    </main>
  );
}
