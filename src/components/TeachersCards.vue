<template>
  <section class="teacher py-5">
    <div class="container">
      <SectionTitle :title="getTeachersData?.title" color="#101010" />

      <Carousel v-bind="getSettings" :breakpoints="breakpoints">
        <Slide v-for="teacher in getTeachersData?.child" :key="teacher.id">
          <div class="teacher__box">
            <img class="teacher__img" :src="teacher?.image" :alt="teacher?.title" :title="teacher?.title">

            <h3 class="teacher__title">
              {{ teacher?.title }}
            </h3>

            <div v-html="teacher?.content">
            </div>
          </div>
        </Slide>

        <template #addons>
          <Navigation />
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import Trans from "@/i18n/translation";
import { mapState, mapActions } from "pinia";
import { useTeachersStore } from '@/stores/teachers.store';

export default {
  name: "TeachersCards",
  components: {
    SectionTitle,
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      breakpoints: {
        // 700px and up
        768: {
          itemsToShow: 2,
          snapAlign: 'start',
        },
        991: {
          itemsToShow: 3,
          snapAlign: 'start',
        },
        1200: {
          itemsToShow: 4,
          snapAlign: 'start',
        }
      },
    }
  },
  async beforeMount() {
    await this.getAllTeachers()
  },
  computed: {
    ...mapState(useTeachersStore, ['getTeachersData']),
    getSettings() {
      return {
        snapAlign: 'start',
        dir: Trans.currentLocale == 'ar' ? 'rlt' : 'ltr',
        autoplay: 2000,
        wrapAround: true
      }
    }
  },
  methods: {
    ...mapActions(useTeachersStore, ['getAllTeachers'])
  }
}
</script>

<style lang="scss" scoped>
.teacher {
  &__box {
    height: 100%;
    padding: 24px 32px;
    margin: 0px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    transition: all 0.3s linear;

    &:hover {
      transform: scale(1.01);

      .teacher__title {
        color: var(--main-color);
      }
    }
  }

  &__img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 8px;
  }

  &__title {
    font-size: 24px;
    font-weight: 400;
    line-height: 1;
    font-family: var(--secondary-font);
    color: var(--text-color);
    margin-bottom: 0;
    text-align: center;
  }

  &__text {
    font-size: 16px;
    margin-bottom: 0;
    color: var(--text-color);
    text-align: center;
  }
}

:deep {
  .carousel__viewport {
    padding: 10px 0;
  }
}
</style>