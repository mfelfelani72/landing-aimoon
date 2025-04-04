import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx";

// SVG

import news_pic_1 from "../../../../assets/images/png/news-pic-1.png";
import arrow from "../../../../assets/icons/svg/arrow-orange.svg";

const LatestNews = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-default mb-28">
        {/* title */}
        <div className="text-center text-Neutral-500 text-3xl font-bold mb-10">
          {t("latest_news")}
        </div>
        {/* content */}
        <div className="flex flex-row gap-8">
          <div className="flex flex-col p-6 w-96 h-[491px] items-center bg-theme rounded-[20px]">
            <div>
              <Image src={news_pic_1} alt="1" className={"w-full h-48"} />
            </div>
            <div className="text-center mt-9 text-white text-2xl font-medium">
              بیت‌کوین در آستانه سقوط یا جهش؟
            </div>
            <div className="w-80 opacity-90 text-center text-white text-base font-normal mt-9">
              بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده
              است. برخی تحلیلگران معتقدند که ...
            </div>

            <div className="flex flex-row-reverse gap-2 items-center w-full px-4 mt-9 text-primary-400 text-base font-bold leading-none cursor-pointer">
              <span>
                {" "}
                <Image src={arrow} alt="arrow" className={"w-6 h-6"} />
              </span>
              <span>بیشتر بدانید</span>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col mt-12 p-6 w-96 h-[491px] items-center bg-theme rounded-[20px]">
            <div>
              <Image src={news_pic_1} alt="1" className={"w-full h-48"} />
            </div>
            <div className="text-center mt-9 text-white text-2xl font-medium">
              بیت‌کوین در آستانه سقوط یا جهش؟
            </div>
            <div className="w-80 opacity-90 text-center text-white text-base font-normal mt-9">
              بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده
              است. برخی تحلیلگران معتقدند که ...
            </div>

            <div className="flex flex-row-reverse gap-2 items-center w-full px-4 mt-9 text-primary-400 text-base font-bold leading-none cursor-pointer">
              <span>
                {" "}
                <Image src={arrow} alt="arrow" className={"w-6 h-6"} />
              </span>
              <span>بیشتر بدانید</span>
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col p-6 w-96 h-[491px] items-center bg-theme rounded-[20px]">
            <div>
              <Image src={news_pic_1} alt="1" className={"w-full h-48"} />
            </div>
            <div className="text-center mt-9 text-white text-2xl font-medium">
              بیت‌کوین در آستانه سقوط یا جهش؟
            </div>
            <div className="w-80 opacity-90 text-center text-white text-base font-normal mt-9">
              بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده
              است. برخی تحلیلگران معتقدند که ...
            </div>

            <div className="flex flex-row-reverse gap-2 items-center w-full px-4 mt-9 text-primary-400 text-base font-bold leading-none cursor-pointer">
              <span>
                {" "}
                <Image src={arrow} alt="arrow" className={"w-6 h-6"} />
              </span>
              <span>بیشتر بدانید</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
