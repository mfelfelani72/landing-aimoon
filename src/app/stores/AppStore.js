import { create } from "zustand";
import i18n from "../../../utils/services/i18n";

// Functions

import { ConnectToServer } from "../../../utils/services/api/ConnectToServer";

// Constants

import { getUser } from "../../features/auth/utils/constants/api.constants";

const configureLang = (id, dir) => {
  i18n.changeLanguage(id);

  const rootHtml = document.getElementById("root-html");
  localStorage.setItem("currentLngId", [id]);
  localStorage.setItem("currentLngDir", [dir]);

  rootHtml.setAttribute("lang", id);

  if (rootHtml && dir == "rtl") rootHtml.setAttribute("dir", "rtl");
  else rootHtml.setAttribute("dir", "ltr");

  return id;
};

const useAppStore = create((set) => ({
  splashScreen: true,
  setSplashScreen: (status) => set({ splashScreen: status }),

  // for get user's information

  key: "empty",
  setKey: (status) => set({ key: status }),
  getUserInformation: async () => {
    if (sessionStorage.getItem("key")) {
      const header = {
        headers: {
          Authorization: sessionStorage.getItem("session_id"),
        },
      };
      ConnectToServer(
        "get",
        getUser + sessionStorage.getItem("key"),
        "",
        header,
        "zustand"
      ).then((response) => {
        if (response?.data?.return) {
          console.log("fetch user");

          set({ key: response?.data?.user });
        }
      });
    }
  },

  // for get user's information

  sendRequest: false,
  setSendRequest: (status) => set({ sendRequest: status }),

  // machinArray state
  machinArray: [],
  setMachinArray: (newArray) => set({ machinArray: newArray }),

  updateMachinArrayCell: (key, value) =>
    set((state) => ({
      machinArray: {
        ...state.machinArray,
        [key]: value,
      },
    })),

  //    language

  languageApp: "",
  setLanguageApp: (id, dir) =>
    set({
      languageApp: configureLang(id, dir),
    }),

  //    language
}));

export default useAppStore;
