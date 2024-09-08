"use client";

import MenuCard from "./MenuCard";
import Trailmade from "next/font/local";
import iconDark1 from "@/public/menu-icon-1-dark.svg";
import iconDark2 from "@/public/menu-icon-2-dark.svg";
import iconDark3 from "@/public/menu-icon-3-dark.svg";
import iconDark4 from "@/public/menu-icon-4-dark.svg";
import iconDark5 from "@/public/menu-icon-5-dark.svg";
import iconLight1 from "@/public/menu-icon-1-light.svg";
import iconLight2 from "@/public/menu-icon-2-light.svg";
import iconLight3 from "@/public/menu-icon-3-light.svg";
import iconLight4 from "@/public/menu-icon-4-light.svg";
import iconLight5 from "@/public/menu-icon-5-light.svg";
import { useI18n } from "@/locales/client";
import { useState } from "react";

const TrailmadeFont = Trailmade({ src: "../../public/Trailmade.otf" });

export default function Menu() {
  const t = useI18n();
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleToggle = (text1: string) => {
    setOpenAccordion((prev) => (prev === text1 ? null : text1));
  };

  return (
    <>
      <div className="flex flex-col items-center my-36">
        <h1
          className={`mb-12 text-8xl sm:text-9xl bg-gradient-to-t dark:from-[#FFC956] dark:to-[#FFFFFF] from-[#B96001] to-[#EBCDC0] bg-clip-text text-transparent ${TrailmadeFont.className}`}
        >
          {t("menu.menu-2")}
        </h1>
        <div className="w-full flex flex-col justify-center items-center">
          <MenuCard
            text="Hot Drinks"
            imageDark={iconDark1}
            imageLight={iconLight1}
            isOpen={openAccordion === "Hot Drinks"}
            onToggle={() => handleToggle("Hot Drinks")}
          />
          <MenuCard
            text="Cold Drinks"
            imageDark={iconDark1}
            imageLight={iconLight1}
            isOpen={openAccordion === "Cold Drinks"}
            onToggle={() => handleToggle("Cold Drinks")}
          />
          <MenuCard
            text="Soft Drinks"
            imageDark={iconDark2}
            imageLight={iconLight2}
            isOpen={openAccordion === "Soft Drinks"}
            onToggle={() => handleToggle("Soft Drinks")}
          />
          <MenuCard
            text="Mixed Drinks"
            imageDark={iconDark5}
            imageLight={iconLight5}
            isOpen={openAccordion === "Mixed Drinks"}
            onToggle={() => handleToggle("Mixed Drinks")}
          />
          <MenuCard
            text="Wine"
            imageDark={iconDark3}
            imageLight={iconLight3}
            isOpen={openAccordion === "Wine"}
            onToggle={() => handleToggle("Wine")}
          />
          <MenuCard
            text="Alcohol"
            imageDark={iconDark4}
            imageLight={iconLight4}
            isOpen={openAccordion === "Alcohol"}
            onToggle={() => handleToggle("Alcohol")}
          />
          <MenuCard
            text="Beer"
            imageDark={iconDark4}
            imageLight={iconLight4}
            isOpen={openAccordion === "Beer"}
            onToggle={() => handleToggle("Beer")}
          />
        </div>
      </div>
    </>
  );
}
