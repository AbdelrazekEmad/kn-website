<template>
  <div class="form-header">
    <h1 class="form-header__title">
      {{ title }}

      <span class="form-header__word" v-if="titleWord">
        {{ titleWord }}
      </span>
    </h1>

    <p class="form-header__sub-title">
      {{ subTitle }}
    </p>
  </div>
</template>

<script>
export default {
  name: "FormHeader",
  props: {
    title: {
      type: String,
      Required: true,
      default: "lorem title",
    },
    titleWord: {
      type: String,
      Required: false,
    },
    subTitle: {
      type: String,
      Required: true,
      default: "lorem subtitle",
    },
  },
};
</script>

<style scoped lang="scss">
.form-header {
  display: flex;
  flex-direction: column;
  gap: 4px;

  &__title {
    font-size: 32px;
    font-weight: 700;
    letter-spacing: -0.02em;
    text-transform: capitalize;
    color: var(--dark-gray);
    margin: 0;
    line-height: 40px;
  }

  &__word {
    color: var(--main-color);
  }

  &__sub-title {
    font-size: 16px;
    font-weight: 400;
    color: var(--medium-gray);
    margin: 0;
    line-height: 24px;
    text-transform: capitalize;
  }
}
</style>
