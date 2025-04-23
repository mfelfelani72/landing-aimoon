import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import Accordion from "../../core/components/Accordion.jsx";
import InfoBox from "../../core/components/InfoBox.jsx";
import { Image } from "../../core/components/Image.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn";

// Svg

import chart from "../../../../assets/icons/svg/chart-nav.svg";
import calender from "../../../../assets/icons/svg/icon-light-calender.svg";
import clock from "../../../../assets/icons/svg/icon-color-clock.svg"
import star from "../../../../assets/icons/svg/icon-color-star.svg"
import chart_chart from "../../../../assets/icons/svg/icon-color-chart.svg"

const TabInfoAnalysisNews = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  // functions

  return (
    <div className={cn("relative", className)}>
      <div className="w-[352px] px-2 h-12 bg-background-light rounded-2xl justify-between items-center gap-1.5 inline-flex mx-4">
        <input
          type="radio"
          id="tab1"
          name="tab"
          className="hidden peer/tab1 w-full"
          defaultChecked
        />
        <input
          type="radio"
          id="tab2"
          name="tab"
          className="hidden peer/tab2 w-full"
        />
        <input
          type="radio"
          id="tab3"
          name="tab"
          className="hidden peer/tab3 w-full"
        />
        <div className="basis-1/3 peer-checked/tab1:bg-Neutral-500 peer-checked/tab1:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab1:!text-white font-medium text-[0.9rem] leading-5">
          <label
            htmlFor="tab1"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[1.15rem] xs:py-2 select-none"
          >
            {t("all_information")}
          </label>
        </div>
        <div className="basis-1/3 peer-checked/tab2:bg-Neutral-500 peer-checked/tab2:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab2:!text-white font-medium text-[0.85rem] leading-5">
          <label
            htmlFor="tab2"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[1.15rem] xs:py-2 select-none"
          >
            {t("news_analysis")}
          </label>
        </div>
        <div className="basis-1/3 peer-checked/tab3:bg-Neutral-500 peer-checked/tab3:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab3:!text-white font-medium text-[0.85rem] leading-5">
          <label
            htmlFor="tab3"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[1.15rem] xs:py-2 select-none"
          >
            {t("latest_news")}
          </label>
        </div>

        <div className="tab1-content bg-background px-4 mt-6 pb-[7rem] w-full absolute right-0 top-10 hidden peer-checked/tab1:block">
          <div className="flex flex-col border rounded-2xl border-Neutral-400 px-6 pt-5 pb-7">
            {/* header */}
            <div className="flex flex-row gap-2">
              <div className="w-12 h-12 bg-lime-500 rounded-full"></div>
              <div className="flex flex-col">
                <div className="text-white text-xl font-bold">{props?.symbol?.name}</div>
                <div className="text-Neutral-300 text-sm font-extrabold leading-relaxed tracking-wide">41,623,892,937</div>
              </div>
            </div>

            {/* description */}
            <div className="text-white text-base font-bold mt-2 leading-9">توضیحات</div>
            <div className="text-Neutral-300 text-xs font-extrabold leading-none">www.ethereum.org</div>
            <div className="w-72 text-white text-sm font-normal leading-tight mt-2 max-h-[6.5rem] overflow-auto scrollbar rtl:pl-3 ltr:pr-3">
              اتریوم (به انگلیسی: Ethereum) پلتفرمی عمومی، متن‌باز، زنجیره‌بلوک-محور با رایانش توزیع‌شده برای قرارداد هوشمند است.[۲] این پلتفرم ماشین مجازی تورینگ کامل اتریوم (EVM) را فراهم می‌آورد و اسکریپت‌ها را با استفاده، از شبکهٔ بین‌المللی گره‌های عمومی اجرا می‌کند...
              اتریوم (به انگلیسی: Ethereum) پلتفرمی عمومی، متن‌باز، زنجیره‌بلوک-محور با رایانش توزیع‌شده برای قرارداد هوشمند است.[۲] این پلتفرم ماشین مجازی تورینگ کامل اتریوم (EVM) را فراهم می‌آورد و اسکریپت‌ها را با استفاده، از شبکهٔ بین‌المللی گره‌های عمومی اجرا می‌کند...
              اتریوم (به انگلیسی: Ethereum) پلتفرمی عمومی، متن‌باز، زنجیره‌بلوک-محور با رایانش توزیع‌شده برای قرارداد هوشمند است.[۲] این پلتفرم ماشین مجازی تورینگ کامل اتریوم (EVM) را فراهم می‌آورد و اسکریپت‌ها را با استفاده، از شبکهٔ بین‌المللی گره‌های عمومی اجرا می‌کند...
              اتریوم (به انگلیسی: Ethereum) پلتفرمی عمومی، متن‌باز، زنجیره‌بلوک-محور با رایانش توزیع‌شده برای قرارداد هوشمند است.[۲] این پلتفرم ماشین مجازی تورینگ کامل اتریوم (EVM) را فراهم می‌آورد و اسکریپت‌ها را با استفاده، از شبکهٔ بین‌المللی گره‌های عمومی اجرا می‌کند...
              اتریوم (به انگلیسی: Ethereum) پلتفرمی عمومی، متن‌باز، زنجیره‌بلوک-محور با رایانش توزیع‌شده برای قرارداد هوشمند است.[۲] این پلتفرم ماشین مجازی تورینگ کامل اتریوم (EVM) را فراهم می‌آورد و اسکریپت‌ها را با استفاده، از شبکهٔ بین‌المللی گره‌های عمومی اجرا می‌کند...
              اتریوم (به انگلیسی: Ethereum) پلتفرمی عمومی، متن‌باز، زنجیره‌بلوک-محور با رایانش توزیع‌شده برای قرارداد هوشمند است.[۲] این پلتفرم ماشین مجازی تورینگ کامل اتریوم (EVM) را فراهم می‌آورد و اسکریپت‌ها را با استفاده، از شبکهٔ بین‌المللی گره‌های عمومی اجرا می‌کند...
            </div>
          </div>


          <div className="flex flex-col gap-4 mt-4">
            <Accordion id="info" open={false} title={"نمودار ابر کلمات جفت ارز ETH- USDT"} icon={chart} >
              children
              children
              children
              children
              children
              children
              children
            </Accordion>


          </div>
        </div>
        <div className="tab2-content bg-background mt-6 pb-[7rem] absolute w-full top-10 right-0 hidden peer-checked/tab2:block">

          <div className="flex flex-col gap-4 mt-4 px-4">

            <div className="relative">
              <div className="flex flex-col w-full bg-background-light p-[2px] rounded-2xl">
                <div className="flex flex-col h-44 bg-background rounded-2xl">
                  <div className="border-b-2 border-b-background-light pt-4 px-5 pb-2">
                    <span className="text-white text-base font-bold ">خلاصه خبرهای</span>
                    <span className="text-primary-400 text-xl font-bold">Tether</span>
                    <span className="text-white text-xl font-bold"> </span>
                    <span className="text-primary-400 text-xl font-medium ">USDT</span>
                    <span className="text-white text-base font-bold "> </span>
                  </div>
                  <div className="flex flex-row px-9 h-full items-center justify-between">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-11 h-11 bg-background-light rounded-full inline-flex items-center justify-center">
                        <Image src={chart_chart} alt={"chart_chart"} className={"w-6 h-6"} />
                      </div>
                      <div className="text-Neutral-200 text-xs font-medium leading-none mt-3">الگوی چارت</div>
                      <div className="text-primary-400 text-sm font-medium leading-tight mt-1">صعودی مثلثی</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-11 h-11 bg-background-light rounded-full inline-flex items-center justify-center">
                        <Image src={star} alt={"star"} className={"w-6 h-6"} />
                      </div>
                      <div className="text-Neutral-200 text-xs font-medium leading-none mt-3">الگوی چارت</div>
                      <div className="text-primary-400 text-sm font-medium leading-tight mt-1">صعودی مثلثی</div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-11 h-11 bg-background rounded-full inline-flex items-center justify-center z-20">
                        <Image src={clock} alt={"clock"} className={"w-6 h-6"} />
                      </div>
                      <div className="text-Neutral-200 text-xs font-medium leading-none mt-3">الگوی چارت</div>
                      <div className="text-primary-400 text-sm font-medium leading-tight mt-1">صعودی مثلثی</div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-5 gap-2">
                  <div className="text-white text-base font-medium leading-snug">بیت‌کوین در آستانه سقوط یا جهش؟</div>
                  <div className="text-Neutral-300 text-sm font-light leading-tight tracking-tight">19:40:45</div>
                  <div className="text-white text-sm font-normal leading-tight mt-2 max-h-[6.5rem] overflow-auto scrollbar rtl:pl-3 ltr:pr-3">
                    بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ... ازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که .... برخی تحلیلگران معتقدند که ...
                    بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ... ازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که .... برخی تحلیلگران معتقدند که ...
                    بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ... ازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که .... برخی تحلیلگران معتقدند که ...
                    بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ... ازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که .... برخی تحلیلگران معتقدند که ...
                    بازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که ... ازار ارزهای دیجیتال در روزهای اخیر نوسانات شدیدی را تجربه کرده است. برخی تحلیلگران معتقدند که .... برخی تحلیلگران معتقدند که ...
                  </div>
                </div>
              </div>
              <div className="absolute z-10 top-0 -left-[0.5rem] w-40 h-40 opacity-50 bg-violet-300/30 rounded-full blur-2xl" />
            </div>
            <Accordion id="analysis" open={true} title={"Aimoon Analysis"} icon={chart} className={"bg-background border border-Neutral-400"} circleLocation={"top-4 left-2"} >
              <div className="flex flex-col">
                <div className="text-Neutral-300 text-sm font-normal leading-tight tracking-tight">19:40:45</div>
                <div className="w-72 text-white text-sm font-normal leading-tight">Based on recent news and Ethereum’s price trend, the market appears to be forming a bullish triangle pattern. This suggests that Ethereum's price is consolidating and preparing for an upward breakout. Considering trading volume and transaction flows, the current market sentiment leans optimistic, signaling potential growth in the short term.</div>
              </div>
            </Accordion>
            <Accordion id="analysis" open={false} title={"اخبار ETH_USDT براساس آمار"} className={"bg-background border border-Neutral-400/20"} >
              <div className="grid grid-cols-2 gap-2.5">
                <InfoBox icon={calender} icon_title="All" number={1756} title={"junhn ;g hofhv"} />
                <InfoBox icon={calender} icon_title="1" number={1756} title={"junhn ;g hofhv"} />
                <InfoBox icon={calender} icon_title="7" number={1756} title={"junhn ;g hofhv"} />
                <InfoBox icon={calender} icon_title="30" number={1756} title={"junhn ;g hofhv"} />
              </div>
            </Accordion>
            <Accordion id="analysis" open={false} icon={chart} title={"میزان تغییرات"} className={"bg-background border border-Neutral-400/20"} >
              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col pl-4">
                  <div className="text-Neutral-100 text-sm font-normal leading-9">تغییرات احساسات</div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                </div>
                <div className="flex flex-col pr-4">
                  <div className="text-Neutral-100 text-sm font-normal leading-9">تغییرات احساسات</div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                  <div className="flex flex-row w-full items-center justify-between">
                    <div className="text-Neutral-300 text-[10px] font-normal leading-9">قیمت فعلی</div>
                    <div className="text-white text-sm font-normal leading-tight tracking-tight">1,840.76</div>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>

        </div>
        <div className="tab3-content bg-background px-4 mt-6 pb-[7rem] absolute w-full top-10 right-0 hidden peer-checked/tab3:block">
          تب 3
        </div>
      </div>
    </div>
  );
};

export default TabInfoAnalysisNews;
