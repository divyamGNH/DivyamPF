import { motion, useMotionValue, useSpring } from "framer-motion";
import useMouseStore from "../Store/useMouseStore.js";
import { useEffect } from "react";

const MaskLayer = ({ children }) => {
  const { x, y, hover } = useMouseStore();

  // base motion value
  const size = useMotionValue(40);

  // spring for smoothness
  const smoothSize = useSpring(size, {
    stiffness: 120, // lower = slower
    damping: 20,    // higher = smoother
    mass: 0.8,
  });

  useEffect(() => {
    size.set(hover ? 400 : 40);
  }, [hover, size]);

  return (
    <motion.div
      className="mask"
      style={{
        backgroundColor: hover ? "#E74C3C" : "transparent",
        WebkitMaskSize: smoothSize,
        WebkitMaskPositionX: smoothSize.get() / -2 + x,
        WebkitMaskPositionY: smoothSize.get() / -2 + y,
      }}
      animate={{
        WebkitMaskPosition: `${x}px ${y}px`,
        MaskPosition: `${x}px ${y}px`,
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.3,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MaskLayer;
