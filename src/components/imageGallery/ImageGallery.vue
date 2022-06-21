<script setup lang="ts">
import { computed, ref } from "vue";

import GalleryImage from "@/components/ui/assets/GalleryImage.vue";
import ImageSelectButton from "@/components/imageGallery/ImageSelectButton.vue";
import SecondaryImages from "@/components/imageGallery/SecondaryImages.vue";
import { useToggleState } from "@/utils/toggleState";

const props = defineProps<{
  images: string[];
  imageLimit: number;
}>();

const emit = defineEmits(["remove-image-click"]);

const mainImage = computed(() => {
  return props.images[0];
});

const secondaryImages = computed(() => {
  return props.images.slice(1);
});

const buttonDisabled = computed(() => {
  return props.images.length >= props.imageLimit;
});

const selectedImageUrl = ref<string | null>(null);
const {
  state: imageSelectionOverlayStatus,
  turnTrue: showSelectionOverlay,
  turnFalse: hideSelectionOverlay,
} = useToggleState();

const handleImageSelectedEvent = (url: string) => {
  selectedImageUrl.value = url;

  showSelectionOverlay();
};
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

    <SecondaryImages
      v-if="secondaryImages.length"
      :images="secondaryImages"
      @remove-image-click="emit('remove-image-click', $event)"
    />

    <ImageSelectButton
      :disabled="buttonDisabled"
      @image-selected="handleImageSelectedEvent"
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

.main-image,
.secondary-images {
  margin-bottom: var(--gutter-base);
}
</style>
