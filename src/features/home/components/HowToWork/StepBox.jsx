import React from 'react'

// Functions

import { cn } from '../../../../../utils/lib/cn'

const StepBox = ({ className, children, ...props }) => {
    return (
        <>
            <div className='flex flex-row'>
                <div className='relative -mt-[1rem] w-36 h-36'>
                    <div className={cn("absolute top-0 w-36 h-36 bg-secondary-50 rounded-full", className)}>
                    </div>
                    <div className={'absolute w-full text-secondary-100 text-9xl font-normal font-spaceGrotesk inline-flex justify-center'}>{props?.number}</div>
                </div>
                <div className="flex flex-col gap-3 px-[4rem]">
                    <div className="text-primary-400 text-2xl font-medium text-right">{props?.title}</div>
                    <div className="w-60 text-Neutral-500 text-base font-medium">{children}</div>
                </div>
            </div>
        </>
    )
}

export default StepBox
