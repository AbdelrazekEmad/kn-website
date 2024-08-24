<template>
  <Navbar></Navbar>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div>
        <component :is="Component" :key="route.path" />
      </div>
    </transition>
  </router-view>
  <Footer></Footer>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "src/assets/scss/main.scss";

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
