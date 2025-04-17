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
  const defaultAutoPaly = "true";

  const [current, setCurrent] = useState();
  const [button, setButton] = useState();
  const [autoPlay, setAutoPlay] = useState(defaultAutoPaly);
  const [mouseEnter, setMouseEnter] = useState();
  const [mouseLeave, setMouseLeave] = useState();
  useEffect(() => {
    if (!current)
      document.getElementById("1").classList.add("mt-12");
    if (button == "right") {
      if (current == 0) {
        console.log("33")
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.add("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 1) {
        console.log("42")
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.add("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.remove("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 2) {
        console.log("51")
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.add("mt-12");
        document.getElementById("3").classList.remove("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 2) {
        console.log("60")
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.add("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 3) {
        console.log("69")
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
        console.log("71")
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.add("mt-12");
        document.getElementById("3").classList.remove("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 1) {
        console.log("80")
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.add("mt-12");
        document.getElementById("4").classList.remove("mt-12");
        document.getElementById("5").classList.remove("mt-12");
      }
      else if (current == 2) {
        console.log("89")
        document.getElementById("0").classList.remove("mt-12");
        document.getElementById("1").classList.remove("mt-12");
        document.getElementById("2").classList.remove("mt-12");
        document.getElementById("3").classList.remove("mt-12");
        document.getElementById("4").classList.add("mt-12");
        document.getElementById("5").classList.remove("mt-12");


      }
      else if (current == 3) {
        console.log("100")
        if (autoPlay === "true") {
          document.getElementById("0").classList.remove("mt-12");
          document.getElementById("1").classList.add("mt-12");
          // // document.getElementById("1").classList.remove("transition-all");
          // // document.getElementById("1").classList.remove("duration-500");
          // // setTimeout(() => {
          // //   document.getElementById("1").classList.add("transition-all");
          // //   document.getElementById("1").classList.add("duration-500");
          // // }, delay - (delay / 1.5))
          document.getElementById("2").classList.remove("mt-12");
          document.getElementById("3").classList.remove("mt-12");
          document.getElementById("4").classList.remove("mt-12");
          document.getElementById("5").classList.remove("mt-12");
        }
        if (autoPlay === "true" && mouseLeave == "true") {
          document.getElementById("0").classList.remove("mt-12");
          document.getElementById("1").classList.remove("mt-12");
          document.getElementById("2").classList.add("mt-12");
          document.getElementById("3").classList.remove("mt-12");
          document.getElementById("4").classList.remove("mt-12");
          document.getElementById("5").classList.remove("mt-12");
        }
        else if (autoPlay === "false" && mouseEnter == "false") {
          console.log("116")
          document.getElementById("0").classList.remove("mt-12");
          document.getElementById("1").classList.remove("mt-12");
          document.getElementById("2").classList.add("mt-12");
          document.getElementById("3").classList.remove("mt-12");
          document.getElementById("4").classList.remove("mt-12");
          document.getElementById("5").classList.remove("mt-12");
        }
        else if (autoPlay === "false" && mouseLeave === "false") {
          console.log("128")
          document.getElementById("0").classList.remove("mt-12");
          document.getElementById("1").classList.remove("mt-12");
          document.getElementById("2").classList.add("mt-12");
          document.getElementById("3").classList.remove("mt-12");
          document.getElementById("4").classList.remove("mt-12");
          document.getElementById("5").classList.remove("mt-12");
        }
        else if (autoPlay === "false" && mouseLeave === "true") {
          console.log("137")
          document.getElementById("0").classList.remove("mt-12");
          document.getElementById("1").classList.remove("mt-12");
          document.getElementById("2").classList.add("mt-12");
          document.getElementById("3").classList.remove("mt-12");
          document.getElementById("4").classList.remove("mt-12");
          document.getElementById("5").classList.remove("mt-12");
        }

      }
    }
    // console.log(current)
    // console.log("button-" + button)
    // console.log("enter-" + mouseEnter)
    // console.log("leave-" + mouseLeave)
    // console.log("auto-" + autoPlay)
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
            <Slider id={""} delay={delay} visibleCount={3} defaultAutoPaly={defaultAutoPaly} autoPlay={autoPlay} setAutoPlay={setAutoPlay} setMouseEnter={setMouseEnter} setMouseLeave={setMouseLeave} className={"w-[90rem] h-[40rem]"} setCurrent={setCurrent} setButton={setButton} >
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
