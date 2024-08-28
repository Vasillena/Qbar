"use client";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";

interface BounceProps {
  children: React.ReactNode;
  delay?: number;
}

export default function Bounce({ children, delay = 0.4 }: BounceProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const spring = {
    type: "spring",
    stiffness: 100,
    damping: 10,
    delay: delay,
  };

  return (
    <div ref={ref} style={{ display: "inline-block" }}>
      <motion.div
        initial={{ opacity: 0, y: "-10%" }}
        animate={isInView ? { opacity: 1, y: ["60%", "0%"] } : {}}
        transition={spring}
      >
        {children}
      </motion.div>
    </div>
  );
}
