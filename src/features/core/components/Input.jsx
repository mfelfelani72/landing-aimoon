import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Functions
import { cn } from "../../../../utils/lib/cn";

export const InputText = ({ className, ...props }) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={props?.id}
          className="block text-base font-medium text-black px-6 mb-1"
        >
          {props?.label}
        </label>
        <input
          {...props}
          type="text"
          id={props?.id}
          className={cn(
            "rounded-[20px] h-20 border-2 border-Neutral-50",
            className
          )}
        />
      </div>
    </>
  );
};
