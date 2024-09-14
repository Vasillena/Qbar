import { AnimatePresence, motion } from "framer-motion";
import { FesterBold, SixHands } from "../utils/fonts";
import Image, { StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

import menuListBG from "../menuList/menuListBG.json";
import menuListEN from "../menuList/menuList.json";
import { useCurrentLocale } from "@/locales/client";
import { useTheme } from "../utils/themeProvider";

interface MenuCardProps {
  text: string;
  imageDark: StaticImageData;
  imageLight: StaticImageData;
  isOpen: boolean;
  onToggle: () => void;
}

export default function MenuCard({
  text,
  imageDark,
  imageLight,
  isOpen,
  onToggle,
}: MenuCardProps) {
  const locale = useCurrentLocale();
  const { theme } = useTheme();
  const menuList = locale === "bg" ? menuListBG : menuListEN;

  const accordionRef = useRef<HTMLDivElement>(null);

  // Scroll to the top of the accordion when it is opened
  useEffect(() => {
    if (isOpen && accordionRef.current) {
      // Delay scrolling to ensure animation is complete
      const timer = setTimeout(() => {
        if (accordionRef.current) {
          const rect = accordionRef.current.getBoundingClientRect();
          window.scrollTo({
            top: window.scrollY + rect.top - 50, // Adjust offset here (e.g., 50 pixels)
            behavior: "smooth",
          });
        }
      }, 300); // Adjust delay as needed to match your animation duration

      return () => clearTimeout(timer); // Cleanup on unmount
    }
  }, [isOpen]);

  const renderMenu = () => {
    const selectedCategory = menuList.menu.filter(
      (item) => item.category === text
    );

    return (
      <div className="mb-10">
        {selectedCategory.map((item) => (
          <div key={item.id} className="mt-10 sm:px-12 flex flex-col">
            {item["semi-category"] && (
              <p
                className={`text-center my-4 text-3xl md:text-4xl dark:text-[#FFC956] text-[#B96001] ${SixHands.className}`}
              >
                {item["semi-category"]}
              </p>
            )}
            <div className="flex items-center md:text-xl lg:text-2xl font-bold">
              <p>{item.name}</p>
              <span className="flex-grow border-b border-dotted dark:border-[#394940] sm:dark:border-white border-[#FDF7EF] sm:border-[#2A3431] mx-2 pt-1.5" />
              <p>{`${item.quantity} / ${item.price}`}</p>
            </div>
            {item.description && (
              <p className="text-[14px] md:text-lg lg:text-xl self-start text-left pr-[40%]">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full">
      <h2 id="accordion-collapse-heading-1">
        <button
          type="button"
          className={`flex items-center justify-between w-full sm:w-10/12 mx-auto p-5 font-medium rtl:text-right border-b dark:border-[#4A5F54] border-[#B96001] ${
            isOpen
              ? "bg-[#30312A] dark:bg-[#FFC956] text-white dark:text-[#222927]"
              : ""
          }`}
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls="accordion-collapse-body-1"
          aria-label={`Toggle ${text} menu`}
        >
          <div className="w-10 h-10 flex justify-center items-center">
            <Image
              src={
                theme === "dark"
                  ? isOpen
                    ? imageLight
                    : imageDark
                  : isOpen
                  ? imageDark
                  : imageLight
              }
              alt={text}
              style={{ width: "auto", height: "30px" }}
            />
          </div>

          <h2 className={`text-2xl lg:text-3xl ${FesterBold.className}`}>
            {text}
          </h2>
          <div className="w-10 h-10 flex justify-center items-center">
            <p className="text-4xl">{isOpen ? "-" : "+"}</p>
          </div>
        </button>
      </h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="overflow-hidden w-full sm:w-10/12 mx-auto px-2 border border-b-0 border-gray-200 dark:border-gray-700 bg-[#FDF7EF] dark:bg-[#394940]"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            ref={accordionRef}
            aria-labelledby="accordion-collapse-heading-1"
          >
            {renderMenu()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// "use client";

// import { FesterBold, SixHands } from "../utils/fonts";
// import Image, { StaticImageData } from "next/image";

// import menuListBG from "../menuList/menuListBG.json";
// import menuListEN from "../menuList/menuList.json";
// import { useCurrentLocale } from "@/locales/client";
// import { useTheme } from "../utils/themeProvider";

// interface MenuCardProps {
//   text: string;
//   image: StaticImageData;
//   isOpen: boolean;
//   onToggle: () => void;
// }

// const categoryTranslations: Record<string, Record<string, string>> = {
//   bg: {
//     "Hot Drinks": "Топли Напитки",
//     "Soft Drinks": "Безалкохолни Напитки",
//     "Mixed Drinks": "Смесени напитки",
//     Wine: "Вино",
//     Alcohol: "Алкохол",
//     // Beer: "Бира",
//   },
//   en: {
//     "Hot Drinks": "Hot Drinks",
//     "Soft Drinks": "Soft Drinks",
//     "Mixed Drinks": "Mixed Drinks",
//     Wine: "Wine",
//     Alcohol: "Alcohol",
//     // Beer: "Beer",
//   },
// };

// export default function MenuCard({
//   text,
//   image,
//   isOpen,
//   onToggle,
// }: MenuCardProps) {
//   const locale = useCurrentLocale();
//   const { theme } = useTheme();
//   const menuList = locale === "bg" ? menuListBG : menuListEN;

//   const renderMenu = () => {
//     const selectedCategory = menuList.menu.filter(
//       (item) => item.category === text
//     );
//     const categoryName = categoryTranslations[locale][text] || text;

//     return (
//       <div className="mb-10">
//         {/* <p
//           className={`text-center my-4 text-3xl dark:text-[#FFC956] text-[#B96001] ${SixHandsFont.className}`}
//         >
//           {categoryName}
//         </p> */}
//         {selectedCategory.map((item) => (
//           <div key={item.id} className="mt-10 sm:px-12 flex flex-col">
//             {item["semi-category"] && (
//               <p
//                 className={`text-center my-4 text-3xl md:text-4xl dark:text-[#FFC956] text-[#B96001] ${SixHands.className}`}
//               >
//                 {item["semi-category"]}
//               </p>
//             )}
//             <div className="flex items-center md:text-xl lg:text-2xl font-bold">
//               <p>{item.name}</p>
//               <span className="flex-grow border-b border-dotted dark:border-[#394940] sm:dark:border-white border-[#FDF7EF] sm:border-[#2A3431] mx-2 pt-1.5" />
//               <p>{`${item.quantity} / ${item.price}`}</p>
//             </div>
//             {item.description && (
//               <p className="text-[14px] md:text-lg lg:text-xl self-start text-left pr-[40%]">
//                 {item.description}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div data-accordion="collapse" className="w-full">
//       <h2 id="accordion-collapse-heading-1">
//         <button
//           type="button"
//           className={`flex items-center justify-between w-full sm:w-10/12 mx-auto p-5 font-medium rtl:text-right border-b dark:border-[#4A5F54] border-[#B96001]  ${
//             isOpen
//               ? "bg-[#30312A] dark:bg-[#FFC956] text-white dark:text-[#222927]"
//               : ""
//           }`}
//           onClick={onToggle}
//           aria-expanded={isOpen}
//           aria-controls="accordion-collapse-body-1"
//           aria-label={`Toggle ${text} menu`}
//         >
//           <div className="w-10 h-10 flex justify-center items-center">
//             <Image
//               src={
//                 image
//               }
//               alt={text}
//               style={{
//                 width: "auto",
//                 height: "30px",
//                 filter:
//                   theme === "dark"
//                     ? isOpen
//                       ? undefined
//                       : "invert(1) brightness(2)"
//                     : isOpen
//                     ? "invert(1) brightness(2)"
//                     : undefined,
//               }}
//             />
//           </div>

//           <h2 className={`text-2xl lg:text-3xl ${FesterBold.className}`}>
//             {text}
//           </h2>
//           <div className="w-10 h-10 flex justify-center items-center">
//             <p className="text-4xl">{isOpen ? "-" : "+"}</p>
//           </div>
//         </button>
//       </h2>
//       <div
//         className={`${
//           isOpen ? "block mb-10" : "hidden"
//         } w-full sm:w-10/12 mx-auto p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-[#FDF7EF] dark:bg-[#394940] transition-all duration-300 ease-in-out`}
//         aria-labelledby="accordion-collapse-heading-1"
//       >
//         {renderMenu()}
//       </div>
//     </div>
//   );
// }
