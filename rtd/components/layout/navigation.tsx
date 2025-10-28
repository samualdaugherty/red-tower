"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "@/components/ui/nav-link";
import { cn } from "@/lib/cn";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center justify-end gap-8 px-12 py-6 bg-bg border-b border-fg/10 top-0 z-50">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href}>
            {link.label}
          </NavLink>
        ))}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-12 h-12 shrink-0 relative"
          aria-label="Toggle menu"
        >
          <Image
            src="/icons/menu-closed.svg"
            alt="Menu"
            fill
            className="object-contain"
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden flex items-center justify-between px-0 py-4 bg-bg sticky top-0 z-50">
        <Link href="/" className="font-header text-[64px] leading-none tracking-[-1.92px] text-accent">
          RDTWR
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-20 h-20 shrink-0 relative"
          aria-label="Toggle menu"
        >
          <Image
            src={isOpen ? "/icons/menu-open.svg" : "/icons/menu-closed.svg"}
            alt="Menu"
            fill
            className="object-contain"
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-accent z-40 lg:hidden flex flex-col justify-between pb-14"
          >
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-4">
              <Link
                href="/"
                className="font-header text-[64px] leading-none tracking-[-1.92px] text-fg"
              >
                RDTWR
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="w-20 h-20 shrink-0 relative"
                aria-label="Close menu"
              >
                <Image
                  src="/icons/menu-open.svg"
                  alt="Close"
                  fill
                  className="object-contain"
                />
              </button>
            </div>

            {/* Mobile Menu Links */}
            <div className="flex flex-col gap-6 w-full">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative border-b border-black px-6 py-4"
                  >
                    <span className="font-header text-[64px] leading-none tracking-[-1.92px] text-fg">
                      {link.label}
                    </span>
                    {isActive && (
                      <div className="absolute left-0 top-[46px] h-2 bg-fg w-24" />
                    )}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

