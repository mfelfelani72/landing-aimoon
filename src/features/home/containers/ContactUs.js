import React from "react";

// Components

import { ButtonNoLink } from "../../core/components/Button.jsx";
import {
  InputText,
  InputEmail,
  InputTextArea,
} from "../../core/components/Input.jsx";

const ContactUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-default">
        <div className="text-center text-Neutral-500 text-3xl font-bold">
          با ما در ارتباط باشید
        </div>
        <div className="w-[647px] pt-4 text-center text-Neutral-500 text-xl font-normal">
          یک قدم جلوتر از بازار باشید! با تحلیل‌های هوشمند ایمون هاب، تأثیر
          اخبار بر معاملات خود را سریع‌تر از دیگران درک کنید و تصمیم‌های آگاهانه
          بگیرید
        </div>

        <div className="flex flex-col w-[1105.76px] h-[677.69px] mt-12 mb-10 rounded-[20px] border border-Neutral-100">
          <form className="px-14 pt-6 pb-13">
            {/* name and last name */}
            <div className="flex flex-row w-full gap-4">
              <div className="basis-1/2">
                <InputText id="name" label="نام" />
              </div>
              <div className="basis-1/2">
                <InputText id="last_name" label="نام خانوادگی" />
              </div>
            </div>
            {/* email */}
            <div className="mt-5">
              <InputEmail id="email" label="ایمیل" />
            </div>
            {/* email */}
            <div className="mt-5">
              <InputTextArea id="message" label="پیام خود را در کادر زیر بنویسید" rows={"7"} />
            </div>
            <div>
              <ButtonNoLink className={"w-full h-20 mt-8"}>ارسال</ButtonNoLink>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
