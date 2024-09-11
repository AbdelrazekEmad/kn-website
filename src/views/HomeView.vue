<template>
  <div class="home-content" v-if="!getFetchingStatus && !teacherFetchingStatus && !featuresFetchingStatus && !blogsFetchingStatus && !categoriesContentIsFetching && !isLoadingDelay">
    <HomeSlider :slides="getSlider" />
    <BannerSection :features="getApart" />

    <AboutContent>
      <template #content>
        <div class="col-12 col-lg-6">
          <div class="home-content__box">
            <h2 class="home-content__title">
              {{ getStories?.title }}
            </h2>

            <div v-html="getStories?.content"></div>

            <MainButton :text="$t('HOME.PROGRAMS_LINK')" :link="{ name: 'categories-page' }" />
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="home-content__box">
            <img class="home-content__img" :src="getStories?.image" alt="about us" title="about us" />
          </div>
        </div>
      </template>
    </AboutContent>

    <ListSection :list="popularCourse" :title="getCategoriesSection.title" :background-image="getCategoriesSection.image" router-name="single-course-page" single-btn-text-key="CORSE_BTN" />

    <TeachersCards :getTeachersData="getTeachersData" />
    <FeaturesSection :getKeyFeaturesSection="getKeyFeaturesSection" :getKeyFeaturesItems="getKeyFeaturesItems" />
    <LatestNews :getLatestBlogs="getLatestBlogs" />
    <FeedbackSection :feedbacks="getFeedbacks" />
  </div>

  <Loader v-else />
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
import MainButton from "@/components/MainButton.vue";
import BannerSection from "@/components/BannerSection.vue";
import ListSection from "@/components/ListSection.vue";
import { useHomeStore } from "@/stores/home.store";
import { mapState, mapActions } from "pinia";
import { useLoadingStore } from "@/stores/loading.store";
import { useTeachersStore } from "@/stores/teachers.store";
import { useKeyFeaturesStore } from "@/stores/key-features.store";
import { useBlogsStore } from "@/stores/blogs.store";
import { useCategoriesStore } from "@/stores/categories.store";
import { useCoursesStore } from "@/stores/courses.store";

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
    BannerSection,
    ListSection,
  },
  data() {
    return {
      Tr: Tr,
    };
  },
  computed: {
    ...mapState(useHomeStore, ["getSlider", "getApart", "getStories", "getCourses", "getFeedbacks", "getFetchingStatus"]),
    ...mapState(useLoadingStore, ["isLoadingDelay"]),
    ...mapState(useTeachersStore, {
      teacherFetchingStatus: "getFetchingStatus",
      getTeachersData: "getTeachersData",
    }),

    ...mapState(useKeyFeaturesStore, {
      featuresFetchingStatus: "getFetchingStatus",
      getKeyFeaturesSection: "getKeyFeaturesSection",
      getKeyFeaturesItems: "getKeyFeaturesItems",
    }),

    ...mapState(useBlogsStore, {
      blogsFetchingStatus: "getFetchingStatus",
      getLatestBlogs: "getLatestBlogs",
    }),
    ...mapState(useCoursesStore, ["popularCourse"]),
    ...mapState(useCategoriesStore, {
      getCategoriesSection: "getCategoriesSection",
      categoriesContentIsFetching: "isFetching",
    }),
  },
  methods: {
    ...mapActions(useHomeStore, ["getAllHome"]),
    ...mapActions(useBlogsStore, ["getBlogsContent"]),
    ...mapActions(useTeachersStore, ["getAllTeachers"]),
    ...mapActions(useKeyFeaturesStore, ["keyFeaturesContent"]),
    ...mapActions(useCoursesStore, ["getPopularCourse"]),
    ...mapActions(useCategoriesStore, ["categoriesContent"]),
  },
  async beforeMount() {
    await this.getAllHome();
    await this.getBlogsContent();
    await this.getAllTeachers();
    await this.keyFeaturesContent();
    await this.categoriesContent();
    await this.getPopularCourse();
  },
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
