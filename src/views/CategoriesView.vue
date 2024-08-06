<template>
  <div>
    <main-banner
      :type="'breadcrumb'"
      :banner-title="$t('CATEGORY.MAIN_BANNER')"
      :current-page="$t('GLOBAL.NAVS.CATEGORIES')"
      :img-url="'https://placehold.co/900x600'"
    />
    <ListSectionSection
      :list="categoriesList"
      :title="$t('CATEGORY.SECTION_TITLE')"
      router-name="single-categories-page"
    />
  </div>
</template>

<script>
import { useCategoriesStore } from "@/stores/categories.store";
import { mapState, mapActions } from "pinia";
import MainBanner from "@/components/MainBanner.vue";
import ListSectionSection from "@/components/ListSection.vue";
import Tr from "@/i18n/translation";
export default {
  name: "ListSectionView",
  components: {
    MainBanner,
    ListSectionSection,
  },
  data() {
    return {
      Tr: Tr,
      categoriesList: [
        {
          id: 1,
          name: "Category 1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 2,
          name: "Category 2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 3,
          name: "Category 3",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 4,
          name: "Category 4",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 5,
          name: "Category 5",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 6,
          name: "Category 6",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
      ],
    };
  },
  computed: {
    ...mapState(useCategoriesStore, ["getCategories"]),
  },
  async mounted() {
    await this.getAllCategories();
  },
  methods: {
    ...mapActions(useCategoriesStore, ["getAllCategories"]),
  },
};
</script>

<style lang="scss" scoped></style>
