import React from 'react'
import { Trans, useTranslation } from "react-i18next";

// Components

import ReviewBox from '../components/customerReview/ReviewBox.jsx';
import { Image } from '../../core/components/Image.jsx';

// Svg
import arrow from "../../../../assets/icons/svg/arrow-dark.svg";

const CustomerReview = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden mb-44">
                <div className="relative width-theme">
                    {/* title */}
                    <div className='flex flex-col gap-3 items-center justify-center'>
                        <div className="w-[465px] text-center text-zinc-600 text-base font-normal leading-loose">2,157نفر به آیمون‌هاب نظر مثبت داده‌اند</div>
                        <div className="text-center text-Neutral-500 text-3xl font-bold">
                            {t("our_customer_reviews")}
                        </div>
                    </div>
                    {/* content */}
                    <div className="flex flex-col mt-[4.5rem]">
                        <div className='flex flex-row w-full items-center justify-center gap-16'>
                            <ReviewBox />
                            <ReviewBox className={"mt-11"} />
                            <ReviewBox />
                        </div>

                    </div>
                    <div className="flex flex-row w-full gap-3.5 items-center justify-center mt-12">
                        <Image src={arrow} alt={"arrow-slider-left"} className={"w-4 h-4 ltr:rotate-180 cursor-pointer"} />
                        <Image src={arrow} alt={"arrow-slider-right"} className={"w-4 h-4 rtl:rotate-180 cursor-pointer"} />
                    </div>

                    <div className="mt-6 text-center text-primary-400 text-base font-bold leading-7">
                        <Trans
                            i18nKey="all_reviews"
                            values={{
                                count: 2157,
                            }}
                        >
                            <span className=""></span>
                        </Trans>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CustomerReview
