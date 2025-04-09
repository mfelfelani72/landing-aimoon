import React from 'react'


const StepBox = ({ className, children, ...props }) => {
    return (
        <>
            <div className='flex flex-row'>
                <div className="text-secondary-100 text-9xl font-normal font-spaceGrotesk">{props?.number}</div>
                <div className="flex flex-col gap-3 px-[4rem]">
                    <div className="text-primary-400 text-2xl font-medium text-right">{props?.title}</div>
                    <div className="w-60 text-Neutral-500 text-base font-medium">{children}</div>
                </div>
            </div>
        </>
    )
}

export default StepBox
