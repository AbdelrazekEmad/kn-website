<template>
  <main-banner :type="'breadcrumb'" :banner-title="$t('CONTACT.MAIN_BANNER')" :current-page="$t('GLOBAL.NAVS.CONTACT')" :img-url="'https://placehold.co/900x600'" />
  <section class="contact-us py-5">
    <div class="container">
      <div class="row align-items-center g-5">
        <div class="col">
          <div class="send-email">
            <div class="send-email__icon">
              <i class="fa-solid fa-envelope"></i>
            </div>
            <h4 class="title">{{ $t("CONTACT.SEND_EMAIL") }}</h4>
            <p class="send-email__paragraph">Sed in libero ut nibh placerat accumsan</p>
            <button class="send-email__btn">
              <a :href="'mailto:' + mainEmail">{{ mainEmail }}</a>
            </button>
          </div>
          <h4 class="title">{{ $t("CONTACT.OUR_SOCIAL") }}</h4>
          <div class="social-media">
            <a :href="mainFacebook" class="social-media__item" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a :href="mainTwitter" class="social-media__item" target="_blank">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a :href="mainYoutube" class="social-media__item" target="_blank">
              <i class="fa-brands fa-youtube"></i>
            </a>
            <a :href="mainInstagram" class="social-media__item" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a :href="mainGooglePlay" class="social-media__item" target="_blank">
              <i class="fa-brands fa-google-play"></i>
            </a>
          </div>
        </div>
        <div class="col">
          <div class="form">
            <h4 class="title">{{ $t("CONTACT.ASK_QUESTION") }}</h4>
            <div class="form-group">
              <label for="name">{{ $t("CONTACT.FORM.NAME.LABEL") }}</label>
              <input type="text" id="name" :placeholder="$t('CONTACT.FORM.NAME.PLACEHOLDER')" />
            </div>
            <div class="form-group">
              <label for="email">{{ $t("CONTACT.FORM.EMAIL.LABEL") }}</label>
              <input type="email" id="email" :placeholder="$t('CONTACT.FORM.EMAIL.PLACEHOLDER')" />
            </div>
            <div class="form-group">
              <label for="message">{{ $t("CONTACT.FORM.MESSAGE.LABEL") }}</label>
              <textarea rows="4" id="message" :placeholder="$t('CONTACT.FORM.MESSAGE.PLACEHOLDER')"></textarea>
            </div>

            <button class="send-email__btn w-100">
              <a href="mailto:info@website.com"> {{ $t("CONTACT.FORM.SEND") }} </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainBanner from "@/components/MainBanner.vue";

export default {
  name: "ContactUsView",
  components: {
    MainBanner,
  },
  data() {
    return {
      mainEmail: import.meta.env.VITE_SOCIAL_MAIN_EMAIL,
      mainFacebook: import.meta.env.VITE_SOCIAL_FACEBOOK,
      mainTwitter: import.meta.env.VITE_SOCIAL_X,
      mainYoutube: import.meta.env.VITE_SOCIAL_YOUTUBE,
      mainInstagram: import.meta.env.VITE_SOCIAL_INSTAGRAM,
      mainGooglePlay: import.meta.env.VITE_SOCIAL_PLAY,
    };
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
    border-start-end-radius: 0px;
    border-end-end-radius: 0px;
    border: 0;
    outline: 0;
    line-height: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s linear;

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
  //   &__header {
  //     font-size: 25px;
  //     text-transform: uppercase;
  //     text-align: center;
  //     font-family: var(--secondary-font);
  //     margin-bottom: 20px;
  //   }

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
</style>
