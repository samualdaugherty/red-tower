"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const inputId = id || `input-${Math.random().toString(36).substring(7)}`;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    return (
      <div className="relative w-full">
        <input
          id={inputId}
          ref={ref}
          className={cn(
            "w-full bg-fg rounded border px-3 py-1 font-body text-base font-light leading-[1.5] text-black transition-all duration-200",
            "focus:outline-none focus:border-accent",
            isFocused || hasValue ? "border-accent" : "border-black",
            className
          )}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              "absolute left-3 bg-fg px-0.5 font-body font-light text-black transition-all duration-200 pointer-events-none",
              isFocused || hasValue
                ? "-top-[7px] text-xs leading-[1.3]"
                : "top-1 text-base leading-[1.5]"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };

