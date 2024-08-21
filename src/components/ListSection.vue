<template>
  <section class="items py-5">
    <div class="container">
      <SectionTitle class="my-5" :title="title" color="#101010" />

      <div class="row g-0">
        <div
          class="col-12 col-xl-4 col-md-6"
          v-for="item in list"
          :key="item.id"
        >
          <router-link
            :to="{ name: routerName, params: { id: item.id } }"
            class="items__item__box"
          >
            <div class="items__item__img-container">
              <img
                class="items__item__img"
                :src="item.img"
                :alt="item.name"
                :title="item.name"
              />
            </div>

            <h3 class="items__item__title">
              {{ item.name }}
            </h3>

            <p class="items__item__text">
              {{ item.text }}
            </p>

            <MainButton
              text="Free Trail"
              :link="{
                name: 'single-categories-page',
                params: { id: item.id },
              }"
            />
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainButton from "./MainButton.vue";
import SectionTitle from "./SectionTitle.vue";

export default {
  name: "CoursesSection",
  components: {
    SectionTitle,
    MainButton,
  },
  props: {
    list: {
      type: Array,
      default: [],
    },
    title: {
      type: String,
      default: "",
    },
    routerName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.items {
  background-image: url("https://placehold.co/900x600");
  background-size: cover;

  &__item {
    &__box {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      transition: all 0.3s linear;
      padding: 16px;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;

      &:hover {
        .categories__img {
          transform: rotate(2deg) scale(1.05);
        }
      }
    }

    &__img-container {
      width: 100%;
      height: 250px;
      overflow: hidden;
    }

    &__img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    &__title {
      font-size: 24px;
      font-weight: 500;
      line-height: 1;
      color: var(--text-color);
      font-family: var(--secondary-font);
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
}
</style>
