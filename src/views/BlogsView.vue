<template>
  <main-banner :type="'breadcrumb'" :banner-title="$t('BLOG.MAIN_BANNER')" :current-page="$t('GLOBAL.NAVS.BLOG')" :img-url="'https://placehold.co/900x600'" />
  <section class="my-5">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-6 col-lg-4" v-for="blog in blogs" :key="blog.id">
          <div class="blog">
            <div class="blog__body">
              <img :src="blog.img" alt="" class="blog__img img-fluid" />
              <!-- <a href="" class="blog__title" :title="blog.name">{{ blog.name }}</a> -->

              <RouterLink :to="Tr.i18nRoute({ name: 'single-blog-page', params: { id: blog.id } })" class="blog__title" :title="blog.name">
                {{ blog.name }}
              </RouterLink>

              <p class="blog__description">{{ blog.description }}</p>
              <a href="" class="blog__read-more">{{ $t("BLOG.READ_MORE") }} <i class="fa-solid fa-angles-right"></i></a>
            </div>
            <div class="blog__footer">{{ blog.date }} . {{ blog.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
      blogs: [
        {
          id: 1,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
        },
        {
          id: 2,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
        },
        {
          id: 3,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
        },
        {
          id: 4,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
        },
        {
          id: 5,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
        },
        {
          id: 6,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
        },
      ],
    };
  },
  computed: {
    ...mapState(useBlogsStore, ["getBlogs"]),
  },
  async mounted() {
    await this.getAllBlogs();
  },
  methods: {
    ...mapActions(useBlogsStore, ["getAllBlogs"]),
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
  }

  &__description {
    font-size: 14px;
    padding: 16px;
    margin: 0;
    color: var(--text-color);
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    line-clamp: 4;
    -webkit-box-orient: vertical;
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