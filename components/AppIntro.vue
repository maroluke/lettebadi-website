<script setup lang="ts">
import { useParallax, useScroll } from '@vueuse/core';

// Parallax
const target = ref<HTMLElement | null>(null);
const parallax = reactive(useParallax(target));
const { y } = useScroll(window);
const isPhoneScreen = ref(false);

const xValue = ref(0);
const yValue = ref(0);

const layer0 = computed(() => ({
  transform: `translateX(${parallax.tilt * xValue.value}px) translateY(${
    y.value * yValue.value + parallax.roll * xValue.value
  }px)`,
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
  xValue.value = isPhoneScreen.value ? 10 : 20;
  yValue.value = isPhoneScreen.value ? 0.03 : 0.3;
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
    class="relative flex min-w-full flex-col items-center justify-between px-4 transition-all duration-300 ease-out 2xl:min-h-screen 2xl:max-w-screen-3xl 2xl:flex-row 2xl:px-28"
  >
    <div class="z-20 mx-auto max-w-screen-md 2xl:w-1/2">
      <AboutUs />
    </div>

    <div class="relative h-96 w-full 2xl:h-auto 2xl:w-1/2">
      <FloatingWomen1
        :style="layer0"
        class="absolute top-0 z-0 h-full w-full text-primary drop-shadow-light transition-all duration-300 ease-out 2xl:relative"
      />
    </div>
  </div>
</template>
