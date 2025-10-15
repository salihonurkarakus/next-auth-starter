import AuthButton from "@/components/AuthButton";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-8 space-y-4">
      <h1 className="text-2xl font-bold">NextAuth + Auth0 Starter</h1>
      <p>Bu sayfa herkese açık. Giriş yapınca /dashboard açılır.</p>
      <AuthButton />
    </main>
  );
}
