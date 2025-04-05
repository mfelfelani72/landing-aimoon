import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx";
import PlansBox from "../../core/components/PlansBox.jsx";

// Svg

import vector from "../../../../assets/images/vector/vector-plans.svg";

const Plans = () => {
  // hooks
  const { t } = useTranslation();
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
              <PlansBox />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
