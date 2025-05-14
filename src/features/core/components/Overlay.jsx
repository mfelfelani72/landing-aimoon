import React from "react";

// Functions

import { cn } from "../../../../utils/lib/cn";

export const ClickableOverlay = ({ className, ...props }) => {
  return (
    <div
      id={props?.overlayId}
      className="fixed hidden w-[25rem] h-screen mx-[calc(50%-12rem)] bg-lime-500 opacity-10 z-[100] cursor-pointer"
      onClick={() => props?.function(props)}
    ></div>
  );
};
export const Overlay = ({ className, ...props }) => {
  return (
    <div
      id={props?.overlayId}
      className={cn(
        "hidden fixed inset-0 xs:w-[25rem] mx-auto bg-black bg-opacity-30 z-[101]",
        className
      )}
    ></div>
  );
};
