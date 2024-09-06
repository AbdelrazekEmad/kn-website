<template>
  <div class="banner-features py-5" :style="`background-image: url(${features.image})`">
    <div class="container">
      <SectionTitle :title="features.title" color="#cea348" />

      <div class="row g-4">
        <div class="col-12 col-lg-4 col-md-6" v-for="(feature, index) in features.child" :key="feature.id">
          <div class="banner-features__box" :class="index == 1 ? 'banner-features__box_border' : ''">
            <img class="banner-features__img" :src="feature.image" :alt="feature.title" :title="feature.title">

            <div class="banner-features__content" v-html="feature.content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  name: 'BannerSection',
  props: {
    features: {
      required: true,
      type: Object
    }
  },
  components: {
    SectionTitle
  }
}
</script>

<style lang="scss" scoped>
.banner-features {
  background-size: cover;
  background-repeat: no-repeat;
  
  &__box {
    display: flex;
    gap: 16px;
    height: 100%;
    justify-content: center;

    // &_border {
    //   border: 1px solid var(--main-color);
    //   border-top: 0;
    //   border-bottom: 0;

    //   @media (max-width: 991px) {
    //     border: 0;
    //   }
    // }

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  &__img {
    height: 48px;
    width: 48px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 12px;

    @media (max-width: 768px) {
      align-items: center;
    }
  }

  &__title {
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    font-family: var(--secondary-font);
    color: var(--white-color);
    margin-bottom: 0;
  }

  &__text {
    font-size: 16px;
    line-height: 1.5;
    margin-bottom: 0;
    color: var(--main-color);

    @media (max-width: 768px) {
      text-align: center;
    }
  }
}
</style>