<script setup lang="ts">
import { cn } from "@/lib/utils";

const props = defineProps<{
  active: boolean;
  label: string;
  id: string;
  compact: boolean;
}>();
</script>

<template>
  <a
    :href="`#${id}`"
    :class="
      cn('transition-all bg-none', {
        'border-b-[3px] border-black cursor-default hover:!border-black hover:!text-black':
          active && !compact,
        'w-auto py-0 hover:border-b-[3px] hover:border-primary hover:text-primary hover:bg-transparent':
          !compact,
        'cursor-default hover:!bg-transparent hover:!text-black':
          active && compact,
        'w-full p-4 text-2xl border-b hover:text-white hover:bg-primary':
          compact,
      })
    "
    ><span
      :class="{
        'border-b-[3px] border-black': active && compact,
      }"
      >{{ label }}</span
    ></a
  >
</template>
