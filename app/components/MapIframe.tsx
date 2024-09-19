"use client";

import { useEffect } from "react";

interface MapIframeProps {
  source: string;
}

export default function MapIframe({ source }: MapIframeProps): JSX.Element {
  useEffect(() => {
    const existingIframe = document.querySelector("#map iframe");
    if (existingIframe) return;

    const iframe = document.createElement("iframe");
    iframe.src = source;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
    iframe.loading = "lazy";
    iframe.title = "Custom map showing location";

    const container = document.getElementById("map");
    if (container) {
      container.appendChild(iframe);
    }
  }, [source]);

  return <div className="w-full h-full" id="map" />;
}
