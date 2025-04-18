import React from 'react'

// Components

import { ImageLazy } from '../../../core/components/Image.jsx'

// Functions

import { cn } from '../../../../../utils/lib/cn.js'

const FeatureBox = ({ className, ...props }) => {
    return (
        <>
            <div {...props} className={cn("flex flex-col justify-center items-center w-96 h-80 bg-[#1F1E2E] rounded-[35px] gap-4", className)}>
                <div className="flex flex-col justify-center items-center w-24 h-24 bg-[#28263A] rounded-full">
                    <ImageLazy src={props?.icon} alt={props?.id + "-icon"} className={"w-16 h-16"} />
                </div>
                <h3 className="text-white text-xl font-bold">{props?.title}</h3>
                <p className="w-80 text-Neutral-200 text-center text-base font-normal ">{props?.description}</p>
            </div>
        </>
    )
}

export default FeatureBox
