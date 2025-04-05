import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { ButtonNoLink } from "./Button.jsx";
import { Image } from "./Image.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn.js";

// Svg

import tick from "../../../../assets/icons/svg/tick-icon.svg";
import close from "../../../../assets/icons/svg/close-icon.svg";

const PlansBox = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div
        className={cn(
          "flex flex-col gap-6 text-white p-8 w-[24.5rem] h-[40rem] bg-[#28263a] rounded-[2.25rem] backdrop-blur-[2rem]",
          className
        )}
      >
        <div className="text-2xl font-medium ltr:font-spaceGrotesk rtl:font-yekanBakh">
          {props?.name}
        </div>
        <div className="text-2xl font-medium ltr:font-spaceGrotesk rtl:font-yekanBakh">
          {props?.price}
        </div>
        <div className="text-Neutral-200 text-base font-medium">
          {props?.description}
        </div>

        <ButtonNoLink className={"h-[2.75rem]"}> تست رایگان</ButtonNoLink>

        <div className="w-ful h-0 outline-1 outline-offset-[-0.50px] outline-Neutral-400" />
        <div className="text-base font-medium">ویژگی های پلن رایگان:</div>
        {props?.options?.map((option, index) => (
          <div key={index} className="flex flex-row gap-2 items-center">
            {option?.value == true ? (
              <Image src={tick} alt={"tick-" + index} className="w-6 h-6" />
            ) : (
              <Image src={close} alt={"close-" + index} className="w-6 h-6" />
            )}

            <div className="text-Neutral-200 text-base font-medium pt-0.5">
              {t(option?.title)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlansBox;
