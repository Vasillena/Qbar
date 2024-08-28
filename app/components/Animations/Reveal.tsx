"use client";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
}

export default function Reveal({ children }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: "-10%" }}
        animate={isInView ? { opacity: 1, y: "0" } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
