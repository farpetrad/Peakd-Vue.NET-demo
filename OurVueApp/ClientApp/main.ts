import "core-js/stable";
import "regenerator-runtime/runtime";
import Router from "./router";

import { createApp } from "vue";

import App from "./App.vue";

const app = createApp(App);
app.use(Router).mount("#app");
