import React from 'react'
import { useLocation } from 'react-router-dom'

// Components

import TabInfoAnalysisNews from "../components/TabInfoAnalysisNews.jsx"

const AuthorDashboard = () => {
  // hooks
  const location = useLocation();

  return (
    <>
      <div className='bg-background pb-[7rem] mt-6'>
        <TabInfoAnalysisNews author={location?.state?.author} />
      </div>
    </>
  )
}

export default AuthorDashboard