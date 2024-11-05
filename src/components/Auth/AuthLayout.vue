<template>
  <div class="auth-layout">
    <div class="auth-layout__banner">
      <img
        class="auth-layout__logo"
        src="@/assets/images/auth/logo.svg"
        alt="kn logo"
        title="kn logo"
      />
    </div>

    <div class="auth-layout__form">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
};
</script>

<style scoped lang="scss">
.auth-layout {
  block-size: 100vh;
  padding: 40px 64px;
  padding-inline-end: 0;
  display: flex;
  gap: 64px;

  &__banner,
  &__form {
    inline-size: calc((100% - 64px) / 2);
  }

  &__banner {
    inline-size: 45%;
    background-image: url("@/assets/images/auth/bg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 24px;
    position: relative;

    @media (max-width: 991px) {
      display: none;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      background-color: var(--dark-blue-gray);
      z-index: 1;
      opacity: 0.24%;
    }
  }

  &__logo {
    inline-size: 37%;
    aspect-ratio: 1/1;
    border-radius: 50%;
  }

  &__form {
    inline-size: 55%;
    height: 100%;
    overflow-y: auto;
    padding-inline-end: 64px;

    @media (max-width: 991px) {
      inline-size: 100%;
    }
  }
}
</style>
