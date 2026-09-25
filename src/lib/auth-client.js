import { createAuthClient } from "better-auth/react";

/**
 * Better Auth Client for EchoGPT
 * Provides authentication hooks and methods (signIn, signUp, signOut, useSession)
 */
export const authClient = createAuthClient({
  baseURL: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession } = authClient;
