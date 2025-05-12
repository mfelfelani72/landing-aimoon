import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next";

// Components

import Languages from '../../core/components/Languages.jsx'
import TopButton from '../../core/components/TopButton.jsx'
import { InputText, InputPassword } from '../../core/components/Input.jsx';
import { ButtonNoLink } from '../../core/components/Button.jsx';
import LoaderDotSpinner from '../../core/components/LoaderDotSpinner.jsx';
import { Back } from '../../core/components/Icon.jsx';

// Functions

import EnableButtonControl from '../../../../utils/lib/EnableButtonControl.js';
import LoginUser from "../utils/lib/LoginUser.js";

// Zustand

import useAppStore from "../../../app/stores/AppStore.js";
import useSetHeaderConfigure from '../../../../utils/hooks/useSetHeaderConfigure.js';

const Register = () => {
    // hooks
    const { t } = useTranslation();
    const navigate = useNavigate();
    useSetHeaderConfigure("register","/dashboard/home")

    // states
    const [errors, setErrors] = useState([]);

    const sendRequest = useAppStore((state) => state.sendRequest);
    const setSendRequest = useAppStore((state) => state.setSendRequest);
    const titlePage = useAppStore((state) => state.titlePage);
    const backAddress = useAppStore((state) => state.backAddress);

    const handleClick = () => {
        if (!sendRequest)
            LoginUser(navigate, "password", setErrors, setSendRequest);
        setSendRequest(true);
    };

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

                        <TopButton className={"ltr:rotate-180"} onClick={() => {
                            navigate(backAddress)
                        }}>
                            <Back width={"30"} height={"30"} color={`${"dark" == "light" ? "#797882" : "white"}`} />
                        </TopButton>
                    </div>

                    <div className='pt-8 px-6'>
                        {/* titles */}
                        <div className="text-xl font-bold ">{t(titlePage)}</div>
                        <div className="text-Neutral-300 text-base font-normal mt-3">{t("input_info_login")}</div>
                        {/* inputs */}
                        <div className="flex flex-col mt-3">
                            <InputText id="username" label={t("mohammad")} placeholder="aimoonhub@gmail.com" />
                            <div className="text-Neutral-300 text-base font-normal mt-6 mb-3">لطفا رمز عبور خود را وارد نمایید.</div>
                            <InputPassword
                                id="ch_password"
                                type="change_password"
                                label={t("password")}
                                theme={"dark"}
                                button_first_id="sign_in"
                                button_secound_id="sign_in_disable"
                                onChange={(event) => {
                                    EnableButtonControl(event, "sign_in", "sign_in_disable");
                                }}
                                error={errors["password"]}
                            />
                            {/* <InputRePassword
                                id="password"
                                type="password"
                                label={t("password")}
                                theme={"dark"}
                                button_first_id="sign_in"
                                button_secound_id="sign_in_disable"
                                onChange={(event) => {
                                    EnableButtonControl(event, "sign_in", "sign_in_disable");
                                }}
                                error={errors["password"]}
                            /> */}
                        </div>

                        {/* buttons */}
                        <div className="fixed bottom-4 w-84">
                            <ButtonNoLink
                                id="sign_in"
                                type="no_link"
                                onClick={() => {
                                    handleClick();
                                }}
                                className="hidden relative"
                            >
                                <div className="text-white">
                                    {t("sign_in")}{" "}
                                </div>
                                {sendRequest && <LoaderDotSpinner className={"rtl:left-0 ltr:right-0"} />}
                            </ButtonNoLink>
                            <ButtonNoLink
                                id="sign_in_disable"
                                className="flex bg-Neutral-100 hover:bg-Neutral-100 focus:bg-Neutral-100 pointer-events-none cursor-default"
                            >
                                <div className="text-white">{t("sign_in")}</div>
                            </ButtonNoLink>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Register
