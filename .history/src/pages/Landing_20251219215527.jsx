import { useEffect, useState } from "react";
import MaskLayer from "../components/MaskLayer";
import useMouseStore from "../Store/useMouseStore";

function Landing() {
  const setHover = useMouseStore((s) => s.setHover);
  const setMouse = useMouseStore((s) => s.setMouse);

  const [enableHover, setEnableHover] = useState(false);

  useEffect(() => {
    // place cursor OUTSIDE viewport on first load
    // setMouse(-100, -100);

    const checkDevice = () => {
      const isLargeScreen = window.innerWidth >= 768;
      const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

      setEnableHover(isLargeScreen && hasFinePointer);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, [setMouse]);

  return (
    <div className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E]">
      <MaskLayer>

        {/* ----------- DYNAMIC HOVER WRAPPER ----------- */}
        <div
          onMouseEnter={enableHover ? () => setHover(true) : undefined}
          onMouseLeave={enableHover ? () => setHover(false) : undefined}
          className="
            absolute top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2
            z-1
            p-16
          "
          style={{
            background: "transparent",
            pointerEvents: "auto",
            display: "inline-block",
          }}
        >
          {/* ----------- HIDDEN TEXT ----------- */}
          <div className="text-center">
            <p className="text-[16px] text-black mb-[30px]">DIVYAM</p>
            <h1 className="text-[100px] font-extrabold text-black mt-0 leading-[80px]">
              <span>HIDING</span> <br />
              <span>
                BAD <br /> CODE
              </span>
              <br />
              <span>SINCE</span>
              <br />
              <span>2024</span>
            </h1>
          </div>
        </div>

      </MaskLayer>

      {/* ----------- VISIBLE FRONT TEXT ----------- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[1]">
        <p className="text-[16px] text-[#C7B99B] mb-[30px]">DIVYAM</p>
        <h1 className="text-[100px] font-extrabold text-[#C7B99B] mt-0 leading-[80px]">
          MAKING <br />
          <span className="text-[#E74C3C]">
            GOOD <br /> CODE
          </span>
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
