import {create} from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface ContadorState {
  count: number;
  incrementar: () => void;
}

export const useContador = create(
  persist(
    (set) => ({
      count: 0,
      incrementar: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: "contador",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
