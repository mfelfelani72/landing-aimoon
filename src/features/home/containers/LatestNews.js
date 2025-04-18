import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Slider from "../../core/components/Slider.jsx";
import NewsBox from "../components/latestNews/NewsBox.jsx";
import news_pic_1 from "../../../../assets/images/png/news-pic-1.png";
import news_pic_2 from "../../../../assets/images/png/news-pic-2.png";
import news_pic_3 from "../../../../assets/images/png/news-pic-3.png";


const LatestNews = () => {
  const { t } = useTranslation();
  const delay = 2000;
  const defaultAutoPlay = "true";

  const [current, setCurrent] = useState(1);
  const [button, setButton] = useState("left");

  const newsItems = [
    { title: "خبر ۱", summary: "...", image: news_pic_1 },
    { title: "خبر ۲", summary: "...", image: news_pic_2 },
    { title: "خبر ۳", summary: "...", image: news_pic_3 },
    { title: "خبر 4", summary: "...", image: news_pic_3 },
    { title: "خبر 5", summary: "...", image: news_pic_3 },
    { title: "خبر 6", summary: "...", image: news_pic_3 },
    { title: "خبر 7", summary: "...", image: news_pic_3 },
    { title: "خبر 8", summary: "...", image: news_pic_3 },
    { title: "خبر 9", summary: "...", image: news_pic_3 },
    { title: "خبر 10", summary: "...", image: news_pic_3 },
    // در صورت نیاز بیشتر اضافه کن
  ];

  const visibleCount = 3; // تعداد اسلایدهای قابل‌نمایش

  useEffect(() => {
    console.log("c" + current);
  }, [current]);
  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <div className="width-theme px-default flex flex-col items-center justify-center my-28">
        <div className="text-center text-Neutral-500 text-3xl font-bold mb-10">
          {t("latest_news")}
        </div>

        <Slider
          delay={delay}
          visibleCount={visibleCount}
          defaultAutoPaly={defaultAutoPlay}
          autoPlay={defaultAutoPlay}
          setAutoPlay={() => { }}
          setMouseEnter={() => { }}
          setMouseLeave={() => { }}
          setButton={setButton}
          className="w-[80rem] h-[40rem]"
          setCurrent={(index) => setCurrent(index)}
          current={current}
        >
          {button === "right" ? newsItems.map((item, idx) => (
            <div key={idx} className={(idx === current) ? "mt-12 transition-all duration-500" : "mt-0 transition-all duration-500"}>
              <NewsBox {...item} />
            </div>
          )) : newsItems.map((item, idx) => (
            <div key={idx} className={(idx === current) ? "mt-12 transition-all duration-500" : "mt-0 transition-all duration-500"}>
              <NewsBox {...item} />
            </div>
          ))}

        </Slider>
       
        <div className="mt-6 text-center text-primary-400 text-base font-bold leading-7">
          {t("all_news")}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
