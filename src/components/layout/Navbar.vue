<template>
  <div>
    <upper-nav></upper-nav>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <a class="navbar-brand me-md-5" href="#">KN logo</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav gap-md-3 mb-2 mb-lg-0">
            <li class="nav-item" v-for="link in navLinks" :key="link.id">
              <router-link
                class="nav-link"
                :to="Tr.i18nRoute(link.to)"
              >
                {{ $t(link.nameKey) }}
              </router-link>
            </li>
          </ul>
          <div
            class="d-flex align-items-md-center gap-4 flex-column flex-md-row"
          >
            <language-switcher />
            <MainButton text="test" link="courses" />
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import LanguageSwitcher from "../LanguageSwitcher.vue";
import UpperNav from "./UpperNav.vue";
import MainButton from "@/components/MainButton.vue";
import Tr from "@/i18n/translation";

export default {
  components: {
    UpperNav,
    MainButton,
    LanguageSwitcher,
  },
  data() {
    return {
      navLinks: [
        {
          nameKey: "GLOBAL.NAVS.HOME",
          to: { name: "home-page" },
          id: "home",
        },
        {
          nameKey: "GLOBAL.NAVS.ABOUT",
          to: { name: "about-us" },
          id: "about",
        },
        {
          nameKey: "GLOBAL.NAVS.BLOGS",
          to: { name: "blogs-page" },
          id: "blogs",
        },
        {
          nameKey: "GLOBAL.NAVS.CATEGORIES",
          to: { name: "categories-page" },
          id: "categories",
        },
        {
          nameKey: "GLOBAL.NAVS.CONTACT",
          to: { name: "contact-us-page" },
          id: "contact",
        },
      ],
      Tr: Tr,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar-nav {
  width: 100%;
  justify-content: center;
  .nav-link {
    color: var(--text-color);
    font-weight: 400;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    &.router-link-exact-active,
    &:hover {
      color: var(--main-color);
    }
    &.router-link-exact-active {
      font-weight: 500;
    }
  }
}
</style>
