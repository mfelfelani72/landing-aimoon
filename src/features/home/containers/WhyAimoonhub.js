import React from 'react'

// Components

import { Image } from '../../core/components/Image.jsx'

// Svg

import vector from "../../../../assets/images/vector/vector-why-aimoonhub.svg"

const WhyAimoonhub = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden pointer-events-none">
                <div className="relative w-full h-[82.5rem] z-20">
                    <div className='absolute top-0 left-[56.25rem]'>
                        <Image src={vector} alt="plans-vevtor" className={"object-none"} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default WhyAimoonhub
