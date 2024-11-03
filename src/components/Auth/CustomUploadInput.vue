<template>
  <div class="upload-input">
    <h3 class="upload-input__title">
      {{ title }}
    </h3>

    <div class="upload-input__content" :class="{ error: error }">
      <div class="upload-input__switcher">
        <SwitchButton @submitValue="onSwitch" />

        <span class="upload-input__subtitle">
          {{ subtitle }}
        </span>
      </div>

      <div class="upload-input__wrapper">
        <div class="upload-input__file">
          <slot name="icon">
            <img src="@/assets/images/auth/icons/pdf.svg" alt="pdf">
          </slot>

          {{ getPlaceholder }}
        </div>

        <input class="upload-input__input" type="file" ref="actualBtn" @change="handleFileChange"
          :disabled="!toggleSwitch" :accept="acceptedType" hidden />
        <label class="upload-input__label" for="actual-btn" @click="triggerFileUpload"
          :class="{ disabled: !toggleSwitch }">

          {{ $t('REGISTER.UPLOAD') }}
        </label>
      </div>
    </div>

    <slot name="error"></slot>
  </div>
</template>

<script>
import SwitchButton from '@/components/Auth/SwitchButton.vue';
import Tr from "@/i18n/translation";

export default {
  props: {
    acceptedType: {
      type: String,
      Required: false,
      default: 'application/pdf'
    },
    title: {
      type: String,
      Required: false,
      default: 'Are you a new Muslim ?'
    },
    subtitle: {
      type: String,
      Required: false,
      default: 'new Muslim'
    },
    placeholder: {
      type: String,
      Required: false,
      default: 'Upload your certificate'
    },
    error: {
      type: Boolean,
      Required: true,
      default: false
    }
  },
  components: {
    SwitchButton
  },
  data() {
    return {
      fileName: null,
      toggleSwitch: false,
      Tr: Tr,
    };
  },
  computed: {
    getPlaceholder() {
      return this.fileName || this.placeholder
    }
  },
  methods: {
    triggerFileUpload() {
      this.$refs.actualBtn.click();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.fileName = file.name;
        // Emit the file-selected event with the file as payload
        this.$emit('file-selected', file);
      } else {
        this.fileName = 'No file chosen';
      }
    },
    onSwitch(value) {
      this.toggleSwitch = value
      this.$emit('onSwitchInput', this.toggleSwitch)
    }
  },
};
</script>

<style lang="scss" scoped>
.upload-input {
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__title {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: var(--dark-gray);
    margin: 0;
  }

  &__content {
    inline-size: 100%;
    min-block-size: 88px;
    padding: 16px;
    border-radius: 8px;
    background-color: #F5F5F5;
    display: flex;
    align-items: center;
    gap: 16px;

    &.error {
      border: 1px solid red;
    }
  }

  &__switcher {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__subtitle {
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: var(--dark-gray);
  }

  &__wrapper {
    flex-grow: 1;
    min-block-size: 56px;
    padding: 8px 12px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white-color);
  }

  &__file {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: var(--dark-gray);
    display: flex;
    align-items: center;
    gap: 8px;
  }

  &__label {
    inline-size: fit-content;
    min-block-size: 40px;
    padding: 8px 16px;
    border-radius: 8px;
    background-color: var(--dark-slate-gray);
    font-family: Switzer;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: var(--white-color);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-align: center;

    &.disabled {
      cursor: not-allowed;
    }
  }
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
