<script setup lang="ts">
import DarkThemeIcon from '@/assets/dark_theme.svg';
import LightThemeIcon from '@/assets/light_theme.svg';
import { useAppStore } from '@Core/data-access/app.state';
import SwitchToggle from '@Shared/components/SwitchToggle.vue';

const appStore = useAppStore();
function switchToggled() {
  appStore.toggleNightTheme();
}
</script>

<template>
  <span>© CleanupCrew 2023</span>
  <div class="theme-toggle-container">
    <LightThemeIcon class="theme-toggle-icon" />
    <SwitchToggle :active="appStore.nightTheme" @toggled="switchToggled" />
    <DarkThemeIcon class="theme-toggle-icon" />
  </div>
</template>

<style lang="scss" scoped>
span {
  color: var(--v-theme-primary);
  font-family: $primary-font-family;
  font-size: 10px;
  font-weight: 500;
}

.theme-toggle-container {
  display: flex;
  align-items: center;
  justify-content: space-between;

  .theme-toggle-icon {
    margin: 0 4px;
  }
}

.dark-theme {
  .theme-toggle-icon {
    fill: $primary-color-light;
  }
}

.light-theme {
  .theme-toggle-icon {
    fill: $primary-color-dark;
  }
}
</style>
