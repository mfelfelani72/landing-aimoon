import React from "react";

import vector from "../../../assets/images/vector/vector-footer.svg";
import { ImageLazy } from "../core/components/Image.jsx";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col bg-lime-500">
        <div className="relative">
          <div className="absolute top-0 z-30 w-full">
            <ImageLazy src={vector} alt="vector-footer" />
          </div>
          <div className="absolute top-1 inset-x-0 w-full h-[730px] bg-[#28263A]"></div>
        </div>
      </div>
    </>
  );
};

export default Footer;
