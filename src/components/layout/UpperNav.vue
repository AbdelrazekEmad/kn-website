<template>
  <div class="upper-nav">
    <div class="container">
      <div class="row g-4">
        <div class="col-12 col-md-6">
          <div
            class="info d-flex gap-3 justify-content-center justify-content-md-start"
          >
            <a href="#"><i class="fa-brands fa-whatsapp"></i> 123456789</a>
            <a href="mailto:info@kn.com"
              ><i class="fa-regular fa-envelope"></i> info@kn.com</a
            >
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div
            class="contacts-icon d-flex justify-content-center justify-content-md-end gap-2"
          >
            <a href="#facebook"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#instagram"><i class="fa-brands fa-instagram"></i></a>
            <a href="#telegram"><i class="fa-brands fa-telegram"></i></a>
            <a href="#google-play"><i class="fa-brands fa-google-play"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.upper-nav {
  background-color: var(--blue-color);
  color: var(--white-color);
  padding: 12px;

  a {
    color: white;
    font-size: 16px;
    transition: color 0.3s ease-in-out;
    display: block;
    padding: 4px 8px;

    &:hover {
      color: var(--dark-main-color);
    }
  }
}
</style>
