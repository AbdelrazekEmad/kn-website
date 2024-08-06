<template>
  <div class="not-found" style="background-image: url(https://placehold.co/900x600)">
    <div class="not-found__content">
      <h1>oops</h1>
      <h2>Error 404</h2>
      <div class="not-found__action">
        <!-- <RouterLink :to="Tr.i18nRoute({ name: 'single-blog-page' })"> Go to Home </RouterLink>
        <RouterLink :to="Tr.i18nRoute({ name: 'single-blog-page' })"> Browse Courses </RouterLink> -->
      </div>
    </div>
  </div>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  data() {
    return {
      Tr: Tr,
    };
  },
};
</script>

<style lang="scss" scoped>
.not-found {
  height: 85vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    background-color: #000000cc;

    h1,
    h2 {
      font-size: 70px;
      color: var(--main-color);
      font-family: var(--secondary-font);
      font-weight: 500;
    }
  }
}
</style>
