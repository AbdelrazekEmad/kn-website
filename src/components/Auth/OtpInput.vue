<template>
  <div class="input-wrapper">
    <input v-for="i in OTP_LENGTH" :key="`input-el-${i}`" placeholder="-" :ref="addInputEls" :id="`input-el-${i}`"
      type="text" pattern="[0-9]*" @input="handleInputElsInput($event, i - 1)"
      @keydown.backspace="handleBackspace(i - 1)" />
  </div>
</template>

<script>
export default {
  name: 'OtpInput',
  data() {
    return {
      OTP_LENGTH: 6,
      otpValue: Array(6).fill(""),
      inputEls: [],
    };
  },
  methods: {
    handleInputElsInput(e, index) {
      const val = e.target.value.replace(/[^0-9]/g, "");
      e.target.value = val; // Set the sanitized value

      // Move focus to the next input or emit the OTP if complete
      if (val.length > 0) {
        this.otpValue[index] = val;
        this.moveFocus(index);
        this.checkOtpComplete();
      } else {
        this.otpValue[index] = "";
      }
    },
    handleBackspace(index) {
      // Move focus back to the previous input if backspace is pressed
      if (index > 0 && this.otpValue[index] === "") {
        this.inputEls[index - 1]?.focus();
      }
    },
    moveFocus(index) {
      const nextInput = this.inputEls[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    },
    checkOtpComplete() {
      const otpComplete = this.otpValue.join("").length === this.OTP_LENGTH;
      if (otpComplete) {
        this.$emit('otp-complete', this.otpValue.join(""));
      }
    },
    addInputEls(el) {
      if (el && !this.inputEls.includes(el)) {
        this.inputEls.push(el);
      }
    },
  },
  mounted() {
    this.inputEls[0]?.focus(); // Focus the first input on mount
  },
};
</script>

<style lang="scss">
.input-wrapper {
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: center;

  input {
    inline-size: calc((100% - 5 * 12px) / 6);
    block-size: 56px;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid var(--light-gray);
    text-align: center;
  }
}
</style>
