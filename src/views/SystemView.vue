<template>
  <Navbar></Navbar>
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <div class="flex-grow-1">
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
  name: 'SystemView',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style scoped lang="scss">
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
