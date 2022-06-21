<script setup lang="ts">
import { computed, ref } from "vue";
import { useToggleState } from "@/utils/toggleState";

import GalleryImage from "@/components/ui/assets/GalleryImage.vue";
import ImageCropperOverlay from "@/components/imageGallery/ImageCropperOverlay.vue";
import ImageSelectButton from "@/components/imageGallery/ImageSelectButton.vue";
import SecondaryImages from "@/components/imageGallery/SecondaryImages.vue";

const props = defineProps<{
  images: string[];
  imageLimit: number;
}>();

const emit = defineEmits(["image-added", "remove-image-click"]);

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
  state: imageCropperOverlayStatus,
  turnTrue: showSelectionOverlay,
  turnFalse: hideSelectionOverlay,
} = useToggleState();

const handleImageSelectedEvent = (url: string) => {
  selectedImageUrl.value = url;

  showSelectionOverlay();
};

const handleImageCropCancellation = () => {
  hideSelectionOverlay();
};

const handleImageCropConfirmation = (url: string) => {
  emit("image-added", url);

  hideSelectionOverlay();
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

    <Teleport to="body">
      <ImageCropperOverlay
        v-if="imageCropperOverlayStatus"
        @image-crop-canceled="handleImageCropCancellation"
        @image-crop-confirmed="handleImageCropConfirmation"
        :selected-image-url="selectedImageUrl"
      />
    </Teleport>
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
