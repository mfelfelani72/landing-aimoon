import React from "react";

// Components

import LatestNews from "./containers/LatestNews";
import ContactUs from "./containers/ContactUs";
import FAQ from "./containers/FAQ";

const Home = () => {
  return (
    <>
      <div className="flex flex-col mt-[6rem]">
        {/* LatestNews */}
        <LatestNews />
        {/* FAQ */}
        <FAQ />
        {/* Contact us */}
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
