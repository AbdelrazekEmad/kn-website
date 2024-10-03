<template>
  <div class="dropdown">
    <a
      class="nav-link dropdown-toggle"
      href="#"
      role="button"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        v-if="locale === 'en'"
        src="@/assets/images/flags/flag-en.png"
        width="20"
      />
      <img
        v-if="locale === 'ar'"
        src="@/assets/images/flags/flag-ar.png"
        width="20"
      />
      {{ $t(`GLOBAL.LOCALE.${Tr.currentLocale}`) }}
    </a>
    <ul class="dropdown-menu">
      <li
        v-for="lang in languages"
        :key="`locale-${lang}`"
        :class="{ selected: locale === lang }"
        @click="switchLanguage(lang)"
      >
        <img
          v-if="lang === 'en'"
          src="@/assets/images/flags/flag-en.png"
          width="20"
        />
        <img
          v-if="lang === 'ar'"
          src="@/assets/images/flags/flag-ar.png"
          width="20"
        />
        {{ $t(`GLOBAL.LOCALE.${lang}`) }}
      </li>
    </ul>
  </div>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  data() {
    return {
      Tr: Tr,
      languages: Tr.supportedLocales,
    };
  },
  computed: {
    locale() {
      return this.$i18n.locale;
    },
  },
  methods: {
    switchLanguage(sLocale) {
      Tr.switchLanguage(sLocale)
        .then(() => {
          this.$router.replace({ params: { locale: sLocale } });
        })
        .catch((error) => {
          console.error("Error switching language:", error);
          this.$router.push("/");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  padding: 0;
  margin: 0;
  overflow: hidden;
  li {
    padding: 8px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover,
    &.selected {
      background-color: var(--bg-color);
      color: var(--white-color);
    }
  }
}
</style>
