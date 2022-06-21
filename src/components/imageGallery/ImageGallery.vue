<script setup lang="ts">
import { computed } from "vue";

import GalleryImage from "@/components/ui/assets/GalleryImage.vue";

const props = defineProps<{
  images: string[];
  imageLimit: number;
}>();

const emit = defineEmits(["remove-image-click"]);

const mainImage = computed(() => {
  return props.images[0];
});
</script>

<template>
  <div class="image-gallery">
    <header>内観写真（保管場所の様子がわかるもの）</header>

    <GalleryImage
      v-if="mainImage"
      class="main-image"
      @remove-image-click="emit('remove-image-click', $event)"
      :src="mainImage"
    />
  </div>
</template>

<style scoped>
header {
  margin-bottom: var(--gutter-base);
}

.image-gallery {
  overflow: hidden;
}

.main-image {
  margin-bottom: var(--gutter-base);
}
</style>
