"use client";

import { signOut } from "next-auth/react";

export const LogoutButton = () => {
  return (
    <button style={{ marginRight: 10 }} className="ring-2 ring-red-400 rounded-md p-2" onClick={() => signOut()}>
      Sign Out
    </button>
  );
};
