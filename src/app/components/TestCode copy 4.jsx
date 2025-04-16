
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const ForwardInfiniteSlider = () => {
  // Dynamic slide data – replace or extend as needed.
  const slidesData = [
    { id: 1, color: 'bg-red-500', content: 'Slide 1' },
    { id: 2, color: 'bg-blue-500', content: 'Slide 2' },
    { id: 3, color: 'bg-green-500', content: 'Slide 3' },
    // { id: 4, color: 'bg-yellow-500', content: 'Slide 4' },
    // { id: 5, color: 'bg-purple-500', content: 'Slide 5' }
  ];

  // How many slides are visible at a time.
  const visibleCount = 3;
  // Create two copies of the slides so the transition is seamless.
  const extendedSlides = slidesData.concat(slidesData);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  // Used to temporarily disable animation when doing the instant reset.
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const containerRef = useRef(null);
  const autoPlayRef = useRef(null);

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

  // Auto-play: move forward every 3 seconds.
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(autoPlayRef.current);
  }, [isAutoPlaying, currentIndex]);

  // Move forward one slide.
  const nextSlide = () => {
    setCurrentIndex(prev => prev + 1);
  };

  // (Optionally) a backward function, though you can remove this if you want only forward rolling.
  const goPrev = () => {
    // To support backward navigation without a jump, you could implement a similar technique:
    // but here we just allow forward movement.
    setCurrentIndex(prev => (prev - 1 + extendedSlides.length) % extendedSlides.length);
  };

  // When the CSS transition ends, check if we need an instant reset.
  const handleTransitionEnd = () => {
    // When we've reached the end of the original slides,
    // reset (without animation) to the equivalent slide in the first copy.
    if (currentIndex >= slidesData.length) {
      console.log('asldkfjasfjejfi');

      setTransitionEnabled(false);
      setCurrentIndex(currentIndex - slidesData.length-1);
      // Allow the reflow to occur, then re-enable transition.
      setTimeout(() => {
        setTransitionEnabled(true);
      }, 5000);
    }
  };

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
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedSlides.map((slide, index) => (
              <div
                key={`${slide.id}-${index}`}
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
              goPrev();
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md"
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
              nextSlide();
              setTimeout(() => setIsAutoPlaying(true), 5000);
            }}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md"
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
  );
};

export default ForwardInfiniteSlider;