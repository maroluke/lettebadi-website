<script setup lang="ts">
const props = defineProps<{
  active: boolean;
  label: string;
  id: string;
}>();
</script>

<template>
  <a
    :href="`#${id}`"
    :class="{
      'border-b-2 border-primary text-primary': active,
    }"
    class="transition-all hover:border-b-2 hover:border-primary hover:text-primary"
    >{{ label }}</a
  >
</template>
