"use client";

import LandingMask from "../components/LandingMask";

function Landing() {
  return (
    <div className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E] overflow-hidden">

      {/* Hidden Content - only visible inside mask */}
      <LandingMask size={350}>
        <div className="absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 text-center">
          <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-black leading-[80px]">
            HIDING <br />
            BAD <br /> CODE
            <br />
            SINCE
            <br />
            2024
          </h1>
        </div>
      </LandingMask>

      {/* Normal Content */}
      <div className="absolute top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2 text-center z-[1]">
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
  );
}

export default Landing;
