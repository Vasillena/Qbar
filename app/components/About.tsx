"use client";

import Fester from "next/font/local";
import Image from "next/image";
import about1 from "@/public/about-dark.png";
import about2 from "@/public/about-light.png";
import about3 from "@/public/about-light-2.png";
import decor1 from "@/public/decor-1-dark.png";
import decor2 from "@/public/decor-1-light.png";
import { useTheme } from "../utils/themeProvider";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

export default function About() {
  const { theme } = useTheme();
  return (
    <>
      <div id="about" className="max-w-[1440px] mx-auto relative sm:px-16">
        <div className="absolute top-0 right-0 sm:px-16">
          <Image src={theme === "dark" ? decor1 : decor2} alt="Decor" />
        </div>
        <div className="relative -z-10">
          <Image
            src={theme === "dark" ? about1 : about2}
            alt="Lamps"
            style={{ width: "1440px", height: "auto" }}
            className="hidden lg:block"
          />
          <div className="min-[1024px]:absolute top-0 right-0 xl:w-[53%] h-full flex flex-col justify-center py-8 px-2 sm:px-8 md:px-10 lg:px-32 xl:px-10 dark:bg-[#222927]  dark:bg-opacity-80 bg:backdrop-blur-sm text-center xl:text-left">
            <h2
              className={`${FesterFont.className} text-3xl sm:text-5xl xl:text-6xl`}
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
              Нашият екип от талантливи бармани се вдъхновява от креативността и
              страстта, за да създаде коктейли, които не само утоляват жаждата,
              но и разказват истории. Внимателно подбраните съставки и
              иновативните техники превръщат всяка напитка в истинско
              произведение на изкуството.
            </p>
            <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
              Но в Q не само коктейлите са впечатляващи - нашето пространство е
              проектирано да вдъхновява. Присъединете се към нас и открийте
              магията на Q - мястото, където изкуството и удоволствието се
              срещат. Очакваме ви!
            </p>
          </div>
        </div>
        <div className=" absolute bottom-0 right-0 sm:px-16">
          <Image
            src={theme === "dark" ? decor1 : decor2}
            alt="Decor"
            style={{
              // width: "1440px",
              // height: "auto",
              transform: "scaleY(-1)",
            }}
          />
        </div>
      </div>

      <div className="max-w-[1440px] w-full mt-20 mx-auto sm:px-16">
        <Image
          src={theme === "dark" ? about1 : about3}
          alt="Lamps"
          // style={{ width: "1440px", height: "auto" }}
          className="block lg:hidden"
        />
      </div>
    </>
  );
}