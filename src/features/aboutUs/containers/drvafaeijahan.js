import React from "react";
import Slider from "../../core/components/Slider.jsx";
import { Image } from "../../core/components/Image.jsx";

import pic_dr from "../../../../assets/images/png/mvj-902.png";

const drvafaeijahan = () => {
  return (
    <>
      <div className="fixed inset-y-0 left-0  w-[calc(50%-50rem)] bg-white z-[100]"></div>
      <div className="fixed inset-y-0 right-0 w-[calc(50%-50rem)] bg-white z-[100]"></div>

      <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden left-to-right font-satoshi">
        {/* slider */}
        <div className="width-theme bg-zinc-700">
          <Slider className={"width-theme h-[950px] p-0"} visible_count={1}>
            <div className="width-theme h-full">
              <div className="w-full h-[500px] bg-zinc-700 flex flex-row px-[90px]">
                <div className="basis-4/10 w-full h-full flex flex-col justify-center">
                  <div className="relative h-full">
                    <div className="absolute -top-10 left-0">
                      <div className="w-[461.12px] justify-start text-green-400 text-2xl font-normal leading-relaxed mt-[80px]">
                        VafaeiJahanMajid@iau.ac.ir
                      </div>
                      <div className="w-[461.12px] justify-start text-green-400 text-2xl font-normal leading-relaxed">
                        VafaeiJahanMajid@gmail.com
                      </div>
                    </div>
                    <div className="absolute bottom-0 right-0 z-10">
                      <Image
                        src={pic_dr}
                        alt="puc_dr"
                        className={"w-[380px] h-[400px]"}
                      />
                    </div>
                    <div className="absolute bottom-3 left-0 text-white text-7xl font-medium leading-[134px] z-20">
                      Majid
                      <br />
                      Vafaei Jahan
                    </div>
                  </div>
                </div>
                <div className="basis-3/10 w-full h-full flex flex-col justify-center">
                  <div className="flex flex-row gap-1 p1-2">
                    <div className="w-3.5 h-1 bg-green-400 rounded-full" />
                    <div className="w-1 h-1 bg-green-400 rounded-full" />
                  </div>
                  <div className="opacity-60 text-white text-2xl font-normal leading-10">
                    Introduction
                  </div>
                  <div className="w-96 justify-start">
                    <span class="text-green-400 text-4xl font-medium leading-10">
                      Associate Professor
                    </span>
                    <span class="text-white text-4xl font-mediu leading-10">
                      | Blockchain & AI Innovator
                    </span>
                  </div>
                  <div className="w-[461.12px] opacity-70 justify-start text-white text-2xl font-normal leading-relaxed">
                    Associate Professor, Ph.D. in Intelligent Systems and Big
                    Data Analysis <br />
                    Islamic Azad University, Mashhad
                  </div>
                </div>
                <div className="basis-3/10 w-full h-full flex flex-col justify-center">
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
              <div className="width-theme h-[450px] inline-flex bg-gray-800 px-[90px] items-center">
                <div className="basis-1/3 w-full h-full flex flex-col justify-start px-2">
                  <div className="text-white text-4xl font-medium leading-10 mt-5">
                    <div className="w-[478px] h-20 bg-gray-700">
                      <div className="text-white text-xl font-bold leading-loose px-2">
                        Aimoonex/Cryptocurrency Exchange & Blockchain Security
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Focused on DeFi, smart contracts, and blockchain risk
                      modeling
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                        Predictive tools for crypto trading
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                        Research-based design for secure financial system
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/3 w-full h-full flex flex-col justify-start px-2">
                  <div className="text-white text-4xl font-medium leading-10 mt-5">
                    <div className="w-[478px] h-20 bg-green-500">
                      <div className="text-white text-xl font-bold leading-loose px-2">
                        Aimoonhub/ LLM-Powered Trading News Platform
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Analyzes trading news from +60 providers using AI
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                        Used by over +6,200 active users
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                        Cross-platform compatibility
                      </div>
                    </div>
                  </div>
                </div>
                <div className="basis-1/3 w-full h-full flex flex-col justify-start px-2">
                  <div className="text-white text-4xl font-medium leading-10 mt-5">
                    <div className="w-[478px] h-20 bg-gray-700">
                      <div className="text-white text-xl font-bold leading-loose px-2">
                        Noyaab/ AI-Driven Healthcare Management
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Predictive patient analytics
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                        Secure medical data sharing using blockchain
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                        Privacy-focused healthcare AI
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="width-theme h-full">
              <div className="h-[500px] bg-zinc-700"></div>
              <div className="width-theme h-[450px] inline-flex bg-gray-800 px-[90px]">
                <div className="basis-1/2 w-full h-full flex flex-col justify-center">
                  <div className="flex flex-row gap-1 p1-2">
                    <div className="w-3.5 h-1 bg-green-400 rounded-full" />
                    <div className="w-1 h-1 bg-green-400 rounded-full" />
                  </div>
                  <div className="text-white text-4xl font-medium leading-10 mt-5">
                    About Me
                  </div>
                  <div className="w-[461.12px] opacity-60 text-white text-2xl mt-5 font-medium leading-relaxed">
                    Associate Professor, Ph.D. in Intelligent Systems and Big
                    Data Analysis <br />
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
            <div className="width-theme h-full">
              <div className="h-[500px] bg-zinc-700"></div>
              <div className="width-theme h-[450px] inline-flex bg-gray-800 px-[90px]">
                <div className="basis-1/2 w-full h-full flex flex-col justify-center">
                  <div className="flex flex-row gap-1 p1-2">
                    <div className="w-3.5 h-1 bg-green-400 rounded-full" />
                    <div className="w-1 h-1 bg-green-400 rounded-full" />
                  </div>
                  <div className="text-white text-4xl font-medium leading-10 mt-5">
                    About Me
                  </div>
                  <div className="w-[461.12px] opacity-60 text-white text-2xl mt-5 font-medium leading-relaxed">
                    Associate Professor, Ph.D. in Intelligent Systems and Big
                    Data Analysis <br />
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
          </Slider>
        </div>

        {/* products */}

        {true && (
          <div className="width-theme h-full bg-zinc-700 flex flex-col px-[90px] py-[110px]">
            <div className="text-white text-4xl font-medium leading-10">
              Products & Ventures
            </div>
            <div className="w-[461.12px] opacity-60 text-white text-2xl font-medium leading-relaxed mt-6">
              I believe in a future where technology empowers health and
              well-being. My mission is to design tools that make decisions
              smarter, services faster, and lives bette
            </div>

            {/* aimoonx */}
            <div className="flex flex-row mt-[90px]">
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="w-[473.62px] h-[469.60px] relative bg-gray-700 overflow-hidden"></div>
              </div>
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="text-white text-4xl font-medium leading-10">
                  Aimoonex
                </div>
                <div className="opacity-40 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed mt-2">
                  Cryptocurrency Exchange & Blockchain Security
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Focused on DeFi, smart contracts, and blockchain risk
                      modeling
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Predictive tools for crypto trading
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Research-based design for secure financial system
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* aimoonhub */}
            <div className="flex flex-row-reverse mt-[90px]">
              <div className="basis-1/2 w-full h-full flex flex-col justify-start items-end">
                <div className="w-[473.62px] h-[469.60px] relative bg-gray-700 overflow-hidden"></div>
              </div>
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="text-white text-4xl font-medium leading-10">
                  Aimoonhub
                </div>
                <div className="opacity-40 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed mt-2">
                  LLM-Powered Trading News Platform
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Analyzes trading news from 60+ providers using AI
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Used by over +6,200 active users
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Cross-platform compatibility
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* noyab */}
            <div className="flex flex-row mt-[90px]">
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="w-[473.62px] h-[469.60px] relative bg-gray-700 overflow-hidden"></div>
              </div>
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="text-white text-4xl font-medium leading-10">
                  Noyaab
                </div>
                <div className="opacity-40 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed mt-2">
                  AI-Driven Healthcare Management
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Predictive patient analytics
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Secure medical data sharing using blockchain
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Privacy-focused healthcare AI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* noban */}
            <div className="flex flex-row-reverse mt-[90px]">
              <div className="basis-1/2 w-full h-full flex flex-col justify-start items-end">
                <div className="w-[473.62px] h-[469.60px] relative bg-gray-700 overflow-hidden"></div>
              </div>
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="text-white text-4xl font-medium leading-10">
                  Noban
                </div>
                <div className="opacity-40 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed mt-2">
                  LLM-Powered Trading News Platform
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Analyzes trading news from 60+ providers using AI
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Used by over +6,200 active users
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Cross-platform compatibility
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sinapay */}
            <div className="flex flex-row mt-[90px]">
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="w-[473.62px] h-[469.60px] relative bg-gray-700 overflow-hidden"></div>
              </div>
              <div className="basis-1/2 w-full h-full flex flex-col justify-start">
                <div className="text-white text-4xl font-medium leading-10">
                  Sinapay
                </div>
                <div className="opacity-40 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed mt-2">
                  Focused on DeFi, smart contracts, and blockchain risk modeling
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Predictive tools for crypto trading
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Secure medical data sharing using blockchain
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Research-based design for secure financial system
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* footer */}
        <div className="width-theme flex flex-col bg-gray-800 py-[130px] px-[90px]">
          <div className="text-white text-4xl font-medium leading-10">
            Contact
          </div>
          <div className="w-[461.12px] opacity-60 justify-start text-white text-2xl font-normal leading-relaxed mt-[20px]">
            Ready to build the next generation of digital products? Let’s
            connect.
          </div>
          <div className="w-[461.12px] justify-start text-green-400 text-2xl font-normal leading-relaxed mt-[80px]">
            VafaeiJahanMajid@iau.ac.ir
          </div>
          <div className="w-[461.12px] justify-start text-green-400 text-2xl font-normal leading-relaxed">
            VafaeiJahanMajid@gmail.com
          </div>
        </div>
      </div>
    </>
  );
};

export default drvafaeijahan;
