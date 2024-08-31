<template>
  <div>
    <main-banner :type="'single-blog'" :img-url="getSingleBlog.image" :blog-data="getSingleBlog" />
    <div class="single-blog">
      <img class="single-blog__img" :src="getSingleBlog.image" alt="" />
      <div class="container">
        <div class="single-blog__content" v-html="getSingleBlog.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import MainBanner from "@/components/MainBanner.vue";
import { useBlogsStore } from "@/stores/blogs.store";
import { mapState, mapActions } from "pinia";

export default {
  name: "SingleBlogView",
  components: {
    MainBanner,
  },
  async mounted() {
    await this.getSingleBlogContent(this.$route.params.id);
    console.log(this.getSingleBlog);
  },
  computed: {
    ...mapState(useBlogsStore, ["getSingleBlog"]),
    // blog() {
    //   return this.blogs.find((blog) => blog.id == this.$route.params.id);
    // },
  },
  methods: {
    ...mapActions(useBlogsStore, ["getSingleBlogContent"]),
  },
};
</script>

<style lang="scss" scoped>
.single-blog {
  &__img {
    display: block;
    width: 900px;
    height: 600px;
    object-fit: cover;
    margin-inline: auto;
    margin-top: -100px;
  }

  &__content {
    margin-block: 16px;
  }
}
</style>
