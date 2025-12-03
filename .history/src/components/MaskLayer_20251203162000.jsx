import { motion } from "framer-motion";
import { useMouse } from "../Context/MouseContext.jsx";
import "./MaskLayer.css";
import useMouseStore from "../Store/useMouseStore.js";

const MaskLayer = ({ children }) => {
  // const { x, y, size, setIsHovered } = useMouse();
  const { x, y } = useMouseStore();
  
  const size = 400; // Default size since we're not using context anymore

  return (
    <motion.div
      className="mask"
      style={{ backgroundColor: "#E74C3C" }}
      animate={{
        WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
        MaskPosition: `${x - size/2}px ${y - size/2}`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
      // onMouseEnter={() => setIsHovered(true)}
      // onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
};

export default MaskLayer;