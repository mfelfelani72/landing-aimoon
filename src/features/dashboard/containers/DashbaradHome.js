import React, { lazy, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

// Components

import { ButtonLink } from "../../core/components/Button.jsx";
import { Image } from "../../core/components/Image.jsx";
import { TabDefault } from "../../core/components/Tab/Tab.jsx";

// Containers


const LazyAnalyzedNews = lazy(() =>
  import("./AnalyzedNews.js")
);
const LazyLatestNews = lazy(() =>
  import("./LatestNews.js")
);

// Svg

import icon_coin_dashboard from "../../../../assets/icons/svg/icon-coin-dashboard.svg";
import icon_author_dashboard from "../../../../assets/icons/svg/icon-author-dashboard.svg";
import icon_provider_dashboard from "../../../../assets/icons/svg/icon-provider-dashboard.svg";
import icon_latest_news from "../../../../assets/icons/svg/icon-latest-news.svg";
import icon_news_analysis from "../../../../assets/icons/svg/icon-news-analysis.svg";

const DashbaradHome = () => {
  // hooks
  const { t } = useTranslation();

  // states

  const [statePage, setStatePage] = useState({
    pageName: "analyzed_news",
  });

  return (
    <>
      <div className="flex flex-col h-full bg-Neutral-500">
        {/* login & register */}

        <div className="flex flex-row gap-2 mx-6 my-8">
          <ButtonLink className={"w-44 h-10"}>{t("register")}</ButtonLink>
          <ButtonLink
            className={"w-44 h-10 bg-[#28263A] hover:bg-gray-800 focus:"}
          >
            {t("login")}
          </ButtonLink>
        </div>

        {/* seprator */}

        <div className="self-stretch h-0 opacity-20 outline-[0.61px] outline-offset-[-0.31px] outline-Neutral-300" />

        {/* shortcuts */}

        <div className="px-6 pt-4 text-right justify-start text-Neutral-300 text-xs font-normal leading-tight">
          {/* {t("swipe_right")} */}
        </div>

        <div className="flex flex-row px-6 py-2 gap-5">
          <Link
            to={"/dashboard/coin-list"}
            className="flex flex-col gap-2 justify-center items-center"
          >
            <div className="w-14 h-14 bg-[#11101A] inline-flex justify-center items-center rounded-full">
              <Image
                src={icon_coin_dashboard}
                alt="icon_coin_dashboard"
                className={"w-6 h-6"}
              />
            </div>
            <div className="w-10 text-center text-sm font-normal leading-tight">
              {t("coins_dashboard")}
            </div>
          </Link>
          <Link className="flex flex-col gap-2 justify-center items-center">
            <div className="w-14 h-14 bg-[#11101A] inline-flex justify-center items-center rounded-full">
              <Image
                src={icon_latest_news}
                alt="icon_latest_news"
                className={"w-6 h-6"}
              />
            </div>
            <div className="w-10 text-center text-sm font-normal leading-tight">
              {t("latest_news")}
            </div>
          </Link>
          <Link className="flex flex-col gap-2 justify-center items-center">
            <div className="w-14 h-14 bg-[#11101A] inline-flex justify-center items-center rounded-full">
              <Image
                src={icon_author_dashboard}
                alt="icon_author_dashboard"
                className={"w-6 h-6"}
              />
            </div>
            <div className="w-10 text-center text-sm font-normal leading-tight">
              {t("authors_dashboard")}
            </div>
          </Link>
          <Link className="flex flex-col gap-2 justify-center items-center">
            <div className="w-14 h-14 bg-[#11101A] inline-flex justify-center items-center rounded-full">
              <Image
                src={icon_provider_dashboard}
                alt="icon_provider_dashboard"
                className={"w-6 h-6"}
              />
            </div>
            <div className="w-10 text-center text-sm font-normal leading-tight">
              {t("providers_dashboard")}
            </div>
          </Link>
          <Link className="flex flex-col gap-2 justify-center items-center">
            <div className="w-14 h-14 bg-[#11101A] inline-flex justify-center items-center rounded-full">
              <Image
                src={icon_news_analysis}
                alt="icon_news_analysis"
                className={""}
              />
            </div>
            <div className="w-10 text-center text-sm font-normal leading-tight">
              {t("news_analysis")}
            </div>
          </Link>
        </div>

        {/* seprator */}

        <div className="self-stretch h-0 opacity-20 mt-8 outline-[0.61px] outline-offset-[-0.31px] outline-Neutral-300" />

        <TabDefault
          id={"tab-0"}
          className={"pt-4"}
          titles={["analyzed_news", "latest_news"]}
          classNameTitle="px-6"
          idTitle=""
          statePage={statePage}
          setStatePage={setStatePage}
          contents={[<LazyAnalyzedNews />, <LazyLatestNews />]}
        />
      </div>
    </>
  );
};

export default DashbaradHome;
