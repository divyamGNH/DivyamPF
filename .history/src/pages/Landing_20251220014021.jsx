import { useEffect, useState } from "react";
import MaskLayer from "../components/MaskLayer";
import useMouseStore from "../Store/useMouseStore";

/* -------------------- MOBILE VERSION -------------------- */
function MobileLanding() {
  return (
    <div className="min-h-[100svh] w-full bg-[#0E0E0E] flex flex-col items-center justify-center text-center px-6">
      <p className="text-sm text-[#C7B99B] mb-4">
        DIVYAM
      </p>

      <h1 className="text-3xl font-extrabold leading-tight text-[#C7B99B]">
        MAKING <br />
        <span className="text-[#E74C3C]">
          GOOD <br /> CODE
        </span>
        <br />
        SINCE <br />
        2024
      </h1>
    </div>
  );
}

/* -------------------- DESKTOP VERSION -------------------- */
function DesktopLanding() {
  const setHover = useMouseStore((s) => s.setHover);
  const setMouse = useMouseStore((s) => s.setMouse);

  const [enableHover, setEnableHover] = useState(false);

  useEffect(() => {
    // hide cursor initially
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
    <div className="relative h-screen w-full font-[Questrial] bg-[#0E0E0E] hidden md:block">
      <MaskLayer>

        {/* ----------- HOVER WRAPPER ----------- */}
        <div
          onMouseEnter={enableHover ? () => setHover(true) : undefined}
          onMouseLeave={enableHover ? () => setHover(false) : undefined}
          className="
            absolute top-1/2 left-1/2
            -translate-x-1/2 -translate-y-1/2
            z-[1]
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
            <p className="text-[16px] text-black mb-[30px]">
              DIVYAM
            </p>

            <h1
              className="
                font-extrabold text-black
                leading-[80px]
                text-[100px]
              "
            >
              HIDING <br />
              BAD <br />
              CODE <br />
              SINCE <br />
              2024
            </h1>
          </div>
        </div>

      </MaskLayer>

      {/* ----------- VISIBLE FRONT TEXT ----------- */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-[1]">
        <p className="text-[16px] text-[#C7B99B] mb-[30px]">
          DIVYAM
        </p>

        <h1
          className="
            font-extrabold text-[#C7B99B]
            leading-[80px]
            text-[100px]
          "
        >
          MAKING <br />
          <span className="text-[#E74C3C]">
            GOOD <br /> CODE
          </span>
          <br />
          SINCE <br />
          2024
        </h1>
      </div>
    </div>
  );
}

/* -------------------- MAIN EXPORT -------------------- */
export default function Landing() {
  return (
    <>
      {/* Mobile */}
      <div className="md:hidden">
        <MobileLanding />
      </div>

      {/* Desktop */}
      <DesktopLanding />
    </>
  );
}
