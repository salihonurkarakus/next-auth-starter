"use client";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: s } = useSession();
  return (
    <main className="max-w-xl mx-auto p-8 space-y-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <pre className="bg-white p-4 rounded shadow text-sm">{JSON.stringify(s, null, 2)}</pre>
    </main>
  );
}
