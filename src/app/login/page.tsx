"use client";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="max-w-xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold">Giriş</h1>
      <button onClick={() => signIn("auth0")} className="px-4 py-2 rounded bg-black text-white">
        Auth0 ile Giriş Yap
      </button>
    </main>
  );
}
