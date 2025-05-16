import React from "react";
import { DesktopNavCoin, DesktopNavActiveOuter } from "../../core/components/Icon.jsx";
const HumbergerMenu = () => {
  return (
    <>

<div className="w-[95%] h-full rtl:mr-[3rem] ltr:ml-[3rem]  relative">
        <div className="relative inline-flex w-full h-full flex-col justify-between px-3 py-8">
          <div  className="flex flex-col items-end  gap-2 w-full">
            <div></div>
            <div></div>
            <div  className="flex flex-col items-end  gap-2">
              <div className="cursor-pointer flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
                <div className="flex flex-row px-4 py-6 gap-2">
                    ICON
                    <div className=" text-[#DC815D] text-base   font-bold leading-9">
                        اعلانات
                    </div>
                  </div>
              </div>
              <div className="cursor-pointer flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
                <div className="flex flex-row px-4 py-6 gap-2">
                    ICON
                    <div className=" text-[#DC815D] text-base   font-bold leading-9">
                        درباره آیمون هاب
                    </div>
                  </div>
              </div>
              <div className="cursor-pointer flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
                <div className="flex flex-row px-4 py-6 gap-2">
                    ICON
                    <div className=" text-[#DC815D] text-base   font-bold leading-9">
                        تغییر زبان
                    </div>
                  </div>
              </div>
              <div className="cursor-pointer flex  flex-row  justify-between  items-center w-full px-4 py-2.5 gap-2">
                <div className="flex flex-row px-4 py-6 gap-2">
                    ICON
                    <div className=" text-[#DC815D] text-base   font-bold leading-9">
                        حالت روشن
                    </div>
                  </div>
                 

                  <label
                  className="cursor-pointer relative w-[52px] h-[32px] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_4px_0px_rgb(18,18,18,0.25),0px_4px_8px_0px_rgb(18,18,18,0.35)]"
                >
                 
                  <span
                    className="absolute inset-[2px] rounded-full border border-[hsl(0,0%,25%)]"
                  ></span>
                
               
                  <div
                    className="absolute left-[4px] top-1/2 flex h-[20px] w-[20px] -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-[inset_0px_2px_2px_0px_hsl(0,0%,85%)]"
                  >
                    <div
                      className="h-[14px] w-[14px] rounded-full bg-[hsl(0,0%,7%)] shadow-[0px_2px_2px_0px_hsl(0,0%,85%)]"
                    ></div>
                  </div>
                
                 
                  <div
                    className="absolute right-[4px] top-1/2 h-[2px] w-[16px] -translate-y-1/2 rounded-full bg-[hsl(0,0%,50%)] shadow-[inset_0px_2px_1px_0px_hsl(0,0%,40%)]"
                  ></div>
                
                
                  <input className="peer absolute inset-0 w-full h-full opacity-0" type="checkbox" />
                
               
                  <span
                    className="absolute left-[4px] top-1/2 flex h-[24px] w-[24px] -translate-y-1/2 items-center justify-center rounded-full bg-[rgb(26,26,26)] shadow-[inset_2px_2px_2px_0px_rgba(64,64,64,0.25),inset_-2px_-2px_2px_0px_rgba(16,16,16,0.5)] transition-all duration-300 peer-checked:left-[calc(100%-28px)]"
                  >
                    <span className="relative h-full w-full rounded-full">
                      <span
                        className="absolute inset-[2px] rounded-full border border-[hsl(0,0%,50%)]"
                      ></span>
                    </span>
                  </span>
                </label>
                

  
              </div>
            
  
            </div>
          </div>
          <div  className="flex flex-col items-end gap-2 w-full px-4">
          <div className="cursor-pointer flex  flex-row  justify-between w-full px-4 py-2.5 gap-2">
            <div className="w-[60%] my-4 h-0 mx-auto outline-1 outline-offset-[-0.50px] outline-gray-400" />

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
