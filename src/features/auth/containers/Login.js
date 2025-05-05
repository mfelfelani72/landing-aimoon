import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

// Components

import Languages from '../../core/components/Languages.jsx'
import TopButton from '../../core/components/TopButton.jsx'
import { Image } from '../../core/components/Image.jsx'
import { InputTextLogin } from '../../core/components/Input.jsx';

// Svg

import arrow from "../../../../assets/icons/svg/icon-light-arrow-down-2.svg"

const Login = () => {
    // hooks
    const { t } = useTranslation();
    const navigate = useNavigate();
    return (
        <>
            <div className="fixed inset-y-0 left-0  w-[calc(50%-12rem)] bg-white z-[100]"></div>
            <div className="fixed inset-y-0 right-0 w-[calc(50%-12rem)] bg-white z-[100]"></div>

            <div className='w-full h-screen flex flex-col items-center'>
                <div className='mobile w-96 h-full bg-Neutral-500 text-white py-6'>
                    {/* header */}
                    <div className='w-96 inline-flex bg-background justify-between px-6'>
                        <div className='text-Neutral-500'>
                            <Languages />
                        </div>

                        <TopButton onClick={() => navigate("/dashboard/home")}>
                            <Image src={arrow} alt={"arrow"} className={"w-6 h-6 rotate-90"} />
                        </TopButton>
                    </div>
                    {/* Content */}
                    <div className='pt-8 px-6'>
                        <div className="text-xl font-bold ">{t("login")}</div>
                        <div className="text-Neutral-300 text-base font-normal mt-3">{t("input_info_register")}</div>
                        <div className="flex mt-3">
                            <InputTextLogin id="username" placeholder="aimoonx@gmail.com" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
