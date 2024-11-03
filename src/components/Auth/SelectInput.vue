<template>
  <div class="custom-select">
    <h3 class="custom-select__label">
      {{ label }}
    </h3>

    <div class="custom-select__wrapper" :class="{ error: error }" @click="toggleDropdown">
      <slot name="icon">
        <img src="@/assets/images/auth/icons/gender.svg" alt="email">
      </slot>

      <div class="custom-select__selected-option">
        {{ selectedLabel }}
      </div>

      <div v-if="isDropdownOpen" class="custom-select__options">
        <div v-for="option in options" :key="option.value" class="custom-select__option" @click="selectOption(option)">
          <span>{{ option.label }}</span>
        </div>
      </div>
    </div>

    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: "SelectInput",
  props: {
    options: {
      type: Array,
      required: true,
      default: () => []
    },
    label: {
      type: String,
      Required: true,
      default: 'lorem label'
    },
    error: {
      type: Boolean,
      Required: true,
      default: false
    }
  },
  data() {
    return {
      isDropdownOpen: false,
      selected: null
    };
  },
  computed: {
    selectedLabel() {
      return this.selected ? this.selected.label : "Select an option";
    },
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    selectOption(option) {
      this.selected = option;
      this.isDropdownOpen = false;
      this.$emit("update:modelValue", this.selected);
      this.toggleDropdown()
    }
  },
};
</script>

<style lang="scss" scoped>
.custom-select {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__label {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: var(--dark-gray);
    margin: 0;
  }

  &__wrapper {
    position: relative;
    cursor: pointer;
    display: flex;
    align-items: center;
    inline-size: 100%;
    block-size: 48px;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--light-gray);
    background-color: var(--white-color);
    padding-inline-start: 50px;

    &.error {
      border-color: red;
    }
  }

  &__selected-option {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 400;
    color: var(--dark-slate-gray);
  }

  &__options {
    margin-block-start: 8px;
    position: absolute;
    inset-block-start: 100%;
    inset-inline-start: 0;
    inset-inline-end: 0;
    border: 1px solid var(--light-gray);
    border-radius: 8px;
    background-color: var(--white-color);
    z-index: 1;
    max-block-size: 200px;
    overflow-y: auto;
  }

  &__option {
    display: flex;
    align-items: center;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #f0f0f0;
    }
  }
}

:slotted(img) {
  position: absolute;
  inset-inline-start: 16px;
  inset-block-start: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

:slotted(.error-wrapper) {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

:slotted(.error-wrapper__error) {
  font-size: 16px;
  font-weight: 400;
  color: red;
}
</style>
