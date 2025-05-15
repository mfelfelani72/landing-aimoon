import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from "react-router-dom";

// Components

import TopButton from "../../../core/components/TopButton.jsx";
import {
  Back,
  DesktopLogo,
  DesktopNavCoin,
  DesktopNavNews,
  DesktopNavReporters,
  DesktopNavAgencies,
  DesktopNavAnalysis,
  DesktopNavConfig,
  DesktopNavNotification,
  DesktopNavLogout,
  DesktopNavActiveOuter,
  DesktopNavBlackHole,
  DesktopNavWallet,
  BackgoundAimoonLogo,
  DesktopBackgoundSyncth,
} from "../../../core/components/Icon.jsx";
import Navigation from "../../../core/components/Navigation.jsx";
import Languages from "../../../core/components/Languages.jsx";

// Containers

import MarqueeCoins from "../../../coin/containers/MarqueeCoins.js";

// Zustand

import useAppStore from "../../../../app/stores/AppStore.js";

const DashboardLanding = () => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  const titlePage = useAppStore((state) => state.titlePage);
  const backAddress = useAppStore((state) => state.backAddress);

  // functions
  useEffect(() => {
    // Set new background color
    document.body.style.backgroundColor = "#1f1e2e";

    return () => {
      document.body.style.backgroundColor = "white";
    };
  }, []);

  return (
    <>
      {/* top header */}
      <div className="flex flex-row">
        <div className="relative w-[21rem]  h-dvh inline-flex flex-col  justify-between overflow-auto">
          <div className="absolute -top-[2rem] -left-[3rem] w-full h-full z-[20]">
            <div className="w-36 h-36 opacity-60 bg-violet-300/30 rounded-full blur-2xl" />
          </div>

          <div className="absolute top-0 left-0 w-full h-full z-[10]">
            <BackgoundAimoonLogo />
          </div>
          <div className="flex flex-row items-center justify-center pt-16 px-10 w-full gap-2">
            <DesktopLogo width={"34"} height={"30"} />

            <span className=" text-white text-2xl font-medium  flex pt-3">
              AimoonHub
            </span>
          </div>

          <div className="flex flex-col items-end px-6 gap-2">
            <div className="cursor-pointer flex  flex-row items-center justify-between w-full px-4 py-2.5 gap-2">
              <div className="flex flex-row items-center gap-2">
                <DesktopNavCoin
                  width={"1.5rem"}
                  height={"1.5rem"}
                  color={"#DC815D"}
                />
                <div className=" text-[#DC815D] text-base  font-bold leading-9">
                  Coins Dashboard
                </div>
              </div>

              <DesktopNavActiveOuter width={"1.5rem"} height={"1.5rem"} />
            </div>
            <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
              <div className="flex flex-row items-center gap-2">
                <DesktopNavNews
                  width={"1.5rem"}
                  height={"1.5rem"}
                  color={"white"}
                />
                <div className=" text-Neutral-100 text-base font-bold leading-9 ">
                  Latest News
                </div>
              </div>
            </div>
            <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
              <div className="flex flex-row items-center gap-2">
                <DesktopNavReporters
                  width={"1.5rem"}
                  height={"1.5rem"}
                  color={"white"}
                />
                <div className=" text-Neutral-100 text-base font-bold leading-9 ">
                  Reporters Dashboard
                </div>
              </div>
            </div>
            <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
              <div className="flex flex-row items-center gap-2">
                <DesktopNavAgencies
                  width={"1.5rem"}
                  height={"1.5rem"}
                  color={"white"}
                />
                <div className=" text-Neutral-100 text-base font-bold leading-9 ">
                  Agencies Dashboard
                </div>
              </div>
            </div>
            <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
              <div className="flex flex-row items-center gap-2">
                <DesktopNavAnalysis
                  width={"1.5rem"}
                  height={"1.5rem"}
                  color={"white"}
                />
                <div className=" text-Neutral-100 text-base font-bold leading-9 ">
                  News Analysis
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="w-full relative inline-flex flex-col gap-2 justify-center items-center">
              <div className="absolute top-[1.75rem] left-[5rem] w-full h-full z-[20]">
                <div className="w-36 h-36 opacity-60 bg-violet-300/30 rounded-full blur-2xl" />
              </div>
              <div className="rotate-2 z-30">
                <DesktopNavWallet width={"139"} height={"139"} />
              </div>
              <div>
                <DesktopNavBlackHole
                  width={"123"}
                  height={"24"}
                  color={"#161521"}
                />
              </div>
            </div>

            <div className="w-[60%] my-4 h-0 mx-auto outline-1 outline-offset-[-0.50px] outline-Neutral-400" />

            <div className="relative inline-flex flex-col items-end px-6 gap-2 pb-16">
              <div className="absolute -top-[15rem] -left-[5rem] w-full h-full z-[20]">
                <DesktopBackgoundSyncth />
              </div>
              <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                <div className="flex flex-row items-center gap-2">
                  <DesktopNavConfig
                    width={"1.5rem"}
                    height={"1.5rem"}
                    color={"white"}
                  />
                  <div className=" text-Neutral-100 text-base font-bold leading-9 ">
                    Configuration
                  </div>
                </div>
              </div>
              <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                <div className="flex flex-row items-center gap-2">
                  <DesktopNavNotification
                    width={"1.5rem"}
                    height={"1.5rem"}
                    color={"white"}
                  />
                  <div className=" text-Neutral-100  text-base font-bold leading-9 ">
                    Notification
                  </div>
                </div>
              </div>
              <div className="cursor-pointer flex w-full justify-between flex-row items-center  px-4 py-2.5 gap-2">
                <div className="flex flex-row items-center gap-2">
                  <DesktopNavLogout
                    width={"1.5rem"}
                    height={"1.5rem"}
                    color={"#E68956"}
                  />
                  <div className=" text-[#E68956] text-base font-bold leading-9 ">
                    Log out
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full bg-background-light">
          {backAddress && (
            <TopButton onClick={() => navigate(backAddress)}>
              <Back width={"14"} height={"14"} color={"white"} />
            </TopButton>
          )}
          <span className="ml-4">{titlePage}</span>
        </div>
      </div>
      {/* <MarqueeCoins
        className={"fixed top-[4.5rem] right-0 bg-background z-[99] mb-4"}
      />

       */}

      {/* navigation */}
      {/* <Navigation text={"aimoonhub"} /> */}
    </>
  );
};

export default DashboardLanding;
