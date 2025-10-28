"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";
import { quickSpring } from "@/lib/animations";

const buttonVariants = cva(
  // Base styles - border button with Anton font
  "relative inline-flex items-center justify-center font-header text-[32px] leading-none tracking-[-0.32px] overflow-visible",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "h-12 px-8",
        large: "h-14 px-10",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    const [isHovered, setIsHovered] = React.useState(false);
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, className }), "group")}
        ref={ref}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        {...props}
      >
        {/* ONE red border that transforms on hover - Spring physics */}
            <motion.div
              initial={false}
              animate={{
                height: isHovered ? 4 : 48,
                left: isHovered ? -16 : 0,
                right: isHovered ? -16 : 0,
                top: "50%",
                y: "-50%",
              }}
              transition={quickSpring}
              className="absolute border-2 border-accent"
            />
        
        {/* Button text */}
        <span className="relative z-10">{props.children}</span>
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
