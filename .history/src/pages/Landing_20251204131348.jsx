"use client";

export default function Landing() {
  return (
    <div className="relative h-screen w-full bg-black font-[Questrial]">

      {/* Hidden text layer */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-[5]">
        <div className="text-white opacity-40">
          <p className="text-[16px] mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold leading-[80px]">
            HIDING <br /> BAD <br /> CODE <br /> SINCE <br /> 2024
          </h1>
        </div>
      </div>

      {/* Normal text */}
      <div className="absolute inset-0 flex items-center justify-center text-center z-[20]">
        <div>
          <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-[#C7B99B] leading-[80px]">
            MAKING <br />
            <span className="text-[#E74C3C]">GOOD <br /> CODE</span>
            <br /> SINCE
            <br /> 2024
          </h1>
        </div>
      </div>

    </div>
  );
}
