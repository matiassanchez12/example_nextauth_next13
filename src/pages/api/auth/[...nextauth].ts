import NextAuth from "next-auth";
import { AuthOptions } from "next-auth";

import { MongoDBAdapter } from "@auth/mongodb-adapter";
import { ObjectId } from "mongodb";

import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/lib/db/mongoDBclient";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: "auth",
    collections: {
      Users: "users",
      Accounts: "accounts",
      Sessions: "sessions"
    }
  }),
  providers: [
    GoogleProvider({
      clientId: String(process.env.GOOGLE_CLIENT_ID)!,
      clientSecret: String(process.env.GOOGLE_CLIENT_SECRET)!,
      profile(profile) {
        return {
          id: String(ObjectId.generate()),
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          role: "USER"
        };
      }
    })
  ],
  theme: {
    colorScheme: "dark",
    logo: "/logo.svg"
  },
  secret: String(process.env.NEXTAUTH_SECRET)
} as AuthOptions;

export default NextAuth(authOptions);
