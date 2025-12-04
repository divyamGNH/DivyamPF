"use client";

import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

function Landing() {
  const x = useMouseStore(s => s.x);
  const y = useMouseStore(s => s.y);

  const size = 200;

  return (
    <div className="relative h-screen w-full bg-[#0E0E0E] font-[Questrial] overflow-hidden">

      {/* ---------- HIDDEN LAYER (revealed ONLY inside the circle) ---------- */}
      <motion.div
        className="hidden-layer"
        animate={{
          clipPath: `circle(${size}px at ${x}px ${y}px)`
        }}
        transition={{ duration: 0.15, ease: "backOut" }}
      >
        <div className="content">
          <p className="sub">DIVYAM</p>
          <h1 className="title">
            HIDING <br /> BAD <br /> CODE <br /> SINCE <br /> 2024
          </h1>
        </div>
      </motion.div>

      {/* ---------- NORMAL LAYER ---------- */}
      <div className="normal-layer">
        <div className="content">
          <p className="sub2">DIVYAM</p>
          <h1 className="title2">
            MAKING <br />
            <span className="text-[#E74C3C]">GOOD <br /> CODE</span>
            <br /> SINCE <br /> 2024
          </h1>
        </div>
      </div>

    </div>
  );
}

export default Landing;
