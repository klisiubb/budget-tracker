"use client";
import { Wallet } from "lucide-react";
import Link from "next/link";
import React from "react";
import { ModeToggle } from "../misc/mode-toggle";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
//TODO Refactor this to accept array of links
const Navbar = () => {
  const { isAuthenticated } = useKindeBrowserClient();
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
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
            href="#faq"
          >
            FAQ
          </Link>
          {isAuthenticated ? (
            <div className="flex gap-4">
              <Link
                href="/dashboard"
                className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
              >
                Dashboard
              </Link>
              <Link
                href="/api/auth/logout"
                prefetch={false}
                className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
              >
                Logout
              </Link>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/api/auth/login"
                prefetch={false}
                className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
              >
                Login
              </Link>
            </div>
          )}
        </div>
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Navbar;
