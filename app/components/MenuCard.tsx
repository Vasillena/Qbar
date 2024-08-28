"use cient";

import { useCurrentLocale } from "@/locales/client";

interface MenuCardProps {
  text1: string;
  text2?: string | null;
  text3?: string;
  onClick: () => void;
  active?: boolean;
}

export default function MenuCard({
  text1,
  text2,
  text3,
  onClick,
  active,
}: MenuCardProps) {
  return (
    <>
      <button
        onClick={onClick}
        aria-label="Category"
        className={`flex justify-center items-center px-0 py-0 md:px-2 md:py-1 bg-[#f0f0f0] hover:bg-[#f0f0f0] focus:outline-none`}
      >
        <div
          className={`min-w-[80vw] md:min-w-[140px] flex flex-col md:flex-row justify-center items-center aspect-w-1 aspect-h-1 md:rounded-full backdrop-blur-sm ${
            active ? "bg-[#5B4966]/70" : "bg-[#5B4966]/50"
          } shadow-none md:shadow-lg py-1 md:py-0`}
        >
          <p className="text-black text-base">{text1}</p>
          {text2 && <p className="text-black text-base">{text2}</p>}
          {text3 && (
            <p className="text-black text-base">
              {/* {desktop ? "" : "\u00A0"} */}
              {text3}
            </p>
          )}
        </div>
      </button>
      <hr className="border-t border-gray-300 mt-4" />
    </>
  );
}
