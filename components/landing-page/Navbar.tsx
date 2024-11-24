import { Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../misc/mode-toggle";
//TODO Refactor this to accept array of links
const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center sticky top-0 z-100 shadow-xl">
      <Link className="flex items-center justify-center text-primary" href="/">
        <Wallet className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">Budgetify</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <div className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
            href="#"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
            href="#"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
            href="#"
          >
            About
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
            href="#"
          >
            Contact
          </Link>
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
