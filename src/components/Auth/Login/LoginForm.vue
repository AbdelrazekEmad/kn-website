<template>
  <FormHeader :title="$t('LOGIN.LOGIN_TITLE')" :subTitle="$t('LOGIN.LOGIN_SUBTITLE')" />

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

    <router-link class="forgot-link" :to="{ name: 'ForgotPassword' }">
      {{ $t('LOGIN.FORGOT_PASSWORD') }}
    </router-link>
  </div>

  <FormButton @handelFormSubmit="onSubmit" :text="$t('LOGIN.LOGIN')" />

  <router-link class="register-link" :to="{ name: 'Register', params: { locale: Tr.currentLocale } }">
    {{ $t('LOGIN.ACCOUNT') }}
    <span>
      {{ $t('LOGIN.CREATE_ACCOUNT') }}
    </span>
  </router-link>
</template>

<script>
import FormButton from '@/components/Auth/FormButton.vue';
import FormHeader from '@/components/Auth/FormHeader.vue';
import FormInput from '@/components/Auth/FormInput.vue';
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
import Tr from "@/i18n/translation";

export default {
  name: 'LoginForm',
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
      email: '',
      password: '',
      Tr: Tr,
    }
  },
  validations() {
    return {
      email: { required, email },
      password: { required },
    }
  },
  methods: {
    onSubmit() {
      this.v$.$touch()

      if (!this.v$.$invalid) {
        this.$router.push({ name: 'home-page' })
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

.forgot-link,
.register-link {
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
}

.forgot-link {
  color: var(--dark-gray);
  text-align: end;
}

.register-link {
  color: var(--gray);
  letter-spacing: -0.02em;
  text-align: center;

  span {
    color: var(--dark-gray);
    font-weight: 700;
  }
}
</style>