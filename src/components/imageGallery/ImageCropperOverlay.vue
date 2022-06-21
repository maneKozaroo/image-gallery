<script setup lang="ts">
import { defineProps, onMounted, onUnmounted, ref } from "vue";
import { addClass, removeClass } from "@/utils/bodyClassList";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.css";

import ButtonRound from "@/components/ui/controls/ButtonRound.vue";

const props = defineProps<{
  selectedImageUrl: string;
}>();

const emit = defineEmits(["imageCropCanceled", "imageCropConfirmed"]);

let cropper: Cropper | null = null;
const result = ref<HTMLImageElement | null>(null);

const userImage = ref<HTMLImageElement | null>(null);

const handleCropButtonClick = () => {
  const croppedCanvas = cropper?.getCroppedCanvas();

  if (result.value !== null && croppedCanvas) {
    croppedCanvas.toBlob((blob) => {
      if (blob) {
        const croppedImageUrl = URL.createObjectURL(blob);
        emit("imageCropConfirmed", croppedImageUrl);
      }
    });
  }
};

const initializeCropper = () => {
  if (userImage.value !== null) {
    cropper = new Cropper(userImage.value, {
      aspectRatio: 1,
      viewMode: 1,
    });
  }
};

const bodyClassName = "modal-open";

onMounted(() => {
  addClass(bodyClassName);

  initializeCropper();
});

onUnmounted(() => {
  removeClass(bodyClassName);
});
</script>

<template>
  <div class="image-selection-overlay">
    Crop image

    <div class="cropper">
      <img ref="userImage" :src="props.selectedImageUrl" />
    </div>

    <div ref="result" />

    <ButtonRound>
      <button @click="handleCropButtonClick">Crop</button>
    </ButtonRound>

    <ButtonRound class="cancel-button">
      <button @click="emit('imageCropCanceled')">Cancel</button>
    </ButtonRound>
  </div>
</template>

<style scoped>
.image-selection-overlay {
  background-color: rgb(255, 255, 255);
  bottom: 0;
  left: 0;
  overflow: auto;
  padding: var(--gutter-large);
  position: fixed;
  right: 0;
  top: 0;
  z-index: var(--overlay-z-index);
}

.cropper {
  margin: var(--gutter-large);
}

.cropper img {
  display: block;
  max-width: 75%;
}

.cancel-button {
  background-color: rgb(200, 200, 200);
  color: rgb(0, 0, 0);
  margin-left: var(--gutter-base);
}
</style>
