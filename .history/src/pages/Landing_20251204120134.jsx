"use client";

import GlobalMask from "./GlobalMask";

function Landing() {
  return (
    <div className="relative h-screen w-full bg-[#0E0E0E] overflow-hidden">

      {/* HIDDEN TEXT (only visible through the mask hole) */}
      <GlobalMask>
        <div className="absolute inset-0 z-[1] flex items-center justify-center text-center">
          <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-black leading-[80px]">
            HIDING <br/> BAD <br/> CODE <br/> SINCE <br/> 2024
          </h1>
        </div>
      </GlobalMask>

      {/* NORMAL TEXT (always visible, sits ABOVE mask) */}
      <div className="absolute inset-0 z-[3] flex items-center justify-center text-center">
        <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
        <h1 className="text-[100px] font-extrabold text-[#C7B99B] leading-[80px]">
          MAKING <br/>
          <span className="text-[#E74C3C]">GOOD <br/> CODE</span>
          <br/> SINCE <br/> 2024
        </h1>
      </div>

    </div>
  );
}

export default Landing;
