import { motion, useMotionValue, useSpring } from "framer-motion";
import useMouseStore from "../Store/useMouseStore.js";

const MaskLayer = ({ children }) => {
  const { x, y, hover } = useMouseStore();

  // Base motion values (raw mouse position)
  const mouseX = useMotionValue(x);
  const mouseY = useMotionValue(y);

  // Smooth follow (cursor lag)
  const smoothX = useSpring(mouseX, {
    stiffness: 120, // lower = smoother
    damping: 20,    // higher = less bounce
    mass: 0.8,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
    mass: 0.8,
  });

  // Smooth size animation
  const size = useSpring(hover ? 400 : 40, {
    stiffness: 100,
    damping: 25,
    mass: 0.9,
  });

  // Update motion values when store updates
  mouseX.set(x);
  mouseY.set(y);

  return (
    <motion.div
      className="mask"
      style={{
        backgroundColor: hover ? "#E74C3C" : "transparent",
        WebkitMaskPosition: smoothX
          .to((latestX) => `${latestX - size.get() / 2}px`)
          .concat(" ")
          .concat(
            smoothY.to((latestY) => `${latestY - size.get() / 2}px`)
          ),
        WebkitMaskSize: size.to((s) => `${s}px`),
      }}
    >
      {children}
    </motion.div>
  );
};

export default MaskLayer;
