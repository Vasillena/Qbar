"use client";

import { SixHands, Trailmade } from "../utils/fonts";
import { useCallback, useState } from "react";
import { useCurrentLocale, useI18n } from "@/locales/client";

import MenuCard from "./MenuCard";
import icon1 from "@/public/menu-icon-1.svg";
import icon2 from "@/public/menu-icon-2.svg";
import icon3 from "@/public/menu-icon-3.svg";
import icon4 from "@/public/menu-icon-4.svg";
import icon5 from "@/public/menu-icon-5.svg";
import icon6 from "@/public/menu-icon-6.svg";
import icon7 from "@/public/menu-icon-7.svg";

export default function Menu() {
  const t = useI18n();
  const locale = useCurrentLocale();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleToggle = useCallback((text1: string) => {
    setOpenAccordion((prev) => (prev === text1 ? null : text1));
  }, []);

  const menuItems = [
    { text: t("menu.text-1"), image: icon1 },
    { text: t("menu.text-2"), image: icon2 },
    { text: t("menu.text-3"), image: icon3 },
    { text: t("menu.text-4"), image: icon4 },
    { text: t("menu.text-5"), image: icon5 },
    { text: t("menu.text-6"), image: icon6 },
    { text: t("menu.text-7"), image: icon7 },
  ];

  return (
    <div className="flex flex-col items-center my-36">
      <h1
        className={`mb-12 text-8xl sm:text-9xl bg-gradient-to-t dark:from-[#FFC956] dark:to-[#FFFFFF] from-[#B96001] to-[#EBCDC0] bg-clip-text text-transparent ${
          locale === "en" ? Trailmade.className : SixHands.className
        }`}
      >
        {t("nav.menu")}
      </h1>
      <div className="w-full flex flex-col justify-center items-center">
        {menuItems.map((item) => (
          <MenuCard
            key={item.text}
            text={item.text}
            image={item.image}
            isOpen={openAccordion === item.text}
            onToggle={() => handleToggle(item.text)}
          />
        ))}
      </div>
    </div>
  );
}
