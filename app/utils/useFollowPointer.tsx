import { RefObject, useEffect } from "react";
import { frame, useMotionValue, useSpring } from "framer-motion";

// const spring = { damping: 50, stiffness: 1500, restDelta: 0.0001 };
const spring = { damping: 50, stiffness: 500, restDelta: 0.0001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        x.set(clientX - 10);
        y.set(clientY - 10);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return { x, y };
}
