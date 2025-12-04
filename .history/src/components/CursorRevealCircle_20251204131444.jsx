// CursorRevealCircle.jsx
"use client";

import { motion } from "framer-motion";
import useMouseStore from "../Store/useMouseStore";

export default function CursorRevealCircle() {
  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);

  const size = 300; // diameter of reveal circle

  return (
    <>
      <motion.div
        className="reveal-circle"
        animate={{
          x: x - size / 2,
          y: y - size / 2,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      />

      {/* CSS INSIDE COMPONENT */}
      <style>{`
        .reveal-circle {
          position: fixed;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: white;

          /* THE MAGIC: reveals hidden text underneath */
          mix-blend-mode: difference;

          pointer-events: none;
          z-index: 50; /* above hidden text, below cursor-decals */
        }
      `}</style>
    </>
  );
}
