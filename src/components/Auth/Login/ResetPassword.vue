<template>
  <FormHeader :title="$t('LOGIN.RESET_TITLE')" :subTitle="$t('LOGIN.RESET_SUBTITLE')" />

  <div class="inputs-wrapper">
    <FormInput :placeholder="$t('LOGIN.PASSWORD_PLACEHOLDER')" type="password" :label="$t('LOGIN.PASSWORD')"
      :error="v$.password.$error" v-model="v$.password.$model">
      <template v-slot:icon>
        <img src="@/assets/images/auth/icons/square-lock-password.svg" alt="password">
      </template>
      <template v-slot:error>
        <div class="error-wrapper" v-if="v$.password.$error">
          <p class="error-wrapper__error" v-for="(error, index) in v$.password.$errors" :key="index">
            {{ error.$message }}
          </p>
        </div>
      </template>
    </FormInput>

    <FormInput :placeholder="$t('LOGIN.PASSWORD_PLACEHOLDER')" type="password" :label="$t('LOGIN.CONFIRM_LABEL')"
      :error="v$.password.$error" v-model="v$.confirmPassword.$model">
      <template v-slot:icon>
        <img src="@/assets/images/auth/icons/square-lock-password.svg" alt="password">
      </template>
      <template v-slot:error>
        <div class="error-wrapper" v-if="v$.confirmPassword.$error">
          <p class="error-wrapper__error" v-for="(error, index) in v$.confirmPassword.$errors" :key="index">
            {{ error.$message }}
          </p>
        </div>
      </template>
    </FormInput>
  </div>

  <FormButton @handelFormSubmit="onSubmit" :text="$t('LOGIN.CONFIRM_BUTTON')" />
</template>

<script>
import FormButton from '@/components/Auth/FormButton.vue';
import FormHeader from '@/components/Auth/FormHeader.vue';
import FormInput from '@/components/Auth/FormInput.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, sameAs } from '@vuelidate/validators'
import Tr from "@/i18n/translation";

export default {
  name: 'ResetPassword',
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    FormButton,
    FormHeader,
    FormInput
  },
  data() {
    return {
      password: '',
      confirmPassword: '',
      Tr: Tr,
    }
  },
  validations() {
    return {
      password: { required },
      confirmPassword: { required, sameAsPassword: sameAs('password') },
    }
  },
  methods: {
    onSubmit() {
      this.v$.$touch()

      if (!this.v$.$invalid) {
        this.$router.push({ name: 'loginForm' })
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