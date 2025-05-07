import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';


// Components

import Accordion from "../../core/components/Accordion.jsx";
import InfoBox from "../../core/components/InfoBox.jsx";
import { ImageLazy } from "../../core/components/Image.jsx";
import NewsBox from "../../core/components/NewsBox.jsx";
import { PieChart } from "../../core/components/Chart.jsx";
import LoaderPage from "../../../app/components/LoaderPage.jsx";
import AuthorList from './AuthorList.jsx';

// Functions

import { cn } from "../../../../utils/lib/cn";
import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper.js";
import { ConnectToServer } from '../../../../utils/services/api/ConnectToServer.js';
import { cashImages } from "../../../../utils/lib/cashImages.js";
import { arraysEqual } from "../../../../utils/lib/arraysEqual.js";

// Constants

import { DEFAULT_AVATAR_IMAGE } from "../../../app/utils/constant/Defaults.js";
import { PROVIDER_AUTHORS } from "../utils/constants/EndPoints.js";

// Svg

import calender from "../../../../assets/icons/svg/icon-light-calender.svg";

const TabInfoAnalysisNews = ({ className, ...props }) => {
    // hooks
    const { t } = useTranslation();
    const navigate = useNavigate();

    // states
    const [authorList, setAuthorList] = useState([]);
    const [cashedImages, setCashedImages] = useState([]);
    const [nameProvider, setNameProvider] = useState(props?.provider?.name);


    let tempImages;

    // consts for sentiments
    const data_today = [
        {
            name: t("positive"),
            y: props?.provider?.last_day_sentiment.positive,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#B4A2F1'],
                    [1, '#B4A2F150']
                ]
            }
        },
        {
            name: t("negative"),
            y: props?.provider?.last_day_sentiment.negative,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#E57C43'],
                    [1, '#CC6E3C']
                ]
            },
        },
        {
            name: t("neutral"),
            y: props?.provider?.last_day_sentiment.neutral,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#D2D2D5'],
                    [1, '#D2D2D500']
                ]
            }
        }
    ]
    const data_week = [
        {
            name: t("positive"),
            y: props?.provider?.last_week_sentiment.positive,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#B4A2F1'],
                    [1, '#B4A2F150']
                ]
            }
        },
        {
            name: t("negative"),
            y: props?.provider?.last_week_sentiment.negative,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#E57C43'],
                    [1, '#CC6E3C']
                ]
            },
        },
        {
            name: t("neutral"),
            y: props?.provider?.last_week_sentiment.neutral,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#D2D2D5'],
                    [1, '#D2D2D500']
                ]
            }
        }
    ]

    const getCashedImagesLocal = () => {
        const cashedImagesLocal = localStorage.getItem("data-authors-images");
        if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
    }
    const getAuthorssList = () => {
        const parameter = {
            name: nameProvider,
        };
        const header = {
            headers: {
                authorization: "a669836a04658498f5bc3a42a0ff4109" // this is admin token, dont forget change it
            }
        }

        ConnectToServer("post", PROVIDER_AUTHORS, parameter, header, "provider-table").then((response) => {

             // for news image

            if (response?.data?.return) {
                tempImages = response?.data?.data?.slice(0, 9);

                if (
                    !arraysEqual(
                        tempImages,
                        response?.data?.data.slice(0, 9).map((item, index) => item?.logoUrl),
                        "data-authors-images"
                    ) ||
                    !localStorage.getItem("data-authors-images")
                ) {
                    cashImages(
                        "data-authors-images",
                        response?.data?.data?.slice(0, 9).map((item, index) => item?.name),
                        response?.data?.data?.slice(0, 9).map((item, index) => item?.logoUrl)
                    );
                }
                // for news image

                setAuthorList(response?.data?.data);
                
            }
        })
    }



    useEffect(() => {
        if (authorList.length == 0) {
            getAuthorssList();
            getCashedImagesLocal();
        }

    }, [authorList]);

    return (
        <div className={cn("relative", className)}>
            <div className="w-[352px] px-2 h-12 bg-background-light rounded-2xl items-center gap-1.5 inline-flex mx-4">
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

                <div className="basis-1/3 peer-checked/tab1:bg-Neutral-500 peer-checked/tab1:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab1:!text-primary-500 font-medium text-[0.9rem] leading-5">
                    <label
                        htmlFor="tab1"
                        className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[0.3rem] xs:py-2 select-none"
                    >
                        {t("all_information")}
                    </label>
                </div>
                <div className="basis-1/3 peer-checked/tab2:bg-Neutral-500 peer-checked/tab2:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab2:!text-primary-500 font-medium text-[0.85rem] leading-5">
                    <label
                        htmlFor="tab2"
                        className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[0.3rem] xs:py-2 select-none"
                    >
                        {t("news_analysis")}
                    </label>
                </div>
                {props?.provider?.newsCount && <div className="basis-1/3 peer-checked/tab3:bg-Neutral-500 peer-checked/tab3:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab3:!text-primary-500 font-medium text-[0.85rem] leading-5">
                    <label
                        htmlFor="tab3"
                        className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[0.3rem] xs:py-2 select-none"
                    >
                        {t("latest_news")}
                    </label>
                </div>}

                <div className="tab1-content bg-background px-4 mt-6 pb-[7rem] w-full absolute right-0 top-10 hidden peer-checked/tab1:block">
                    {/* description */}
                    <div className="flex flex-col border rounded-2xl border-Neutral-400 px-6 pt-5 pb-7">
                        {/* header */}
                        <div className="flex flex-row gap-2 items-center">
                            <ImageLazy
                                alt={props?.provider?.description}
                                src={
                                    props?.provider?.local_image
                                        ? props?.provider?.local_image
                                        : props?.provider?.logoUrl
                                            ? props?.provider?.logoUrl
                                            : DEFAULT_AVATAR_IMAGE
                                }
                                onError={(e) => {
                                    e.target.src = DEFAULT_AVATAR_IMAGE;
                                }}
                                className={"w-10 h-10 rounded-full"}
                            />
                            <div className="flex flex-col">
                                <div className="text-white text-xl font-bold capitalize">
                                    {props?.provider?.name}
                                </div>
                                <div className="text-Neutral-300 text-sm font-extrabold leading-relaxed tracking-wide">
                                    {props?.provider?.formated_data?.formated_newsCount} {t('number_of_news')}
                                </div>
                            </div>
                        </div>

                        {/* description */}
                        <div className="text-white text-base font-bold mt-2 leading-9 ">
                            {t("provider_dec")} <span className="capitalize">{props?.provider?.name}</span>
                        </div>
                        <div className="text-Neutral-300 text-xs font-extrabold leading-none">
                            {props?.provider?.scrapedlinks}
                        </div>
                        <div className="w-full text-white text-sm font-normal leading-tight mt-2 grid grid-cols-3 gap-10">
                            {authorList?.length !== 0 ? <LoaderPage className={"w-full mt-5 bg-background mx-[7.5rem]"} /> :
                                <>
                                    {authorList?.slice(0,9).map((row, index) => (
                                        <div className='cursor-pointer' onClick={() => {
                                            navigate("/dashboard/author", {
                                                state: { author: row },
                                            });
                                        }} key={index}>
                                            { <AuthorList cashed_images={cashedImages} id={index + "-" + row?.name} row={row} />}

                                        </div>
                                    ))}
                                </>
                            }
                        </div>
                    </div>


                </div>
                <div className="tab2-content bg-background mt-6 pb-[7rem] absolute w-full top-10 right-0 hidden peer-checked/tab2:block">
                    <div className="flex flex-col gap-4 mt-4 px-4">


                        {/* analysis amount changes */}
                        <Accordion
                            id="analysis_news_base_statistics"
                            open={true}
                            title={
                                <Trans
                                    i18nKey="news_base_statistics"
                                    values={{
                                        name: props?.provider?.name,
                                    }}
                                >
                                    <span className="text-primary-500"></span>
                                </Trans>
                            }
                            className={"bg-background border border-Neutral-400/50 capitalize "}
                        >
                            <div className="grid grid-cols-2 gap-2.5 px-4 pb-4">
                                <InfoBox
                                    icon={calender}
                                    icon_title="All"
                                    number={formatNumberHelper(
                                        parseInt(props?.provider?.newsCount)
                                    )}
                                    title={t("news")}
                                />
                                <InfoBox
                                    icon={calender}
                                    icon_title="1"
                                    number={formatNumberHelper(
                                        parseInt(props?.provider?.AvgNewsPERday)
                                    )}
                                    title={t("news_per_day")}
                                />
                                <InfoBox
                                    icon={calender}
                                    icon_title="7"
                                    number={formatNumberHelper(
                                        parseInt(props?.provider?.AvgNewsPERweek)
                                    )}
                                    title={t("news_per_week")}
                                />
                                <InfoBox
                                    icon={calender}
                                    icon_title="30"
                                    number={formatNumberHelper(
                                        parseInt(props?.provider?.AvgNewsPERMonth)
                                    )}
                                    title={t("news_per_month")}
                                />
                            </div>
                        </Accordion>

                        {/* today sentiment */}
                        {props?.provider?.last_day_sentiment?.negative + props?.provider?.last_day_sentiment?.positive + props?.provider?.last_day_sentiment?.neutral > 0.9 && <Accordion
                            id="today_sentiment"
                            open={false}

                            title={
                                <Trans
                                    i18nKey="day_sentiments"
                                    values={{
                                        name: props?.provider?.name,
                                    }}
                                >
                                    <span className="text-primary-500"></span>
                                </Trans>
                            }
                            className={"bg-background border border-Neutral-400/50"}>
                            <div className="w-full flex flex-col items-center justify-center pb-4">
                                <PieChart height={300} width={300} data={data_today} name={t("sentiment")} title={
                                    <Trans
                                        i18nKey="out_of"
                                        values={{
                                            count: formatNumberHelper(parseInt(props?.provider?.last_day_count)),
                                        }}
                                    >
                                        <span className=""></span>
                                    </Trans>
                                } />
                            </div>
                        </Accordion>}

                        {/* week sentiment */}
                        {props?.provider?.last_week_sentiment?.negative + props?.provider?.last_week_sentiment?.positive + props?.provider?.last_week_sentiment?.neutral > 0.9 && <Accordion
                            id="week_sentiment"
                            open={false}

                            title={
                                <Trans
                                    i18nKey="week_sentiments"
                                    values={{
                                        name: props?.provider?.name,
                                    }}
                                >
                                    <span className="text-primary-500"></span>
                                </Trans>
                            }
                            className={"bg-background border border-Neutral-400/50"}>
                            <div className="w-full flex flex-col items-center justify-center pb-4">
                                <PieChart height={300} width={300} data={data_week} name={t("sentiment")} title={
                                    <Trans
                                        i18nKey="out_of"
                                        values={{
                                            count: formatNumberHelper(parseInt(props?.provider?.last_week_count)),
                                        }}
                                    >
                                        <span className=""></span>
                                    </Trans>
                                } />
                            </div>
                        </Accordion>}


                    </div>
                </div>
                <div className="tab3-content bg-background mt-6 px-4 pb-[7rem] absolute w-full top-10 right-0 hidden peer-checked/tab3:block">
                    <div className="flex flex-col gap-7 px-2 bg-Neutral-500 pb-[7rem]">
                        {/* news */}
                        {props?.news_data?.length == 0 ? (
                            <LoaderPage className={"bg-background mt-[1rem]"} />
                        ) : (
                            <>
                                {props?.news_data?.map((row, index) => (
                                    <div key={index}>
                                        <NewsBox
                                            row={row}
                                            cashed_images={props?.cashed_images}
                                            className={""}
                                        ></NewsBox>
                                    </div>
                                ))}
                                {props?.loading == "true" && <LoaderPage className={"bg-background mt-[1rem]"} />}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabInfoAnalysisNews;
