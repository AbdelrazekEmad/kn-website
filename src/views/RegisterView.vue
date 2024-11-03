<template>
  <div class="register-layout">
    <AuthLayout>
      <div class="register-layout__content">
        <FormHeader :title="$t('REGISTER.REGISTER_TITLE')" :subTitle="$t('REGISTER.REGISTER_SUBTITLE')" />


        <div class="register-layout__wrapper">
          <h3 class="register-layout__label">
            {{ $t('REGISTER.USER_TYPE') }}
          </h3>

          <div class="register-layout__boxes">
            <div v-for="(option, index) in types" :key="index" class="register-layout__box">
              <RadioButton :option="option" @onSelect="changeType" />
            </div>
          </div>
        </div>

        <div class="register-layout__boxes">
          <div class="register-layout__box">
            <FormInput :placeholder="$t('REGISTER.FIRST_NAME_PLACEHOLDER')" type="text"
              :label="$t('REGISTER.FIRST_NAME')" :error="v$.firstName.$error" v-model="v$.firstName.$model">
              <template v-slot:icon>
                <img src="@/assets/images/auth/icons/user-square.svg" alt="user first name">
              </template>

              <template v-slot:error>
                <div class="error-wrapper" v-if="v$.firstName.$error">
                  <p class="error-wrapper__error" v-for="(error, index) in v$.firstName.$errors" :key="index">
                    {{ error.$message }}
                  </p>
                </div>
              </template>
            </FormInput>
          </div>

          <div class="register-layout__box">
            <FormInput :placeholder="$t('REGISTER.LAST_NAME_PLACEHOLDER')" type="text" :label="$t('REGISTER.LAST_NAME')"
              :error="v$.lastName.$error" v-model="v$.lastName.$model">
              <template v-slot:icon>
                <img src="@/assets/images/auth/icons/user-square.svg" alt="user last name">
              </template>

              <template v-slot:error>
                <div class="error-wrapper" v-if="v$.lastName.$error">
                  <p class="error-wrapper__error" v-for="(error, index) in v$.lastName.$errors" :key="index">
                    {{ error.$message }}
                  </p>
                </div>
              </template>
            </FormInput>
          </div>
        </div>

        <div class="register-layout__boxes">
          <div class="register-layout__box">
            <SelectInput :error="v$.gender.$error" :options="genders" :label="$t('REGISTER.GENDER')"
              @update:modelValue="onSelectGender">
              <template v-slot:icon>
                <img src="@/assets/images/auth/icons/gender.svg" alt="gender">
              </template>

              <template v-slot:error>
                <div class="error-wrapper" v-if="v$.gender.$error">
                  <p class="error-wrapper__error" v-for="(error, index) in v$.gender.$errors" :key="index">
                    {{ error.$message }}
                  </p>
                </div>
              </template>
            </SelectInput>
          </div>

          <div class="register-layout__box" v-if="studentType">
            <DatePicker :label="$t('REGISTER.BIRTHDAY')" @selectedDate="onSelectDate" />
          </div>
        </div>

        <div class="register-layout__boxes">
          <div class="register-layout__box" v-if="studentType">
            <SelectInput :error="v$.nationality.$error" :options="country" :label="$t('REGISTER.NATIONALITY')"
              @update:modelValue="onSelectGender">
              <template v-slot:icon>
                <img src="@/assets/images/auth/icons/global.svg" alt="global">
              </template>

              <template v-slot:error>
                <div class="error-wrapper" v-if="v$.nationality.$error">
                  <p class="error-wrapper__error" v-for="(error, index) in v$.nationality.$errors" :key="index">
                    {{ error.$message }}
                  </p>
                </div>
              </template>
            </SelectInput>
          </div>

          <div class="register-layout__box">
            <FormInput :placeholder="$t('REGISTER.PHONE_NUMBER')" type="text" :label="$t('REGISTER.PHONE_NUMBER')"
              :error="v$.tel.$error" v-model="v$.tel.$model">
              <template v-slot:icon>
                <img src="@/assets/images/auth/icons/global.svg" alt="global">
              </template>

              <template v-slot:error>
                <div class="error-wrapper" v-if="v$.tel.$error">
                  <p class="error-wrapper__error" v-for="(error, index) in v$.tel.$errors" :key="index">
                    {{ error.$message }}
                  </p>
                </div>
              </template>
            </FormInput>
          </div>
        </div>

        <FormInput :placeholder="$t('REGISTER.EMAIL_PLACEHOLDER')" type="email" :label="$t('REGISTER.EMAIL')"
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

        <FormInput :placeholder="$t('REGISTER.PASSWORD_PLACEHOLDER')" type="password" :label="$t('REGISTER.PASSWORD')"
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

        <CustomUploadInput @onSwitchInput="toggleRequired" :error="v$.pdf.$error"
          :title="$t('REGISTER.NEW_MUSLIM_MESSAGE')" :subtitle="$t('REGISTER.NEW_MUSLIM')"
          :placeholder="$t('REGISTER.CERTIFICATE')">
          <template v-slot:error>
            <div class="error-wrapper" v-if="v$.pdf.$error">
              <p class="error-wrapper__error" v-for="(error, index) in v$.pdf.$errors" :key="index">
                {{ error.$message }}
              </p>
            </div>
          </template>
        </CustomUploadInput>

        <FormButton @handelFormSubmit="onSubmit" :text="$t('REGISTER.CREATE_ACCOUNT')" />

        <label class="register-layout__check" for="terms">
          <input type="checkbox" id="terms" name="terms">
          {{ $t('REGISTER.TERMS_CONDITIONS') }}
        </label>

        <router-link class="register-layout__link" :to="{ name: 'loginForm', params: { locale: Tr.currentLocale } }">
          {{ $t('REGISTER.HAVE_ACCOUNT') }}
          <span>
            {{ $t('REGISTER.LOG_IN') }}
          </span>
        </router-link>
      </div>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from '@/components/Auth/AuthLayout.vue';
import FormHeader from '@/components/Auth/FormHeader.vue';
import FormInput from '@/components/Auth/FormInput.vue';
import FormButton from '@/components/Auth/FormButton.vue';
import RadioButton from '@/components/Auth/RadioButton.vue';
import DatePicker from '@/components/Auth/DatePicker.vue';
import SelectInput from '@/components/Auth/SelectInput.vue';
import CustomUploadInput from '@/components/Auth/CustomUploadInput.vue';
import Tr from "@/i18n/translation";
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, maxLength, numeric, requiredIf } from '@vuelidate/validators'

export default {
  name: 'RegisterView',
  setup() {
    return { v$: useVuelidate() }
  },
  components: {
    AuthLayout,
    FormHeader,
    FormInput,
    FormButton,
    RadioButton,
    DatePicker,
    SelectInput,
    CustomUploadInput
  },
  data() {
    return {
      Tr: Tr,
      firstName: '',
      lastName: '',
      email: '',
      nationality: '',
      password: '',
      pdf: '',
      pdfRequiredStatus: false,
      types: [
        {
          id: 1,
          name: 'type',
          value: 'student',
          label: this.$t('REGISTER.STUDENT'),
          checked: true
        },
        {
          id: 2,
          name: 'type',
          value: 'teacher',
          label: this.$t('REGISTER.TEACHER'),
          checked: false
        }
      ],
      genders: [
        { label: 'Male', value: 'Mail', id: 1 },
        { label: 'Female', value: 'Female', id: 2 },
      ],
      gender: '',
      country: [{ label: 'list is empty', value: 'list is empty', id: 1 },],
      tel: ''
    }
  },
  validations() {
    return {
      firstName: { required },
      nationality: { required },
      gender: { required },
      lastName: { required },
      email: { required, email },
      password: { required },
      pdf: { requiredIf: requiredIf(() => this.pdfRequiredStatus) },
      tel: {
        required,
        numeric,
        minLength: minLength(12),
        maxLength: maxLength(12)
      }
    }
  },
  computed: {
    studentType() {
      return this.types.find((type) => type.value == 'student').checked
    }
  },
  methods: {
    onSubmit() {
      this.v$.$touch()

      if (!this.v$.$invalid) {
        this.$router.push({ name: 'home-page' })
      }
    },
    changeType(value) {
      this.types.forEach((type) => {
        type.checked = false
      })

      this.types.find((type) => type.id == value).checked = true
    },
    onSelectDate(value) {
      console.log(value);
    },
    onSelectGender(value) {
      console.log(value);
    },
    toggleRequired(value) {
      this.pdfRequiredStatus = value
    }
  }
}
</script>


<style scoped lang="scss">
.register-layout {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__label {
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    color: var(--dark-gray);
    margin: 0;
  }

  &__boxes {
    display: flex;
    align-items: self-start;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__box {
    inline-size: calc((100% - 24px) / 2);
    flex-grow: 1;

    @media (max-width: 991px) {
      inline-size: 100%;
    }
  }

  &__link {
    color: var(--gray);
    letter-spacing: -0.02em;
    text-align: center;

    span {
      color: var(--dark-gray);
      font-weight: 700;
    }
  }

  &__check {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    color: var(--dark-gray);
    cursor: pointer;

    input {
      block-size: 20px;
      inline-size: 20px;
      border-radius: 8px;
    }
  }
}
</style>