import { Oswald } from "next/font/google";
import localFont from "next/font/local";

export const oswald = Oswald({
  subsets: ["latin", "cyrillic"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const SixHands = localFont({ src: "../../public/SixHands.otf" });
export const Trailmade = localFont({
  src: "../../public/Trailmade.otf",
});
