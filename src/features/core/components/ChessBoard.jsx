import React, { useEffect, useRef, useState } from 'react';

// Functions

import { cn } from '../../../../utils/lib/cn';

const ChessBoard = ({ className, bordClassName, mosaicClassName, ...props }) => {
    // refs and consts
    const cellsRef = useRef([]);

    const [cells, setCells] = useState([]);

    // Configurable variables
    const TOTAL_COLUMNS = props?.totalCollumns;
    const TOTAL_ROWS = props?.toatalRows;
    const GRAVITY_MAX_DISTANCE = 160; // px
    const GRAVITY_MAX_TRANSLATE = 25; // px



    // functions

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

    useEffect(() => {
        const element = document.getElementById("bord");
        if (element) {

            const cols = Array.from(element.classList).find(cls => cls.startsWith("grid-cols-"));
            const rows = Array.from(element.classList).find(cls => cls.startsWith("grid-rows-"));

            if (cols && rows) {
                let col = cols.split("-").pop();
                let row = rows.split("-").pop();
                col = parseInt(col, 10);
                row = parseInt(row, 10);

                // Generate cells
                const totalCells = col * row;
                setCells(Array.from({ length: totalCells }, (_, i) => i));
                setTimeout(() => {
                    element.classList.add(props?.backgroundColor)
                }, 500)

            }
        }


    }, [])

    return (
        <>

            <div className='flex flex-col w-screen h-full items-center justify-center'>
                <div className='relative w-full inline-flex justify-center items-center'>
                    <div className={cn("absolute top-[0] z-10", className)}>
                        <div
                            id="bord"
                            className={cn("grid perspective-[800px] relative ", bordClassName)}

                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            {cells.map((_, index) => (
                                <div
                                    key={index}
                                    ref={(el) => (cellsRef.current[index] = el)}

                                    className="cell opacity-100 transition-opacity duration-400 ease-out"
                                >
                                    <div className={cn("relative w-full h-full border bg-white transition-transform duration-700 ease-out will-change-transform", mosaicClassName)} />
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
