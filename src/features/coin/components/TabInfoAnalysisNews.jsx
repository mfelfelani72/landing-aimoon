import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import WordCloud from "react-d3-cloud";

// Components

import Accordion from "../../core/components/Accordion.jsx";
import InfoBox from "../../core/components/InfoBox.jsx";
import { Image, ImageLazy } from "../../core/components/Image.jsx";

// Functions

import { cn } from "../../../../utils/lib/cn";
import { dateHelper } from "../../../../utils/helpers/dateHelper.js";

// Constants

import { DEFAULT_COIN_IMAGE } from "../../../app/utils/constant/Defaults.js";

// Svg

import chart from "../../../../assets/icons/svg/chart-nav.svg";
import calender from "../../../../assets/icons/svg/icon-light-calender.svg";
import clock from "../../../../assets/icons/svg/icon-color-clock.svg";
import star from "../../../../assets/icons/svg/icon-color-star.svg";
import chart_chart from "../../../../assets/icons/svg/icon-color-chart.svg";
import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper.js";
import arrow_down from "../../../../assets/icons/svg/icon-red-arrow-down.svg";
import arrow_up from "../../../../assets/icons/svg/icon-green-arrow-up.svg";
import MoodTimeSeries from "./MoodTimeSeries.jsx";

const TabInfoAnalysisNews = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();
  console.log(props?.symbol);
  console.log(props?.coin_analyze);
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
        <div className="basis-1/3 peer-checked/tab3:bg-Neutral-500 peer-checked/tab3:border border-Neutral-400 py-1.5 rounded-xl text-center text-Neutral-300 peer-checked/tab3:!text-primary-500 font-medium text-[0.85rem] leading-5">
          <label
            htmlFor="tab3"
            className="tab-button cursor-pointer px-[calc(10.2vw)] py-1.5 xs:px-[0.3rem] xs:py-2 select-none"
          >
            {t("latest_news")}
          </label>
        </div>

        <div className="tab1-content bg-background px-4 mt-6 pb-[7rem] w-full absolute right-0 top-10 hidden peer-checked/tab2:block">
          <div className="flex flex-col border rounded-2xl border-Neutral-400 px-6 pt-5 pb-7">
            {/* header */}
            <div className="flex flex-row gap-2 items-center">
              <ImageLazy
                alt={props?.symbol.description}
                src={
                  props?.symbol.local_image
                    ? props?.symbol.local_image
                    : props?.symbol.logo
                    ? props?.symbol.logo
                    : DEFAULT_COIN_IMAGE
                }
                onError={(e) => {
                  e.target.src = DEFAULT_COIN_IMAGE;
                }}
                className={"w-10 h-10 rounded-full"}
              />
              <div className="flex flex-col">
                <div className="text-white text-xl font-bold">
                  {props?.symbol?.name}
                </div>
                <div className="text-Neutral-300 text-sm font-extrabold leading-relaxed tracking-wide">
                  {props?.symbol?.latest_price_info?.formatted_price}
                </div>
              </div>
            </div>

            {/* description */}
            <div className="text-white text-base font-bold mt-2 leading-9">
              {t("description")}
            </div>
            <div className="text-Neutral-300 text-xs font-extrabold leading-none">
              {props?.symbol?.category}
            </div>
            <div className="w-72 text-white text-sm font-normal leading-tight mt-2 max-h-[6.5rem] overflow-auto scrollbar rtl:pl-3 ltr:pr-3 text-left">
              {props?.symbol?.description}
            </div>
          </div>

          {props?.coin_analyze && (
            <div className="flex flex-col gap-4 mt-4">
              <Accordion
                id="info"
                open={true}
                title={
                  <Trans
                    i18nKey="word_cloud_coin"
                    values={{
                      name: props?.symbol?.name,
                    }}
                  >
                    <span className="text-primary-500"></span>
                  </Trans>
                }
                icon={chart}
              >
                <WordCloud data={props?.coin_analyze?.word_frequencies} />
              </Accordion>
            </div>
          )}
        </div>
        <div className="tab2-content bg-background mt-6 pb-[7rem] absolute w-full top-10 right-0 hidden peer-checked/tab1:block">
          <div className="flex flex-col gap-4 mt-4 px-4">
            {/* <div className="relative">
              <div className="flex flex-col w-full bg-background-light p-[2px] rounded-2xl">
                <div className="flex flex-col min-h-60 bg-background rounded-2xl">
                  <div className="border-b-2 border-b-background-light pt-4 px-5 pb-2">
                    <span className="text-white text-base font-bold">
                      <Trans
                        i18nKey="news_summary"
                        values={{
                          name: props?.symbol?.name,
                        }}
                      >
                        <span className="text-primary-500 text-xl font-bold"></span>
                      </Trans>
                    </span>
                  </div>
                  <div className="flex flex-row gap-4 px-4 h-full items-start my-auto justify-between text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-11 h-11 rtl:bg-background-light ltr:bg-background rounded-full inline-flex items-center justify-center ltr:z-20">
                        <Image
                          src={chart_chart}
                          alt={"chart_chart"}
                          className={"w-6 h-6"}
                        />
                      </div>
                      <div className="text-Neutral-200 text-xs font-medium leading-none mt-3">
                        {t("chart_template")}
                      </div>
                      <div className="text-primary-400 text-sm font-medium leading-tight mt-1 w-20">
                        {props?.coin_analyze?.response?.chart_Pattern}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-11 h-11 bg-background-light rounded-full inline-flex items-center justify-center">
                        <Image src={star} alt={"star"} className={"w-6 h-6"} />
                      </div>
                      <div className="text-Neutral-200 text-xs font-medium leading-none mt-3">
                        {t("aimoonhubs_suggestion")}
                      </div>
                      <div className="text-primary-400 text-sm font-medium leading-tight mt-1 w-20">
                        {props?.coin_analyze?.response?.rec_position}
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-11 h-11 ltr:bg-background-light rtl:bg-background rounded-full inline-flex items-center justify-center rtl:z-20">
                        <Image
                          src={clock}
                          alt={"clock"}
                          className={"w-6 h-6"}
                        />
                      </div>
                      <div className="text-Neutral-200 text-xs font-medium leading-none mt-3">
                        {t("duration")}
                      </div>
                      <div className="text-primary-400 text-sm font-medium leading-tight mt-1 w-20">
                        {props?.coin_analyze?.response?.duration}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-5">
                  <div className="text-white text-base font-medium leading-snug">
                    {t("new_summary")}
                  </div>
                  <div className="text-Neutral-300 text-sm font-light leading-tight tracking-tight">
                    {props?.symbol?.latest_price_info?.market_name}
                  </div>
                  <div className="text-white text-sm font-normal leading-tight mt-2 max-h-[6.5rem] overflow-auto scrollbar rtl:pl-3 ltr:pr-3">
                    {props?.coin_analyze?.response?.summary}
                  </div>
                </div>
              </div>
              <div className="absolute z-10 top-0 -left-[0.5rem] w-40 h-40 opacity-50 bg-violet-300/30 rounded-full blur-2xl" />
            </div> */}
            {/* <Accordion
              id="analysis"
              open={false}
              title={t("aimoon_analysis")}
              icon={chart}
              className={"bg-background border border-Neutral-400/50"}
              circleLocation={"top-4 left-2"}
            >
              <div className="flex flex-col gap-2 px-4 pb-4">
                <div className="text-secondary-400 text-sm font-normal leading-tight tracking-tight">
                  {dateHelper(props?.symbol?.updatedAt, "difference")}
                </div>
                <div className="text-white text-sm font-normal leading-tight">
                  {props?.coin_analyze?.response?.analysis}
                </div>
              </div>
            </Accordion>
            <Accordion
              id="analysis"
              open={false}
              title={
                <Trans
                  i18nKey="news_base_statistics"
                  values={{
                    name: props?.symbol?.name,
                  }}
                >
                  <span className="text-primary-500"></span>
                </Trans>
              }
              className={"bg-background border border-Neutral-400/50"}
            >
              <div className="grid grid-cols-2 gap-2.5 px-4 pb-4">
                <InfoBox
                  icon={calender}
                  icon_title="All"
                  number={formatNumberHelper(
                    parseInt(props?.symbol?.latest_news_info.news_count)
                  )}
                  title={t("news")}
                />
                <InfoBox
                  icon={calender}
                  icon_title="1"
                  number={formatNumberHelper(
                    parseInt(props?.symbol?.latest_news_info.avg_news_day)
                  )}
                  title={t("news_per_day")}
                />
                <InfoBox
                  icon={calender}
                  icon_title="7"
                  number={formatNumberHelper(
                    parseInt(props?.symbol?.latest_news_info.avg_news_week)
                  )}
                  title={t("news_per_week")}
                />
                <InfoBox
                  icon={calender}
                  icon_title="30"
                  number={formatNumberHelper(
                    parseInt(props?.symbol?.latest_news_info.avg_news_month)
                  )}
                  title={t("news_per_month")}
                />
              </div>
            </Accordion>
            <Accordion
              id="analysis"
              open={true}
              icon={chart}
              title={t("amount_changes")}
              className={"bg-background border border-Neutral-400/50"}
            >
              <div className="flex flex-row w-full">
                <div className="basis-1/2 text-Neutral-100 text-sm font-normal leading-9 px-4">
                  {t("changes_emotions")}
                </div>
                <div className="basis-1/2 text-Neutral-100 text-sm font-normal leading-9 px-4">
                  {t("price_changes")}
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="ltr:border-r-1 rtl:border-l-1 border-t-1 border-Neutral-400/50">
                  <div className="flex flex-col px-2">
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-Neutral-300 text-[10px] font-normal leading-9">
                        {t("change_from_yesterday")}
                      </div>
                      <div
                        className={`${
                          props?.symbol.latest_news_info?.change_stat
                            ?.damp_5_change?.percent_change_24h == 0
                            ? "text-white"
                            : props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_24h > 0
                            ? "text-Success-500"
                            : "text-Error-500"
                        } text-sm font-normal leading-tight tracking-tight left-to-right`}
                      >
                        <div className="flex flex-row gap-1 items-center">
                          <div className="inline-flex items-center">
                            {" "}
                            {
                              props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_24h
                            }
                          </div>
                          <Image
                            src={
                              props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_24h > 0
                                ? arrow_up
                                : arrow_down
                            }
                            alt="arrow-day"
                            className={"w-4 h-4"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-Neutral-300 text-[10px] font-normal leading-9">
                        {t("change_from_last_week")}
                      </div>
                      <div
                        className={`${
                          props?.symbol.latest_news_info?.change_stat
                            ?.damp_5_change?.percent_change_7d == 0
                            ? "text-white"
                            : props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_7d > 0
                            ? "text-Success-500"
                            : "text-Error-500"
                        } text-sm font-normal leading-tight tracking-tight left-to-right`}
                      >
                        <div className="flex flex-row gap-1 items-center">
                          <div className="inline-flex items-center">
                            {" "}
                            {
                              props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_7d
                            }
                          </div>
                          <Image
                            src={
                              props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_7d > 0
                                ? arrow_up
                                : arrow_down
                            }
                            alt="arrow-week"
                            className={"w-4 h-4"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-Neutral-300 text-[10px] font-normal leading-9">
                        {t("change_from_last_month")}
                      </div>
                      <div
                        className={`${
                          props?.symbol.latest_news_info?.change_stat
                            ?.damp_5_change?.percent_change_30d == 0
                            ? "text-white"
                            : props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_30d > 0
                            ? "text-Success-500"
                            : "text-Error-500"
                        } text-sm font-normal leading-tight tracking-tight left-to-right`}
                      >
                        <div className="flex flex-row gap-1 items-center">
                          <div className="inline-flex items-center">
                            {" "}
                            {
                              props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_30d
                            }
                          </div>
                          <Image
                            src={
                              props?.symbol.latest_news_info?.change_stat
                                ?.damp_5_change?.percent_change_30d > 0
                                ? arrow_up
                                : arrow_down
                            }
                            alt="arrow-month"
                            className={"w-4 h-4"}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-secondary-400 text-xs pb-2 font-normal leading-tight tracking-tight">
                        {dateHelper(props?.symbol?.updatedAt, "difference")}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t-1 border-Neutral-400/50">
                  <div className="flex flex-col px-4">
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-Neutral-300 text-[10px] font-normal leading-9">
                        {t("current_price")}
                      </div>
                      <div className="text-white text-sm font-normal leading-tight tracking-tight">
                        {props?.symbol?.latest_price_info?.formatted_price}
                      </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-Neutral-300 text-[10px] font-normal leading-9">
                        {t("growth_last_day")}
                      </div>
                      <div className="text-white text-sm font-normal leading-tight tracking-tight">
                        <div
                          className={`${
                            props?.symbol?.latest_price_info?.change_rate == 0
                              ? "text-white"
                              : props?.symbol?.latest_price_info?.change_rate >
                                0
                              ? "text-Success-500"
                              : "text-Error-500"
                          } text-sm font-normal leading-tight tracking-tight left-to-right`}
                        >
                          <div className="flex flex-row gap-1 items-center">
                            <div className="inline-flex items-center">
                              {" "}
                              {props?.symbol?.latest_price_info?.change_rate}
                            </div>
                            <Image
                              src={
                                props?.symbol?.latest_price_info?.change_rate >
                                0
                                  ? arrow_up
                                  : arrow_down
                              }
                              alt="arrow-rate"
                              className={"w-4 h-4"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-Neutral-300 text-[10px] font-normal leading-9">
                        {t("price_last_day")}
                      </div>
                      <div className="text-white text-sm font-normal leading-tight tracking-tight">
                        <div
                          className={`${
                            props?.symbol?.latest_price_info?.change_price == 0
                              ? "text-white"
                              : props?.symbol?.latest_price_info?.change_price >
                                0
                              ? "text-Success-500"
                              : "text-Error-500"
                          } text-sm font-normal leading-tight tracking-tight left-to-right`}
                        >
                          <div className="flex flex-row gap-1 items-center">
                            <div className="inline-flex items-center">
                              {" "}
                              {props?.symbol?.latest_price_info?.change_price}
                            </div>
                            <Image
                              src={
                                props?.symbol?.latest_price_info?.change_price >
                                0
                                  ? arrow_up
                                  : arrow_down
                              }
                              alt="arrow-price"
                              className={"w-4 h-4"}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row w-full items-center justify-between">
                      <div className="text-secondary-400 text-xs pb-2 font-normal leading-tight tracking-tight">
                        {dateHelper(
                          new Date(
                            props?.symbol?.latest_price_info?.market_at
                          ).getTime() / 1000,
                          "difference"
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Accordion> */}
            <Accordion
              id="mood"
              open={true}
              icon={chart}
              title={t("amount_changes")}
              className={"bg-background border border-Neutral-400/50"}
            >
              <MoodTimeSeries data={props?.symbol?.daily_timeseries} />
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
