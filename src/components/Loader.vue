<template>
  <div class="h-100 d-flex align-items-center justify-content-center gap-3">
    <div class="spinner-grow" role="status"></div>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "Loading...",
    },
  },
};
</script>

<style lang="scss" scoped>
.spinner-grow {
  width: 3rem;
  height: 3rem;
}
</style>
