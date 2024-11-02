<template>
  <div class="form-input">
    <label class="form-input__label" :for="uniqueId">
      {{ label }}
    </label>

    <div class="form-input__input-wrapper">
      <slot name="icon">
        <img src="@/assets/images/auth/icons/mail.svg" alt="email">
      </slot>

      <input ref="input" class="form-input__input" :class="{ error: error }" :id="uniqueId" :type="type"
        :placeholder="placeholder" :value="modelValue" @input="onInputChange" />

      <img @click="togglePassVisibility" v-if="type == 'password'" class="form-input__icon"
        src="@/assets/images/auth/icons/eye.svg" alt="toggle show password">
    </div>

    <slot name="error"></slot>
  </div>
</template>

<script>
export default {
  name: 'FormInput',
  props: {
    label: {
      type: String,
      Required: true,
      default: 'lorem label'
    },
    placeholder: {
      type: String,
      Required: true,
      default: 'lorem placeholder'
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      Required: true,
      default: 'text',
      validator(value) {
        return ['text', 'email', 'password'].includes(value);
      },
    },
    error: {
      type: Boolean,
      Required: true,
      default: false
    }
  },
  computed: {
    uniqueId() {
      return `input-${Math.random().toString(36).substring(2, 9)}`;
    },
  },
  methods: {
    onInputChange(event) {
      this.$emit("update:modelValue", event.target.value); // Emit the update event for v-model
    },
    togglePassVisibility() {
      if (this.$refs.input.type == 'password') {
        this.$refs.input.type = 'text'
      } else {
        this.$refs.input.type = 'password'
      }
    }
  },
}
</script>


<style scoped lang="scss">
.form-input {
  display: flex;
  flex-direction: column;
  gap: 8px;

  &__label {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: var(--dark-gray);
  }

  &__input-wrapper {
    inline-size: 100%;
    block-size: 48px;
    position: relative;
  }

  &__input {
    inline-size: 100%;
    block-size: 100%;
    padding: 16px;
    border-radius: 8px;
    border: 1px solid var(--light-gray);
    background-color: var(--white-color);
    font-size: 16px;
    font-weight: 400;
    color: var(--dark-slate-gray);
    padding-inline-start: 50px;

    &.error {
      border-color: red;
    }

    &::placeholder {
      color: var(--light-gray);
    }

    &::-ms-input-placeholder {
      color: var(--light-gray);
    }
  }

  &__icon {
    position: absolute;
    inset-inline-end: 16px;
    inset-block-start: 50%;
    transform: translateY(-50%);
    cursor: pointer;
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