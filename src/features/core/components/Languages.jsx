// Languages.js
import React from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../../../../utils/services/i18n";

// Zustand

import useAppStore from "../../../app/stores/AppStore";

const Languages = () => {
  // hooks
  const { t } = useTranslation();

  // states and const
  const languageList = [
    { id: 'fa', flag: "IR", dir: "rtl", name: t('persion') },
    { id: 'en', flag: "GB", dir: "ltr", name: t('english') },
    { id: 'ar', flag: "AR", dir: "rtl", name: t('arabic') },
  ];
  const { languageApp, setLanguageApp } = useAppStore();

  // functions
  const changeLanguage = (id, dir) => {
    try {
      i18n.changeLanguage(id);

      const rootHtml = document.getElementById("root-html");
      if (rootHtml) {
        localStorage.setItem("currentLngId", id);
        localStorage.setItem("currentLngDir", dir);
        rootHtml.setAttribute("lang", id);
        rootHtml.setAttribute("dir", dir);
      }

      setLanguageApp(id);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };


  return (
    <div className='flex flex-row gap-2'>
      {languageList.map((row) => (
        <button
          key={row.id}
          onClick={() => changeLanguage(row.id, row.dir)}
          className={`cursor-pointer px-2 py-1 rounded ${languageApp === row.id
            ? 'bg-color-theme text-white'
            : 'hover:bg-color-theme-light dark:hover:bg-D-color-theme-light hover:text-color-theme dark:hover:text-D-color-theme'
            }`}
          aria-label={`Change language to ${row.name}`}
        >
          {row.name}
        </button>
      ))}
    </div>
  );
}

export default Languages;