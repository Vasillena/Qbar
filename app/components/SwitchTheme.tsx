// "use client";

// import { useEffect, useState } from "react";

// import Image from "next/image";
// import themeDark from "@/public/theme-dark.svg";
// import themeLight from "@/public/theme-light.svg";

// export function SwitchTheme() {
//   const [theme, setTheme] = useState(() => {
//     // Initialize theme from localStorage or default to light
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("theme") || "light";
//     }
//     return "light";
//   });

//   useEffect(() => {
//     const root = document.documentElement;
//     if (theme === "dark") {
//       root.classList.add("dark");
//     } else {
//       root.classList.remove("dark");
//     }
//     // Save the theme in localStorage
//     localStorage.setItem("theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === "light" ? "dark" : "light");
//   };

//   return (
//     <button type="button" onClick={toggleTheme}>
//       <Image
//         src={theme === "light" ? themeDark : themeLight}
//         alt={
//           theme === "light" ? "Switch to Dark Theme" : "Switch to Light Theme"
//         }
//       />
//     </button>
//   );
// }

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
