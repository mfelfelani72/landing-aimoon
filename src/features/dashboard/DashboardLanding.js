import React from 'react'
import { useTranslation } from "react-i18next";

// Components

import TopButton from '../core/components/TopButton.jsx'
import { Image } from "../../features/core/components/Image.jsx"

// Svg

import icon_notification from "../../../assets/icons/svg/icon-light-notification.svg";

const DashboardLanding = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <div className='relative w-full h-full inline-flex justify-center overflow-hidden'>
      <div className='mobile p-6 w-96 bg-Neutral-500 text-white'>
        {/* top header */}
        <div className='flex flex-row justify-between'>

          <TopButton >
            <Image src={icon_notification} alt={"icon_notification"} className={"w-6 h-6"} />
          </TopButton>
          <div className="text-sm font-bold">{t("aimoonhub")}</div>

          <TopButton >
            <Image src={icon_notification} alt={"icon_notification"} className={"w-6 h-6"} />
          </TopButton>
        </div>
      </div>
    </div>
  )
}

export default DashboardLanding
