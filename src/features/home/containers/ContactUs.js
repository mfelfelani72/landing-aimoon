import React from "react";
import { useTranslation } from "react-i18next";

// Components

import { ButtonNoLink } from "../../core/components/Button.jsx";
import {
  InputText,
  InputEmail,
  InputTextArea,
} from "../../core/components/Input.jsx";

const ContactUs = () => {
  // hooks
  const { t } = useTranslation();
  return (
    <>
      {/* <div className="container mx-auto bg-Error-50"> */}
      <div className="flex flex-col items-center justify-center mx-default">
        <div className="text-center text-Neutral-500 text-3xl font-bold">
          {t("contact_us")}
        </div>
        <div className="w-full px-[5rem] pt-4 text-center text-Neutral-500 text-xl font-normal">
          {t("title_contact_us")}
        </div>

        <div className="flex flex-col w-full h-[677.69px] mt-12 mb-10 rounded-[20px] border border-Neutral-100">
          <form className="px-14 pt-6 pb-13">
            {/* name and last name */}
            <div className="flex flex-row w-full gap-4">
              <div className="basis-1/2">
                <InputText id="name" label={t("name")} />
              </div>
              <div className="basis-1/2">
                <InputText id="last_name" label={t("last_name")} />
              </div>
            </div>
            {/* email */}
            <div className="mt-5">
              <InputEmail id="email" label={t("email")} />
            </div>
            {/* message  */}
            <div className="mt-5">
              <InputTextArea
                id="message"
                label={t("write_here_message")}
                rows={"7"}
              />
            </div>
            <div>
              <ButtonNoLink className={"w-full h-20 mt-8"}>
                {t("send")}
              </ButtonNoLink>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default ContactUs;
