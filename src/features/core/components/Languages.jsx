import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import i18n from "../../../../utils/services/i18n";

// Functions

import { cn } from '../../../../utils/lib/cn';

// Zustand

import useAppStore from "../../../app/stores/AppStore";

const Languages = ({ className, ...props }) => {
  // hooks
  const { t } = useTranslation();

  // states and consts
  const { languageApp, setLanguageApp } = useAppStore();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const languageList = [
    { id: 'fa', flag: "IR", dir: "rtl", name: t('persion') },
    { id: 'en', flag: "GB", dir: "ltr", name: t('english') },
    { id: 'ar', flag: "IQ", dir: "rtl", name: t('arabic') },
  ];

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
      setIsOpen(false);
    } catch (error) {
      console.error("Failed to change language:", error);
    }
  };

  const getFlagEmoji = (countryCode) => {
    try {
      return String.fromCodePoint(...[...countryCode].map(c => 127397 + c.charCodeAt()));
    } catch (error) {
      console.error("Flag emoji error for code", countryCode, error);
      // fallback to country code text
      return countryCode;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <div
      ref={containerRef}
      className={cn(" relative", className, { 'z-[100]': isOpen })}
      {...props}
    >
      <button
        className={cn(
          "cursor-pointer flex items-center gap-2 px-3 py-1 rounded",
          "text-primary-400 font-bold uppercase",
          "hover:bg-neutral-100 transition-colors",
          "border border-transparent",
          "focus:outline-none focus:ring-1 focus:ring-primary-300"
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Language selector"
        aria-expanded={isOpen}
      >
        <span className="text-lg">
          {getFlagEmoji(languageList.find(lang => lang.id === languageApp)?.flag)}
        </span>
        {languageList.find(lang => lang.id === languageApp)?.id}
      </button>

      {/* Drawer Container */}
      <div
        className={cn(
          " fixed inset-0 bg-black/50",
          "absolute top-full right-0 mt-1",
          "transition-opacity duration-300",
          {
            'opacity-100 pointer-events-auto': isOpen,
            'opacity-0 pointer-events-none': !isOpen
          }
        )}
      >
     
        {/* All Dropdown */}
        <div className={cn(
          " absolute rtl:right-0 ltr:left-0 mt-1 w-40",
          "bg-white rounded-lg shadow-md",
          "py-1 transform origin-top-right",
          "transition-transform duration-200",
          {
            'scale-100 opacity-100': isOpen,
            'scale-95 opacity-0': !isOpen
          }
        )}>
          {languageList.map((row) => (
            <button
              key={row.id}
              onClick={() => changeLanguage(row.id, row.dir)}
              className={cn(
                "cursor-pointer w-full flex items-center gap-2 px-3 py-2",
                "text-sm text-gray-700 hover:bg-neutral-50",
                {
                  'bg-primary-50 text-primary-400': languageApp === row.id
                }
              )}
            >
              <span className="text-lg">{getFlagEmoji(row.flag)}</span>
              <div className="flex flex-col">
                <span className="font-medium">{row.name}</span>
                <span className="text-xs text-gray-500">{row.id.toUpperCase()}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Languages;
