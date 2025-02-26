"use client";

import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function AuthButton({ title }) {
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
          <Button variant="destructive" onClick={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <div>
          <Button onClick={() => signIn("google")}>{title}</Button>
        </div>
      )}
    </div>
  );
}
