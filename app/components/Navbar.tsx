"use client";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import MainNav from "./MainNav";
import { SwitchLanguage } from "../components/SwitchLanguage";
import { SwitchTheme } from "./SwitchTheme";
import image1 from "@/public/menu-bars.svg";
import image2 from "@/public/close.svg";
import logoDark from "@/public/logo-dark.svg";
import logoLight from "@/public/logo-light.svg";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "../utils/themeProvider";

export default function Navbar(): JSX.Element {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <div className="max-w-7xl">
      {/* <div className="max-w-screen"> */}
      <div className="max-w-7xl hidden fixed top-0 left-0 right-0 mx-auto sm:block z-50 bg-[#f2efea] dark:bg-[#222927]">
        {/* <div className="max-w-screen hidden fixed top-0 left-0 right-0 mx-auto sm:block z-50 bg-[#222927]"> */}
        <div className="px-4 sm:px-16 flex py-3 justify-between items-center border-b">
          <SwitchTheme />
          <MainNav>
            <Link href="/" className="ml-4 flex lg:ml-0 lg:mr-6 px-5">
              <Image
                src={theme === "dark" ? logoDark : logoLight}
                alt="Logo"
                priority
                style={{
                  width: "39px",
                  height: "auto",
                }}
              />
            </Link>
          </MainNav>
          <SwitchLanguage />
        </div>
      </div>
      <div
        className={`
           max-w-7xl block fixed top-0 left-0 right-0 mx-auto sm:hidden z-50
          ${
            isScrolled
              ? "transition-all duration-500 bg-[#f9f7f4] border-b border-[#f2eee9] rounded-b-2xl"
              : "transition-all duration-500"
          }`}
      >
        <div className="w-full px-2 flex h-16 justify-between items-center">
          <div>
            <Link href="/">
              <Image
                src={theme === "dark" ? logoDark : logoLight}
                alt="Logo"
                priority
                style={{
                  width: "39px",
                  height: "auto",
                }}
              />
            </Link>
          </div>
          {/* <button onClick={() => setOpen(true)}>
            <Image
              src={image5}
              alt="Menu image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
          </button> */}
        </div>
      </div>
      {open && (
        <motion.div
          ref={menuRef}
          className="fixed top-0 right-0 z-50 w-[240px] h-[324px] rounded-bl-full flex flex-col justify-center bg-[#f2eee9]"
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {/* <button
            onClick={() => setOpen(false)}
            className="self-end mr-2 -mt-16"
          >
            <Image
              src={image6}
              alt="Close image"
              style={{
                width: "32px",
                height: "auto",
              }}
            />
          </button> */}
          <div className="-mt-4">
            <MainNav />
          </div>
        </motion.div>
      )}
    </div>
  );
}
