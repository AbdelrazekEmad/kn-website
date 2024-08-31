<template>
  <div>
    <main-banner :type="'breadcrumb'" :banner-title="getBanner?.title" :current-page="getBanner?.title"
      :img-url="getBanner?.image" />

    <AboutContent>
      <template #content>
        <div class="col-12 col-lg-6">
          <div class="about-content__box">
            <h2 class="about-content__title">
              {{ getAboutUs?.title }}
            </h2>

            <div v-html="getAboutUs?.content">
            </div>

            <MainButton text="Courses" link="courses" />
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <div class="about-content__box">
            <img class="about-content__img" :src="getAboutUs?.image" alt="about us" title="about us" />
          </div>
        </div>
      </template>
    </AboutContent>

    <section class="py-5">
      <div class="container">
        <div class="row g-4">
          <div class="col-12 col-lg-6" v-for="(vision, index) in getVisions" :key="index">
            <VisionBox :title="vision.title" :text="vision.text" />
          </div>
        </div>
      </div>
    </section>

    <FeaturesSection :features="getWhatOffer" />

    <TeachersCards />
    <FAQSection />
    <LatestNews />
  </div>
</template>

<script>
import MainBanner from "@/components/MainBanner.vue";
import Tr from "@/i18n/translation";
import AboutContent from "@/components/AboutContent.vue";
import VisionBox from "@/components/VisionBox.vue";
import FeaturesSection from "@/components/FeaturesSection.vue";
import FAQSection from "@/components/FAQSection.vue";
import TeachersCards from "@/components/TeachersCards.vue";
import LatestNews from "@/components/LatestNews.vue";
import MainButton from "@/components/MainButton.vue";
import { useAboutUsStore } from "@/stores/about-us.store";
import { mapState, mapActions } from "pinia";

export default {
  name: "AboutView",
  components: {
    MainBanner,
    AboutContent,
    VisionBox,
    FeaturesSection,
    FAQSection,
    TeachersCards,
    LatestNews,
    MainButton,
  },
  data() {
    return {
      Tr: Tr,
      visions: [
        {
          id: 1,
          title: "Who We Are",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam.",
        },
        {
          id: 2,
          title: "Mission & Vision",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo quis cum rerum doloremque iusto id, nam, consequuntur eos earum fuga beatae optio voluptate facilis, exercitationem animi laudantium voluptatibus officiis magnam.",
        },
      ],
    };
  },
  computed: {
    ...mapState(useAboutUsStore, ['getBanner', 'getAboutUs', 'getMission', 'getWhatOffer']),
    getVisions() {
      return [
        {
          title: this.getMission?.title,
          text: this.getMission?.content
        }
      ]
    }
  },
  methods: {
    ...mapActions(useAboutUsStore, ['getAllAboutUs'])
  },
  async beforeMount() {
    await this.getAllAboutUs()
  }
};
</script>

<style lang="scss" scoped>
.about-content {
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
    height: 100%;
    border-radius: 24px;
    border-end-start-radius: 0px;
    object-fit: cover;
  }
}
</style>
