<script setup lang="ts">
import { PromotionalIcon, SocialIcon } from '@Assets';
import { AvailableOptions, SelectableOption, type ChosenOptions } from '@Dashboard';
import { defineEmits, ref } from 'vue';

const emit = defineEmits(['action-picked']);

const optionsStatus = ref<ChosenOptions>({
  social: false,
  promotional: false
});

function toggleOption(option: keyof typeof optionsStatus.value) {
  optionsStatus.value[option] = !optionsStatus.value[option];
  emit('action-picked', optionsStatus.value);
}
</script>

<template>
  <div class="action-picker">
    <p>Choose the desired actions from below.</p>
    <div class="options-wrapper">
      <SelectableOption
        name='Cleanup "SOCIAL"'
        :active="optionsStatus.social"
        :icon="SocialIcon"
        :id="AvailableOptions.SOCIAL"
        @option-selected="toggleOption"
      />
      <SelectableOption
        name='Cleanup "Promotional"'
        :active="optionsStatus.promotional"
        :icon="PromotionalIcon"
        :id="AvailableOptions.PROMOTIONAL"
        @option-selected="toggleOption"
      />
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
