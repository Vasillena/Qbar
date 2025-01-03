"use client";

import Image from "next/image";
import Reveal from "./Animations/Reveal";
import about1 from "@/public/about-dark.webp";
import about2 from "@/public/about-light.webp";
import about3 from "@/public/about-light-2.webp";
import about4 from "@/public/about-light-3.webp";
import decor1 from "@/public/decor-1-light2.png";
import decor2 from "@/public/decor-1-light.png";
import { oswald } from "../utils/fonts";
import { useI18n } from "@/locales/client";
import { useMemo } from "react";
import { useTheme } from "../utils/themeProvider";

export default function About(): JSX.Element {
  const { theme } = useTheme();
  const t = useI18n();

  const decorImage = useMemo(
    () => (theme === "dark" ? decor1 : decor2),
    [theme]
  );
  const mainImage1 = useMemo(
    () => (theme === "dark" ? about1 : about2),
    [theme]
  );
  const mainImage2 = useMemo(
    () => (theme === "dark" ? about1 : about4),
    [theme]
  );
  const mobileImage = useMemo(
    () => (theme === "dark" ? about1 : about3),
    [theme]
  );

  return (
    <>
      <div className="max-w-[1440px] mx-auto relative sm:px-16 mt-20">
        <div className="absolute -top-5 right-0 sm:px-16 z-10">
          <Image src={decorImage} alt="Decor" />
        </div>

        <div className="relative">
          <Image
            src={mainImage1}
            alt="Lamps"
            style={{ width: "1440px", height: "auto" }}
            className="hidden xl:block"
          />
          <Image
            src={mainImage2}
            alt="Lamps"
            style={{ width: "1440px", height: "auto" }}
            className="hidden lg:block xl:hidden"
          />
          <div className="min-[1024px]:absolute top-0 right-0 dark:xl:w-[53%] xl:w-1/2 h-full flex flex-col justify-center py-8 px-2 sm:px-8 md:px-10 lg:px-32 xl:px-10 dark:bg-[#222927] dark:bg-opacity-80 dark:backdrop-blur-md backdrop-blur-sm text-center xl:text-left">
            <Reveal initial={{ x: "5%" }} animate={{ x: "0%" }}>
              <h2
                className={`${oswald.className} inline-block text-3xl font-bold sm:text-5xl xl:text-6xl hover-target`}
              >
                {t("about.title")}
              </h2>

              <p className="sm:text-lg xl:text-xl pt-8 md:leading-6">
                {t("about.text-1")}
              </p>
              <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
                {t("about.text-2")}
              </p>
              <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
                {t("about.text-3")}
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute -bottom-5 right-0 sm:px-16">
          <Image
            src={decorImage}
            alt="Decor"
            style={{ transform: "scaleY(-1)" }}
          />
        </div>
      </div>

      <div className="block lg:hidden max-w-[1440px] w-full mt-20 mx-auto sm:px-16">
        <Image src={mobileImage} alt="Lamps" />
      </div>
    </>
  );
}
