import React from 'react'

// Components

import NewsBox from '../../core/components/NewsBox.jsx'

const LatestNews = () => {
    return (
        <>
            <div className='flex flex-col gap-7 mt-8 px-6 bg-Neutral-500 pb-[7rem]'>
                <NewsBox className={""} ></NewsBox>
            </div>
        </>
    )
}

export default LatestNews
