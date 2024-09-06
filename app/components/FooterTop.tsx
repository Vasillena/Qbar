"use client";

import Fester from "next/font/local";
import Image from "next/image";
import MapIframe from "./MapIframe";
import icon1 from "@/public/footer-icon-1-dark.svg";
import icon2 from "@/public/footer-icon-2-dark.svg";
import icon3 from "@/public/footer-icon-3-dark.svg";
import icon4 from "@/public/footer-icon-4-dark.svg";
import icon5 from "@/public/footer-icon-1-light.svg";
import icon6 from "@/public/footer-icon-2-light.svg";
import icon7 from "@/public/footer-icon-3-light.svg";
import icon8 from "@/public/footer-icon-4-light.svg";
import { useI18n } from "@/locales/client";
import { useTheme } from "../utils/themeProvider";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

export default function FooterTop(): JSX.Element {
  const t = useI18n();
  const { theme } = useTheme();
  return (
    <div className="max-w-[1440px] mx-auto grid grid-cols-3 my-32 px-16 gap-10">
      {/* <div className="max-w-screen mx-auto grid grid-cols-3 my-32 pl-72 gap-10"> */}
      <div className="col-span-1">
        <div>
          <h2 className={`${FesterFont.className} text-6xl`}>Контакти</h2>
        </div>
        <div className="w-96 h-40 px-8 flex justify-start items-center gap-12">
          <div>
            <Image src={theme === "dark" ? icon1 : icon5} alt="Icon" />
          </div>
          <div>
            <p className="text-xl font-bold pb-3">Контакти</p>
            <p>+359 88 5888097</p>
            <p>qbarplovdiv@gmail.com</p>
          </div>
        </div>
        <div className="w-96 h-40 pl-8 border-t dark:border-[#FFC956] border-[#B96001] flex justify-start items-center gap-12">
          <div>
            <Image src={theme === "dark" ? icon2 : icon6} alt="Icon" />
          </div>
          <div>
            <p className="text-xl font-bold pb-3">Адрес</p>
            <p>Улица Братя Пулеви 1, </p>
            <p>Plovdiv, Bulgaria 4000</p>
          </div>
        </div>
        <div className="w-96 h-40 pl-8 border-t dark:border-[#FFC956] border-[#B96001] flex justify-start items-center gap-12">
          <div>
            <Image src={theme === "dark" ? icon3 : icon7} alt="Icon" />
          </div>
          <div>
            <p className="text-xl font-bold pb-3">Работно време</p>
            <p>
              Неделя - Четвъртък <span className="ml-5"></span>9:00 - 1:00
            </p>
            <p>
              Петък - Събота <span className="ml-14" />
              9:00 - 3:00
            </p>
          </div>
        </div>
        <div className="w-96 h-40 pl-8 border-t dark:border-[#FFC956] border-[#B96001] flex justify-start items-center gap-12">
          <div>
            <Image src={theme === "dark" ? icon4 : icon8} alt="Icon" />
          </div>
          <div>
            <p className="text-xl font-bold pb-3">Последвайте ни</p>
            <p>Facebook&nbsp;&nbsp;| &nbsp;&nbsp;@Qbarplovdiv </p>
            <p>Instagram&nbsp;&nbsp; | &nbsp;&nbsp;@Qbarplovdiv </p>
          </div>
        </div>
      </div>
      <div className="col-span-2 justify-self-end pt-4">
        <MapIframe />
      </div>
    </div>
  );
}
