import React from "react";
import {
  LogoutIcon,
  SunIcon,
  AboutIcon,
  NotificationIcon,
  LangIcon,
  BackgroundAimoonLogo,
} from "../../core/components/Icon.jsx";
import { InputSearch } from "../../core/components/Input.jsx";
import { useTranslation } from "react-i18next";

const HumbergerMenu = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="w-[95%] h-full rtl:mr-[3rem] ltr:ml-[3rem]  relative">
        <div className="relative inline-flex w-full h-full flex-col justify-between px-3 py-8">
          <div className="flex flex-col items-start  gap-2 w-full">
            <div className="w-full flex flex-row gap-2.5 px-4 py-4.5 items-center">
              <div>
                <img
                  className="origin-top-left  rounded-full"
                  src="https://placehold.co/56x56"
                />
              </div>
              <div className="flex flex-col gap-2.5">
                <div>
                  <div className="origin-top-left justify-start text-white text-sm font-medium leading-tight tracking-tight">
                    مهدیه احسان
                  </div>
                </div>
                <div>
                  <div className="origin-top-left  justify-start text-Neutral-100 text-xs font-normal ">
                    Mahdie.Ehsan@gmail.com
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full ">
              <div className="w-full ">
                <InputSearch
                  id="hamburger-search"
                  placeholder={t("search_coin")}
                  className={""}
                />
              </div>
            </div>
            <div className="flex flex-col w-full items-end">
              <div className="cursor-pointer flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
                <div className="flex flex-row items-center gap-2">
                  <NotificationIcon
                    width={"1.25rem"}
                    height={"1.25rem"}
                    color={"white"}
                  />
                  <div className="  text-right justify-start text-white text-sm font-medium  leading-tight tracking-tight">
                    اعلانات
                  </div>
                </div>
              </div>
              <div className="cursor-pointer relative inline-flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
                <div className="absolute -top-[3rem] -right-[4rem] w-full h-full z-[100]">
                  <div className="w-40 h-40  origin-top-left  opacity-50 bg-violet-300/30  rounded-full blur-2xl" />
                </div>
                <div className="flex flex-row items-center gap-2">
                  <AboutIcon
                    width={"1.25rem"}
                    height={"1.25rem"}
                    color={"white"}
                  />
                  <div className="   text-right justify-start text-white text-sm font-medium  leading-tight tracking-tight">
                    درباره آیمون هاب
                  </div>
                </div>
              </div>
              <div className="cursor-pointer flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
                <div className="flex flex-row items-center gap-2">
                  <LangIcon
                    width={"1.25rem"}
                    height={"1.25rem"}
                    color={"white"}
                  />
                  <div className="   text-right justify-start text-white text-sm font-medium  leading-tight tracking-tight">
                    تغییر زبان
                  </div>
                </div>
              </div>
              <div className="cursor-pointer flex  flex-row  justify-between  items-center w-full px-4 py-2.5 gap-2">
                <div className="flex flex-row items-center  gap-2">
                  <SunIcon
                    width={"1.25rem"}
                    height={"1.25rem"}
                    color={"white"}
                  />
                  <div className="   text-right justify-start text-white text-sm font-medium  leading-tight tracking-tight">
                    حالت روشن
                  </div>
                </div>

                <label class="inline-flex items-center relative">
                  <input
                    class="peer hidden"
                    id="toggle"
                    type="checkbox"
                    checked
                  />
                  <div
                    class="relative w-[55px] h-[32px] bg-white peer-checked:bg-zinc-500 rounded-full 
            after:absolute after:content-[''] after:w-[24px] after:h-[24px] 
            after:rounded-full after:top-[4px] after:left-[4px] 
            after:bg-[linear-gradient(to_right,_#f97316,_#facc15)] 
            peer-checked:after:bg-[linear-gradient(to_right,_#18181b,_#18181b)] 
            active:after:w-[30px] peer-checked:after:left-[51px] 
            peer-checked:after:translate-x-[-100%] 
            shadow-sm duration-300 after:duration-300 after:shadow-md"
                  ></div>

                  <SunIcon
                    width={"1.25rem"}
                    height={"1.25rem"}
                    color={"white"}
                    className="fill-white peer-checked:opacity-60 absolute w-4 h-4 left-[8px]"
                  />

                  <svg
                    height="512"
                    width="512"
                    viewBox="0 0 24 24"
                    class="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-4 h-4 right-[8px]"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.009,24A12.067,12.067,0,0,1,.075,10.725,12.121,12.121,0,0,1,10.1.152a13,13,0,0,1,5.03.206,2.5,2.5,0,0,1,1.8,1.8,2.47,2.47,0,0,1-.7,2.425c-4.559,4.168-4.165,10.645.807,14.412h0a2.5,2.5,0,0,1-.7,4.319A13.875,13.875,0,0,1,12.009,24Zm.074-22a10.776,10.776,0,0,0-1.675.127,10.1,10.1,0,0,0-8.344,8.8A9.928,9.928,0,0,0,4.581,18.7a10.473,10.473,0,0,0,11.093,2.734.5.5,0,0,0,.138-.856h0C9.883,16.1,9.417,8.087,14.865,3.124a.459.459,0,0,0,.127-.465.491.491,0,0,0-.356-.362A10.68,10.68,0,0,0,12.083,2ZM20.5,12a1,1,0,0,1-.97-.757l-.358-1.43L17.74,9.428a1,1,0,0,1,.035-1.94l1.4-.325.351-1.406a1,1,0,0,1,1.94,0l.355,1.418,1.418.355a1,1,0,0,1,0,1.94l-1.418.355-.355,1.418A1,1,0,0,1,20.5,12ZM16,14a1,1,0,0,0,2,0A1,1,0,0,0,16,14Zm6,4a1,1,0,0,0,2,0A1,1,0,0,0,22,18Z"></path>
                  </svg>
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 w-full px-4">
            <div className="cursor-pointer flex  flex-col  justify-between w-full px-4 py-2.5 gap-2">
              <div className="w-[100%] my-4 h-0 mx-auto outline-1 outline-offset-[-0.50px] outline-gray-400" />

              <div className="inline-flex relative flex-row items-center gap-2">
                <div className="absolute -top-[3rem] right-[4rem] w-full h-full z-[100]">
                  <BackgroundAimoonLogo />
                </div>
                <div className="absolute top-[10rem] -right-[3rem] w-full h-full z-[100]">
                  <div className="w-40 h-40 left-0 top-0 absolute origin-top-left rotate-180 opacity-50 bg-violet-300/30 rounded-full blur-2xl" />
                </div>
                <LogoutIcon
                  width={"1.25rem"}
                  height={"1.25rem"}
                  color={"#DC815D"}
                />
                <div className="   text-right justify-start text-primary-300 text-base font-bold  leading-tight tracking-tight">
                  خروج از حساب
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HumbergerMenu;
