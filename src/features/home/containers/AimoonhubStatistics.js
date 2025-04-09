import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { Image } from '../../core/components/Image.jsx';

// Svg and Png

import vector from "../../../../assets/images/vector/vector-aimoonhub-statistics.svg"
import acticity from "../../../../assets/icons/svg/icon-activity.svg"
import chart from "../../../../assets/icons/svg/icon-chart.svg"
import folder from "../../../../assets/icons/svg/icon-folder.svg"
import graph from "../../../../assets/icons/svg/icon-graph.svg"
import headphones from "../../../../assets/icons/svg/icon-headphones.svg"
import baseChart from "../../../../assets/images/svg/base-chart.svg"

import news_agency_1 from "../../../../assets/images/png/image-163.png"
import news_agency_2 from "../../../../assets/images/png/image-164.png"
import news_agency_3 from "../../../../assets/images/png/image-165.png"
import news_agency_4 from "../../../../assets/images/png/image-166.png"
import news_agency_5 from "../../../../assets/images/png/image-168.png"

const AimoonhubStatistics = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden pb-40">
                <div className="relative width-theme px-default h-[101rem]">
                    <div className='absolute top-0 inset-x-0 w-full'>
                        <Image src={vector} alt="vector-aimoonhub-statistics" />
                    </div>
                    <div className="absolute top-[20rem] inset-x-0 inline-flex items-center justify-center">
                        <div className="w-80 h-80 opacity-20 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(145,_118,_234,_0)_3%,_#9176EA_41%,_rgba(81.79,_66.56,_132,_0)_100%)] rounded-full blur-2xl" />
                    </div>
                    <div className="absolute top-[20rem] inset-x-0">
                        {/* title */}
                        <div className="inline-flex items-center justify-center w-full h-80 text-white text-3xl font-bold">
                            {t("aimoonhub_statistics_slogan")}
                        </div>

                        {/* content */}

                        <div className='flex flex-col px-[9.5rem]'>
                            <div className='flex flex-row w-full h-[20rem] border-b-1 border-Neutral-300'>
                                <div className='basis-1/3 flex flex-col items-center py-2 gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={acticity} alt="acticity" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_agencies")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+100</div>
                                    <div className="relative w-44 h-12 bg-[#28263A] rounded-[20px]" >
                                        <Image src={news_agency_1} alt="news_agency_1" className={"w-9 h-9 absolute top-1.5 right-2 rounded-full"} />
                                        <Image src={news_agency_2} alt="news_agency_2" className={"w-9 h-9 absolute top-1.5 right-10 rounded-full"} />
                                        <Image src={news_agency_3} alt="news_agency_3" className={"w-9 h-9 absolute top-1.5 right-18 rounded-full"} />
                                        <Image src={news_agency_4} alt="news_agency_4" className={"w-9 h-9 absolute top-1.5 right-26 rounded-full"} />
                                        <Image src={news_agency_5} alt="news_agency_5" className={"w-9 h-9 absolute top-1.5 right-33 rounded-full"} />
                                    </div>
                                </div>
                                <div className='basis-1/3 rtl:border-r-1 ltr:border-l-1 border-Neutral-300 flex flex-col items-center py-2 gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={chart} alt="chart" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_analyses")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+10,000</div>
                                </div>
                                <div className='basis-1/3 rtl:border-r-1 ltr:border-l-1 border-Neutral-300 flex flex-col items-center py-2 gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={headphones} alt="headphones" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_reporters")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+300</div>
                                    <div className="relative w-44 h-12 bg-[#28263A] rounded-[20px] " >
                                        <Image src={news_agency_1} alt="news_agency_1" className={"w-9 h-9 absolute top-1.5 right-2 rounded-full"} />
                                        <Image src={news_agency_2} alt="news_agency_2" className={"w-9 h-9 absolute top-1.5 right-10 rounded-full"} />
                                        <Image src={news_agency_3} alt="news_agency_3" className={"w-9 h-9 absolute top-1.5 right-18 rounded-full"} />
                                        <Image src={news_agency_4} alt="news_agency_4" className={"w-9 h-9 absolute top-1.5 right-26 rounded-full"} />
                                        <Image src={news_agency_5} alt="news_agency_5" className={"w-9 h-9 absolute top-1.5 right-33 rounded-full"} />
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row w-full h-[20rem] '>
                                <div className='basis-1/3 flex flex-col items-center justify-center gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={graph} alt="graph" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_aimoonhub_users")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+1,000</div>
                                </div>
                                <div className='basis-1/3 rtl:border-r-1 ltr:border-l-1 border-Neutral-300 flex flex-col items-center justify-center gap-8'>
                                    <Image src={baseChart} alt="baseChart" className={"w-80 h-44"} />
                                    <div className="text-Neutral-200 text-xl font-bold">{t("financial_chart_currency_pairs_prices")}</div>
                                </div>
                                <div className='basis-1/3 rtl:border-r-1 ltr:border-l-1 border-Neutral-300 flex flex-col items-center justify-center gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={folder} alt="folder" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_news")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+55,000</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AimoonhubStatistics
