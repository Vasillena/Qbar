"use client";

import Image from "next/image";
import Link from "next/link";
import { getI18n } from "@/locales/server";
import logoDark from "@/public/logo-dark.svg";
import logoLight from "@/public/logo-light.svg";
import socialsDark1 from "@/public/socials-1-dark.svg";
import socialsDark2 from "@/public/socials-2-dark.svg";
import socialsLight1 from "@/public/socials-1-light.svg";
import socialsLight2 from "@/public/socials-2-light.svg";
import { useEffect } from "react";
import { useI18n } from "@/locales/client";
import { useTheme } from "../utils/themeProvider";

export default function Footer(): JSX.Element {
  // const t = await getI18n();
  const t = useI18n();

  const { theme } = useTheme();

  return (
    <div className="max-w-screen dark:bg-[#222927] bg-[#f2efea]">
      <div className="max-w-[1440px] mx-auto flex items-end mb-12 px-2">
        {/* <div className="max-w-screen mx-auto flex items-end mb-12 px-16"> */}
        <div>
          <Image
            src={theme === "dark" ? logoDark : logoLight}
            alt="Logo"
            priority
            style={{
              width: "126px",
              height: "auto",
            }}
          />
        </div>
        <div className="w-full flex flex-col">
          <div className=" mb-6 self-end flex gap-6">
            <Link
              href="https://www.instagram.com/qbarplovdiv/"
              aria-label="Instagram"
              target="_blank"
              className="relative inline-block transition-shadow duration-300 ease-in-out"
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden shadow-none hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080]">
                <Image
                  src={socialsLight1}
                  alt="Socials"
                  className="w-full h-full object-cover"
                  style={{
                    filter:
                      theme === "dark" ? "invert(1) brightness(2)" : undefined,
                  }}
                />
              </div>
            </Link>
            <Link
              href="https://www.facebook.com/Qbarplovdiv"
              aria-label="Facebook"
              target="_blank"
              className="relative inline-block transition-shadow duration-300 ease-in-out"
            >
              <div className="relative w-6 h-6 rounded-full overflow-hidden shadow-none hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080]">
                <Image
                  src={socialsLight2}
                  alt="Socials"
                  className="w-full h-full object-cover"
                  style={{
                    filter:
                      theme === "dark" ? "invert(1) brightness(2)" : undefined,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="border-t dark:border-[#FFC956] border-[#B96001] py-6 ml-20 flex flex-col md:flex-row justify-between font-light text-center md:text-left">
            <p>Copyright © 2024 - All rights reserved</p>
            <p>Design by SA & Build by VY</p>
          </div>
        </div>
      </div>
    </div>
  );
}
