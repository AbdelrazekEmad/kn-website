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
            <li class="breadcrumb-item active" aria-current="page">
              {{ currentPage }}
            </li>
          </ol>
        </nav>
        <h1 class="main-banner__header">{{ bannerTitle }}</h1>
      </template>
      <template v-if="type === 'single-blog'">
        <h1 class="main-banner__header">{{ blogData.title }}</h1>
        <div class="blog-data">
          <div class="blog-data__item">
            <i class="fa-regular fa-circle-user"></i>
            {{ blogData.author_name }}
          </div>
          <div class="blog-data__item">
            <i class="fa-solid fa-calendar"></i>
            {{ blogData.date || "test" }}
          </div>
          <div class="blog-data__item">
            <i class="fa-regular fa-clock"></i>
            {{ blogData.time || "test" }}
          </div>
          <div class="blog-data__item">
            <i class="fa-solid fa-heart"></i>
            {{ blogData.loves }} {{ $t("BLOG.LOVE") }}
          </div>
        </div>
      </template>
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
    blogData: {
      type: Object,
      default: {},
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
  min-height: 450px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &__content {
    width: 100%;
    min-height: 450px;
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
    text-align: center;
  }

  .breadcrumb {
    &-item {
      a,
      &.active {
        text-decoration: none;
        color: var(--white-color);

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

  .blog-data {
    display: flex;
    align-items: center;
    gap: 8px;

    &__item {
      color: var(--white-color);

      i {
        color: var(--main-color);
      }
    }
  }
}

html[dir="rtl"] {
  .main-banner {
    .breadcrumb {
      .breadcrumb-item + .breadcrumb-item::before {
        transform: rotate(180deg);
        padding-left: 0;
        padding-right: var(--bs-breadcrumb-item-padding-x);
      }
    }
  }
}
</style>
