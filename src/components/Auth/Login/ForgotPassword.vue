<template>
  <FormHeader :title="$t('LOGIN.FORGOT_TITLE')" :subTitle="$t('LOGIN.FORGOT_SUBTITLE')" />

  <div class="inputs-wrapper">
    <FormInput :placeholder="$t('LOGIN.EMAIL_PLACEHOLDER')" type="email" :label="$t('LOGIN.EMAIL')"
      :error="v$.email.$error" v-model="v$.email.$model">
      <template v-slot:icon>
        <img src="@/assets/images/auth/icons/mail.svg" alt="email">
      </template>

      <template v-slot:error>
        <div class="error-wrapper" v-if="v$.email.$error">
          <p class="error-wrapper__error" v-for="(error, index) in v$.email.$errors" :key="index">
            {{ error.$message }}
          </p>
        </div>
      </template>
    </FormInput>
  </div>

  <FormButton @handelFormSubmit="onSubmit" :text="$t('LOGIN.CONTINUE')" />

  <BackButton :text="$t('LOGIN.BACK_TO_SIGN')" />
</template>

<script>
import FormButton from '@/components/Auth/FormButton.vue';
import FormHeader from '@/components/Auth/FormHeader.vue';
import FormInput from '@/components/Auth/FormInput.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Tr from "@/i18n/translation";
import BackButton from '../BackButton.vue';

export default {
  name: 'ForgotPassword',
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    FormButton,
    FormHeader,
    FormInput,
    BackButton
  },
  data() {
    return {
      email: '',
      Tr: Tr,
    }
  },
  validations() {
    return {
      email: { required, email },
    }
  },
  methods: {
    onSubmit() {
      this.v$.$touch()

      if (!this.v$.$invalid) {
        this.$router.push({ name: 'VerifyOtp' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.inputs-wrapper {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
</style>