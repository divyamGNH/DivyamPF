import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const GlobalMask = ({ size = 350 }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  return (
    <>
      <motion.div
        className="global-mask"
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          maskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px ${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      <style>{`
        .global-mask {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;

          /* IMPORTANT: cursor must pass through */
          pointer-events: none;

          /* circular hole */
          -webkit-mask-image: radial-gradient(circle, black 60%, transparent 61%);
          mask-image: radial-gradient(circle, black 60%, transparent 61%);

          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;

          background: orange; /* IMPORTANT */

          z-index: 0; /* BETWEEN hidden (1) and normal text (3) */
        }
      `}</style>
    </>
  );
};

export default GlobalMask;
