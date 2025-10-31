"use client";

import * as React from "react";
import { SectionHeadline } from "@/components/ui/section-headline";

interface ProcessCard {
  id: string;
  title: string;
  description: string;
}

const processCards: ProcessCard[] = [
  {
    id: "discovery",
    title: "Discovery",
    description: "What problem are we solving here and what's the best method to achieve it?",
  },
  {
    id: "architecture",
    title: "Architecture",
    description: "Crafting information flows, user paths, and page structures before we begin visuals.",
  },
  {
    id: "design",
    title: "Design",
    description: "Fully original, thoughtful, designs, with no shortcuts and no recycled UI kits.",
  },
  {
    id: "review",
    title: "Review",
    description: "We review the designs, collect feedback, and refine the designs together until it feels right.",
  },
  {
    id: "build",
    title: "Build",
    description: "Fully custom, hand-built code. No templates, no drag-and-drop builders, polished to perfection.",
  },
  {
    id: "launch",
    title: "Launch",
    description: "Fully custom, hand-built code. No templates, no drag-and-drop builders, polished to perfection.",
  },
];

export function ProcessProcess() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const svgRef = React.useRef<SVGSVGElement>(null);
  const pathRef = React.useRef<SVGPathElement>(null);
  const mobileLineRef = React.useRef<SVGPathElement>(null);
  const mobileSvgRef = React.useRef<SVGSVGElement>(null);
  const [pathData, setPathData] = React.useState<{ d: string; length: number } | null>(null);
  const [mobileLineLength, setMobileLineLength] = React.useState<number>(0);

  // Calculate mobile line length after render
  React.useEffect(() => {
    const calculateMobileLine = () => {
      if (!mobileLineRef.current || !containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const svgRect = mobileSvgRef.current?.getBoundingClientRect();
      
      if (!svgRect) return;
      
      // Calculate center X position relative to SVG
      const centerX = svgRect.width / 2;
      
      // Create path from top to bottom at center
      const pathD = `M ${centerX} 0 L ${centerX} ${svgRect.height}`;
      mobileLineRef.current.setAttribute("d", pathD);
      
      // Calculate and store length
      const length = mobileLineRef.current.getTotalLength();
      setMobileLineLength(length);
      mobileLineRef.current.setAttribute("stroke-dasharray", `${length}`);
      mobileLineRef.current.setAttribute("stroke-dashoffset", `${length}`);
    };

    const timeout = setTimeout(calculateMobileLine, 100);
    window.addEventListener("resize", calculateMobileLine);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculateMobileLine);
    };
  }, []);

  // Calculate single continuous path through all cards (desktop)
  React.useEffect(() => {
    const calculatePath = () => {
      if (!containerRef.current || cardRefs.current.length === 0) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const pathSegments: string[] = [];
      let isFirst = true;

      for (let i = 0; i < cardRefs.current.length; i++) {
        const card = cardRefs.current[i];
        if (!card) continue;

        const cardRect = card.getBoundingClientRect();
        const x = cardRect.left + cardRect.width / 2 - containerRect.left;
        const y = cardRect.top + cardRect.height / 2 - containerRect.top;

        if (isFirst) {
          // Start at first card's center
          pathSegments.push(`M ${x} ${y}`);
          isFirst = false;
        } else {
          // Connect to next card with curved path
          const prevCard = cardRefs.current[i - 1];
          if (!prevCard) continue;

          const prevRect = prevCard.getBoundingClientRect();
          const prevX = prevRect.left + prevRect.width / 2 - containerRect.left;
          const prevY = prevRect.top + prevRect.height / 2 - containerRect.top;

          // Calculate distances
          const horizontalDistance = x - prevX;
          const verticalDistance = y - prevY;

          // Create curved path using cubic bezier
          const controlPoint1X = prevX + horizontalDistance * 0.3;
          const controlPoint1Y = prevY + verticalDistance * 0.4;
          const controlPoint2X = prevX + horizontalDistance * 0.7;
          const controlPoint2Y = prevY + verticalDistance * 0.6;

          // Curve intensity based on distance
          const curveIntensity = Math.max(Math.abs(horizontalDistance) * 0.8, 150);
          const curveDirection = horizontalDistance > 0 ? 1 : -1;

          pathSegments.push(`C ${controlPoint1X + curveIntensity * curveDirection} ${controlPoint1Y}, ${controlPoint2X + curveIntensity * curveDirection} ${controlPoint2Y}, ${x} ${y}`);
        }
      }

      const pathD = pathSegments.join(" ");

      // Calculate path length
      const tempPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      tempPath.setAttribute("d", pathD);
      const length = tempPath.getTotalLength();

      setPathData({ d: pathD, length });
    };

    // Wait for cards to render, then calculate path
    const timeout = setTimeout(calculatePath, 100);
    window.addEventListener("resize", calculatePath);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", calculatePath);
    };
  }, []);

  React.useEffect(() => {
    if (!containerRef.current) return;

    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerRect = container.getBoundingClientRect();
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollY + viewportHeight * 0.5;

      // Calculate progress through the entire container
      const containerStart = containerRect.top + scrollY;
      const containerEnd = containerRect.bottom + scrollY;
      const containerHeight = containerEnd - containerStart;

      // Progress: 0 at start of container, 1 at end
      let progress = 0;

      if (viewportCenter >= containerStart && viewportCenter <= containerEnd) {
        progress = (viewportCenter - containerStart) / containerHeight;
      } else if (viewportCenter > containerEnd) {
        progress = 1;
      }

      // Update desktop path animation
      if (pathData && pathRef.current) {
        const offset = pathData.length - (progress * pathData.length);
        pathRef.current.style.strokeDashoffset = `${offset}`;
      }

      // Update mobile line animation
      if (mobileLineRef.current && mobileLineLength > 0) {
        const mobileOffset = mobileLineLength - (progress * mobileLineLength);
        mobileLineRef.current.style.strokeDashoffset = `${mobileOffset}`;
      }
    };

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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScrollWithRAF);
  }, [pathData]);

  return (
    <section className="relative w-full bg-fg z-10" data-background="light">
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
          title="Process"
          number="/02"
          codeLeft="questions ( section (2), queries (8) ) {"
          variant="light"
          className="pt-9 md:pt-4"
        />

        {/* Decorative Line - ABOVE paragraph content */}
        <div className="max-w-7xl mx-auto pt-12 md:pt-16 lg:pt-24">
          <div className="w-full max-w-4xl -mx-6 md:-mx-8 lg:-mx-12">
            <div className="h-px w-full bg-accent" />
          </div>
        </div>

        {/* Paragraph Content */}
        <div className="flex flex-col gap-6 items-start px-6 md:px-12 lg:px-20 pt-8 pb-12 md:pb-16 lg:pb-24 text-bg max-w-7xl mx-auto">
          <p className="font-body text-base md:text-lg lg:text-xl leading-[1.5] max-w-4xl">
            <span className="font-semibold">Design is an iterative process.</span>
            {" "}
            <span className="font-light">It starts with listening and learning. Digging in to your market, your goals, and understanding the needs of your users. And then use that guide our entire process, from start to finish. We don&apos;t take shortcuts. We don&apos;t copy templates. We build things the right way, from the first time we ever meet.</span>
          </p>
        </div>

        {/* Process Cards - Responsive Layout */}
        <div ref={containerRef} className="relative w-full max-w-[1280px] mx-auto px-6 md:px-8 py-12 md:py-20 ">
          {/* Mobile/Tablet: Simple Stacked Cards with Animated Line */}
          <div className="relative lg:hidden">
            {/* SVG Container for mobile vertical line */}
            <svg
              ref={mobileSvgRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            >
              <path
                ref={mobileLineRef}
                d="M 0 0 L 0 0"
                stroke="#ff2b39"
                strokeWidth="2"
                fill="none"
                strokeDasharray="1000"
                strokeDashoffset="1000"
                style={{
                  transition: "stroke-dashoffset 0.1s ease-out",
                }}
              />
            </svg>

            {/* Cards */}
            <div className="flex flex-col gap-12">
              {processCards.map((card, index) => (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="w-full bg-fg border border-bg rounded-2xl p-4 md:p-6 relative z-10"
                >
                  <div className="flex flex-col gap-4 md:gap-[26px]">
                    <p className="font-header text-[48px] md:text-[48px] leading-none tracking-[-1.44px] text-bg">
                      <span className="text-accent">/</span>
                      {card.title}
                    </p>
                    <p className="font-body font-light text-base md:text-[20px] leading-[1.5] text-bg">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: Staggered Cards with Animated Lines */}
          <div className="hidden lg:block relative min-h-[2200px]">
            {/* SVG Container for single continuous path */}
            <svg
              ref={svgRef}
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ minHeight: "2400px" }}
            >
              {pathData && (
                <path
                  ref={pathRef}
                  d={pathData.d}
                  stroke="#ff2b39"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={pathData.length}
                  strokeDashoffset={pathData.length}
                  style={{
                    transition: "stroke-dashoffset 0.1s ease-out",
                  }}
                />
              )}
            </svg>

            {/* Cards positioned in staggered layout */}
            {processCards.map((card, index) => {
              const isEven = index % 2 === 0;
              const topOffset = index * 400;
              
              return (
                <div
                  key={card.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className="absolute bg-fg border border-bg rounded-2xl p-4 w-[360px] z-10"
                  style={{
                    top: `${topOffset}px`,
                    left: isEven ? "23px" : "auto",
                    right: isEven ? "auto" : "23px",
                  }}
                >
                  <div className="flex flex-col gap-[26px]">
                    <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-bg">
                      <span className="text-accent">/</span>
                      {card.title}
                    </p>
                    <p className="font-body font-light text-[20px] leading-[1.5] text-bg">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

