"use client";

import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { useTheme } from "../utils/themeProvider";

export function SwitchTheme() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button type="button" onClick={toggleTheme} aria-label="Switch theme">
        {theme === "light" ? (
          <BsMoonStarsFill className="hover:fill-[#B96001]" />
        ) : (
          <HiSun className="hover:fill-[#FFC956]" />
        )}
      </button>
    </div>
  );
}
