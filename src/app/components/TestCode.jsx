import React, { useEffect, useRef } from 'react';


const TestCode = () => {

  const boardRef = useRef(null);
  const cellsRef = useRef([]);

  // Configurable variables
  const BOARD_SIZE = 600; // px
  const BOARD_ROTATION = 45; // deg
  const TOTAL_COLUMNS = 8;
  const TOTAL_ROWS = 8;
  const GRAVITY_MAX_DISTANCE = 150; // px
  const GRAVITY_MAX_TRANSLATE = 20; // px
  const SCROLL_DELAY_MULT = 30; // ms

    // Generate cells
    const totalCells = TOTAL_COLUMNS * TOTAL_ROWS;
    const cells = Array.from({ length: totalCells }, (_, i) => i);

  return (
    <>
      <div className='flex flex-col w-full h-full items-center justify-center'>
        <div className='width-theme h-screen relative'>
          <div className='absolute top-0 left-0'>
            <div
              ref={boardRef}
              className="grid grid-cols-8 grid-rows-8 relative"
              style={{
                width: `${BOARD_SIZE}px`,
                height: `${BOARD_SIZE}px`,
                transform: `rotate(${BOARD_ROTATION}deg)`,
                perspective: '800px',
              }}
              // onMouseMove={handleMouseMove}
              // onMouseLeave={handleMouseLeave}
            >
              {cells.map((_, index) => (
                <div
                  key={index}
                  ref={(el) => (cellsRef.current[index] = el)}
                  // className="cell opacity-0 transition-opacity duration-400 ease-out"
                  className="cell opacity-100 transition-opacity duration-400 ease-out"
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