<template>
  <div class="position-relative h-100 d-flex align-items-center justify-content-center gap-3">
    <div class="loader"></div>
    <div class="loader-icon">
      <img src="../assets/images/kn-loho.png" alt="" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loader-icon {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}

.loader {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border-top: 3px solid var(--main-color);
  border-right: 3px solid transparent;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
