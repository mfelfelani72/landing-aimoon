import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";


// Components



// Functions

import { cn } from "../../../../utils/lib/cn";


// Zustand



const TabInfoAnalysisNews = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();


  // states



  // functions

  return (
    <div className={cn("relative", className)}>
      <div className="w-full h-12 px-1.5 bg-[#28263A] rounded-2xl justify-between items-center gap-1.5 inline-flex">
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
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[1.2rem] xs:py-2 select-none"
          >
            {t("all_information")}
          </label>
        </div>
        <div className="basis-1/3 peer-checked/tab2:bg-Neutral-500 peer-checked/tab2:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab2:!text-white font-medium text-[0.85rem] leading-5">
          <label
            htmlFor="tab2"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[1.2rem] xs:py-2 select-none"
          >
            {t("news_analysis")}
          </label>
        </div>
        <div className="basis-1/3 peer-checked/tab3:bg-Neutral-500 peer-checked/tab3:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab3:!text-white font-medium text-[0.85rem] leading-5">
          <label
            htmlFor="tab3"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[1.2rem] xs:py-2 select-none"
          >
            {t("latest_news")}
          </label>
        </div>

        <div className="tab1-content p-6 mt-6 w-full absolute right-0 top-10 hidden peer-checked/tab1:block">
          تب 1
        </div>

        <div className="tab2-content p-6 mt-6 absolute w-full top-10 right-0 hidden peer-checked/tab2:block">
          تب 2
        </div>
        <div className="tab3-content p-6 mt-6 absolute w-full top-10 right-0 hidden peer-checked/tab2:block">
          تب 3
        </div>
      </div>
    </div>
  );
};

export default TabInfoAnalysisNews;
