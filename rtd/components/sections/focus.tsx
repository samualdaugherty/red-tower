"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeadline } from "@/components/ui/section-headline";
import { quickFade, quickTransitionClasses } from "@/lib/animations";

type ServiceKey = "research" | "product" | "consulting" | "support";

interface Service {
  id: ServiceKey;
  title: string;
  number: string;
  subtitle: string;
  description: string;
  paddingTop: string; // Desktop only
}

const services: Service[] = [
  {
    id: "research",
    title: "Research",
    number: "/01",
    subtitle: "Starting strong",
    description:
      "UX Research is a core component of the design process. Understanding the market, emerging trends, and user needs and pain points is a want. It's a must-have to creating a successful product. We can help you identify improvements to your core product or website, and catalog recommendations and user research into a document to help guide your UX process.",
    paddingTop: "pt-[32px]",
  },
  {
    id: "product",
    title: "Design",
    number: "/02",
    subtitle: "More than just visuals",
    description:
      "Product and UX Design is more than just making it pretty. It's about how it works, how users navigate through it, and how to make using the website as intuitive and simple as possible. And we have over 10 years of experience doing just that. And adding the polish to make it look great too.",
    paddingTop: "pt-[136px]",
  },
  {
    id: "consulting",
    title: "Consulting",
    number: "/03",
    subtitle: "Providing Guidance",
    description:
      "We have a long and storied history of working with brands both large and small over our professional careers. And proper planning and organizing is an important part of building and maintaining successful products. We provide the guidance you need to get from zero to one and build the proper systems to do it.",
    paddingTop: "pt-[216px]",
  },
  {
    id: "support",
    title: "Support",
    number: "/04",
    subtitle: "Product Support",
    description:
      "When you already have a product, but you need help updating it for the modern era, and adding new features. We can help with that. Having a product that is feature rich and delivers on your promises to your users is a vital part of supporting a product for the long-term.",
    paddingTop: "pt-[296px]",
  },
];

export function Focus() {
  const [activeService, setActiveService] = React.useState<ServiceKey>("research");
  const [isMobile, setIsMobile] = React.useState(false);

  // Detect mobile viewport
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const activeServiceData = services.find((s) => s.id === activeService)!;

  return (
    <section className="relative w-full bg-fg pt-24 z-10" data-background="light">
      {/* Section Headline */}
      <SectionHeadline
        title="Focus"
        number="/02"
        codeLeft="whatWeDo ( section (2), components (5) ) {"
        variant="light"
        className="pt-9 md:pt-4"
      />

      {/* Desktop Layout */}
      <div className="hidden lg:flex gap-[59px] items-start px-8 pb-28 pt-24">
        {/* Left: Content Area */}
        <div className="w-[420px] relative h-[600px]">
          <AnimatePresence>
            <motion.div
              key={activeService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={quickFade}
              className={`absolute top-0 left-0 flex flex-col gap-[19px] items-start pb-0 px-0 w-full ${activeServiceData.paddingTop}`}
            >
              {/* Subtitle with Number */}
              <div className="flex gap-[14px] items-end">
                <div className="flex gap-2.5 items-center justify-center px-0 py-[2px]">
                  <p className="font-header text-[24px] leading-none tracking-normal text-bg">
                    <span className="text-accent">/</span>
                    {activeServiceData.number.replace("/", "")}
                  </p>
                </div>
                <p className="font-header text-[32px] leading-none tracking-[-0.96px] text-bg">
                  {activeServiceData.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="font-body font-light text-base leading-[1.5] text-bg">
                {activeServiceData.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right: Service Titles */}
        <div className="flex-1 flex flex-col">
          {services.map((service) => {
            const isActive = activeService === service.id;
            return (
              <button
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`border-b border-accent flex gap-2 items-end py-6 w-full text-left ${quickTransitionClasses}`}
                style={{
                  opacity: isActive ? 1 : 0.75,
                  paddingLeft: isActive ? "24px" : "0px",
                }}
              >
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] whitespace-nowrap text-bg">
                  {service.title}
                </p>
                  <div className="flex gap-2.5 items-end justify-center px-0 py-[2px]">
                  <p className="font-header text-[24px] leading-none text-bg">
                    <span className="text-accent">/</span>
                    {service.number.replace("/", "")}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-8 px-6 pb-12 md:pb-28 pt-14">
        {/* Service Titles */}
        <div className="flex flex-col">
          {services.map((service) => {
            const isActive = activeService === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                className={`border-b border-accent flex gap-2 items-center py-3 w-full text-left ${quickTransitionClasses}`}
                style={{
                  opacity: isActive ? 1 : 0.75,
                  paddingLeft: isActive ? "24px" : "0px",
                }}
              >
                <p className="font-header text-[32px] leading-none tracking-[-0.96px] whitespace-nowrap text-bg">
                  {service.title}
                </p>
                  <div className="flex gap-2.5 items-end justify-center px-0 py-[2px]">
                  <p className="font-header text-[24px] leading-none text-bg">
                    <span className="text-accent">/</span>
                    {service.number.replace("/", "")}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <AnimatePresence>
          <motion.div
            key={activeService}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={quickFade}
            className="flex flex-col gap-3 w-full"
          >
            {/* Subtitle with Number */}
            <div className="flex gap-2 items-end">
                  <div className="flex gap-2.5 items-end justify-center px-0 py-[2px]">
                <p className="font-header text-[24px] leading-none text-bg">
                  <span className="text-accent">/</span>
                  {activeServiceData.number.replace("/", "")}
                </p>
              </div>
              <p className="font-header text-[24px] leading-none text-bg">
                {activeServiceData.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="font-body font-light text-base leading-[1.5] text-bg">
              {activeServiceData.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

