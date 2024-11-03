import i18n from "@/i18n";
import { nextTick } from "vue";

const Trans = {
  get supportedLocales() {
    return import.meta.env.VITE_SUPPORTED_LOCALES.split(",");
  },

  get defaultLocale() {
    return import.meta.env.VITE_DEFAULT_LOCALE;
  },

  get currentLocale() {
    return i18n.global.locale.value;
  },

  set currentLocale(newLocale) {
    i18n.global.locale.value = newLocale;
  },

  isLocaleSupported(locale) {
    return Trans.supportedLocales.includes(locale);
  },

  getUserLocale() {
    const locale =
      window.navigator.language ||
      window.navigator.userLanguage ||
      Trans.defaultLocale;

    return {
      locale: locale,
      localeNoRegion: locale.split("-")[0],
    };
  },

  guessDefaultLocale() {
    const userPersistedLocale = Trans.getPersistedLocale();
    if (userPersistedLocale) {
      return userPersistedLocale;
    }

    const userPreferredLocale = Trans.getUserLocale();

    if (Trans.isLocaleSupported(userPreferredLocale.locale)) {
      return userPreferredLocale.locale;
    }

    if (Trans.isLocaleSupported(userPreferredLocale.localeNoRegion)) {
      return userPreferredLocale.localeNoRegion;
    }

    return Trans.defaultLocale;
  },

  getPersistedLocale() {
    const persistedLocale = localStorage.getItem("user-locale");

    if (Trans.isLocaleSupported(persistedLocale)) {
      return persistedLocale;
    } else {
      return null;
    }
  },

  async switchLanguage(newLocale) {
    await Trans.loadLocaleMessages(newLocale);
    Trans.currentLocale = newLocale;
    document.querySelector("html").setAttribute("lang", newLocale);
    document
      .querySelector("html")
      .setAttribute("dir", newLocale === "ar" ? "rtl" : "ltr");
    newLocale === "ar"
      ? document.querySelector("body").classList.remove("wrapper-ltr")
      : document.querySelector("body").classList.add("wrapper-ltr");
    newLocale === "ar"
      ? (document.querySelector("#bootstrap").href =
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.rtl.min.css")
      : (document.querySelector("#bootstrap").href =
          "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css");
    localStorage.setItem("user-locale", newLocale);
  },

  async loadLocaleMessages(locale) {
    if (!i18n.global.availableLocales.includes(locale)) {
      const messages = await import(`@/i18n/locale/${locale}/index.js`);
      i18n.global.setLocaleMessage(locale, messages.default);
    }

    return nextTick();
  },

  async routeMiddleware(to, _from, next) {
    const paramLocale = to.params.locale;

    if (!Trans.isLocaleSupported(paramLocale)) {
      let guess = Trans.guessDefaultLocale();
      return next({ path: `${guess}/not-found` });
    }

    await Trans.switchLanguage(paramLocale);

    return next();
  },

  i18nRoute(to) {
    return {
      ...to,
      params: {
        locale: Trans.currentLocale,
        ...to.params,
      },
    };
  },
};

export default Trans;
