// RevealWithCircle.jsx
import { useEffect, useRef, useState } from "react";
import useMouseStore from "../Store/useMouseStore";

const RevealWithCircle = ({ normal, hidden }) => {
  const ref = useRef(null);
  const [showHidden, setShowHidden] = useState(false);

  const x = useMouseStore((s) => s.x);
  const y = useMouseStore((s) => s.y);
  
  const circleRadius = 20; // your 40px red circle → radius 20

  useEffect(() => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    // Check how close the circle is to this block → CIRCLE HIT TEST
    const cx = Math.max(rect.left, Math.min(x, rect.right));
    const cy = Math.max(rect.top, Math.min(y, rect.bottom));

    const distance = Math.hypot(x - cx, y - cy);

    setShowHidden(distance < circleRadius);
  }, [x, y]);

  return (
    <div ref={ref}>
      {showHidden ? hidden : normal}
    </div>
  );
};

export default RevealWithCircle;
