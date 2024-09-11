"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

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
        >
          <Image
            src={icon}
            alt="EN"
            className={`mx-auto filter ${filterClass}`}
          />
        </button>
      )}
      {locale !== "bg" && (
        <button
          type="button"
          onClick={handleChangeToBulgarian}
          className="fixed bottom-0 right-8 w-10 py-2 rounded-t-xl drop-shadow-sm dark:bg-[#FFC956] bg-[#B96001]
            md:static md:bottom-auto md:right-auto md:w-auto md:py-0 md:rounded-none md:drop-shadow-none md:bg-transparent dark:md:bg-transparent"
        >
          <Image
            src={icon}
            alt="BG"
            className={`mx-auto filter ${filterClass}`}
          />
        </button>
      )}
    </>
  );
}
