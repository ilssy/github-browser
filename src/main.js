import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeartBroken } from "@fortawesome/free-solid-svg-icons";
import App from "./App.vue";

library.add(faHeartBroken);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
