import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const GlobalMask = () => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  const size = 300; // SVG mask size

  return (
    <>
      <motion.div
        className="global-mask"
        animate={{
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      <style>{`
        .global-mask {
          position: fixed;       /* IMPORTANT: global */
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;

          pointer-events: none;

          /* this is the exact same mask logic you used */
          -webkit-mask-image: url("/mask.svg");
          mask-image: url("/mask.svg");
          mask-repeat: no-repeat;
          -webkit-mask-repeat: no-repeat;

          /* MUST be transparent to avoid covering text */
          background: orange;

          z-index: 2; 
        }
      `}</style>
    </>
  );
};

export default GlobalMask;
