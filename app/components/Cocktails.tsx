import Fester from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import Reveal from "./Animations/Reveal";
import cocktail1 from "@/public/cocktail-1.png";
import cocktail2 from "@/public/cocktail-2.png";
import cocktail3 from "@/public/cocktail-3.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

const cocktails = [
  {
    image: cocktail1,
    name: "Negroni",
    price: "13,50 лв.",
    width:
      "w-[147px] min-[390px]:w-[117px] md:w-[177px] lg:w-[117px] xl:w-[177px]",
    margin: "mr-5",
  },
  {
    image: cocktail2,
    name: "Mojito",
    price: "13,50 лв.",
    width:
      "w-[117px] min-[390px]:w-[87px] md:w-[147px] lg:w-[87px] xl:w-[147px]",
    margin: "ml-[28px] lg:ml-[20px] xl:ml-[28px]",
  },
  {
    image: cocktail3,
    name: "Old Fashioned",
    price: "13,50 лв.",
    width:
      "w-[158px] min-[390px]:w-[128px] md:w-[188px] lg:w-[128px] xl:w-[188px]",
    margin: "mr-2",
  },
];

export default function Cocktails() {
  return (
    // <div className="flex flex-col xl:flex-row gap-12">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-x-12 gap-y-12 lg:gap-y-0 items-center xl:items-end">
      <div className="xl:col-span-2 text-center lg:text-left">
        <Reveal initial={{ x: "-5%" }} animate={{ x: "0%" }}>
          <h2
            className={`${FesterFont.className} text-3xl sm:text-5xl xl:text-6xl`}
          >
            Нашите Коктейли
          </h2>
          <p className="sm:text-lg xl:text-xl pt-8 md:leading-6 ">
            В Q вярваме, че всеки коктейл трябва да бъде преживяване. Нашите
            майсторски приготвени напитки съчетават изкуство, страст и
            иновативни техники, за да създадат уникални вкусове, които ще ви
            изненадат и вдъхновят.
          </p>
          <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
            Насладете се на богатата палитра от вкусове и аромати, които ще
            събудят сетивата ви. Опитайте нашите авторски коктейли или споделете
            своите предпочитания с нас, за да създадем нещо специално само за
            вас.
          </p>
          <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
            В Q коктейлите не са просто напитки – те са пътешествие в света на
            вкусовете и изкуството. Елате и открийте вашия нов любим коктейл.
          </p>
        </Reveal>
      </div>

      <div className="xl:col-span-3 w-full flex flex-col items-center">
        <div className="w-full flex items-end justify-center sm:justify-between flex-wrap sm:flex-nowrap gap-10 sm:gap-0">
          {cocktails.map((cocktail, index) => (
            <div key={index} className="flex flex-col items-center">
              <div>
                <Image
                  src={cocktail.image}
                  alt="Cocktail"
                  className={`${cocktail.width} ${cocktail.margin}`}
                  // style={{
                  //   width: cocktail.width,
                  //   height: "auto",
                  // }}
                />
              </div>
              <div className="w-[215px] min-[390px]:w-40 sm:w-[136px] md:w-[205px] lg:w-[136px] xl:w-[215px] h-56 md:h-52 lg:h-44 xl:h-56 flex flex-col justify-center items-center dark:bg-[#394940] bg-[#B96001] rounded-3xl -mt-14 -z-10 text-2xl lg:text-xl xl:text-2xl text-center shadow-2xl px-2">
                <p className="dark:text-[#FFE259] text-white pt-12 pb-2 border-b-2 border-[#222927]">
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
          className={`inline-block relative py-3 lg:py-[18px] w-full bg-gradient-to-r dark:from-[#FFE259] dark:to-[#FFA751] bg-[#343434] text-xl font-semibold text-center dark:text-[#222927] text-white rounded-full mt-[66px] before:content-[''] before:absolute before:inset-0 before:rounded-full dark:before:shadow-[inset_0px_4px_4px_#DABB7E] before:shadow-[inset_0px_4px_4px_#61574A] before:pointer-events-none transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080] ${FesterFont.className}`}
        >
          Открийте още любими вкусове
        </Link>
      </div>
    </div>
  );
}
