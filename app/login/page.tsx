"use client";

import Link from "next/link";
import { auth } from "../firebase";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { isApprovedStudentEmail } from "@/lib/approved-emails";

export default function LoginPage() {
  const router = useRouter();
  const [accessDenied, setAccessDenied] = useState(false);
  const [nextPath, setNextPath] = useState<string | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAccessDenied(params.get("denied") === "1");
    setNextPath(params.get("next"));
  }, []);

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);
      if (!isApprovedStudentEmail(result.user.email)) {
        await signOut(auth);
        alert("Access Denied");
        router.replace("/login?denied=1");
        return;
      }

      const targetPath = nextPath && nextPath.startsWith("/") ? nextPath : "/";
      router.push(targetPath);
    } catch (error) {
      console.log(error);
      alert(error instanceof Error ? error.message : "Sign in failed");
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_-10%,rgba(59,130,246,0.2),transparent_50%),radial-gradient(circle_at_80%_120%,rgba(14,165,233,0.1),transparent_55%)]" />
      <div className="relative w-full max-w-md rounded-[1.75rem] border border-blue-500/20 bg-slate-900/70 p-8 text-center shadow-[0_0_60px_-20px_var(--accent-glow)] backdrop-blur-xl ring-1 ring-white/[0.05] sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400">ToThePoint-SSC</p>
        <h1 className="mt-3 text-2xl font-semibold tracking-tight text-white">Sign in</h1>
        <p className="mt-2 text-sm text-slate-400">Continue with Google — you will enter the learner workspace instantly.</p>
        {accessDenied ? (
          <p className="mt-4 rounded-xl border border-red-500/30 bg-red-950/50 px-3 py-2 text-sm font-medium text-red-300">
            Access Denied
          </p>
        ) : null}

        <button
          type="button"
          onClick={handleGoogleLogin}
          className="mt-8 inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3.5 text-sm font-semibold text-white shadow-inner transition hover:border-blue-400/35 hover:bg-slate-900/80"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="currentColor"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="currentColor"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            />
            <path
              fill="currentColor"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            />
          </svg>
          Sign in with Google
        </button>

        <p className="mt-8 text-center text-xs text-slate-500">
          Prefer browsing first?{" "}
          <Link href="/" className="font-medium text-blue-400 transition hover:text-blue-300">
            Return home
          </Link>
        </p>
      </div>
    </main>
  );
}
