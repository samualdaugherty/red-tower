interface PlusIconProps {
  isOpen?: boolean;
  className?: string;
  isDarkBackground?: boolean;
}

export function PlusIcon({ isOpen = false, className, isDarkBackground = true }: PlusIconProps) {
  // If open, always red. If closed, adapt to background
  const fillColor = isOpen 
    ? "var(--rtd-color-accent)" 
    : isDarkBackground 
      ? "var(--rtd-color-fg)" 
      : "var(--rtd-color-bg)";
  
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g id="Plus">
        <path d="M20 8H28V40H20V8Z" fill={fillColor} />
        <path d="M8 28L8 20L40 20V28L8 28Z" fill={fillColor} />
      </g>
    </svg>
  );
}
