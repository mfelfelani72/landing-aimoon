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

// Zustand

import useAppStore from "../../../app/stores/AppStore";

const LatestNews = () => {

    // states and consts
    const { languageApp } = useAppStore();

    const PAGE_NUMBER = 1;
    let tempImages;

    const [newsData, setNewsData] = useState([]);
    const [newsCategory, setNewsCategory] = useState("cryptocurrencies");
    const [newsSymbols, setNewsSymbols] = useState("all");
    const [newsFrom, setNewsFrom] = useState("1716373411");
    // const [newsTo, setNewsTo] = useState("1725633001");
    const [newsPageLimit, setNewsPageLimit] = useState(10);
    const [newsPage, setNewsPage] = useState(PAGE_NUMBER);

    const [cashedImages, setCashedImages] = useState([]);

    // functions
    const getNews = () => {
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

                setNewsData((prev) => {
                    return [...prev, ...response?.data?.data?.result];
                });

                // setNewsPage((prev) => prev + 1);
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
        if (newsData?.length == 0) {
            getNews();
            getCashedImagesLocal();
        }
    }, [newsData]);

    useEffect(() => {
        if (newsData?.length > 0) setNewsData([]);
    }, [languageApp]);

    return (
        <>
            <div className="flex flex-col gap-7 mt-8 px-6 bg-Neutral-500 pb-[7rem]">
                {newsData?.length == 0 ? (
                    <LoaderPage className={"bg-background mt-[1rem]"} />
                ) : (
                    newsData?.map((row, index) => (
                        <div key={index}>
                            <NewsBox
                                row={row}
                                cashed_images={cashedImages}
                                className={""}
                            ></NewsBox>
                        </div>
                    ))
                )}
            </div>
        </>
    )
}

export default LatestNews
