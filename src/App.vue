<template>
  <Navbar></Navbar>
  <RouterView />
  <Footer></Footer>
</template>

<script>
  import Navbar from '@/components/layout/Navbar.vue';
  import Footer from '@/components/layout/Footer.vue';
  export default {
    components: {
      Navbar,
      Footer
    },
  }
</script>

<style lang="scss">
  @import "src/assets/scss/main.scss";
</style>
