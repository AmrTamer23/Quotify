import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";

import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  GiPerspectiveDiceSixFacesThree,
  LaCopySolid,
  CoSave,
} from "oh-vue-icons/icons";

addIcons(GiPerspectiveDiceSixFacesThree, LaCopySolid, CoSave);

const app = createApp(App);

app.component("v-icon", OhVueIcon);

app.mount("#app");
