import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import Accordion from "../../core/components/Accordion.jsx";
import InfoBox from "../../core/components/InfoBox.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn";

// Svg

import chart from "../../../../assets/icons/svg/chart-nav.svg";
import calender from "../../../../assets/icons/svg/icon-light-calender.svg";

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

        <div className="tab1-content bg-background px-4 mt-6 pb-[7rem] w-full absolute right-0 top-10 hidden peer-checked/tab2:block">
          <div className="flex flex-col border rounded-2xl border-Neutral-400 px-6 pt-5 pb-7">
            {/* header */}
            <div className="flex flex-row gap-2">
              <div className="w-12 h-12 bg-lime-500 rounded-full"></div>
              <div className="flex flex-col">
                <div className="text-white text-xl font-bold">Tether USDT</div>
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
            <Accordion id="info" open={true} title={"نمودار ابر کلمات جفت ارز ETH- USDT"} icon={chart} >
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
        <div className="tab2-content bg-background mt-6 pb-[7rem] absolute w-full top-10 right-0 hidden peer-checked/tab1:block">

          <div className="flex flex-col gap-4 mt-4 px-4">
            <Accordion id="analysis" open={true} title={"Aimoon Analysis"} icon={chart} className={"bg-background border border-Neutral-400"} circleLocation={"top-4 left-2"} >
              <div className="flex flex-col">
                <div className="text-Neutral-300 text-sm font-normal leading-tight tracking-tight">19:40:45</div>
                <div className="w-72 text-white text-sm font-normal leading-tight">Based on recent news and Ethereum’s price trend, the market appears to be forming a bullish triangle pattern. This suggests that Ethereum's price is consolidating and preparing for an upward breakout. Considering trading volume and transaction flows, the current market sentiment leans optimistic, signaling potential growth in the short term.</div>
              </div>
            </Accordion>
            <Accordion id="analysis" open={true} title={"اخبار ETH_USDT براساس آمار"} className={"bg-background border border-Neutral-400/20"} >
              <div className="grid grid-cols-2 gap-2.5">
                <InfoBox icon={calender} icon_title="All" number={1756} title={"junhn ;g hofhv"} />
                <InfoBox icon={calender} icon_title="1" number={1756} title={"junhn ;g hofhv"} />
                <InfoBox icon={calender} icon_title="7" number={1756} title={"junhn ;g hofhv"} />
                <InfoBox icon={calender} icon_title="30" number={1756} title={"junhn ;g hofhv"} />
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
