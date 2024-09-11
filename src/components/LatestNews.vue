<template>
  <section class="news py-5">
    <div class="container">
      <SectionTitle :title="$t('BLOG.LATEST_TITLE')" color="#101010" />

      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4" v-for="blog in getLatestBlogs" :key="blog.id">
          <div class="blog">
            <div class="blog__body">
              <img :src="blog.image" :alt="blog.title" class="blog__img img-fluid" />

              <RouterLink :to="Tr.i18nRoute({
                name: 'single-blog-page',
                params: { id: blog.id },
              })
                " class="blog__title" :title="blog.title">
                {{ blog.title }}
              </RouterLink>

              <RouterLink :to="Tr.i18nRoute({
                name: 'single-blog-page',
                params: { id: blog.id },
              })
                " class="blog__read-more">
                {{ $t("BLOG.READ_MORE") }} <i class="fa-solid fa-angles-right"></i>
              </RouterLink>
            </div>
            <div class="blog__footer">{{ blog.created_since }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SectionTitle from "./SectionTitle.vue";
import Tr from "@/i18n/translation";

export default {
  name: "LatestNews",
  props: {
    getLatestBlogs: {
      required: true,
      type: Array
    }
  },
  components: {
    SectionTitle,
  },
  data() {
    return {
      Tr: Tr,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/component/blogs";
</style>
