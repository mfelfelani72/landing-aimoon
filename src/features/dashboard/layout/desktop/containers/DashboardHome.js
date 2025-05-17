import React, { useState } from 'react'
import AnalyzedNews from '../../../containers/AnalyzedNews'

const DashboardHome = () => {
    // states
    const [statePage, setStatePage] = useState({
        pageName: "analyzed_news",
    });
    return (
        <div className='text-white mt-[6rem]'>
            <AnalyzedNews statePage={statePage}
                setStatePage={setStatePage} />
        </div>
    )
}

export default DashboardHome
