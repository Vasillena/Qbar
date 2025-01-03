import Image from "next/image";
import Reveal from "./Animations/Reveal";
import dessert from "@/public/cocktail-4.png";
import { getI18n } from "@/locales/server";
import { oswald } from "../utils/fonts";

export default async function Food(): Promise<JSX.Element> {
  const t = await getI18n();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-x-6 items-end mt-20 relative">
        <div className="absolute w-full lg:w-[490px] h-[540px] sm:h-[460px] md:h-[372px] rounded-3xl xl:rounded-br-[4rem] shadow-2xl dark:bg-[#394940] bg-[#B96001] -z-10" />
        <div className="lg:col-span-3 relative z-10">
          <Image
            src={dessert}
            alt="Dessert"
            className="w-[480px] md:w-[580px] xl:w-[620px] h-auto xl:ml-[70px] mx-auto sm:-mb-8 md:mb-0"
          />
        </div>

        <div className="lg:col-span-2 text-center lg:text-left lg:mt-0 p-10 md:pt-1 lg:p-0 text-white lg:text-[#30312a] dark:lg:text-white">
          <Reveal initial={{ x: "5%" }} animate={{ x: "0%" }}>
            <h2
              className={`${oswald.className} inline-block text-3xl font-bold sm:text-5xl xl:text-6xl hover-target`}
            >
              {t("food.title")}
            </h2>
            <p className="sm:text-lg xl:text-xl pt-8 md:leading-6">
              {t("food.text-1")}
            </p>
            <p className="sm:text-lg xl:text-xl pt-4 md:leading-6">
              {t("food.text-2")}
            </p>
          </Reveal>
        </div>
      </div>
      {/* <div id="gallery" /> */}
    </>
  );
}
