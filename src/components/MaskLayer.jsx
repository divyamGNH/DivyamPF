import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore.js";

const MaskLayer = ({ children }) => {
  const { x, y, hover, hasMoved } = useMouseStore();

  return (
    <motion.div
      className="mask"
      style={{
        backgroundColor: hover ? "#E74C3C" : "transparent",
      }}
      animate={{
        WebkitMaskPosition: `${x - (hover ? 200 : 20)}px ${y - (hover ? 200 : 20)}px`,
        MaskPosition: `${x - (hover ? 200 : 20)}px ${y - (hover ? 200 : 20)}px`,
        WebkitMaskSize: !hasMoved ? "0px" : (hover ? "400px" : "40px"),
      }}
      transition={{
        backgroundColor: {
          duration: 100,
        },
        WebkitMaskSize: {
          duration: hover ? 0.25 : 0.15, // slower shrink
          ease: hover ? "easeOut" : "easeInOut",
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
