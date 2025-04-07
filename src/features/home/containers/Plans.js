import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx";
import PlansBox from "../../core/components/PlansBox.jsx";
import RegisterAimoonex from "../components/plans/RegisterAimoonex.jsx";

// Svg

import vector from "../../../../assets/images/vector/vector-plans.svg";

const Plans = () => {
  // hooks
  const { t } = useTranslation();

  // states
  const [freePlanOptions, setFreePlanOptions] = useState([
    { title: "bot_telegram", value: true },
    { title: "user_aimoonhub", value: true },
    { title: "news_analysis", value: true },
    { title: "coins_analysis", value: false },
    { title: "news_dashboard", value: false },
    { title: "reporter_dashboard", value: false },
  ]);
  const [professionalPlanOptions, setProfessionalPlanOptions] = useState([
    { title: "bot_telegram", value: true },
    { title: "user_aimoonhub", value: true },
    { title: "news_analysis", value: true },
    { title: "coins_analysis", value: true },
    { title: "news_dashboard", value: false },
    { title: "reporter_dashboard", value: false },
  ]);
  const [vanguardPlanOptions, setVanguardPlanOptions] = useState([
    { title: "bot_telegram", value: true },
    { title: "user_aimoonhub", value: true },
    { title: "news_analysis", value: true },
    { title: "coins_analysis", value: true },
    { title: "news_dashboard", value: true },
    { title: "reporter_dashboard", value: true },
  ]);

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full overflow-x-hidden">
        <div className="relative width-theme">
          <Image src={vector} alt="plans-vevtor" className={"width-theme h-full object-none mt-[13rem]"} />
          <div className="absolute top-0 inset-x-0">
            <div className="flex flex-col items-center justify-center mx-default">
              {/* title */}
              <div className="text-center text-Neutral-500 text-3xl font-bold">
                {t("plans_title")}
              </div>
              {/* content */}
              <div className="flex flex-row gap-20">
                <PlansBox
                  name={t("base_plan")}
                  buttonName={"تست رایگان"}
                  price={t("free")}
                  description={"تصمیمات تریدت رو هوشمند کن – الان شروع کن!"}
                  options={freePlanOptions}
                />
                <PlansBox
                  className={"mt-24"}
                  name={t("professional_plan")}
                  buttonName={"خرید"}
                  buttonClassName={"bg-transparent border border-primary-400 text-primary-400 text-base font-bold hover:bg-transparent"}
                  price={t("5$")}
                  description={
                    "یک قدم جلوتر از بازار! تحلیل عمیق و بینش حرفه‌ای برای تریدرهای باهوش"
                  }
                  options={professionalPlanOptions}
                />
                <PlansBox
                  className={"mt-64"}
                  name={t("vanguard_plan")}
                  buttonName={"خرید"}
                  buttonClassName={"bg-transparent border border-primary-400 text-primary-400 text-base font-bold hover:bg-transparent"}
                  price={t("10$")}
                  description={
                    "تمام ابزارهای حرفه‌ای در دستان شما! از اخبار تا تحلیل‌های دقیق، همه‌چیز را در یک پلتفرم داشته باشید"
                  }
                  options={vanguardPlanOptions}
                />
              </div>
              <div className="relative w-full">
                {/* circle and table */}
                <div className="absolute top-[5rem] inset-x-0 inline-flex justify-center items-center">
                  <div className="w-80 h-80 mt-[2rem] opacity-20 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_rgba(145,_118,_234,_0)_3%,_#9176EA_41%,_rgba(81.79,_66.56,_132,_0)_100%)] rounded-full blur-2xl z-10" >
                  </div>

                  {/* table shape */}
                  {/* columns */}
                  <div className="absolute -top-[2rem] inset-x-0 inline-flex items-center justify-center gap-20">

                    <div className="flex flex-row items-center justify-center gap-[6.5rem]">
                      <div className="w-0 h-[522.38px]">
                        <div className=" w-[7px] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-0 h-[522.38px]">
                        <div className=" w-[7px] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-0 h-[522.38px]">
                        <div className=" w-[7px] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-0 h-[522.38px]">
                        <div className=" w-[7px] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-0 h-[522.38px]">
                        <div className="w-[7px] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-0 h-[522.38px]">
                        <div className="w-[7px] h-full bg-gradient-to-b from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                    </div>


                  </div>
                  {/* rows */}
                  <div className="absolute top-[6rem] inset-x-0 inline-flex items-center justify-center gap-20">
                    <div className="flex flex-col items-center justify-center gap-[6.5rem]">
                      <div className="w-[700px] h-0">
                        <div className="w-full h-[7px] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-[700px] h-0">
                        <div className="w-full h-[7px] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-[700px] h-0">
                        <div className="w-full h-[7px] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                      <div className="w-[700px] h-0">
                        <div className="w-full h-[7px] bg-gradient-to-r from-[#161521] via-Neutral-500 to-[#161521]"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* text and input */}
                <div className="absolute top-0 inset-x-0 inline-flex justify-center items-center">
                  <div className="flex flex-col items-center justify-center w-[40rem]">
                    <div className="text-white mt-44 text-center">
                      <span className="text-[32px] font-bold">
                        با عضویت در پنل{" "}
                      </span>
                      <span className="px-2 text-primary-400 text-[32px] font-bold uppercase">
                        آیمونیکس
                      </span>
                      <span className="text-[32px] font-bold">
                        {" "}
                        می‌توانید به صورت رایگان از پکیج پیشتاز آیمون هاب برخوردار شوید
                      </span>
                    </div>
                    <div className="w-[647px]  text-center  text-Neutral-100 text-xl font-normal mt-[24px]">
                      یک قدم جلوتر از بازار باشید! با تحلیل‌های هوشمند ایمون هاب، تأثیر
                      اخبار بر معاملات خود را سریع‌تر از دیگران درک کنید و تصمیم‌های
                      آگاهانه بگیرید
                    </div>


                  </div>
                </div>
              </div>

              <RegisterAimoonex />


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
