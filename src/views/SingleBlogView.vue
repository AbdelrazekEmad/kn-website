<template>
  <main-banner :type="'single-blog'" :img-url="blog.img" :blog-data="blog" />
  <div class="single-blog">
    <img class="single-blog__img" :src="blog.img" alt="" />
    <div class="container">
      <div class="single-blog__content" v-html="blog.description"></div>
    </div>
  </div>
</template>

<script>
import MainBanner from "@/components/MainBanner.vue";

export default {
  name: "SingleBlogView",
  components: {
    MainBanner,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem",
          description:
            "<p>Accusamus voluptatem deserunt eligendi architecto explicabo eum. Aut et magnam esse quidem et sed ad. Blanditiis et debitis impedit eveniet vitae aut. Tempora natus necessitatibus dolor ratione.</p><p>At molestiae eum ex vel quia. Pariatur sunt explicabo labore quisquam. Dolor hic non est hic.</p><p>Neque et id vitae assumenda ut. Tempore nostrum voluptatibus delectus. Qui accusamus reprehenderit sed accusantium velit ratione quis. Id voluptatem autem autem laborum et delectus.Quia quam aliquid necessitatibus et quas eveniet ut. Ut corrupti sed voluptate illum. Delectus distinctio provident architecto dolorum et vero soluta. Rerum rerum mollitia et. Expedita esse nesciunt et dignissimos natus qui aut. Nihil omnis possimus mollitia vitae voluptas. Nostrum distinctio omnis consequatur alias. Itaque enim ex voluptatum consequatur nesciunt ad.</p><p>Veniam totam blanditiis excepturi nihil laboriosam. Qui rem optio ut quaerat et et est. Quae voluptas similique nulla similique praesentium. Illum alias laborum sit adipisci officia. Aliquam voluptatem quam quia soluta atque ipsa at. Cumque et corrupti minima corporis illo.</p>",
          date: "October 6, 2023",
          time: "12:36 am",
          loves: "200",
        },
        {
          id: 2,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
          loves: "200",
        },
        {
          id: 3,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
          loves: "200",
        },
        {
          id: 4,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
          loves: "200",
        },
        {
          id: 5,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
          loves: "200",
        },
        {
          id: 6,
          img: "https://placehold.co/900x600",
          name: "lorem lorem lorem lorem lorem",
          description: "lorem lorem lorem lorem lorem lorem lorem",
          date: "October 6, 2023",
          time: "12:36 am",
          loves: "200",
        },
      ],
    };
  },
  mounted() {
    console.log("this.$route.params.id", this.$route.params.id);
  },
  computed: {
    blog() {
      return this.blogs.find((blog) => blog.id == this.$route.params.id);
    },
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