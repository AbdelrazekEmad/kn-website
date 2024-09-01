<template>
  <div class="h-100">
    <template v-if="!isFetching && !isLoadingDelay">
      <main-banner
        :type="'breadcrumb'"
        :banner-title="course.title"
        :current-page="$t('COURSE.MAIN_BANNER')"
        :img-url="course.image"
      />
      <section class="mt-5">
        <div class="container">
          <!-- course info -->
          <div class="course-info">
            <div class="row align-items-center">
              <div class="col-12 col-md-6">
                <h3 class="main-header">{{ course.title }}</h3>
                <p class="course-info__desc">
                  {{ course.description }}
                </p>
                <MainButton text="Enroll now" />
              </div>
              <div class="col-12 col-md-6 order-first order-md-2">
                <div class="p-md-5 p-2 course-info__image">
                  <img src="https://placehold.co/900x600" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="features my-3 my-md-5">
            <h3 class="main-header">Course Key features</h3>
            <div class="features row g-2">
              <div
                class="col-6 col-md-4"
                v-for="(feature, index) in features"
                :key="index"
              >
                <div class="features__feature">
                  <i class="fa-regular fa-circle-check"></i>
                  {{ feature }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </template>
    <Loader v-else />
  </div>
</template>

<script>
import { useLoadingStore } from "@/stores/loading.store";
import { useCoursesStore } from "@/stores/courses.store";
import { mapState, mapActions } from "pinia";
import MainBanner from "@/components/MainBanner.vue";
import MainButton from "../components/MainButton.vue";
export default {
  name: "SingleCourseView",
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  components: {
    MainBanner,
    MainButton,
  },
  data() {
    return {
      features: [
        "Lorem ipsum dolor sit amet",
        "Donec quam felis",
        "Donec pede justo",
        "Curabitur ullamcorper ultricies",
        "Maecenas tempus",
        "Lorem ipsum dolor sit amet",
        "Donec quam felis",
        "Donec pede justo",
        "Curabitur ullamcorper ultricies",
        "Maecenas tempus",
        "Lorem ipsum dolor sit amet",
        "Donec quam felis",
        "Donec pede justo",
        "Curabitur ullamcorper ultricies",
        "Maecenas tempus",
      ],
    };
  },
  computed: {
    ...mapState(useCoursesStore, ["course" , "isFetching"]),
    ...mapState(useLoadingStore, ["isLoadingDelay"]),
  },
  async mounted() {
    await this.getSelectedCourse(this.id);
  },
  methods: {
    ...mapActions(useCoursesStore, ["getSelectedCourse"]),
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  font-size: 32px;
  font-weight: 400;
  line-height: 1;
  font-family: var(--secondary-font);
  margin-bottom: 24px;
}
.course-info {
  &__image {
    img {
      border-radius: 24px;
      height: 100%;
      width: 100%;
    }
  }
}

.features {
  &__feature {
    display: flex;
    gap: 8px;
    align-items: center;
    font-size: 20px;
    i {
      color: var(--dark-main-color);
    }
  }
}
</style>
