<script setup lang="ts">
const props = defineProps<{
  images: string[];
  imageLimit: number;
}>();
</script>

<template>
  <div class="image-gallery">
    <header>内観写真（保管場所の様子がわかるもの）</header>

    {{ props }}
  </div>
</template>

<style scoped>
header {
  margin-bottom: var(--gutter-base);
}
</style>
