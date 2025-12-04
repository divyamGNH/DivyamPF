// LandingMask.jsx
import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const LandingMask = ({ children, size = 300 }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  return (
    <>
      <motion.div
        className="landing-mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      >
        {children}
      </motion.div>

      <style>{`
        .landing-mask {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;

          -webkit-mask-image: radial-gradient(circle, black 60%, transparent 61%);
          mask-image: radial-gradient(circle, black 60%, transparent 61%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
        }
      `}</style>
    </>
  );
};

export default LandingMask;
