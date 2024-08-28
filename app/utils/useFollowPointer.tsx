import { RefObject, useEffect } from "react";
import { frame, useMotionValue, useSpring } from "framer-motion";

// const spring = { damping: 3, stiffness: 50, restDelta: 0.001 };
const spring = { damping: 6, stiffness: 40, restDelta: 0.001 };

export function useFollowPointer(ref: RefObject<HTMLElement>) {
  const x = useSpring(useMotionValue(0), spring);
  const y = useSpring(useMotionValue(0), spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      frame.read(() => {
        x.set(clientX);
        y.set(clientY);
      });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [x, y]);

  return { x, y };
}
