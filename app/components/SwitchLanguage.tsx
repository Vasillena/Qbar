"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import Image from "next/image";
import icon from "@/public/language.svg";
import { useTheme } from "../utils/themeProvider";

export function SwitchLanguage() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const { theme } = useTheme();

  const filterClass =
    theme === "dark"
      ? "md:invert md:brightness-0"
      : "invert brightness-0 md:invert-0";

  return (
    <>
      {locale !== "en" && (
        <button
          type="button"
          onClick={() => changeLocale("en")}
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
          onClick={() => changeLocale("bg")}
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
