<template>
  <div class="h-100">
    <template v-if="!isFetching && !isLoadingDelay">
      <main-banner
        :type="'breadcrumb'"
        :banner-title="$t('CATEGORY.MAIN_BANNER')"
        :current-page="$t('GLOBAL.NAVS.CATEGORIES')"
        :img-url="'https://placehold.co/900x600'"
      />
      <ListSection
        :list="categoriesList"
        :title="$t('CATEGORY.SECTION_TITLE')"
        router-name="single-categories-page"
      />
    </template>
    <Loader v-else />
  </div>
</template>

<script>
import { useLoadingStore } from "@/stores/loading.store";
import { useCoursesStore } from "@/stores/courses.store";
import { mapState, mapActions } from "pinia";
import MainBanner from "@/components/MainBanner.vue";
import ListSection from "@/components/ListSection.vue";
export default {
  components: {
    MainBanner,
    ListSection,
  },
  computed: {
    ...mapState(useCoursesStore, {
      categoriesList: "categories",
      isFetching: "isFetching",
    }),
    ...mapState(useLoadingStore, ["isLoadingDelay"]),
  },
  async mounted() {
    await this.getAllCategories();
  },
  methods: {
    ...mapActions(useCoursesStore, ["getAllCategories"]),
  },
};
</script>

<style lang="scss" scoped></style>
