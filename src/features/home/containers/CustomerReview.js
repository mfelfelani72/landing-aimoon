import React from 'react'
import { Trans, useTranslation } from "react-i18next";

// Components

import ReviewBox from '../components/customerReview/ReviewBox.jsx';
import { Image } from '../../core/components/Image.jsx';
import ChessBoard from '../../core/components/ChessBoard.jsx';

// Svg
import arrow from "../../../../assets/icons/svg/arrow-dark.svg";

const CustomerReview = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <div className='relative h-[50rem] pt-[15rem] overflow-hidden z-10'>

                {/* table */}

                <div className='absolute top-[13rem] -right-[45rem] z-10'>
                    <ChessBoard id={"table-customer-review"} className={"rotate-[32deg] skew-x-[-32deg] skew-y-[-5deg]"} bordClassName={`grid-cols-16 grid-rows-16 w-[100rem] h-[100rem]`} backgroundColor={"bg-[#dadada]"} mosaicClassName={"border-[#dadada]"} />
                </div>

                {/* table */}

                {/* content */}
                <div className='absolute top-6 inset-x-0 z-20 pointer-events-none'>
                    <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden mb-44">
                        <div className="width-theme">
                            {/* title */}
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <div className="w-[29rem] text-center text-zinc-600 text-base font-normal leading-loose">
                                    <Trans
                                        i18nKey="count_reviews"
                                        values={{
                                            count: 2157,
                                        }}
                                    >
                                        <span className="ltr:font-spaceGrotesk"></span>
                                    </Trans>

                                </div>
                                <div className="text-center text-Neutral-500 text-3xl font-bold">
                                    {t("our_customer_reviews")}
                                </div>
                            </div>
                            {/* content */}
                            <div className="flex flex-col mt-[4.5rem]">
                                <div className='flex flex-row w-full items-center justify-center gap-16 right-to-left'>
                                    <ReviewBox name={"سعید محمدی"} bio={"تحلیلگر بازارهای مالی"} review={"ایمون هاب بهم کمک کرد که سریع‌تر از رقبا به اخبار مهم دسترسی داشته باشم. حالا می‌تونم تحلیل‌هام رو با اطلاعات دقیق‌تری انجام بدم و تصمیمات بهتری بگیرم"} className={"shadow-[0px_42.444149017333984px_61.30821228027344px_0px_rgba(0,0,0,0.08)]"} />
                                    <ReviewBox name={"سعید محمدی"} bio={"تحلیلگر بازارهای مالی"} review={"ایمون هاب بهم کمک کرد که سریع‌تر از رقبا به اخبار مهم دسترسی داشته باشم. حالا می‌تونم تحلیل‌هام رو با اطلاعات دقیق‌تری انجام بدم و تصمیمات بهتری بگیرم"} className={"mt-13"} colorShadow={true} />
                                    <ReviewBox name={"سعید محمدی"} bio={"تحلیلگر بازارهای مالی"} review={"ایمون هاب بهم کمک کرد که سریع‌تر از رقبا به اخبار مهم دسترسی داشته باشم. حالا می‌تونم تحلیل‌هام رو با اطلاعات دقیق‌تری انجام بدم و تصمیمات بهتری بگیرم"} />
                                </div>

                            </div>
                            <div className="flex w-full rtl:flex-row-reverse ltr:flex-row gap-3.5 items-center justify-center mt-12">
                                <Image src={arrow} alt={"arrow-slider-left"} className={"w-4 h-4 ltr:rotate-180 rtl:-rotate-180 cursor-pointer"} />
                                <Image src={arrow} alt={"arrow-slider-right"} className={"w-4 h-4 cursor-pointer"} />
                            </div>

                            <div className="mt-6 text-center text-primary-400 text-base font-bold leading-7">
                                <Trans
                                    i18nKey="all_reviews"
                                    values={{
                                        count: 2157,
                                    }}
                                >
                                    <span className="ltr:font-spaceGrotesk"></span>
                                </Trans>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute bottom-0 inset-x-0 w-full h-40 bg-gradient-to-t from-white to-transparent pointer-events-none z-20"
                ></div>
                {/* content */}


            </div>


        </>

    )
}

export default CustomerReview
