import React, { useState } from 'react'

// Components

import { Image } from './Image.jsx';

// Functions

import { cn } from '../../../../utils/lib/cn.js';

// Svg

import arrow from "../../../../assets/icons/svg/icon-light-arrow-down-2.svg";

const Accordion = ({ className, circleLocation, children, ...props }) => {
    // states
    const [isOpen, setIsOpen] = useState(props?.open ? props?.open : false);

    // functions
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div onClick={toggleOpen} className='relative cursor-pointer'>
                <div className={cn("flex flex-row w-full py-4 items-center items px-4 justify-between bg-background-light rounded-2xl", className)}>

                    <div className="flex flex-col w-full">
                        <div className='flex flex-row justify-between items-center'>

                            <div className='flex flex-row gap-2'>
                                {props?.icon && <Image src={props?.icon} alt={props?.id + "-icon"} className={"w-6 h-6"} />}
                                <div className="text-white text-base font-medium">{props?.title} </div>
                            </div>
                            <Image src={arrow} alt="arrow" className={`w-4 h-4 rotate-[90deg] transition-all duration-300 ${isOpen ? "rotate-0" : "rotate-[90deg]"}`} />

                        </div>

                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 mt-4' : 'max-h-0 opacity-0'
                            }`}>
                            {children}
                        </div>
                    </div>
                </div>
                {(circleLocation && isOpen) && <div className='w-full'><div className={cn("absolute transition-all duration-700 ease-in-out w-40 h-40 opacity-50 bg-violet-300/30 rounded-full blur-2xl", circleLocation)} /></div>}

            </div>

        </>
    )
}

export default Accordion
