import { create } from "zustand";

const getInitialCenter = () => {
  if (typeof window !== "undefined") {
    return { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  }
  return { x: 0, y: 0 };
};

const useMouseStore = create((set) => ({
  // State
  x: getInitialCenter().x,
  y: getInitialCenter().y,
  hover: false,   // NEW BOOLEAN STATE
  hasMoved: false, // Track if mouse has moved yet

  // Actions
  setPosition: (x, y) => set({ x, y, hasMoved: true }),
  setHover: (value) => set({ hover: value }),  // NEW ACTION
  setMouse:(x,y) => set({x,y}),
}));

export default useMouseStore;
