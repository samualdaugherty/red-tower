/**
 * Standard animation configurations for Red Tower Digital
 * Use these for consistent motion across the site
 */

/**
 * "Quick" animation - Spring physics for Framer Motion
 * Use this for interactive elements with position/scale changes (buttons, nav links, hover states)
 */
export const quickSpring = {
  type: "spring" as const,
  stiffness: 300,
  damping: 20,
  mass: 1,
};

/**
 * "Quick" animation - Duration-based for Framer Motion
 * Use this for opacity/color transitions (fades, content swaps)
 */
export const quickFade = {
  duration: 0.15,
  ease: [0.25, 0.1, 0.25, 1] as const,
};

/**
 * "Quick" animation - CSS transition timing
 * Use this for CSS-based transitions
 */
export const quickTransition = {
  duration: "200ms",
  timingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
};

/**
 * Tailwind classes for quick transitions (CSS-based)
 * Use these when you need inline CSS transitions
 */
export const quickTransitionClasses = "transition-all duration-[200ms]";

/**
 * Inline style for quick transitions (CSS-based)
 * Use this when you need inline styles
 */
export const quickTransitionStyle = {
  transitionDuration: "200ms",
  transitionTimingFunction: "cubic-bezier(0.25, 0.1, 0.25, 1)",
};

