import React from "react";

// Components

import { Image } from "./Image.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn.js";

// SVG
import arrow from "../../../../assets/icons/svg/arrow-orange.svg";

const NewsBox = ({ className, ...props }) => {
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
          بیت‌کوین در آستانه سقوط یا جهش؟
        </div>
        <div className="w-80 opacity-90 text-center text-white text-base font-normal mt-9">
          بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است.
          برخی تحلیلگران معتقدند که ...
        </div>

        <div className="flex flex-row-reverse gap-2 items-center w-full px-4 mt-9 text-primary-400 text-base font-bold leading-none cursor-pointer">
          <span>
            <Image src={arrow} alt="arrow" className={"w-6 h-6"} />
          </span>
          <span>بیشتر بدانید</span>
        </div>
      </div>
    </>
  );
};

export default NewsBox;
