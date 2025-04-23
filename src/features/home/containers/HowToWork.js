import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";

// Components

import StepBox from '../components/howToWork/StepBox.jsx';
import ChessBoard from '../../core/components/ChessBoard.jsx';
import { Image } from '../../core/components/Image.jsx';

// Svg

import arrow from "../../../../assets/icons/svg/icon-green-arrow.svg"

const HowToWork = () => {
    // hooks
    const { t } = useTranslation();
    const { ref: inViewRef, inView } = useInView({ threshold: 0.9 });

    // states and consts
    const countStepBoxes = 4;
    const [scrollLocked, setScrollLocked] = useState(false);
    const [stepIndex, setStepIndex] = useState(0);

    // refs
    const sectionRef = useRef(null);
    const scrollCooldownRef = useRef(false);

    // functions
    const setRefs = (node) => {
        sectionRef.current = node;
        inViewRef(node);
    };

    const handleWheel = (e) => {
        if (!scrollLocked || scrollCooldownRef.current) return;

        const SCROLL_THRESHOLD = 50;

        if (e.deltaY > SCROLL_THRESHOLD && stepIndex < countStepBoxes) {
            setStepIndex((prev) => Math.min(prev + 1, countStepBoxes));
            scrollCooldownRef.current = true;
            setTimeout(() => (scrollCooldownRef.current = false), 400); // throttle scroll
        } else if (e.deltaY < -SCROLL_THRESHOLD && stepIndex > 0) {
            setStepIndex((prev) => Math.max(prev - 1, 0));
            scrollCooldownRef.current = true;
            setTimeout(() => (scrollCooldownRef.current = false), 400);
        }
    };

    // Lock/unlock scrolling
    useEffect(() => {
        document.body.style.overflow = scrollLocked ? 'hidden' : 'auto';
    }, [scrollLocked]);

    useEffect(() => {
        if (inView && stepIndex < countStepBoxes) {
            setScrollLocked(true);
        } else if (stepIndex >= countStepBoxes) {
            setScrollLocked(false);
        }
    }, [inView, stepIndex]);



    return (
        <>
            <div className='w-[calc(100%-2rem)]' ref={setRefs} onWheel={handleWheel}>
                {/* top section -> { top table and title } */}
                <div className='relative w-full h-[26.5rem] overflow-hidden -bottom-[19rem] -mt-[35rem] z-10'>
                    {/* table top*/}

                    <div className='absolute -top-[2rem] rtl:-left-[40rem] ltr:-right-[40rem] z-10 opacity-10'>
                        <ChessBoard id={"table-work-top"} className={"rotate-[30deg] skew-x-[-30deg] skew-y-[-5deg]"} bordClassName={`grid-cols-12 grid-rows-12 w-[70rem] h-[70rem]`} backgroundColor={"bg-[#000]"} mosaicClassName={"border-[#000]"} />
                    </div>

                    {/* title */}
                    <div className='absolute top-[20rem] inset-x-0 w-full inline-flex items-center justify-center z-20 pointer-events-none'>
                        <div className="text-center text-Neutral-500 text-3xl font-bold">
                            {t("how_to_work_aimoonhub")}
                        </div>
                    </div>
                </div>

                {/* bottom section -> { content and bottom table } */}
                <div className='relative w-full h-[78rem] overflow-hidden -bottom-[19rem]'>

                    {/* content */}

                    <div className='absolute top-0 mx-[calc(50%-50rem)] width-theme z-20 pointer-events-none'>

                        <div className='flex flex-row'>
                            <div className='basis-5/12 flex flex-col gap-[19rem] rtl:pr-[22rem] ltr:pl-[22rem]'>
                                <motion.div initial={{ opacity: 0, y: 100 }}
                                    animate={0 <= stepIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{ duration: 0.6 }} >
                                    <StepBox className={"mt-[2rem]"} number={1} title={t("step_box_1_title")} >
                                        <div className="w-60 text-Neutral-500 text-base font-medium">{t("step_box_1_text")}</div>
                                    </StepBox>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 100 }}
                                    animate={2 <= stepIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{ duration: 0.6 }} >
                                    <StepBox className={"rtl:mr-[1.5rem] ltr:ml-[1.5rem]"} number={3} title={t("step_box_2_title")} >
                                        <div className='flex flex-col'>
                                            <div className='w-60 text-Neutral-500 text-base'>{t("step_box_2_text")}</div>
                                          
                                            <div className='w-60 text-Neutral-500 text-base inline-flex items-center'><Image src={arrow} alt={"arrow-1"} className={"w-6 h-6"} /><span className='pt-1'>{t("step_box_2_text_check_1")}</span></div>
                                            <div className='w-60 text-Neutral-500 text-base inline-flex items-center'><Image src={arrow} alt={"arrow-2"} className={"w-6 h-6"} /> <span className='pt-1'>{t("step_box_2_text_check_2")}</span></div>
                                            <div className='w-60 text-Neutral-500 text-base inline-flex items-center'><Image src={arrow} alt={"arrow-3"} className={"w-6 h-6"} /> <span className='pt-1'>{t("step_box_2_text_check_3")}</span></div>
                                            <div className='w-60 text-Neutral-500 text-base inline-flex items-center'><Image src={arrow} alt={"arrow-4"} className={"w-6 h-6"} /><span className='pt-1'>{t("step_box_2_text_check_4")}</span></div>
                                        </div>
                                    </StepBox>
                                </motion.div>
                            </div>

                            <div className='w-[8rem] inline-flex justify-start'>
                                <div className='relative'>
                                    <div className="absolute top-0 rtl:right-[7px] ltr:left-[7px] w-[2px] h-[800px] mt-[6rem] opacity-80 bg-gradient-to-b from-secondary-50 via-secondary-200 to-secondary-50 z-10"></div>
                                    <div className={`absolute top-0 inset-x-0 w-4 h-4 mt-[6rem] transition-all duration-700 ${stepIndex === 0 ? "bg-secondary-500" : "bg-secondary-200"}  rounded-full z-20`} />
                                    <div className={`absolute top-0 inset-x-0 w-4 h-4 mt-[20rem] transition-all duration-700 ${stepIndex === 1 ? "bg-secondary-500" : "bg-secondary-200"} rounded-full z-20`} />
                                    <div className={`absolute top-0 inset-x-0 w-4 h-4 mt-[35rem] transition-all duration-700 ${stepIndex === 2 ? "bg-secondary-500" : "bg-secondary-200"} rounded-full z-20`} />
                                    <div className={`absolute top-0 inset-x-0 w-4 h-4 mt-[50rem] transition-all duration-700 ${stepIndex === 3 ? "bg-secondary-500" : "bg-secondary-200"} rounded-full z-20`} />
                                </div>
                            </div>
                            <div className='basis-5/12 flex flex-col mt-[15rem] gap-[262px]'>
                                <motion.div initial={{ opacity: 0, y: 100 }}
                                    animate={1 <= stepIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{ duration: 0.6 }} >
                                    <StepBox className={"mt-[3.5rem]"} number={2} title={t("step_box_3_title")} >
                                        <div className='w-60 text-Neutral-500 text-base'>
                                            {t("step_box_3_text")}
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                        <Image src={arrow} alt={"arrow-5"} className={"w-6 h-6"} /> <span className='pt-1'>{t("step_box_3_text_check_1")}</span>
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center' >
                                        <Image src={arrow} alt={"arrow-6"} className={"w-6 h-6"} /> <span className='pt-1'>{t("step_box_3_text_check_2")}</span>
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                        <Image src={arrow} alt={"arrow-7"} className={"w-6 h-6"} /> <span className='pt-1'>{t("step_box_3_text_check_3")}</span>
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                        <Image src={arrow} alt={"arrow-8"} className={"w-6 h-6"} /> <span className='pt-1'>{t("step_box_3_text_check_4")}</span>
                                        </div>
                                    </StepBox>
                                </motion.div>
                                <motion.div initial={{ opacity: 0, y: 100 }}
                                    animate={3 <= stepIndex ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
                                    transition={{ duration: 0.6 }} >
                                    <StepBox className={"mt-[0.75rem]"} number={4} title={t("step_box_4_title")} >
                                        <div className='w-60 text-Neutral-500 text-base'>
                                        {t("step_box_4_text")}
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                            <Image src={arrow} alt={"arrow-9"} className={"w-6 h-6"} /><span className='pt-1'>{t("step_box_4_text_check_1")}</span>
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                            <Image src={arrow} alt={"arrow-10"} className={"w-6 h-6"} /><span className='pt-1'>{t("step_box_4_text_check_2")}</span>
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                            <Image src={arrow} alt={"arrow-11"} className={"w-6 h-6"} /><span className='pt-1'>{t("step_box_4_text_check_3")}</span>
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                            <Image src={arrow} alt={"arrow-12"} className={"w-6 h-6"} /><span className='pt-1'>{t("step_box_4_text_check_4")}</span>
                                        </div>
                                        <div className='w-60 text-Neutral-500 text-base inline-flex items-center'>
                                            <Image src={arrow} alt={"arrow-13"} className={"w-6 h-6"} /><span className='pt-1'>{t("step_box_4_text_check_5")}</span>
                                        </div>

                                    </StepBox>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* circle */}
                    <div className='absolute top-[15rem] rtl:right-[calc(50%-70rem)] ltr:left-[calc(50%-35rem)] z-30 pointer-events-none'>
                        <div className='relative'>
                            <div className='absolute top-0 right-0 w-[31.25rem] h-[31.25rem] bg-white rounded-full blur-3xl'></div>
                            <div className="absolute top-0 right-0 w-[31.25rem] h-[31.25rem] opacity-20 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(145,_118,_234,_0)_3%,_#9176EA_41%,_rgba(81.79,_66.56,_132,_0)_100%)] rounded-full blur-3xl" />
                        </div>
                    </div>

                    {/* left table */}

                    <div className='absolute -top-[23rem] rtl:-left-[115rem] ltr:-right-[115rem] z-10 opacity-30'>
                        <ChessBoard id={"table-work-left"} className={"rotate-[32deg] skew-x-[-32deg] skew-y-[-5deg]"} bordClassName={`grid-cols-16 grid-rows-16 w-[100rem] h-[100rem]`} backgroundColor={"bg-[#dadada]"} mosaicClassName={"border-[#dadada]"} />
                    </div>

                    {/* bottom table */}

                    <div className='absolute top-[27rem] rtl:-right-[45rem] ltr:-left-[50rem]'>
                        <ChessBoard id={"table-work-bottom"} className={"rotate-[32deg] skew-x-[-32deg] skew-y-[-5deg]"} bordClassName={`grid-cols-16 grid-rows-16 w-[100rem] h-[100rem]`} backgroundColor={"bg-[#dadada]"} mosaicClassName={"border-[#dadada]"} />
                    </div>
                </div>
            </div>
        </>

    )
}

export default HowToWork
