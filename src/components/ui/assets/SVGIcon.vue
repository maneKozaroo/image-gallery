<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 24,
  },
});
</script>

<template>
  <svg :height="props.size" :width="props.size" viewBox="0 0 24 24">
    <path :d="props.path" />
  </svg>
</template>

<style scoped>
svg {
  display: block;
}
</style>
