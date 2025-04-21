import React from 'react'

// Components

import { InputSearch } from '../core/components/Input.jsx'

const SymbolLanding = () => {
    return (
        <>
            <div className='flex flex-col p-4'>
                <div className="text-white text-base font-medium">برای ورود به داشبورد کوین مورد نظر خود را انتخاب کنید.</div>
                <div className='mt-5'>
                    <InputSearch id="coin-search" placeholder={"جست و جو در کوین ها"} className={""} />
                </div>
            </div>
        </>
    )
}

export default SymbolLanding
