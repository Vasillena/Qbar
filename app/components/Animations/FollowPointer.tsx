"use client";

import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import { useFollowPointer } from "../../utils/useFollowPointer";
import { useTheme } from "@/app/utils/themeProvider";

export default function FollowPointer() {
  const { theme } = useTheme();
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hoverStyles, setHoverStyles] = useState({
    size: 6,
    backgroundColor: theme === "dark" ? "#FFE259" : "#30312a",
    mixBlendMode: "normal",
    boxShadow: "unset",
  });

  useEffect(() => {
    const checkIfTouchDevice = () => {
      if (
        "ontouchstart" in window ||
        window.matchMedia("(pointer: coarse)").matches
      ) {
        setIsTouchDevice(true);
      }
    };

    checkIfTouchDevice();

    const handleMouseEnter = () => {
      setHoverStyles({
        size: 80,
        backgroundColor: "#fff",
        mixBlendMode: "difference",
        boxShadow: "0px 0px 15px -5px white",
      });
    };

    const handleMouseLeave = () => {
      setHoverStyles({
        size: 6,
        backgroundColor: theme === "dark" ? "#FFE259" : "#30312a",
        mixBlendMode: "normal",
        boxShadow: "unset",
      });
    };

    const hoverElements = document.querySelectorAll(".hover-target");

    hoverElements.forEach((hoverElement) => {
      hoverElement.addEventListener("mouseenter", handleMouseEnter);
      hoverElement.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverElements.forEach((hoverElement) => {
        hoverElement.removeEventListener("mouseenter", handleMouseEnter);
        hoverElement.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [theme]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        width: `${hoverStyles.size}px`,
        height: `${hoverStyles.size}px`,
        borderRadius: "50%",
        background: hoverStyles.backgroundColor,
        mixBlendMode: hoverStyles.mixBlendMode as any,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        transition: "width 0.3s ease, height 0.3s ease",
        pointerEvents: "none",
      }}
    />
  );
}
