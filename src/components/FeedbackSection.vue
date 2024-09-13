<template>
  <section class="feedback py-5" :style="`background-image: url(${feedbacks.image})`">
    <div class="container">
      <div class="feedback__boxes">
        <h2 class="feedback__main-title">
          {{ feedbacks?.title }}
        </h2>


        <Carousel v-bind="getSettings" :breakpoints="breakpoints">
          <Slide v-for="(feedback, index) in feedbacks?.child" :key="index">
            <div class="feedback__item">
              <img class="feedback__img-feedback" :src="feedback.image" alt="feedback.title" title="feedback.title">

              <div class="feedback__widget">
                <img class="feedback__img" :src="feedback.page_images[0].image" :alt="feedback.title"
                  :title="feedback.title">

                <h3 class="feedback__title">
                  {{ feedback.title }}
                </h3>
              </div>
            </div>
          </Slide>

          <template #addons>
            <Navigation />
          </template>
        </Carousel>
      </div>
    </div>
  </section>
</template>

<script>
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Trans from "@/i18n/translation";
import Tr from "@/i18n/translation";

export default {
  name: "FeedbackSection",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props: {
    feedbacks: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      Tr: Tr,
      breakpoints: {
        991: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        1200: {
          itemsToShow: 2.5,
          snapAlign: 'start',
        },
        1400: {
          itemsToShow: 3,
          snapAlign: 'start',
        }
      },
    }
  },
  computed: {
    getSettings() {
      return {
        snapAlign: 'start',
        dir: Trans.currentLocale == 'ar' ? 'rtl' : 'ltr',
        // autoplay: 2000,
        wrapAround: true,
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.feedback {
  background-size: cover;

  &__boxes {
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  &__main-title {
    font-size: 32px;
    font-weight: 400;
    line-height: 1;
    font-family: var(--secondary-font);
    color: var(--white-color);
    margin-bottom: 16px;
    text-align: center;
  }

  &__item {
    padding: 16px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    position: relative;
    height: 400px;
  }

  &__img-feedback {
    height: 100%;
    width: 100%;
  }

  &__icon {
    font-size: 48px;
    color: var(--main-color);
  }

  &__text {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    color: var(--white-color);
    text-align: center;
  }

  &__rate {
    display: flex;
    gap: 8px;
    justify-content: center;
    margin-top: 8px;
  }

  &__rate-icon {
    font-size: 16px;
    color: var(--main-color);
  }

  &__img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
    color: var(--white-color);
    margin-bottom: 0;
  }

  &__widget {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    left: 50%;
    bottom: -20px;
    transform: translate(-50%, 50%);
  }
}

:deep {
  .carousel__viewport {
    padding-top: 10px;
  }

  .carousel__slide {
    margin-bottom: 80px;
  }
}
</style>