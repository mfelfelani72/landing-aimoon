import React from 'react'

export const CloseSquare = ({ ...props }) => {
    return (
        <>
            <svg width={props?.width} height={props?.height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.3941 7.59473L7.60211 12.3867" stroke={props?.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12.3999 12.3928L7.59991 7.59277" stroke={props?.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.75 10C0.75 16.937 3.063 19.25 10 19.25C16.937 19.25 19.25 16.937 19.25 10C19.25 3.063 16.937 0.75 10 0.75C3.063 0.75 0.75 3.063 0.75 10Z" stroke={props?.color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </>
    )
}

