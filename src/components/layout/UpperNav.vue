<template>
  <div class="upper-nav">
    <div class="container">
      <div class="row g-2 g-md-4">
        <div class="col-12 col-md-6">
          <div
            class="info d-flex gap-1 justify-content-center justify-content-md-start flex-wrap flex-md-nowrap gap-md-3"
          >
            <div class="d-flex align-items-center">
              <i class="fa-brands fa-whatsapp"></i>
              <a target="_blank" :href="`https://wa.me/${whatsapp1}`">
                {{ whatsapp1 }}</a
              >
              /
              <a target="_blank" :href="`https://wa.me/${whatsapp2}`">
                {{ whatsapp2 }}</a
              >
            </div>
            <a target="_blank" :href="`mailto:${email}`">
              <i class="fa-regular fa-envelope"></i> {{ email }}</a
            >
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="contacts-icon d-flex justify-content-center justify-content-md-end gap-2"
          >
            <a target="_blank" title="En page" :href="facebookEn"
              ><i class="fa-brands fa-facebook-f"></i
            ></a>
            <a target="_blank" title="Ar page" :href="facebookAr">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a target="_blank" title="telegram" :href="telegram">
              <i class="fa-brands fa-telegram"></i>
            </a>
            <a target="_blank" title="google paly" :href="googlePlay">
              <i class="fa-brands fa-google-play"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: import.meta.env.VITE_SOCIAL_EMAIL,
      facebookEn: import.meta.env.VITE_SOCIAL_FACEBOOK_EN,
      facebookAr: import.meta.env.VITE_SOCIAL_FACEBOOK_AR,
      telegram: import.meta.env.VITE_SOCIAL_TELEGRAM,
      messenger: import.meta.env.VITE_SOCIAL_MESSENGER,
      googlePlay: import.meta.env.VITE_SOCIAL_PLAY,
      whatsapp1: import.meta.env.VITE_WHATSAPP_1,
      whatsapp2: import.meta.env.VITE_WHATSAPP_2,
    };
  },
};
</script>
<style lang="scss" scoped>
.upper-nav {
  background-color: var(--dark-main-color);
  color: var(--white-color);
  padding: 12px;

  a {
    color: white;
    font-size: 16px;
    transition: color 0.3s ease-in-out;
    display: block;
    padding: 4px 8px;

    &:hover {
      color: var(--black-color);
    }
  }
}
</style>
