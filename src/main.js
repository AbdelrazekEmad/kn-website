import { createApp } from "vue";
import App from "./App.vue";

import "vue3-carousel/dist/carousel.css";

import "vue-multiselect/dist/vue-multiselect.min.css";

const app = createApp(App);

// register loader globally
import Loader from "@/components/Loader.vue";
app.component("Loader", Loader);

// import datepicker
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

// Store configuration
import { createPinia } from "pinia";
const pinia = createPinia();
app.use(pinia);

// Router configuration
import router from "./router";
app.use(router);

// I18n configuration
import i18n from "./i18n";
app.use(i18n);
app.component("VueDatePicker", VueDatePicker);

app.mount("#app");
