import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const setTheme = (theme: Theme) => {
  const html = document.getElementsByTagName("html")[0];
  html.classList.value = theme;
};

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    theme: useStorage<Theme>("theme", "default" as Theme),
    hoverTheme: null as Theme | null,
  }),
  actions: {
    change(theme: Theme) {
      this.theme = theme;
      setTheme(theme);
    },
    changeOnHover(theme: Theme) {
      this.hoverTheme = theme;
      console.log("hover", this.hoverTheme);
      setTheme(theme);
    },
    changeOnHoverOut() {
      this.hoverTheme = null;
      setTheme(this.theme);
    },
  },
});
