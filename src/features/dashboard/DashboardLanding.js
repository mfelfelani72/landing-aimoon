import React from 'react'
import { useTranslation } from "react-i18next";
import { Outlet } from 'react-router-dom';

// Components

import TopButton from '../core/components/TopButton.jsx'
import { Image } from "../../features/core/components/Image.jsx"
import MarqueeSymbols from '../symbol/containers/MarqueeSymbols.jsx';

// Svg

import icon_notification from "../../../assets/icons/svg/icon-light-notification.svg";


const DashboardLanding = () => {
  // hooks
  const { t } = useTranslation();


  return (
    <div className='w-full h-screen inline-flex justify-center'>
      <div className='mobile w-96 bg-Neutral-500 text-white'>
        {/* top header */}
        <div className='flex flex-row justify-between p-6'>
          <TopButton >
            <Image src={icon_notification} alt={"icon_notification"} className={"w-6 h-6"} />
          </TopButton>

          <h2 className="text-sm font-bold">{t("aimoonhub")}</h2>

          <TopButton >
            <Image src={icon_notification} alt={"icon_notification"} className={"w-6 h-6"} />
          </TopButton>
        </div>

        {/* marquee */}
        <MarqueeSymbols className={"mt-2"} />

        <Outlet />

      </div>
    </div>
  )
}

export default DashboardLanding
