import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { ImageLazy } from "../core/components/Image.jsx";

// Svg

import vector from "../../../assets/images/vector/vector-footer.svg";
import location from "../../../assets/icons/svg/location.svg";
import call from "../../../assets/icons/svg/call.svg";
import telegram from "../../../assets/icons/svg/telegram.svg";
import instagram from "../../../assets/icons/svg/instagram.svg";
import medium from "../../../assets/icons/svg/medium.svg";
import logo from "../../../assets/icons/png/logo-dark.png";

const Footer = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden">
        <div className="relative">
          <ImageLazy
            src={vector}
            alt="vector-footer"
            className="width-theme h-[50rem] object-none"
          />

          <div className="absolute top-0 left-0 w-full">
            <div className="flex flex-col mt-[20rem] text-white px-[13rem]">
              {/* Menu */}
              <div className="flex flex-row w-full gap-16 items-center justify-center">
                <div className="text-orange-400 text-base font-medium underline leading-normal">
                  {t("home")}
                </div>
                <div className="opacity-20 text-base font-bold">/</div>
                <div className="text-base font-medium underline leading-normal">
                  {t("contact_us")}
                </div>
                <div className="opacity-20 text-base font-bold">/</div>
                <div className="text-base font-medium underline leading-normal">
                  {t("features")}
                </div>
                <div className="opacity-20 text-base font-bold">/</div>
                <div className="text-base font-medium underline leading-normal">
                  {t("prices")}
                </div>
              </div>

              {/* Address */}
              <div className="flex flex-row justify-between mt-28">
                <div className="flex flex-row items-center gap-1">
                  <ImageLazy
                    src={location}
                    alt="location"
                    className="w-6 h-6"
                  />
                  <div className="text-sm font-normal pt-1">{t("address")}</div>
                </div>
                <div className="flex flex-row items-center gap-1">
                  <ImageLazy src={call} alt="call" className="w-6 h-6" />
                  <a
                    href="tel:+985138514529"
                    className="text-sm font-normal pt-1.5"
                  >
                    {t("phone")}:{" "}
                    <span className="underline ltr:font-spaceGrotesk">
                      05138514529
                    </span>
                  </a>
                </div>
              </div>

              {/* Copyright and Social Media */}
              <div className="flex flex-row items-center justify-between mt-10 mb-[7rem]">
                {/* Copyright */}
                <div className="text-sm font-normal font-spaceGrotesk left-to-right">
                  {t("copyright")}
                </div>

                {/* Social Media */}
                <div className="flex flex-row gap-3">
                  <div className="p-4 rounded-full border-2 border-white/5">
                    <ImageLazy
                      src={medium}
                      alt={"medium"}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="p-4 rounded-full border-2 border-white/5">
                    <ImageLazy
                      src={instagram}
                      alt={"instagram"}
                      className="w-5 h-5"
                    />
                  </div>
                  <div className="p-4 rounded-full border-2 border-white/5">
                    <ImageLazy
                      src={telegram}
                      alt={"telegram"}
                      className="w-5 h-5"
                    />
                  </div>
                </div>

                {/* Logo */}
                <div className="flex flex-col items-center">
                  <ImageLazy
                    src={logo}
                    alt="logo"
                    className={"w-[95px] h-[58px]"}
                  />
                  <span className="font-bold text-sm text-primary-400">
                    AIMOONHUB
                  </span>
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
