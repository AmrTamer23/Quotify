import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useSavedQuotesStore = defineStore({
  id: "savedQuotes",
  state: () => ({
    savedQuotes: useStorage("savedQuotes", [] as Quote[]),
  }),
  actions: {
    addQuote(quote: Quote) {
      this.savedQuotes.push(quote);
    },
    removeQuote(quote: Quote) {
      this.savedQuotes = this.savedQuotes.filter((q) => q._id !== quote._id);
    },
  },
});
