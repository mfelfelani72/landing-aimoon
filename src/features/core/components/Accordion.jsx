import React, { useState } from 'react'

// Components

import { Image } from './Image.jsx';

// Svg

import arrow from "../../../../assets/icons/svg/icon-light-arrow-down-2.svg";

const Accordion = ({ className, children, ...props }) => {
    // states
    const [isOpen, setIsOpen] = useState(props?.open ? props?.open : false);

    // functions
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div
                onClick={toggleOpen} className="flex flex-row w-full py-4 items-center items px-4 justify-between cursor-pointer bg-background-light rounded-2xl">

                <div className="flex flex-col w-full">
                    <div className='flex flex-row justify-between items-center'>
                        <div className='flex flex-row gap-2'>
                            <Image src={props?.icon} alt={props?.id + "-icon"} className={"w-6 h-6"} />
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
        </>
    )
}

export default Accordion
