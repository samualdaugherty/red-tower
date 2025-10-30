"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { quickFade } from "@/lib/animations";

interface LinkOutButtonProps {
  href: string;
  className?: string;
  variant?: "light" | "dark"; // light = black icon on light bg, dark = cream icon on dark bg
  size?: "small" | "default" | "large"; // small = 40px, default = 48px, large = 64px
}

export function LinkOutButton({ href, className = "", variant = "light", size = "default" }: LinkOutButtonProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const iconColor = variant === "dark" ? "text-fg" : "text-bg";
  
  const sizeClasses = {
    small: "w-10 h-10",
    default: "w-12 h-12",
    large: "w-16 h-16",
  };
  
  const iconSizeClasses = {
    small: "w-5 h-5",
    default: "w-7 h-7",
    large: "w-9 h-9",
  };
  
  const textSizeClasses = {
    small: "text-[16px] tracking-[-0.48px]",
    default: "text-[24px] tracking-[-0.96px]",
    large: "text-[32px] tracking-[-0.96px]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`relative flex items-center justify-center ${sizeClasses[size]} rounded-full border-2 border-accent overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Visit project"
    >
      {/* Background - fades in on hover */}
      <motion.div
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={quickFade}
        className="absolute inset-0 bg-accent"
      />

      {/* Icon - rotates 180° and fades out on hover */}
      <motion.div
        initial={false}
        animate={{
          rotate: isHovered ? 180 : 0,
          opacity: isHovered ? 0 : 1,
        }}
        transition={quickFade}
        className={`absolute ${iconSizeClasses[size]} flex items-center justify-center ${iconColor}`}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
          <path 
            d="M7.39607 2.72917H5.29607C3.98927 2.72917 3.33539 2.72917 2.83627 2.98349C2.39722 3.20718 2.04052 3.56388 1.81682 4.00293C1.5625 4.50206 1.5625 5.15594 1.5625 6.46273V15.3294C1.5625 16.6362 1.5625 17.2893 1.81682 17.7884C2.04052 18.2274 2.39722 18.5847 2.83627 18.8084C3.3349 19.0625 3.98799 19.0625 5.29223 19.0625H14.1661C15.4703 19.0625 16.1225 19.0625 16.6211 18.8084C17.0601 18.5847 17.4181 18.227 17.6417 17.788C17.8958 17.2894 17.8958 16.637 17.8958 15.3328V13.2292M19.0625 7.39583V1.5625M19.0625 1.5625H13.2292M19.0625 1.5625L10.8958 9.72917" 
            stroke="currentColor" 
            strokeWidth="3.125" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* "Visit" text - rotates from 180° to 0° and fades in on hover */}
      <motion.p
        initial={false}
        animate={{
          rotate: isHovered ? 0 : 180,
          opacity: isHovered ? 1 : 0,
        }}
        transition={quickFade}
        className={`font-header leading-none text-fg relative ${textSizeClasses[size]}`}
      >
        Visit
      </motion.p>
    </a>
  );
}

