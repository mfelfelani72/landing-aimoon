import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import StepBox from '../components/HowToWork/StepBox.jsx';

const HowToUse = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            {/* top section -> { top table and title } */}
            <div className='relative w-full h-[26.5rem] overflow-hidden -bottom-[19rem] -mt-[35rem] z-10'>
                {/* table top*/}

                {[...Array(13)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute mx-[calc(50%-50rem)]`}
                        style={{ left: `-${60 - i * 5}rem`, top: `${30 + i * 2.33}rem` }}
                    >
                        <div className='flex flex-col gap-[86px] w-full items-center'>
                            <div className="w-[1270px] h-[2px] origin-top-left -rotate-[25deg] opacity-5 bg-black border border-black" />
                        </div>
                    </div>
                ))}

                <div className={`absolute -left-[34rem] -top-[25rem] mx-[calc(50%-50rem)]`}>
                    <div className='flex flex-col gap-[86px] w-full items-center'>
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[2000px] h-[2px] origin-top-left rotate-[25deg] opacity-5 bg-black border border-black" />
                    </div>
                </div>

                {/* title */}
                <div className='absolute top-[20rem] inset-x-0 w-full inline-flex items-center justify-center '>
                    <div className="text-center text-Neutral-500 text-3xl font-bold">
                        {t("how_to_work_aimoonhub")}
                    </div>
                </div>
            </div>

            {/* bottom section -> { content and bottom table } */}
            <div className='relative w-full h-[73rem] overflow-hidden -bottom-[19rem]'>

                {/* content */}

                <div className='absolute top-0  mx-[calc(50%-50rem)] width-theme'>

                    <div className='flex flex-row'>
                        <div className='basis-5/12 flex flex-col gap-[262px] pr-[22rem]'>
                            <StepBox />
                            <StepBox />
                        </div>
                        <div className='w-[8rem] inline-flex justify-start bg-lime-200'>sad</div>
                        <div className='basis-5/12 flex flex-col mt-[15rem] gap-[262px]'>
                            <StepBox />
                            <StepBox />
                        </div>
                    </div>
                </div>

                {/* bottom table */}

                <div className='absolute top-[27rem] right-0 mx-[calc(50%-50rem)]'>
                    <div className='flex flex-col gap-[86px]'>
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                        <div className="w-[1700px] h-[2px] origin-top-right -rotate-[25deg] opacity-5 bg-black border border-black" />
                    </div>
                </div>

                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`absolute mx-[calc(50%-50rem)]`}
                        style={{ right: `${50 - i * 5}rem`, bottom: `${-15 + i * 2.33}rem` }}
                    >
                        <div className='flex flex-col gap-[86px] w-full items-center'>
                            <div className="w-[710px] h-[2px] origin-top-right rotate-[25deg] opacity-5 bg-black border border-black" />
                        </div>
                    </div>
                ))}

            </div>
        </>

    )
}

export default HowToUse
