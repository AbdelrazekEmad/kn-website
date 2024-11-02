<template>
  <FormHeader :title="$t('LOGIN.VERIFY_TITLE')" :subTitle="$t('LOGIN.VERIFY_SUBTITLE')" />

  <OtpInput @otp-complete="getOtpValue" />

  <div class="buttons-wrapper">
    <FormButton @handelFormSubmit="onSubmit" :text="$t('LOGIN.VERIFY')" :disabled="!otp" />
    <ResendButton @handleResend="resendOtp" />
  </div>

  <BackButton :text="$t('LOGIN.BACK')" />
</template>

<script>
import FormButton from '@/components/Auth/FormButton.vue';
import FormHeader from '@/components/Auth/FormHeader.vue';
import OtpInput from '@/components/Auth/OtpInput.vue';
import BackButton from '@/components/Auth/BackButton.vue';
import ResendButton from '@/components/Auth/ResendButton.vue';
import Tr from "@/i18n/translation";

export default {
  name: 'LoginForm',
  components: {
    FormButton,
    FormHeader,
    OtpInput,
    BackButton,
    ResendButton
  },
  data() {
    return {
      otp: null,
      Tr: Tr,
    }
  },
  methods: {
    getOtpValue(value) {
      this.otp = value
    },
    onSubmit() {
      if (this.otp) {
        this.$router.push({ name: 'ResetPassword' })
      }
    },
    resendOtp() {
      console.log('resend here');
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>