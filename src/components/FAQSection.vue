<template>
  <section class="faq py-5">
    <div class="container">
      <SectionTitle :title="faqs.title" color="#cea348" />
      <div class="row g-4">
        <div class="col-12 col-lg-6" v-for="faq in faqs?.child" :key="faq?.id">
          <div class="faq__box">
            <h2 class="faq__title">
              {{ faq?.title }}
            </h2>

            <div class="faq__text" v-html="faq?.content">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  name: "FAQSection",
  components: {
    SectionTitle
  },
  props: {
    faqs: {
      required: true,
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.faq {
  background-color: var(--section-bg-color);

  &__box {
    height: 100%;
    background-color: var(--bg-color);
  }

  &__title {
    padding: 24px 32px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
    font-family: var(--secondary-font);
    background-color: var(--main-color);
    color: var(--text-color);
    margin-bottom: 0;
  }

  &__text {
    padding: 32px;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;
    margin-bottom: 0;
    color: var(--white-color);
  }
}
</style>