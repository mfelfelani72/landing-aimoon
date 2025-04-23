import React from 'react'

// Components

import { ImageLazy } from '../../../core/components/Image.jsx'

// Functions

import { cn } from '../../../../../utils/lib/cn'
import { stringHelper } from "../../../../../utils/helpers/stringHelper"

// Svg

import avatar from "../../../../../assets/images/png/avatar.png"

const ReviewBox = ({ className, ...props }) => {
    return (
        <>
            <div className="relative">
                {/* color shadow */}
                {props?.colorShadow && <div className="absolute -left-[1.875rem] top-[3rem] -z-10 w-[25.5rem] h-[18.75rem] blur-2xl rounded-[3.75rem] opacity-40 review-box-shadow-gradiant"></div>}

                {/* Review box */}
                <div className={cn(
                    "flex flex-col items-center w-96 h-72 bg-white rounded-[20px] pt-11 relative",
                    className
                )}>
                    <ImageLazy src={avatar} alt="avatar" className="w-11 h-11 rounded-full" />
                    <div className="text-base font-bold leading-7 mt-2">{props?.name}</div>
                    <div className="text-Neutral-300 text-sm font-normal leading-snug">{props?.bio}</div>
                    <div className="pt-4 px-6 ltr:text-left rtl:text-right text-Neutral-400 text-base font-normal leading-7" >
                        {stringHelper(props?.review,30)}
                    </div>
                </div>
            </div>

        </>
    )
}

export default ReviewBox
