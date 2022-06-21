<script setup lang="ts">
import { mdiClose } from "@mdi/js";

import SVGIcon from "@/components/ui/assets/SVGIcon.vue";
</script>

<template>
  <label class="close-button">
    <SVGIcon :path="mdiClose" :size="36" />
  </label>
</template>

<style scoped>
.close-button {
  background-color: rgb(255, 255, 255);
  border-radius: 999px;
  cursor: pointer;
  position: absolute;
  right: var(--gutter-small);
  top: var(--gutter-small);
}

.close-button svg {
  fill: rgb(103, 182, 171);
}
</style>
