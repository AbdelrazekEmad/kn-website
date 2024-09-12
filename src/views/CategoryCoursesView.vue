<template>
  <div class="h-100">
    <template v-if="!isFetching && !isLoadingDelay">
      <main-banner
        :type="'breadcrumb'"
        :banner-title="category.title"
        :current-page="$t('CATEGORY.TITLE')"
        :img-url="category.image"
      />
      <ListSection
        :list="coursesList"
        :title="singleCategoryContent.title"
        :background-image="singleCategoryContent.image"
        router-name="single-course-page"
        single-btn-text-key="COURSE_BTN"
      />
    </template>
    <Loader v-else />
  </div>
</template>

<script>
import { useLoadingStore } from "@/stores/loading.store";
import { useCoursesStore } from "@/stores/courses.store";
import { useCategoriesStore } from "@/stores/categories.store";
import { mapState, mapActions } from "pinia";
import MainBanner from "@/components/MainBanner.vue";
import ListSection from "@/components/ListSection.vue";
export default {
  name: "CategoryCoursesView",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  components: {
    MainBanner,
    ListSection,
  },
  computed: {
    ...mapState(useCategoriesStore, {
      singleCategoryContent: "singleCategoryContent",
      categoriesContentIsFetching: "isFetching",
    }),
    ...mapState(useCoursesStore, {
      coursesList: "selectedCourses",
      category: "category",
      isFetching: "isFetching",
    }),
    ...mapState(useLoadingStore, ["isLoadingDelay"]),
  },
  async mounted() {
    await this.categoriesContent();
    await this.getCategoryCourses(this.id);
  },
  methods: {
    ...mapActions(useCoursesStore, ["getCategoryCourses"]),
    ...mapActions(useCategoriesStore, ["categoriesContent"]),
  },
};
</script>

<style lang="scss" scoped></style>
