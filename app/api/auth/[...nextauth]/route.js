import User from "@models/user";
import { conneectDB } from "@utils/database";
import NextAuth from "next-auth/next";
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_SECRET_KEY
        })
    ],
    callbacks: {
        async session({ session }) {
            const sessionUser = await User.findOne({
                email: session.user.email
            })

            session.user.id = sessionUser._id.toString()

            return session
        },

        async signIn({ profile }) {
            try {
                // serverless route
                await conneectDB()

                // check if a user already exist
                const userExist = await User.findOne({
                    email: profile.email
                })

                // if not, create a new user
                if (!userExist) {
                    await User.create({
                        email: profile.email,
                        username: profile.name.replace(" ", "").toLowerCase(),
                        image: profile.picture
                    })
                }

                return true
            } catch (error) {
                console.error(error);
            }
        }
    }
})

export { handler as GET, handler as POST };

