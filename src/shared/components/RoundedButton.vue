<script setup lang="ts">
const props = defineProps<{
  onClick: () => void;
  loading: boolean;
  attrs: {
    [key: string]: string | boolean;
  };
}>();
</script>

<template>
  <div class="button-container">
    <button v-bind="props.attrs" @click="props.onClick">
      <slot v-if="!props.loading" />
      <v-progress-circular v-if="props.loading" indeterminate theme="primary" width="2" size="24" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  button {
    border-radius: 6px;
    background: var(--v-theme-primary);
    color: var(--v-theme-background);
    font-family: $primary-font-family;
    font-size: 14px;
    line-height: 14px;
    font-weight: 900;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 28px;
    text-transform: uppercase;
  }

  button[disabled] {
    opacity: 0.6;
  }
}
</style>
