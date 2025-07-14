import {motion} from "framer-motion";
import { useMouse } from "../Context/MouseContext.jsx";
import "./MaskLayer.css";

const MaskLayer= ({children})=>{
  const { x, y, size, setIsHovered } = useMouse();

  return (
    <motion.div
      className="mask"
      animate={{
        WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
        MaskPosition: `${x - size/2}px ${y - size/2}`,
        WebkitMaskSize: `${size}px`,
      }}
      transition={{ type: "tween", ease: "backOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </motion.div>
  );
}

export default MaskLayer;
