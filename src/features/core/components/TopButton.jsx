import React from 'react'

// Functions

import { cn } from "../../../../utils/lib/cn"

const TopButton = ({ children, className, ...props }) => {
    return (
        <>
            <div {...props} className={cn("w-6 h-6 bg-Neutral-500 rounded-2xl  inline-flex justify-center items-center overflow-hidden cursor-pointer", className)}>
                {children}
            </div>
        </>
    )
}

export default TopButton
