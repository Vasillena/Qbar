"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import { GrLanguage } from "react-icons/gr";
import Image from "next/image";
import icon from "@/public/language.svg";
import { useMemo } from "react";
import { useTheme } from "../utils/themeProvider";

export function SwitchLanguage() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const { theme } = useTheme();

  const filterClass = useMemo(
    () =>
      theme === "dark"
        ? "md:invert md:brightness-0"
        : "invert brightness-0 md:invert-0",
    [theme]
  );

  const handleChangeToEnglish = () => changeLocale("en");

  const handleChangeToBulgarian = () => changeLocale("bg");

  return (
    <>
      {locale !== "en" && (
        <button
          type="button"
          onClick={handleChangeToEnglish}
          className="fixed bottom-0 right-8 w-10 py-2 rounded-t-xl drop-shadow-sm dark:bg-[#FFC956] bg-[#B96001]
            md:static md:bottom-auto md:right-auto md:w-auto md:py-0 md:rounded-none md:drop-shadow-none md:bg-transparent dark:md:bg-transparent"
          aria-label="Switch to English"
        >
          {/* <Image
            src={icon}
            alt="EN"
            className={`mx-auto filter ${filterClass}`}
          /> */}
          <GrLanguage
            className={`mx-auto fill-current text-[#30312a] dark:text-white dark:hover:text-[#FFC956] hover:text-[#B96001] transition-colors duration-300`}
          />

          {/* <GrLanguage
            className={`mx-auto filter ${filterClass} dark:hover:color-[#FFC956] hover:color-[#B96001]`}
          /> */}
        </button>
      )}
      {locale !== "bg" && (
        <button
          type="button"
          onClick={handleChangeToBulgarian}
          className="fixed bottom-0 right-8 w-10 py-2 rounded-t-xl drop-shadow-sm dark:bg-[#FFC956] bg-[#B96001]
            md:static md:bottom-auto md:right-auto md:w-auto md:py-0 md:rounded-none md:drop-shadow-none md:bg-transparent dark:md:bg-transparent"
          aria-label="Switch to Bulgarian"
        >
          <GrLanguage
            className={`mx-auto fill-current text-[#30312a] dark:text-white dark:hover:text-[#FFC956] hover:text-[#B96001] transition-colors duration-300`}
          />
          {/* <Image
            src={icon}
            alt="BG"
            className={`mx-auto filter ${filterClass}`}
          /> */}
        </button>
      )}
    </>
  );
}
