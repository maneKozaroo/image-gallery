<script setup lang="ts">
import { useArrayContainer } from "@/utils/arrayContainer";

import ImageGallery from "@/components/imageGallery/ImageGallery.vue";

const [mainImages, mainImageAdded, mainImageRemoved] = useArrayContainer();
</script>

<template>
  <main>
    <ImageGallery
      class="main-gallery"
      :images="mainImages.array"
      :image-limit="4"
      @remove-image-click="mainImageRemoved"
    />
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

main {
  display: flex;
  flex-direction: column;
  padding: var(--gutter-base);
}

.main-gallery {
  align-self: center;
  max-width: 557px;
  width: 100%;
}
</style>
