import { FesterBold } from "../utils/fonts";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Animations/Reveal";
import cocktail1 from "@/public/cocktail-1.png";
import cocktail2 from "@/public/cocktail-2.png";
import cocktail3 from "@/public/cocktail-3.png";
import { getI18n } from "@/locales/server";

const cocktails = [
  {
    image: cocktail1,
    name: "Negroni",
    price: "13,50 лв.",
    width:
      "w-[107px] min-[390px]:w-[87px] md:w-[177px] lg:w-[117px] xl:w-[177px]",
    margin: "mr-5",
  },
  {
    image: cocktail2,
    name: "Mojito",
    price: "13,50 лв.",
    width:
      "w-[77px] min-[390px]:w-[77px] md:w-[147px] lg:w-[87px] xl:w-[147px]",
    margin: "ml-[14px] md:ml-[30px] lg:ml-[20px] xl:ml-[28px]",
  },
  {
    image: cocktail3,
    name: "Old Fashioned",
    price: "13,50 лв.",
    width:
      "w-[118px] min-[390px]:w-[98px] md:w-[188px] lg:w-[128px] xl:w-[188px]",
    margin: "mr-2",
  },
];

export default async function Cocktails(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-x-12 gap-y-12 lg:gap-y-0 items-center xl:items-end">
      <div className="xl:col-span-2 text-center lg:text-left">
        <Reveal initial={{ x: "-5%" }} animate={{ x: "0%" }}>
          <h2
            className={`${FesterBold.className} inline-block text-3xl sm:text-5xl xl:text-6xl hover-target`}
          >
            {t("cocktails.title")}
          </h2>
          <p className="sm:text-lg xl:text-xl pt-8 md:leading-6 ">
            {t("cocktails.text-1")}
          </p>
          <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
            {t("cocktails.text-2")}
          </p>
          <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
            {t("cocktails.text-3")}
          </p>
        </Reveal>
      </div>

      <div className="xl:col-span-3 w-full flex flex-col items-center">
        <div className="w-full flex items-end justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-x-20 gap-y-10 min-[390px]:gap-2 sm:gap-0">
          {cocktails.map((cocktail, index) => (
            <div key={index} className="flex flex-col items-center">
              <div>
                <Image
                  src={cocktail.image}
                  alt="Cocktail"
                  className={`${cocktail.width} h-auto ${cocktail.margin}`}
                />
              </div>
              <div className="w-36 min-[390px]:w-[110px] sm:w-[136px] md:w-[205px] lg:w-[136px] xl:w-[215px] h-36 min-[390px]:h-32 md:h-52 lg:h-44 xl:h-56 flex flex-col justify-center items-center dark:bg-[#394940] bg-[#B96001] rounded-3xl -mt-10 min-[390px]:-mt-6 sm:-mt-14 -z-10 md:text-xl xl:text-2xl text-center shadow-2xl px-2">
                <p className="dark:text-[#FFE259] text-white pt-6 sm:pt-12 pb-2 border-b-2 border-[#222927]">
                  {cocktail.name}
                </p>
                <p className="pt-1 font-bold dark:text-[#FBB428] text-white">
                  {cocktail.price}
                </p>
              </div>
            </div>
          ))}
        </div>
        <Link
          href="/menu"
          className={`inline-block relative py-3 lg:py-[18px] w-full bg-gradient-to-r dark:from-[#FFE259] dark:to-[#FFA751] bg-[#343434] text-xl font-semibold text-center dark:text-[#222927] text-white rounded-full mt-[66px] before:content-[''] before:absolute before:inset-0 before:rounded-full dark:before:shadow-[inset_0px_4px_4px_#DABB7E] before:shadow-[inset_0px_4px_4px_#61574A] before:pointer-events-none transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080] ${FesterBold.className}`}
        >
          {t("cocktails.button")}
        </Link>
      </div>
    </div>
  );
}
