import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// Store configuration
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

// Router configuration
import router from "./router";
app.use(router);

// I18n configuration
import { createI18n } from "vue-i18n";
const i18n = createI18n({});
app.use(i18n);

app.mount("#app");
