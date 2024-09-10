<template>
  <section class="features py-5" :style="`background-image: url(${getKeyFeaturesSection.image})`">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6">
          <div class="features__boxes">
            <h2 class="features__main-title">{{ getKeyFeaturesSection.title }}</h2>

            <div class="features__box" v-for="feature in getKeyFeaturesItems" :key="feature.id">
              <img class="features__icon" :src="feature.image" alt="" />

              <div class="features__content">
                <p class="features__text" v-html="feature.content"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  name: "FeaturesSection",
  props: {
    getKeyFeaturesSection: {
      required: true,
      type: Object
    },
    getKeyFeaturesItems: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      Tr: Tr,
    };
  },
};
</script>

<style lang="scss" scoped>
.features {
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
    margin-bottom: 8px;
  }

  &__box {
    display: flex;
    gap: 16px;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__icon {
    width: 50px;
    height: 50px;
    object-fit: contain;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    font-family: var(--secondary-font);
    color: var(--main-color);
    margin-bottom: 0;
  }

  &__text {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    color: var(--white-color);
    font-weight: bold;
    font-weight: 500;

    @media (max-width: 768px) {
      text-align: center;
    }
  }
}
</style>
