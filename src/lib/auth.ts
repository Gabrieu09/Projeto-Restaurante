import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/db";
import {
  users,
  sessions,
  accounts,
  verificationTokens,
} from "@/db/schema";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
    schema: {
      users,
      sessions,
      accounts,
      verificationTokens,
    },
  }),
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  user: {
    modelName: "users",
    additionalFields: {
      stripeCustomerId: {
        type: "string",
        fieldName: "stripeCustomerId",
      },
      stripeSubscriptionId: {
        type: "string",
        fieldName: "stripeSubscriptionId",
      },
      plan: {
        type: "string",
        fieldName: "plan",
      },
    },
  },
  session: {
    modelName: "sessions",
  },
  account: {
    modelName: "accounts",
  },
  verification: {
    modelName: "verificationTokens",
  },
  emailAndPassword: {
    enabled: true,
  },
});
console.log(auth);
