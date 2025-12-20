import { useEffect, useState } from "react";
import MaskLayer from "../components/MaskLayer";
import useMouseStore from "../Store/useMouseStore";

function Landing() {
  const setHover = useMouseStore((s) => s.setHover);
  const setMouse = useMouseStore((s) => s.setMouse);

  const [enableHover, setEnableHover] = useState(false);

  useEffect(() => {
    // cursor outside viewport on load
    setMouse(-9999, -9999);

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
    <div className="relative min-h-[100svh] w-full max-w-full overflow-x-hidden font-[Questrial] bg-[#0E0E0E]">
      {enableHover ? (
        <MaskLayer>
        <div
          onMouseEnter={enableHover ? () => setHover(true) : undefined}
          onMouseLeave={enableHover ? () => setHover(false) : undefined}
          className="relative flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-1 p-6 sm:p-10 md:p-16"
          style={{
            background: "transparent",
            pointerEvents: "auto",
            display: "inline-block",
          }}
        >

          <div className="text-center">
            <p className="text-[12px] sm:text-[14px] md:text-[16px] text-black mb-4 sm:mb-6 md:mb-[30px]">
              DIVYAM
            </p>

            <h1
              className="
                font-extrabold text-black mt-0
                leading-[42px] sm:leading-[60px] md:leading-[80px]
                text-[40px] sm:text-[64px] md:text-[100px]
              "
            >
              HIDING <br />
              BAD <br /> CODE
              <br />
              SINCE
              <br />
              2024
            </h1>
          </div>
        </div>

      </MaskLayer>
      ):null}

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[1]">
        <p className="text-[#C7B99B] mb-4 sm:mb-6 md:mb-[30px]">
          DIVYAM
        </p>

        <h1
          className="
            font-extrabold text-[#C7B99B] mt-0
            leading-[42px] sm:leading-[60px] md:leading-[80px]
            text-[40px] sm:text-[64px] md:text-[100px]
          "
        >
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
