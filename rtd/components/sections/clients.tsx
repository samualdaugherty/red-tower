import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeadline } from "@/components/ui/section-headline";
import { LinkOutButton } from "@/components/ui/link-out-button";
import { Button } from "@/components/ui/button";

export function Clients() {
  return (
    <section className="relative w-full bg-fg pt-24" data-background="light">
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
        title="Clients"
        number="/03"
        codeLeft="whatWeDo ( section (3), components (7) ) {"
        variant="light"
      />

      {/* Header Content - Paragraph with Red Line */}
      <div className="flex flex-col gap-[24px] items-start px-0 py-48 w-full">
        {/* Red Line */}
        <div className="h-0 w-[834px] relative">
          <Image
            src="/images/hero-line.svg"
            alt=""
            width={834}
            height={1}
            className="absolute top-[-1px] w-full"
          />
        </div>

        {/* Paragraph */}
        <div className="flex gap-14 items-end px-8 w-full">
          <p className="font-body text-xl leading-[1.5] w-[761px] text-bg">
            <span className="font-semibold">We bring your vision to life.</span>
            <span className="font-light">
              {` We don't just design — we help shape brands and products into tangible results, that work beautifully, and grow with you. Every project we deliver reflects our deep commitment to quality, usability, and is designed to represent your business and drive success.`}
            </span>
          </p>
        </div>
      </div>

      {/* Recent Work Section - Desktop */}
      <div className="hidden lg:flex gap-[39px] items-end pb-14 px-8 w-full">
        {/* Left: "/Recent" label */}
        <div className="flex-1 flex items-end self-stretch">
          <div className="flex flex-col h-full items-start justify-between max-w-[250px]">
            {/* Top-left corner border */}
            <div className="w-8 h-8 border-l-2 border-t-2 border-accent" />
            <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-bg">
              <span className="text-accent">/</span>Recent
            </p>
          </div>
        </div>

        {/* Center: Project Screenshot */}
        <div className="flex-1 max-w-[760px] min-w-[480px] aspect-[891/588] rounded-2xl shadow-photo overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/recent-project-screenshot.png"
              alt="Project screenshot"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: Project Info */}
        <div className="flex items-end self-stretch">
          <div className="flex flex-col h-full items-start justify-between max-w-[450px]">
            {/* Tags */}
            <div className="flex gap-1 items-start justify-end pb-6 w-full flex-wrap">
              <span className="border border-accent rounded-full px-2 font-body font-light text-xs leading-[1.3] text-accent">
                Featured
              </span>
              <span className="border border-bg rounded-full px-2 font-body font-light text-xs leading-[1.3] text-bg">
                AI Automation
              </span>
              <span className="border border-bg rounded-full px-2 font-body font-light text-xs leading-[1.3] text-bg">
                Design
              </span>
              <span className="border border-bg rounded-full px-2 font-body font-light text-xs leading-[1.3] text-bg">
                Development
              </span>
            </div>

            {/* Title & Link Button */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex gap-4 items-center w-full">
                <h3 className="font-header text-[32px] leading-none tracking-[-0.96px] whitespace-nowrap text-bg">
                  The Daily Rundown
                </h3>
                <LinkOutButton href="https://aidailyrundown.com" />
              </div>

              {/* Description */}
              <div className="flex flex-col pb-8 w-full">
                <p className="font-body font-light text-base leading-[1.5] text-bg">
                  A fully automated news aggregator, with a custom Agentic Workflow. Red Tower was tapped to build this project and work to find a way to fully automate it with the help of AI. With nearly a year of working in the AI field (which is a long time in the world of AI), we were uniquely equipped to assist the client in the design and development of this project.
                </p>
                {/* Bottom-right corner border */}
                <div className="flex items-end justify-end -mb-8 w-full">
                  <div className="w-8 h-8 border-r-2 border-b-2 border-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Work Section - Mobile */}
      <div className="lg:hidden flex flex-col gap-8 pb-14 px-6 w-full">
        {/* Project Screenshot */}
        <div className="w-full aspect-[891/588] rounded-2xl shadow-photo overflow-hidden">
          <div className="relative w-full h-full">
            <Image
              src="/images/recent-project-screenshot.png"
              alt="Project screenshot"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* "/Recent" label with top-left corner border */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 border-l-2 border-t-2 border-accent" />
          <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-bg">
            <span className="text-accent">/</span>Recent
          </p>
        </div>

        {/* Tags */}
        <div className="flex gap-1 items-start flex-wrap">
          <span className="border border-accent rounded-full px-2 font-body font-light text-xs leading-[1.3] text-accent">
            Featured
          </span>
          <span className="border border-bg rounded-full px-2 font-body font-light text-xs leading-[1.3] text-bg">
            AI Automation
          </span>
          <span className="border border-bg rounded-full px-2 font-body font-light text-xs leading-[1.3] text-bg">
            Design
          </span>
          <span className="border border-bg rounded-full px-2 font-body font-light text-xs leading-[1.3] text-bg">
            Development
          </span>
        </div>

        {/* Title & Link Button */}
        <div className="flex gap-4 items-center">
          <h3 className="font-header text-[32px] leading-none tracking-[-0.96px] text-bg">
            The Daily Rundown
          </h3>
          <LinkOutButton href="https://aidailyrundown.com" />
        </div>

        {/* Description */}
        <p className="font-body font-light text-base leading-[1.5] text-bg">
          A fully automated news aggregator, with a custom Agentic Workflow. Red Tower was tapped to build this project and work to find a way to fully automate it with the help of AI. With nearly a year of working in the AI field (which is a long time in the world of AI), we were uniquely equipped to assist the client in the design and development of this project.
        </p>
      </div>

      {/* Divider - Red Line */}
      <div className="flex flex-col gap-2.5 items-end justify-center w-full">
        <div className="h-0 w-[834px] relative">
          <Image
            src="/images/hero-line.svg"
            alt=""
            width={834}
            height={1}
            className="absolute top-[-1px] w-full"
          />
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className="flex flex-col gap-6 items-center pt-24 pb-48 w-full">

        {/* Header */}
        <div className="flex flex-col pb-0 text-center w-full">
          <h3 className="font-header text-[32px] leading-none tracking-[-0.96px] text-bg">
            Previous, happy clients
          </h3>
        </div>

        {/* Logo Grid - Responsive on Desktop, Full Width */}
        <div className="hidden lg:flex gap-11 items-center px-8 w-full justify-between">
          {/* Placeholder logos - user will need to add actual client logos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative flex-1 h-16 grayscale opacity-50">
              <Image
                src={`/images/client-logo-${i}.png`}
                alt={`Client ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Logo Grid - Mobile (scrollable for now, will refine later) */}
        <div className="lg:hidden flex gap-8 items-center px-8 w-full overflow-x-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="relative w-32 h-16 flex-shrink-0 grayscale opacity-50">
              <Image
                src={`/images/client-logo-${i}.png`}
                alt={`Client ${i}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href="/contact">
          <Button className="text-bg">Become One</Button>
        </Link>
      </div>
      </div>
      {/* End content wrapper */}

      {/* Rounded Corner Transition (inverted) */}
      <div className="relative w-full">
        <div className="bg-fg h-28 w-full relative rotate-180">
          <div className="bg-bg h-28 rounded-bl-[112px] rounded-br-[112px] shadow-rtd-clock w-full" />
        </div>
      </div>
    </section>
  );
}
