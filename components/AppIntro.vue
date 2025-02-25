<script setup lang="ts">
import { useParallax, useScroll } from "@vueuse/core";

// Parallax
const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);

const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * 20}px) translateY(${
    y.value * 0.3 + parallax.roll * 20
  }px) scale(1.33)`,
}));
</script>

<template>
  <div
    ref="target"
    class="flex justify-between items-center w-full min-h-screen max-w-screen-3xl px-28 relative transition-all duration-300 ease-out"
  >
    <div class="w-1/2 mx-auto z-20">
      <AboutUs />
    </div>

    <FloatingWomen1
      :style="layer0"
      class="w-1/2 h-full text-primary z-0 transition-all duration-300 ease-out drop-shadow-light"
    />
  </div>
</template>
