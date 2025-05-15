import React from "react";
import { DesktopNavCoin, DesktopNavActiveOuter } from "../../core/components/Icon.jsx";
const HumbergerMenu = () => {
  return (
    <>
      <div className="w-[95%] h-full rtl:mr-[3rem] ltr:ml-[3rem] bg-blue-600">
      <div className="relative inline-flex flex-col justify-between px-3">
        <div  className="flex flex-col items-end  gap-2 w-full">
          <div></div>
          <div></div>
          <div  className="flex flex-col items-end  gap-2">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>

          </div>
        </div>
        <div  className="flex flex-col items-end gap-2 w-full px-4">
        <div className="cursor-pointer flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
              <div className="flex flex-row  gap-2">
                <DesktopNavCoin
                  width={"1.5rem"}
                  height={"1.5rem"}
                  color={"#DC815D"}
                />
                <div className=" text-[#DC815D] text-base  font-bold leading-9">
                  Coins Dashboard
                </div>
              </div>

              <DesktopNavActiveOuter width={"1.5rem"} height={"1.5rem"} />
            </div>

        </div>
      </div>
      </div>
    </>
  );
};

export default HumbergerMenu;
