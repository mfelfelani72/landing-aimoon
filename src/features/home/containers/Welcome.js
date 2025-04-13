import React from 'react'
import { t } from 'i18next'

// Components

import { ButtonLink } from '../../core/components/Button.jsx'
import ChessBoard from '../../core/components/ChessBoard.jsx'
import { Image } from '../../core/components/Image.jsx'

// Svg

import stars from "../../../../assets/icons/svg/stars.svg"

const Welcome = () => {
    return (
        <>
            <div className='relative w-full h-[40rem] inline-flex justify-center overflow-hidden'>
                <div className='w-[50rem] px-default flex flex-col z-30 pointer-events-none'>
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
                <div className='w-[50rem]'>s</div>

                <div className='absolute -top-[3rem] right-[65rem]'>
                    <ChessBoard id={"table-work-bottom"} className={"rotate-[32deg] skew-x-[-32deg] skew-y-[-5deg]"} bordClassName={`grid-cols-16 grid-rows-16 w-[100rem] h-[100rem]`} backgroundColor={"bg-[#dadada]"} mosaicClassName={"border-[#dadada]"} />
                </div>
            </div>
        </>
    )
}

export default Welcome
