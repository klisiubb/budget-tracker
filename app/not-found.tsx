"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-transparent bg-gradient-to-r from-secondary to-primary bg-clip-text">
            404
          </span>{" "}
          Page Not Found
        </h1>

        <p className="text-xl text-muted-foreground">
          Oops! It seems like you've ventured into uncharted territory. Let's
          get you back on track with your budgeting journey.
        </p>

        <Button asChild className="w-full md:w-auto font-bold group/arrow">
          <Link href="/">
            <ArrowLeft className="size-5 mr-2 group-hover/arrow:-translate-x-1 transition-transform" />
            Return to Homepage
          </Link>
        </Button>

        <div className="mt-8 p-6 bg-muted rounded-lg border border-border">
          <p className="text-lg font-semibold">
            Remember, staying on budget is key to financial success!
          </p>
        </div>
      </div>
    </div>
  );
}
