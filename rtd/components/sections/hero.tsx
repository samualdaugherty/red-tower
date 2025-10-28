"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@/components/ui/plus-icon";
import { cn } from "@/lib/cn";
import { quickSpring } from "@/lib/animations";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

function NavLinkItem({ link, index, totalLinks, isDarkBackground }: { link: { href: string; label: string }; index: number; totalLinks: number; isDarkBackground: boolean }) {
  const pathname = usePathname();
  const isActive = pathname === link.href;
  const [isHovered, setIsHovered] = React.useState(false);

  return (
        <motion.div
          key={link.href}
          initial={{ x: 48 * (totalLinks - index), opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 48 * (totalLinks - index), opacity: 0 }}
          transition={quickSpring}
          className="flex flex-col gap-2.5 isolate items-center justify-center relative"
        >
      <Link
        href={link.href}
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
            {/* Text */}
            <span 
              className={cn(
              "font-header text-[32px] leading-none tracking-[-0.96px] whitespace-nowrap relative",
              isActive ? "z-[1]" : "z-[2]",
              isDarkBackground ? "text-fg" : "text-bg"
            )}>
              {link.label}
            </span>
        
        {/* ONE red box that changes size, position, and z-index - Spring physics */}
            <motion.div
              initial={false}
              animate={{
                height: isActive ? 4 : isHovered ? 20 : 0,
                left: isActive ? -9 : 0,
                right: isActive ? -9 : 0,
                top: isActive ? "50%" : "-32px",
                y: isActive ? "-50%" : "0%",
              }}
              transition={quickSpring}
              className={cn(
                "absolute bg-accent",
                isActive ? "z-[2]" : "z-[1]"
              )}
            />
      </Link>
    </motion.div>
  );
}

export function Hero() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [isDesktop, setIsDesktop] = React.useState(true);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);
  const [isDarkBackground, setIsDarkBackground] = React.useState(true); // Track if nav is over dark bg
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Track viewport size
  React.useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };
    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track scroll position and calculate progress for parallax effect
  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      
      // Calculate scroll progress (0 to 1) over one viewport height
      const progress = Math.min(currentScrollY / viewportHeight, 1);
      
      setScrollY(currentScrollY);
      setHasScrolled(currentScrollY > 50);
      setScrollProgress(progress);

      // Detect if nav is over a light (cream) background section
      // Check all sections with data-background="light"
      const lightSections = document.querySelectorAll('[data-background="light"]');
      let isOverLightSection = false;
      
      for (const section of Array.from(lightSections)) {
        const rect = section.getBoundingClientRect();
        // Check if the top 100px of viewport overlaps with this section
        if (rect.top <= 100 && rect.bottom > 0) {
          isOverLightSection = true;
          break;
        }
      }
      
      setIsDarkBackground(!isOverLightSection);
    };

    // Use requestAnimationFrame for smooth scrolling performance
    let ticking = false;
    const handleScrollWithRAF = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScrollWithRAF);
    handleScroll(); // Set initial value
    return () => window.removeEventListener("scroll", handleScrollWithRAF);
  }, []);

  // Auto-open nav when scrolled - DISABLED for parallax effect
  // React.useEffect(() => {
  //   if (hasScrolled && !isNavOpen) {
  //     setIsNavOpen(true);
  //   }
  // }, [hasScrolled, isNavOpen]);

  // Calculate opacity and scale based on scroll progress
  const heroOpacity = isHomepage ? 1 - scrollProgress : 1;
  const heroScale = isHomepage ? 1 - (scrollProgress * 0.2) : 1; // Scale from 1.0 to 0.8
  
  // Calculate slow scroll (25% speed) - move hero at 25% of scroll speed
  const slowScrollOffset = isHomepage ? scrollY * 0.75 : 0;

  return (
    <>
      {/* Fixed Navigation - Outside hero for proper z-index */}
      <nav className="fixed top-0 left-0 right-0 flex items-start justify-between w-full z-50 px-6 lg:px-2 pt-2">
        {/* Logo */}
        <Link href="/" className="overflow-visible block pointer-events-auto">
          <motion.div
            animate={{
              fontSize: hasScrolled ? "24px" : isDesktop ? "164px" : "80px",
              rotate: hasScrolled ? -90 : 0,
              letterSpacing: hasScrolled ? "-0.72px" : isDesktop ? "-4.92px" : "-2.4px",
              marginTop: hasScrolled ? "2.5rem" : "0rem",
              marginLeft: hasScrolled ? "0.5rem" : "0rem",
            }}
            transition={{
              duration: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
              className={`font-header leading-none whitespace-nowrap origin-left ${isDarkBackground ? 'text-accent' : 'text-bg'}`}
            >
              RDTWR
            </motion.div>
          </Link>

        {/* Navigation Toggle & Links */}
        <div className="flex gap-[32px] items-center justify-end p-3 pointer-events-auto">
          <AnimatePresence>
            {isNavOpen && (
              <>
                {navLinks.map((link, index) => (
                  <NavLinkItem 
                    key={link.href}
                    link={link}
                    index={index}
                    totalLinks={navLinks.length}
                    isDarkBackground={isDarkBackground}
                  />
                ))}
              </>
            )}
          </AnimatePresence>

          {/* Plus/X Toggle Button */}
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="w-12 h-12 shrink-0"
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{
                rotate: isNavOpen ? 135 : 0,
              }}
              transition={quickSpring}
            >
              <PlusIcon isOpen={isNavOpen} isDarkBackground={isDarkBackground} />
            </motion.div>
          </button>
        </div>
      </nav>

      <section className="relative flex flex-col h-screen">
        {/* Background Image with Gradient Overlay - Parallax transform */}
        <div 
          aria-hidden="true" 
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: heroOpacity,
            transform: isHomepage 
              ? `translateY(${slowScrollOffset}px) scale(${heroScale})` 
              : 'none',
            transformOrigin: 'center center',
            willChange: isHomepage ? 'opacity, transform' : 'auto',
          }}
        >
          <Image
            src="/images/hero-bg.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[24.5%] to-bg" />
        </div>

        {/* Hero Content Container - Full 100vh with parallax transform */}
        <div 
          className="relative flex flex-col items-end justify-end flex-1 pb-24 z-10"
          style={{
            opacity: heroOpacity,
            transform: isHomepage 
              ? `translateY(${slowScrollOffset}px) scale(${heroScale})` 
              : 'none',
            transformOrigin: 'center center',
            willChange: isHomepage ? 'opacity, transform' : 'auto',
          }}
        >
          {/* Bottom Section - Content */}
          <div className="relative flex flex-col gap-5 w-full px-6 lg:px-12">
          {/* Decorative Line */}
          <div className="w-full max-w-[834px] -mx-6 lg:-mx-12">
            <Image
              src="/images/hero-line.svg"
              alt=""
              width={834}
              height={1}
              className="w-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-2.5 items-end lg:px-8 w-full">
            <div className="w-full lg:w-[761px]">
              <p className="font-body text-lg lg:text-xl leading-[1.5] text-fg">
                <span className="font-semibold">Building your own website is a mountain of work.</span>
                <span className="font-light">
                  {` But it doesn't have to be that way. Let Red Tower take on the task for you, streamline your web presence, so you can focus on what really matters — your customers.`}
                </span>
              </p>
            </div>

            <div className="w-full lg:w-[761px] py-3.5">
              <Link href="/about">
                <Button className="text-fg">Learn More</Button>
              </Link>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
