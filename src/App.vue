<script setup lang="ts">
import { useAppStore } from '@Core/data-access/app.state';
import ExtensionFooter from '@Core/ui/ExtensionFooter.vue';
import ExtensionHeader from '@Core/ui/ExtensionHeader.vue';
import { RouterView } from 'vue-router';

const appStore = useAppStore();
const appElement = document.getElementById('app');
if (appElement) {
  appElement.classList.add(appStore.currentTheme);
}
</script>

<template>
  <v-app theme="primary" full-height class="container" :class="appStore.currentTheme">
    <!-- <div class="container" :class="appStore.currentTheme"> -->
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
  <!-- </div> -->
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

  main {
    flex: 2;
    padding: 28px 12px;
    display: flex;
    flex-direction: column;
  }
}

a {
  color: $accent-color !important;
}
</style>
