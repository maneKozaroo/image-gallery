<script setup lang="ts">
import { mdiCloudUploadOutline } from "@mdi/js";

import ButtonRound from "@/components/ui/controls/ButtonRound.vue";
import SVGIcon from "@/components/ui/assets/SVGIcon.vue";

const props = defineProps<{
  disabled: boolean;
}>();
const emit = defineEmits(["image-selected"]);

const handleImageInputChange = (event: Event) => {
  const input = event.target as HTMLInputElement;

  const files = input.files;

  if (files && files.length > 0) {
    const file = files[0];

    if (URL) {
      const url = URL.createObjectURL(file);

      emit("image-selected", url);
    } else if (FileReader) {
      const reader = new FileReader();

      reader.onload = function () {
        emit("image-selected", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<template>
  <ButtonRound class="image-select-button" :disabled="props.disabled">
    <SVGIcon :path="mdiCloudUploadOutline" />
    写真を追加する
    <input
      :disabled="props.disabled"
      type="file"
      accept="image/*"
      @change="handleImageInputChange"
    />
  </ButtonRound>
</template>

<style scoped>
.image-select-button {
  align-items: center;
  border-radius: 999px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  padding: var(--gutter-base) var(--gutter-large);
}

.image-select-button svg {
  fill: rgb(255, 255, 255);
  margin: 0 var(--gutter-small) 0 0;
}

.image-select-button input {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
