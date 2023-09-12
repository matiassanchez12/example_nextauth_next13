"use client";

import { signIn } from "next-auth/react";

export const SigninButton = () => {
  return (
    <button style={{ marginRight: 10 }} onClick={() => signIn("google")}>
      Signin
    </button>
  );
};
