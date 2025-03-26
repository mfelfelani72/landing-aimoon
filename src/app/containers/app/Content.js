import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Landing from "./Landing.js";

// just for test
const Test = lazy(() => import("../../components/TestCode.jsx"));

// Landing

const LazyHome = lazy(() => import("../../../features/home/Home.js"));

const Content = () => {
  return (
    <div className="w-full h-screen xs:grid xs:place-items-center">
      <Routes>
        {/* just for test */}
        <Route path="/mohammad/test" element={<Test />}></Route>
        {/* just for test */}

        {/* Auth */}
        <Route path="*" element={<Landing />}></Route>
        <Route path="/landing" element={<LazyHome />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
