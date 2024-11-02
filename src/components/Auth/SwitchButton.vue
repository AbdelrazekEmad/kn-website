<template>
  <div class="switch">
    <input :id="uniqueId" @change="handelChange" v-model="checked" class="switch__input" type="checkbox">
    <label :for="uniqueId"></label>
  </div>
</template>

<script>
export default {
  name: 'SwitchButton',
  data() {
    return {
      checked: false
    }
  },
  computed: {
    uniqueId() {
      return `input-${Math.random().toString(36).substring(2, 9)}`;
    },
  },
  methods: {
    handelChange() {
      this.$emit('submitValue', this.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.switch {
  inline-size: 52px;
  block-size: 32px;
  border-radius: 50%;

  &__input {
    visibility: hidden;
    position: absolute;
  }

  &__input+label {
    display: block;
    position: relative;
    cursor: pointer;
    padding: 2px;
    inline-size: 52px;
    block-size: 32px;
    background-color: #dddddd;
    border-radius: 60px;
    transition: all 0.4s;
  }

  &__input+label:before {
    inset: 2px;
    background-color: var(--white-color);
    border-radius: 60px;
    transition: all 0.4s;
    content: "";
    position: absolute;
  }

  &__input+label:after {
    inset-inline-start: 4px;
    inset-block-start: 50%;
    transform: translateY(-50%);
    inline-size: 24px;
    aspect-ratio: 1/1;
    background-color: #dddddd;
    border-radius: 50%;
    transition: all 0.4s;
    content: "";
    position: absolute;
  }

  &__input:checked+label {
    background-color: var(--secondary-color);
  }

  &__input:checked+label:after {
    inset-inline-start: unset;
    inset-inline-end: 4px;
    background-color: var(--secondary-color);
  }
}
</style>
