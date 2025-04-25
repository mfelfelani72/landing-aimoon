import React from "react";
import Slider from "../../core/components/Slider.jsx";
import { Image } from "../../core/components/Image.jsx";

import pic_dr from "../../../../assets/images/png/mvj-902.png";

const Drvafaeijahan = () => {
  return (
    <>
      <div className="fixed inset-y-0 left-0 w-[calc(50%-50rem)] bg-white z-[100]"></div>
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
                    <span className="text-green-400 text-4xl font-medium leading-10">
                      Associate Professor
                    </span>
                    <span className="text-white text-4xl font-medium leading-10">
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
                      Advanced Data Analysis
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Machine Learning & Pattern Recognition
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Research Leadership & Collaboration
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
                      Predictive tools for crypto trading
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Research-based design for secure financial system
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
                      Used by over +6,200 active users
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Cross-platform compatibility
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
                      Secure medical data sharing using blockchain
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Privacy-focused healthcare AI
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full">
              <div className="width-theme h-full relative bg-gray-800 overflow-hidden">
                <div className="width-theme h-0 left-[0.07px] top-0 absolute outline-[5px] outline-offset-[-2.50px] outline-green-400" />
                <div className="w-[600px] left-0 top-[300px] absolute justify-start px-[90px]">
                  <span class="text-green-400 text-3xl font-semibold leading-9">
                    1
                  </span>
                  <span class="text-white text-xl font-normal leading-9">
                    . MinCache: A hybrid cache system for efficient chatbots
                    with hierarchical embedding matching and LLM
                  </span>
                  <span class="text-white/50 text-xl font-normal leading-9">
                    <br />
                    - *Journal*: Future Generation Computer Systems
                    <br /> - *Impact Factor*: 7.187 (2025)
                  </span>

                  <span class="text-green-400 text-xl font-semibold leading-9">
                    <br />2
                  </span>
                  <span class="text-white text-xl font-normal leading-9">
                    . An Adaptive Multimodal Learning Model for Financial Market
                    Price Prediction
                  </span>
                  <span class="text-white/50 text-xl font-normal leading-9">
                    {" "}
                    - *Journal*: IEEE Access
                    <br /> - *Impact Factor*: 3.367 (2024)
                  </span>

                  <span class="text-green-400 text-xl font-semibold leading-9">
                    <br />3
                  </span>
                  <span class="text-white text-xl font-normal leading-9">
                    . Investigating the informativeness of technical indicators
                    and news sentiment in financial market price prediction
                  </span>
                  <span class="text-white/50 text-xl font-normal leading-9">
                    <br />
                    - *Journal*: Knowledge-Based Systems
                    <br /> - *Impact Factor*: 8.139 (2022)
                  </span>
                </div>
                <div className="width-theme px-[90px] left-0 top-[83px] absolute text-white text-2xl font-bold leading-9">
                  Dr. Majid Vafaei Jahan is a prominent researcher whose
                  innovative contributions span financial market analysis,
                  distributed systems, and data clustering, reflecting a
                  profound impact on both academia and industry, some his latest
                  industrial paper are:
                </div>
                <div className="w-[500px] left-[850px] top-[300px] absolute justify-start">
                  <span class="text-green-400 text-xl font-semibold leading-9">
                    4
                  </span>
                  <span class="text-white text-xl font-normal leading-9">
                    . From Text Representation to Financial Market Prediction: A
                    Literature Review
                  </span>
                  <span class="text-white/50 text-xl font-normal leading-9">
                    <br />- *Journal*: Information
                    <br />- *Impact Factor*: 2.419 (2022)
                  </span>
                  <span class="text-green-400 text-xl font-semibold leading-9">
                    <br />5
                  </span>
                  <span class="text-white text-xl font-normal leading-9">
                    . Leveraging Latent Economic Concepts and Sentiments in the
                    News for Market Prediction
                    <br />
                  </span>
                  <span class="text-white/50 text-xl font-normal leading-9">
                    - *Conference*: IEEE DSAA (Data Science and Advanced
                    Analytics)
                    <br />
                  </span>
                  <span class="text-green-400 text-xl font-semibold leading-9">
                    6
                  </span>
                  <span class="text-white text-xl font-normal leading-9">
                    . A Density-Based Clustering Approach to Distinguish Between
                    Web Robot and Human Requests to a Web Server
                    <br />
                  </span>
                  <span class="text-white/50 text-xl font-normal leading-9">
                    - *Journal*: ISC International Journal of Information
                    Security
                    <br />- *Impact Factor*: Not available
                  </span>
                </div>
                <div className="w-[1916.50px] h-0 left-[11.50px] top-[238px] absolute outline-1 outline-offset-[-0.50px] outline-green-400" />
                <div className="w-0 h-[847px] left-[750px] top-[238px] absolute outline-1 outline-offset-[-0.50px] outline-green-400" />
              </div>
            </div>
            <div className="width-theme h-full">
              <div className="h-[500px] flex flex-col items-center justify-center bg-zinc-700">
                <div className="w-[1323px] text-center justify-start">
                  <span className="text-white text-6xl font-medium leading-[98px]">
                    CEO of{" "}
                  </span>
                  <span className="text-green-400 text-6xl font-medium leading-[98px]">
                    Noavaran
                  </span>
                  <span className="text-white text-6xl font-medium leading-[98px]">
                    , <br />
                  </span>
                  <span className="text-green-400 text-6xl font-medium leading-[98px]">
                    Hooshmand Sazan
                  </span>
                  <span className="text-white text-6xl font-medium leading-[98px]">
                    , and{" "}
                  </span>
                  <span className="text-green-400 text-6xl font-medium leading-[98px]">
                    Shahr Afzar
                  </span>
                </div>
                <div className="w-[639px] opacity-70 text-center justify-start text-white text-3xl font-normal leading-10">
                  Leading innovation across three dynamic tech-driven companies,
                  shaping the future of digital health and smart solutions.
                  <br />
                </div>
              </div>
              <div className="width-theme h-[450px] inline-flex bg-gray-800 px-[90px]">
                <div className="basis-1/3 w-full h-full flex flex-col justify-start px-2">
                  <div className="w-[478px] h-20 bg-gray-700 mt-5">
                    <div className="text-white text-xl font-bold leading-loose px-2 h-full inline-flex items-center">
                      Hoshmand Sazan/ Driving Healthcare Innovation
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Hoshmand Sazan empowers healthcare with apps like Nobaan
                      for e-appointments and Noyaab, an AI medical assistant.
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal font-['Yekan_Bakh'] leading-relaxed">
                      With Sinapai, the company enhances physical health by
                      improving blood circulation through tech-driven wellness
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Hoshmand Sazan integrates Nobaan, Sinapai, and Noyaab to
                      drive digital healthcare transformation and accessibility.
                    </div>
                  </div>
                </div>
                <div className="basis-1/3 w-full h-full flex flex-col justify-start px-2">
                  <div className="text-white text-4xl font-medium leading-10 mt-5">
                    <div className="w-[478px] h-20 bg-green-500">
                      <div className="text-white text-xl font-bold leading-loose px-2 h-full inline-flex items-center">
                        Noavaran/ AI-Centric Innovation
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Noavaran focuses on advancing artificial intelligence
                      technologies to drive transformative solutions.
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Diverse Platforms: Home to Aimoonhub, an LLM-powered news
                      platform, and Aimoonex, a cryptocurrency exchange and
                      trading platform.
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal font-['Yekan_Bakh'] leading-relaxed">
                      Future-Forward Vision: Dedicated to leveraging
                      cutting-edge technology to shape dynamic, efficient, and
                      scalable digital ecosystems.
                    </div>
                  </div>
                </div>
                <div className="basis-1/3 w-full h-full flex flex-col justify-start px-2">
                  <div className="text-white text-4xl font-medium leading-10 mt-5">
                    <div className="w-[478px] h-20 bg-gray-700">
                      <div className="text-white text-xl font-bold leading-loose px-2 h-full inline-flex items-center">
                        ShahrAfzar/Empowering Businesses Through Cloud
                        Innovation
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal leading-relaxed">
                      ShahrAfzar provides advanced cloud solutions to boost
                      efficiency, scalability, and reduce costs across
                      industries.
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal leading-relaxed">
                      Specializing in AI, it offers cutting-edge machine
                      learning and data-driven tech to power intelligent
                      systems.
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 w-full items-center mt-5">
                    <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                    <div className="opacity-70 justify-start text-white text-lg font-normal leading-relaxed">
                      Committed to tech innovation, ShahrAfzar builds resilient
                      platforms that tackle today’s digital challenges.
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
              smarter, services faster, and lives better
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
                    Focused on DeFi, smart contracts, and blockchain risk
                    modeling
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Predictive tools for crypto trading
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Research-based design for secure financial system
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
                    Analyzes trading news from 60+ providers using AI
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Used by over +6,200 active users
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Cross-platform compatibility
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
                    Predictive patient analytics
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Secure medical data sharing using blockchain
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Privacy-focused healthcare AI
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
                    Analyzes trading news from 60+ providers using AI
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Used by over +6,200 active users
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Cross-platform compatibility
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
                    Predictive tools for crypto trading
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Secure medical data sharing using blockchain
                  </div>
                </div>
                <div className="flex flex-row gap-2 w-full items-center mt-5">
                  <div className="w-3.5 h-3.5 bg-green-400 rounded-full" />
                  <div className="opacity-70 justify-start text-white text-2xl font-normal font-['Yekan_Bakh'] leading-relaxed">
                    Research-based design for secure financial system
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
            Ready to build the next generation of digital products? Let's
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

export default Drvafaeijahan;
