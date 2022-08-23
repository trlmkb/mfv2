import create from "zustand";
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      clear: () => set(() => ({ count: 0 })),
    }),
    {
      name: 'counter-storage'
    }
  )
);

export default useStore;
