import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Components

import TabInfoAnalysisNews from "../components/TabInfoAnalysisNews.jsx"

// Constants

// import { OFFLINE_provider_ANALYZE } from "../utils/constants/EndPoints.js"
import { LATEST_NEWS } from "../utils/constants/EndPoints.js";

// Functions

import { ConnectToServer } from '../../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../../utils/lib/arraysEqual.js";

// Hooks

import useScrollToBottom from '../../../../utils/hooks/useScrollToBottom.js';

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const ProviderDashboard = () => {
  // hooks
  const location = useLocation();


  // states and consts

  const PAGE_NUMBER = 1;
  let tempImages;

  const isBottom = useScrollToBottom();

  const [loading, setLoading] = useState("true");

  const [newsData, setNewsData] = useState(["free"]);
  const [newsCategory, setNewsCategory] = useState("cryptocurrencies");
  const [newsFrom, setNewsFrom] = useState("1716373411");
  // const [newsTo, setNewsTo] = useState("1725633001");
  const [newsPageLimit, setNewsPageLimit] = useState(10);
  const [newsPage, setNewsPage] = useState(PAGE_NUMBER);

  const [cashedImages, setCashedImages] = useState([]);

  // const [providerAnalyze, setproviderAnalyze] = useState("free");

  const { languageApp } = useAppStore();

  // functions
  const getNews = (cash = "true") => {


    const parameter = {
      category: newsCategory,
      provider: location?.state?.provider?.name,

      startDate: newsFrom,
      page: newsPage,
      language: languageApp,
      pageLimit: newsPageLimit,
      llmOnly: false,
    };

    const header = {
      headers: {
        authorization: "48e07eef-d474-47a5-8da4-3e946331369a",
      },
    };

    ConnectToServer(
      "post",
      LATEST_NEWS,
      parameter,
      header,
      "AnalyzedNews"
    ).then((response) => {

      if (response?.data?.return) {

        setLoading("false");

        if (cash == "true") {
          // for news image


          tempImages = response?.data?.data?.result?.map(
            (item, index) => index < 9 && item?.local_image
          );
          if (
            !arraysEqual(
              tempImages,
              response?.data?.data?.result?.map((item, index) => index < 9 && item?.local_image),
              "data-dashboard-provider-news-images"
            ) ||
            !localStorage.getItem("data-dashboard-provider-news-images")
          ) {
            cashImages(
              "data-dashboard-provider-news-images",
              response?.data?.data?.result?.map((item, index) => index < 9 && item?.created_at),
              response?.data?.data?.result?.map((item, index) => index < 9 && item?.local_image)
            );
          }
          // for news image
        }
        setNewsData((prev) => {
          return [...prev, ...response?.data?.data?.result];
        });
      }
    });
  };

  // const getOfflineproviderAnalyze = async () => {
  //   const parameter = {
  //     symbol: location?.state?.symbol?.name,
  //     language: languageApp,
  //   };

  //   const header = {
  //     headers: {
  //       authorization: "a669836a04658498f5bc3a42a0ff4109" // this is admin token, dont forget change it
  //     }
  //   }

  //   ConnectToServer("post", OFFLINE_provider_ANALYZE, parameter, header, "provider-dashboard").then((response) => {
  //     if (response?.data?.return) {
  //       setproviderAnalyze(response?.data?.data);
  //     }
  //     else {
  //       setproviderAnalyze("empty");
  //     }
  //   })
  // };

  function getCashedImagesLocal() {
    const cashedImagesLocal = localStorage.getItem(
      "data-dashboard-provider-news-images"
    );

    if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
  }

  useEffect(() => {
    if (newsData == "free") {
      getNews();
      getCashedImagesLocal();
      newsData.shift();
    }
  }, [newsData]);

  // useEffect(() => {
  //   if (providerAnalyze == "free") {
  //     getOfflineproviderAnalyze();
  //   }

  // }, [providerAnalyze])

  useEffect(() => {
    // setproviderAnalyze("free");
    if (newsData.length > 0) setNewsData(["free"]);
    setNewsPage(1);
  }, [languageApp])

  useEffect(() => {
    setNewsPage((prev) => prev + 1);

  }, [isBottom])

  useEffect(() => {
    if (newsPage > 2 && loading == "false") {
      setLoading("true");
      getNews("false");
    }
  }, [newsPage])

  return (
    <>
      <div className='bg-background pb-[7rem] mt-32'>
        <TabInfoAnalysisNews provider={location?.state?.provider} news_data={newsData} cashed_images={cashedImages} loading={loading} />
      </div>
    </>
  )
}

export default ProviderDashboard