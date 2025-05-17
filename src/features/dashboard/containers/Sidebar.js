import React, { useState } from 'react'
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';

// Components

import {
    LogoIcon,
    CoinIcon,
    NewsIcon,
    ReportersIcon,
    AgenciesIcon,
    AnalysisIcon,
    ConfigIcon,
    NotificationIcon,
    LogoutIcon,
    ActiveOuterIcon,
    BlackHole,
    WalletIcon,
    BackgroundAimoonLogo,
    BackgroundSyncthIcon,
} from "../../core/components/Icon.jsx";

const Sidebar = () => {
    // hooks
    const { t } = useTranslation();
    const navigate = useNavigate();

    // states
    const [activeLink, setActiveLink] = useState("analyzed_news");
    return (
        <>
            <div className="fixed w-[21rem] h-dvh inline-flex flex-col bg-background-light justify-between overflow-x-clip overflow-y-auto z-[100]">
                <div className="absolute -top-[2rem] -left-[3rem] w-full h-full z-[20]">
                    <div className="w-36 h-36 opacity-60 bg-violet-300/30 rounded-full blur-2xl" />
                </div>

                <div className="absolute top-0 left-0 w-full h-full z-[10]">
                    <BackgroundAimoonLogo />
                </div>
                <div className="flex flex-row items-center justify-center pt-16 px-10 w-full gap-2">
                    <LogoIcon width={"34"} height={"30"} />

                    <span className=" text-white text-2xl font-medium  flex pt-3">
                        {t("aimoonhub")}
                    </span>
                </div>

                <div className="relative flex flex-col items-end px-6 gap-2 z-[100]">
                    <div onClick={() => {
                        setActiveLink("analyzed_news");
                        navigate("/dashboard/home")
                    }} className="cursor-pointer rounded-2xl border border-background-light hover:border-primary-300 flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <AnalysisIcon
                                width={"1.5rem"}
                                height={"1.5rem"}
                                color={`${activeLink == "analyzed_news" ? "#ea9669 " : "white"}`}
                            />
                            <div className={`${activeLink == "analyzed_news" ? "text-primary-300" : "text-Neutral-100"}  text-base font-bold leading-9`}>
                                {t("analyzed_news")}
                            </div>
                        </div>
                        {activeLink == "analyzed_news" && <ActiveOuterIcon width={"1.5rem"} height={"1.5rem"} />}
                    </div>
                    <div onClick={() => {
                        setActiveLink("latest_news");
                        navigate("/dashboard/home")
                    }} className="cursor-pointer rounded-2xl border border-background-light hover:border-primary-300 flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <NewsIcon
                                width={"1.5rem"}
                                height={"1.5rem"}
                                color={`${activeLink == "latest_news" ? "#ea9669 " : "white"}`}
                            />
                            <div className={`${activeLink == "latest_news" ? "text-primary-300" : "text-Neutral-100"}  text-base font-bold leading-9`}>
                                {t("latest_news")}
                            </div>
                        </div>
                        {activeLink == "latest_news" && <ActiveOuterIcon width={"1.5rem"} height={"1.5rem"} />}
                    </div>
                    <div onClick={() => {
                        setActiveLink("coin_dashboard");
                        navigate("/dashboard/coin-list");
                    }} className="cursor-pointer rounded-2xl border border-background-light hover:border-primary-300 flex  flex-row items-center justify-between w-full px-4 py-2.5 gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <CoinIcon
                                width={"1.5rem"}
                                height={"1.5rem"}
                                color={`${activeLink == "coin_dashboard" ? "#ea9669 " : "white"}`}
                            />
                            <div className={`${activeLink == "coin_dashboard" ? "text-primary-300" : "text-Neutral-100"}  text-base font-bold leading-9`}>
                                {t("coin_dashboard")}
                            </div>
                        </div>

                        {activeLink == "coin_dashboard" && <ActiveOuterIcon width={"1.5rem"} height={"1.5rem"} />}
                    </div>
                    <div onClick={() => {
                        setActiveLink("authors_dashboard");
                        navigate("/dashboard/author-list");
                    }} className="cursor-pointer rounded-2xl border border-background-light hover:border-primary-300 flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <ReportersIcon
                                width={"1.5rem"}
                                height={"1.5rem"}
                                color={`${activeLink == "authors_dashboard" ? "#ea9669 " : "white"}`}
                            />
                            <div className={`${activeLink == "authors_dashboard" ? "text-primary-300" : "text-Neutral-100"}  text-base font-bold leading-9`}>
                                {t("authors_dashboard")}
                            </div>
                        </div>
                        {activeLink == "authors_dashboard" && <ActiveOuterIcon width={"1.5rem"} height={"1.5rem"} />}
                    </div>
                    <div onClick={() => {
                        setActiveLink("providers_dashboard");
                        navigate("/dashboard/provider-list");
                    }} className="cursor-pointer rounded-2xl border border-background-light hover:border-primary-300 flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                        <div className="flex flex-row items-center gap-2">
                            <AgenciesIcon
                                width={"1.5rem"}
                                height={"1.5rem"}
                                color={`${activeLink == "providers_dashboard" ? "#ea9669 " : "white"}`}
                            />
                            <div className={`${activeLink == "providers_dashboard" ? "text-primary-300" : "text-Neutral-100"}  text-base font-bold leading-9`}>
                                {t("providers_dashboard")}
                            </div>
                        </div>
                        {activeLink == "providers_dashboard" && <ActiveOuterIcon width={"1.5rem"} height={"1.5rem"} />}
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="w-full relative inline-flex flex-col gap-2 justify-center items-center">
                        <div className="absolute top-[1.75rem] left-[5rem] w-full h-full z-[20]">
                            <div className="w-36 h-36 opacity-60 bg-violet-300/30 rounded-full blur-2xl" />
                        </div>
                        <div className="rotate-2 z-30">
                            <WalletIcon width={"139"} height={"139"} />
                        </div>
                        <div>
                            <BlackHole
                                width={"123"}
                                height={"24"}
                                color={"#161521"}
                            />
                        </div>
                    </div>

                    <div className="w-[60%] my-4 h-0 mx-auto outline-1 outline-offset-[-0.50px] outline-Neutral-400" />

                    <div className="relative inline-flex flex-col items-end px-6 gap-2 pb-16">
                        <div className="absolute -top-[15rem] -left-[5rem] w-full h-full z-[20]">
                            <BackgroundSyncthIcon />
                        </div>
                        <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <ConfigIcon
                                    width={"1.5rem"}
                                    height={"1.5rem"}
                                    color={"white"}
                                />
                                <div className=" text-Neutral-100 text-base font-bold leading-9 ">
                                    {t("configuration")}
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <NotificationIcon
                                    width={"1.5rem"}
                                    height={"1.5rem"}
                                    color={"white"}
                                />
                                <div className=" text-Neutral-100  text-base font-bold leading-9 ">
                                    {t("notification")}
                                </div>
                            </div>
                        </div>
                        <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                            <div className="flex flex-row items-center gap-2">
                                <LogoutIcon
                                    width={"1.5rem"}
                                    height={"1.5rem"}
                                    color={"#E68956"}
                                />
                                <div className=" text-[#E68956] text-base font-bold leading-9 ">
                                    {t("log_out")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
