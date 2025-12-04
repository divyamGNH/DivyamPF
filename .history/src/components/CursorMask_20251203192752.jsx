// CursorMask.jsx
import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const CursorMask = ({ children, size = 250 }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  return (
    <>
      {/* Mask container */}
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

      {/* Embedded CSS */}
      <style jsx>{`
        .cursor-mask {
          position: absolute;
          inset: 0;
          pointer-events: none;

          /* Circular hole mask */
          -webkit-mask-image: radial-gradient(circle, black 60%, transparent 61%);
          mask-image: radial-gradient(circle, black 60%, transparent 61%);
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;

          z-index: 5;
        }
      `}</style>
    </>
  );
};

export default CursorMask;
