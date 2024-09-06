<template>
  <div class="upper-nav">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div
            class="info d-flex gap-3 justify-content-center justify-content-md-start"
          >
            <a :href="`tel:${whatsapp1}`">
              <i class="fa-brands fa-whatsapp"></i> {{ whatsapp1 }}</a
            >
            <a :href="`tel:${whatsapp2}`">
              <i class="fa-brands fa-whatsapp"></i> {{ whatsapp2 }}</a
            >
            <a :href="email">
              <i class="fa-regular fa-envelope"></i> {{ email }}</a
            >
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="contacts-icon d-flex justify-content-center justify-content-md-end gap-2"
          >
            <a :href="facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a :href="instagram"><i class="fa-brands fa-instagram"></i></a>
            <a :href="telegram"><i class="fa-brands fa-telegram"></i></a>
            <a :href="googlePlay"><i class="fa-brands fa-google-play"></i></a>
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
      email: import.meta.env.VITE_SOCIAL_MAIN_EMAIL,
      facebook: import.meta.env.VITE_SOCIAL_FACEBOOK,
      instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM,
      telegram: import.meta.env.VITE_SOCIAL_YOUTUBE,
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
