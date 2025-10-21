"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

import { GrLanguage } from "react-icons/gr";

export default function SwitchLanguageForIntro() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleChangeToEnglish = () => changeLocale("en");
  const handleChangeToBulgarian = () => changeLocale("bg");

  const commonClasses =
    "fixed right-8 bottom-0 md:bottom-[-10px] z-[60] flex items-center justify-center w-12 h-8 rounded-t-xl text-[#30312a] bg-white shadow-md cursor-pointer transition-all duration-300 " +
    "md:hover:bottom-0 md:hover:shadow-lg md:hover:brightness-110";

  return (
    <>
      {locale !== "en" && (
        <div
          onClick={handleChangeToEnglish}
          className={commonClasses}
          aria-label="Switch to English"
        >
          <GrLanguage size={20} />
        </div>
      )}

      {locale !== "bg" && (
        <div
          onClick={handleChangeToBulgarian}
          className={commonClasses}
          aria-label="Switch to Bulgarian"
        >
          <GrLanguage size={20} />
        </div>
      )}
    </>
  );
}
