import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: process.env.GITHUB_SECRET,
  session: {
    strategy: "jwt"
  },
  jwt: {
    encryption: true,
    secret: process.env.GITHUB_SECRET,
    maxAge: 60 * 60 * 24 * 30
  },
  callbacks: {
    async jwt({ token, account, profile }) {
      token.account = account;
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      return session;
    },
    async redirect({ url, baseUrl }) {
      return "/finder";
    }
  }
};

export default NextAuth(authOptions);
