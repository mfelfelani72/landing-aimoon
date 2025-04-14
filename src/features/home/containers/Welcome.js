import React from 'react'
import { t } from 'i18next'

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
    return (
        <>
            <div className='relative w-full h-[47rem] inline-flex justify-center overflow-hidden'>
                {/* texts */}
                <div className='w-[50rem] px-default flex flex-col z-20 pointer-events-none pt-[5rem]'>
                    <h1 className="w-[532.63px] text-5xl font-bold leading-[66px]"><span className="">تحلیل لحظه ای اخبار <br /></span><span className="text-secondary-500">بازارهای مالی</span><span className=""> و </span><span className="text-secondary-500">رمزارزها </span></h1>
                    <h2 className="w-[533px] text-Neural-300 text-lg font-normal leading-7 mt-8">ایمون هاب با استفاده از هوش مصنوعی، اخبار و داده‌های بازار را در لحظه تحلیل کرده و اطلاعاتی دقیق برای تصمیم‌گیری بهتر به شما ارائه می‌دهد.</h2>

                    <div className='flex flex-row mt-12 gap-2 pointer-events-auto'>
                        <ButtonLink className={"w-44 h-14"}>{t("free_test")}</ButtonLink>
                        <ButtonLink className={"w-44 h-14 bg-white border border-primary-400 text-primary-400 text-base font-bold hover:bg-white"}>{t("login_dashboard")}</ButtonLink>
                    </div>

                    <div className=''>
                        <Image src={stars} alt={"stars"} className={"w-[6.75rem] h-[1rem] mt-[4.5rem]"} />
                    </div>

                    <h3 className="w-96 text-zinc-900 text-lg font-bold leading-7 mt-6">ابزار هوشمند تحلیل اخبار کریپتو!</h3>
                    <h4 className="w-96 text-zinc-700 text-base font-normal leading-relaxed mt-3">با دقتی فراتر از انسان، جدیدترین اخبار را بررسی کن. داده‌های لحظه‌ای، تحلیل‌های دقیق و بینشی عمیق برای تصمیم‌گیری بهتر در بازار.</h4>

                </div>
                {/* pictures */}
                <div className='relative w-[50rem] z-20 mt-[4rem]  pointer-events-none'>
                    {/* coins-icon */}
                    <div className="absolute -top-[1rem] -right-[6rem]">
                        <ImageLazy src={coin_1} alt={"coin_1"} className={"w-8 h-8"} />
                    </div>
                    <div className="absolute top-[20rem] -right-[8rem]">
                        <ImageLazy src={eth} alt={"eth"} className={"w-8 h-8"} />
                    </div>
                    <div className="absolute top-[9rem] left-[15.5rem]">
                        <ImageLazy src={usdt} alt={"usdt"} className={"w-10 h-10"} />
                    </div>
                    <div className="absolute top-[34rem] left-[15rem]">
                        <ImageLazy src={bitcoin} alt={"bitcoin"} className={"w-8 h-8"} />
                    </div>

                    <div className='absolute top-0 inset-x-0 w-52 h-[27rem] bg-white rounded-3xl shadow-[100px_50px_200px_0px_rgba(10,10,15,0.10)] inline-flex items-center'>
                        <ImageLazy src={mockup} alt="mockup" className={"w-52 h-96"} />
                    </div>
                    <div className='absolute -top-[1rem] -right-[1.25rem] -z-1'>
                        <ImageLazy src={shadow} alt="shadow" className={"w-[260px] h-[480px] rounded-3xl blur-xl"} />
                    </div>
                    <div className='absolute top-[17.5rem] right-[3.5rem]'>
                        <ImageLazy src={chart} alt="welcome-chart" className={"w-[411px] h-[241px]"} />
                    </div>
                </div>

                <div className='absolute top-[6rem] right-[65rem]'>
                    <ChessBoard id={"table-work-bottom"} className={"rotate-[32deg] skew-x-[-32deg] skew-y-[-5deg]"} bordClassName={`grid-cols-16 grid-rows-16 w-[100rem] h-[100rem]`} backgroundColor={"bg-[#dadada]"} mosaicClassName={"border-[#dadada]"} />
                </div>

                <div className="absolute bottom-0 inset-x-0 w-full h-20 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>
            </div>
        </>
    )
}

export default Welcome
