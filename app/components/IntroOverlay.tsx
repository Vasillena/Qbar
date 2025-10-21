"use client";

import Image from "next/image";
import Link from "next/link";
import SwitchLanguageForIntrо from "./SwitchLanguageForIntro";
import introImage from "@/public/intro.webp";
import logo from "@/public/logo.svg";
import { oswald } from "../utils/fonts";
import { useI18n } from "@/locales/client";
import { useState } from "react";

export default function IntroOverlay({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useI18n();
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <Image
            src={introImage}
            alt="Intro Background"
            fill
            className="object-cover opacity-70"
            priority
          />
          <div className="relative flex flex-col w-full h-full justify-center">
            <div className="flex-1 flex flex-col items-center justify-center text-center text-white px-4 relative z-10 gap-12">
              <div className="flex items-end gap-2">
                <Image
                  src={logo}
                  alt="Logo"
                  priority
                  style={{
                    width: "126px",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                />
                <div className="overflow-hidden relative h-11">
                  <div className="text-4xl animate-[role-change_6s_infinite] h-full">
                    <span className="block h-full"> </span>
                    <span className="block h-full">Breakfast</span>
                    <span className="block h-full">Coffee</span>
                    <span className="block h-full">Brunch</span>
                    <span className="block h-full">Lunch</span>
                    <span className="block h-full">Party</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowIntro(false)}
                className={`inline-block relative py-3 px-32 bg-[#151515] text-xl text-center text-white rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full before:shadow-[inset_0px_4px_4px_#DABB7E before:pointer-events-none transition-shadow duration-300 ease-in-out hover:shadow-[0_0_20px_#FFD70080] ${oswald.className}`}
              >
                {t("hero.continue")}
              </button>
            </div>
            <div className="w-full h-auto mx-auto mb-12 px-4 flex flex-col md:flex-row justify-between items-center text-white gap-6">
              <div className="flex flex-col items-center md:items-start">
                <p>{t("contacts.text-3-2")}</p>
                <p>9:00 - 3:00</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p>+359 88 5888097</p>
                <p>qbarplovdiv@gmail.com</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <p>{t("contacts.text-2-1")}</p>
                <p>{[t("contacts.text-2-3")]}</p>
              </div>
              <div className="flex flex-col items-center md:items-start">
                <Link
                  href="https://www.facebook.com/Qbarplovdiv"
                  aria-label="Facebook"
                  target="_blank"
                >
                  Facebook | @Qbarplovdiv
                </Link>
                <Link
                  href="https://www.instagram.com/qbarplovdiv/"
                  aria-label="Instagram"
                  target="_blank"
                >
                  Instagram | @Qbarplovdiv
                </Link>
              </div>
            </div>
            <SwitchLanguageForIntrо />
          </div>
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ${
          showIntro ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}
