import RandomQuote from "@/views/RandomQuote.vue";

export const routes = [
  { path: "/", component: RandomQuote },
  {
    path: "/saved-quotes",
    component: () => import("@/views/SavedQuotes.vue"),
  },
];
