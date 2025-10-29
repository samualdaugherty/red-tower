"use client";

import * as React from "react";

interface SectionHeadlineProps {
  title: string;
  number: string;
  codeLeft: string;
  variant?: "dark" | "light"; // dark = cream text on black bg, light = black text on cream bg
  className?: string;
}

export function SectionHeadline({ title, number, codeLeft, variant = "dark", className = "" }: SectionHeadlineProps) {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const [viewportSize, setViewportSize] = React.useState<'xs' | 'sm' | 'lg'>('lg');
  const headlineRef = React.useRef<HTMLDivElement>(null);
  const textColor = variant === "light" ? "text-bg" : "text-fg";
  
  // Track viewport size (xs: <640px, sm: 640-1023px, lg: >=1024px)
  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setViewportSize('lg');
      } else if (width >= 640) {
        setViewportSize('sm');
      } else {
        setViewportSize('xs');
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  React.useEffect(() => {
    const handleScroll = () => {
      const headline = headlineRef.current;
      if (!headline) return;

      const rect = headline.getBoundingClientRect();
      
      // Start shrinking when headline is 100px from top, finish when it reaches 0px (top)
      const startDistance = 100;
      const progress = Math.max(0, Math.min(1, 1 - (rect.top / startDistance)));
      
      setScrollProgress(progress);
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
  
  // Calculate transform values based on scroll progress
  const scale = 1 - (scrollProgress * 0.6); // Scale from 1 to 0.4
  const codeOpacity = 1 - scrollProgress;
  const codeScale = 1 - (scrollProgress * 0.05); // Scale from 1 to 0.95
  
  // Calculate effective height based on scale
  // xs: 56px, sm: 96px, lg: 164px
  const baseHeight = viewportSize === 'lg' ? 164 : viewportSize === 'sm' ? 96 : viewportSize === 'xs' ? 56 : 56;
  const effectiveHeight = baseHeight * scale;
  
  return (
    <div 
      ref={headlineRef}
      className={`flex flex-col w-full px-4 md:px-6 lg:px-8 sticky top-0 z-30 ${variant === "light" ? "bg-fg/40" : "bg-bg/40"} ${className} backdrop-blur-md py-4 pb-0 gap-2 md:gap-3 lg:gap-4 transition-all duration-200`}
    >
      {/* Title and Number */}
      <div 
        className={`flex items-center justify-between w-full font-header text-[56px] sm:text-[96px] lg:text-[164px] leading-none tracking-[-0.03em] ${textColor} overflow-hidden`}
        style={{ height: `${effectiveHeight}px` }}
      >
        <h2
          className="shrink-0 origin-left"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'left center',
            marginLeft: `${scrollProgress * 20}px`,
          }}
        >
          {title}
        </h2>
        <p
          className="opacity-10 shrink-0 text-right origin-right"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'right center',
            marginRight: `${scrollProgress * 24}px`,
          }}
        >
          {number}
        </p>
      </div>
      
      {/* Divider Line - Simple responsive div */}
      <div className="h-px w-full bg-accent" />
      
      {/* Bottom Code - Fades out based on scroll */}
      <div
        className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full font-body font-light text-xs leading-[1.3] ${textColor} overflow-hidden transition-all duration-200`}
        style={{
          opacity: codeOpacity,
          transform: `scale(${codeScale})`,
          maxHeight: codeOpacity > 0 ? '40px' : '0px',
        }}
      >
        <p className="truncate">
          <span className="text-accent">function</span> {codeLeft}
        </p>
        <p className="text-left md:text-right whitespace-nowrap ml-0 md:ml-4">
          <span className="text-accent">display</span> === true;
        </p>
      </div>
    </div>
  );
}

