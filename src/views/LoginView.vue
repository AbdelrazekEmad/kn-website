<template>
  <div class="login-layout">
    <AuthLayout>
      <div class="login-layout__content">
        <router-view></router-view>
      </div>
    </AuthLayout>
  </div>
</template>

<script>
import AuthLayout from '@/components/Auth/AuthLayout.vue';

export default {
  name: 'LoginView',
  components: {
    AuthLayout
  }
}
</script>


<style scoped lang="scss">
.login-layout {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
</style>