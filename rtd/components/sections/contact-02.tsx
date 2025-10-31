import * as React from "react";
import { SectionHeadline } from "@/components/ui/section-headline";

export function Contact02() {
  return (
    <section className="relative w-full bg-bg pt-0 pb-8 md:pb-16" data-background="dark">
      {/* Section Headline */}
      <SectionHeadline
        title="Contact"
        number="/02"
        codeLeft="reachOut ( section (2), modes (1) ) {"
        variant="dark"
      />
    </section>
  );
}
