import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx"

// Functions

import { cn } from "../../../../utils/lib/cn";

// Svg

import search from "../../../../assets/icons/svg/icon-light-search.svg"

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
            "px-4 rounded-[20px] h-20 border-2 border-Neutral-50",
            className
          )}
        />
      </div>
    </>
  );
};
export const InputEmail = ({ className, ...props }) => {
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
            "px-4 rounded-[20px] h-20 border-2 border-Neutral-50",
            className
          )}
        />
      </div>
    </>
  );
};
export const InputTextArea = ({ className, ...props }) => {
  return (
    <>
      <div className="flex flex-col">
        <label
          htmlFor={props?.id}
          className="block text-base font-medium text-black px-6 mb-1"
        >
          {props?.label}
        </label>
        <textarea
          {...props}
          id={props?.id}
          className={cn(
            "p-4 rounded-[20px] border-2 border-Neutral-50",
            className
          )}
        ></textarea>
      </div>
    </>
  );
};

export const InputSearch = ({ className, ...props }) => {
  return (
    <div className="relative">

      <div className="absolute top-2 rtl:right-4 ltr:left-4">
        <Image src={search} alt={props?.id + "-" + "search"} className={"w-6 h-6"} />
      </div>

      <input
        {...props}
        type="text"
        id={props?.id}
        className={cn(
          "w-full bg-background-light text-Neutral-300 rounded-2xl rtl:pr-11 ltr:pl-11 h-11 border-2 border-background-light",
          className
        )}
      />
    </div>

  );
}
