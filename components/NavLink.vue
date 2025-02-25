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
      'border-b-[3px] border-black cursor-default hover:!border-black hover:!text-black':
        active,
    }"
    class="transition-all hover:border-b-[3px] hover:border-primary hover:text-primary"
    >{{ label }}</a
  >
</template>
