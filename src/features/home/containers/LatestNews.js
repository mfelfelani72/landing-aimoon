import React from "react";
import { useTranslation } from "react-i18next";

// Components

import NewsBox from "../components/latestNews/NewsBox.jsx";
import { Image } from "../../core/components/Image.jsx";

// SVG

import news_pic_1 from "../../../../assets/images/png/news-pic-1.png";
import news_pic_2 from "../../../../assets/images/png/news-pic-2.png";
import news_pic_3 from "../../../../assets/images/png/news-pic-3.png";
import arrow from "../../../../assets/icons/svg/arrow-dark.svg";

const LatestNews = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
        <div className="width-theme px-default flex flex-col items-center justify-center my-28">
          {/* title */}
          <div className="text-center text-Neutral-500 text-3xl font-bold mb-10">
            {t("latest_news")}
          </div>
          {/* content */}
          <div className="flex flex-col">
            <div className="flex flex-row gap-8">
              <NewsBox title={"بیت‌کوین در آستانه سقوط یا جهش؟"} summary={"بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ..."} image={news_pic_1} />
              <NewsBox title={"بیت‌کوین در آستانه سقوط یا جهش؟"} summary={"بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ..."} image={news_pic_2} className={"mt-12"} />
              <NewsBox title={"بیت‌کوین در آستانه سقوط یا جهش؟"} summary={"بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ..."} image={news_pic_3} />
            </div>

            <div className="flex flex-row w-full gap-3.5 items-center justify-center mt-12">
              <Image src={arrow} alt={"arrow-slider-left"} className={"w-4 h-4 ltr:rotate-180 cursor-pointer"} />
              <Image src={arrow} alt={"arrow-slider-right"} className={"w-4 h-4 rtl:rotate-180 cursor-pointer"} />
            </div>

            <div className="mt-6 text-center text-primary-400 text-base font-bold leading-7">
              {t("all_news")}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
