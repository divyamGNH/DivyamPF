"use client";

import CursorFollower from "../components/CursorFollower";
import CursorMask from "../components/CursorMask";

function Landing() {
  return (
    <div className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E] overflow-hidden">

      {/* 🔴 RED CURSOR FOLLOWER — always on top */}
      <CursorFollower />

      {/* 🟦 HIDDEN LAYER (revealed through mask hole) */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-[1]">
        <div>
          <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-black leading-[80px]">
            HIDING <br /> BAD <br /> CODE <br /> SINCE <br /> 2024
          </h1>
        </div>
      </div>

      {/* 🟧 NORMAL VISIBLE LAYER */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-[3]">
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

      {/* 🟥 MASK FOLLOWING CURSOR — cuts a hole into the top layer */}
      <CursorMask size={350}>
        {/* masked children MUST match the top layer */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
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
