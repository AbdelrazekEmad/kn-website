<template>
  <h1>blogs</h1>

  <p>
    {{ getBlogs }}
  </p>
</template>

<script>
import { useBlogsStore } from "@/stores/blogs.store";
import { mapState, mapActions } from "pinia";
export default {
  name: "BlogsView",
  data() {
    return {};
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
h1 {
  font-family: var(--main-font);
}
</style>
