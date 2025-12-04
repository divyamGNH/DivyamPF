"use client";

import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

function Landing() {

  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  const size = 200; // radius of the reveal circle

  return (
    <div
      className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E] overflow-hidden"
    >
      {/* HIDDEN TEXT (revealed only inside circle) */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-[45px]"
        animate={{
          clipPath: `circle(${size}px at ${x}px ${y}px)`
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.15 }}
        style={{ zIndex: 0 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-black mt-0 leading-[80px]">
            <span className="text-black">HIDING</span> <br />
            <span className="text-black">BAD <br /> CODE</span>
            <br />
            <span className="text-black">SINCE</span>
            <br />
            <span className="text-black">2024</span>
          </h1>
        </div>
      </motion.div>

      {/* NORMAL TEXT (always visible above everything) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[1]">
        <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
        <h1 className="text-[100px] font-extrabold text-[#C7B99B] mt-0 leading-[80px]">
          MAKING <br />
          <span className="text-[#E74C3C]">GOOD <br /> CODE</span>
          <br />
          SINCE
          <br />
          2024
        </h1>
      </div>

    </div>
  );
}

export default Landing;
