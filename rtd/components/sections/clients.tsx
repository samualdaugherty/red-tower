import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { SectionHeadline } from "@/components/ui/section-headline";
import { LinkOutButton } from "@/components/ui/link-out-button";
import { Button } from "@/components/ui/button";

export function Clients() {
  return (
    <section className="relative w-full bg-fg pt-12 md:pt-24" data-background="light">
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
        title="Clients"
        number="/03"
        codeLeft="whatWeDo ( section (3), components (7) ) {"
        variant="light"
        className="pt-9 md:pt-4"
      />

      {/* Header Content - Paragraph with Red Line */}
      <div className="flex flex-col gap-6 items-start px-6 md:px-8 py-12 md:py-24 lg:py-48 w-full max-w-7xl pt-12 md:pt-24">
        {/* Red Line */}
        <div className="h-px w-full max-w-[80vw] -ml-6 bg-accent" />

        {/* Paragraph */}
        <div className="flex gap-8 md:gap-14 items-end w-full">
          <p className="font-body text-base md:text-lg lg:text-xl leading-[1.5] w-full max-w-3xl text-bg">
            <span className="font-semibold">We bring your vision to life.</span>
            <span className="font-light">
              {` We don't just design — we help shape brands and products into tangible results, that work beautifully, and grow with you. Every project we deliver reflects our deep commitment to quality, usability, and is designed to represent your business and drive success.`}
            </span>
          </p>
        </div>
      </div>

      {/* Recent Work Section - Responsive Single Component */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-[39px] items-stretch lg:items-end pb-14 px-6 md:px-8 w-full max-w-7xl mx-auto">
        
        {/* Order 1 Mobile / Order 1 Desktop: "/Recent" label (desktop only shows at bottom-left) */}
        <div className="flex lg:flex-1 items-center lg:items-end lg:self-stretch order-1 lg:order-1">
          <div className="flex lg:flex-col items-center lg:items-start gap-2 lg:gap-0 lg:h-full lg:justify-between lg:max-w-[250px] w-full lg:w-auto">
            {/* Top-left corner border (desktop only at top) */}
            <div className="w-8 h-8 border-l-2 border-t-2 border-accent hidden lg:block" />
            {/* Mobile: horizontal layout, Desktop: at bottom */}
            <div className="flex items-center gap-2 lg:gap-0 lg:block">
              <div className="w-8 h-8 border-l-2 border-t-2 border-accent lg:hidden" />
              <p className="font-header text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em] text-bg pt-6 -ml-6">
                <span className="text-accent">/</span>Recent
              </p>
            </div>
          </div>
        </div>

        {/* Order 0 Mobile / Order 2 Desktop: Project Screenshot */}
        <div className="w-full lg:flex-2 lg:max-w-[760px] aspect-[891/588] rounded-2xl shadow-photo overflow-hidden order-2 lg:order-2">
          <div className="relative w-full h-full">
            <Image
              src="/images/recent-project-screenshot.png"
              alt="Project screenshot"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Order 3+ Mobile / Order 3 Desktop: Project Info */}
        <div className="flex flex-col gap-4 lg:gap-0 lg:items-end lg:self-stretch order-3">
          <div className="flex flex-col lg:h-full lg:justify-between lg:max-w-[450px] gap-4 lg:gap-0">
            
            {/* Tags */}
            <div className="flex gap-1 items-start flex-wrap lg:justify-end lg:pb-6">
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

            {/* Title, Button & Description */}
            <div className="flex flex-col gap-4">
              {/* Title & Link Button */}
              <div className="flex gap-4 items-center">
                <h3 className="font-header text-2xl md:text-3xl leading-none tracking-[-0.03em] text-bg lg:whitespace-nowrap">
                  The Daily Rundown
                </h3>
                <LinkOutButton href="https://aidailyrundown.com" />
              </div>

              {/* Description */}
              <div className="flex flex-col lg:pb-8">
                <p className="font-body font-light text-sm md:text-base leading-[1.5] text-bg">
                  A fully automated news aggregator, with a custom Agentic Workflow. Red Tower was tapped to build this project and work to find a way to fully automate it with the help of AI. With nearly a year of working in the AI field (which is a long time in the world of AI), we were uniquely equipped to assist the client in the design and development of this project.
                </p>
                {/* Bottom-right corner border (desktop only) */}
                <div className="hidden lg:flex items-end justify-end -mb-8 w-full">
                  <div className="w-8 h-8 border-r-2 border-b-2 border-accent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider - Red Line */}
      <div className="flex items-end justify-end w-full px-6 md:px-8 py-6">
        <div className="h-px w-full max-w-4xl bg-accent -mr-6 md:-mr-8" />
      </div>

      {/* Happy Clients Section */}
      <div className="flex flex-col gap-6 items-center pt-12 md:pt-24 pb-24 md:pb-48 w-full px-6 md:px-8">

        {/* Header */}
        <div className="flex flex-col pb-0 text-center w-full">
          <h3 className="font-header text-2xl md:text-3xl leading-none tracking-[-0.03em] text-bg">
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
          <div className="bg-bg h-10 md:h-28 rounded-bl-[112px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-rtd-clock w-full" />
        </div>
      </div>
    </section>
  );
}
