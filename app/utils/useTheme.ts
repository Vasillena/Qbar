// "use client";

// import { useEffect, useState } from "react";

// export function useTheme() {
//   const [theme, setTheme] = useState<string>("light");

//   useEffect(() => {
//     const storedTheme = localStorage.getItem("theme");
//     if (storedTheme) {
//       setTheme(storedTheme);
//       document.documentElement.classList.add(storedTheme);
//     } else {
//       document.documentElement.classList.add("light");
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === "light" ? "dark" : "light";
//     setTheme(newTheme);
//     document.documentElement.classList.remove("light", "dark");
//     document.documentElement.classList.add(newTheme);
//     localStorage.setItem("theme", newTheme);
//   };

//   // Trigger re-render on theme change
//   useEffect(() => {
//     document.documentElement.classList.add(theme);
//     return () => {
//       document.documentElement.classList.remove(theme);
//     };
//   }, [theme]);

//   return { theme, toggleTheme };
// }
