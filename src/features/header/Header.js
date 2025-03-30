import React from "react";

// Components

import { ImageLazy } from "../core/components/Image.jsx";
import { ButtonLink } from "../core/components/Button.jsx";

// png

import logo from "../../../assets/icons/png/logo.png";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[999]">
        <div className="container mx-auto bg-white">
          <div className="flex flex-row justify-between items-center px-default py-2">
            <header>
              <nav className="flex flex-row items-center">
                {/* logo */}
                <div className="flex flex-col items-center">
                  <ImageLazy
                    src={logo}
                    alt="logo"
                    className={"w-[66px] h-[58px]"}
                  />
                  <span className="font-bold text-sm ">AIMOONHUB</span>
                </div>
                {/* menu */}
                <ul className="flex flex-row gap-12 pr-11">
                  <li className="text-primary-400">صفحه اصلی</li>
                  <li>درباره ما</li>
                  <li>تماس با ما</li>
                  <li>ویژگی ها</li>
                  <li>قیمت ها</li>
                  <li>پشتیبانی</li>
                </ul>
              </nav>
            </header>
            <div>
              <ButtonLink className="p-4 h-[45px]">
                ورود به بات تلگرام
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
