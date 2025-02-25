<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <h1 class="mb-20 uppercase tracking-wider inline-block text-2xl font-light">
    {{ title }}
  </h1>
</template>
