import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import NewsBox from "../components/latestNews/NewsBox.jsx";
import { Image } from "../../core/components/Image.jsx";

// SVG

import news_pic_1 from "../../../../assets/images/png/news-pic-1.png";
import news_pic_2 from "../../../../assets/images/png/news-pic-2.png";
import news_pic_3 from "../../../../assets/images/png/news-pic-3.png";
import arrow from "../../../../assets/icons/svg/arrow-dark.svg";
import Slider from "../../core/components/Slider.jsx";

const LatestNews = () => {
  // hooks
  const { t } = useTranslation();

  const [current, setCurrent] = useState();
  useEffect(() => {
    // const items = document.querySelectorAll(".slider-item");
    // console.log(items)
    // items.forEach((item) => {
    // if (current == 1) {
    // console.log(item)
    console.log(current)
    document.getElementById("1").classList.add("mt-12");
    if (current == 0) {
      document.getElementById("0").classList.remove("mt-12");
      document.getElementById("1").classList.remove("mt-12");
      document.getElementById("2").classList.remove("mt-12");
      document.getElementById("3").classList.add("mt-12");
      document.getElementById("4").classList.remove("mt-12");
      document.getElementById("5").classList.remove("mt-12");
    }
    else if (current == 1) {
      document.getElementById("0").classList.remove("mt-12");
      document.getElementById("1").classList.add("mt-12");
      document.getElementById("2").classList.remove("mt-12");
      document.getElementById("3").classList.remove("mt-12");
      document.getElementById("4").classList.remove("mt-12");
      document.getElementById("5").classList.remove("mt-12");
    }
    else if (current == 2) {
      document.getElementById("0").classList.remove("mt-12");
      document.getElementById("1").classList.remove("mt-12");
      document.getElementById("2").classList.add("mt-12");
      document.getElementById("3").classList.remove("mt-12");
      document.getElementById("4").classList.remove("mt-12");
      document.getElementById("5").classList.remove("mt-12");
    }
  }, [current])
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
            {/* <div className="flex flex-row gap-8"> */}
            <Slider id={""} delay={500} visibleCount={3} autoPlay={false} className={"w-[90rem] h-[40rem]"} setCurrent={setCurrent} >
              <NewsBox title={"بیت‌کوین در آستانه سقوط یا جهش؟"} summary={"بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ..."} image={news_pic_1} className={"right-to-left"} />
              <NewsBox title={"بیت‌کوین در آستانه سقوط یا جهش؟"} summary={"بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ..."} image={news_pic_2} className={"right-to-left"} />
              <NewsBox title={"بیت‌کوین در آستانه سقوط یا جهش؟"} summary={"بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ..."} image={news_pic_3} className={"right-to-left"} />
            </Slider>
            {/* </div> */}

            {/* <div className="flex flex-row w-full gap-3.5 items-center justify-center mt-12">
              <Image src={arrow} alt={"arrow-slider-left"} className={"w-4 h-4 ltr:rotate-180 cursor-pointer"} />
              <Image src={arrow} alt={"arrow-slider-right"} className={"w-4 h-4 rtl:rotate-180 cursor-pointer"} />
            </div> */}

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
