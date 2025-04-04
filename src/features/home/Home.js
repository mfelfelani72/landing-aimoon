import React from "react";

// Components

import ContactUs from "./containers/ContactUs";

const Home = () => {
  return (
    <>
      <div className="flex flex-col mt-[6rem]">
        {/* Contact us */}
        <ContactUs />
      </div>
    </>
  );
};

export default Home;
