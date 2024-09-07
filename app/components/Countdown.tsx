"use client";

import Fester from "next/font/local";
import React from "react";
import { useTimer } from "react-timer-hook";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

interface CountdownTimerProps {
  expiryTimestamp: Date;
}

interface TimeCardProps {
  value: number;
  label: string;
}

const TimeCard: React.FC<TimeCardProps> = ({ value, label }) => {
  return (
    <div className="w-20 sm:w-28 md:w-36 lg:w-48 xl:w-56 min-[1440px]:w-64 h-14 sm:h-20 md:h-28 lg:h-36 dark:bg-[#394940] bg-[#B96001] rounded-lg sm:rounded-[30px] flex flex-col justify-center items-center">
      <p className={`text-3xl lg:text-5xl text-white ${FesterFont.className}`}>
        {value}
      </p>
      <p className="dark:text-[#FFC956] text-xs text-white">{label}</p>
    </div>
  );
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Timer expired"),
  });

  const timeUnits = [
    { value: days, label: "DAYS" },
    { value: hours, label: "HOURS" },
    { value: minutes, label: "MINUTES" },
    { value: seconds, label: "SECONDS" },
  ];

  return (
    <div className="h-32 sm:h-40 md:h-48 lg:h-64 sm:rounded-3xl dark:bg-[#2D3935]/80 bg-[#F2EFEA]/80 backdrop-blur-sm px-4 sm:px-8 lg:px-16">
      <p className="py-3 lg:py-6 text-center sm:text-xl xl:text-2xl font-light">
        До следващото парти остават...
      </p>
      <div className="w-full flex justify-between items-center">
        {timeUnits.map((unit, index) => (
          <React.Fragment key={index}>
            <TimeCard value={unit.value} label={unit.label} />
            {index < timeUnits.length - 1 && (
              <p className="text-xl sm:text-5xl dark:text-[#FFC956] text-[#30312a]">
                :
              </p>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;

// "use client";

// import Fester from "next/font/local";
// import React from "react";
// import { useTimer } from "react-timer-hook";

// const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

// interface CountdownTimerProps {
//   expiryTimestamp: Date;
// }

// interface TimeCardProps {
//   value: number;
//   label: string;
// }

// const TimeCard: React.FC<TimeCardProps> = ({ value, label }) => {
//   return (
//     <div className="flex-grow flex-shrink basis-0 h-14 sm:h-20 md:h-28 lg:h-36 dark:bg-[#394940] bg-[#B96001] rounded-lg sm:rounded-[30px] flex flex-col justify-center items-center">
//       <p className={`text-3xl lg:text-5xl text-white ${FesterFont.className}`}>
//         {value}
//       </p>
//       <p className="dark:text-[#FFC956] text-xs text-white">{label}</p>
//     </div>
//   );
// };

// const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiryTimestamp }) => {
//   const { seconds, minutes, hours, days } = useTimer({
//     expiryTimestamp,
//     onExpire: () => console.warn("Timer expired"),
//   });

//   const timeUnits = [
//     { value: days, label: "DAYS" },
//     { value: hours, label: "HOURS" },
//     { value: minutes, label: "MINUTES" },
//     { value: seconds, label: "SECONDS" },
//   ];

//   return (
//     <div className="max-w-[1440px] mx-auto h-32 sm:h-40 md:h-48 lg:h-64 sm:rounded-3xl dark:bg-[#2D3935]/80 bg-[#F2EFEA]/80 backdrop-blur-sm px-4 sm:px-8 lg:px-16">
//       <p className="py-3 lg:py-6 text-center sm:text-xl xl:text-2xl font-light">
//         До следващото парти остават...
//       </p>
//       <div className="flex justify-between items-center gap-3">
//         {timeUnits.map((unit, index) => (
//           <React.Fragment key={index}>
//             <TimeCard value={unit.value} label={unit.label} />
//             {index < timeUnits.length - 1 && (
//               <p className="flex-grow-0 flex-shrink-0 text-xl sm:text-5xl dark:text-[#FFC956] text-[#30312a]">
//                 :
//               </p>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CountdownTimer;
