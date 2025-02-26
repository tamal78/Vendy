import React from "react";
import AuthButton from "@/components/AuthButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center border-b border-border h-[60px] px-4 py-2">
        <Logo />
        <div className="flex items-center justify-between gap-4">
          <ThemeSwitcher />
          <AuthButton title={"Login With Google"} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
