"use client";

import { useEffect, useState } from "react";
import MaskLayer from "../components/MaskLayer.jsx";
import useMouseStore from "../Store/useMouseStore";

function AboutLanding() {
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

      {/* ---------- MASK / HOVER (DESKTOP ONLY) ---------- */}
      {enableHover ? (
        <MaskLayer>
          <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              pointer-events-auto
              inline-block
              p-6 sm:p-10 md:p-16
            "
            style={{ background: "transparent" }}
          >
            <div className="pointer-events-none max-w-[800px] text-left">
              <p className="text-[14px] sm:text-[16px] text-black mb-6 text-center">
                ABOUT ME
              </p>

              <p
                className="
                  font-extrabold text-black leading-tight
                  text-xl sm:text-2xl md:text-3xl lg:text-4xl
                "
              >
                I’ve shipped code at 2AM, broken production by accident, and Googled
                the same bug five times — but hey, that’s how the magic really happens.
              </p>
            </div>
          </div>
        </MaskLayer>
      ) : null}

      {/* ---------- VISIBLE TEXT (ALL DEVICES) ---------- */}
      <div
        className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-1/2
          z-[1]
          max-w-[800px]
          text-left
          scale-[1.15] sm:scale-100
        "
      >
        <p className="text-[14px] sm:text-[16px] text-[#C7B99B] mb-6 text-center">
          ABOUT ME
        </p>

        <p
          className="
            font-extrabold text-[#C7B99B] leading-tight
            text-xl sm:text-5xl md:text-5xl lg:text-5xl
            p-0
          "
        >
          I’m a curious{" "}
          <span className="text-[#E74C3C]">full-stack developer</span>{" "}
          who loves turning{" "}
          <span className="text-[#E74C3C]">ideas</span>{" "}
          into slick, useful things — with{" "}
          <span className="text-[#E74C3C]">clean code, smart logic</span>,
          and a cup of chai.
        </p>
      </div>
    </div>
  );
}

export default AboutLanding;
