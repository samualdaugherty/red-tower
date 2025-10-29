"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
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
          )}
        >
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

export function AboutHero() {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [hasScrolled, setHasScrolled] = React.useState(false);
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [scrollY, setScrollY] = React.useState(0);
  const [isDarkBackground, setIsDarkBackground] = React.useState(true);
  const pathname = usePathname();

  // Track viewport size (desktop = >= 768px, mobile = < 768px)
  const [isMobile, setIsMobile] = React.useState(false);
  
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
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
      const lightSections = document.querySelectorAll('[data-background="light"]');
      let isOverLightSection = false;
      
      for (const section of Array.from(lightSections)) {
        const rect = section.getBoundingClientRect();
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

  // Calculate opacity and scale based on scroll progress
  const heroOpacity = 1 - scrollProgress;
  const heroScale = 1 - (scrollProgress * 0.2); // Scale from 1.0 to 0.8
  
  // Calculate slow scroll (25% speed) - move hero at 25% of scroll speed
  const slowScrollOffset = scrollY * 0.75;

  return (
    <>
      {/* Fixed Navigation Header - Logo and Toggle */}
      <nav className="fixed top-0 left-0 right-0 flex items-start justify-between w-full z-50 px-2 pt-2 pointer-events-none">
        {/* Logo - Always in rotated/small state for non-homepage */}
        <Link href="/" className="overflow-visible block pointer-events-auto">
          <div
            className={cn(
              "font-header text-[24px] leading-none whitespace-nowrap origin-left",
              isMobile && isNavOpen ? "text-fg" : "text-accent"
            )}
            style={{
              rotate: "-90deg",
              letterSpacing: "-0.72px",
              marginTop: "2.5rem",
              marginLeft: "0.5rem",
            }}
          >
            RDTWR
          </div>
        </Link>

        {/* Toggle Button (always visible) */}
        <div className="pointer-events-auto p-0">
          <button
            onClick={() => setIsNavOpen(!isNavOpen)}
            className="w-12 h-12 shrink-0 relative z-50"
            aria-label={isNavOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={{
                rotate: isNavOpen ? 135 : 0,
              }}
              transition={quickSpring}
            >
              <PlusIcon 
                isOpen={isMobile && isNavOpen ? false : isNavOpen} 
                isDarkBackground={isMobile && isNavOpen ? true : isDarkBackground} 
              />
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Flyout (< 768px) */}
      <AnimatePresence>
        {isNavOpen && isMobile && (
          <motion.div
            initial={{ rotate: 180 }}
            animate={{ rotate: 0 }}
            exit={{ rotate: 180 }}
            transition={quickSpring}
            className="fixed top-0 right-0 w-screen h-screen bg-accent z-40 origin-top-right"
          >
            {/* Inner container - counter-rotated to keep content upright */}
            <motion.div
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              exit={{ rotate: -180 }}
              transition={quickSpring}
              className="w-full h-full relative"
            >
              {/* Nav Links at bottom */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col pb-8">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <React.Fragment key={link.href}>
                      {index > 0 && (
                        <div className="h-px bg-bg w-full" />
                      )}
                      <Link
                        href={link.href}
                        onClick={() => setIsNavOpen(false)}
                        className="relative px-6 py-6 block"
                      >
                        <span className={cn(
                          "font-header text-[48px] leading-none tracking-[-1.44px] text-fg"
                        )}>
                          {link.label}
                        </span>
                        {isActive && (
                          <div className="absolute left-2 right-2 top-1/2 -translate-y-1/2 h-1 bg-bg" />
                        )}
                      </Link>
                    </React.Fragment>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation (>= 768px) */}
      <AnimatePresence>
        {isNavOpen && !isMobile && (
          <div className="hidden md:block fixed top-0 right-0 z-40 pr-2 md:pr-15 lg:pr-15 pt-2">
            <div className="flex gap-4 md:gap-6 lg:gap-[32px] items-center justify-end p-3 pt-2 pointer-events-auto">
              {navLinks.map((link, index) => (
                <NavLinkItem 
                  key={link.href}
                  link={link}
                  index={index}
                  totalLinks={navLinks.length}
                  isDarkBackground={isDarkBackground}
                />
              ))}
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* Page Container with Slide-Up Transition */}
      <motion.div
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={quickSpring}
        className="relative"
      >
        <section className="relative flex flex-col h-screen">
          {/* Background Image with Gradient Overlay - Parallax transform */}
          <div 
            aria-hidden="true" 
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: heroOpacity,
              transform: `translateY(${slowScrollOffset}px) scale(${heroScale})`,
              transformOrigin: 'center center',
              willChange: 'opacity, transform',
            }}
          >
            <Image
              src="/images/about-hero.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent from-[54.5%] to-bg" />
          </div>

          {/* Hero Content Container - Full 100vh with parallax transform */}
          <div 
            className="relative flex flex-col items-start justify-end flex-1 pb-24 z-10"
            style={{
              opacity: heroOpacity,
              transform: `translateY(${slowScrollOffset}px) scale(${heroScale})`,
              transformOrigin: 'center center',
              willChange: 'opacity, transform',
            }}
          >
            {/* Bottom Section - Content */}
            <div className="relative flex flex-col gap-3 md:gap-5 w-full px-6 md:px-8 lg:px-12">
              {/* Heading */}
              <div className="w-full">
                <h1 className="font-header text-[56px] sm:text-[72px] md:text-[96px] leading-none tracking-[-0.03em] text-fg">
                  Crafting Experiences
                </h1>
              </div>

              {/* Decorative Line */}
              <div className="w-full max-w-4xl -mx-6 md:-mx-8 lg:-mx-12">
                <div className="h-px w-full bg-accent" />
              </div>

              {/* Content - Right aligned with left padding */}
              <div className="flex flex-col gap-2.5 items-end w-full">
                <div className="w-full max-w-4xl ml-auto">
                  <p className="font-body text-base md:text-lg lg:text-xl leading-[1.5] text-fg font-light">
                    {`Red Tower is a team of two. And we've been that way since we started in 2017. It allows us to provide a personal experience for every client. Being small drives our core philosophy of how we work — One client at a time, focused on our craft, and delivering an experience that exceeds expectations.`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </>
  );
}

