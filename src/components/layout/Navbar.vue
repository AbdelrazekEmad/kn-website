<template>
  <div>
    <upper-nav></upper-nav>
    <nav class="navbar navbar-expand-lg bg-white">
      <div class="container">
        <router-link
          class="logo"
          :to="
            Tr.i18nRoute({
              name: 'home-page',
            })
          "
        >
          <img src="../../assets/images/kn-loho.png" alt="" />
        </router-link>

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

        <div class="mt-3 collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav gap-md-3 mb-2 mb-lg-0 gap-3">
            <li class="nav-item" v-for="link in navLinks" :key="link.id">
              <router-link class="nav-link" :to="Tr.i18nRoute(link.to)">
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
import NAV_ITEMS from "@/shared/constants/navbarItems";

export default {
  components: {
    UpperNav,
    MainButton,
    LanguageSwitcher,
  },
  data() {
    return {
      navLinks: NAV_ITEMS,
      Tr: Tr,
    };
  },
};
</script>

<style lang="scss" scoped>
.logo {
  width: 80px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.navbar-nav {
  width: 100%;
  justify-content: center;
  .nav-link {
    color: var(--text-color);
    font-weight: 400;
    font-size: 16px;
    transition: all 0.3s ease-in-out;
    background-color: var(--main-color);
    color: #fff;
    padding-inline: 20px;
    border-radius: 8px;
    &.router-link-active,
    &:hover {
      color: var(--second-color);
    }
    &.router-link-active {
      font-weight: 500;
    }
  }
}
</style>
