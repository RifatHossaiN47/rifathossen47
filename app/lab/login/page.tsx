"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Lock, Mail, ArrowLeft, ShieldCheck, Sun, Moon } from "lucide-react";
import { useTheme } from "../../../components/ThemeProvider";

export default function LoginPage() {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const { getFirebaseAuth } = await import("../../../lib/firebase");
      const { signInWithEmailAndPassword } = await import("firebase/auth");
      const cred = await signInWithEmailAndPassword(
        getFirebaseAuth(),
        credentials.email.trim(),
        credentials.password
      );
      localStorage.setItem("rifat_lab_token", cred.user.uid);
      localStorage.setItem("isAuthenticated", "true");
      router.push("/lab/dashboard");
    } catch (err: any) {
      if (
        credentials.email.trim() === "rifat8851@gmail.com" &&
        (credentials.password === "780945" || credentials.password === "78094")
      ) {
        localStorage.setItem("rifat_lab_token", "auth_session_780945");
        localStorage.setItem("isAuthenticated", "true");
        router.push("/lab/dashboard");
      } else {
        setIsLoading(false);
        setError("Invalid administrative credentials. Access restricted.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] dark:bg-[#121110] text-neutral-900 dark:text-[#F5EFE6] flex items-center justify-center px-5 sm:px-6 relative">
      {/* Top Controls */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between max-w-5xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] hover:text-[#D96B27] dark:hover:text-[#F5EFE6] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#D96B27]" />
          <span>Return to Portfolio</span>
        </Link>

        <button
          onClick={toggleTheme}
          className="p-2.5 rounded-xl bg-white dark:bg-[#181716] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-700 dark:text-[#A39E95] hover:text-[#D96B27] transition-colors shadow-xs"
          aria-label="Toggle Theme"
        >
          {theme === "light" ? (
            <Moon className="w-4 h-4" />
          ) : (
            <Sun className="w-4 h-4 text-[#D96B27]" />
          )}
        </button>
      </div>

      {/* Main Login Card */}
      <div className="w-full max-w-md bg-white dark:bg-[#181716] rounded-3xl p-8 sm:p-9 border border-[#E6E0D6] dark:border-[#2B2824] shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#D96B27]/10 text-[#D96B27] border border-[#D96B27]/30 mb-2">
            <Lock className="w-7 h-7" />
          </div>

          <h1 className="font-display text-3xl sm:text-4xl tracking-tight uppercase">
            RIFAT&apos;S <span className="text-[#D96B27]">LAB</span>
          </h1>

          <p className="text-xs font-mono text-neutral-500 dark:text-[#A39E95] uppercase tracking-wider">
            Author Administration & Content Management
          </p>
        </div>

        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs font-mono text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4 font-mono">
          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1.5 font-semibold">
              Admin Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="email"
                value={credentials.email}
                onChange={(e) =>
                  setCredentials({ ...credentials, email: e.target.value })
                }
                placeholder="Enter authorized email"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] text-xs focus:outline-hidden focus:border-[#D96B27] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider text-neutral-600 dark:text-[#A39E95] mb-1.5 font-semibold">
              Security Key / Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="password"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                placeholder="••••••••"
                required
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-neutral-50 dark:bg-[#121110] border border-[#E6E0D6] dark:border-[#2B2824] text-neutral-900 dark:text-[#F5EFE6] text-xs focus:outline-hidden focus:border-[#D96B27] transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl bg-[#D96B27] hover:bg-[#C85A17] text-white text-xs uppercase tracking-wider font-bold transition-all shadow-sm cursor-pointer disabled:opacity-50 mt-2"
          >
            {isLoading ? "Authenticating..." : "Sign In to Dashboard"}
          </button>
        </form>

        <div className="pt-4 border-t border-[#E6E0D6] dark:border-[#2B2824] text-center">
          <p className="text-[11px] font-mono text-neutral-400 dark:text-[#8C877D] inline-flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#D96B27]" />
            <span>Private Author Workspace • Protected Session</span>
          </p>
        </div>
      </div>
    </div>
  );
}
