<script setup lang="ts">
const props = defineProps<{
  onClick: () => void;
}>();
</script>

<template>
  <div class="button-container">
    <button @click="props.onClick">
      <slot />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  border-radius: 6px;
  background: var(--v-theme-primary);
  color: var(--v-theme-background);
  font-family: $primary-font-family;
  font-size: 14px;
  line-height: 14px;
  font-weight: 900;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 28px;
    text-transform: uppercase;
  }
}
</style>
