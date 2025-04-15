import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx";
import QuestionBox from "../components/faq/QuestionBox.jsx";

// Svg

import plus from "../../../../assets/icons/svg/plus.svg";

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
            <QuestionBox number={"01"} question={"آیمون هاب دقیقا چه کاری انجام می‌دهد؟"} answer={"آیمون هاب یک ابزار هوشمند تحلیل اخبار کریپتو است که با استفاده از هوش مصنوعی، آخرین اخبار بازار را پردازش و تأثیر احتمالی آن‌ها بر قیمت‌ها را تحلیل می‌کند. این اطلاعات به‌صورت لحظه‌ای از طریق تلگرام در اختیار شما قرار می‌گیرد."} />
            <QuestionBox number={"02"} question={"آیا استفاده از ایمون هاب رایگان است؟"} answer={"آیمون هاب یک ابزار هوشمند تحلیل اخبار کریپتو است که با استفاده از هوش مصنوعی، آخرین اخبار بازار را پردازش و تأثیر احتمالی آن‌ها بر قیمت‌ها را تحلیل می‌کند. این اطلاعات به‌صورت لحظه‌ای از طریق تلگرام در اختیار شما قرار می‌گیرد."} />
            <QuestionBox number={"03"} question={"آیمون هاب چطور اخبار را تحلیل می‌کند؟"} answer={"آیمون هاب یک ابزار هوشمند تحلیل اخبار کریپتو است که با استفاده از هوش مصنوعی، آخرین اخبار بازار را پردازش و تأثیر احتمالی آن‌ها بر قیمت‌ها را تحلیل می‌کند. این اطلاعات به‌صورت لحظه‌ای از طریق تلگرام در اختیار شما قرار می‌گیرد."} />
            <QuestionBox number={"04"} question={"چطور می‌توانم اشتراک حرفه‌ای یا ویژه را بخرم؟"} answer={"آیمون هاب یک ابزار هوشمند تحلیل اخبار کریپتو است که با استفاده از هوش مصنوعی، آخرین اخبار بازار را پردازش و تأثیر احتمالی آن‌ها بر قیمت‌ها را تحلیل می‌کند. این اطلاعات به‌صورت لحظه‌ای از طریق تلگرام در اختیار شما قرار می‌گیرد."} />

          </div>

        </div>
      </div>

    </>
  );
};

export default FAQ;
