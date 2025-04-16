import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';

const InfiniteLoopSlider = () => {
  const slides = [
    { id: 1, color: 'bg-red-500' },
    { id: 2, color: 'bg-blue-500' },
    { id: 3, color: 'bg-green-500' },
    { id: 4, color: 'bg-yellow-500' },
    { id: 5, color: 'bg-purple-500' },
    { id: 6, color: 'bg-pink-500' },
    { id: 7, color: 'bg-indigo-500' },
    { id: 8, color: 'bg-teal-500' },
    { id: 9, color: 'bg-orange-500' }
  ];

  const [currentPosition, setCurrentPosition] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef(null);
  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  // Initialize and handle resize
  useLayoutEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        setSlideWidth(containerWidth / 2);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Auto-play logic
  useEffect(() => {
    if (isAutoPlaying) {
      animationRef.current = setInterval(() => {
        setCurrentPosition(prev => (prev + 1) % slides.length);
      }, 3000);
    }
    return () => clearInterval(animationRef.current);
  }, [isAutoPlaying, slides.length]);

  // Handle infinite loop seamlessly
  const handleTransitionEnd = () => {
  
    if (currentPosition >= slides.length) {
    
      setCurrentPosition(3);
    }
    else if (currentPosition < 0) {
      setCurrentPosition(slides.length - 1);
    }
    else if (currentPosition == 6) {
      setTimeout(()=>{

        setCurrentPosition(0);
      },2000)
    }

  };

  const goNext = () => {
    setIsAutoPlaying(false);
    setCurrentPosition(prev => (prev + 1) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  const goPrev = () => {
    setIsAutoPlaying(false);
    setCurrentPosition(prev => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAutoPlaying(true), 5000);
  };

  // Calculate visible slides (3 at a time)
  const getVisibleSlides = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentPosition + i) % slides.length;
      visible.push(slides[index]);
    }
    return visible;
  };

  return (
    <div
      className="mt-[5rem] max-w-4xl mx-auto p-4 relative overflow-hidden"
      ref={containerRef}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="relative h-64 overflow-hidden">
        <div
          ref={sliderRef}
          className={`flex absolute h-full transition-transform duration-500 ease-in-out`}
          style={{
            transform: `translateX(${currentPosition * slideWidth}px)`,
            width: `${slides.length * slideWidth}px`
          }}
          onTransitionEnd={handleTransitionEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={`${slide.id}-${index}`}
              className={`${slide.color} h-full flex-shrink-0 flex items-center justify-center text-white text-2xl font-bold`}
              style={{ width: `${slideWidth}px` }}
            >
              اسلاید {slide.id}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-6 gap-8">
        <button
          onClick={goPrev}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <span className="text-gray-600">
          نمایش اسلایدهای {(currentPosition % slides.length) + 1} تا
          {(currentPosition % slides.length) + 3 > slides.length ?
            (currentPosition % slides.length) + 3 - slides.length :
            (currentPosition % slides.length) + 3}
        </span>

        <button
          onClick={goNext}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 p-3 rounded-full shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default InfiniteLoopSlider;