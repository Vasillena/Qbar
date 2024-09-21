"use client";

import React, { useState } from "react";

import Fester from "next/font/local";
import { useI18n } from "@/locales/client";
import { useTimer } from "react-timer-hook";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

interface CountdownTimerProps {
  expiryTimestamps: Date[];
}

interface TimeCardProps {
  value: number;
  label: string;
}

const TimeCard: React.FC<TimeCardProps> = React.memo(function TimeCard({
  value,
  label,
}) {
  return (
    <div className="w-20 sm:w-28 md:w-40 lg:w-56 min-[1440px]:w-64 h-14 sm:h-20 md:h-28 dark:bg-[#394940] bg-[#B96001] rounded-lg sm:rounded-[30px] flex flex-col justify-center items-center">
      <p className={`text-3xl lg:text-5xl text-white ${FesterFont.className}`}>
        {value}
      </p>
      <p className="dark:text-[#FFC956] text-xs text-white">{label}</p>
    </div>
  );
});

TimeCard.displayName = "TimeCard";

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  expiryTimestamps,
}): JSX.Element => {
  const t = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);

  const { seconds, minutes, hours, days, restart } = useTimer({
    expiryTimestamp: expiryTimestamps[currentIndex],
    onExpire: () => {
      if (currentIndex < expiryTimestamps.length - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        console.warn("All timers expired");
      }
    },
    autoStart: true,
  });

  React.useEffect(() => {
    if (currentIndex < expiryTimestamps.length) {
      restart(expiryTimestamps[currentIndex], true);
    }
  }, [currentIndex, expiryTimestamps, restart]);

  const timeUnits = [
    { value: days, label: t("hero.days") },
    { value: hours, label: t("hero.hours") },
    { value: minutes, label: t("hero.minutes") },
    { value: seconds, label: t("hero.seconds") },
  ];

  return (
    <div className="h-32 sm:h-40 md:h-48 lg:h-56 sm:rounded-3xl dark:bg-[#222927]/80 bg-[#F2EFEA]/80 backdrop-blur-sm px-1">
      <p className="py-3 lg:py-6 text-center sm:text-xl xl:text-2xl font-light">
        {t("hero.countdown")}
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
