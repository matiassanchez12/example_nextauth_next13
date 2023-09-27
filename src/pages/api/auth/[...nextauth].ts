import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";

import TwitchProvider from "next-auth/providers/twitch";

export const authOptions = {
  providers: [
    TwitchProvider({
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
