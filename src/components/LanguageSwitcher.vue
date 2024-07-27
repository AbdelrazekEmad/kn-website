<template>
  <!-- <RouterLink :to="Tr.i18nRoute({ name: 'home-page' })"> home </RouterLink> -->
  <div class="dropdown">
    {{ $t(`GLOBAL.LOCALE.${Tr.currentLocale}`) }}
    <div class="dropdown__list">
      <div class="dropdown__list__item" v-for="sLocale in supportedLocales" :key="`locale-${sLocale}`" :class="{ selected: locale === sLocale }" @click="switchLanguage(sLocale)">
        <img :src="`src/assets/images/flags/flag-${sLocale}.png`" width="20" />
        {{ $t(`GLOBAL.LOCALE.${sLocale}`) }}
      </div>
    </div>
  </div>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  data() {
    return {
      Tr: Tr,
      locale: this.$i18n.locale,
      supportedLocales: Tr.supportedLocales,
    };
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
.dropdown {
  position: relative;
  width: fit-content;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;

  &:hover {
    color: #333;

    .dropdown__list {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
      top: 30px;
    }
  }

  .dropdown__list {
    position: absolute;
    top: 100%;
    background-color: #fff;
    right: 0;
    width: max-content;
    border-radius: 0 0 4px 4px;
    padding: 10px 15px;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    border: 1px solid #ececec;
    transform: translateY(20px);
    visibility: hidden;
    opacity: 0;

    &__item {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 5px;
    }
  }
}
// body.rtl {
//   .topNavbar {
//     &__items {
//       li {
//         &:not(:last-child)::after {
//           right: unset;
//           left: -10px;
//         }

//         &.dropdown {
//           .dropdown__list {
//             right: unset;
//             left: 0;
//           }
//         }
//       }
//     }
//   }
// }
</style>
