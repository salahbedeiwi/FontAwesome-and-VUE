import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
//
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons"; //all reg. icons
import {
  faLaptopCode,
  faAnchor,
  faUser,
  faCoffee,
  faAngleDoubleLeft
} from "@fortawesome/free-solid-svg-icons"; //all solid. icons
import { fab } from "@fortawesome/free-brands-svg-icons"; //all brand icons
library.add(faAngleDoubleLeft, faLaptopCode, faAnchor, faUser, faCoffee, far, fab);

createApp(App)
  .use(store)
  .component("FontAwesome", FontAwesomeIcon)
  .use(router)
  .mount("#app");
