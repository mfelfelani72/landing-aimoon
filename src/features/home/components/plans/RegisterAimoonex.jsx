import React from 'react'

// Components

import { ButtonNoLink } from '../../../core/components/Button.jsx'

const RegisterAimoonex = () => {
  return (
    <div className='w-full inline-flex items-center justify-center mt-[26rem] z-10'>

      <div className='relative w-[465.81px]'>
        <input placeholder='آدرس ایمیل خود را وارد کنید' className='relative placeholder:text-Neutral-200 text-Neutral-200 text-lg font-bold  h-24 bg-[#28263A] rounded-3xl pr-[15rem]' />
        <div className='absolute top-0 right-4 h-full inline-flex items-center'>
          <ButtonNoLink className={"w-52 h-14 rounded-[19.48px]"} >عضویت در آیمونیکس</ButtonNoLink>
        </div>
      </div>
    </div>
  )
}

export default RegisterAimoonex
