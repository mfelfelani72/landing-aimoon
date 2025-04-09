import React from 'react'

const HowToUse = () => {
    return (
        <>
            <div className='relative w-full h-[26.5rem] overflow-hidden -bottom-[19rem] -mt-[35rem] z-10'>
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
