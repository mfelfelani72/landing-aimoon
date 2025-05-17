import React from "react";

// Containers

import DashbaradHomeMobile from "../layout/mobile/containers/DashbaradHome";
import DashbaradHomeDesktop from "../layout/desktop/containers/DashboardHome";

// Hooks
import useDevice from "../../../../utils/hooks/useDevice"

const DashbaradHome = () => {
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
      {isMobile && <DashbaradHomeMobile />}
      {isDesktop && <DashbaradHomeDesktop />}
    </>
  );
};

export default DashbaradHome;
