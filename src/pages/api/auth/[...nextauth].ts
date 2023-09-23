import { prisma } from "@/lib/db";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID)!,
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET)!
    })
  ],
  theme: {
    colorScheme: "dark",
    logo: "/logo.svg"
  },
  secret: String(process.env.NEXTAUTH_SECRET)
} as AuthOptions;

export default NextAuth(authOptions);
