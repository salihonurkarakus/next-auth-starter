import NextAuth from "next-auth";
import Auth0 from "next-auth/providers/auth0";

const handler = NextAuth({
  providers: [Auth0({
    issuer: process.env.AUTH0_ISSUER_BASE_URL,
    clientId: process.env.AUTH0_CLIENT_ID!,
    clientSecret: process.env.AUTH0_CLIENT_SECRET!,
  })],
  session: { strategy: "jwt" },
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile) { token.email = (profile as any)?.email; (token as any).role = "user"; }
      return token;
    },
    async session({ session, token }) {
      if (session.user) { session.user.email = token.email as any; /* @ts-ignore */ session.user.role = (token as any).role ?? "user"; }
      return session;
    },
  },
});
export { handler as GET, handler as POST };
