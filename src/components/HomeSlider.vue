<template>
  <div class="slider-parent">
    <template v-for="(image, index) in slides?.page_images" :key="index">
      <transition name="fade">
        <img :src="image.image" alt="slider image" title="slider image" class="slider-parent__img" v-if="index === currentSliderIndex" />
      </transition>
    </template>

    <div class="slider-parent__content">
      <h1 class="slider-parent__title">
        {{ slides?.title }}
      </h1>

      <div v-html="slides?.content"></div>

      <div class="slider-parent__buttons">
        <MainButton class="slider-parent__button" :text="$t('HOME.SLIDER.FREE_TRIAL')" :href="mainGooglePlay" />
        <MainButton class="slider-parent__button light" :text="$t('HOME.SLIDER.BROWSE_COURSES')" link="courses" />
      </div>
    </div>
  </div>
</template>

<script>
import MainButton from "../components/MainButton.vue";

export default {
  components: {
    MainButton,
  },
  props: {
    slides: {
      required: true,
      type: Object,
      default: () => {
        return {};
      },
    },
  },
  data() {
    return {
      intervalId: null,
      currentSliderIndex: 0,
      mainGooglePlay: import.meta.env.VITE_SOCIAL_PLAY,
    };
  },
  methods: {
    startSlider() {
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 3000);
    },
    nextSlide() {
      this.currentSliderIndex = (this.currentSliderIndex + 1) % this.slides?.page_images.length;
    },
  },
  mounted() {
    this.startSlider();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
};
</script>

<style lang="scss" scoped>
.slider-parent {
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &__img {
    height: 100%;
    width: 100%;
    position: absolute;
    object-fit: cover;
    z-index: -1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: center;
  }

  &__title {
    font-size: 48px;
    font-weight: 400;
    font-family: var(--secondary-font);
    color: var(--secondary-color);
    text-align: center;
  }

  &__text {
    font-size: 24px;
    font-weight: 400;
    color: var(--text-color);
    text-align: center;
  }

  &__buttons {
    display: flex;
    gap: 16px;
  }

  &__button {
    background-color: var(--main-color);
    padding: 8px 16px;
    color: var(--white-color);
    border: 0;
    outline: 0;
    transition: all 0.2s linear;
    border-radius: 16px;
    text-transform: capitalize;
    line-height: unset;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

    &:hover {
      background-color: var(--secondary-color);
      color: var(--white-color);
    }

    &.light {
      background-color: var(--secondary-color);

      &:hover {
        background-color: var(--main-color);
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s, transform 1s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(0);
}
</style>
