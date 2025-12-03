"use client";
// import { useContext } from "react";
// import { MouseContext } from "../Context/MouseContext.jsx";
import MaskLayer from "../components/MaskLayer.jsx";

function AboutLanding() {
  // const { setIsHovered } = useContext(MouseContext);

  return (
    <div className="relative w-full font-[Questrial] bg-[#0E0E0E] min-h-screen">
      {/* Stack area with absolute center content */}
      <div className="relative h-[100vh] w-full">
        <MaskLayer>
          <div
            // onMouseEnter={() => setIsHovered(true)}
            // onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <p className="text-[16px] text-black mb-[30px] text-center">ABOUT ME</p>
              <p className="text-5xl font-extrabold text-black mt-0 leading-none max-w-[800px]">
                I’ve shipped code at 2AM, broken production by accident, and Googled the same bug five times — but hey, that’s how the magic really happens.
              </p>
            </div>
          </div>
        </MaskLayer>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1] max-w-[800px]">
          <p className="text-[16px] text-[#C7B99B] mb-[30px] text-center">ABOUT ME</p>
          <p className="text-5xl font-extrabold text-[#C7B99B] mt-0 leading-none">
            I’m a curious <span className="text-[#E74C3C]">full-stack developer</span> who loves turning <span className="text-[#E74C3C]">ideas</span> into slick, useful things — with <span className="text-[#E74C3C]">clean code, smart logic</span>, and a little caffeine magic.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutLanding;
