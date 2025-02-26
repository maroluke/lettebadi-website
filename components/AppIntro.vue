<script setup lang="ts">
import { useParallax, useScroll } from '@vueuse/core';

// Parallax
const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);
const isPhoneScreen = ref(false);

const xyValue = ref(0);
const xTilt = ref(0);
const yyValue = ref(0);
const yRoll = ref(0);

const layer0 = computed(() => ({
  transform: `translateX(${
    y.value * xyValue.value + parallax.tilt * xTilt.value
  }px) translateY(${y.value * yyValue.value + parallax.roll * yRoll.value}px) scale(1)`,
}));

// Check if device has a phone screen size
const checkPhoneScreen = () => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  isPhoneScreen.value = mediaQuery.matches;
  mediaQuery.addEventListener('change', (e) => {
    isPhoneScreen.value = e.matches;
  });
};

onMounted(() => {
  checkPhoneScreen();
  xyValue.value = isPhoneScreen.value ? 0.0 : 0.0;
  xTilt.value = isPhoneScreen.value ? 10 : 20;
  yyValue.value = isPhoneScreen.value ? 0.1 : 0.3;
  yRoll.value = isPhoneScreen.value ? 20 : 0;
});

onUnmounted(() => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  mediaQuery.removeEventListener('change', (e) => {
    isPhoneScreen.value = e.matches;
  });
});
</script>

<template>
  <div
    ref="target"
    class="relative flex min-w-full flex-col items-center justify-between px-4 transition-all duration-300 ease-out xl:min-h-screen xl:max-w-screen-3xl xl:flex-row xl:px-28"
  >
    <div class="z-20 mx-auto max-w-screen-md xl:w-1/2">
      <AboutUs />
    </div>

    <div class="relative h-96 w-full xl:h-auto xl:w-1/2">
      <FloatingWomen1
        :style="layer0"
        class="absolute -top-20 z-0 h-full w-full text-primary drop-shadow-light transition-all duration-300 ease-out xl:relative xl:-top-0"
      />
    </div>
  </div>
</template>
