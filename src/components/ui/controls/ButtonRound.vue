<script setup lang="ts"></script>

<template>
  <label class="round-button">
    <slot />
  </label>
</template>

<style scoped>
.round-button {
  align-items: center;
  background-color: #00838f;
  border-radius: 999px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  flex-direction: row;
  padding: var(--gutter-base) var(--gutter-large);
}

.round-button[disabled="true"] {
  cursor: default;
  opacity: 0.3;
}

.round-button:deep(*) {
  cursor: pointer;
}

.round-button svg {
  fill: rgb(255, 255, 255);
  margin: 0 var(--gutter-small) 0 0;
}

.round-button input {
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
