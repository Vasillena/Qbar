"use client";

import { useEffect } from "react";
import { useTheme } from "../utils/themeProvider";

export default function MapIframe() {
  const { theme } = useTheme();
  useEffect(() => {
    const existingIframe = document.querySelector("#contact iframe");
    if (existingIframe) return;

    const source =
      theme === "dark"
        ? "https://snazzymaps.com/embed/636408"
        : "https://snazzymaps.com/embed/638475";

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
