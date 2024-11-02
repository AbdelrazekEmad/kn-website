<template>
  <button @click="handleEvent" type="button" class="form-button" :class="{ active: !isDisabled }"
    :disabled="isDisabled">
    <template v-if="isDisabled">
      {{ buttonText }}
    </template>
    <template v-else>
      {{ $t('LOGIN.RESEND') }}
    </template>
  </button>
</template>

<script>
export default {
  name: 'ResendButton',
  data() {
    return {
      isDisabled: false,
      countdown: 120, // 2 minutes in seconds
      timer: null,
    };
  },
  computed: {
    buttonText() {
      const minutes = Math.floor(this.countdown / 60);
      const seconds = this.countdown % 60;
      return `${this.$t('LOGIN.RESEND_AFTER')} in ${minutes} min ${seconds} sec`;
    },
  },
  methods: {
    handleEvent() {
      this.$emit('handleResend');
      this.startCooldown();
    },
    startCooldown() {
      this.isDisabled = true;
      this.timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(this.timer);
          this.isDisabled = false;
          this.countdown = 120; // Reset countdown
        }
      }, 1000);
    },
    startCounter() {
      this.isDisabled = true; // Start in disabled state
      this.timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(this.timer);
          this.isDisabled = false;
          this.countdown = 120; // Reset countdown
        }
      }, 1000);
    },
  },
  mounted() {
    this.startCounter(); // Start the countdown when the component is mounted
  },
  beforeDestroy() {
    clearInterval(this.timer); // Clear timer when component is destroyed
  }
}
</script>

<style scoped lang="scss">
.form-button {
  inline-size: 100%;
  block-size: 48px;
  padding: 16px 32px;
  border-radius: 8px;
  background-color: var(--white-color);
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: -0.02em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  border: 1px solid var(--light-gray);
  transition: all 0.2s linear;
  color: var(--light-gray);

  &.active {
    color: #2C780C;
    border-color: #2C780C;
  }

  &:disabled {
    color: #999; // Change color to indicate it's disabled
    cursor: not-allowed;
  }
}
</style>
