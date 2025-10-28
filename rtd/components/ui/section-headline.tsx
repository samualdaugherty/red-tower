"use client";

import * as React from "react";
import Image from "next/image";

interface SectionHeadlineProps {
  title: string;
  number: string;
  codeLeft: string;
  variant?: "dark" | "light"; // dark = cream text on black bg, light = black text on cream bg
  className?: string;
}

export function SectionHeadline({ title, number, codeLeft, variant = "dark", className = "" }: SectionHeadlineProps) {
  const [scrollProgress, setScrollProgress] = React.useState(0);
  const headlineRef = React.useRef<HTMLDivElement>(null);
  const textColor = variant === "light" ? "text-bg" : "text-fg";
  
  React.useEffect(() => {
    const handleScroll = () => {
      const headline = headlineRef.current;
      if (!headline) return;

      const rect = headline.getBoundingClientRect();
      
      // Start shrinking when headline is 100px from top, finish when it reaches 0px (top)
      // progress = 0 when rect.top = 100px (not shrunk yet)
      // progress = 1 when rect.top = 0px (fully shrunk)
      const startDistance = 100; // Start animation 100px before reaching top
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
  const scale = 1 - (scrollProgress * 0.8); // Scale from 1 to 0.2
  const codeOpacity = 1 - scrollProgress;
  const codeScale = 1 - (scrollProgress * 0.05); // Scale from 1 to 0.95
  const containerPaddingBottom = 10 - (scrollProgress * 8); // From 10px to 2px
  
  // Calculate actual rendered height of the text container
  // Original: 164px, scaled down to 20% = ~33px
  const titleContainerHeight = 164 - (scrollProgress * 131); // From 164px to 33px
  
  // Calculate code section height - shrink to 0 as it fades out
  // Approximate natural height of code text is ~16px (text-xs with line-height)
  const codeHeight = 16 - (scrollProgress * 16); // From 16px to 0px
  
  return (
    <div 
      ref={headlineRef}
      className={`flex flex-col w-full px-8 sticky top-0 z-40 ${variant === "light" ? "bg-fg/40" : "bg-bg/40"} ${className} backdrop-blur-md`}
      style={{
        paddingTop: '30px',
        paddingBottom: `${containerPaddingBottom}px`,
        gap: `${10 - (scrollProgress * 8)}px`, // Gap shrinks from 10px to 2px
      }}
    >
      {/* Title and Number */}
      <div 
        className={`flex items-center justify-between w-full font-header text-[164px] leading-none tracking-[-4.92px] ${textColor}`}
        style={{
          height: `${titleContainerHeight}px`,
        }}
      >
        <h2
          className="shrink-0 origin-left"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'left center',
          }}
        >
          {title}
        </h2>
        <p
          className="opacity-10 shrink-0 text-right origin-right pr-[3px]"
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'right center',
            paddingRight: `${scrollProgress * 164}px`, // From 0px to 156px
          }}
        >
          {number}
        </p>
      </div>
      
      {/* Divider Line */}
      <div className="h-0 w-full relative">
        <Image
          src="/images/hero-line.svg"
          alt=""
          width={1216}
          height={1}
          className="absolute top-[-0.5px] w-full"
        />
      </div>
      
      {/* Bottom Code - Fades out based on scroll */}
      <div
        className={`flex items-center justify-between w-full font-body font-light text-xs leading-[1.3] ${textColor} overflow-hidden`}
        style={{
          opacity: codeOpacity,
          transform: `scale(${codeScale})`,
          height: `${codeHeight}px`,
        }}
      >
        <p>
          <span className="text-accent">function</span> {codeLeft}
        </p>
        <p className="text-right">
          <span className="text-accent">display</span> === true;
        </p>
      </div>
    </div>
  );
}

