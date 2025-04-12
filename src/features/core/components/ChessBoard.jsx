import React, { useEffect, useRef } from 'react';

const ChessBoard = () => {

    const boardRef = useRef(null);
    const cellsRef = useRef([]);

    // Configurable variables
    const BOARD_SIZE = 1600; // px
    const BOARD_ROTATION = 25; // deg
    const TOTAL_COLUMNS = 16;
    const TOTAL_ROWS = 16;
    const GRAVITY_MAX_DISTANCE = 160; // px
    const GRAVITY_MAX_TRANSLATE = 25; // px

    // Generate cells
    const totalCells = TOTAL_COLUMNS * TOTAL_ROWS;
    const cells = Array.from({ length: totalCells }, (_, i) => i);

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
            <div className='flex flex-col w-screen h-full items-center justify-center bg-rose-300'>
                <div className='relative w-full inline-flex justify-center items-center'>
                    <div style={{ transform: `rotate(${BOARD_ROTATION}deg) skewX(-25deg)` }} id={"table"} className='absolute top-[0] z-10 bg-[#f2f2f3]'>
                        <div
                            ref={boardRef}
                            className={`grid grid-cols-16 grid-rows-16 relative`}
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

                                    className="cell opacity-100 transition-opacity duration-400 ease-out"
                                >
                                    <div className="relative w-full h-full border border-Neutral-100/50  bg-white transition-transform duration-700 ease-out will-change-transform" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ChessBoard
