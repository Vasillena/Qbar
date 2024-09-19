"use client";

import Image from "next/image";
import Link from "next/link";
import logoLight from "@/public/logo.svg";
import logoSavy from "@/public/savy.svg";
import socials1 from "@/public/socials-4.png";
import socials2 from "@/public/socials-3.png";
import { useTheme } from "../utils/themeProvider";

export default function Footer(): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className="max-w-screen dark:bg-[#222927] bg-[#f2efea]">
      <div className="max-w-[1440px] mx-auto flex items-end mb-12 px-2">
        <div>
          <Image
            src={logoLight}
            alt="Logo"
            priority
            style={{
              width: "126px",
              height: "auto",
              filter: theme === "dark" ? "invert(1) brightness(2)" : undefined,
            }}
          />
        </div>
        <div className="w-full flex flex-col">
          <div className=" mb-6 self-end flex gap-6">
            <Link
              href="https://www.facebook.com/Qbarplovdiv"
              aria-label="Facebook"
              target="_blank"
              className="relative inline-block transition-shadow duration-300 ease-in-out "
            >
              <div
                className="relative w-6 h-6  overflow-hidden shadow-none hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080]"
                style={{
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={socials1}
                  alt="Socials"
                  className="w-6 h-auto "
                  style={{
                    filter:
                      theme === "dark" ? "invert(1) brightness(2)" : undefined,
                  }}
                />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/qbarplovdiv/"
              aria-label="Instagram"
              target="_blank"
              className="relative inline-block transition-shadow duration-300 ease-in-out"
            >
              <div
                className="relative w-6 h-6  overflow-hidden shadow-none hover:shadow-[0_0_20px_#B96001] dark:hover:shadow-[0_0_20px_#FFD70080]"
                style={{
                  borderRadius: "8px",
                }}
              >
                <Image
                  src={socials2}
                  alt="Instagram"
                  className="w-6 h-auto"
                  style={{
                    filter:
                      theme === "dark" ? "invert(1) brightness(2)" : undefined,
                  }}
                />
              </div>
            </Link>
          </div>
          <div className="border-t dark:border-[#FFC956] border-[#B96001] py-6 ml-20 flex flex-col md:flex-row justify-between font-light text-center md:text-left">
            <div>
              <p>Copyright © 2024 - All rights reserved</p>
            </div>
            <div className="flex gap-2 justify-center items-end">
              <p>Design & Build by </p>
              <Link
                href="https://savy-creations.vercel.app"
                aria-label="Savy Creations"
                target="_blank"
                className="relative inline-block transition-shadow duration-300 ease-in-out"
              >
                <Image
                  src={logoSavy}
                  alt="Savy logo"
                  className="w-12 mb-[2px] h-auto"
                  style={{
                    filter:
                      theme === "dark" ? "invert(1) brightness(2)" : undefined,
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
