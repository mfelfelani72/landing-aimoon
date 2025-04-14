import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { Image, ImageLazy } from '../../core/components/Image.jsx'
import FeatureBox from '../components/whyAimoonhub/FeatureBox.jsx';
import FreeTestAimoonex from '../components/whyAimoonhub/FreeTestAimoonex.jsx'

// Svg

import vector from "../../../../assets/images/vector/vector-why-aimoonhub.svg"
import coin_1 from "../../../../assets/icons/svg/icon-coin-1.svg"
import usdt from "../../../../assets/icons/svg/icon-usdt.svg"
import bitcoin from "../../../../assets/icons/svg/icon-bitcoin.svg"
import eth from "../../../../assets/icons/svg/icon-eth.svg"
import stars from "../../../../assets/icons/svg/feature-stars.svg"
import auto from "../../../../assets/icons/svg/feature-auto.svg"
import dashboard from "../../../../assets/icons/svg/feature-dashboard.svg"


const WhyAimoonhub = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden">
                {/* title */}

                <div className="text-center text-Neutral-500 text-3xl font-bold">
                    {t("why_aimoonhub_title")}
                </div>
                <div className="text-Neutral-300 text-base font-normal leading-loose mt-6">
                    {t("why_aimoonhub_description")}

                </div>
                <div className='relative w-[135rem] h-[82.5rem] z-20 pointer-events-none'>

                    <div className='absolute top-0 left-[10rem]'>
                        <div className="relative w-[135rem] h-[82.5rem]">
                            <Image src={vector} alt="plans-vevtor" className={"w-[135rem] h-full object-none"} />
                        </div>
                    </div>
                    <div className='absolute top-[35rem] inset-x-0 width-theme rtl:mr-[20rem] ltr:ml-[20rem]'>
                        <div className="flex flex-col items-center justify-center mx-default">

                            {/* content */}
                            <div className="relative w-full">

                                {/* FeatureBoxes */}
                                <div className='absolute -top-[25rem] inset-x-0 rtl:-mr-[5rem] ltr:-ml-[5rem]'>
                                    <div className='flex flex-row w-full justify-center gap-6'>
                                        <FeatureBox id={1} icon={stars} title={t("feature_box_1_title")} description={t("feature_box_1_description")} />
                                        <FeatureBox id={2} icon={auto} title={t("feature_box_2_title")} description={t("feature_box_2_description")} />
                                        <FeatureBox id={3} icon={dashboard} title={t("feature_box_3_title")} description={t("feature_box_3_description")} />
                                    </div>
                                </div>

                                {/* circle and table */}
                                <div className="absolute top-[5rem] inset-x-0 inline-flex justify-center items-center">
                                    <div className="w-80 h-80 mt-[2rem] opacity-20 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(145,_118,_234,_0)_3%,_#9176EA_41%,_rgba(81.79,_66.56,_132,_0)_100%)] rounded-full blur-2xl z-10" >
                                    </div>
                                    {/* table shape */}
                                    {/* columns */}
                                    <div className="absolute -top-[2rem] inset-x-0 inline-flex items-center justify-center gap-20">
                                        <div className="flex flex-row items-center justify-center gap-[6.5rem]">
                                            <div className="w-0 h-[32.5rem]">
                                                <div className="w-[0.4375rem] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-0 h-[32.5rem]">
                                                <div className="w-[0.4375rem] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-0 h-[32.5rem]">
                                                <div className="w-[0.4375rem] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-0 h-[32.5rem]">
                                                <div className="w-[0.4375rem] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-0 h-[32.5rem]">
                                                <div className="w-[0.4375rem] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-0 h-[32.5rem]">
                                                <div className="w-[0.4375rem] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* rows */}
                                    <div className="absolute top-[6rem] inset-x-0 inline-flex items-center justify-center gap-20">
                                        <div className="flex flex-col items-center justify-center gap-[6.5rem]">
                                            <div className="w-[44rem] h-0">
                                                <div className="w-full h-[0.4375rem] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-[44rem] h-0">
                                                <div className="w-full h-[0.4375rem] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-[44rem] h-0">
                                                <div className="w-full h-[0.4375rem] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                            <div className="w-[44rem] h-0">
                                                <div className="w-full h-[0.4375rem] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* coins-icon */}
                                <div className="absolute top-[11rem] right-[13rem] mx-default">
                                    <ImageLazy src={coin_1} alt={"coin_1"} className={"w-8 h-8"} />
                                </div>
                                <div className="absolute top-[22rem] right-[3rem] mx-default">
                                    <ImageLazy src={eth} alt={"eth"} className={"w-8 h-8"} />
                                </div>
                                <div className="absolute top-[14rem] left-[8.5rem] mx-default">
                                    <ImageLazy src={usdt} alt={"usdt"} className={"w-10 h-10"} />
                                </div>
                                <div className="absolute top-[24rem] left-[2rem] mx-default">
                                    <ImageLazy src={bitcoin} alt={"bitcoin"} className={"w-8 h-8"} />
                                </div>
                                {/* text and input */}
                                <div className="absolute top-[2rem] inset-x-0 inline-flex justify-center items-center pointer-events-auto">
                                    <div className="flex flex-col items-center justify-center w-[40rem]">
                                        <p className="text-white mt-44 text-center text-3xl font-bold">
                                            {t("why_aimoonhub_description")}
                                        </p>
                                        <div className="w-[40rem] text-center text-Neutral-100 text-xl font-normal mt-6">
                                            {t("why_aimoonhub_slogan")}
                                        </div>
                                        <FreeTestAimoonex />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default WhyAimoonhub
