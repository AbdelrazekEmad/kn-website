import { createRouter, createWebHistory, RouterView } from "vue-router";
import Tr from "@/i18n/translation";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: Tr.routeMiddleware,
      children: [
        {
          path: "",
          redirect: { name: "home-page" }
        },
        {
          path: "home",
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
          redirect: { name: 'categories-page' },
          children: [
            {
              path: "",
              name: "categories-page",
              component: () => import("@/views/CategoriesView.vue"),
            },
            {
              path: ":id",
              props: true,
              name: "single-categories-page",
              component: () => import("@/views/CategoryCoursesView.vue"),
            },
          ]
        },
        {
          path: "courses/:id",
          name: "single-course-page",
          props: true,
          component: () => import("@/views/SingleCourseView.vue"),
        },
        {
          path: "contact-us",
          name: "contact-us-page",
          component: () => import("@/views/ContactUsView.vue"),
        },
      ],
    },
  ],
});

export default router;
