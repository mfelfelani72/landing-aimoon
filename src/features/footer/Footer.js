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
          <div className="absolute top-0 inset-x-0 w-full bg-[#28263A]">
            <div className="flex flex-col mt-[15rem] text-white mb-[175px]">
              <div className="flex flex-row w-full gap-16 items-center justify-center">
                <div className="justify-start text-orange-400 text-base font-medium font-['Yekan_Bakh'] underline uppercase leading-normal">
                  صفحه اصلی
                </div>
                <div className="opacity-20 justify-start text-white text-base font-bold font-['Azo_Sans'] uppercase">
                  /
                </div>
                <div className="text-right justify-start text-white text-base font-medium font-['Yekan_Bakh'] underline uppercase leading-normal">
                  تماس با ما
                </div>
                <div className="opacity-20 justify-start text-white text-base font-bold font-['Azo_Sans'] uppercase">
                  /
                </div>
                <div className="text-right justify-start text-white text-base font-medium font-['Yekan_Bakh'] underline uppercase leading-normal">
                  ویژگی ها
                </div>
                <div className="opacity-20 justify-start text-white text-base font-bold font-['Azo_Sans'] uppercase">
                  /
                </div>
                <div className="text-right justify-start text-white text-base font-medium font-['Yekan_Bakh'] underline uppercase leading-normal">
                  قیمت ها
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
