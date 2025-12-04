import { motion } from "framer-motion";
import "./MaskLayer.css";
import useMouseStore from "../Store/useMouseStore.js";

const MaskLayer = ({ children }) => {
  const { x, y, hover } = useMouseStore();

  return (
    <motion.div
      className="mask"
      style={{
        backgroundColor: hover ? "#E74C3C" : "transparent",
      }}
      animate={{
        WebkitMaskPosition: `${x - (hover ? 400 : 40) / 2}px ${y - (hover ? 400 : 40) / 2}px`,
        MaskPosition: `${x - (hover ? 400 : 40) / 2}px ${y - (hover ? 400 : 40) / 2}px`,
        WebkitMaskSize: hover ? "400px" : "40px",   // ⬅ smooth animation
      }}
      transition={{
        // Smooth + delayed feel
        type: "spring",
        stiffness: 180,
        damping: 22,
        mass: 0.7,
      }}
    >
      {children}
    </motion.div>
  );
};

export default MaskLayer;
