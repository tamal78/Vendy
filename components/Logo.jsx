import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="items-center gap-x-2 transition hover:opacity-75 md:flex">
        <Image src="/logo.svg" alt="Logo" height={30} width={30} />
        <div
          className={cn(
            "font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer",
            "hidden md:block"
          )}
        >
          Vendy
        </div>
      </div>
    </Link>
  );
}
