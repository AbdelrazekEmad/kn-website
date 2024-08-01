<template>
  <main-banner :type="'single-blog'" :img-url="blog.img" :blog-data="blog" />
  <pre>{{ blog }}</pre>
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

<style lang="scss" scoped></style>
