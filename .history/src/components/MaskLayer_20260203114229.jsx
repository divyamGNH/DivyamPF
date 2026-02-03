import { motion } from "framer-motion";
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
        WebkitMaskPosition: `${x - (hover ? 200 : 20)}px ${y - (hover ? 200 : 20)}px`,
        MaskPosition: `${x - (hover ? 200 : 20)}px ${y - (hover ? 200 : 20)}px`,
        WebkitMaskSize: hover ? "400px" : "40px",
      }}
      transition={{
        WebkitMaskSize: {
          duration: 0.35,   // slows size change
          ease: "easeOut",
        },
        default: {
          type: "tween",
          duration: 0.25,
          ease: "easeOut",
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default MaskLayer;
