<template>
  <div class="home-content">
    <HomeSlider />
    <BannerSection :features="getApart" />

    <AboutContent>
      <template #content>
        <div class="col-12 col-lg-6">
          <div class="home-content__box">
            <h2 class="home-content__title">
              {{ getStories?.title }}
            </h2>

            <div v-html="getStories?.content">
            </div>

            <MainButton text="Courses" link="courses" />
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="home-content__box">
            <img class="home-content__img" :src="getStories?.image" alt="about us" title="about us" />
          </div>
        </div>
      </template>
    </AboutContent>

    <CoursesSection />
    <TeachersCards />
    <FeaturesSection />
    <LatestNews />
    <FeedbackSection />
  </div>
</template>

<script>

import Tr from "@/i18n/translation";
import AboutContent from "@/components/AboutContent.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import TeachersCards from "@/components/TeachersCards.vue";
import LatestNews from "@/components/LatestNews.vue";
import HomeSlider from "@/components/HomeSlider.vue";
import CoursesSection from "@/components/CoursesSection.vue";
import FeedbackSection from "@/components/FeedbackSection.vue";
import MainButton from '@/components/MainButton.vue';
import BannerSection from "@/components/BannerSection.vue";
import { useHomeStore } from "@/stores/home.store";
import { mapState, mapActions } from "pinia";

export default {
  name: "HomeView",
  components: {
    AboutContent,
    FeaturesSection,
    TeachersCards,
    LatestNews,
    HomeSlider,
    CoursesSection,
    FeedbackSection,
    MainButton,
    BannerSection
  },
  data() {
    return {
      Tr: Tr,
    };
  },
  computed: {
    ...mapState(useHomeStore, ['getSlider', 'getApart', 'getStories', 'getCourses']),
  },
  methods: {
    ...mapActions(useHomeStore, ['getAllHome'])
  },
  async beforeMount() {
    await this.getAllHome()
  }
};
</script>

<style lang="scss" scoped>
.home-content {
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
    object-fit: cover;
    border-radius: 24px;
    border-end-start-radius: 0px;
    object-fit: cover;
  }
}
</style>