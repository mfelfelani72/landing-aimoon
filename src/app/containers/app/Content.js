import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./Landing.js";

// just for test
const Test = lazy(() => import("../../components/TestCode.jsx"));

// Landing

const LazyHomeLanding = lazy(() => import("../../../features/home/HomeLanding.js"));

// Dashboard

const LazyDashboardLanding = lazy(() => import("../../../features/dashboard/DashboardLanding.js"));

const Content = () => {
  return (
    <>
      <Routes>
        {/* just for test */}
        <Route path="/mohammad/test" element={<Test />}></Route>
        {/* just for test */}

        {/* Landing */}
        <Route path="*" element={<Landing />}></Route>
        <Route path="/landing" element={<LazyHomeLanding />}></Route>
        {/* Dashboard */}
        <Route path="/dashboard" element={<LazyDashboardLanding />}></Route>
      </Routes>
    </>
  );
};

export default Content;
