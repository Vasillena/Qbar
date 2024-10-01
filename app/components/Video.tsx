export function Video(): JSX.Element {
  return (
    <div className="relative w-full h-full flex items-start justify-center overflow-hidden">
      <video
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        preload="auto"
        className="object-cover scale-125"
      >
        {/* <source src="/hero.webm" type="video/webm" /> */}
        <source src="/hero-2.webm" type="video/webm" />
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
