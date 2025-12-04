"use client";

import MaskLayer from "../components/MaskLayer.jsx";
import useMouseStore from "../Store/useMouseStore";

function AboutLanding() {
  const setHover = useMouseStore((s) => s.setHover);

  return (
    <div className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E]">
      <div className="relative h-full w-full">
        <MaskLayer>

          {/* ---------- DYNAMIC HOVER WRAPPER (same logic as Landing.jsx) ---------- */}
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              z-[1]
              p-16               /* 🔥 adjustable hover padding */
              inline-block        /* auto width based on content */
            "
            style={{
              background: "transparent",
              pointerEvents: "auto",
            }}
          >
            {/* ---------- ORIGINAL HIDDEN TEXT (unchanged CSS) ---------- */}
            <div className="pointer-events-none text-center max-w-[800px]">
              <p className="text-[16px] text-black mb-[30px]">ABOUT ME</p>

              <p className="text-5xl font-extrabold text-black mt-0 leading-none">
                I’ve shipped code at 2AM, broken production by accident, and Googled
                the same bug five times — but hey, that’s how the magic really happens.
              </p>
            </div>
          </div>

        </MaskLayer>

        {/* ---------- FRONT VISIBLE TEXT (unchanged) ---------- */}
        <div className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          z-[2] max-w-[800px]
        ">
          <p className="text-[16px] text-[#C7B99B] mb-[30px] text-center">ABOUT ME</p>

          <p className="text-5xl font-extrabold text-[#C7B99B] mt-0 leading-none">
            I’m a curious <span className="text-[#E74C3C]">full-stack developer </span> 
            who loves turning <span className="text-[#E74C3C]">ideas</span> into slick, useful things — 
            with <span className="text-[#E74C3C]">clean code, smart logic</span>, and a little caffeine magic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutLanding;
