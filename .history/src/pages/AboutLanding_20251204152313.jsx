"use client";

import MaskLayer from "../components/MaskLayer.jsx";
import useMouseStore from "../Store/useMouseStore";

function AboutLanding() {
  const setHover = useMouseStore((s) => s.setHover);

  return (
    <div className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E]">
      <div className="relative h-full w-full p-20">
        <MaskLayer>

          {/* Hover on the hidden text area */}
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              pointer-events-auto
              p-0
              inline-block
            "
            style={{
              background: "transparent",
            }}
          >
            {/* ---------- HIDDEN TEXT (LEFT-ALIGNED) ---------- */}
            <div className="pointer-events-none max-w-[800px] text-left">
              <p className="text-[16px] text-black mb-[30px] text-center">ABOUT ME</p>

              <p className="text-5xl font-extrabold text-black m-0 p-0">
                I’ve shipped code at 2AM, broken production by accident, and Googled
                the same bug five times — but hey, that’s how the magic really happens.
              </p>
            </div>
          </div>

        </MaskLayer>

        {/* ---------- VISIBLE TEXT (LEFT-ALIGNED like original) ---------- */}
        <div className="
          absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          z-[1] max-w-[800px] text-left
        ">
          <p className="text-[16px] text-[#C7B99B] mb-[30px] text-center">
            ABOUT ME
          </p>

          <p className="text-5xl font-extrabold text-[#C7B99B] mt-0 leading-none">
            I’m a curious <span className="text-[#E74C3C]">full-stack developer </span>
            who loves turning <span className="text-[#E74C3C]">ideas</span> into slick,
            useful things — with <span className="text-[#E74C3C]">clean code, smart logic</span>,
            and a little caffeine magic.
          </p>
        </div>

      </div>
    </div>
  );
}

export default AboutLanding;
