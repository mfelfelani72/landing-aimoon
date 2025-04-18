import React, { useState } from 'react'

// Components

import { Image } from '../../../core/components/Image.jsx'

// Svg

import plus from "../../../../../assets/icons/svg/plus.svg";

const QuestionBox = ({ ...props }) => {

    // states
    const [isOpen, setIsOpen] = useState(false);

    // functions
    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            <div onClick={toggleOpen} className="flex flex-row py-14 border-b-1 border-secondary-50 cursor-pointer">
                <div className="basis-1/12 text-secondary-200 text-5xl font-normal font-spaceGrotesk">
                    {props?.number}
                </div>
                <div className="basis-10/12 flex flex-col">
                    <div className="justify-center text-Neutral-500 text-4xl font-medium leading-10">
                        {props?.question}
                    </div>
                    <div className={`text-Neutral-300 text-xl font-normal leading-7 overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'max-h-44 opacity-100 mt-8' : 'max-h-0 opacity-0'
                        }`}>
                        {props?.answer}
                    </div>
                </div>

                <div className="basis-1/12 flex flex-row justify-end">
                    <Image src={plus} alt="plus" className={`w-12 h-12 transition-all duration-1000 ${isOpen ? "rotate-[765deg]" : "rotate-0"}`} />
                </div>
            </div>
        </>
    )
}

export default QuestionBox
