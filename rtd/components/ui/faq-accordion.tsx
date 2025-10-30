"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PlusIcon } from "@/components/ui/plus-icon";
import { quickSpring, quickFade } from "@/lib/animations";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`w-full flex flex-col gap-4 ${className}`}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const questionNumber = String(index + 1).padStart(2, '0');
        
        return (
          <div
            key={index}
            className="flex flex-col gap-2"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleItem(index)}
              className="w-full flex items-center justify-between py-2 text-left group border-b border-accent"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              {/* Question Text (Number + Question) */}
              <div className="flex items-start md:items-center gap-2 pr-2 flex-1 min-w-0">
                {/* Question Number - "/" is red at 50% opacity, number is black at 50% opacity */}
                <div className="font-header text-[24px] leading-[100%] tracking-[-0.03em] flex items-center shrink-0 pt-1 md:pt-0">
                  <span className="text-accent">/</span>
                  <span className="text-bg">{questionNumber}</span>
                </div>
                <span className="font-body text-[20px] leading-[150%] font-semibold text-bg">
                  {item.question}
                </span>
              </div>

              {/* Plus/X Icon - 24x24 icon with 32x32 touch target */}
              <div className="shrink-0 w-8 h-8 flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: isOpen ? 135 : 0,
                  }}
                  transition={quickSpring}
                  className="w-6 h-6"
                >
                  <PlusIcon isOpen={isOpen} isDarkBackground={false} className="w-full h-full" />
                </motion.div>
              </div>
            </button>

            {/* Answer Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: quickSpring,
                    opacity: quickFade,
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-3">
                    <div className="font-body text-[16px] leading-[150%] text-bg font-light whitespace-pre-line">
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

