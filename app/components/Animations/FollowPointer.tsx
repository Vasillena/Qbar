"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { useFollowPointer } from "../../utils/useFollowPointer";
import { useRef } from "react";

export default function FollowPointer() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

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
  }, []);

  if (isTouchDevice) {
    return null;
  }

  return (
    <motion.div
      ref={ref}
      style={{
        x,
        y,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        background: "#5B4966",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
    />
  );
}
