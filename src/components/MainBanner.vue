<template>
  <div class="main-banner" :style="`background-image: url(${imgUrl})`">
    <div class="main-banner__content">
      <template v-if="type === 'breadcrumb'">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <RouterLink :to="Tr.i18nRoute({ name: 'home-page' })">
                <i class="fa-solid fa-house"></i>
                {{ $t("GLOBAL.NAVS.HOME") }}
              </RouterLink>
            </li>
            <li class="breadcrumb-item active" aria-current="page">{{ currentPage }}</li>
          </ol>
        </nav>
        <h1 class="main-banner__header">{{ bannerTitle }}</h1>
      </template>
      <template v-if="type === 'single-blog'">Single Blog</template>
    </div>
  </div>
</template>

<script>
import Tr from "@/i18n/translation";

export default {
  props: {
    imgUrl: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "breadcrumb", // breadcrumb / single-blog
    },
    currentPage: {
      type: String,
      default: "",
    },
    bannerTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      Tr: Tr,
    };
  },
};
</script>

<style lang="scss" scoped>
.main-banner {
  height: 450px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 8px;
    background-color: #000000bf;
  }

  &__header {
    color: var(--main-color);
    font-family: var(--secondary-font);
    text-transform: capitalize;
    font-weight: 400;
    font-size: 50px;
  }

  .breadcrumb {
    &-item {
      .router-link-active,
      &.active {
        text-decoration: none;
        color: #fff;

        i {
          color: var(--main-color);
        }
      }
    }

    .breadcrumb-item + .breadcrumb-item::before {
      content: "\f101";
      font-family: "Font Awesome 6 Free";
      font-weight: 900;
      color: var(--main-color);
    }
  }
}
</style>
