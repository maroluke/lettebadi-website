<script setup lang="ts">
import { MoveRight } from "lucide-vue-next";

const props = defineProps({
  label: String,
});
</script>

<template>
  <button
    class="group text-2xl text-start min-w-52 flex justify-between items-center w-full underline hover:text-primary"
  >
    <p class="whitespace-nowrap font-bold">{{ label }}</p>
    <MoveRight
      class="w-6 h-6 opacity-0 duration-300 -translate-x-4 transition-all group-hover:opacity-100 group-hover:translate-x-0"
    ></MoveRight>
  </button>
</template>
