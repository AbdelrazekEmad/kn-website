<template>
  <section class="about-content py-5">
    <div class="container">
      <div class="row g-4">
        <slot name="content"></slot>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from "./MainButton.vue";
import Tr from "@/i18n/translation";

export default {
  name: "AboutContent",
  components: {
    MainButton,
  },
  data() {
    return {
      Tr: Tr,
    };
  },
};
</script>

<style lang="scss" scoped>
.about-content {
  &__box {
    height: 100%;
  }

  &__title {
    font-size: 32px;
    font-weight: 400;
    line-height: 1;
    font-family: var(--secondary-font);
    color: var(--text-color);
    margin-bottom: 24px;
  }

  &__text {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 16px;
    color: var(--text-color);

    &:last-of-type {
      margin-bottom: 24px;
    }
  }

  &__img {
    width: 100%;
    max-height: 500px;
    border-radius: 24px;
    border-end-start-radius: 0px;
    object-fit: cover;
  }
}
</style>
