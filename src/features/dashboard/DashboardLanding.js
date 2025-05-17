import React from 'react'

// Layouts

import DashboardLandingMobile from './layout/mobile/DashboardLanding.js'
import DashboardLandingDesktop from './layout/desktop/DashboardLanding.js'

// Hooks

import useDevice from '../../../utils/hooks/useDevice.js';

const DashboardLanding = () => {
  // hooks
  const {
    type,
    orientation,
    screenWidth,
    isMobile,
    isIpad,
    isDesktop
  } = useDevice();

  return (
    <>
      {isMobile && <DashboardLandingMobile />}
      {isDesktop && <DashboardLandingDesktop />}
    </>
  )
}

export default DashboardLanding
