<template>
  <div>
    <!-- TODO: get category replace title -->
    <main-banner
      :type="'breadcrumb'"
      :banner-title="`Category ${id}`"
      :current-page="$t('CATEGORY.TITLE')"
      :img-url="'https://placehold.co/900x600'"
    />
    <ListSectionSection
      :list="coursesList"
      :title="$t('COURSE.SECTION_TITLE')"
      router-name="single-course-page"
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
  name: "CategoryCoursesView",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  components: {
    MainBanner,
    ListSectionSection,
  },
  data() {
    return {
      Tr: Tr,
      coursesList: [
        {
          id: 1,
          name: "Course 1",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 2,
          name: "Course 2",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 3,
          name: "Course 3",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 4,
          name: "Course 4",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 5,
          name: "Course 5",
          text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque modi amet atque ut ipsam voluptatibus quasi, quod",
          img: "https://placehold.co/900x600",
          link: "test",
        },
        {
          id: 6,
          name: "Course 6",
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
