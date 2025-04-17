import React, { Children, useState, useEffect, useRef, useLayoutEffect } from 'react';

// Functions
import { cn } from "../../../../utils/lib/cn"

const Slider = ({ className, children, ...props }) => {

    // constants and states
    const visibleCount = props?.visibleCount || 3;
    const delay = props?.delay || 3000;
    const autoPlay = props?.autoPlay === "false" ? "false" : "true";

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    // Used to temporarily disable animation when doing the instant reset.
    const [transitionEnabled, setTransitionEnabled] = useState(true);

    const slides = Children.toArray(children);
    const extendedSlides = [...slides, ...slides];

    // refs
    const containerRef = useRef(null);
    const autoPlayRef = useRef(null);

    // functions

    // Calculate the width of each slide.
    useLayoutEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                setSlideWidth(containerWidth / visibleCount);
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, [visibleCount]);

    // Move forward one slide.
    const goLeft = (param = "") => {

        props?.setButton("left");
        setCurrentIndex(prev => prev - 1);
        if (currentIndex === 0) {
            setTransitionEnabled(false);
            setCurrentIndex(slides.length);
            props?.setCurrent(currentIndex);
            setTimeout(() => {
                setTransitionEnabled(true);
                // setCurrentIndex(slides.length - 1);
                props?.setCurrent(currentIndex);
            }, 0);
        }
        console.log(currentIndex)
        // props?.setButton("left");
        // if (currentIndex >= slides.length) {
        //     console.log("=" + currentIndex)
        //     props?.setCurrent(2);
        //     if (param === "autoPlaying") {
        //         setTransitionEnabled(false);
        //         setCurrentIndex(currentIndex - slides.length - 1);
        //         setTimeout(() => {
        //             setTransitionEnabled(true);
        //         }, delay / 2);
        //         // setTimeout(() => {
        //         //     // setCurrentIndex(prev => prev + 1);
        //         // }, 0)
        //     } else {
        //         props?.setAutoPlay("false");
        //         setTransitionEnabled(false);
        //         setCurrentIndex(currentIndex - slides.length - 1);
        //         setTimeout(() => {
        //             setTransitionEnabled(true);
        //             setCurrentIndex(prev => prev + 1);
        //         }, 0);
        //     }
        // }
        // // else {
        // //     props?.setCurrent(currentIndex+2);
        // //     // props?.setCurrent(prev => prev + 1);
        // // }
        // setCurrentIndex(prev => prev + 1);
        // console.log("aa-" + currentIndex)
        // console.log(slides.length)
        // if (currentIndex + 2 >= slides.length)
        //     props?.setCurrent(0);
        // props?.setCurrent(currentIndex + 2);

        // // if (props?.current >= slides.length - 1) {
        // //     props?.setCurrent(0);
        // // }

    };

    const goRight = () => {
        props?.setButton("right");
        props?.setAutoPlay("false");
        if (currentIndex === 0) {
            setTransitionEnabled(false);
            setCurrentIndex(slides.length);
            props?.setCurrent(currentIndex);
            setTimeout(() => {
                setTransitionEnabled(true);
                setCurrentIndex(slides.length - 1);
                props?.setCurrent(currentIndex);
            }, 0);
        } else {
            setCurrentIndex(prev => prev - 1);
            props?.setCurrent(currentIndex);
        }
    };

    // Auto-play: move forward every 3 seconds.
    useEffect(() => {
        if (autoPlay === "true") {
            autoPlayRef.current = setInterval(() => {
                goLeft("autoPlaying");
            }, delay);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [props?.autoPlay, currentIndex, props?.setMouseEnter, props?.setMouseLeave]);

    // Calculate the slider container style.
    const sliderStyle = {
        transform: `translateX(-${currentIndex * slideWidth}px)`,
        width: `${extendedSlides.length * slideWidth}px`,
        transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
    };

    return (
        <>
            <div
                {...props}
                className={cn("left-to-right mx-auto p-4 relative overflow-hidden", className)}
                ref={containerRef}
                onMouseEnter={() => {
                    props?.setAutoPlay("false")
                    props?.setMouseEnter("true");
                    props?.setMouseLeave("false");
                }}
                onMouseLeave={() => {
                    if (autoPlay !== "false") {
                        props?.setAutoPlay("true");
                    }
                    else if (props?.defaultAutoPaly === "true") {
                        props?.setAutoPlay("true");
                    }
                    props?.setMouseEnter("false");
                    props?.setMouseLeave("true");
                }}
            >
                <div className="relative h-full overflow-hidden">
                    <div
                        style={sliderStyle}
                        className="flex absolute h-full"
                    >
                        {extendedSlides.map((slide, index) => (
                            <div
                                key={index}
                                id={index}
                                className="h-full flex-shrink-0 flex items-start justify-center slider-item transition-all duration-500"
                                style={{ width: `${slideWidth}px` }}
                            >
                                {slide}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional navigation buttons */}
                <div className="absolute inset-x-0 bottom-0 inline-flex justify-center items-center mb-6 gap-8">
                    <button
                        onClick={() => {
                            props?.setAutoPlay("false");
                            goLeft();
                        }}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={() => {
                            props?.setAutoPlay("false");
                            goRight();
                        }}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md cursor-pointer"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Slider;
