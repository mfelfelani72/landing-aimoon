import React from 'react'
import { useLocation } from 'react-router-dom'

// Components

import TabInfoAnalysisNews from "../components/TabInfoAnalysisNews.jsx"

const CoinDashboard = () => {
    // hooks
    const location = useLocation();

    return (
        <>
            <div className='bg-background pb-[7rem] mt-6'>
                <TabInfoAnalysisNews symbol={location?.state?.symbol} />
            </div>
        </>
    )
}

export default CoinDashboard
