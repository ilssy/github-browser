import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHeartBroken,
  faStar,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

library.add(faHeartBroken, faStar, faCodeBranch);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
