"use client";

import * as React from "react";
import { SectionHeadline } from "@/components/ui/section-headline";
import { PortfolioItem } from "@/components/ui/portfolio-item";

const portfolioItems = [
  {
    title: "The Daily Rundown",
    description: "A custom website built with integrated multi-agent AI workflows. Every day, the website updates with the most recent news, and sends an automated email newsletter every evening. Without a single human ever having to do any work.",
    desktopImage: "/images/portfolio/daily-rundown-desktop.png",
    mobileImage: "/images/portfolio/daily-rundown-mobile.png",
    link: "https://www.aidailyrundown.com/",
  },
  {
    title: "Lacon Chamber",
    description: "A fully custom website designed and built in a very short timeframe for a new Chamber of Commerce in a local community. Including a custom calendar setup, directory listings, and built-in update interface to quickly add members and events.",
    desktopImage: "/images/portfolio/lacon-desktop.png",
    mobileImage: "/images/portfolio/lacon-mobile.png",
    link: "https://laconchamber.org/",
  },
  {
    title: "St. Paul UCC",
    description: "A custom website designed and built to meet the needs of a growing congregation, and a robust calendar of events. The old website was outdated, and they needed a new website that reflected their brand. And they needed it built fast and built right.",
    desktopImage: "/images/portfolio/stpaul-desktop.png",
    mobileImage: "/images/portfolio/stpaul-mobile.png",
    link: "https://stpauluccpekin.org/",
  },
  {
    title: "INTRVL",
    description: "A fully custom iOS workout app. INTRVL is a fully integrated interval timer that works even if the phone is locked and in your pocket. It integrates with the native features of the phone such as Siri, alerts, and alarms to keep your run on track.",
    desktopImage: "/images/portfolio/intrvl-1.png",
    mobileImage: "/images/portfolio/intrvl-2.png",
    comingSoon: true,
    showDesktopBorder: false,
    desktopFit: "contain" as const,
  },
];

export function WorkExamples() {

  return (
    <section className="relative z-12 w-full bg-bg z-12" data-background="dark">
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
          title="Work"
          number="/01"
          codeLeft="executeDisplay ( projects, showMore ) {"
          variant="dark"
          className="pt-9 md:pt-4"
        />

        {/* Portfolio Items - Simple Sticky Stack */}
        {portfolioItems.map((item, index) => (
          <PortfolioItem
            key={item.title}
            {...item}
            index={index}
          />
        ))}
      </div>
      {/* End content wrapper */}

      {/* Rounded Corner Transition */}
      <div className="bg-fg pt-0 pb-8 md:pb-14">
        <div className="bg-bg w-full h-12 md:h-28 rounded-bl-[80px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-clock" />
      </div>
    </section>
  );
}

