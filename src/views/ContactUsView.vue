<template>
  <div class="h-100">
    <template v-if="!isFetching && !isLoadingDelay">
      <main-banner :type="'breadcrumb'" :banner-title="contactUsHeader.title" :current-page="$t('GLOBAL.NAVS.CONTACT')" :img-url="contactUsHeader.image" />
      <section class="contact-us py-5">
        <div class="container">
          <div class="row align-items-center g-5">
            <div class="col">
              <div class="send-email">
                <div class="send-email__icon">
                  <i class="fa-solid fa-envelope"></i>
                </div>
                <h4 class="title">{{ $t("CONTACT.SEND_EMAIL") }}</h4>
                <p class="send-email__paragraph">{{ $t("CONTACT.SEND_EMAIL_DESCRIPTION") }}</p>
                <button class="send-email__btn">
                  <a :href="'mailto:' + mainEmail">{{ mainEmail }}</a>
                </button>
              </div>
              <h4 class="title">{{ $t("CONTACT.OUR_SOCIAL") }}</h4>
              <div class="social-media">
                <a v-if="currentLocale == 'en'" :href="mainFacebookEn" class="social-media__item" target="_blank" title="En page">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a v-else :href="mainFacebookAr" class="social-media__item" target="_blank" title="Ar page">
                  <i class="fa-brands fa-facebook"></i>
                </a>
                <a :href="mainTelegram" class="social-media__item" target="_blank">
                  <i class="fa-brands fa-telegram"></i>
                </a>
                <a :href="mainX" class="social-media__item" target="_blank">
                  <i class="fa-brands fa-x-twitter"></i>
                </a>
                <a :href="mainMessenger" class="social-media__item" target="_blank">
                  <i class="fa-brands fa-facebook-messenger"></i>
                </a>
                <a :href="mainLinked" class="social-media__item" target="_blank">
                  <i class="fa-brands fa-linkedin"></i>
                </a>
                <a :href="mainGooglePlay" class="social-media__item" target="_blank">
                  <i class="fa-brands fa-google-play"></i>
                </a>
              </div>
            </div>
            <div class="col">
              <form class="form" @submit.prevent="sendWhatsAppMessage">
                <h4 class="title">{{ formTitle }}</h4>
                <div class="form-group">
                  <label for="name">{{ $t("CONTACT.FORM.NAME.LABEL") }}</label>
                  <input type="text" id="name" v-model="formName" :placeholder="$t('CONTACT.FORM.NAME.PLACEHOLDER')" />
                </div>
                <div class="form-group">
                  <label for="email">{{ $t("CONTACT.FORM.EMAIL.LABEL") }}</label>
                  <input type="email" id="email" v-model="formEmail" :placeholder="$t('CONTACT.FORM.EMAIL.PLACEHOLDER')" />
                </div>
                <div class="form-group">
                  <label for="message">{{ $t("CONTACT.FORM.MESSAGE.LABEL") }}</label>
                  <textarea rows="4" id="message" v-model="formMessage" :placeholder="$t('CONTACT.FORM.MESSAGE.PLACEHOLDER')"></textarea>
                </div>

                <button class="send-email__btn w-100 p-3" type="submit">
                  {{ $t("CONTACT.FORM.SEND") }}
                  <i class="fa-brands fa-whatsapp"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </template>
    <Loader v-else />
  </div>
</template>

<script>
import { useContactUsStore } from "@/stores/contact-us.store";
import { useLoadingStore } from "@/stores/loading.store";
import { mapState, mapActions } from "pinia";
import MainBanner from "@/components/MainBanner.vue";
import Tr from "@/i18n/translation";

export default {
  name: "ContactUsView",
  components: {
    MainBanner,
  },
  data() {
    return {
      mainEmail: import.meta.env.VITE_SOCIAL_EMAIL,
      mainFacebookEn: import.meta.env.VITE_SOCIAL_FACEBOOK_EN,
      mainFacebookAr: import.meta.env.VITE_SOCIAL_FACEBOOK_AR,
      mainTelegram: import.meta.env.VITE_SOCIAL_TELEGRAM,
      mainYoutube: import.meta.env.VITE_SOCIAL_YOUTUBE,
      mainMessenger: import.meta.env.VITE_SOCIAL_MESSENGER,
      mainLinked: import.meta.env.VITE_SOCIAL_LINKED,
      mainX: import.meta.env.VITE_SOCIAL_X,
      mainGooglePlay: import.meta.env.VITE_SOCIAL_PLAY,
      sendFromWhatsapp: import.meta.env.VITE_WHATSAPP_2,
      formName: "",
      formEmail: "",
      formMessage: "",
      Tr: Tr,
    };
  },
  computed: {
    ...mapState(useContactUsStore, ["contactUsHeader", "formTitle", "isFetching"]),
    ...mapState(useLoadingStore, ["isLoadingDelay"]),
    currentLocale() {
      return this.Tr.currentLocale;
    },
  },
  async mounted() {
    await this.getContactUs();
  },
  methods: {
    ...mapActions(useContactUsStore, ["getContactUs"]),

    sendWhatsAppMessage() {
      const text = `Name: ${this.formName}\nEmail: ${this.formEmail}\nMessage: ${this.formMessage}`;

      const whatsappUrl = `https://api.whatsapp.com/send?phone=${this.sendFromWhatsapp}&text=${encodeURIComponent(text)}`;

      window.location.href = whatsappUrl;
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  font-family: var(--secondary-font);
  font-size: 25px;
  text-transform: uppercase;
  text-align: center;
}

.send-email {
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 32px;

  &__icon {
    font-size: 48px;
    color: var(--main-color);
  }

  &__paragraph {
    font-weight: 400;
    margin: 0;
  }

  &__btn {
    width: fit-content;
    background-color: var(--main-color);
    border-radius: 12px;
    border: 0;
    outline: 0;
    line-height: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s linear;
    color: white;

    a {
      display: block;
      width: 100%;
      height: 100%;
      color: var(--white-color);
      padding: 16px 40px;
    }

    &:hover {
      background-color: var(--dark-main-color);

      a {
        color: var(--text-color);
      }
    }
  }
}

.social-media {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;

  &__item {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--secondary-color);
    border-radius: 8px;
    font-size: 20px;
    color: var(--white-color);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: var(--dark-main-color);
    }
  }
}

.form {
  .form-group {
    margin-bottom: 12px;

    label {
      display: block;
      font-weight: 500;
      margin-bottom: 4px;
    }

    input,
    textarea {
      width: 100%;
      border: 1px solid #69727d;
      color: #1f2124;
      border-radius: 3px;
      padding: 0.5rem 1rem;
    }
  }
}

html[dir="rtl"] {
  .form {
    input[type="email"] {
      direction: rtl;
    }
  }
}
</style>
