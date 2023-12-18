
import GoogleProvider from "next-auth/providers/google"

import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/app/lib/db"
import NextAuth from "next-auth/next";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string
    }),
  ],
  
}


const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
