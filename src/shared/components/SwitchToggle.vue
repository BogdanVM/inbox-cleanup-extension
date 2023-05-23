<script setup lang="ts">
import { defineProps, ref } from 'vue';

defineEmits(['toggled']);
const props = defineProps<{ active: boolean }>();

const active = ref(props.active);
</script>

<template>
  <v-switch
    density="comfortable"
    inset
    class="custom-switch"
    theme="primary"
    v-model="active"
    @change="$emit('toggled', active)"
  ></v-switch>
</template>

<style lang="scss" scoped>
h1 {
  color: $primary-color-light;
  font-family: $logo-font-family;
  font-size: 20px;
}

.custom-switch {
  height: 12px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: var(--v-theme-primary);
}
</style>
