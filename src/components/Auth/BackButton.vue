<template>
  <button @click="handelEvent" type="submit" class="back-button">
    <i class="fa-solid fa-arrow-left-long"></i>

    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    text: {
      type: String,
      Required: true,
      default: 'Click'
    }
  },
  methods: {
    handelEvent() {
      this.$router.back()
    }
  }
}
</script>


<style scoped lang="scss">
.back-button {
  inline-size: fit-content;
  block-size: 40px;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid #20232A;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &:hover {
    background-color: var(--main-color);
    border-color: var(--main-color);
    color: var(--white-color);
  }
}
</style>