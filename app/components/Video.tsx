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
    // Reload the video when the theme changes
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [heroVideo]);

  return (
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
        {/* <source src="/hero.webm" type="video/webm" /> */}
        <source
          // src={theme === "dark" ? "/hero-dark.webm" : "/hero-light.webm"}
          src={heroVideo}
          type="video/webm"
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
    </div>
  );
}
