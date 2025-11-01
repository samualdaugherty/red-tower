"use client";

import * as React from "react";
import { SectionHeadline } from "@/components/ui/section-headline";
import Link from "next/link";

interface ChecklistItem {
  id: string;
  text: string;
  strong?: string;
  textAfter?: string;
}

interface ChecklistSection {
  id: string;
  number: string;
  title: string;
  meta?: string;
  items: ChecklistItem[];
}

const checklistSections: ChecklistSection[] = [
  {
    id: "time-check",
    number: "0",
    title: "Time & Sanity Check",
    items: [
      { id: "time-1", text: "I have ", strong: "12–18 focused hours", textAfter: " this month to learn and launch with a site builder." },
      { id: "time-2", text: "I'm okay troubleshooting settings and waiting on support replies." },
      { id: "time-3", text: "If not, hiring a pro is likely faster ", strong: "and", textAfter: " cheaper than my time." },
    ],
  },
  {
    id: "setup",
    number: "1",
    title: "Setup & Account Overhead",
    meta: "Time: 1–2 hours • Skills: admin setup",
    items: [
      { id: "setup-1", text: "Chose the right plan (monthly vs annual; Business vs Commerce; hidden add‑ons)." },
      { id: "setup-2", text: "Created the site and disabled \"Coming Soon\"/password mode." },
      { id: "setup-3", text: "Verified billing/renewals (domain + site both on auto‑renew)." },
      { id: "setup-4", text: "Connected business email (Google Workspace/Outlook) and confirmed it works. ", strong: "Common issue:", textAfter: " contact forms won't send without correct MX records." },
    ],
  },
  {
    id: "template",
    number: "2",
    title: "Template & Layout Selection",
    meta: "Time: 3–5 hours • Skills: design sense, layout intuition",
    items: [
      { id: "template-1", text: "Picked a template (after realizing demos look different once you add real content)." },
      { id: "template-2", text: "Adjusted type, colors, spacing in multiple setting panels." },
      { id: "template-3", text: "Fought with mobile/tablet layouts to keep things aligned and readable." },
      { id: "template-4", text: "", strong: "Responsive ≠ perfect", textAfter: " on your exact phone; expect manual tweaks." },
    ],
  },
  {
    id: "content",
    number: "3",
    title: "Content & Structure",
    meta: "Time: 2–4 hours • Skills: writing, image prep, basic a11y",
    items: [
      { id: "content-1", text: "Planned pages (Home, About, Services/Menu, Contact; maybe Blog)." },
      { id: "content-2", text: "Wrote concise copy (400–800 words total) in your own voice." },
      { id: "content-3", text: "Selected/edited images (cropping, compression, aspect ratios)." },
      { id: "content-4", text: "Added headings/alt text for accessibility and basic SEO." },
    ],
  },
  {
    id: "navigation",
    number: "4",
    title: "Navigation & Responsiveness",
    meta: "Time: 1–2 hours • Skills: patience, problem‑solving",
    items: [
      { id: "nav-1", text: "Added all nav links; confirmed mobile nav shows clickable items." },
      { id: "nav-2", text: "Fixed pages that appear twice (e.g., header + footer) or appear in the wrong order." },
      { id: "nav-3", text: "Tested anchor links and section jumps on mobile (often flaky)." },
    ],
  },
  {
    id: "forms",
    number: "5",
    title: "Forms, Buttons & Integrations",
    meta: "Time: ~1 hour • Skills: basic DNS/email troubleshooting",
    items: [
      { id: "forms-1", text: "Built a contact form; set confirmation/success/error states." },
      { id: "forms-2", text: "Connected to the right inbox; verified it avoids spam." },
      { id: "forms-3", text: "Added spam protection (reCAPTCHA or built‑in anti‑spam)." },
      { id: "forms-4", text: "Tested every primary CTA on desktop and mobile. ", strong: "MX/DNS misconfig", textAfter: " often causes \"Form submission failed.\"" },
    ],
  },
  {
    id: "domain",
    number: "6",
    title: "Domain & DNS",
    meta: "Time: 1–2 hours • Skills: DNS basics, patience",
    items: [
      { id: "domain-1", text: "Bought a domain or connected an existing one." },
      { id: "domain-2", text: "Added required ", strong: "CNAME", textAfter: " and A records exactly as instructed." },
      { id: "domain-3", text: "Waited ", strong: "24–48 hours", textAfter: " for DNS to propagate." },
      { id: "domain-4", text: "Verified ", strong: "SSL", textAfter: " shows a secure lock (no \"Not Secure\" warning)." },
      { id: "domain-5", text: "Rechecked records when the site still didn't resolve correctly." },
    ],
  },
  {
    id: "launch",
    number: "7",
    title: "Launch Readiness",
    meta: "Time: 1–2 hours • Skills: detail‑oriented QA",
    items: [
      { id: "launch-1", text: "Clicked every link on desktop & mobile; fixed 404s and jumpy anchors." },
      { id: "launch-2", text: "Set favicon, page titles, and meta descriptions." },
      { id: "launch-3", text: "Connected analytics (e.g., Google Analytics or Plausible—if allowed)." },
      { id: "launch-4", text: "Measured load time (templates can run ", strong: "2–4 seconds", textAfter: " on mobile)." },
      { id: "launch-5", text: "Turned off \"Password\"/\"Under Construction.\"" },
    ],
  },
  {
    id: "maintenance",
    number: "8",
    title: "Post‑Launch Maintenance",
    meta: "Time: ~1 hour/month ongoing • Skills: persistence",
    items: [
      { id: "maint-1", text: "Confirmed renewals: domain, email, site plan." },
      { id: "maint-2", text: "Documented where everything lives (builder, registrar, email provider)." },
      { id: "maint-3", text: "Set a monthly reminder to update hours/menu/prices." },
      { id: "maint-4", text: "Resolved layout shifts after template/builder updates." },
      { id: "maint-5", text: "Contacted support when things break (response often 12–48 hours)." },
    ],
  },
  {
    id: "bonus",
    number: "9",
    title: "Bonus Headaches Nobody Mentions",
    items: [
      { id: "bonus-1", text: "Needed feature sits behind a higher‑tier plan." },
      { id: "bonus-2", text: "Integrations (newsletter, booking) desync or change APIs." },
      { id: "bonus-3", text: "Fonts look crisp on desktop but fuzzy on some phones." },
      { id: "bonus-4", text: "\"Mobile menu has no links\" (yes, this really happens)." },
      { id: "bonus-5", text: "Next year's redesign means migrating content again." },
    ],
  },
];

const comparisonTable = [
  {
    builderTask: "Plan/choose template; tweak settings",
    redTower: "Custom code with a clean layout that just works",
  },
  {
    builderTask: "Responsiveness fixes across breakpoints",
    redTower: "Hand‑tuned mobile/desktop with real components",
  },
  {
    builderTask: "Domain, DNS, SSL setup",
    redTower: "Configure & launch quickly and securely",
  },
  {
    builderTask: "Contact forms + email deliverability",
    redTower: "Wire, test, verify (no MX headaches)",
  },
  {
    builderTask: "Performance tuning",
    redTower: "Optimize code, images, and test for accessibility",
  },
  {
    builderTask: "Ongoing changes",
    redTower: "You email updates; we deploy — no remembering passwords",
  },
];

export function DIYGuideChecklist() {
  const [checkedItems, setCheckedItems] = React.useState<Set<string>>(new Set());

  // Load checked items from localStorage on mount
  React.useEffect(() => {
    const stored = localStorage.getItem("diy-checklist-checked");
    if (stored) {
      try {
        setCheckedItems(new Set(JSON.parse(stored)));
      } catch {
        // Ignore parse errors
      }
    }
  }, []);

  // Save checked items to localStorage
  const toggleItem = (id: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      localStorage.setItem("diy-checklist-checked", JSON.stringify(Array.from(next)));
      return next;
    });
  };

  return (
    <section className="relative w-full bg-fg text-bg z-10" data-background="light">
      {/* Rounded Corner Transition */}
      <div className="relative z-12 bg-fg pt-0 pb-8 md:pb-14">
        <div className="bg-bg w-full h-12 md:h-28 rounded-bl-[80px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-clock" />
      </div>

      {/* Content wrapper */}
      <div className="relative z-10 mt-16">
        {/* Section Headline - user will update manually */}
        <SectionHeadline
          title="Checklist"
          number="/01"
          codeLeft="function checklist ( sections (10), items (50) ) {"
          variant="light"
          className="pt-9 md:pt-4"
        />

        {/* Checklist Sections */}
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 md:py-16 lg:py-24">
          <div className="flex flex-col gap-8 md:gap-12">
            {checklistSections.map((section) => (
              <div
                key={section.id}
                className="border border-bg rounded-2xl p-6 md:p-8 bg-fg"
              >
                {/* Section Header */}
                <div className="flex flex-col gap-2 mb-6">
                  <h2 className="font-header text-[32px] md:text-[48px] leading-none tracking-[-0.03em] text-bg">
                    <span className="text-accent">/</span>
                    <span className="text-bg">{section.number.padStart(2, "0")}</span>
                    {" "}{section.title}
                  </h2>
                  {section.meta && (
                    <p className="font-body text-sm md:text-base text-bg opacity-70">
                      {section.meta}
                    </p>
                  )}
                </div>

                {/* Checklist Items */}
                <ul className="flex flex-col gap-4">
                  {section.items.map((item) => {
                    const isChecked = checkedItems.has(item.id);
                    return (
                      <li key={item.id} className="flex gap-3 md:gap-4 items-start">
                        <button
                          type="button"
                          onClick={() => toggleItem(item.id)}
                          className="mt-1 shrink-0 w-5 h-5 md:w-6 md:h-6 flex items-center justify-center border-2 border-bg rounded-sm focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-fg transition-colors"
                          aria-checked={isChecked}
                          role="checkbox"
                          aria-label={`${isChecked ? "Uncheck" : "Check"} item`}
                        >
                          {isChecked && (
                            <svg
                              className="w-full h-full text-bg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </button>
                        <span className="font-body font-light text-base md:text-lg leading-[1.5] text-bg flex-1">
                          {item.text}
                          {item.strong && (
                            <>
                              <strong className="font-semibold">{item.strong}</strong>
                              {item.textAfter}
                            </>
                          )}
                          {!item.strong && item.textAfter}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* Comparison Table Section */}
          <div className="mt-16 md:mt-24 border border-bg rounded-2xl p-6 md:p-8 bg-fg">
            <h2 className="font-header text-[32px] md:text-[48px] leading-none tracking-[-0.03em] text-bg mb-6">
              Done‑For‑You Alternative (what we handle)
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-bg">
                    <th className="text-left py-4 px-4 md:px-6 font-body font-semibold text-base md:text-lg text-bg">
                      Builder Task You&apos;d Tackle
                    </th>
                    <th className="text-left py-4 px-4 md:px-6 font-body font-semibold text-base md:text-lg text-bg">
                      What We Do Instead
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonTable.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-bg/50 last:border-b-0"
                    >
                      <td className="py-4 px-4 md:px-6 font-body font-light text-base md:text-lg leading-[1.5] text-bg">
                        {row.builderTask}
                      </td>
                      <td className="py-4 px-4 md:px-6 font-body font-semibold text-base md:text-lg leading-[1.5] text-bg">
                        {row.redTower}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 font-body font-light text-base md:text-lg leading-[1.5] text-bg">
              Most builders promise &quot;launch in an hour.&quot; In reality, owners tend to spend{" "}
              <strong className="font-semibold">12–18 hours</strong> tinkering, googling, and waiting on support. We skip the builder: we code it clean, host it right, and keep it accurate.
            </p>
          </div>

          
        </div>
      </div>

      {/* Rounded Corner Transition (inverted) */}
      <div className="relative w-full mt-16 md:mt-24">
        <div className="bg-fg h-28 w-full relative rotate-180">
          <div className="bg-bg h-12 md:h-28 rounded-bl-[80px] md:rounded-bl-[112px] rounded-br-[80px] md:rounded-br-[112px] shadow-clock w-full" />
        </div>
      </div>
    </section>
  );
}

