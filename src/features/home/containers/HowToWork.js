import React from 'react'
import { useTranslation } from "react-i18next";

const HowToUse = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
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


                {/* table top*/}

                {/* title */}
                <div className='absolute top-[20rem] inset-x-0 w-full inline-flex items-center justify-center '>
                    <div className="text-center text-Neutral-500 text-3xl font-bold">
                        {t("how_to_work_aimoonhub")}
                    </div>
                </div>
            </div>
            <div className='relative w-full h-[50rem] overflow-hidden -bottom-[19rem]'>

                {/* table bottom*/}

                <div className='absolute top-[4rem] right-0 mx-[calc(50%-50rem)]'>
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
                {/* table bottom*/}

            </div>
        </>

    )
}

export default HowToUse
