import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const nightTheme = ref(true);
  const currentTheme = computed(() => (nightTheme.value ? 'dark-theme' : 'light-theme'));

  function toggleNightTheme() {
    nightTheme.value = !nightTheme.value;
  }

  return {
    nightTheme,
    toggleNightTheme,
    currentTheme
  };
});
