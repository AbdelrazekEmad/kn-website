<template>
  <Navbar></Navbar>
  <RouterView />
</template>

<script>
  import Navbar from '@/components/layout/Navbar.vue'
  export default {
    components: {
      Navbar,
    },
  }
</script>

<style lang="scss">
  @import "src/assets/scss/main.scss";
</style>
