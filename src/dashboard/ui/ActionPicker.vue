<script setup lang="ts">
import { PromotionalIcon, SocialIcon } from '@Assets';
import { SelectableOption } from '@Dashboard';
</script>

<template>
  <div class="action-picker">
    <p>Choose the desired actions from below.</p>
    <div class="options-wrapper">
      <SelectableOption :active="true" :icon="SocialIcon" name='Cleanup "SOCIAL"' />
      <SelectableOption :active="true" :icon="PromotionalIcon" name='Cleanup "Promotional"' />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.action-picker {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  p {
    color: var(--v-theme-primary);
    font-family: $primary-font-family;
    font-size: 12px;
    font-weight: 500;
    line-height: 12px;
    margin-bottom: 8px;
  }
}
</style>
