<script setup lang="ts">
import type { PropType } from "vue";

import GalleryImage from "@/components/ui/assets/GalleryImage.vue";

const props = defineProps({
  images: {
    type: Array as PropType<Array<string>>,
    default: () => [],
  },
});
</script>

<template>
  <div class="secondary-images">
    <GalleryImage
      v-for="(image, index) in props.images"
      class="image-gallery__image"
      @remove-image-click="$emit('remove-image-click', $event)"
      :key="index"
      :src="image"
    />
  </div>
</template>

<style scoped>
.secondary-images {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.33%;
  margin: 0 -8px;
  overflow-x: scroll;
  overflow-y: hidden;
}

.image-gallery__image {
  margin: 0 var(--gutter-small);
  position: relative;
}

.image-gallery__image img {
  aspect-ratio: 1 / 1;
  border-radius: 2px;
  display: block;
}
</style>
