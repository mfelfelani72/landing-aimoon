import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { Image } from '../../core/components/Image.jsx';

// Svg

import vector from "../../../../assets/images/vector/vector-aimoonhub-statistics.svg"

const AimoonhubStatistics = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden py-40">
                <div className="relative width-theme px-default h-[101rem]">
                    <div className='absolute top-0 inset-x-0 w-full'>
                        <Image src={vector} alt="vector-aimoonhub-statistics" />
                    </div>
                    <div className="absolute top-[20rem] inset-x-0 inline-flex items-center justify-center">
                        <div className="w-80 h-80 opacity-20 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(145,_118,_234,_0)_3%,_#9176EA_41%,_rgba(81.79,_66.56,_132,_0)_100%)] rounded-full blur-2xl" />
                    </div>
                    <div className="absolute top-[20rem] inset-x-0">
                        {/* title */}
                        <div className="inline-flex items-center justify-center w-full h-80 text-white text-3xl font-bold">شفاف و دقیق | آمارهای ایمون هاب</div>

                        {/* content */}

                        <div className='flex flex-col px-[9.5rem]'>
                            <div className='flex flex-row w-full h-[18rem] border-b-1 border-Neutral-300'>
                                <div className='basis-1/3'></div>
                                <div className='basis-1/3 border-r-1 border-Neutral-300'></div>
                                <div className='basis-1/3 border-r-1 border-Neutral-300'></div>
                            </div>
                            <div className='flex flex-row w-full h-[18rem] '>
                                <div className='basis-1/3'></div>
                                <div className='basis-1/3 border-r-1 border-Neutral-300'></div>
                                <div className='basis-1/3 border-r-1 border-Neutral-300'></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default AimoonhubStatistics
