import React, { lazy, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Pages

const Content = lazy(() => import("./Content"));

// Components

import Header from "../../../features/header/Header";
import Footer from "../../../features/footer/Footer";

// Functions

import Middleware from "../../middleware/Middleware";

const Landing = () => {
  // hooks
  const navigate = useNavigate();
  const location = useLocation();

  // states
  const [certificate, setCertificate] = useState();

  useEffect(() => {
    setCertificate(Middleware(location, navigate));
  }, []);

  return (
    <div className="font-yekanBakh flex flex-col w-full h-full">
      <div className="container mx-auto">
        <Header />
        <div className="h-screen">
          {certificate === "app" && <Content />}
          {certificate === "404" && <div>404</div>}
          {certificate === "403" && <div>403</div>}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Landing;
