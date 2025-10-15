"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButton() {
  const { data: s, status } = useSession();
  if (status === "loading") return <span>Yükleniyor…</span>;
  if (!s) {
    return (
      <button onClick={() => signIn("auth0")} className="px-4 py-2 rounded bg-black text-white">
        Giriş Yap
      </button>
    );
  }
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-700">{s.user?.email}</span>
      <button onClick={() => signOut()} className="px-3 py-1.5 rounded bg-black text-white">
        Çıkış
      </button>
    </div>
  );
}
