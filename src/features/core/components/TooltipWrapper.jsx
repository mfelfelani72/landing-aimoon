/**
 * Wraps any component with a modern, animated tooltip.
 *
 * @param {string} title - The tooltip title
 * @param {string} description - The tooltip description
 * @returns {(children: React.ReactNode) => JSX.Element}
 * 
 */

import React, { useState } from 'react';

// Functions
import { cn } from "../../../../utils/lib/cn";

const TooltipWrapper = ({ children, className, ...props }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleTouchStart = (e) => {
    e.preventDefault();
    setIsVisible(true);
  };

  const handleTouchEnd = (e) => {
    e.preventDefault();
    setIsVisible(false);
  };

  return (
    <div 
      className="relative group inline-block w-fit"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
      <div className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[calc(100%+10px)] mb-2",
        "hidden group-hover:flex w-[70%] min-w-[13rem] max-w-sm", 
        "bg-black/80 backdrop-blur-sm text-white text-sm rounded-lg p-3 flex-col z-50",
        "shadow-lg",
        "opacity-0 group-hover:opacity-100",
        "pointer-events-none",
        "before:content-[''] before:absolute before:left-1/2 before:-translate-x-1/2",
        "before:top-full before:-mt-[2px] before:border-4 before:border-transparent",
        "before:border-t-black/80",
        isVisible && "flex opacity-100",
        className
      )}>
        <strong className="text-sm font-medium mb-0.5 text-center">{props?.title}</strong>
        <span className="text-xs leading-snug text-gray-200/90 text-center">{props?.description}</span>
      </div>
    </div>
  );
};

export default TooltipWrapper;
