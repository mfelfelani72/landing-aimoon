import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

// Components

import Slider from "../../core/components/Slider.jsx";
import NewsBox from "../components/latestNews/NewsBox.jsx";

// Functions

import { cashImages } from "../../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../../utils/lib/arraysEqual.js";
import { getData } from "../../../../utils/services/api/getData";

// Constants

import { LATEST_NEWS } from "../../../app/utils/constant/EndPoints.js";

// Svg

const LatestNews = () => {
  // hooks
  const { t } = useTranslation();

  // consts and states
  const delay = 3000;
  const defaultAutoPlay = "true";
  const visibleCount = 3;

  const PAGE_NUMBER = 1;
  let tempImages;

  const [current, setCurrent] = useState(1);
  const [AutoPlay, setAutoPlay] = useState();
  const [mouseEnter, setMouseEnter] = useState();
  const [mouseLeave, setMouseLeave] = useState();
  const [button, setButton] = useState("left");

  const [newsData, setNewsData] = useState([]);
  const [newsCategory, setNewsCategory] = useState("cryptocurrencies");
  const [newsSymbols, setNewsSymbols] = useState("all");
  const [newsFrom, setNewsFrom] = useState("1716373411");
  // const [newsTo, setNewsTo] = useState("1725633001");
  const [newsPage, setNewsPage] = useState(PAGE_NUMBER);

  const [cashedImages, setCashedImages] = useState([]);

  // functions
  const getNews = async () => {

    const parameter = {
      category: newsCategory,
      symbols: newsSymbols,
      startDate: newsFrom,
      // "endDate": newsTo,
      page: 1,
      pageLimit: 10,
      llmOnly: true,
    };

    await getData(LATEST_NEWS, parameter, "Latest News").then(
      (response) => {
        if (response) {
          if ((response?.status == 200) & response?.data?.return) {
            // console.log(response?.data?.data?.result);

            // setLatestNewsData(response?.data?.data?.result);

            // for news image

            tempImages = response?.data?.data?.result?.map((item) => item?.local_image);
            if (
              !arraysEqual(
                tempImages,
                response?.data?.data?.result?.map((item) => item?.local_image),
                "data-latest-news-images"
              ) ||
              !localStorage.getItem("data-latest-news-images")
            ) {
              cashImages(
                "data-latest-news-images",
                response?.data?.data?.result?.map((item) => item?.created_at),
                response?.data?.data?.result?.map((item) => item?.local_image)
              );
            }
            // for news image

            setNewsData((prev) => {
              return [...prev, ...response?.data?.data?.result];
            });

            setNewsPage((prev) => prev + 1);
            // setLoading(false);
            // setVisibleMoreButton(true);
          } else {
            console.log({
              message:
                "Maybe you mistake !!!!, this route is: --> Latest News <--",
              error: response?.data?.message,
            });
          }
        }
      }
    );
  };

  const getCashedImagesLocal = () => {
    const cashedImagesLocal = localStorage.getItem(
      "data-latest-news-images"
    );

    if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
  }

  useEffect(() => {
    if (newsData.length == 0) {
      getNews();
      getCashedImagesLocal();
    }

    // console.log(newsData)

    // setSidebarLink("news");
  }, [newsData]);

  useEffect(() => {

  }, [current, mouseEnter, mouseLeave]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <div className="width-theme px-default flex flex-col items-center justify-center my-28">
        <div className="text-center text-Neutral-500 text-3xl font-bold mb-10">
          {t("latest_news")}
        </div>

        <Slider
          id={"latest-news-slider"}
          delay={delay}
          visible_count={visibleCount}
          default_auto_paly={defaultAutoPlay}
          auto_play={defaultAutoPlay}
          set_auto_play={setAutoPlay}
          set_mouse_enter={setMouseEnter}
          set_mouse_leave={setMouseLeave}
          set_button={setButton}
          className="w-[85rem] h-[45rem]"
          set_current={(index) => setCurrent(index)}
        >

          {newsData?.map((item, idx) => (
            <div
              key={idx}
              className={
                idx === current
                  ? "mt-12 transition-all duration-500"
                  : "mt-0 transition-all duration-500"
              }
            >
              <NewsBox id={"latest-news-NewsBos-" + idx} data={item} count_text_body={20} cashed_images={cashedImages} />
            </div>
          ))
          }
        </Slider>

        <div className="mt-6 text-center text-primary-400 text-base font-bold leading-7">
          {t("all_news")}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
