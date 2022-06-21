<script setup lang="ts">
import { useToggleState } from "@/utils/toggleState";

import ButtonClose from "@/components/ui/controls/ButtonClose.vue";

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["remove-image-click"]);

const {
  state: hovered,
  turnTrue: handleMouseEnter,
  turnFalse: handleMouseLeave,
} = useToggleState();
</script>

<template>
  <div
    class="gallery-image"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <img :src="props.src" />

    <ButtonClose
      v-if="hovered"
      @click="emit('remove-image-click', props.src)"
    />
  </div>
</template>

<style scoped>
.gallery-image {
  position: relative;
}

.gallery-image img {
  border-radius: 2px;
}
</style>
