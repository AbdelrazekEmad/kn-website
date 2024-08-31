<template>
  <div>
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
  </div>
</template>

<script>
import { useBlogsStore } from "@/stores/blogs.store";
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
    ...mapState(useBlogsStore, ["getBlogsHeaders", "getBlogs"]),
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
.blog {
  display: flex;
  flex-direction: column;
  background-color: var(--main-color);
  color: #000;
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid var(--text-color);
  height: 100%;
  justify-content: space-between;

  &__img {
    margin-bottom: 12px;
    width: 100%;
    max-height: 250px;
    object-fit: cover;
  }

  &__title {
    font-family: var(--secondary-font);
    font-size: 20px;
    padding-inline: 16px;
    color: var(--text-color);
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 16px;
  }

  &__read-more {
    padding-inline: 16px;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--secondary-color);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;

    i {
      font-size: 8px;
    }
  }

  &__footer {
    padding: 12px 16px;
    font-weight: 500;
    border-top: 1px solid #eaeaea;
    color: var(--secondary-color);
    font-size: 12px;
    margin-top: 8px;
  }
}
</style>
