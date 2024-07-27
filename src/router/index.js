import { createMemoryHistory, createRouter } from "vue-router";

const routes = [
  { path: "/", component: import("@/views/HomeView.vue") },
  { path: "/blogs", component:() => import("@/views/BlogsView.vue") },
  { path: "/categories", component:() => import("@/views/CategoriesView.vue") },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
