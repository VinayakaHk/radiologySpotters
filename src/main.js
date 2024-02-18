import { createApp } from "vue";
import App from "./App.vue";
import store from "./lib/store.js";
import router from "./lib/router.js";
import { Quasar } from "quasar";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";
import "@quasar/extras/material-icons-outlined/material-icons-outlined.css";
import "@quasar/extras/material-icons-round/material-icons-round.css";
import "@quasar/extras/material-icons-sharp/material-icons-sharp.css";
import "@quasar/extras/material-symbols-outlined/material-symbols-outlined.css";
import "@quasar/extras/material-symbols-rounded/material-symbols-rounded.css";
import "@quasar/extras/material-symbols-sharp/material-symbols-sharp.css";
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css";
import "@quasar/extras/themify/themify.css";

import "quasar/src/css/index.sass";

const app = createApp(App);

app.use(Quasar, {
  plugins: {},
});
app.use(router).use(store).mount("#app");
