import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image, ImageLazy } from "../../../core/components/Image.jsx";

// Functions

import { cn } from "../../../../../utils/lib/cn.js";
import { stringHelper } from "../../../../../utils/helpers/stringHelper.js"

// Constants

import { DEFAULT_NEW_IMAGE } from "../../../../app/utils/constant/Defaults.js"

// SVG

import arrow from "../../../../../assets/icons/svg/arrow-orange.svg";

const NewsBox = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div
        {...props}
        className={cn(
          "flex flex-col p-6 w-96 items-center bg-theme rounded-[20px]",
          className
        )}
      >
        <div>
          <ImageLazy
            alt={props?.id}
            // src={props?.thImage}
            src={
              props?.cashed_images.length !== 0 &&
                props?.cashed_images.some((item) =>
                  item.hasOwnProperty(props?.created_at)
                )
                ? props?.cashed_images.filter(
                  (item) => item[props?.created_at]
                )[0][props?.created_at]?.base64data
                : props?.data?.thImage

            }
            onError={(e) => {
              e.target.src = DEFAULT_NEW_IMAGE;
            }} className={"w-[25rem] h-48"} />
        </div>
        <div className="ltr:text-left rtl:text-right mt-9 text-white text-2xl font-medium">
          {props?.data?.title}
        </div>
        <div className="w-80 opacity-90 ltr:text-left rtl:text-right text-white text-base font-normal mt-9">
          {stringHelper(props?.data?.summaryEn, props?.count_text_body)}
        </div>

        <div className="flex ltr:flex-row-reverse rtl:flex-row gap-2 items-center w-full px-4 mt-9 text-primary-400 text-base font-bold leading-none cursor-pointer">
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
