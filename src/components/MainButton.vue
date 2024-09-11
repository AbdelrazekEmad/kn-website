<template>
  <a @click="handelNavigation" :href="href" class="main-button">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "MainButton",
  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: [String, Object],
      default: "",
    },
    href: {
      type: String,
      default: "javascript:void(0)",
    },
  },
  methods: {
    handelNavigation() {
      if (this.link != "") {
        this.$router.push(this.link);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-button {
  display: block;
  width: fit-content;
  background-color: var(--secondary-color);
  padding: 12px 24px;
  border-radius: 12px;
  color: var(--white-color);
  border: 0;
  outline: 0;
  line-height: 1;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s linear;

  &:hover {
    color: var(--text-color);
    background-color: var(--dark-main-color);
  }
}
</style>
