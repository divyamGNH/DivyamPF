import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const GlobalMask = ({ size = 300, children }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  return (
    <>
      <motion.div
        className="global-mask"
        style={{ backgroundColor: "#E74C3C" }}
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
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index:2;

          mask-image: url("/mask.svg");
          mask-repeat: no-repeat;

          background-color: var(--defaultOrange);
        }
      `}</style>
    </>
  );
};

export default GlobalMask;
