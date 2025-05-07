import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./Landing.js";

// just for test
const Test = lazy(() => import("../../components/TestCode.jsx"));

// Landing

const LazyHomeLanding = lazy(() =>
  import("../../../features/home/HomeLanding.js")
);

// Auth

const LazyLogin = lazy(() =>
  import("../../../features/auth/containers/Login.js")
);

// Dashboard

const LazyDashboardLanding = lazy(() =>
  import("../../../features/dashboard/DashboardLanding.js")
);
const LazyDashboardHome = lazy(() =>
  import("../../../features/dashboard/containers/DashbaradHome.js")
);

// Coin

const LazyCoinLanding = lazy(() =>
  import("../../../features/coin/CoinLanding.js")
);
const LazyCoinDashboard = lazy(() =>
  import("../../../features/coin/containers/CoinDashboard.js")
);

// Author

const LazyAuthorLanding = lazy(() =>
  import("../../../features/author/AuthorLanding.js")
);
const LazyAuthorDashboard = lazy(() =>
  import("../../../features/author/containers/AuthorDashboard.js")
);

// Provider

const LazyProviderLanding = lazy(() =>
  import("../../../features/provider/ProviderLanding.js")
);
const LazyProviderDashboard = lazy(() =>
  import("../../../features/provider/containers/ProviderDashboard.js")
);

// AboutUs
const LazyAboutUsDrvafaeijahan = lazy(() =>
  import("../../../features/aboutUs/containers/Drvafaeijahan.js")
);

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

        {/* Auth */}
        <Route path="/login" element={<LazyLogin />}></Route>

        {/* Dashboard */}
        <Route path="/dashboard" element={<LazyDashboardLanding />}>
          <Route path="/dashboard/home" element={<LazyDashboardHome />} />

          {/* Coin */}
          <Route path="/dashboard/coin-list" element={<LazyCoinLanding />} />
          <Route path="/dashboard/coin" element={<LazyCoinDashboard />} />

          {/* Author */}
          <Route
            path="/dashboard/author-list"
            element={<LazyAuthorLanding />}
          />
          <Route path="/dashboard/author" element={<LazyAuthorDashboard />} />


          {/* Provider */}
          <Route
            path="/dashboard/provider-list"
            element={<LazyProviderLanding />}
          />
          <Route path="/dashboard/provider" element={<LazyProviderDashboard />} />

        </Route>


        {/* AboutUs */}

        <Route
          path="/drvafaeijahan"
          element={<LazyAboutUsDrvafaeijahan />}
        ></Route>
      </Routes>
    </>
  );
};

export default Content;
