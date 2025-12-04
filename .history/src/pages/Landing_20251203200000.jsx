"use client";

import CursorMask from "../components/CursorMask.jsx";
import CursorFollower from "../components/CursorFollower.jsx";

function Landing() {
  return (
    <div className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E]">

      {/* 🔴 RED CURSOR FOLLOWER */}
      <CursorFollower />

      {/* 🔽 HIDDEN LAYER (bottom) */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-[1]">
        <div>
          <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-black leading-[80px]">
            HIDING <br /> BAD <br /> CODE <br /> SINCE <br /> 2024
          </h1>
        </div>
      </div>

      {/* 🟡 MASKED LAYER (top, shows through cursor mask) */}
      <CursorMask size={280}>
        <div className="absolute inset-0 flex items-center justify-center text-center z-[2]">
          <div>
            <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
            <h1 className="text-[100px] font-extrabold text-[#C7B99B] leading-[80px]">
              MAKING <br />
              <span className="text-[#E74C3C]">GOOD <br /> CODE</span>
              <br />
              SINCE
              <br />
              2024
            </h1>
          </div>
        </div>
      </CursorMask>

    </div>
  );
}

export default Landing;
