import React from "react";
import { useTranslation } from "react-i18next";

// Components

import QuestionBox from "../components/faq/QuestionBox.jsx";

const FAQ = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden mb-28">
        <div className="width-theme px-default">
          {/* title */}
          <div className="text-center text-Neutral-500 text-3xl font-bold mb-28">
            {t("faq")}
          </div>
          {/* content */}
          <div className="flex flex-col w-full">
            <QuestionBox number={"01"} question={t("question_1")} answer={t("answer_1")} />
            <QuestionBox number={"02"} question={t("question_2")} answer={t("answer_2")} />
            <QuestionBox number={"03"} question={t("question_3")} answer={t("answer_3")} />
            <QuestionBox number={"04"} question={t("question_4")} answer={t("answer_4")} />

          </div>

        </div>
      </div>

    </>
  );
};

export default FAQ;
