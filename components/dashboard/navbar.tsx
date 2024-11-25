"use client";

import React from "react";
import { SidebarTrigger } from "../ui/sidebar";
import { Separator } from "../ui/separator";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { ModeToggle } from "../misc/mode-toggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
  const pathname = usePathname();

  const segments = pathname
    .split("/")
    .filter(Boolean)
    .map((segment, index, array) => ({
      name: segment.charAt(0).toUpperCase() + segment.slice(1),
      href: `/${array.slice(0, index + 1).join("/")}`,
    }));

  return (
    <header className="flex items-center justify-between w-full h-16 px-6 border-b border-b-sidebar-secondary">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1 hover:bg-primary" />
        <Separator orientation="vertical" className="h-6" />
        <Breadcrumb className="hidden lg:block">
          <BreadcrumbList className="flex items-center space-x-2 text-sm">
            {segments.map((segment, index) => (
              <React.Fragment key={segment.href}>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={segment.href}
                    className="hover:text-primary hover:font-bold"
                  >
                    {segment.name}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index < segments.length - 1 && (
                  <BreadcrumbSeparator>/</BreadcrumbSeparator>
                )}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
          href="/"
        >
          Go home
        </Link>
        <Link
          href="/api/auth/logout"
          prefetch={false}
          className="text-sm font-medium hover:underline hover:text-primary hover:font-bold underline-offset-4"
        >
          Logout
        </Link>
        <ModeToggle />
      </div>
    </header>
  );
};

export default DashboardNavbar;
