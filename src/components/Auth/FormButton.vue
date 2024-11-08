<template>
  <button @click="handelEvent" type="submit" class="form-button" :disabled="disabled" :class="{ disabled: disabled }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'FormButton',
  props: {
    text: {
      type: String,
      Required: true,
      default: 'Click'
    },
    disabled: {
      type: Boolean,
      Required: false,
      default: false
    }
  },
  methods: {
    handelEvent() {
      this.$emit('handelFormSubmit')
    }
  }
}
</script>


<style scoped lang="scss">
.form-button {
  inline-size: 100%;
  padding: 16px 32px;
  border-radius: 8px;
  background-color: var(--medium-gray-700);
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border: 0;
  transition: all 0.2s linear;
  color: var(--white-color);

  &:hover {
    background-color: var(--main-color);
  }

  &.disabled {
    cursor: not-allowed;
    background-color: var(--medium-gray-700);
  }
}
</style>