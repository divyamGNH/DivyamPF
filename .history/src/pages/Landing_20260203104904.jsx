import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MaskLayer from "../components/MaskLayer";
import useMouseStore from "../Store/useMouseStore";

/* ===== Framer Motion Animations ===== */
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const line = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

function Landing() {
  const setHover = useMouseStore((s) => s.setHover);
  const setMouse = useMouseStore((s) => s.setMouse);

  const [enableHover, setEnableHover] = useState(false);

  useEffect(() => {
    // cursor outside viewport on load
    setMouse(-9999, -9999);

    const checkDevice = () => {
      const isLargeScreen = window.innerWidth >= 768;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      setEnableHover(isLargeScreen && hasFinePointer);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, [setMouse]);

  return (
    <div className="relative min-h-[100svh] w-full max-w-full overflow-x-hidden font-[Questrial] bg-[#0E0E0E]">
      {enableHover ? (
        <MaskLayer>
          <div
            onMouseEnter={enableHover ? () => setHover(true) : undefined}
            onMouseLeave={enableHover ? () => setHover(false) : undefined}
            className="relative flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 p-6 sm:p-10 md:p-16"
            style={{
              background: "transparent",
              pointerEvents: "auto",
              display: "inline-block",
            }}
          >
            {/* ===== MASKED TEXT ===== */}
            <motion.div
              className="text-center"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              <motion.p
                variants={line}
                className="text-[12px] sm:text-[14px] md:text-[16px] text-black mb-4 sm:mb-6 md:mb-[30px]"
              >
                DIVYAM
              </motion.p>

              <h1
                className="
                  font-extrabold text-black mt-0
                  leading-[42px] sm:leading-[60px] md:leading-[80px]
                  text-[40px] sm:text-[64px] md:text-[100px]
                "
              >
                <motion.div variants={line}>HIDING</motion.div>
                <motion.div variants={line}>BAD</motion.div>
                <motion.div variants={line}>CODE</motion.div>
                <motion.div variants={line}>SINCE</motion.div>
                <motion.div variants={line}>2024</motion.div>
              </h1>
            </motion.div>
          </div>
        </MaskLayer>
      ) : null}

      {/* ===== VISIBLE TEXT ===== */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center items-center z-[1] scale-[1.75] sm:scale-100"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={line}
          className="text-[12px] sm:text-[14px] md:text-[16px] text-[#C7B99B] mb-4 sm:mb-6 md:mb-[30px]"
        >
          DIVYAM
        </motion.p>

        <h1
          className="
            font-extrabold text-[#C7B99B] mt-0 text-center
            leading-[32px] sm:leading-[60px] md:leading-[80px]
            text-[40px] sm:text-[px] md:text-[100px]
          "
        >
          <motion.div variants={line}>MAKING</motion.div>

          <motion.div variants={line} className="text-[#E74C3C]">
            GOOD
          </motion.div>

          <motion.div variants={line} className="text-[#E74C3C]">
            CODE
          </motion.div>

          <motion.div variants={line}>SINCE</motion.div>
          <motion.div variants={line}>2024</motion.div>
        </h1>
      </motion.div>
    </div>
  );
}

export default Landing;
