<template>
  <label :for="uniqueId" class="radio-button" :class="{ checked: option.checked }">
    <input :checked="option.checked" class="radio-button__input" :id="uniqueId" type="radio" :name="option.name"
      :value="option.value" @change="submitValue" />
    {{ option.value }}
  </label>
</template>

<script>
export default {
  name: 'RadioButton',
  props: {
    option: {
      type: Object,
      required: true,
    },
  },
  computed: {
    uniqueId() {
      return `input-${Math.random().toString(36).substring(2, 9)}`;
    },
  },
  methods: {
    submitValue() {
      this.$emit('onSelect', this.option.id)
    }
  },
};
</script>

<style scoped lang="scss">
.radio-button {
  inline-size: 100%;
  block-size: 48px;
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--light-gray);
  font-size: 16px;
  font-weight: 400;
  color: var(--dark-slate-gray);
  cursor: pointer;
  background-color: var(--white-color);
  display: flex;
  align-items: center;
  gap: 8px;

  &.checked {
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
    background-color: #F4FFEF;
  }

  &__input {
    block-size: 20px;
    inline-size: 20px;

    &:checked {
      accent-color: var(--secondary-color);
    }
  }
}
</style>
