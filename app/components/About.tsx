"use client";

import { FesterBold } from "../utils/fonts";
import Image from "next/image";
import Reveal from "./Animations/Reveal";
import about1 from "@/public/about-dark.png";
import about2 from "@/public/about-light.png";
import about3 from "@/public/about-light-2.png";
import about4 from "@/public/about-light-3.png";
import decor1 from "@/public/decor-1-dark.png";
import decor2 from "@/public/decor-1-light.png";
import { useMemo } from "react";
import { useTheme } from "../utils/themeProvider";

export default function About() {
  const { theme } = useTheme();

  //   const FesterFont = useMemo(
  //   () => Fester({ src: "../../public/Fester-bold.otf" }),
  //   []
  // );

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
      <div className="max-w-[1440px] mx-auto relative sm:px-16">
        <div className="absolute top-0 right-0 sm:px-16">
          <Image src={decorImage} alt="Decor" />
        </div>

        <div className="relative -z-10">
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
                className={`${FesterBold.className} text-3xl sm:text-5xl xl:text-6xl`}
              >
                За нас
              </h2>

              <p className="sm:text-lg xl:text-xl pt-8 md:leading-6">
                Q е не просто коктейл бар, а оазис на изкуството и вкусовете.
                Създадохме това уникално място, за да предложим на нашите гости
                изживяване, което комбинира най-доброто от света на коктейлите и
                изкуството.
              </p>
              <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
                Нашият екип от талантливи бармани се вдъхновява от креативността
                и страстта, за да създаде коктейли, които не само утоляват
                жаждата, но и разказват истории. Внимателно подбраните съставки
                и иновативните техники превръщат всяка напитка в истинско
                произведение на изкуството.
              </p>
              <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
                Но в Q не само коктейлите са впечатляващи - нашето пространство
                е проектирано да вдъхновява. Присъединете се към нас и открийте
                магията на Q - мястото, където изкуството и удоволствието се
                срещат. Очакваме ви!
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute bottom-0 right-0 sm:px-16">
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
