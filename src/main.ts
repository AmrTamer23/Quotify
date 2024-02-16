import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  GiPerspectiveDiceSixFacesThree,
  LaCopySolid,
  CoSave,
  BiCheckLg,
} from "oh-vue-icons/icons";

addIcons(GiPerspectiveDiceSixFacesThree, LaCopySolid, CoSave, BiCheckLg);

const app = createApp(App);

const pinia = createPinia();

app.use(pinia);

app.component("v-icon", OhVueIcon);

app.mount("#app");
