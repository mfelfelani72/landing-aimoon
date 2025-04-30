import React from 'react'
import { useLocation } from 'react-router-dom'
import TabInfoAnalysisNews from "../components/TabInfoAnalysisNews.jsx"



const AuthorDashboard = () => {
  const location = useLocation();

  console.log(location);

  return (
    <>

      <div className='bg-background pb-[7rem] mt-6'>
        <TabInfoAnalysisNews author={location?.state?.author} />
      </div>

    </>
  )
}

export default AuthorDashboard