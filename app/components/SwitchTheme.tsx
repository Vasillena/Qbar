"use client";

import Image from "next/image";
import themeDark from "@/public/theme-dark.svg";
import themeLight from "@/public/theme-light.svg";
import { useTheme } from "../utils/themeProvider";

export function SwitchTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button type="button" onClick={toggleTheme}>
        {theme === "light" ? (
          <Image src={themeDark} alt="Switch to dark theme" />
        ) : (
          <Image src={themeLight} alt="Switch to light theme" />
        )}
      </button>
    </div>
  );
}
