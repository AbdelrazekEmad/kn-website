<template>
  <div class="h-100">
    <template v-if="!isFetching && !isLoadingDelay">
      <main-banner :type="'breadcrumb'" :banner-title="getBlogsHeaders.title" :current-page="getBlogsHeaders.title" :img-url="getBlogsHeaders.image" />
      <section class="my-5">
        <div class="container">
          <div class="row g-4">
            <div class="col-12 col-md-6 col-lg-4" v-for="blog in getBlogs" :key="blog.id">
              <div class="blog">
                <div class="blog__body">
                  <img :src="blog.image" :alt="blog.title" class="blog__img img-fluid" />

                  <RouterLink
                    :to="
                      Tr.i18nRoute({
                        name: 'single-blog-page',
                        params: { id: blog.id },
                      })
                    "
                    class="blog__title"
                    :title="blog.title"
                  >
                    {{ blog.title }}
                  </RouterLink>

                  <RouterLink
                    :to="
                      Tr.i18nRoute({
                        name: 'single-blog-page',
                        params: { id: blog.id },
                      })
                    "
                    class="blog__read-more"
                  >
                    {{ $t("BLOG.READ_MORE") }} <i class="fa-solid fa-angles-right"></i>
                  </RouterLink>
                </div>
                <div class="blog__footer">{{ blog.date }} . {{ blog.time }}</div>
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
import { useBlogsStore } from "@/stores/blogs.store";
import { useLoadingStore } from "@/stores/loading.store";
import { mapState, mapActions } from "pinia";
import MainBanner from "@/components/MainBanner.vue";
import Tr from "@/i18n/translation";

export default {
  name: "BlogsView",
  components: {
    MainBanner,
  },
  data() {
    return {
      Tr: Tr,
    };
  },
  computed: {
    ...mapState(useBlogsStore, ["getBlogsHeaders", "getBlogs", "isFetching"]),
    ...mapState(useLoadingStore, ["isLoadingDelay"]),
  },
  async mounted() {
    await this.getBlogsContent();
  },
  methods: {
    ...mapActions(useBlogsStore, ["getBlogsContent"]),
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/component/blogs";
</style>
