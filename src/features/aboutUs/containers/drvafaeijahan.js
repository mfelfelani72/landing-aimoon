import React from "react";

const drvafaeijahan = () => {
  return (
    <>
      <div className="fixed inset-y-0 left-0  w-[calc(50%-50rem)] bg-white z-[100]"></div>
      <div className="fixed inset-y-0 right-0 w-[calc(50%-50rem)] bg-white z-[100]"></div>

      <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden left-to-right font-satoshi">
        {/* slider */}
        {/* <div className="w-full h-[710.89px] bg-zinc-700"></div> */}

        <div className="width-theme h-[583px] inline-flex bg-gray-800 px-[150px]">
          <div className="basis-1/2 w-full h-full flex flex-col justify-center">
            <div className="flex flex-row gap-1 p1-2">
              <div className="w-3.5 h-1 bg-green-400 rounded-full" />
              <div className="w-1 h-1 bg-green-400 rounded-full" />
            </div>
            <div className="text-white text-4xl font-medium leading-10 mt-5">
              About Me
            </div>
            <div className="w-[461.12px] opacity-60 text-white text-2xl mt-5 font-medium leading-relaxed">
              Associate Professor, Ph.D. in Intelligent Systems and Big Data
              Analysis <br />
              Islamic Azad University, Mashhad
            </div>
          </div>
          <div className="basis-1/2 w-full h-full flex flex-col justify-center">
            <div className="text-white text-4xl font-medium leading-10">
              Skills & Expertise
            </div>
            <div className="flex flex-row gap-2 w-full items-center mt-5">
              <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
              <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                Blockchain & Cryptocurrency Systems
              </div>
            </div>
            <div className="flex flex-row gap-2 w-full items-center mt-5">
              <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
              <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                  Advanced Data Analysis
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-full items-center mt-5">
              <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
              <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                  Machine Learning & Pattern Recognitio
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-2 w-full items-center mt-5">
              <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
              <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                  Research Leadership & Collaboration
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default drvafaeijahan;
