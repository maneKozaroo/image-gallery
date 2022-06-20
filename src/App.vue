<script setup lang="ts">
import { useArrayContainer } from "@/utils/arrayContainer";

import ImageGallery from "@/components/imageGallery/ImageGallery.vue";

const [mainImages, mainImageAdded, mainImageRemoved] = useArrayContainer();
</script>

<template>
  <main>
    <ImageGallery :images="mainImages.array" :image-limit="4" />
  </main>
</template>

<style scoped>
@import "./assets/css/reset.css";
@import "./assets/css/variables.css";

html,
body,
#app,
main {
  font-family: Roboto, sans-serif;
}
</style>
