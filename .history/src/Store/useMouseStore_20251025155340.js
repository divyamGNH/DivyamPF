import { create } from 'zustand';

const useMouseStore = create((set) => ({
  // State
  x: 0,
  y: 0,
  
  // Actions
  setPosition: (x, y) => set({ x, y }),
}));

export default useMouseStore;