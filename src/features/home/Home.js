import React from "react";

// Components

import CustomerReview from "./containers/CustomerReview";
import Plans from "./containers/Plans";
import LatestNews from "./containers/LatestNews";
import ContactUs from "./containers/ContactUs";
import FAQ from "./containers/FAQ";

const Home = () => {
  return (
    <>
      <div className="fixed inset-y-0 left-0  w-[calc(50%-50rem)] bg-white z-[100]"></div>
      <div className="fixed inset-y-0 right-0 w-[calc(50%-50rem)] bg-white z-[100]"></div>
      <div className="flex flex-col mt-[6rem]">
        {/* Customer Review  */}
        <CustomerReview />
        {/* Plans */}
        <Plans />
        {/* Latest News */}
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
