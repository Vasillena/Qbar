"use client";

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
import { oswald } from "../utils/fonts";
import { useI18n } from "@/locales/client";
import { useTheme } from "../utils/themeProvider";

const ContactInfoItem = ({
  iconDark,
  iconLight,
  title,
  lines,
  noBorder = false,
}: {
  iconDark: any;
  iconLight: any;
  title: string;
  lines: string[];
  noBorder?: boolean;
}) => {
  const { theme } = useTheme();
  const icon = theme === "dark" ? iconDark : iconLight;

  return (
    <div
      className={`w-80 sm:w-96 h-40 mx-auto pl-4 sm:pl-8 flex justify-start items-center gap-6 sm:gap-12 ${
        noBorder ? "" : "border-t dark:border-[#FFC956] border-[#B96001]"
      }`}
    >
      <div>
        <Image src={icon} alt="Icon" />
      </div>
      <div>
        <p className="sm:text-lg xl:text-xl font-bold pb-3">{title}</p>
        {lines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default function FooterTop(): JSX.Element {
  const t = useI18n();
  const { theme } = useTheme();

  return (
    <>
      <div id="contact" />
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 xl:grid-cols-3 my-20 sm:px-16 gap-10">
        <div className="xl:col-span-1 xl:justify-self-start flex flex-col lg:flex-row xl:flex-col items-center lg:items-end justify-between">
          <div>
            <h2
              className={`${oswald.className} inline-block text-3xl font-bold sm:text-5xl xl:text-6xl text-center lg:text-left hover-target`}
            >
              {t("contacts.text-1")}
            </h2>
            <ContactInfoItem
              iconDark={icon1}
              iconLight={icon5}
              title={t("contacts.text-1")}
              lines={["+359 88 5888097", "qbarplovdiv@gmail.com"]}
              noBorder
            />
            <ContactInfoItem
              iconDark={icon2}
              iconLight={icon6}
              title={t("contacts.text-2")}
              lines={[t("contacts.text-2-1"), t("contacts.text-2-2")]}
            />
          </div>
          <div>
            <ContactInfoItem
              iconDark={icon3}
              iconLight={icon7}
              title={t("contacts.text-3")}
              lines={[t("contacts.text-3-1")]}
            />
            <ContactInfoItem
              iconDark={icon4}
              iconLight={icon8}
              title={t("contacts.text-4")}
              lines={["Facebook | @Qbarplovdiv", "Instagram | @Qbarplovdiv"]}
            />
          </div>
        </div>
        <div
          key={theme}
          className="xl:col-span-2 w-full xl:w-[700px] h-[400px] xl:h-[650px] justify-self-center xl:justify-self-end mt-4 border dark:border-[#FFC956] border-[#B96001]"
        >
          <MapIframe
            source={
              theme === "dark"
                ? "https://snazzymaps.com/embed/636408"
                : "https://snazzymaps.com/embed/638475"
            }
          />
        </div>
      </div>
    </>
  );
}
