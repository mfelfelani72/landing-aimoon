import React, { useState, useEffect } from 'react'

// Components

import NewsBox from '../../core/components/NewsBox.jsx'
import LoaderPage from "../../../app/components/LoaderPage.jsx";

// Functions

import { ConnectToServer } from "../../../../utils/services/api/ConnectToServer.js";
import { cashImages } from "../../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../../utils/lib/arraysEqual.js";

// Constants

import { LATEST_NEWS } from "../../../app/utils/constant/EndPoints.js";

// Hooks

import useScrollToBottom from '../../../../utils/hooks/useScrollToBottom.js';

// Zustand

import useAppStore from "../../../app/stores/AppStore";

const LatestNews = ({ ...props }) => {

    // states and consts
    const { languageApp } = useAppStore();

    const PAGE_NUMBER = 1;
    let tempImages;

    const isBottom = useScrollToBottom();

    const [loading, setLoading] = useState("true");

    const [newsData, setNewsData] = useState([]);
    const [newsCategory, setNewsCategory] = useState("cryptocurrencies");
    const [newsSymbols, setNewsSymbols] = useState("all");
    const [newsFrom, setNewsFrom] = useState("1716373411");
    // const [newsTo, setNewsTo] = useState("1725633001");
    const [newsPageLimit, setNewsPageLimit] = useState(5);
    const [newsPage, setNewsPage] = useState(PAGE_NUMBER);

    const [cashedImages, setCashedImages] = useState([]);

    // functions
    const getNews = (cash = "true") => {
        const parameter = {
            category: newsCategory,
            symbols: newsSymbols,
            startDate: newsFrom,
            // "endDate": newsTo,
            page: newsPage,
            language: languageApp,
            pageLimit: newsPageLimit,
            llmOnly: true,
        };

        ConnectToServer(
            "post",
            LATEST_NEWS,
            parameter,
            '',
            "AnalyzedNews"
        ).then((response) => {
            if (response?.data?.return) {

                setLoading("false");

                if (cash == "true") {

                    // for news image

                    tempImages = response?.data?.data?.result?.map(
                        (item) => item?.local_image
                    );
                    if (
                        !arraysEqual(
                            tempImages,
                            response?.data?.data?.result?.map((item) => item?.local_image),
                            "data-dashboard-latest-news-images"
                        ) ||
                        !localStorage.getItem("data-dashboard-latest-news-images")
                    ) {
                        cashImages(
                            "data-dashboard-latest-news-images",
                            response?.data?.data?.result?.map((item) => item?.created_at),
                            response?.data?.data?.result?.map((item) => item?.local_image)
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

    const getCashedImagesLocal = () => {
        const cashedImagesLocal = localStorage.getItem(
            "data-dashboard-latest-news-images"
        );

        if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
    };

    useEffect(() => {

        if (newsData?.length == 0 && props?.statePage?.pageName == "latest_news") {
            getNews();
            getCashedImagesLocal();
        }
    }, [newsData, props?.statePage]);

    useEffect(() => {
        if (newsData?.length > 0 && props?.statePage?.pageName == "latest_news") setNewsData([]);
        setNewsPage(1);
    }, [languageApp]);

    useEffect(() => {
        setNewsPage((prev) => prev + 1);

    }, [isBottom])

    useEffect(() => {
        if (newsPage > 2 && loading == "false" && props?.statePage?.pageName == "latest_news") {
            setLoading("true");
            getNews("false");
        }
    }, [newsPage])

    return (
        <>
            <div className="flex flex-col gap-7 mt-8 px-6 bg-Neutral-500 pb-[7rem]">
                {newsData?.length == 0 ? (
                    <LoaderPage className={"bg-background mt-[1rem]"} />
                ) : (
                    <>
                        {newsData?.map((row, index) => (
                            <div key={index}>
                                <NewsBox
                                    row={row}
                                    cashed_images={cashedImages}
                                    className={""}
                                ></NewsBox>
                            </div>
                        ))}
                        {loading == "true" && <LoaderPage className={"bg-background mt-[1rem]"} />}
                    </>
                )}
            </div>
        </>
    )
}

export default LatestNews
