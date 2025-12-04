"use client";

function Landing() {
  return (
    <div className="relative h-screen w-full bg-[#0E0E0E] font-[Questrial] overflow-hidden">

      {/* HIDDEN CONTENT (revealed by mask hole) */}
      <div className="hidden-layer absolute inset-0 flex items-center justify-center text-center z-[0]">
        <div>
          <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-black leading-[80px]">
            HIDING <br/> BAD <br/> CODE <br/> SINCE <br/> 2024
          </h1>
        </div>
      </div>

      {/* NORMAL CONTENT (always visible) */}
      <div className="normal-layer absolute inset-0 flex items-center justify-center text-center z-[5]">
        <div>
          <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
          <h1 className="text-[100px] font-extrabold text-[#C7B99B] leading-[80px]">
            MAKING <br/>
            <span className="text-[#E74C3C]">GOOD <br/> CODE</span>
            <br/> SINCE
            <br/> 2024
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Landing;
