import * as React from "react";

interface QuoteMarkProps {
  className?: string;
}

export const QuoteMark: React.FC<QuoteMarkProps> = ({ className = "" }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="68" 
      height="43" 
      viewBox="0 0 68 43" 
      fill="none"
      className={className}
    >
      <path 
        d="M0 42.7617V19.6191L8.16797 0H25.0645L19.7793 18.8984H29.9492V42.7617H0ZM37.5566 42.7617V19.6191L45.7246 0H62.6211L57.3359 18.8984H67.5059V42.7617H37.5566Z" 
        fill="#FF2B39"
      />
    </svg>
  );
};

