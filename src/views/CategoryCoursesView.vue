<template>
  <div>
    <main-banner
      :type="'breadcrumb'"
      :banner-title="category.title"
      :current-page="$t('CATEGORY.TITLE')"
      :img-url="category.image"
    />
    <ListSection
      :list="coursesList"
      :title="$t('COURSE.SECTION_TITLE')"
      router-name="single-course-page"
    />
  </div>
</template>

<script>
import { useCoursesStore } from "@/stores/courses.store";
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
    ...mapState(useCoursesStore, {
      coursesList: "selectedCourses",
      category: "category",
    }),
  },
  async mounted() {
    await this.getCategoryCourses(this.id);
  },
  methods: {
    ...mapActions(useCoursesStore, ["getCategoryCourses"]),
  },
};
</script>

<style lang="scss" scoped></style>
