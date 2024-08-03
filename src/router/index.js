import { createRouter, createWebHistory, RouterView } from "vue-router";
import Tr from "@/i18n/translation";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: "",
          name: "home-page",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "about-us",
          name: "about-us",
          component: () => import("@/views/AboutView.vue"),
        },
        {
          path: "blogs",
          name: "blogs-page",
          component: () => import("@/views/BlogsView.vue"),
        },
        {
          path: "blogs/:id",
          name: "single-blog-page",
          component: () => import("@/views/SingleBlogView.vue"),
        },
        {
          path: "categories",
          name: "categories-page",
          component: () => import("@/views/CategoriesView.vue"),
        },
      ],
    },
  ],
});

export default router;
