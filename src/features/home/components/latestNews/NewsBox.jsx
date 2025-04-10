import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../../core/components/Image.jsx";

// Functions

import { cn } from "../../../../../utils/lib/cn.js";

// SVG
import arrow from "../../../../../assets/icons/svg/arrow-orange.svg";

const NewsBox = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div
        className={cn(
          "flex flex-col p-6 w-96 h-[491px] items-center bg-theme rounded-[20px]",
          className
        )}
      >
        <div>
          <Image src={props?.image} alt="1" className={"w-full h-48"} />
        </div>
        <div className="text-center mt-9 text-white text-2xl font-medium">
          {props?.title}
        </div>
        <div className="w-80 opacity-90 text-center text-white text-base font-normal mt-9">
          {props?.summary}
        </div>

        <div className="flex flex-row rtl:flex-row-reverse gap-2 items-center w-full px-4 mt-9 text-primary-400 text-base font-bold leading-none cursor-pointer">
          <span>
            <Image src={arrow} alt="arrow" className={"w-6 h-6"} />
          </span>
          <span>{t("read_more")}</span>
        </div>
      </div>
    </>
  );
};

export default NewsBox;
