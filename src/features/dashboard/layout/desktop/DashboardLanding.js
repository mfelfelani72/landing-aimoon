import React from "react";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

// Containers

import MarqueeCoins from "../../../coin/containers/MarqueeCoins.js";
import Sidebar from "../../containers/Sidebar.js";

// Zustand

import useAppStore from "../../../../app/stores/AppStore.js";

const DashboardLanding = () => {
  // hooks
  const { t } = useTranslation();

  // state
  const titlePage = useAppStore((state) => state.titlePage);

  return (
    <>
      <div className="flex flex-row">
        {/* sidebar */}

        <Sidebar />

        {/* content */}
        <div className="flex flex-col h-screen ltr:ml-[21rem] rtl:mr-[21rem] w-full bg-background text-white">

          <MarqueeCoins
            className={"fixed top-[1rem] right-0 bg-background z-[99] mb-4"}
          />

          <div className="fixed w-full pt-20 ltr:pl-9 rtl:pr-9 bg-background z-[98]">{t(titlePage)}</div>

          <Outlet />

        </div>
      </div>
    </>
  );
};

export default DashboardLanding;
