import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useAppStore = defineStore('app', () => {
  const nightTheme = ref(true);
  const loading = ref(false);

  const currentTheme = computed(() => (nightTheme.value ? 'dark-theme' : 'light-theme'));
  const isLoadingClass = computed(() => (loading.value ? 'is-loading' : ''));

  function toggleNightTheme() {
    nightTheme.value = !nightTheme.value;
  }

  function toggleLoading() {
    loading.value = !loading.value;
  }

  return {
    nightTheme,
    loading,
    currentTheme,
    isLoadingClass,
    toggleNightTheme,
    toggleLoading
  };
});
