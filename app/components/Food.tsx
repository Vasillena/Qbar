import Fester from "next/font/local";
import Image from "next/image";
import Reveal from "./Animations/Reveal";
import dessert from "@/public/cocktail-4.png";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

export default function Food() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-6 items-end mt-20 relative">
        <div className="absolute w-full lg:w-[490px] h-[540px] sm:h-[460px] md:h-[372px] rounded-3xl shadow-2xl dark:bg-[#394940] bg-[#B96001] -z-10" />
        <div className="lg:col-span-3 relative z-10">
          <Image
            src={dessert}
            alt="Dessert"
            className="w-[480px] md:w-[580px] xl:w-[620px] h-auto xl:ml-[70px] mx-auto"
          />
        </div>

        <div className="lg:col-span-2 text-center lg:text-left lg:mt-0 p-10 md:pt-1 lg:p-0 text-white lg:text-[#30312a] dark:lg:text-white">
          <Reveal initial={{ x: "5%" }} animate={{ x: "0%" }}>
            <h2
              className={`${FesterFont.className} text-3xl sm:text-5xl xl:text-6xl`}
            >
              Вкусни Изкушения
            </h2>
            <p className="sm:text-lg xl:text-xl pt-8 md:leading-6">
              В Q не само музиката е на високо ниво, но и кухнята предлага
              изкушения за всеки вкус. Нашите майстор-готвачи поднасят уникални
              ястия, вдъхновени от най-добрите световни кулинарни традиции.
            </p>
            <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
              Всеки ден ви очаква специалитет на деня, приготвен с най-свежите
              продукти и поднесен с внимание към детайла. Насладете се на
              вкусово приключение, което ще допълни вашето Q изживяване в
              сърцето на Капана.
            </p>
          </Reveal>
        </div>
      </div>
      <div id="gallery" />
    </>
  );
}
