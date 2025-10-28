"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const services = [
  {
    id: "research",
    number: "01",
    title: "Research",
    heading: "The start of great product",
    description:
      "UX Research is a core component of the design process. Understanding the market, emerging trends, and user needs and pain points is a want. It's a must-have to creating a successful product. We can help you identify improvements to your core product or website, and catalog recommendations and user research into a document to help guide your UX process.",
    paddingTop: "pt-8",
  },
  {
    id: "product",
    number: "02",
    title: "Product Design",
    heading: "More than just design",
    description:
      "Product and UX Design is more than just making it pretty. It's about how it works, how users navigate through it, and how to make using the website as intuitive and simple as possible. And we have over 10 years of experience doing just that. And adding the polish to make it look great too.",
    paddingTop: "pt-34",
  },
  {
    id: "consulting",
    number: "03",
    title: "Consulting",
    heading: "Providing Guidance",
    description:
      "We have a long and storied history of working with brands both large and small over our professional careers. And proper planning and organizing is an important part of building and maintaining successful products. We provide the guidance you need to get from zero to one and build the proper systems to do it.",
    paddingTop: "pt-54",
  },
  {
    id: "support",
    number: "04",
    title: "Support",
    heading: "Product Support",
    description:
      "When you already have a product, but you need help updating it for the modern era, and adding new features. We can help with that. Having a product that is feature rich and delivers on your promises to your users is a vital part of supporting a product for the long-term.",
    paddingTop: "pt-[296px]",
  },
];

export function Services() {
  const [activeTab, setActiveTab] = React.useState(0);
  const activeService = services[activeTab];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-[59px] items-start">
        {/* Left Column - Service Description */}
        <div className={cn("w-full lg:w-[420px] flex flex-col gap-[19px]", activeService.paddingTop)}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-[19px]"
            >
              {/* Service Number & Heading */}
              <div className="flex gap-[14px] items-center">
                <div className="flex items-center justify-center py-[7px]">
                  <p className="font-header text-2xl leading-none text-black whitespace-nowrap">
                    <span className="text-accent">/</span>
                    {activeService.number}
                  </p>
                </div>
                <p className="font-header text-[32px] leading-none tracking-[-0.96px] text-black whitespace-nowrap">
                  {activeService.heading}
                </p>
              </div>

              {/* Service Description */}
              <p className="font-body font-light text-base leading-[1.5] text-black">
                {activeService.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column - Service Tabs */}
        <div className="flex-1 flex flex-col w-full">
          {services.map((service, index) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(index)}
              className={cn(
                "flex gap-2 items-end border-b border-accent py-6 text-left transition-all duration-300 group",
                index === activeTab ? "opacity-100" : "opacity-75 hover:opacity-90"
              )}
            >
              <div
                className={cn(
                  "flex gap-2.5 items-center justify-center transition-all duration-300",
                  index === activeTab ? "pl-6" : "pl-0"
                )}
              >
                <p className="font-header text-[96px] leading-none tracking-[-2.88px] text-black whitespace-nowrap">
                  {service.title}
                </p>
              </div>
              <div className="flex items-center justify-center py-[7px]">
                <p className="font-header text-2xl leading-none text-black whitespace-nowrap">
                  <span className="text-accent">/</span>
                  {service.number}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

