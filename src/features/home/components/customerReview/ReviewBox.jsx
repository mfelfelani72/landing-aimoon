import React from 'react'

// Components

import { ImageLazy } from '../../../core/components/Image.jsx'

// Functions

import { cn } from '../../../../../utils/lib/cn'

// Svg

import customer from "../../../../../assets/images/png/customer.png"

const ReviewBox = ({ className, ...props }) => {
    return (
        <>
            <div className={cn("flex flex-col items-center w-96 h-72 bg-white rounded-[20px] shadow-[0px_42.444149017333984px_61.30821228027344px_0px_rgba(0,0,0,0.08)] pt-11", className)} >
                <ImageLazy src={customer} alt="customer" className={"w-11 h-11 rounded-full"} />
                <div className="text-base font-bold leading-7 mt-2">سعید محمدی</div>
                <div className="text-Neutral-300 text-sm font-normal leading-snug">تحلیل‌گر بازارهای مالی</div>
                <div className="pt-4 px-6 text-center text-Neutral-400 text-base font-normal leading-7">ایمون هاب بهم کمک کرد که سریع‌تر از رقبا به اخبار مهم دسترسی داشته باشم. حالا می‌تونم تحلیل‌هام رو با اطلاعات دقیق‌تری انجام بدم و تصمیمات بهتری بگیرم</div>
            </div>
        </>
    )
}

export default ReviewBox
