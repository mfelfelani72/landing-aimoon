import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx"
import { CloseSquare, Danger, Email, Hide, Lock, Show } from "./Icon.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn";

// Functions

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
//  --> for toggle show/hidden password
const handleShow = (id) => {
  const input = document.getElementById(id);
  if (input.type === "text") {
    input.type = "password";
    document.getElementById(id + "-show").classList.toggle("hidden");
    document.getElementById(id + "-hide").classList.toggle("hidden");
  } else {
    input.type = "text";
    document.getElementById(id + "-show").classList.toggle("hidden");
    document.getElementById(id + "-hide").classList.toggle("hidden");
  }
};
// --> for compare ch_password and ch_confirm_password
const comparePassword = (event, button_id) => {
  const ch_password = document.getElementById("ch_password");
  const username = document.getElementById("username");
  const Button1 = document.getElementById(button_id);
  const Button2 = document.getElementById(`${button_id}_disable`);

  if (ch_password.value !== event.target.value) {
    Button1.classList.add("hidden");
    Button1.classList.remove("flex");
    Button2.classList.add("flex");
    Button2.classList.remove("hidden");
  }

  if (
    ch_password.value.slice(0, event.target.value.length) !== event.target.value
  ) {
    event.target.classList.add("!focus:border-Error-400", "!border-Error-400");
    document.getElementById("error_message").classList.remove("hidden");
  } else {
    if (ch_password.value === event.target.value && ch_password.value.length !== 0 && event.target.value.length !== 0) {
      Button1.classList.add("flex");
      Button1.classList.remove("hidden");
      Button2.classList.add("hidden");
      Button2.classList.remove("flex");
      document.getElementById("error_message").classList.add("hidden");
      event.target.classList.remove(
        "!focus:border-Error-400",
        "!border-Error-400"
      );
    }
  }
};

// Svg

import search from "../../../../assets/icons/svg/icon-light-search.svg"

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
              "placeholder-Neutral-200 w-full px-[1rem] rtl:pl-[2.5rem] ltr:pr-[2.5rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center relative",
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
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <label
        htmlFor={props?.id}
        className="text-base font-medium text-Neutral-300 px-3 mb-1"
      >
        {props?.label}
      </label>
      {props?.type == "auth" ?
        <div className="relative">

          <input
            {...props}
            pattern="[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+(\.[\-a-zA-Z0-9~!$%^&*_=+\}\{'?]+)*@[a-zA-Z0-9_][\-a-zA-Z0-9_]*(\.[\-a-zA-Z0-9_]+)*\.[a-zA-Z]{2,}(:[0-9]{1,5})?"
            type="email"
            placeholder={props?.placeholder}
            className={cn(
              "autofill-input-dark peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400  justify-between items-center relative",
              className
            )}
            onBlur={() => {
              if (document.getElementById("input_email_validate"))
                document
                  .getElementById("input_email_validate")
                  .classList.add("hidden");
            }}
            onFocus={() => {
              document.getElementById("danger_email").classList.add("hidden");
              document.getElementById("close_email").classList.remove("hidden");
              document.getElementById("close_email").classList.add("flex");
            }}
          />
          <div
            id="close_email"
            className="absolute inset-y-0 rtl:left-0 ltr:right-0 pl-3 flex items-center"
          >
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
          <div
            id="danger_email"
            className="hidden absolute top-[6px] rtl:left-[1px] ltr:right-[1px] rtl:pl-3 ltr:pr-3 items-center "
          >
            <div className="flex">
              <Danger width={"24"} height={"24"} color={"#d71e1e"} />
            </div>
          </div>
          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <div className="flex">
              <Email width={"24"} height={"24"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
            </div>
          </div>
          {/* input validate */}
          {typeof props?.error !== "undefined" && (
            <div
              id="input_email_validate"
              className="peer-focus:hidden absolute inset-x-0 mt-2 mx-3"
            >
              <div className="text-Error-400 text-xs font-medium">
                {t(props?.error)}
              </div>
            </div>
          )}
          <div className={`hidden peer-invalid:flex absolute mt-2 mx-3`}>
            <div className="text-Error-400 text-xs font-medium">
              {t("error_invalid_email")}</div>
          </div>

          {/* input validate */}
        </div> : <div className="flex flex-col">
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
        </div>}

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
export const InputPassword = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  return (
    <>
      <label
        htmlFor={props?.id}
        className="text-base font-medium text-Neutral-300 px-3"
      >
        {props?.label}
      </label>
      {/* password */}
      {props?.type == "password" && (
        <>
          <div className="w-full relative mt-1">
            <input
              {...props}
              type="password"
              minLength={5}
              placeholder="xxxx xxxx xxxx xxxx"
              className={cn(
                "peer placeholder-Neutral-200 w-full px-[2.5rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center relative",
                className
              )}
              onBlur={() => {
                document
                  .getElementById("input_password_validate")
                  .classList.add("hidden");
              }}
              onFocus={() => {
                document
                  .getElementById("danger_password")
                  .classList.add("hidden");
                document
                  .getElementById("close_password")
                  .classList.remove("hidden");
                document.getElementById("close_password").classList.add("flex");
              }}
            />
            <div
              id="close_password"
              className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center"
            >

              <div
                className="flex"
                onClick={() =>
                  handleClear(
                    props?.id,
                    props?.button_first_id,
                    props?.button_secound_id
                  )
                }
              >
                <CloseSquare width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
              </div>

            </div>
            <div
              id="danger_password"
              className="hidden absolute top-[6px] rtl:left-0 ltr:right-0 items-center "
            >
              <div className="p-2">
                <div className="flex">
                  <Danger width={"24"} height={"24"} color={"#d71e1e"} />
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
              <div className="">
                <div className="flex">
                  <Lock width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
                </div>
              </div>
            </div>
            {/* input validate */}
            {props?.error !== "" && (
              <div
                id="input_password_validate"
                className="peer-focus:hidden absolute mt-2 mx-3"
              >
                <div className="text-Error-400 text-xs font-medium">{t(props?.error)}</div>
              </div>
            )}
            <div className="hidden peer-invalid:flex absolute my-2 mx-3">
              <div className="text-Error-400 text-xs font-medium">
                {t("error_min_length_password")}
              </div>
            </div>
            {/* input validate */}
          </div>
        </>
      )}

      {/* change_password */}
      {props?.type == "change_password" && (
        <div className="w-full relative mt-1">
          <input
            {...props}
            type="password"
            minLength={5}
            placeholder="xxxx xxxx xxxx xxxx"
            className="peer placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 invalid:focus:border-Error-400 invalid:border-Error-400 justify-between items-center relative"
          />
          <div className=" absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center">
            <div
              className="flex"
              onClick={() => handleShow(props?.id)}
            >
              <div id={props?.id + "-show"} className="">
                <Show width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
              </div>
              <div id={props?.id + "-hide"} className="hidden">
                <Hide width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
            <div className="flex">
              <Lock width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
            </div>
          </div>
          <div className="hidden peer-invalid:flex absolute my-2 mx-3">
            <div className="text-Error-400 text-xs font-medium">
              {t("error_min_length_password")}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export const InputRePassword = ({ ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <label
        htmlFor={props?.id}
        className="text-base font-medium text-Neutral-300 px-3"
      >
        {props?.label}
      </label>
      <div className="w-full relative mt-1">
        <input
          id={props?.id}
          type="password"
          placeholder="xxxx xxxx xxxx xxxx"
          className="placeholder-Neutral-200 w-full px-[2.7rem] py-3 rounded-2xl bg-background-light border border-secondary-100 focus:outline-none focus:ring-0 focus:border-secondary-400 justify-between items-center relative"
          onChange={(event) => comparePassword(event, props?.button_id)}
        />
        <div className="absolute inset-y-0 rtl:left-0 ltr:right-0 px-3 flex items-center cursor-pointer">
          <div
            className="flex"
            onClick={() => handleShow(props?.id)}
          >
            <div id={props?.id + "-show"} className="">
              <Show width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
            </div>
            <div id={props?.id + "-hide"} className="hidden">
              <Hide width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
            </div>
          </div>
        </div>
        <div className="absolute inset-y-0 rtl:right-0 ltr:left-0 rtl:pr-3 ltr:pl-3 flex items-center pointer-events-none">
          <div className="flex">
            <Lock width={"20"} height={"20"} color={`${props?.theme == "light" ? "#797882" : "white"}`} />
          </div>
        </div>

        <div id="error_message" className="hidden absolute mt-2 mx-3">
          <div className="text-Error-400 text-xs font-medium">
            {t("error_re_password")}
          </div>
        </div>
      </div>
    </>
  );
};
