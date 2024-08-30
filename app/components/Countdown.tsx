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
    <div className="max-w-screen mx-auto h-64 bg-[#2D3935]/80 backdrop-blur-sm">
      {/* <div className="max-w-7xl mx-auto rounded-3xl h-64 bg-[#2D3935]/80 backdrop-blur-sm px-16"> */}
      <div className="max-w-7xl mx-auto rounded-3xl h-64 px-16">
        <div>
          <p className="py-6 text-center text-2xl font-light">
            До следващото парти остават...
          </p>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-64 h-36 bg-[#394940] rounded-[30px] flex flex-col justify-center items-center">
            <p className={`text-5xl ${FesterFont.className}`}>{days}</p>
            <p className="text-[#FFC956]">DAYS</p>
          </div>
          <div className="text-5xl text-[#FFC956]">:</div>
          <div className="w-64 h-36 bg-[#394940] rounded-[30px] flex flex-col justify-center items-center">
            <p className={`text-5xl ${FesterFont.className}`}>{hours}</p>
            <p className="text-[#FFC956]">HOURS</p>
          </div>
          <div className="text-5xl text-[#FFC956]">:</div>
          <div className="w-64 h-36 bg-[#394940] rounded-[30px] flex flex-col justify-center items-center">
            <p className={`text-5xl ${FesterFont.className}`}>{minutes}</p>
            <p className="text-[#FFC956]">MINUTES</p>
          </div>
          <div className="text-5xl text-[#FFC956]">:</div>
          <div className="w-64 h-36 bg-[#394940] rounded-[30px] flex flex-col justify-center items-center">
            <p className={`text-5xl ${FesterFont.className}`}>{seconds}</p>
            <p className="text-[#FFC956]">SECONDS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
