import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const Slider = ({ ...props }) => {

    //    constants and states
    const slidesData = props?.slidesData;
    const visibleCount = props?.visibleCount || 3;
    const delay = props?.delay || 3000;
    const autoPlay = props?.autoPlay === false ? false : true;

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    // Used to temporarily disable animation when doing the instant reset.
    const [transitionEnabled, setTransitionEnabled] = useState(true);
    const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

    // Create two copies of the slides so the transition is seamless.
    const extendedSlides = slidesData.concat(slidesData);

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
        if (currentIndex >= slidesData.length) {

            if (param == "autoPlaying") {
                setTransitionEnabled(false);
                setCurrentIndex(currentIndex - slidesData.length - 1);
                setTimeout(() => {
                    setTransitionEnabled(true);
                }, 500);
            }
            else {
                setTransitionEnabled(false);
                setCurrentIndex(currentIndex - slidesData.length - 1);
                setTimeout(() => {
                    setTransitionEnabled(true);
                    setCurrentIndex(prev => prev + 1);
                }, 0);
            }
        }
        setCurrentIndex(prev => prev + 1);
    };

    const goRight = () => {
        if (currentIndex === 0) {
            setTransitionEnabled(false);
            setCurrentIndex(slidesData.length);
            setTimeout(() => {
                setTransitionEnabled(true);
                setCurrentIndex(slidesData.length - 1);
            }, 0);
        } else {
            setCurrentIndex(prev => prev - 1);
        }

    };
    // Auto-play: move forward every 3 seconds.
    useEffect(() => {
        if (isAutoPlaying) {
            autoPlayRef.current = setInterval(() => {
                goLeft("autoPlaying");
            }, delay);
        }
        return () => clearInterval(autoPlayRef.current);
    }, [isAutoPlaying, currentIndex]);

    // Calculate the slider container style.
    const sliderStyle = {
        transform: `translateX(-${currentIndex * slideWidth}px)`,
        width: `${extendedSlides.length * slideWidth}px`,
        transition: transitionEnabled ? 'transform 0.5s ease-in-out' : 'none'
    };

    return (
        <>
            <div
                className="left-to-right mt-20 max-w-4xl mx-auto p-4 relative overflow-hidden"
                ref={containerRef}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                <div className="relative h-64 overflow-hidden">
                    <div
                        style={sliderStyle}
                        className="flex absolute h-full"

                    >
                        {extendedSlides.map((slide, index) => (
                            <div
                                key={index}
                                className={`${slide.color} h-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold`}
                                style={{ width: `${slideWidth}px` }}
                            >
                                {slide.content}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Optional navigation buttons */}
                <div className="flex justify-center items-center mt-6 gap-8">
                    <button
                        onClick={() => {
                            setIsAutoPlaying(false);
                            goLeft();
                            setTimeout(() => setIsAutoPlaying(true), 5000);
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
                            setIsAutoPlaying(false);
                            goRight();
                            setTimeout(() => setIsAutoPlaying(true), 5000);
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

export default Slider
