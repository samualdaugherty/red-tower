"use client";

import { SectionHeadline } from "@/components/ui/section-headline";

export function AboutEthos() {
  return (
    <section
      className="relative z-10 bg-fg text-bg w-full"
      data-background="light"
    >
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
          title="Ethos"
          number="/02"
          codeLeft="function whatWeDo ( section (2), components (5) ) {"
          codeRight="display === true;"
          variant="light"
        />

        {/* Centered Header Content */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-[124px] py-12 md:py-16 lg:py-24">
          {/* Header */}
          <div className="w-full pb-8 md:pb-12">
            <h2 className="font-header text-5xl md:text-7xl lg:text-8xl xl:text-[96px] leading-none tracking-[-0.03em] text-center">
              What we do
            </h2>
          </div>

          {/* Paragraph */}
          <div className="w-full">
            <p className="font-body font-light text-base md:text-lg lg:text-xl leading-relaxed text-center">
              <span className="font-semibold">We build websites.</span>
              {` That's kind of our specialty and we're deliberately focused on that singular area of expertise. We stick to what we know because we know it incredibly well. These are the disciplines where we lead, innovate, and produce results. When you work with us, you're partnering with specialists whose entire careers are devoted to building functional, high-performing digital products. `}
            </p>
          </div>
        </div>

        {/* 3-Up Ethos Section */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-12 md:py-16 lg:py-24 flex flex-col md:flex-row gap-8 md:gap-8 lg:gap-8">
          {/* Column 1: Deliberate specialization */}
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-header text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em]">
              Deliberate specialization
            </h3>
            <div className="h-px w-full bg-accent" />
            <p className="font-body font-light text-sm md:text-base leading-relaxed">
              {`You won't get generalists here. You get specialists who live and breathe app and website development, ensuring the highest level of quality and execution.`}
            </p>
          </div>

          {/* Column 2: Fully defined by what we do */}
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-header text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em]">
              Fully defined by what we do
            </h3>
            <div className="h-px w-full bg-accent" />
            <p className="font-body font-light text-sm md:text-base leading-relaxed">
              {`(and don't do). We don't dilute our expertise across branding, copywriting, or marketing. We don't chase trends or offer every service under the sun. `}
            </p>
          </div>

          {/* Column 3: Focus on efficiency and clarity */}
          <div className="flex-1 flex flex-col gap-4">
            <h3 className="font-header text-3xl md:text-4xl lg:text-5xl leading-none tracking-[-0.03em]">
              Focus on efficiency and clarity
            </h3>
            <div className="h-px w-full bg-accent" />
            <p className="font-body font-light text-sm md:text-base leading-relaxed">
              This singular focus allows us to channel 100% of our energy into being the best at one thing: designing and building exceptional digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Rounded Corner Transition (inverted) */}
      <div className="relative w-full">
        <div className="bg-fg h-28 w-full relative rotate-180">
          <div className="bg-bg h-12 md:h-28 rounded-bl-[80px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-clock w-full" />
        </div>
      </div>
    </section>
  );
}

