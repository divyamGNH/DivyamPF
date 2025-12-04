import { motion } from "framer-motion";
import "./MaskLayer.css";
import useMouseStore from "../Store/useMouseStore.js";

const MaskLayer = ({ children }) => {
  const { x, y, hover } = useMouseStore();

  const size = hover ? 400 : 40;

  return (
    <motion.div
      className="mask"
      style={{
        backgroundColor: hover ? "#E74C3C" : "transparent",
      }}
      animate={{
        WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        MaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MaskLayer;
