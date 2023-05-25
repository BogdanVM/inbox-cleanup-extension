<script setup lang="ts">
const props = defineProps<{
  onClick: () => void;
  loading: boolean;
  customDesign: boolean;
  attrs: {
    [key: string]: string | boolean;
  };
}>();
</script>

<template>
  <div class="button-container">
    <button
      :class="!props.customDesign ? 'default-btn' : 'custom-btn'"
      v-bind="props.attrs"
      @click="props.onClick"
    >
      <slot v-if="!props.loading" />
      <v-progress-circular v-if="props.loading" indeterminate theme="primary" width="2" size="24" />
    </button>
  </div>
</template>

<style lang="scss" scoped>
.button-container {
  button {
    border-radius: 6px;
    font-family: $primary-font-family;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }

  .default-btn {
    background: var(--v-theme-primary);
    color: var(--v-theme-background);
    font-size: 14px;
    font-weight: 900;
    line-height: 14px;
    padding: 8px 28px;
  }

  button[disabled] {
    opacity: 0.6;
  }
}
</style>
