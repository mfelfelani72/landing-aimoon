import React from "react";
import { Link } from "react-router-dom";

// Functions

import { cn } from "../../../../utils/lib/cn";

export const ButtonLink = ({ children, className, ...props }) => {
  return (
    <>
      <Link
        {...props}
        className={cn(
          "h-14 flex flex-row justify-center items-center rounded-2xl bg-primary-400 hover:bg-primary-300 focus:bg-primary-500 focus:outline-none select-none text-white",
          className
        )}
      >
        <div className="flex flex-row gap-2 ">{children}</div>
      </Link>
    </>
  );
};

export const ButtonNoLink = ({ children, className, ...props }) => {
  return (
    <>
      <div
        {...props}
        className={cn(
          "h-14 flex flex-row justify-center items-center rounded-2xl bg-primary-400 hover:bg-primary-300 focus:bg-primary-500 focus:outline-none select-none cursor-pointer text-white",
          className
        )}
      >
        <div className="flex flex-row gap-2 ">{children}</div>
      </div>
    </>
  );
};
