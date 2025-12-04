import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const GlobalMask = ({ size = 350 }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  return (
    <>
      {/* Mask for HIDDEN layer (z=1) - reveals content in circle */}
      <motion.div
        className="mask-reveal-hidden"
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          maskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px ${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      {/* Mask for ORIGINAL layer (z=3) - hides content in circle */}
      <motion.div
        className="mask-hide-original"
        animate={{
          WebkitMaskPosition: `${x - size/2}px ${y - size/2}px`,
          maskPosition: `${x - size/2}px ${y - size/2}px`,
          WebkitMaskSize: `${size}px ${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
      />

      <style>{`
        /* Hides hidden layer (z=1) everywhere EXCEPT the circle */
        .mask-reveal-hidden {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          pointer-events: none;

          /* Transparent center (reveals hidden layer), black edges (covers hidden layer) */
          -webkit-mask-image: radial-gradient(circle, transparent 40%, black 41%);
          mask-image: radial-gradient(circle, transparent 40%, black 41%);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;

          background: black;
          z-index: 2; /* Above hidden layer (1) */
        }

        // /* Hides original layer (z=3) ONLY in the circle */
        // .mask-hide-original {
        //   position: fixed;
        //   top: 0;
        //   left: 0;
        //   width: 100vw;
        //   height: 100vh;
        //   pointer-events: none;

        //   /* Black center (covers original layer), transparent edges (shows original layer) */
        //   -webkit-mask-image: radial-gradient(circle, black 40%, transparent 41%);
        //   mask-image: radial-gradient(circle, black 40%, transparent 41%);
        //   -webkit-mask-repeat: no-repeat;
        //   mask-repeat: no-repeat;

        //   background: black;
        //   z-index: 4; /* Above original layer (3) */
        }
      `}</style>
    </>
  );
};

export default GlobalMask;