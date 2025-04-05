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
        <Image src={vector} alt="plans-vevtor" className={""} />
        <div className="absolute top-0 inset-x-0">
          <div className="flex flex-col items-center justify-center mx-default">
            {/* title */}
            <div className="text-center text-Neutral-500 text-3xl font-bold mb-10">
              {t("plans_title")}
            </div>
            {/* content */}
            <div className="flex flex-row gap-20">
              <PlansBox options={freePlanOptions} />
              <PlansBox options={professionalPlanOptions} />
              <PlansBox options={vanguardPlanOptions} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
