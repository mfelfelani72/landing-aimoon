import React, { useState } from 'react'

// Components

import { Image } from './Image.jsx';

// Svg

import arrow from "../../../../assets/icons/svg/icon-light-arrow-down-2.svg";
import chart from "../../../../assets/icons/svg/chart-nav.svg";

const Accordion = ({ className, ...props }) => {
    // states
    const [isOpen, setIsOpen] = useState(props?.open ? props?.open : false);

    // functions
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div onClick={toggleOpen} className="flex flex-row w-full py-4 items-center items px-4 justify-between cursor-pointer bg-background-light rounded-2xl">

                <div className="flex flex-col w-full">
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Image src={chart} alt="chart" className={"w-6 h-6"} />
                            <div className="text-white text-base font-medium">نمودار ابر کلمات جفت ارز ETH- USDT </div>
                        </div>
                        <Image src={arrow} alt="arrow" className={`w-4 h-4 rotate-[90deg] transition-all duration-300 ${isOpen ? "rotate-0" : "rotate-[90deg]"}`} />

                    </div>

                    <div className={`text-Neutral-300 text-xl font-normal leading-7 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 mt-4' : 'max-h-0 opacity-0'
                        }`}>
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                        asdasdasdasds
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion
