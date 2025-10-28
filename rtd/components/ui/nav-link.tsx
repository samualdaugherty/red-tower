"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

export interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  ({ href, children, className }, ref) => {
    const pathname = usePathname();
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    return (
      <Link
        href={href}
        ref={ref}
        className={cn(
          "relative inline-flex flex-col items-center justify-center gap-2.5 isolate group",
          className
        )}
      >
        {/* Hover bar - appears above text */}
        <div
          className={cn(
            "absolute left-0 right-0 -top-8 bg-accent transition-all duration-300",
            "h-0 group-hover:h-5"
          )}
        />

        {/* Active state line - through center of text */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 bg-accent h-1 transition-all duration-300",
            isActive
              ? "left-[-9px] right-[-9px] opacity-100"
              : "left-0 right-0 opacity-0"
          )}
        />

        {/* Nav link text */}
        <span className="relative font-header text-[32px] leading-none tracking-[-0.96px] text-black text-center whitespace-nowrap z-[2]">
          {children}
        </span>
      </Link>
    );
  }
);

NavLink.displayName = "NavLink";

export { NavLink };

