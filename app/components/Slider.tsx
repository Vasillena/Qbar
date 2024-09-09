"use client";

import Image, { StaticImageData } from "next/image";

import Ticker from "framer-motion-ticker";
import decor1 from "@/public/decor-2-dark.png";
import decor2 from "@/public/decor-2-light.png";
import { useState } from "react";
import { useTheme } from "../utils/themeProvider";

interface SliderProps {
  slides: { image: StaticImageData }[];
  reverse?: boolean;
}

export default function Slider({ slides, reverse }: SliderProps): JSX.Element {
  const { theme } = useTheme();
  const [tickerSpeed, setTickerSpeed] = useState(100);

  const handleMouseEnter = () => {
    setTickerSpeed(100);
  };

  const handleMouseLeave = () => {
    setTickerSpeed(100);
  };

  return (
    <div id="gallery" className="max-w-[1440px] mx-auto sm:px-16">
      <div>
        <Image
          src={theme === "dark" ? decor1 : decor2}
          alt="Decor"
          style={{ width: "1440px", height: "auto" }}
        />
      </div>

      <div className="relative h-full  py-2 w-full dark:bg-[#394940]">
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute left-[-10px] top-0 w-1/4 h-full bg-gradient-to-r dark:from-[#222927] from-[#f2efea] to-transparent blur-sm z-20"></div>
          <div className="absolute right-[-10px] top-0 w-1/4 h-full bg-gradient-to-l dark:from-[#222927] from-[#f2efea] to-transparent blur-sm z-20"></div>
        </div>

        <div style={{ transform: reverse ? "scaleX(-1)" : "none" }}>
          <Ticker key={tickerSpeed} duration={tickerSpeed}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[280px] flex items-center justify-center h-[395px] mx-2 group "
              >
                <div className="flex items-center justify-center h-full ">
                  <Image
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    src={slide.image}
                    alt="Party"
                    width={316}
                    height={395}
                    className="transition-transform duration-300 hover:scale-150 hover:z-30"
                  />
                </div>
              </div>
            ))}
          </Ticker>
        </div>
      </div>
      <div>
        <Image
          src={theme === "dark" ? decor1 : decor2}
          alt="Decor"
          style={{ width: "1440px", height: "auto", transform: "scaleX(-1)" }}
        />
      </div>
    </div>
  );
}
