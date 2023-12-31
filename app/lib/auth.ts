
import GoogleProvider from "next-auth/providers/google"
import prisma from "./db"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
  ],
}