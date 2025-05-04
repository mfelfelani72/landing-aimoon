import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';

// Components

import TopButton from '../core/components/TopButton.jsx'
import { Image } from "../../features/core/components/Image.jsx"
import Navigation from "../core/components/Navigation.jsx"
import Languages from "../core/components/Languages.jsx"

// Containers

import MarqueeCoins from '../coin/containers/MarqueeCoins.js';

// Svg

import icon_notification from "../../../assets/icons/svg/icon-light-notification.svg";


const DashboardLanding = () => {
  // hooks
  const { t } = useTranslation();

  // functions
  useEffect(() => {
    // Set new background color
    document.body.style.backgroundColor = "#1f1e2e";
  }, []);

  return (
    <>
      <div className="fixed inset-y-0 left-0  w-[calc(50%-12rem)] bg-white z-[100]"></div>
      <div className="fixed inset-y-0 right-0 w-[calc(50%-12rem)] bg-white z-[100]"></div>

      <div className='w-full h-screen inline-flex justify-center relative z-[10]'>
        <div className='mobile w-96 bg-Neutral-500 text-white'>
          {/* top header */}
          <div className='fixed top-0 w-96 inline-flex z-[100] bg-background justify-between px-6 pt-6 pb-[0.75rem]'>

            <div className='text-Neutral-500'>
              <Languages />
            </div>


            <h2 className="text-sm font-bold">{t("aimoonhub")}</h2>

            <TopButton>
              <Image src={icon_notification} alt={"icon_notification"} className={"w-6 h-6"} />
            </TopButton>
          </div>

          {/* marquee */}
          <MarqueeCoins className={"fixed top-[4.5rem] bg-background z-[99] mb-4"} />

          <Outlet />

          {/* navigation */}
          <Navigation text={"aimoonhub"} />
        </div>
      </div>
    </>
  )
}

export default DashboardLanding
