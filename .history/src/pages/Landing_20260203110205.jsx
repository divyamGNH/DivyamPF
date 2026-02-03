import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import MaskLayer from "../components/MaskLayer";
import useMouseStore from "../Store/useMouseStore";

/* ===== Framer Motion Variants ===== */

// Each line controls only its letters
const line = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12, // slow letter delay
    },
  },
};

// Each letter rises from BELOW its final position
const letter = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// Helper component for animated text line
const AnimatedLine = ({ text, className = "" }) => {
  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      variants={line}
      initial="hidden"
      animate="visible"
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letter}
          className="inline-block pointer-events-none"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
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
    <div className="relative min-h-[100svh] w-full overflow-x-hidden font-[Questrial] bg-[#0E0E0E]">
      {enableHover ? (
        <MaskLayer>
          <div
            onMouseEnter={enableHover ? () => setHover(true) : undefined}
            onMouseLeave={enableHover ? () => setHover(false) : undefined}
            className="relative flex justify-center top-1/2 left-1/2 
              -translate-x-1/2 -translate-y-1/2 z-1 
              p-6 sm:p-10 md:p-16"
            style={{ pointerEvents: "auto" }}
          >
            {/* ===== MASKED TEXT ===== */}
            <div className="text-center">
              <AnimatedLine
                text="DIVYAM"
                className="text-[12px] sm:text-[14px] md:text-[16px] text-black mb-6"
              />

              <h1
                className="
                  font-extrabold text-black
                  leading-[42px] sm:leading-[60px] md:leading-[80px]
                  text-[40px] sm:text-[64px] md:text-[100px]
                "
              >
                <AnimatedLine text="HIDING" />
                <AnimatedLine text="BAD" />
                <AnimatedLine text="CODE" />
                <AnimatedLine text="SINCE" />
                <AnimatedLine text="2024" />
              </h1>
            </div>
          </div>
        </MaskLayer>
      ) : null}

      {/* ===== VISIBLE TEXT ===== */}
      <div
        className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          text-center z-[1] scale-[1.75] sm:scale-100"
      >
        <AnimatedLine
          text="DIVYAM"
          className="text-[12px] sm:text-[14px] md:text-[16px] text-[#C7B99B] mb-6"
        />

        <h1
          className="
            font-extrabold text-[#C7B99B]
            leading-[32px] sm:leading-[60px] md:leading-[80px]
            text-[40px] sm:text-[64px] md:text-[100px]
          "
        >
          <AnimatedLine text="MAKING" />
          <AnimatedLine text="GOOD" className="text-[#E74C3C]" />
          <AnimatedLine text="CODE" className="text-[#E74C3C]" />
          <AnimatedLine text="SINCE" />
          <AnimatedLine text="2024" />
        </h1>
      </div>
    </div>
  );
}

export default Landing;
