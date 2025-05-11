// AppStore.js
import { create } from "zustand";

const useAppStore = create((set) => ({

  // language
  languageApp: localStorage.getItem("currentLngId") || "fa",
  setLanguageApp: (id) => set({ languageApp: id }),

  sendRequest: false,
  setSendRequest: (status) => set({ sendRequest: status }),

  backAddress: "/landing",
  setBackAddress: (status) => set({ backAddress: status }),

  titlePage: "aimoonhub",
  setTitlePage: (status) => set({ titlePage: status }),
}));

export default useAppStore;