import React, { useEffect, useRef, useState } from 'react'

// Components

import { Image, ImageLazy } from '../../core/components/Image.jsx';

// Functions

import { getData } from "../../../../utils/services/api/getData.js";
import { arraysEqual } from "../../../../utils/lib/arraysEqual.js";
import { cashImages } from "../../../../utils/lib/cashImages.js";
import { cn } from '../../../../utils/lib/cn.js';

// Constants

import { SYMBOLS_NAMES } from "../utils/constants/EndPoints.js";

// Svg

import arrow_down from "../../../../assets/icons/svg/icon-red-arrow-down.svg"
import arrow_up from "../../../../assets/icons/svg/icon-green-arrow-up.svg"

const MarqueeSymbols = ({ className, ...props }) => {

    // const and states
    const [statusMarquee, setStatusMarquee] = useState("pause");
    const [statusMarqueeFirst, setStatusMarqueeFirst] = useState(true);
    const [classNameMarquee, setClassNameMarquee] = useState("");
    const [classNameMarquee2, setClassNameMarquee2] = useState("");
    const [symbols, setSymbols] = useState([]);
    const [priority, setPriority] = useState(2);
    const [cashedImages, setCashedImages] = useState([]);

    let tempImages;

    // refs
    const marqueeRef = useRef(null);
    const marquee2Ref = useRef(null);

    // functions

    const setPlayOrPauseMarquee = () => {
        if (statusMarquee === "pause") {
            setStatusMarquee("play");
            marqueeRef.current.style.animationPlayState = "running";
            marquee2Ref.current.style.animationPlayState = "running";
            if (statusMarqueeFirst) {
                setClassNameMarquee(" animate-marquee");
                setClassNameMarquee2(" animate-marquee2");
                setStatusMarqueeFirst(false);
            }
        } else {
            setStatusMarquee("pause");
            marqueeRef.current.style.animationPlayState = "paused";
            marquee2Ref.current.style.animationPlayState = "paused";
        }
    }
    const getSymbols = async () => {
        const parameter = {
            priority: priority,
        };

        await getData(SYMBOLS_NAMES, parameter, "Header").then((response) => {
            if (response) {
                if ((response.status == 200) & response.data.return) {
                    // console.log(response.data.data);
                    setSymbols(response.data.data);

                    tempImages = response.data.data.map((item) => item.logo);
                    if (
                        !arraysEqual(
                            tempImages,
                            response.data.data.map((item) => item.logo),
                            "data-header-images"

                        ) ||
                        !localStorage.getItem("data-header-images")
                    ) {
                        cashImages(
                            "data-header-images",
                            response.data.data.map((item) => item.name),
                            response.data.data.map((item) => item.logo)
                        );
                    }
                } else {
                    console.log({
                        message: "Maybe you mistake !!!!, this route is: --> Header <--",
                        error: response.data.message,
                    });
                }
            }
        });
    };

    // functions

    const getCashedImagesLocal = () => {
        const cashedImagesLocal = localStorage.getItem("data-header-images");

        if (cashedImagesLocal) setCashedImages(JSON.parse(cashedImagesLocal));
    }

    useEffect(() => {
        if (symbols.length === 0) {
            getSymbols();

            getCashedImagesLocal();
        }
        setInterval(() => {
            getSymbols();

            getCashedImagesLocal();
        }, 25000);

    }, []);
    return (
        <>
            {symbols.length !== 0 &&
                <div className={cn("left-to-right w-full shadow-md h-[2.75rem] inline-flex items-center overflow-hidden cursor-pointer", className)}>
                    <div className="flex flex-row items-center select-none">

                        <div
                            onMouseEnter={() => setPlayOrPauseMarquee()}
                            onMouseLeave={() => setPlayOrPauseMarquee()}
                            className="relative flex overflow-hidden"
                        >
                            <div
                                ref={marqueeRef}
                                className={
                                    "flex flex-row" + classNameMarquee + " whitespace-nowrap"
                                }
                            >
                                {symbols.map(
                                    (row, index) =>
                                        row?.latest_price_info.formatted_price && (
                                            <span
                                                key={index}
                                                className="flex px-2 mx-2 py-5 h-[1.5rem] items-center self-center pr-8 bg-[#11101A] rounded-2xl"
                                            >
                                                <ImageLazy
                                                    className="h-5 w-5 border border-color-theme rounded-full"
                                                    alt={row?.name}
                                                    // effect="blur"
                                                    src={
                                                        cashedImages.length !== 0 &&
                                                            cashedImages?.map((item) =>
                                                                item.hasOwnProperty(`${row?.name}`)
                                                            )[index]
                                                            ? cashedImages?.filter(
                                                                (item) => item[`${row?.name}`]
                                                            )[0][`${row?.name}`]?.base64data
                                                            : row?.logo
                                                    }
                                                />

                                                <a
                                                    onClick={(event) => goToSymbolDashboard(navigate, event, row?.name, nav)}
                                                    className="hover:text-color-theme dark:hover:text-D-color-theme text-[0.8rem] mx-1 mr-4"
                                                >
                                                    <span className="relative text-[0.75rem] font-bold px-1 inline-flex">
                                                        <span className="pt-1">{row?.name}</span>{" "}
                                                        {row?.latest_price_info.change_rate > 0 ? <Image src={arrow_up} alt="arrow_up" className={"w-6 h-6 mx-2"} /> : <Image src={arrow_down} alt="arrow_down" className={"w-6 h-6 mx-2"} />}

                                                    </span>
                                                </a>
                                                <span className={`text-[0.75rem]`}>
                                                    {row?.latest_price_info.formatted_price}
                                                </span>

                                                <span className={`mx-2 ${row?.latest_price_info.change_rate > 0 ? "text-Success-500" : "text-Error-500"}`}>{row?.latest_price_info.change_rate}</span>

                                                <span className='border rounded-lg px-1 border-Neutral-400 mx-1'>
                                                    <span className="relative text-[0.75rem] font-bold text-Neutral-400">
                                                        Mood Day
                                                    </span>

                                                    <span className={`mx-2 ${row?.change_stat?.damp_5_change?.percent_change_24h > 0 ? "text-Success-500" : "text-Error-500"}`}>{row?.change_stat?.damp_5_change?.percent_change_24h}</span>
                                                </span>

                                                <span className='border rounded-lg px-1 border-Neutral-400'>
                                                    <span className="relative text-[0.75rem] font-bold text-Neutral-400">
                                                        Mood week
                                                    </span>
                                                    <span className={`mx-2 ${row?.change_stat?.damp_5_change?.percent_change_7d > 0 ? "text-Success-500" : "text-Error-500"}`}>{row?.change_stat?.damp_5_change?.percent_change_7d}</span>
                                                </span>
                                            </span>
                                        )
                                )}
                            </div>
                            <div
                                ref={marquee2Ref}
                                className={
                                    "absolute top-0 " + classNameMarquee2 + " whitespace-nowrap"
                                }
                            >
                                <div className="flex flex-row ">
                                    {symbols.map(
                                        (row, index2) =>
                                            row?.latest_price_info.formatted_price && (
                                                <span
                                                    key={index2}
                                                    className="flex py-5 px-2 mx-2 h-[1.5rem] items-center self-center pr-8 bg-[#11101A] rounded-2xl"
                                                >
                                                    <ImageLazy
                                                        className="h-5 w-5 border border-color-theme rounded-full"
                                                        alt={row?.name}
                                                        src={
                                                            cashedImages.length !== 0 &&
                                                                cashedImages?.map((item) =>
                                                                    item.hasOwnProperty(`${row?.name}`)
                                                                )[index2]
                                                                ? cashedImages?.filter(
                                                                    (item) => item[`${row?.name}`]
                                                                )[0][`${row?.name}`]?.base64data
                                                                : row?.logo
                                                        }
                                                    />

                                                    <a
                                                        onClick={(event) => goToSymbolDashboard(navigate, event, row?.name, nav)}
                                                        className="hover:text-color-theme dark:hover:text-D-color-theme text-[0.8rem] mx-1 mr-4"
                                                    >
                                                        <span className="relative text-[0.75rem] font-bold px-1 inline-flex">
                                                            <span className="pt-1">{row?.name}</span>{" "}
                                                            {row?.latest_price_info.change_rate > 0 ? <Image src={arrow_up} alt="arrow_up" className={"w-6 h-6 mx-2"} /> : <Image src={arrow_down} alt="arrow_down" className={"w-6 h-6 mx-2"} />}
                                                        </span>
                                                    </a>
                                                    <span className={`text-[0.75rem]`}>
                                                        {row?.latest_price_info.formatted_price}
                                                    </span>

                                                    <span className={`mx-2 ${row?.latest_price_info.change_rate > 0 ? "text-Success-500" : "text-Error-500"}`}>{row?.latest_price_info.change_rate}</span>

                                                    <span className='border rounded-lg px-1 border-Neutral-400 mx-1'>
                                                        <span className="relative text-[0.75rem] font-bold text-Neutral-400">
                                                            Mood Day
                                                        </span>
                                                        <span className={`mx-2 ${row?.change_stat?.damp_5_change?.percent_change_24h > 0 ? "text-Success-500" : "text-Error-500"}`}>{row?.change_stat?.damp_5_change?.percent_change_24h}</span>

                                                    </span>


                                                    <span className='border rounded-lg px-1 border-Neutral-400'>
                                                        <span className="relative text-[0.75rem] font-bold text-Neutral-400">
                                                            Mood week
                                                        </span>
                                                        <span className={`mx-2 ${row?.change_stat?.damp_5_change?.percent_change_7d > 0 ? "text-Success-500" : "text-Error-500"}`}>{row?.change_stat?.damp_5_change?.percent_change_7d}</span>
                                                    </span>
                                                </span>
                                            )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default MarqueeSymbols
