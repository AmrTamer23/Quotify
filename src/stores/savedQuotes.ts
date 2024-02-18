import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useSavedQuotesStore = defineStore({
  id: "savedQuotes",
  state: () => ({
    savedQuotes: useStorage("savedQuotes", [] as Quote[]),
  }),
  actions: {
    add(quote: Quote) {
      this.savedQuotes.push(quote);
    },
    remove(quote: Quote) {
      this.savedQuotes = this.savedQuotes.filter((q) => q._id !== quote._id);
    },
  },
});
