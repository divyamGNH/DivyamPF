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

          /* invisible but functional */
          pointer-events: none;
          z-index: 10;

          /* circular hole */
          -webkit-mask-image: radial-gradient(circle, black 60%, transparent 61%);
          mask-image: radial-gradient(circle, black 60%, transparent 61%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;

          /* color of reveal */
          background: ; /* background color for hidden text to be visible */
        }
      `}</style>
    </>
  );
};

export default GlobalMask;
