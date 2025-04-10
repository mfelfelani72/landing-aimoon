import React, { useEffect, useRef } from 'react';

import vector_1 from "../../../assets/images/vector/vector-why-aimoonhub.svg"

import { Image } from "../../features/core/components/Image.jsx"


const TestCode = () => {

  const boardRef = useRef(null);
  const cellsRef = useRef([]);

  // Configurable variables
  const BOARD_SIZE = 1200; // px
  const BOARD_ROTATION = 25; // deg
  const TOTAL_COLUMNS = 16;
  const TOTAL_ROWS = 16;
  const GRAVITY_MAX_DISTANCE = 160; // px
  const GRAVITY_MAX_TRANSLATE = 25; // px
  const SCROLL_DELAY_MULT = 30; // ms

  // Generate cells
  const totalCells = TOTAL_COLUMNS * TOTAL_ROWS;
  const cells = Array.from({ length: totalCells }, (_, i) => i);

  // Scroll animation with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.01,
    };


    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {

          console.log(index)
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
            observer.unobserve(entry.target);

            // بررسی آیا این آخرین سلول است
            if (index === 123) {
              document.getElementById("table").classList.add("bg-[#f2f2f3]");
              console.log('آخرین انیمیشن سلول اجرا شد');
            }
          }, index * SCROLL_DELAY_MULT);
        }
      });
    }, observerOptions);

    cellsRef.current.forEach((cell, index) => {
      if (cell) observer.observe(cell);
    });

    return () => {
      cellsRef.current.forEach(cell => {
        if (cell) observer.unobserve(cell);
      });
    };
  }, []);

  // Gravity effect on hover
  const handleMouseMove = (e) => {

    cellsRef.current.forEach((cell, index) => {
      if (!cell) return;
      const inner = cell.firstChild;
      const rect = cell.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);


      const strength = Math.max(0, 1 - distance / GRAVITY_MAX_DISTANCE);
      const translateY = strength * -GRAVITY_MAX_TRANSLATE;
      const translateX = strength * -GRAVITY_MAX_TRANSLATE;

      inner.style.transform = `translateY(${translateY}px) translateX(${translateX}px)`;
      inner.style.zIndex = parseInt(strength * 1000);

    });
  };

  const handleMouseLeave = () => {
    cellsRef.current.forEach(cell => {
      if (!cell) return;
      const inner = cell.firstChild;
      inner.style.transform = '';
    });
  };

  return (
    <>
      <div className="fixed inset-y-0 left-0  w-[calc(50%-50rem)] bg-white z-[100]"></div>
      <div className="fixed inset-y-0 right-0 w-[calc(50%-50rem)] bg-white z-[100]"></div>

      <div className='flex flex-col w-full h-full items-center justify-center'>
        <div className='w-full relative overflow-x-clip h-[60rem] overflow-y-clip'>

          <div className='absolute top-0 inset-x-0 z-20 pointer-events-none'>
            <Image src={vector_1} alt={"vector"} />
          </div>

          <div style={{ transform: `rotate(${BOARD_ROTATION}deg) skewX(-25deg)` }} id={"table"} className='absolute top-[32rem] -left-[25rem] z-10'>
            <div
              ref={boardRef}
              className={`grid grid-cols-${TOTAL_COLUMNS} grid-rows-${TOTAL_ROWS} relative`}
              style={{
                width: `${BOARD_SIZE}px`,
                height: `${BOARD_SIZE}px`,
                perspective: '800px',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {cells.map((_, index) => (
                <div
                  key={index}
                  ref={(el) => (cellsRef.current[index] = el)}

                  className="cell opacity-0 transition-opacity duration-400 ease-out"
                >
                  <div className="relative w-full h-full border border-Neutral-100/50  bg-white transition-transform duration-700 ease-out will-change-transform" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );

};

export default TestCode;