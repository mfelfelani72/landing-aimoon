import React from 'react'

// Components

import { Image } from '../../core/components/Image.jsx'

// Svg

import vector from "../../../../assets/images/vector/vector-why-aimoonhub.svg"

const WhyAimoonhub = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden z-20">
                <div className="relative width-theme px-default h-[45rem]">
                    <div className='absolute top-0 inset-x-0 w-full'>
                        <Image src={vector} alt="vector-aimoonhub-statistics" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyAimoonhub
