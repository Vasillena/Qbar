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
    <div
      id="home"
      // className="h-screen"
    >
      <div className="max-w-7xl mx-auto mt-20 pt-20 px-16 grid grid-cols-1 lg:grid-cols-2">
        <div className="">
          <h1 className={`text-6xl ${FesterFont.className}`}>
            Ритми, коктейли и незабравими нощи в Q
          </h1>
          <h2
            className={`text-6xl dark:text-[#FFC956] text-[#B96001] mt-8 ${SixHandsFont.className}`}
          >
            Където всяка вечер е шедьовър!
          </h2>
          <p className="text-2xl mt-12">
            Потопете се в свят, където техно музиката среща коктейлното
            изкуство. Очаквайте нещо повече от вечер - очаквайте изживяване.
          </p>
          <button
            className={`py-[18px] px-10 dark:bg-gradient-to-r dark:from-[#FFE259] dark:to-[#FFA751] bg-[#343434] text-xl font-semibold dark:text-[#222927] text-white rounded-full mt-[66px] ${FesterFont.className}`}
          >
            Запази място за следващото парти
          </button>
        </div>
        <div>
          <Image
            src={hero}
            alt="Qbar logo"
            style={{ width: "774px", height: "auto" }}
          />
          {/* <Video /> */}
        </div>
      </div>
      <CountdownTimer expiryTimestamp={eventDate} />
    </div>
  );
}
