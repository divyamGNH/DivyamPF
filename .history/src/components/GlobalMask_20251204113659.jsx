import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

const GlobalMask = ({ children }) => {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  const size = 300;

  return (
    <>
      <motion.div
        className="global-mask"
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          maskPosition: `${x - size / 2}px ${y - size / 2}px`,
        }}
      >
        {children}   {/* HIDDEN CONTENT GOES HERE */}
      </motion.div>

      <style>{`
        .global-mask {
          position: fixed;
          inset: 0;

          /* IMPORTANT: just like your old MaskLayer */
          background: var(--defaultOrange);

          -webkit-mask-image: url("/mask.svg");
          mask-image: url("/mask.svg");
          mask-repeat: no-repeat;

          pointer-events: none;
          z-index: 2; /* below normal text */
        }
      `}</style>
    </>
  );
};

export default GlobalMask;
