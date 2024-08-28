"use client";

import React from "react";
import { useTimer } from "react-timer-hook";

interface CountdownTimerProps {
  expiryTimestamp: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ expiryTimestamp }) => {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("Timer expired"),
  });

  return (
    <div className="w-full">
      <div>
        <p>До следващото парти остават...</p>
      </div>
      <div className="flex items-center">
        <div className="w-[278px] h-36 bg-[#394940] rounded-[30px]">
          <p>{days}</p>
          <p>days</p>
        </div>
        <div className="text-5xl">:</div>
      </div>
      <div>
        <span>{days}</span> days <span>{hours}</span> hours{" "}
        <span>{minutes}</span> minutes <span>{seconds}</span> seconds
      </div>
    </div>
  );
};

export default CountdownTimer;
