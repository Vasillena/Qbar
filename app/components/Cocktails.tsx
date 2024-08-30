import Fester from "next/font/local";
import Image from "next/image";
import cocktail1 from "@/public/cocktail-1.png";
import cocktail2 from "@/public/cocktail-2.png";
import cocktail3 from "@/public/cocktail-3.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

export default function Cocktails() {
  return (
    <div className="flex gap-12">
      <div>
        <h2 className={`${FesterFont.className} text-6xl`}>Нашите Коктейли</h2>
        <p className="text-xl pt-8">
          В Q вярваме, че всеки коктейл трябва да бъде преживяване. Нашите
          майсторски приготвени напитки съчетават изкуство, страст и иновативни
          техники, за да създадат уникални вкусове, които ще ви изненадат и
          вдъхновят.
        </p>
        <p className="text-xl pt-4">
          Насладете се на богатата палитра от вкусове и аромати, които ще
          събудят сетивата ви. Опитайте нашите авторски коктейли или споделете
          своите предпочитания с нас, за да създадем нещо специално само за вас.
        </p>
        <p className="text-xl pt-4">
          В Q коктейлите не са просто напитки – те са пътешествие в света на
          вкусовете и изкуството. Елате и открийте вашия нов любим коктейл.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex gap-5 items-end">
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={cocktail1}
                alt="Cocktail"
                style={{
                  width: "158px",
                  height: "auto",
                  marginRight: "28px",
                }}
              />
            </div>
            <div className="w-48 h-52 flex flex-col justify-center items-center bg-[#394940] rounded-3xl -mt-14 -z-10 text-2xl shadow-2xl">
              <p className="text-[#FFE259] pt-12 pb-2 border-b-2 border-[#222927]">
                Negroni
              </p>
              <p className="pt-1 font-bold text-[#FBB428]">13,50 лв.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={cocktail2}
                alt="Cocktail"
                style={{
                  width: "127px",
                  height: "auto",
                  marginLeft: "22px",
                }}
              />
            </div>
            <div className="w-48 h-52 flex flex-col justify-center items-center bg-[#394940] rounded-3xl -mt-14 -z-10 text-2xl shadow-2xl">
              <p className="text-[#FFE259] pt-12 pb-2 border-b-2 border-[#222927]">
                Mojito
              </p>
              <p className="pt-1 font-bold text-[#FBB428]">13,50 лв.</p>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div>
              <Image
                src={cocktail3}
                alt="Cocktail"
                style={{
                  width: "168px",
                  height: "auto",
                  marginRight: "12px",
                }}
              />
            </div>
            <div className="w-48 h-52 flex flex-col justify-center items-center bg-[#394940] rounded-3xl -mt-14 -z-10 text-2xl shadow-2xl">
              <p className="text-[#FFE259] pt-12 pb-2 border-b-2 border-[#222927]">
                Old Fashioned
              </p>
              <p className="pt-1 font-bold text-[#FBB428]">13,50 лв.</p>
            </div>
          </div>
        </div>
        <button
          className={`py-[18px] px-44 bg-gradient-to-r from-[#FFE259]  to-[#FFA751] text-xl font-semibold text-[#222927] rounded-full mt-[66px] ${FesterFont.className}`}
        >
          Открийте още любими вкусове
        </button>
      </div>
    </div>
  );
}
