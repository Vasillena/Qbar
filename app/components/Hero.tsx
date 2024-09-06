import Fester from "next/font/local";
import Image from "next/image";
import SixHands from "next/font/local";
import { Video } from "./Video";
import dynamic from "next/dynamic";
import hero from "@/public/hero.png";

const CountdownTimer = dynamic(() => import("./Countdown"), { ssr: false });

const eventDate = new Date("2024-12-31T00:00:00");

const FesterFont = Fester({ src: "../../public/Fester.woff" });
const SixHandsFont = SixHands({ src: "../../public/SixHands.otf" });

export function Hero() {
  return (
    <>
      <div
        id="home"
        className="h-screen flex flex-col justify-center px-8 lg:px-16"
      >
        <div className="max-w-[1440px] mx-auto mt-4 sm:mt-10 md:mt-20 pt-20 grid grid-cols-1 lg:grid-cols-2">
          <div className="text-center lg:text-left order-2 sm:order-1">
            <h1
              className={`text-3xl sm:text-5xl xl:text-6xl mt-12 sm:mt-0  ${FesterFont.className}`}
            >
              Ритми, коктейли и незабравими нощи в Q
            </h1>
            <h2
              className={`text-3xl sm:text-5xl xl:text-6xl  dark:text-[#FFC956] text-[#B96001] mt-8 ${SixHandsFont.className}`}
            >
              Където всяка вечер е шедьовър!
            </h2>
            <p className="sm:text-xl xl:text-2xl mt-12 px-1 sm:px-20 md:px-28 lg:pl-0 lg:pr-12">
              Потопете се в свят, където електронния клубен ритъм среща
              коктейлното изкуство. Очаквайте нещо повече от вечер - очаквайте
              изживяване.
            </p>
            <button
              className={`relative py-3 lg:py-[18px] px-10 dark:bg-gradient-to-r dark:from-[#FFE259] dark:to-[#FFA751] bg-[#343434] sm:text-lg xl:text-xl font-semibold dark:text-[#222927] text-white rounded-full mt-10 md:mt-[66px] before:content-[''] before:absolute before:inset-0 before:rounded-full dark:before:shadow-[inset_0px_4px_4px_#DABB7E] before:shadow-[inset_0px_4px_4px_#61574A] before:pointer-events-none
               ${FesterFont.className}`}
            >
              Запази място за следващото парти
            </button>
          </div>
          <div className="hidden min-[390px]:block sm:hidden lg:block w-[270px] h-[290px] lg:w-[520px] lg:h-[590px] xl:w-[640px] xl:h-[710px] relative order-1 sm:order-2 mx-auto sm:mx-0">
            <Image
              src={hero}
              alt="Qbar logo"
              fill
              object-fit="contain"
              // style={{ width: "774px", height: "auto" }}
            />
            {/* <Video /> */}
          </div>
        </div>
        <div className="hidden md:block lg:hidden xl:block mt-8 xl:-mt-28 ">
          <CountdownTimer expiryTimestamp={eventDate} />
        </div>
      </div>
      <div className="block md:hidden lg:block xl:hidden px-0 sm:px-16">
        <CountdownTimer expiryTimestamp={eventDate} />
      </div>
    </>
  );
}
