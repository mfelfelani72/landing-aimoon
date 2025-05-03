import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

// Components

import TabInfoAnalysisNews from "../components/TabInfoAnalysisNews.jsx"

// Constants

import { OFFLINE_COIN_ANALYZE } from "../utils/constants/EndPoints.js"
import { LATEST_NEWS } from "../../../app/utils/constant/EndPoints.js";

// Functions

import { ConnectToServer } from '../../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../../utils/lib/arraysEqual.js";

// Hooks

import useScrollToBottom from '../../../../utils/hooks/useScrollToBottom.js';

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";

const CoinDashboard = () => {
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

    const [coinAnalyze, setCoinAnalyze] = useState("free");

    const { languageApp } = useAppStore();

    // functions
    const getNews = () => {
        const parameter = {
            category: newsCategory,
            symbols: location?.state?.symbol?.name,
            startDate: newsFrom,
            // "endDate": newsTo,
            page: newsPage,
            language: languageApp,
            pageLimit: newsPageLimit,
            llmOnly: true,
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


                // for news image

                tempImages = response?.data?.data?.result?.map(
                    (item) => item?.local_image
                );
                if (
                    !arraysEqual(
                        tempImages,
                        response?.data?.data?.result?.map((item) => item?.local_image),
                        "data-dashboard-analyzed-news-images"
                    ) ||
                    !localStorage.getItem("data-dashboard-analyzed-news-images")
                ) {
                    cashImages(
                        "data-dashboard-analyzed-news-images",
                        response?.data?.data?.result?.map((item) => item?.created_at),
                        response?.data?.data?.result?.map((item) => item?.local_image)
                    );
                }
                // for news image

                setNewsData((prev) => {
                    return [...prev, ...response?.data?.data?.result];
                });
            }
        });
    };

    const getOfflineCoinAnalyze = async () => {
        const parameter = {
            symbol: location?.state?.symbol?.name,
            language: languageApp,
        };

        const header = {
            headers: {
                authorization: "a669836a04658498f5bc3a42a0ff4109" // this is admin token, dont forget change it
            }
        }

        ConnectToServer("post", OFFLINE_COIN_ANALYZE, parameter, header, "coin-dashboard").then((response) => {
            if (response?.data?.return) {
                setCoinAnalyze(response?.data?.data);
            }
            else {
                setCoinAnalyze("empty");
            }
        })
    };

    function getCashedImagesLocal() {
        const cashedImagesLocal = localStorage.getItem(
            "data-symbol-dashboard-news-images"
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

    useEffect(() => {
        if (coinAnalyze == "free") {
            getOfflineCoinAnalyze();
        }

    }, [coinAnalyze])

    useEffect(() => {
        setCoinAnalyze("free");
        if (newsData.length > 0) setNewsData(["free"]);
        setNewsPage(1);
    }, [languageApp])

    useEffect(() => {
        setNewsPage((prev) => prev + 1);

    }, [isBottom])

    useEffect(() => {
        if (newsPage > 2 && loading == "false") {
            setLoading("true");
            getNews();
        }
    }, [newsPage])
    return (
        <>
            {coinAnalyze !== "free" && <div className='bg-background pb-[7rem] mt-6'>
                <TabInfoAnalysisNews symbol={location?.state?.symbol} coin_analyze={coinAnalyze} news_data={newsData} cashed_images={cashedImages} loading={loading} />
            </div>}
        </>
    )
}

export default CoinDashboard
