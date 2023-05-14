import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "/mock/cardData.js";
import "/mock/SidebarItemData.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.mount("#app");
