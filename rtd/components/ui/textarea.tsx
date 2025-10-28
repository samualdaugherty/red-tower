"use client";

import * as React from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, id, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const textareaId = id || `textarea-${Math.random().toString(36).substring(7)}`;

    const handleFocus = () => setIsFocused(true);
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      setHasValue(!!e.target.value);
      props.onBlur?.(e);
    };

    return (
      <div className="relative w-full">
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "w-full bg-fg rounded border px-3 py-[11px] font-body text-base font-light leading-[1.5] text-black transition-all duration-200 resize-y min-h-[100px]",
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
            htmlFor={textareaId}
            className={cn(
              "absolute left-3 bg-fg px-0.5 font-body font-light text-black transition-all duration-200 pointer-events-none",
              isFocused || hasValue
                ? "-top-[7px] text-xs leading-[1.3]"
                : "top-[11px] text-base leading-[1.5]"
            )}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };

