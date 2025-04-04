import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { Image } from "../../core/components/Image.jsx";

// Svg

import plus from "../../../../assets/icons/svg/plus.svg";

const FAQ = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      <div className="flex flex-col items-center justify-center mx-default mb-28">
        {/* title */}
        <div className="text-center text-Neutral-500 text-3xl font-bold mb-28">
          {t("faq")}
        </div>
        {/* content */}
        <div className="flex flex-col w-full">
          <div className="flex flex-row pb-14 border-b-1 border-secondary-50">
            <div className="basis-1/12 text-secondary-200 text-5xl font-normal font-spaceGrotesk">
              01
            </div>
            <div className="basis-10/12 flex flex-col">
              <div className="justify-center text-Neutral-500 text-4xl font-medium leading-10">
              آیمون هاب دقیقا چه کاری انجام می‌دهد؟
              </div>
              <div className="text-Neutral-300 text-xl font-normal leading-7 mt-8">
                آیمون هاب یک ابزار هوشمند تحلیل اخبار کریپتو است که با استفاده
                از هوش مصنوعی، آخرین اخبار بازار را پردازش و تأثیر احتمالی آن‌ها
                بر قیمت‌ها را تحلیل می‌کند. این اطلاعات به‌صورت لحظه‌ای از طریق
                تلگرام در اختیار شما قرار می‌گیرد.
              </div>
            </div>

            <div className="basis-1/12 flex flex-row justify-end">
              <Image src={plus} alt="plus" className={"w-12 h-12 rotate-45"} />
            </div>
          </div>
          <div className="flex flex-row py-14 border-b-1 border-secondary-50">
            <div className="basis-1/12 text-secondary-200 text-5xl font-normal font-spaceGrotesk">
              02
            </div>
            <div className="basis-10/12 flex flex-col">
              <div className="justify-center text-Neutral-500 text-4xl font-medium leading-10">
                آیا استفاده از ایمون هاب رایگان است؟
              </div>
              {/* <div className="text-Neutral-300 text-xl font-normal leading-7 mt-8">
               
              </div> */}
            </div>

            <div className="basis-1/12 flex flex-row justify-end">
              <Image src={plus} alt="plus" className={"w-12 h-12"} />
            </div>
          </div>
          <div className="flex flex-row py-14 border-b-1 border-secondary-50">
            <div className="basis-1/12 text-secondary-200 text-5xl font-normal font-spaceGrotesk">
              03
            </div>
            <div className="basis-10/12 flex flex-col">
              <div className="justify-center text-Neutral-500 text-4xl font-medium leading-10">
                آیمون هاب چطور اخبار را تحلیل می‌کند؟
              </div>
              {/* <div className="text-Neutral-300 text-xl font-normal leading-7 mt-8">
               
              </div> */}
            </div>

            <div className="basis-1/12 flex flex-row justify-end">
              <Image src={plus} alt="plus" className={"w-12 h-12"} />
            </div>
          </div>
          <div className="flex flex-row pt-14">
            <div className="basis-1/12 text-secondary-200 text-5xl font-normal font-spaceGrotesk">
              04
            </div>
            <div className="basis-10/12 flex flex-col">
              <div className="justify-center text-Neutral-500 text-4xl font-medium leading-10">
                چطور می‌توانم اشتراک حرفه‌ای یا ویژه را بخرم؟
              </div>
              {/* <div className="text-Neutral-300 text-xl font-normal leading-7 mt-8">
               
              </div> */}
            </div>

            <div className="basis-1/12 flex flex-row justify-end">
              <Image src={plus} alt="plus" className={"w-12 h-12"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
