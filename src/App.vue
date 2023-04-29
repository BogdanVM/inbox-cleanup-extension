<script setup lang="ts">
import { RouterView } from 'vue-router';
</script>

<template>
  <header>
    <h1>Inbox Cleanup Service</h1>
    <img src="./assets/logo.svg" alt="logo" width="50" height="50" />
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
body {
  background: #003d5b;
}
header {
  display: flex;

  h1 {
    color: #d4fcc3;
    font-family: 'Unica One', cursive;
    font-size: 20px;
  }
}
</style>
