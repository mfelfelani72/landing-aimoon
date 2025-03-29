import React from "react";

// Functions

import { cn } from "../../../../utils/lib/cn";

export const ImageLazy = ({ children, className, ...props }) => {
  return (
    <img
      {...props}
      loading="lazy"
      className={cn("w-full h-full", className)}
    ></img>
  );
};
