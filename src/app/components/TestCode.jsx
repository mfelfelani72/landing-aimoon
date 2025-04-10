import React, { useEffect, useRef } from 'react';

import vector_1 from "../../../assets/images/vector/vector-why-aimoonhub.svg"

import { Image } from "../../features/core/components/Image.jsx"


const TestCode = () => {

  const boardRef = useRef(null);
  const cellsRef = useRef([]);

  // Configurable variables
  const BOARD_SIZE = 600; // px
  const BOARD_ROTATION = 25; // deg
  const TOTAL_COLUMNS = 8;
  const TOTAL_ROWS = 8;
  const GRAVITY_MAX_DISTANCE = 150; // px
  const GRAVITY_MAX_TRANSLATE = 20; // px
  const SCROLL_DELAY_MULT = 30; // ms

  // Generate cells
  const totalCells = TOTAL_COLUMNS * TOTAL_ROWS;
  const cells = Array.from({ length: totalCells }, (_, i) => i);

  // Scroll animation with IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('opacity-100');
          }, index * SCROLL_DELAY_MULT);
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cellsRef.current.forEach(cell => {
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

      inner.style.transform = `translateY(${translateY}px)`;
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
        <div className='width-theme h-screen relative'>

          <div className='absolute top-0 inset-x-0 z-20'>
            <Image src={vector_1} alt={"vector"} />
          </div>

          <div className='absolute top-[10rem] left-0 z-10'>
            <div
              ref={boardRef}
              className="grid grid-cols-8 grid-rows-8 relative "
              style={{
                width: `${BOARD_SIZE}px`,
                height: `${BOARD_SIZE}px`,
                transform: `rotate(${BOARD_ROTATION}deg) skewX(-25deg)`,
                perspective: '800px',
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {cells.map((_, index) => (
                <div
                  key={index}
                  ref={(el) => (cellsRef.current[index] = el)}
                  // className="cell opacity-0 transition-opacity duration-400 ease-out"
                  className="cell opacity-20 transition-opacity duration-400 ease-out "
                >
                  <div className="w-full h-full border border-black opacity-50 bg-white transition-transform duration-200 ease-out will-change-transform" />
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