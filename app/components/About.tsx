import Fester from "next/font/local";
import Image from "next/image";
import about from "@/public/about.png";
import decor from "@/public/decor-1.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

export default function About() {
  return (
    // <div className="max-w-7xl mx-auto relative">
    <div className="max-w-screen mx-auto relative">
      <div>
        <Image
          src={decor}
          alt="Decor"
          style={{ width: "670px", height: "auto", marginLeft: "auto" }}
        />
      </div>
      <div className="-mt-9 relative -z-10 border-y-8 border-[#FFC956]">
        <Image
          src={about}
          alt="Lamps"
          style={{ width: "1440px", height: "auto" }}
          className="relative"
        />
        {/* <div className="absolute top-0 right-0 w-[670px] h-full bg-[#222927] bg-opacity-80 backdrop-blur-sm"/> */}
        <div className="absolute top-0 right-0 w-[990px] h-full bg-[#222927] bg-opacity-80 backdrop-blur-sm" />
        {/* <div className="absolute top-0 right-0 w-1/2 h-full flex flex-col  justify-center p-8"> */}
        <div className="absolute top-0 right-0 w-[600px] h-full flex flex-col  justify-center p-8 mr-60">
          <h2 className={`${FesterFont.className} text-6xl`}>За нас</h2>
          <p className="text-xl pt-8">
            Q е не просто коктейл бар, а оазис на изкуството и вкусовете.
            Създадохме това уникално място, за да предложим на нашите гости
            изживяване, което комбинира най-доброто от света на коктейлите и
            изкуството.
          </p>
          <p className="text-xl pt-4">
            Нашият екип от талантливи бармани се вдъхновява от креативността и
            страстта, за да създаде коктейли, които не само утоляват жаждата, но
            и разказват истории. Внимателно подбраните съставки и иновативните
            техники превръщат всяка напитка в истинско произведение на
            изкуството.
          </p>
          <p className="text-xl pt-4">
            Но в Q не само коктейлите са впечатляващи - нашето пространство е
            проектирано да вдъхновява. Присъединете се към нас и открийте
            магията на Q - мястото, където изкуството и удоволствието се срещат.
            Очакваме ви!
          </p>
        </div>
      </div>
      <div className="-mt-9">
        <Image
          src={decor}
          alt="Decor"
          style={{
            width: "670px",
            height: "auto",
            marginLeft: "auto",
            transform: "scaleY(-1)",
          }}
        />
      </div>
    </div>
  );
}
