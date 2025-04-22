// AppStore.js
import { create } from "zustand";

const useAppStore = create((set) => ({
  languageApp: localStorage.getItem("currentLngId") || "fa",
  setLanguageApp: (id) => set({ languageApp: id }),
}));

export default useAppStore;