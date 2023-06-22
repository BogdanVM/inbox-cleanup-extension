<script setup lang="ts">
import { ExtensionFooter, ExtensionHeader, useAppStore } from '@Core';
import { RouterView } from 'vue-router';

const appStore = useAppStore();
</script>

<template>
  <v-app theme="primary" full-height class="container" :class="[appStore.currentTheme]">
    <header id="extensionHeader">
      <ExtensionHeader />
    </header>
    <main id="extensionMain">
      <RouterView />
    </main>
    <footer id="extensionFooter">
      <ExtensionFooter />
    </footer>
  </v-app>
</template>

<style lang="scss">
$height: 400px;

#app {
  padding: 0 !important;
}
.container {
  background: var(--v-theme-background) !important;
  min-width: 350px !important;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 12px;

  #extensionHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--v-theme-primary);
    flex: 1;
  }

  #extensionFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid var(--v-theme-primary);
    flex: 1;
  }

  #extensionMain {
    flex: 2;
    display: flex;
    flex-direction: column;
  }
}

a {
  color: $accent-color !important;
}
</style>
