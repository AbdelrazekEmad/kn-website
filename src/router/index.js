import { createMemoryHistory, createRouter } from "vue-router";
import app from "../App.vue";

const routes = [{ path: "/", component: app }];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
