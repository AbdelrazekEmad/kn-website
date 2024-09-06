<template>
  <section class="about-content py-5">
    <div class="container">
      <div class="row g-4">
        <slot name="content">
          <div class="col-12 col-lg-6">
            <div class="about-content__box">
              <h2 class="about-content__title">
                {{ $t('ABOUT.MAIN_BANNER') }}
              </h2>

              <p class="about-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam
                voluptatibus quasi, quod accusantium, sit perferendis harum temporibus molestias odit
                alias
                eum
                deleniti suscipit nulla recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam
                voluptatibus quasi, quod accusantium, sit perferendis harum temporibus molestias odit
                alias
                eum
                deleniti suscipit nulla recusandae.
              </p>

              <p class="about-content__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam
                voluptatibus quasi, quod accusantium, sit perferendis harum temporibus molestias odit
                alias
                eum
                deleniti suscipit nulla recusandae.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam
                voluptatibus quasi, quod accusantium, sit perferendis harum temporibus molestias odit
                alias
                eum
                deleniti suscipit nulla recusandae.
              </p>

              <MainButton text="Courses" link="courses" />
            </div>
          </div>

          <div class="col-12 col-lg-6">
            <div class="about-content__box">
              <img class="about-content__img" src="https://placehold.co/900x600" alt="about us" title="about us">
            </div>
          </div>
        </slot>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from './MainButton.vue';
import Tr from "@/i18n/translation";

export default {
  name: "AboutContent",
  components: {
    MainButton
  },
  data() {
    return {
      Tr: Tr,
    }
  },
}
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