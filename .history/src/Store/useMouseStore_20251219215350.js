import { create } from "zustand";

const useMouseStore = create((set) => ({
  // State
  x: 0,
  y: 0,
  hover: false,   // NEW BOOLEAN STATE

  // Actions
  setPosition: (x, y) => set({ x, y }),
  setHover: (value) => set({ hover: value }),  // NEW ACTION
  setMouse:(x,y) => set({x,y});
}));

export default useMouseStore;
