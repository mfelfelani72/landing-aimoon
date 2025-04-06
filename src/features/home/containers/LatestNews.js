import React from "react";
import { useTranslation } from "react-i18next";

// Components

import NewsBox from "../../core/components/NewsBox.jsx";
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
              <NewsBox image={news_pic_1} />
              <NewsBox image={news_pic_2} className={"mt-12"} />
              <NewsBox image={news_pic_3} />
            </div>

            <div className="flex flex-row w-full gap-3.5 items-center justify-center mt-12">
              <Image src={arrow} alt={"arrow-slider"} className={"w-4 h-4"} />
              <Image src={arrow} alt={"arrow-slider"} className={"w-4 h-4 rotate-180"} />
            </div>

            <div className="mt-6 text-center text-primary-400 text-base font-bold leading-7">
              دیدن تمام خبرها
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LatestNews;
