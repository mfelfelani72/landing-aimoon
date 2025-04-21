import React from 'react'

// Components

import { ImageLazy } from '../../core/components/Image.jsx'

// Svg

import coin from "../../../../assets/images/png/customer.png"

const CoinList = () => {
    return (
        <>
            <div className='flex flex-row gap-2 items-center'>
                <ImageLazy src={coin} alt={"coin"} className={"w-8 h-8 rounded-full"} />
                <div className='flex flex-col w-full gap-2 justify-center'>
                    <div className="text-white text-sm font-medium  leading-none tracking-wide">Tether USDT</div>

                    <div className='flex flex-row w-full justify-between'>
                        <div className="text-Neutral-300 text-[8px] font-normal">قیمت لحظه‌ای</div>
                        <div className="text-Neutral-300 text-xs font-normal leading-tight tracking-tight">41,623,892,937</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinList
