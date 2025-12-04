import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const CursorMask = ({ children, size = 250 }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  return (
    <>
      {/* M A S K   W R A P P E R */}
      <motion.div
        className="cursor-mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 22 }}
      >
        {children}
      </motion.div>

      {/* NORMAL CSS (works in MERN apps, CRA, Vite, anything) */}
      <style>{`
        .cursor-mask {
          position: absolute;
          inset: 0;
          pointer-events: none;

          /* actual circle mask */
          -webkit-mask-image: radial-gradient(circle, black 60%, transparent 61%);
          mask-image: radial-gradient(circle, black 60%, transparent 61%);
          
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;

          z-index: 5;
        }
      `}</style>
    </>
  );
};

export default CursorMask;
