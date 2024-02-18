import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useThemeStore = defineStore({
  id: "theme",
  state: () => ({
    theme: useStorage("theme", "default" as Theme),
  }),
  actions: {
    change(theme: Theme) {
      this.theme = theme;
    },
  },
});
