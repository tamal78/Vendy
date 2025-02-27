"use client";

import { useState, useEffect } from "react";
import { signIn, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton"; // Import Skeleton

export default function AuthButton({ title }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchSession() {
      const res = await fetch("/api/auth/session");
      const data = await res.json();
      setUser(data?.user || null);
      setLoading(false); // Stop loading once the session is fetched
    }
    fetchSession();
  }, []);

  return (
    <div className="flex items-center gap-4">
      {loading ? (
        // Skeleton Loader while fetching session
        <Skeleton className="w-10 h-10 rounded-full" />
      ) : user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="w-10 h-10 cursor-pointer">
              <AvatarImage
                src={user.image || "/default-avatar.png"}
                alt={user.name}
              />
              <AvatarFallback>
                {user.name?.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem className="cursor-default">
              Welcome, {user.name}!
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => signOut()}
              className="cursor-pointer text-red-500"
            >
              Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Button onClick={() => signIn("google")}>{title}</Button>
      )}
    </div>
  );
}
