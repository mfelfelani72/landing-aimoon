import React from "react";

// Components

import Image from "../core/Image.jsx";

// png

import logo from "../../../assets/icons/png/logo.png";

const Header = () => {
  return (
    <>
      <div className="fixed top-0 inset-x-0">
        <div className="container mx-auto bg-white">
          <div className="flex flex-row justify-between items-center px-[116px]">
            <header>
              <nav className="flex flex-row items-center">
                {/* logo */}
                <div className="flex flex-col items-center">
                  <Image
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
            <div>Header</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
