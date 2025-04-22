import React from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../../../../utils/services/i18n";

// Functions

import { cn } from '../../../../utils/lib/cn';

// Zustand

import useAppStore from "../../../app/stores/AppStore";

const Languages = ({ className, ...props }) => {
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
    <div className={cn("relative group", className)}>
      <button
        className="cursor-pointer px-3 py-1 rounded text-primary-400 font-bold uppercase"
        aria-label="Language selector"
      >
        {languageList.find(lang => lang.id === languageApp)?.id || 'Language'}

      </button>

      <div className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-1 z-10 min-w-full">
        {languageList.map((row) => (
          <button
            key={row.id}
            onClick={() => changeLanguage(row.id, row.dir)}
            className={`cursor-pointer w-full text-left px-3 py-2 hover:bg-primary-50  ${languageApp === row.id ? 'font-bold text-primary-400' : ''
              }`}
            aria-label={`Change language to ${row.name}`}
          >
            {row.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Languages;