<script setup lang="ts">
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

    <slot />
  </label>
</template>

<style lang="scss" scoped></style>
