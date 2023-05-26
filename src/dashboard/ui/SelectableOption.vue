<script setup lang="ts">
import { InfoCircle, WarningIcon } from '@Assets';
import { useAppStore } from '@Core';
import { defineEmits, defineProps } from 'vue';

defineEmits(['option-selected']);
defineProps<{
  id: string;
  active: boolean;
  icon: string;
  name: string;
}>();

const appStore = useAppStore();
</script>

<template>
  <div class="selectable-option-wrapper">
    <div
      class="selectable-option"
      :class="active ? 'active' : 'not-active'"
      @click="$emit('option-selected', id)"
    >
      <div class="icon-wrapper">
        <component class="svg-icon" v-if="typeof icon === 'object'" :is="icon" />
        <img v-if="typeof icon === 'string'" :src="icon" alt="Icon" />
      </div>
      <div class="option-name">
        <h3>{{ name }}</h3>
      </div>
    </div>

    <div class="info-circle-wrapper">
      <v-tooltip
        activator="parent"
        location="top"
        id="info-tooltip"
        :class="appStore.nightTheme ? 'dark-overlay' : 'light-overlay'"
      >
        <WarningIcon class="warning-icon" />
        <p>
          Delete all the emails from the Promotion section. In order to save an email, you need to
          <u>attach another label to it.</u>
        </p>
        <h3>THIS OPERATION IS IRREVERSIBLE</h3>
      </v-tooltip>
      <InfoCircle class="info-circle" />
    </div>
  </div>
</template>

<style lang="scss">
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

  .svg-icon {
    stroke: var(--v-theme-background);
  }
}

.selectable-option.not-active {
  background: var(--v-theme-background);
  color: var(--v-theme-primary);
  border: 1px solid var(--v-theme-primary);

  .svg-icon {
    stroke: var(--v-theme-primary);
  }
}

#info-tooltip {
  &.v-overlay--active.light-overlay {
    background: rgba($primary-color-light, 0.7);
  }

  &.v-overlay--active.dark-overlay {
    background: rgba($primary-color-dark, 0.7);
  }

  .v-overlay__content {
    background: $accent-color;
    color: $primary-color-dark;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .warning-icon {
      fill: $primary-color-dark;
      width: 32px;
      height: 32px;
    }

    p {
      font-size: 12px;
      font-family: $primary-font-family;
      line-height: 12px;
      font-weight: 600;
      text-align: center;
      max-width: 200px;
      margin: 10px 0;
    }

    h3 {
      font-size: 16px;
      font-family: $primary-font-family;
      line-height: 16px;
      font-weight: 900;
      text-align: center;
    }
  }
}
</style>
