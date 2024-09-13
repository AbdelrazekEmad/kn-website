<template>
  <footer>
    <div class="container">
      <div class="row justify-content-between align-items-center py-3 border-top">
        <ul class="nav col-md-5 flex-nowrap flex-column flex-md-row">
          <li class="nav-item" v-for="link in navLinks" :key="link.id">
            <router-link class="nav-link px-2" :to="Tr.i18nRoute(link.to)">
              {{ $t(link.nameKey) }}
            </router-link>
          </li>
        </ul>

        <div class="col-md-2">
          <router-link :to="Tr.i18nRoute({ name: 'home-page' })" class="d-inline-block">
            <img src="../../assets/images/kn-loho.png" alt="Logo" class="logo" />
          </router-link>
        </div>

        <p class="col-md-5 mb-0 col-12">
          {{
            $t("GLOBAL.FOOTER_RIGHTS", {
              year: currentYear,
            })
          }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
import Tr from "@/i18n/translation";
import NAV_ITEMS from "@/shared/constants/navbarItems";
export default {
  data() {
    return {
      Tr: Tr,
      navLinks: NAV_ITEMS,
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--dark-main-color);
  color: var(--white-color);
  font-size: 22px;
  font-size: 500;
  padding: 8px;
  text-align: center;
  .logo {
    width: 64px;
    height: 64px;
  }
  .nav-link {
    color: var(--white-color);
    transition: color 0.3s ease-in-out;
    &:hover {
      color: var(--blue-color);
    }
  }
}
</style>
