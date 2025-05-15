import React, { useEffect } from 'react'
import { useTranslation } from "react-i18next";
import { Outlet, useNavigate } from 'react-router-dom';

// Components

import TopButton from '../core/components/TopButton.jsx'
import { Back } from "../../features/core/components/Icon.jsx"
import Navigation from "../core/components/Navigation.jsx"
import Languages from "../core/components/Languages.jsx"
import Drawer from "../core/components/Drawer.jsx"

// Containers

import MarqueeCoins from '../coin/containers/MarqueeCoins.js';
import HumbergerMenu from './containers/HumbergerMenu.js';

// Functions

import { ShowDrawer } from '../../../utils/lib/Drawer.js';

// Zustand

import useAppStore from "../../app/stores/AppStore.js";

const DashboardLanding = () => {
  // hooks
  const { t } = useTranslation();
  const navigate = useNavigate();

  // states and constants

  const configureDrawer = {
    drawerLocation: "right",
    drawerId: "drawer_menu",
    overlayId: "clickableOverlay",
  }

  const titlePage = useAppStore((state) => state.titlePage);
  const backAddress = useAppStore((state) => state.backAddress);

  // functions
  useEffect(() => {

    // Set new background color
    document.body.style.backgroundColor = "#1f1e2e";

    return () => {
      document.body.style.backgroundColor = "white";
    }
  }, []);

  return (
    <>
      <div className="fixed inset-y-0 left-0  w-[calc(50%-12rem)] bg-white z-[999]"></div>
      <div className="fixed inset-y-0 right-0 w-[calc(50%-12rem)] bg-white z-[999]"></div>
      <Drawer
        id={configureDrawer?.drawerId}
        overlayId={configureDrawer?.overlayId}
        location={configureDrawer?.drawerLocation}
        className={"bg-background-light w-96"}
      >
        <HumbergerMenu />
      </Drawer>

      <div className='w-full h-screen inline-flex justify-center relative z-[10]'>
        <div className='mobile w-96 bg-Neutral-500 text-white'>
          {/* top header */}
          <div className='fixed top-0 w-96 inline-flex z-[100] bg-background justify-between px-6 pt-6 pb-[0.75rem]'>

            <div className='text-Neutral-500'>
              <Languages />
            </div>

            <div onClick={() => ShowDrawer(configureDrawer)} className=''>sdfsd</div>


            <h2 className="text-sm font-bold">{t(titlePage)}</h2>

            <TopButton className={"ltr:rotate-180"} onClick={() => {
              navigate(backAddress)
            }}>
              <Back width={"30"} height={"30"} color={`${"dark" == "light" ? "#797882" : "white"}`} />
            </TopButton>
          </div>

          {/* marquee */}
          <MarqueeCoins className={"fixed top-[4.5rem] right-0 bg-background z-[99] mb-4"} />

          <Outlet />

          {/* navigation */}
          <Navigation text={"aimoonhub"} />
        </div>
      </div>
    </>
  )
}

export default DashboardLanding
