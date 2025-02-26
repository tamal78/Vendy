"use client";

import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AuthButton() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      setUser(data?.user || null);
    }
    fetchSession();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      {user ? (
        <>
          <p className="text-lg font-medium">Welcome, {user.name}!</p>
          <Button variant="destructive" onClick={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <Button onClick={() => signIn("google")}>Login with Google</Button>
      )}
    </div>
  );
}
