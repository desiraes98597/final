import { createApp } from "vue";
import App from "./App.vue";
// import router from "./routers";
import "../src/assets/css/styles.css";
import "../src/assets/css/_settings.variables.scss";

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import "../.nuxt/fontawesome";



library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(nuxt).mount("#app");
