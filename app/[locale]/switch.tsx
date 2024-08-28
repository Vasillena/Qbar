"use client";

import { useChangeLocale, useCurrentLocale } from "../../locales/client";

import Image from "next/image";
import icon from "@/public/language.svg";

export function Switch() {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      {locale !== "en" && (
        <button type="button" onClick={() => changeLocale("en")}>
          <Image
            src={icon}
            alt="EN"
            style={{ filter: "invert(1) brightness(2)" }}
          />
        </button>
      )}
      {locale !== "bg" && (
        <button type="button" onClick={() => changeLocale("bg")}>
          <Image
            src={icon}
            alt="BG"
            style={{ filter: "invert(1) brightness(2)" }}
          />
        </button>
      )}
    </>
  );
}
