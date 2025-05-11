import React, { useEffect, useState } from 'react'
import { useTranslation } from "react-i18next";

// Components

import { Image } from '../../core/components/Image.jsx';
import LoaderPage from "../../../app/components/LoaderPage.jsx"

// Constants

import { DB_STATICS } from "../../../app/utils/constant/EndPoints.js"
import { DEFAULT_PROVIDER_IMAGE } from "../../../app/utils/constant/Defaults.js"

// Functions

import { ConnectToServer } from '../../../../utils/services/api/ConnectToServer.js';
import formatNumberHelper from "../../../../utils/helpers/formatNumberHelper.js"

// Svg and Png

import vector from "../../../../assets/images/vector/vector-aimoonhub-statistics.svg"
import acticity from "../../../../assets/icons/svg/icon-activity.svg"
import chart from "../../../../assets/icons/svg/icon-chart.svg"
import folder from "../../../../assets/icons/svg/icon-folder.svg"
import graph from "../../../../assets/icons/svg/icon-graph.svg"
import headphones from "../../../../assets/icons/svg/icon-headphones.svg"
import baseChart from "../../../../assets/images/svg/base-chart.svg"

const AimoonhubStatistics = () => {
    // hooks
    const { t } = useTranslation();

    // states

    const [dbStatics, setDbStatics] = useState([]);

    // functions

    const getDbStatics = () => {
        const parameter = {
        };
        const header = {
            headers: {
                authorization: "d4735e3a265e16ee2393953"
            }
        }
        ConnectToServer("post", DB_STATICS, parameter, header, "aimoonhub-statics").then((response) => {
            if (response?.data?.return) {
                // console.log(response?.data?.data)
                setDbStatics(response?.data?.data);
            }
        });
    }

    useEffect(() => {
        if (dbStatics.length == 0) {
            getDbStatics();
        }
    }, [dbStatics])
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden pb-40 pointer-events-none">
                <div className="relative width-theme px-default h-[101rem] z-20">
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

                        {dbStatics?.length == 0 ? <LoaderPage className={"h-full bg-[#161521] pt-[13rem]"} /> : <div className='flex flex-col px-[9.5rem]'>
                            <div className='flex flex-row w-full h-[20rem] border-b-1 border-Neutral-300'>
                                <div className='basis-1/3 flex flex-col items-center py-2 gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={acticity} alt="acticity" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_agencies")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+{dbStatics.length !== 0 && formatNumberHelper(parseInt(dbStatics?.totalNewsGroups))}</div>
                                    <div className="relative w-44 h-12 bg-[#28263A] rounded-[20px]" >
                                        {dbStatics?.providersList?.slice(0, 5).map((row, index) => (
                                            <Image
                                                key={index}
                                                style={{
                                                    right: `${index * 2 + 0.3}rem`,
                                                }}
                                                src={row?.local_image || row?.logoUrl || DEFAULT_PROVIDER_IMAGE}
                                                onError={(e) => {
                                                    e.target.src = DEFAULT_PROVIDER_IMAGE;
                                                }}
                                                alt={"news_agency-" + index}
                                                className="w-9 h-9 absolute top-1.5 rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className='basis-1/3 rtl:border-r-1 ltr:border-l-1 border-Neutral-300 flex flex-col items-center py-2 gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={chart} alt="chart" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_analyses")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+{dbStatics.length !== 0 && formatNumberHelper(parseInt(dbStatics?.totalAnalyzed))}</div>
                                </div>
                                <div className='basis-1/3 rtl:border-r-1 ltr:border-l-1 border-Neutral-300 flex flex-col items-center py-2 gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={headphones} alt="headphones" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_reporters")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+{dbStatics.length !== 0 && formatNumberHelper(parseInt(dbStatics?.totalNewsAuthors))}</div>
                                    <div className="relative w-44 h-12 bg-[#28263A] rounded-[20px] " >
                                        {dbStatics?.authorsList?.slice(0, 5).map((row, index) => (
                                            <Image
                                                key={index}
                                                style={{
                                                    right: `${index * 2 + 0.3}rem`,
                                                }}
                                                src={row?.local_image || row?.picUrl || DEFAULT_PROVIDER_IMAGE}
                                                onError={(e) => {
                                                    e.target.src = DEFAULT_PROVIDER_IMAGE;
                                                }}
                                                alt={"reporter-" + index}
                                                className="w-9 h-9 absolute top-1.5 rounded-full"
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-row w-full h-[20rem] '>
                                <div className='basis-1/3 flex flex-col items-center justify-center gap-8'>
                                    <div className='w-14 h-14 rounded-full bg-[#28263A] inline-flex items-center justify-center'>
                                        <Image src={graph} alt="graph" className={"w-10 h-10"} />
                                    </div>
                                    <div className="text-Neutral-200 text-xl font-bold">{t("count_aimoonhub_users")}</div>
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+{dbStatics.length !== 0 && formatNumberHelper(parseInt(dbStatics?.totalUsersCount))}</div>
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
                                    <div className="text-5xl font-medium font-spaceGrotesk text-white left-to-right">+{dbStatics.length !== 0 && formatNumberHelper(parseInt(dbStatics?.totalNews))}</div>
                                </div>
                            </div>
                        </div>}


                    </div>
                </div>
            </div>
        </>
    )
}

export default AimoonhubStatistics
