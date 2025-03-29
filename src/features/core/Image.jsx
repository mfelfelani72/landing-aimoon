import React from "react";

// Functions

import { cn } from "../../../utils/lib/cn";

const Image = ({ children, className, ...props }) => {
  return (
    <img
      {...props}
      // loading="lazy"
      className={cn("w-full h-full", className)}
    ></img>
  );
};

export default Image;
