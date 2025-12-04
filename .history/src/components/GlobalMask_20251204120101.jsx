import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const GlobalMask = ({ size = 300, children }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  return (
    <>
      <motion.div
        className="global-mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      >
        {children} {/* hidden content goes inside here */}
      </motion.div>

      <style>{`
        .global-mask {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;

          /* IMPORTANT — this hides entire hidden-content layer */
          background: var(--defaultOrange);

          /* circle hole */
          -webkit-mask-image: url("/mask.svg");
          mask-image: url("/mask.svg");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;

          pointer-events: none;

          /* between normal(3) and hidden(1) */
          z-index: 2;
        }
      `}</style>
    </>
  );
};

export default GlobalMask;
