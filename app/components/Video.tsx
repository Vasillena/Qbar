"use client";

import { useEffect, useMemo, useRef } from "react";

import { useTheme } from "../utils/themeProvider";

export function Video(): JSX.Element {
  const { theme } = useTheme();
  const videoRef = useRef<HTMLVideoElement>(null);

  const heroVideo = useMemo(
    () => (theme === "dark" ? "/hero-dark.mp4" : "/hero-light.webm"),
    [theme]
  );

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [heroVideo]);

  return (
    // <div className="relative mx-auto w-4/5 h-auto flex items-start justify-center overflow-hidden">
    <div className="relative w-full h-full flex items-start justify-center overflow-hidden">
      <video
        ref={videoRef}
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        preload="auto"
        className="object-cover scale-150"
      >
        <source
          src={heroVideo}
          type={theme === "dark" ? "video/mp4" : "video/webm"}
        />
        {/* Optional: Add a track for captions if you have them */}
        {/* <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        /> */}
        Your browser does not support the video tag.
      </video>
      {/* <div className="absolute inset-0 bg-[#222927]/80  pointer-events-none" /> */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r dark:from-[#222927]/80 from-[#f2efea]/80 to-transparent w-3/12"></div>
        <div className="absolute inset-0 bg-gradient-to-l dark:from-[#222927]/80 from-[#f2efea]/80 to-transparent w-3/12 ml-auto"></div>
      </div>
    </div>
  );
}
