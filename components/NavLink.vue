<script setup lang="ts">
import { cn } from '@/lib/utils';

const { active, label, id, compact } = defineProps<{
  active: boolean;
  label: string;
  id: string;
  compact?: boolean;
}>();

const handleClick = (event: Event) => {
  event.preventDefault();
  const targetElement = document.getElementById(id);
  if (targetElement) {
    const offset = 70; // Adjust this value to match the height of your fixed navigation bar
    const elementPosition = targetElement.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};
</script>

<template>
  <a
    :href="`#${id}`"
    :class="
      cn('bg-none transition-all', {
        'cursor-default border-b-[3px] border-black hover:!border-black hover:!text-black':
          active && !compact,
        'w-auto py-0 hover:border-b-[3px] hover:border-primary hover:bg-transparent hover:text-primary':
          !compact,
        'cursor-default hover:!bg-transparent hover:!text-black':
          active && compact,
        'w-full border-b p-4 text-2xl hover:bg-primary hover:text-white':
          compact,
      })
    "
    @click="handleClick"
    ><span
      :class="{
        'border-b-[3px] border-black': active && compact,
      }"
      >{{ label }}</span
    ></a
  >
</template>
