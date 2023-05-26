<script setup lang="ts">
import { InfoCircle } from '@Assets';
import { defineProps } from 'vue';

defineProps<{
  active: boolean;
  icon: string;
  name: string;
}>();
</script>

<template>
  <div class="selectable-option-wrapper">
    <div class="selectable-option" :class="active ? 'active' : 'not-active'">
      <div class="icon-wrapper">
        <component v-if="typeof icon === 'object'" :is="icon" />
        <img v-if="typeof icon === 'string'" :src="icon" alt="Icon" />
      </div>
      <div class="option-name">
        <h3>{{ name }}</h3>
      </div>
    </div>

    <div class="info-circle-wrapper">
      <InfoCircle class="info-circle" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.selectable-option-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;

  .selectable-option {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    width: calc(100% - 28px);
    height: 25px;

    .icon-wrapper {
      margin-right: 8px;
      display: flex;
    }

    .option-name {
      h3 {
        font-family: $primary-font-family;
        font-size: 12px;
        font-weight: 400;
        line-height: 12px;
        text-transform: uppercase;
      }
    }
  }

  .info-circle-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .info-circle {
      fill: $accent-color;
    }
  }
}

.selectable-option.active {
  background: var(--v-theme-primary);
  color: var(--v-theme-background);
}

.selectable-option.not-active {
  background: var(--v-theme-background);
  color: var(--v-theme-primary);
  border: 1px solid var(--v-theme-primary);
}
</style>
