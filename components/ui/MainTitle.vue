<script setup lang="ts">
const props = defineProps({
  title: String,
});
</script>

<template>
  <h2 class="mb-10 text-4xl 2xl:text-6xl" v-html="title"></h2>
</template>
