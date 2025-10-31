"use client";

import * as React from "react";
import { SectionHeadline } from "@/components/ui/section-headline";

export function ProcessPlan() {
  return (
    <section className="relative w-full bg-bg z-12" data-background="dark">
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
          title="Plan"
          number="/01"
          codeLeft="executeDisplay ( projects, showMore ) {"
          className="pt-9 md:pt-4"
        />

        {/* Paragraph Content */}
        <div className="flex flex-col gap-6 items-start px-6 md:px-12 lg:px-20 pb-8 pt-12 md:pt-16 lg:pt-24 text-fg max-w-7xl mx-auto">
          <p className="font-body font-light text-base md:text-lg lg:text-xl leading-[1.5] max-w-4xl">
            Every project is different, but our process is the key to finding out what makes your project unique and develop a plan to bring your ideas to a successful reality. We will work with you and communicate throughout each step from discovery to launch.
          </p>
        </div>

        {/* Decorative Line */}
        <div className="max-w-7xl">
          <div className="w-full max-w-4xl -mx-6 md:-mx-8 lg:-mx-12">
            <div className="h-px w-full bg-accent" />
          </div>
        </div>

        {/* Process Cards - Staggered 5-Card Layout */}
        <div className="flex flex-col gap-6 px-6 md:px-8 lg:px-8 w-full max-w-7xl mx-auto mt-24 mb-12 md:py-14 lg:py-0">
          {/* Desktop: Row 1 - Three Cards (>=1024px) */}
          <div className="hidden lg:flex gap-4 items-center w-full">
            {/* Card 1: First meeting */}
            <div className="flex-1 flex h-[484px] items-center pt-12 max-w-[395px]">
              <div className="flex flex-col h-full w-full bg-bg border border-fg rounded-2xl p-4 justify-between">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>01
                </p>
                <div className="flex flex-col gap-[26px] items-start w-full">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    First meeting
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    We sit down, talk like humans, and learn about your business—why it exists and who it serves.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Chemistry matters */}
            <div className="flex-1 flex h-[484px] items-center pb-12 max-w-[395px]">
              <div className="flex flex-col h-full w-full bg-bg border border-fg rounded-2xl p-4 justify-between">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>02
                </p>
                <div className="flex flex-col gap-4 items-start w-full">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Chemistry matters
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    We only take on one client at a time, so the fit is important. If we&apos;re a good match, we&apos;ll move forward. If not, we&apos;ll tell you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Foundation */}
            <div className="flex-1 flex h-[484px] items-center pt-12 max-w-[395px]">
              <div className="flex flex-col h-full w-full bg-bg border border-fg rounded-2xl p-4 justify-between">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>03
                </p>
                <div className="flex flex-col gap-4 items-start w-full">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Foundation
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    Together we map out what we&apos;re building and why. We define the purpose, features, priorities, and constraints together.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop: Row 2 - Two Cards with Spacers (>=1024px) */}
          <div className="hidden lg:flex gap-4 items-center w-full">
            {/* Empty Spacer */}
            <div className="flex-1" />

            {/* Card 4: Plan the work */}
            <div className="flex h-[484px] items-center pb-12 w-[395px] shrink-0">
              <div className="flex flex-col h-full w-full bg-bg border border-fg rounded-2xl p-4 justify-between">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>04
                </p>
                <div className="flex flex-col gap-4 items-start w-full">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Plan the work
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    Once we understand the full scope, you&apos;ll get a simple, transparent proposal. We develop a timeline of work, milestones, and pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Kickoff */}
            <div className="flex h-[484px] items-center pt-12 w-[395px] shrink-0">
              <div className="flex flex-col h-full w-full bg-bg border border-fg rounded-2xl p-4 justify-between">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>05
                </p>
                <div className="flex flex-col gap-4 items-start w-full">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Kickoff
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    Once the proposal is accepted, and initial payment is made, we commit and get to work. Only then does design begin.
                  </p>
                </div>
              </div>
            </div>

            {/* Empty Spacer */}
            <div className="flex-1" />
          </div>

          {/* Mobile/Tablet: Stacked Cards (<1024px) */}
          <div className="flex flex-col gap-6 lg:hidden w-full">
            {/* Card 1: First meeting */}
            <div className="w-full bg-bg border border-fg rounded-2xl p-4">
              <div className="flex flex-col gap-[26px]">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>01
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    First meeting
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    We sit down, talk like humans, and learn about your business—why it exists and who it serves.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Chemistry matters */}
            <div className="w-full bg-bg border border-fg rounded-2xl p-4">
              <div className="flex flex-col gap-4">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>02
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Chemistry matters
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    We only take on one client at a time, so the fit is important. If we&apos;re a good match, we&apos;ll move forward. If not, we&apos;ll tell you.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Foundation */}
            <div className="w-full bg-bg border border-fg rounded-2xl p-4">
              <div className="flex flex-col gap-4">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>03
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Foundation
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    Together we map out what we&apos;re building and why. We define the purpose, features, priorities, and constraints together.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: Plan the work */}
            <div className="w-full bg-bg border border-fg rounded-2xl p-4">
              <div className="flex flex-col gap-4">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>04
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Plan the work
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    Once we understand the full scope, you&apos;ll get a simple, transparent proposal. We develop a timeline of work, milestones, and pricing.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 5: Kickoff */}
            <div className="w-full bg-bg border border-fg rounded-2xl p-4">
              <div className="flex flex-col gap-4">
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-fg w-full">
                  <span className="text-accent">/</span>05
                </p>
                <div className="flex flex-col gap-4">
                  <p className="font-header text-[48px] leading-none tracking-[-1.44px] text-fg w-full">
                    Kickoff
                  </p>
                  <p className="font-body font-light text-base leading-[1.5] text-fg w-full">
                    Once the proposal is accepted, and initial payment is made, we commit and get to work. Only then does design begin.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End content wrapper */}

      {/* Rounded Corner Transition */}
      <div className="bg-fg pt-0 pb-8 md:pb-14">
        <div className="bg-bg w-full h-12 md:h-28 rounded-bl-[80px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-clock" />
      </div>
    </section>
  );
}

