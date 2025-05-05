// Svg

import closeSquare from "../../../../assets/icons/svg/CloseSquare.svg"

import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx"

// Functions

import { cn } from "../../../../utils/lib/cn";

//  --> for remove value input and disable submit Button
const handleClear = (id, first_id, secound_id, afterFunction) => {
  const Button1 = document.getElementById(first_id);
  const Button2 = document.getElementById(secound_id);
  if (Button1 && Button2) {
    Button1.classList.add("hidden");
    Button1.classList.remove("flex");
    Button2.classList.add("flex");
    Button2.classList.remove("hidden");
  }
  document.getElementById(id).value = "";

  if (afterFunction) {
    afterFunction();
  }
};

// Svg

import search from "../../../../assets/icons/svg/icon-light-search.svg"
import { CloseSquare } from "./Icon.jsx";


export const InputText = ({ className, ...props }) => {
  return (
    <>
      <div className="flex flex-col w-full">
        <label
          htmlFor={props?.id}
          className="text-base font-medium text-Neutral-300 px-3 mb-1"
        >
          {props?.label}
        </label>
        <div className="relative">
          <input
            {...props}
            type="text"
            className={cn(
              "placeholder-Neutral-200 w-full px-[1rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center relative",
              className
            )}
          />
          {props?.disabled !== "disabled" && (
            <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 flex items-center">
              <div className="p-2">
                <div className="flex cursor-pointer px-1" onClick={() => handleClear(props?.id)}>
                  <CloseSquare width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
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
