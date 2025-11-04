"use client";

import Link from "next/link";
import { SectionHeadline } from "@/components/ui/section-headline";
import { FAQAccordion, FAQItem } from "@/components/ui/faq-accordion";

// FAQ content from Figma
const faqItems: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: "The total cost of a website is very dependent on the requirements of the job. For that reason, each project is priced according to the scope based on our initial conversation. But I don't want to leave you hanging:\n\nA simple, single-page site, just to have something online, might run you anywhere from $1,200 - $2,000 depending on needs. A multi-page, informational site, might run you anywhere from $3,000 - $12,000 depending on the number of pages and the complexity.",
  },
  {
    question: "What kind of features add to the cost of a website?",
    answer: "The more obvious ones would be items like online shopping, payments, AI-automation, or a built-in CMS to allow you to make edits to your website on your own. These all add complexity in both engineering time and security, and will almost always include third-party integrations and API calls. This drives the price up significantly.\n\nThe number of pages we have to build will add minimal cost increases due to time, but the complexity of adding new pages is fairly low, and the cost increase is fairly low as well.",
  },
  {
    question: "How long does the process usually take?",
    answer: "I'm really failing at giving you clear, defined answers, because, again, the time mostly depends on the complexity of the job. A rule of thumb is simpler sites containing 3-4 pages of information might only take 3-5 weeks.   If you need database and security integration for things like user accounts, online payments, or anything that adds complexity, it can take anywhere from 6 weeks to 6 months. We've seen it all.   Most importantly though, what usually holds up the design process is the approvals. When we send you edits or links to review, the project stalls until we hear back. In our experience, approvals are what slow the process down the most.",
  },
  {
    question: "Do you provide content or do we provide content?",
    answer: "Content, such as images and copywriting, is almost always something you'll provide to us. As the business owner or employee, you know more about the business than we do.\n\nBut, more often than not, it's a collaborative effort. You'll provide images, but we may need to crop or edit them. You'll provide us with website copy, but we may need to tweak it or make edits to it for length or clarity.",
  },
  {
    question: "Do you offer support services?",
    answer: "We do offer support services, and they come in two basic retainers: Care and Care + Updates.\n\nCare is our basic support service, where we manage the domain and hosting for you, and do routine maintenance on your website. Things change, and sometimes newer, faster versions of the integrated frameworks your site relies on become outdated or obsolete, and need fixed. A website you built 5 years ago probably has deprecated code and security risks. Maintaining that's included in our care package.\n\nCare + Updates is for those who need to change the site content fairly regularly. If, say, you have an events calendar that needs updated, a staff page that might need to add or remove employees, or a menu that changes month-to-month or season-to-season. Then you'll want to include updates as part of your maintenance package.",
  },
  {
    question: "Can I update my website myself?",
    answer: "You absolutely can, with the addition of a content management system. This is an important feature that relies on custom logins for account owners to be able to edit various parts of the website content without ever touching or effecting the code.\n\nThey're very useful if you have a lot of frequent updates. But if you only have occasional updates, or unsure how often you'll make updates, it's usually more affordable to just use our Care + Updates maintenance package. The addition of a CMS adds engineering time and security complexities to the initial build phase, so you will need to weigh both options according to your budget and needs.",
  },
  {
    question: "Why should I choose Red Tower over someone else?",
    answer: "You might have seen other agencies come in cheaper or promise faster delivery times. But as with most things, if it sounds too good to be true, it usually is.\n\nMany of those agencies cut corners by outsourcing overseas or on Fiverr, or grabbing a pre-built template on Squarespace and swapping in your logo and colors, and handing it over. It looks fine at first, but it was never built for your business or your customers.\n\nBecause they did not write the code themselves, problems can arise. The site does not convert, costing you money. When it breaks, they can't fix it. When you need to grow, they can't scale it. You are left stuck, wasting money and time.\n\nRed Tower builds things properly. Every website we build is custom-designed, built in-house, and made to grow with you. Fast, scalable, and managed directly by us.\n\nOver 95% of our clients are still with us eight years after our launch, and some are even on their second redesign with us. We are not here to make a quick buck. We build partnerships that last.",
  },
];

export function WorkFAQ() {
  return (
    <section className="relative w-full bg-fg z-10" data-background="light">
      {/* Content wrapper - excludes rounded corners so headline unsticks naturally */}
      <div>
        {/* Section Headline */}
        <SectionHeadline
          title="FAQ"
          number="/02"
          codeLeft="expandAnswers ( questions, showAll ) {"
          variant="light"
          className="pt-9 md:pt-4"
        />

        {/* FAQ Content Section */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 py-8 md:py-32">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Left Column - FAQ Text */}
            <div className="flex flex-col gap-6 lg:w-[424px] shrink-0">
              <h2 className="font-header text-[48px] leading-[100%] tracking-[-0.03em] text-bg">
                Frequently Asked
              </h2>
              <p className="font-body text-base md:text-[20px] leading-[1.5] text-bg font-light">
                Not every question you have will be answered here, but we&apos;ve tried to cover some of the common ones we receive. If you have questions, and the answer isn&apos;t here,{" "}
                <Link href="/contact" className="text-accent font-semibold hover:underline decoration-accent decoration-2 underline-offset-2">
                  contact us
                </Link>
                {" "}and we&apos;ll be sure to answer it.
              </p>
            </div>

            {/* Right Column - FAQ Accordion */}
            <div className="flex-1 min-w-0">
              <FAQAccordion items={faqItems} />
            </div>
          </div>
        </div>
      </div>
      {/* End content wrapper */}

      {/* Rounded Corner Transition (inverted) */}
      <div className="relative w-full">
        <div className="bg-fg h-28 w-full relative rotate-180">
          <div className="bg-bg h-12 md:h-28 rounded-bl-[80px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-clock w-full" />
        </div>
      </div>
    </section>
  );
}

