import React from "react";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-default">
        <div className="text-center text-Neutral-500 text-3xl font-bold">
          {t("faq")}
        </div>
      </div>
    </>
  );
};

export default FAQ;
