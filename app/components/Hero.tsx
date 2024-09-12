"use client";

import { FesterRegular, SixHands } from "../utils/fonts";

import Image from "next/image";
import Link from "next/link";
import { Video } from "./Video";
import decor from "@/public/decor-4.png";
import dynamic from "next/dynamic";
import hero from "@/public/hero.png";
import hero2 from "@/public/hero-2.png";
import socials1 from "@/public/socials-4.png";
import socials2 from "@/public/socials-3.png";
import { useMemo } from "react";
import { useTheme } from "../utils/themeProvider";

const CountdownTimer = dynamic(() => import("./Countdown"), { ssr: false });

const eventDate = new Date("2024-09-12T21:00:00");

export function Hero() {
  const { theme } = useTheme();

  const imageSrc = useMemo(() => (theme === "dark" ? hero : hero2), [theme]);

  return (
    <>
      <div id="home" className="h-svh sm:h-screen flex flex-col justify-center">
        <div className="max-w-[1440px] mx-auto mt-2  sm:mt-10 md:mt-20 pt-6 sm:pt-20 grid grid-cols-1 lg:grid-cols-2 px-8 lg:px-16">
          <div className="text-center lg:text-left order-2 sm:order-1">
            <h1
              className={`text-3xl sm:text-5xl xl:text-6xl mt-12 sm:mt-0  ${FesterRegular.className}`}
            >
              Ритми, коктейли и незабравими нощи в Q
            </h1>
            <h2
              className={`text-3xl sm:text-5xl xl:text-6xl  dark:text-[#FFC956] text-[#B96001] mt-4 ${SixHands.className}`}
            >
              Където всяка вечер е шедьовър!
            </h2>
            <p className="sm:text-xl xl:text-2xl mt-4 px-1 sm:px-20 md:px-28 lg:pl-0 lg:pr-12">
              Потопете се в свят, където електронния клубен ритъм среща
              коктейлното изкуство. Очаквайте нещо повече от вечер - очаквайте
              изживяване.
            </p>
            <Link
              href="/#contact"
              className={`inline-block relative py-3 lg:py-[18px] px-4 sm:px-10 dark:bg-gradient-to-r dark:from-[#FFE259] dark:to-[#FFA751] bg-[#343434] sm:text-lg xl:text-xl font-semibold dark:text-[#222927] text-white rounded-full mt-4 md:mt-[66px] before:content-[''] before:absolute before:inset-0 before:rounded-full dark:before:shadow-[inset_0px_4px_4px_#DABB7E] before:shadow-[inset_0px_4px_4px_#61574A] before:pointer-events-none transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080] ${FesterRegular.className}`}
            >
              Запази място за следващото парти
            </Link>
          </div>
          <div className="hidden min-[390px]:block sm:hidden lg:block w-[200px] h-[216px] lg:w-[520px] lg:h-[590px] xl:w-[640px] xl:h-[694px] relative order-1 sm:order-2 mx-auto sm:mx-0 -mb-10 sm:mb-0">
            <Image
              src={imageSrc}
              alt="Qbar logo"
              // sizes="(max-width: 640px) 200px, (max-width: 768px) 300px, 640px"
              fill
              object-fit="contain"
              priority
            />
            <div className="hidden lg:flex w-8 h-auto flex-col  justify-center items-center ml-auto gap-5">
              <Link
                href="https://www.facebook.com/Qbarplovdiv"
                aria-label="Facebook"
                target="_blank"
                className="relative inline-block transition-shadow duration-300 ease-in-out"
              >
                <Image
                  src={socials1}
                  alt="Facebook"
                  className="w-6 h-auto"
                  style={{
                    filter:
                      theme === "dark" ? "invert(1) brightness(2)" : undefined,
                  }}
                />
              </Link>
              <Link
                href="https://www.instagram.com/qbarplovdiv/"
                aria-label="Instagram"
                target="_blank"
                className="relative inline-block transition-shadow duration-300 ease-in-out"
              >
                <Image
                  src={socials2}
                  alt="Instagram"
                  className="w-6 h-auto"
                  style={{
                    filter:
                      theme === "dark" ? "invert(1) brightness(2)" : undefined,
                  }}
                />
              </Link>

              <Image
                src={decor}
                alt="Arrow"
                className="w-2 h-auto mb-8 "
                style={{
                  filter:
                    theme === "dark" ? "invert(1) brightness(2)" : undefined,
                }}
              />
              <p
                className="w-20 text-center"
                style={{
                  transform: "rotate(270deg)",
                  // transformOrigin: "center",
                }}
              >
                Follow us
              </p>
            </div>

            {/* <Video /> */}
          </div>
        </div>
        <div className="max-w-[1440px] w-full mx-auto hidden md:block lg:hidden xl:block mt-8 xl:-mt-52 mb-10 px-8 lg:px-16">
          <CountdownTimer expiryTimestamp={eventDate} />
        </div>
      </div>
      <div className="block md:hidden lg:block xl:hidden px-0 sm:px-16 mb-12">
        <CountdownTimer expiryTimestamp={eventDate} />
      </div>
    </>
  );
}
