import React from "react";

// Components

import { ImageLazy } from "../core/components/Image.jsx";

// Svg

import vector from "../../../assets/images/vector/vector-footer.svg";
import location from "../../../assets/icons/svg/location.svg";
import call from "../../../assets/icons/svg/call.svg";

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
              {/* menu */}
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
              {/* address */}
              <div className="flex flex-row justify-between mt-28 px-default">
                <div className="flex flex-row items-center gap-1">
                  <ImageLazy
                    src={location}
                    alt="location"
                    className="w-6 h-6"
                  />
                  <div className="text-sm font-normal pt-1">
                    آدرس شرکت: مشهد، خیابان کوهسنگی، ملک الشعرا بهار ۵۶ ( خیابان
                    شهید بهشتی )، شهید بهشتی ۷، پلاک ۴۷
                  </div>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <ImageLazy src={call} alt="call" className="w-6 h-6" />
                  <div className="text-sm font-normal pt-1.5">
                    تلفن: <span className="underline">05138514529</span>
                  </div>
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
