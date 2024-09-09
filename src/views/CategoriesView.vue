<template>
  <div class="h-100">
    <template
      v-if="!isFetching && !categoriesContentIsFetching && !isLoadingDelay"
    >
      <main-banner
        :type="'breadcrumb'"
        :banner-title="categoriesHeader.title"
        :current-page="categoriesHeader.title"
        :img-url="categoriesHeader.image"
      />
      <ListSection
        :list="categoriesList"
        :title="getCategoriesSection.title"
        :background-image="getCategoriesSection.image"
        router-name="single-categories-page"
        single-btn-text-key="CATEGORY_BTN"
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
  components: {
    MainBanner,
    ListSection,
  },
  computed: {
    ...mapState(useCategoriesStore, {
      categoriesHeader: "categoriesHeader",
      getCategoriesSection: "getCategoriesSection",
      categoriesContentIsFetching: "isFetching",
    }),
    ...mapState(useCoursesStore, {
      categoriesList: "categories",
      isFetching: "isFetching",
    }),
    ...mapState(useLoadingStore, ["isLoadingDelay"]),
  },
  async mounted() {
    await this.categoriesContent();
    await this.getAllCategories();
  },
  methods: {
    ...mapActions(useCategoriesStore, ["categoriesContent"]),
    ...mapActions(useCoursesStore, ["getAllCategories"]),
  },
};
</script>

<style lang="scss" scoped></style>
