import React from 'react'

// Components

import NewsBox from '../../core/components/NewsBox.jsx'

const AnalyzedNews = () => {
    return (
        <>
            <div className='mt-8 bg-Neutral-500 overflow-ellipsis'>
                <NewsBox className={""} ></NewsBox>
                <NewsBox className={""} ></NewsBox>
                <NewsBox className={""} ></NewsBox>
                <NewsBox className={""} ></NewsBox>
            </div>
        </>
    )
}

export default AnalyzedNews
