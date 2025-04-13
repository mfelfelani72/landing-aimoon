import React from 'react'

// Components

import { Image } from '../../core/components/Image.jsx'

// Svg

import vector from "../../../../assets/images/vector/vector-why-aimoonhub.svg"

const WhyAimoonhub = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden">
                <div className="relative w-[135rem] h-[82.5rem] z-20 ml-[20rem]">
                    <Image src={vector} alt="plans-vevtor" className={"w-[135rem] h-full object-none"} />

                </div>
            </div>


        </>
    )
}

export default WhyAimoonhub
