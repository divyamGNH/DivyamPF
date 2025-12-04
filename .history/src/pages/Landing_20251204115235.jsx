"use client";
// import { useContext } from "react";
// import { MouseContext } from "../Context/MouseContext.jsx";
import MaskLayer from "../components/MaskLayer";

function Landing() {
  // const { setIsHovered } = useContext(MouseContext);

  return (
    <div
      className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E]"
    >
      {/* <MaskLayer> */}
        <div
          // onMouseEnter={() => setIsHovered(true)}
          // onMouseLeave={() => setIsHovered(false)}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center p-[45px] z-10"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
            <h1 className="text-[100px] font-extrabold text-black mt-0 leading-[80px]">
              <span className="text-black">HIDING</span> <br />
              <span className="text-black">BAD <br /> CODE</span>
              <br />
              <span className="text-black">SINCE</span>
              <br />
              <span className="text-black">2024</span>
            </h1>
          </div>
        </div>
      {/* </MaskLayer> */}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[3]">
        <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
        <h1 className="text-[100px] font-extrabold text-[#C7B99B] mt-0 leading-[80px]">
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
