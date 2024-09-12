export function Video() {
  return (
    <div className="relative w-full h-full flex items-start justify-center overflow-hidden">
      <video
        width="100%"
        height="auto"
        autoPlay
        loop
        muted
        preload="auto"
        className="object-cover"
      >
        {/* <source src="/hero.webm" type="video/webm" /> */}
        <source src="/hero-2.mp4" type="video/mp4" />
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
