import React, { useState } from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx";
import PlansBox from "../../core/components/PlansBox.jsx";

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
      <div className="relative w-full">
        <Image src={vector} alt="plans-vevtor" className={"w-[2000px] h-[1618px]"} />
        <div className="absolute top-0 inset-x-0">
          <div className="flex flex-col items-center justify-center mx-default">
            {/* title */}
            <div className="text-center text-Neutral-500 text-3xl font-bold mb-5">
              {t("plans_title")}
            </div>
            {/* content */}
            <div className="flex flex-row gap-20">
              <PlansBox
                name={t("base_plan")}
                price={t("free")}
                description={"تصمیمات تریدت رو هوشمند کن – الان شروع کن!"}
                options={freePlanOptions}
              />
              <PlansBox
                className={"mt-16"}
                name={t("professional_plan")}
                price={t("5$")}
                description={
                  "یک قدم جلوتر از بازار! تحلیل عمیق و بینش حرفه‌ای برای تریدرهای باهوش"
                }
                options={professionalPlanOptions}
              />
              <PlansBox
                className={"mt-40"}
                name={t("vanguard_plan")}
                price={t("10$")}
                description={
                  "تمام ابزارهای حرفه‌ای در دستان شما! از اخبار تا تحلیل‌های دقیق، همه‌چیز را در یک پلتفرم داشته باشید"
                }
                options={vanguardPlanOptions}
              />
            </div>
            <div className="text-white mt-44">
              <span class="text-white text-[32px] font-bold">
                با عضویت در پنل
              </span>
              <span class="px-2 text-primary-400 text-[32px] font-bold">
                آیمونیکس
              </span>
              <span class="text-white text-[32px] font-bold">
                می‌توانید به صورت رایگان از پکیج پیشتاز آیمون هاب برخوردار شوید
              </span>
            </div>
            <div className="w-[647px]  text-center  text-Neutral-100 text-xl font-normal ">
              یک قدم جلوتر از بازار باشید! با تحلیل‌های هوشمند ایمون هاب، تأثیر
              اخبار بر معاملات خود را سریع‌تر از دیگران درک کنید و تصمیم‌های
              آگاهانه بگیرید
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
