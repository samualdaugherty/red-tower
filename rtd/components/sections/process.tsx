import * as React from "react";
import Image from "next/image";
import { SectionHeadline } from "@/components/ui/section-headline";
import { QuoteMark } from "@/components/ui/quote-mark";

export function Process() {
  return (
    <section className="relative w-full bg-bg" data-background="dark">
      {/* Section Headline */}
      <SectionHeadline
        title="Process"
        number="/04"
        codeLeft="Describe ( section (4), descriptions (4) ) {"
        variant="dark"
        className="pt-9 md:pt-4"
      />

      {/* Quote Section */}
      <div className="relative w-full flex items-center justify-end py-14 pl-4 md:pl-8 lg:pl-[264px] pr-4 md:pr-8 lg:pr-8">
        {/* Background Image with Gradient Overlay */}
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <Image
            src="/images/quote-bg.png"
            alt=""
            fill
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/65 via-50% to-bg" />
        </div>

        {/* Quote Content */}
        <div className="relative flex flex-col items-end w-full max-w-6xl py-12 md:py-16 lg:py-20">
          {/* Quote Text */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-16 items-stretch w-full">
            {/* Opening Quote - top aligned */}
            <div className="flex items-start shrink-0">
              <QuoteMark />
            </div>

            {/* Quote Body */}
            <div className="flex-1 py-4">
              <p className="font-body font-light text-xl leading-[1.5] text-fg">
                At Red Tower, every project we work on gets a boutique experience. No templates, no builders, no "good enough." We apply our knowledge and skills to deliver a product crafted uniquely for you, aligned to your goals, and delivering on our promises.{" "}
                <span className="font-semibold">Every project. Every time.</span>
              </p>
            </div>

            {/* Closing Quote - bottom aligned and rotated 180° */}
            <div className="flex items-end shrink-0 justify-end md:justify-start">
              <QuoteMark className="rotate-180" />
            </div>
          </div>

          {/* Attribution */}
          <div className="flex flex-col gap-4 pt-6 pl-[140px] w-full">
            {/* Red Line */}
            <div className="h-0 w-full relative">
              <Image
                src="/images/hero-line.svg"
                alt=""
                width={1280}
                height={1}
                className="absolute top-[-1px] w-full"
              />
            </div>

            {/* Name and Title */}
            <div className="font-body text-base leading-[1.5] text-fg w-full">
              <p className="font-semibold mb-0">Sam Daugherty</p>
              <p className="font-light">Co-Founder & Lead Designer</p>
            </div>
          </div>
        </div>
      </div>

      {/* Three-up Section */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-14">
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 items-stretch">
          {/* Column 1 */}
          <div className="flex-1 flex gap-2 items-end border-b border-fg py-4">
            <p className="font-header text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em] text-fg shrink-0">
              <span className="text-accent">/</span>01
            </p>
            <div className="flex-1 flex flex-col gap-0">
              <p className="font-body font-semibold text-xs md:text-sm leading-[1.5] text-fg">
                One client at a time
              </p>
              <p className="font-body font-light text-xs md:text-sm leading-[1.5] text-fg">
                We never split our focus so we can provide our full attention to your project
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex gap-2 items-end border-b border-fg py-4">
            <p className="font-header text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em] text-fg shrink-0">
              <span className="text-accent">/</span>02
            </p>
            <div className="flex-1 flex flex-col gap-0">
              <p className="font-body font-semibold text-xs md:text-sm leading-[1.5] text-fg">
                Full cycle design & build
              </p>
              <p className="font-body font-light text-xs md:text-sm leading-[1.5] text-fg">
                From zero-to-one and beyond, fully designed and built in-house
              </p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex gap-2 items-end border-b border-fg py-4">
            <p className="font-header text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em] text-fg shrink-0">
              <span className="text-accent">/</span>03
            </p>
            <div className="flex-1 flex flex-col gap-0">
              <p className="font-body font-semibold text-xs md:text-sm leading-[1.5] text-fg">
                Direct communication
              </p>
              <p className="font-body font-light text-xs md:text-sm leading-[1.5] text-fg">
                No layers of management. We're a team of two, and you work directly with us
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
