<script setup lang="ts">
import { Logo } from '@Assets';
</script>

<template>
  <h1>Inbox Cleanup Service</h1>
  <Logo class="extension-logo" />
</template>

<style lang="scss" scoped>
h1 {
  color: var(--v-theme-primary);
  font-family: $logo-font-family;
  font-size: 20px;
}

.extension-logo {
  width: 30px;
  height: 30px;
}

.dark-theme {
  .extension-logo {
    fill: $primary-color-light;
  }
}

.light-theme {
  .extension-logo {
    fill: $primary-color-dark;
  }
}
</style>
