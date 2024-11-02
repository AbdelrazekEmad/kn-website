import { createRouter, createWebHistory, RouterView } from "vue-router";
import Tr from "@/i18n/translation";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
  routes: [
    {
      path: "",
      redirect: {
        name: "home-page",
        params: {
          locale: Tr.currentLocale,
        },
      },
    },
    {
      path: "/:locale?",
      component: () => import("@/views/SystemView.vue"),
      beforeEnter: Tr.routeMiddleware,
      children: [
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
          redirect: { name: "categories-page" },
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
          ],
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
        {
          path: ":pathMatch(.*)*",
          name: "NotFound",
          component: () => import("@/views/NotFoundView.vue"),
        },
      ],
    },
    {
      path: "/:locale?/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
      children: [
        {
          path: "",
          name: "loginForm",
          component: () => import("@/components/Auth/Login/LoginForm.vue"),
        },
        {
          path: "forgot-password",
          name: "ForgotPassword",
          component: () => import("@/components/Auth/Login/ForgotPassword.vue"),
        },
        {
          path: "verify-otp",
          name: "VerifyOtp",
          component: () => import("@/components/Auth/Login/VerifyOtp.vue"),
        },
        {
          path: "reset-password",
          name: "ResetPassword",
          component: () => import("@/components/Auth/Login/ResetPassword.vue"),
        },
      ],
    },
    {
      path: "/:locale?/register",
      name: "Register",
      component: () => import("@/views/RegisterView.vue"),
    },
  ],
});

export default router;
