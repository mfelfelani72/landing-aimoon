import React from 'react'

// Components

import { Image } from './Image.jsx'

// Function

import { cn } from '../../../../utils/lib/cn'

const InfoBox = ({ className, ...props }) => {
    return (
        <>
            <div className={cn('flex flex-row gap-2 w-full py-5 bg-background-light rounded-2xl items-center px-3', className)}>
                <div className='relative bg-background w-10 h-10 rounded-full inline-flex items-center justify-center'>
                    <Image src={props?.icon} alt="icon" className={"w-6 h-6"} />
                    <div className='absolute w-full top-4.5 text-[0.62rem] inset-x-0 inline-flex justify-center'>
                        {props?.icon_title}
                    </div>
                </div>
                <div className='flex flex-col items-start gap-2 justify-center'>
                    <div className="text-primary-500 text-base font-medium leading-3 flex rtl:flex-row ltr:flex-row-reverse">
                        <div>{props?.number}</div>
                        <div>+</div>
                    </div>
                    <div className="text-Neutral-200 text-xs font-normal">{props?.title}</div>
                </div>
            </div>
        </>
    )
}

export default InfoBox
