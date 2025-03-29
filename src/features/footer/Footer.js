import React from "react";

import vector from "../../../assets/images/vector/vector-footer.svg";
import { ImageLazy } from "../core/components/Image.jsx";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-lime-500">
        <div className="relative">
          <div className="absolute -top-1  z-30 -inset-x-1 w-[calc(100%+2rem)]">
            <ImageLazy src={vector} alt="vector-footer" />
          </div>
          <div className="absolute top-0 inset-x-0 w-full min-h-[35rem] bg-[#28263A]"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
