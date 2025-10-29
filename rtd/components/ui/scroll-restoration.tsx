"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * ScrollRestoration component
 * Automatically scrolls to the top of the page when the route changes
 */
export function ScrollRestoration() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

