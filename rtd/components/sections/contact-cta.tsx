import * as React from "react";
import { SectionHeadline } from "@/components/ui/section-headline";

export function ContactCTA() {
  return (
    <section className="relative w-full bg-bg pt-[126px]" data-background="dark">
      {/* Section Headline */}
      <SectionHeadline
        title="Contact"
        number="/05"
        codeLeft="reachOut ( section (4), modes (1) ) {"
        variant="dark"
      />
    </section>
  );
}
