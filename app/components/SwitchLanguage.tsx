"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import Image from "next/image";
import icon from "@/public/language.svg";
import { useTheme } from "../utils/themeProvider";

export function SwitchLanguage() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();
  const { theme } = useTheme();

  return (
    <>
      {locale !== "en" && (
        <button type="button" onClick={() => changeLocale("en")}>
          <Image
            src={icon}
            alt="EN"
            style={{
              filter: theme === "dark" ? "invert(1) brightness(2)" : undefined,
            }}
          />
        </button>
      )}
      {locale !== "bg" && (
        <button type="button" onClick={() => changeLocale("bg")}>
          <Image
            src={icon}
            alt="BG"
            style={{
              filter: theme === "dark" ? "invert(1) brightness(2)" : undefined,
            }}
          />
        </button>
      )}
    </>
  );
}
