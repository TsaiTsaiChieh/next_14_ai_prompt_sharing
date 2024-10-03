import User from "@models/User";
import { connectToDB } from "@utils/database";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      try {
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();
        return session;
      } catch (error) {
        console.error(error);
      }
    },
    async signIn({ profile }) {
      try {
        await connectToDB();
        // check if a user already exist
        const userExists = await User.findOne({ email: profile.email });
        // if not, create a new user
        const userData = {
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture,
        };
        if (!userExists) await User.create(userData);
        else await User.findOneAndUpdate(userData);

        return true;
      } catch (error) {
        console.error(error);
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
