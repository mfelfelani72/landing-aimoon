import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import { ButtonNoLink } from '../../../core/components/Button.jsx'

const FreeTestAimoonex = () => {
    // hooks
    const { t } = useTranslation();
    return (
        <>
            <div className='w-full inline-flex items-center justify-center mt-[5rem] z-10'>

                <div className='relative w-[29rem]'>
                    <input placeholder={t("enter_email")} className='relative placeholder:text-Neutral-200 text-Neutral-200 text-lg font-bold h-24 bg-[#28263A] rounded-3xl rtl:pr-[15rem] ltr:pl-[15rem]' />
                    <div className='absolute top-0 rtl:right-4 ltr:left-4 h-full inline-flex items-center'>
                        <ButtonNoLink className={"w-52 h-14 rounded-[1.25rem]"} >{t("free_test_aimoonex")}</ButtonNoLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FreeTestAimoonex
