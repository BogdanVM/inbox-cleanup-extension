<script setup lang="ts">
import CheckedIcon from '@/assets/checked.svg';
import { defineProps, reactive, ref } from 'vue';

defineEmits(['changed']);
defineProps<{
  name: string;
  id: string;
}>();

const state = reactive({
  selected: false
});
const selected = ref(state.selected);
</script>

<template>
  <label :for="id">
    <input
      type="checkbox"
      v-model="selected"
      :name="name"
      :id="id"
      @change="$emit('changed', selected)"
    />

    <CheckedIcon class="checked-svg" v-if="selected" />
    <slot />
  </label>
</template>

<style lang="scss" scoped>
label {
  font-family: $primary-font-family;
  font-size: 10px;
  line-height: 10px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    appearance: none;
    width: 12px;
    height: 12px;
    margin-right: 8px;

    &:before {
      content: '';
      display: block;
      width: 12px;
      height: 12px;
      border: 1px solid var(--v-theme-primary);
      border-radius: 3px;
      background: var(--v-theme-background);
    }
  }

  input:checked {
    &:before {
      background: var(--v-theme-primary);
    }
  }

  input:checked ~ .checked-svg {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    fill: $accent-color;
  }
}
</style>
