import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  GiPerspectiveDiceSixFacesThree,
  LaCopySolid,
  CoSave,
  BiCheckLg,
  MdDeleteOutlined,
  BiPalette,
} from "oh-vue-icons/icons";
import { routes } from "./lib/routes";

addIcons(
  GiPerspectiveDiceSixFacesThree,
  LaCopySolid,
  CoSave,
  BiCheckLg,
  MdDeleteOutlined,
  BiPalette
);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);

app.use(router);

app.component("v-icon", OhVueIcon);

app.mount("#app");
