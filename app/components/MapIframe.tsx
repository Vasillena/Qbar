"use client";

import { useEffect } from "react";

export default function MapIframe() {
  useEffect(() => {
    const existingIframe = document.querySelector("#contact iframe");
    if (existingIframe) return;

    const iframe = document.createElement("iframe");
    iframe.src = "https://snazzymaps.com/embed/636408";
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
