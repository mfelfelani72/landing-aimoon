import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { ImageLazy } from "../../core/components/Image.jsx";
import { ButtonLink } from "../../core/components/Button.jsx";

// png

import logo from "../../../../assets/icons/png/logo.png";
import Languages from "../../core/components/Languages.jsx";

const Header = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="fixed top-0 inset-x-0 z-[999] bg-white">
        <div className="flex flex-row justify-between items-center px-default py-2">
          <header>
            <nav className="flex flex-row items-center">
              {/* logo */}
              <div className="flex flex-col items-center">
                <ImageLazy
                  src={logo}
                  alt="logo"
                  className={"w-[4rem] h-[3.5rem]"}
                />
                <span className="font-bold text-sm">{t("aimoonhub")}</span>
              </div>
              {/* menu */}
              <ul className="flex flex-row gap-12 rtl:pr-11 ltr:pl-11">
                <li className="text-primary-400">{t("home")}</li>
                <li>{t("about_us")}</li>
                <li>{t("contact_us")}</li>
                <li>{t("features")}</li>
                <li>{t("prices")}</li>
                <li>{t("support")}</li>
              </ul>
            </nav>
          </header>
          <div className="flex flex-row gap-2">
            <ButtonLink className="p-4 h-[3rem]">
              {t("login_telegram")}
            </ButtonLink>
            <Languages />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
