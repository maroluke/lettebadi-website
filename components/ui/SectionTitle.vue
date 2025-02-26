<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <h1
    class="mb-4 inline-block text-2xl font-light uppercase tracking-wider 2xl:mb-20"
  >
    {{ title }}
  </h1>
</template>
