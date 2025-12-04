"use client";

import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

function Landing() {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  const size = 200; // circle radius

  return (
    <div className="relative h-screen w-full bg-[#0E0E0E] overflow-hidden">

      {/* HIDDEN TEXT (revealed by clip-path circle) */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center text-center text-black"
        animate={{
          clipPath: `circle(${size}px at ${x}px ${y}px)`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        style={{ zIndex: 1 }}
      >
        <p className="text-[16px] mb-[30px]">DIVYAM</p>
        <h1 className="text-[100px] font-extrabold leading-[80px]">
          HIDING <br /> BAD <br /> CODE <br /> SINCE <br /> 2024
        </h1>
      </motion.div>

      {/* NORMAL TEXT */}
      <div className="absolute inset-0 z-[2] flex items-center justify-center text-center">
        <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
        <h1 className="text-[100px] font-extrabold text-[#C7B99B] leading-[80px]">
          MAKING <br />
          <span className="text-[#E74C3C]">GOOD <br /> CODE</span>
          <br /> SINCE
          <br /> 2024
        </h1>
      </div>

    </div>
  );
}

export default Landing;
