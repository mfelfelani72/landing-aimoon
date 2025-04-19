import React from 'react'
import { Trans, useTranslation } from "react-i18next";

// Components

import { ButtonLink } from '../../core/components/Button.jsx'
import ChessBoard from '../../core/components/ChessBoard.jsx'
import { Image, ImageLazy } from '../../core/components/Image.jsx'

// Svg and Png

import stars from "../../../../assets/icons/svg/stars.svg"
import chart from "../../../../assets/images/svg/welcome-chart.svg"
import shadow from "../../../../assets/images/svg/shadow.svg"
import mockup from "../../../../assets/images/png/mockup-aimoonhub.png"
import coin_1 from "../../../../assets/icons/svg/icon-coin-1.svg"
import usdt from "../../../../assets/icons/svg/icon-usdt.svg"
import bitcoin from "../../../../assets/icons/svg/icon-bitcoin.svg"
import eth from "../../../../assets/icons/svg/icon-eth.svg"

const Welcome = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <div className='relative w-full h-[52rem] inline-flex justify-center overflow-hidden'>
                {/* texts */}
                <div className='w-[50rem] px-default flex flex-col z-20 pointer-events-none pt-[5rem]'>
                    <h1 className="w-[29.75rem] text-5xl font-bold leading-[4rem]">
                        <Trans
                            i18nKey="welcome_title"
                            values={{
                                financial_markets: t('financial_markets'),
                                cryptocurrencies: t('cryptocurrencies'),
                            }}
                        >
                            <span className="text-secondary-500"></span>
                            <span className="text-secondary-500"></span>
                        </Trans>
                    </h1>
                    <h2 className="w-[33.5rem] text-Neutral-300 text-lg font-normal leading-7 mt-8">
                        {t("welcome_description")}
                    </h2>

                    <div className='flex flex-row mt-12 gap-2 pointer-events-auto'>
                        <ButtonLink className={"w-44 h-14"}>{t("free_test")}</ButtonLink>
                        <ButtonLink to={"/dashboard"} className={"w-44 h-14 bg-white border border-primary-400 text-primary-400 text-base font-bold hover:bg-white"}>{t("login_dashboard")}</ButtonLink>
                    </div>

                    <div className=''>
                        <Image src={stars} alt={"stars"} className={"w-[6.75rem] h-[1rem] mt-[4.5rem]"} />
                    </div>

                    <h3 className="w-96 text-lg font-bold leading-7 mt-6">
                        {t("welcome_title_2")}
                    </h3>
                    <h4 className="w-[25rem] text-Neutral-300 text-base font-normal leading-relaxed mt-3">
                        {t("welcome_description_2")}
                    </h4>

                </div>
                {/* pictures */}
                <div className='relative w-[50rem] z-20 mt-[4rem] pointer-events-none'>
                    {/* coins-icon */}
                    <div className="absolute -top-[1rem] rtl:-right-[6rem] ltr:-left-[6rem]">
                        <div className='inline-flex justify-center items-center bg-white w-16 h-16 rounded-full pointer-events-auto hover:animate-spin'>
                            <ImageLazy src={coin_1} alt={"coin_1"} className={"w-8 h-8"} />
                        </div>
                    </div>
                    <div className="absolute top-[20rem] rtl:-right-[8rem] ltr:-left-[8rem]">
                        <div className='inline-flex justify-center items-center bg-white w-16 h-16 rounded-full pointer-events-auto hover:animate-spin'>
                            <ImageLazy src={eth} alt={"eth"} className={"w-8 h-8"} />
                        </div>
                    </div>
                    <div className="absolute top-[9rem] rtl:left-[15.5rem] ltr:right-[15.5rem]">
                        <div className='inline-flex justify-center items-center bg-white w-16 h-16 rounded-full pointer-events-auto hover:animate-spin'>
                            <ImageLazy src={usdt} alt={"usdt"} className={"w-10 h-10"} />
                        </div>
                    </div>
                    <div className="absolute top-[34rem] rtl:left-[15rem] ltr:right-[15rem]">
                        <div className='inline-flex justify-center items-center bg-white w-16 h-16 rounded-full pointer-events-auto hover:animate-spin'>
                            <ImageLazy src={bitcoin} alt={"bitcoin"} className={"w-8 h-8"} />
                        </div>
                    </div>

                    {/* mockup */}

                    <div className='absolute top-0 inset-x-0 w-52 h-[27rem] bg-white rounded-3xl shadow-[100px_50px_200px_0px_rgba(10,10,15,0.10)] inline-flex items-center'>
                        <ImageLazy src={mockup} alt="mockup" className={"w-52 h-96"} />
                    </div>
                    <div className='absolute -top-[1rem] rtl:-right-[1.25rem] ltr:-left-[1.25rem] -z-1'>
                        <ImageLazy src={shadow} alt="shadow" className={"w-[16.25rem] h-[30rem] rounded-3xl blur-xl"} />
                    </div>
                    <div className='absolute top-[17.5rem] rtl:right-[3.5rem] ltr:left-[3.5rem]'>
                        <ImageLazy src={chart} alt="welcome-chart" className={"w-[25.75rem] h-[15rem]"} />
                    </div>
                </div>

                <div className='absolute top-[6rem] rtl:right-[65rem] ltr:left-[65rem]'>
                    <ChessBoard id={"table-welcome-bottom"} className={"rotate-[32deg] skew-x-[-32deg] skew-y-[-5deg]"} bordClassName={`grid-cols-16 grid-rows-16 w-[100rem] h-[100rem]`} backgroundColor={"bg-[#dadada]"} mosaicClassName={"border-[#dadada]"} />
                </div>

                <div className="absolute bottom-0 inset-x-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
            </div>
        </>
    )
}

export default Welcome
