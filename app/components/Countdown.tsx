"use client";

import Fester from "next/font/local";
import React from "react";
import { useTimer } from "react-timer-hook";

const FesterFont = Fester({ src: "../../public/Fester-bold.otf" });

interface CountdownTimerProps {
  expiryTimestamp: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Timer expired"),
  });

  return (
    // <div className="max-w-screen mx-auto h-64 bg-[#2D3935]/80 backdrop-blur-sm">
    <div className="max-w-7xl mx-auto h-64 rounded-3xl dark:bg-[#2D3935]/80 bg-[#F2EFEA]/80 backdrop-blur-sm px-16">
      <div>
        <p className="py-6 text-center text-2xl font-light">
          До следващото парти остават...
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="w-64 h-36 dark:bg-[#394940] bg-[#B96001] rounded-[30px] flex flex-col justify-center items-center">
          <p
            className={`text-5xl dark:text-[#30312a] text-white ${FesterFont.className}`}
          >
            {days}
          </p>
          <p className="dark:text-[#FFC956] text-white">DAYS</p>
        </div>
        <div className="text-5xl dark:text-[#FFC956] text-[#30312a]">:</div>
        <div className="w-64 h-36 dark:bg-[#394940] bg-[#B96001] rounded-[30px] flex flex-col justify-center items-center">
          <p
            className={`text-5xl dark:text-[#30312a] text-white ${FesterFont.className}`}
          >
            {hours}
          </p>
          <p className="dark:text-[#FFC956] text-white">HOURS</p>
        </div>
        <div className="text-5xl dark:text-[#FFC956] text-[#30312a]">:</div>
        <div className="w-64 h-36 dark:bg-[#394940] bg-[#B96001] rounded-[30px] flex flex-col justify-center items-center">
          <p
            className={`text-5xl dark:text-[#30312a] text-white ${FesterFont.className}`}
          >
            {minutes}
          </p>
          <p className="dark:text-[#FFC956] text-white">MINUTES</p>
        </div>
        <div className="text-5xl dark:text-[#FFC956] text-[#30312a]">:</div>
        <div className="w-64 h-36 dark:bg-[#394940] bg-[#B96001] rounded-[30px] flex flex-col justify-center items-center">
          <p
            className={`text-5xl dark:text-[#30312a] text-white ${FesterFont.className}`}
          >
            {seconds}
          </p>
          <p className="dark:text-[#FFC956] text-white">SECONDS</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
