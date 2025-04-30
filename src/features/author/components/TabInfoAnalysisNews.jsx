import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


// components 

import Accordion from "../../core/components/Accordion.jsx";
import InfoBox from "../../core/components/InfoBox.jsx";
import { Image, ImageLazy } from "../../core/components/Image.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn";

// Constants

import { DEFAULT_AVATAR_IMAGE } from "../../../app/utils/constant/Defaults.js";



// Svg

import chart from "../../../../assets/icons/svg/chart-nav.svg";
import calender from "../../../../assets/icons/svg/icon-light-calender.svg";
import clock from "../../../../assets/icons/svg/icon-color-clock.svg";
import star from "../../../../assets/icons/svg/icon-color-star.svg";
import chart_chart from "../../../../assets/icons/svg/icon-color-chart.svg";
import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper.js";
import arrow_down from "../../../../assets/icons/svg/icon-red-arrow-down.svg";
import arrow_up from "../../../../assets/icons/svg/icon-green-arrow-up.svg";

import PieChart from "../../core/components/PieChart.jsx";


const TabInfoAnalysisNews = ({ className, ...props }) => {
    // hooks
    const { t } = useTranslation();

    // consts 
    const data_today = [
        {
            name: 'Positive',
            y: props?.author?.last_day_sentiment.positive,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#B4A2F1'],
                    [1, '#B4A2F150']
                ]
            }
        },
        {
            name: 'Negative',
            y: props?.author?.last_day_sentiment.negative,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#E57C43'],
                    [1, '#CC6E3C']
                ]
            },
        },
        {
            name: 'Neutral',
            y: props?.author?.last_day_sentiment.neutral,
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
            name: 'Positive',
            y: props?.author?.last_week_sentiment.positive,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#B4A2F1'],
                    [1, '#B4A2F150']
                ]
            }
        },
        {
            name: 'Negative',
            y: props?.author?.last_week_sentiment.negative,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#E57C43'],
                    [1, '#CC6E3C']
                ]
            },
        },
        {
            name: 'Neutral',
            y: props?.author?.last_week_sentiment.neutral,
            color: {
                linearGradient: { x1: 0, y1: 0, x2: 0, x2: 1 },
                stops: [
                    [0, '#D2D2D5'],
                    [1, '#D2D2D500']
                ]
            }
        }
    ]


    // functions
    return (
        <div className={cn("relative", className)}>
            {/* <div className="w-[352px] px-2 h-12 bg-background-light rounded-2xl justify-between items-center gap-1.5 inline-flex mx-4"> */}
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
                {/* <div className="basis-1/3 peer-checked/tab3:bg-Neutral-500 peer-checked/tab3:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab3:!text-primary-500 font-medium text-[0.85rem] leading-5">
          <label
            htmlFor="tab3"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[0.3rem] xs:py-2 select-none"
          >
            {t("latest_news")}
          </label>
        </div> */}

                <div className="tab1-content bg-background px-4 mt-6 pb-[7rem] w-full absolute right-0 top-10 hidden peer-checked/tab1:block">

                    <div className="flex flex-col border rounded-2xl border-Neutral-400 px-6 pt-5 pb-7">
                        {/* header */}
                        <div className="flex flex-row gap-2 items-center">
                            <ImageLazy
                                alt={props?.author.description}
                                src={
                                    props?.author.local_image
                                        ? props?.author.local_image
                                        : props?.author.picUrl
                                            ? props?.author.picUrl
                                            : DEFAULT_AVATAR_IMAGE
                                }
                                onError={(e) => {
                                    e.target.src = DEFAULT_AVATAR_IMAGE;
                                }}
                                className={"w-10 h-10 rounded-full"}
                            />
                            <div className="flex flex-col">
                                <div className="text-white text-xl font-bold capitalize">
                                    {props?.author?.name}
                                </div>
                                <div className="text-Neutral-300 text-sm font-extrabold leading-relaxed tracking-wide">
                                    {props?.author?.newsCount}
                                </div>
                            </div>
                        </div>

                        {/* description */}
                        <div className="text-white text-base font-bold mt-2 leading-9">
                            {t("description")}
                        </div>
                        <Link to={props?.author?.biographyUrl} target="_blank" className="text-Neutral-300 text-xs font-extrabold leading-none">
                            {props?.author?.biographyUrl}
                        </Link >
                        <div className="w-72 text-white text-sm font-normal leading-tight mt-2 max-h-[6.5rem] overflow-auto scrollbar rtl:pl-3 ltr:pr-3 text-left">
                            {props?.author?.biography}
                        </div>
                    </div>



                </div>
                <div className="tab2-content px-4 bg-background mt-6 pb-[7rem] absolute w-full top-10 right-0 hidden peer-checked/tab2:block">
                    <div className="flex flex-col gap-4">
                        <Accordion
                            id="analysis_news_base_statistics"
                            open={true}
                            title={
                                <Trans
                                    i18nKey="news_base_statistics"
                                    values={{
                                        name: props?.author?.name,
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
                                        parseInt(props?.author?.newsCount)
                                    )}
                                    title={t("news")}
                                />
                                <InfoBox
                                    icon={calender}
                                    icon_title="1"
                                    number={formatNumberHelper(
                                        parseInt(props?.author?.AvgNewsPERday)
                                    )}
                                    title={t("news_per_day")}
                                />
                                <InfoBox
                                    icon={calender}
                                    icon_title="7"
                                    number={formatNumberHelper(
                                        parseInt(props?.author?.AvgNewsPERweek)
                                    )}
                                    title={t("news_per_week")}
                                />
                                <InfoBox
                                    icon={calender}
                                    icon_title="30"
                                    number={formatNumberHelper(
                                        parseInt(props?.author?.AvgNewsPERMonth)
                                    )}
                                    title={t("news_per_month")}
                                />
                            </div>
                        </Accordion>


                        {props?.author?.last_day_sentiment?.negative !== 0 && <Accordion
                            id="today_sentiment"
                            open={false}

                            title={
                                <Trans
                                    i18nKey="day_sentiments"
                                    values={{
                                        name: props?.author?.name,
                                    }}
                                >
                                    <span className="text-primary-500 capitalize"></span>
                                </Trans>
                            }
                            className={"bg-background border border-Neutral-400/50"}>
                            <div className="w-full flex flex-col items-center justify-center pb-4">
                                <PieChart height={300} width={300} data={data_today} name="Sentiment" title={"Out Of " + props?.author.last_day_count.toLocaleString()} />
                            </div>
                        </Accordion>}

                        {props?.author?.last_week_sentiment?.negative !== 0 && <Accordion
                            id="week_sentiment"
                            open={false}

                            title={
                                <Trans
                                    i18nKey="week_sentiments"
                                    values={{
                                        name: props?.author?.name,
                                    }}
                                >
                                    <span className="text-primary-500 capitalize"></span>
                                </Trans>
                            }
                            className={"bg-background border border-Neutral-400/50 "}>
                            <div className="w-full flex flex-col items-center justify-center pb-4">
                                <PieChart height={300} width={300} data={data_week} name="Sentiment" title={"Out Of " + props?.author.last_day_count.toLocaleString()} />
                            </div>
                        </Accordion>}

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
