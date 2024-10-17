"use client";

import { useEffect, useMemo, useRef } from "react";

import { useTheme } from "../utils/themeProvider";

export function Video(): JSX.Element {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroVideo = useMemo(
    () => (theme === "dark" ? "/hero-dark.webm" : "/hero-light.webm"),
    [theme]
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [heroVideo]);

  return (
    <div className="relative w-full h-full flex items-start justify-center overflow-hidden pt-1">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        preload="auto"
        className="object-cover scale-150 -ml-10"
      >
        <source src={heroVideo} type="video/webm" />
        {/* Optional: Add a track for captions if you have them */}
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r dark:from-[#222927] from-[#f2efea] to-transparent w-3/12 will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-l dark:from-[#222927] from-[#f2efea] to-transparent w-3/12 ml-auto will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-b dark:from-[#222927] from-[#f2efea] to-transparent mb-auto h-20 will-change-transform" />
        <div className="absolute inset-0 bg-gradient-to-t dark:from-[#222927] from-[#f2efea] to-transparent mt-auto h-32 will-change-transform" />
      </div>
    </div>
  );
}
