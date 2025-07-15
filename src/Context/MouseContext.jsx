import { useState, useEffect, useContext, createContext } from "react";

export const MouseContext = createContext();

export function MouseProvider({ children }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // const size = isHovered ? 400 : 40;
  const size = 400;

  useEffect(() => {
    const update = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", update);

    return () => {
      window.removeEventListener("mousemove", update); // ✅ FIXED
    };
  }, []);

  return (
    // add setIsHovered here also
    <MouseContext.Provider value={{ ...position, size }}>
      {children}
    </MouseContext.Provider>
  );
}

export const useMouse = () => useContext(MouseContext);
