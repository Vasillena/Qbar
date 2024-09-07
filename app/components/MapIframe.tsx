"use client";

import { useEffect } from "react";

interface MapIframeProps {
  source: string;
}

export default function MapIframe({ source }: MapIframeProps) {
  useEffect(() => {
    const existingIframe = document.querySelector("#contact iframe");
    if (existingIframe) return;

    const iframe = document.createElement("iframe");
    iframe.src = source;
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "none";
    iframe.loading = "lazy";
    iframe.title = "Custom map showing location";

    const container = document.getElementById("contact");
    if (container) {
      container.appendChild(iframe);
    }
  }, []);

  return <div className="w-full h-full" id="contact" />;
}
