<script setup lang="ts">
import ExtensionFooter from '@Core/ui/ExtensionFooter.vue';
import ExtensionHeader from '@Core/ui/ExtensionHeader.vue';
import { RouterView } from 'vue-router';
</script>

<template>
  <header id="extensionHeader">
    <ExtensionHeader />
  </header>
  <RouterView />
  <footer id="extensionFooter">
    <ExtensionFooter />
  </footer>
</template>

<style lang="scss">
#app {
  background: $primary-color-dark;
  min-width: 350px;
  padding: 16px 12px !important;

  #extensionHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid $primary-color-light;
    padding-bottom: 12px;
  }

  #extensionFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid $primary-color-light;
    padding-top: 12px;
  }
}
</style>
