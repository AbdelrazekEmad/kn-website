<template>
  <!-- <div class="row">
    <div class="col-3">test 1</div>
    <div class="col-3">test 2</div>
    <div class="col-3">test 3</div>
    <div class="col-3">test 4</div>
  </div> -->

  <router-link to="/">home</router-link>
  |
  <router-link to="/blogs">blogs</router-link>
  |
  <router-link to="/categories">categories</router-link>

  <router-view>

  </router-view>
</template>

<script setup></script>

<style scoped></style>
