import React from 'react'

// Components

import { ImageLazy } from '../../../core/components/Image.jsx'

// Svg

import stars from "../../../../../assets/icons/svg/feature-stars.svg"
import auto from "../../../../../assets/icons/svg/feature-auto.svg"
import dashboard from "../../../../../assets/icons/svg/feature-dashboard.svg"

const FeatureBox = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center w-96 h-80 bg-[#1F1E2E] rounded-[35px] gap-4">
                <div className="flex flex-col justify-center items-center w-24 h-24 bg-[#28263A] rounded-full">
                    <ImageLazy src={stars} alt="stars" className={"w-16 h-16"} />
                </div>
                <h3 className="text-white text-xl font-bold">تحلیل اخبار مبتنی بر AI</h3>
                <p className="w-80 text-Neutral-200 text-center text-base font-normal ">جمع‌آوری اخبار از منابع معتبر و تحلیل تاثیر آن‌ها بر بازار کریپتو</p>
            </div>
        </>
    )
}

export default FeatureBox
