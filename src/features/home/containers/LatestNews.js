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
  const delay = 2000;

  const [current, setCurrent] = useState();
  const [button, setButton] = useState();
  const [autoPlay, setAutoPlay] = useState("true");
  const [mouseEnter, setMouseEnter] = useState();
  const [mouseLeave, setMouseLeave] = useState();
  useEffect(() => {
    console.log(button)
    console.log(current)
    console.log(autoPlay)
    document.getElementById("1").classList.add("mt-12");
    if (button == "right") {
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
      else if (current == 2) {
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.add("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
    }
    else {
      if (current == 0) {
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.add("mt-12");
        document.getElementById("3").classList.remove("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 1) {
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.add("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 2) {

        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.remove("mt-12");
        document.getElementById("4").classList.add("mt-12");
        document.getElementById("5").classList.remove("mt-12");


      }
      else if (current == 3) {

        if (autoPlay === "true" && mouseEnter == "true") {
          console.log("true")
          document.getElementById("0").classList.remove("mt-12");
          document.getElementById("1").classList.add("mt-12");
          document.getElementById("1").classList.remove("transition-all");
          document.getElementById("1").classList.remove("duration-500");
          setTimeout(() => {
            document.getElementById("1").classList.add("transition-all");
            document.getElementById("1").classList.add("duration-500");
          }, delay - (delay / 1.5))
          document.getElementById("2").classList.remove("mt-12");
          document.getElementById("3").classList.remove("mt-12");
          document.getElementById("4").classList.remove("mt-12");
          document.getElementById("5").classList.remove("mt-12");
        }
        else if (autoPlay === "false" && mouseLeave === "true") {
          console.log("false")
          document.getElementById("0").classList.remove("mt-12");
          document.getElementById("1").classList.remove("mt-12");
          document.getElementById("2").classList.add("mt-12");
          document.getElementById("3").classList.remove("mt-12");
          document.getElementById("4").classList.remove("mt-12");
          document.getElementById("5").classList.remove("mt-12");
        }

      }
    }
    console.log(mouseLeave);
  }, [current, button, autoPlay, mouseEnter, mouseLeave])
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
            <Slider id={""} delay={delay} visibleCount={3} autoPlay={autoPlay} setAutoPlay={setAutoPlay} setMouseEnter={setMouseEnter} setMouseLeave={setMouseLeave} className={"w-[90rem] h-[40rem]"} setCurrent={setCurrent} setButton={setButton} >
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
