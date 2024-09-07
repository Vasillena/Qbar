"use client";

import Image from "next/image";
import Ticker from "framer-motion-ticker";
import decor1 from "@/public/decor-2-dark.png";
import decor2 from "@/public/decor-2-light.png";
import image2 from "@/public/2.png";
import image3 from "@/public/3.png";
import image4 from "@/public/4.png";
import { useTheme } from "../utils/themeProvider";

// import image1 from "@/public/1.png";

// import image5 from "@/public/5.png";

const slides = [
  //   { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  //   { image: image5 },
  //   { image: image1 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  { image: image2 },
  { image: image3 },
  { image: image4 },
  //   { image: image5 },
];

export default function Slider(): JSX.Element {
  const { theme } = useTheme();
  return (
    <div id="gallery" className="max-w-[1440px] mx-auto sm:px-16">
      {/* <div className="max-w-screen mx-auto"> */}
      <div>
        <Image
          src={theme === "dark" ? decor1 : decor2}
          alt="Decor"
          style={{ width: "1440px", height: "auto" }}
          // style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="relative h-full overflow-hidden py-2 w-full dark:bg-[#394940]">
        <div className="absolute inset-0 z-20">
          <div className="absolute left-[-10px] top-0 w-1/4 h-full bg-gradient-to-r dark:from-[#222927] from-[#f2efea] to-transparent blur-sm"></div>
          <div className="absolute right-[-10px] top-0 w-1/4 h-full bg-gradient-to-l dark:from-[#222927] from-[#f2efea]  to-transparent blur-sm"></div>
        </div>

        <Ticker duration={100}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[280px] flex items-center justify-center h-[395px] mx-2"
            >
              <div className="flex items-center justify-center h-full">
                <Image src={slide.image} alt="Party" width={316} height={395} />
              </div>
            </div>
          ))}
        </Ticker>
      </div>
      <div>
        <Image
          src={theme === "dark" ? decor1 : decor2}
          alt="Decor"
          style={{ width: "1440px", height: "auto", transform: "scaleX(-1)" }}
          // style={{ width: "100%", height: "auto", transform: "scaleX(-1)" }}
        />
      </div>
    </div>
  );
}
